import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  assertNoDataLoss,
  chunk,
  cleanRepoUrl,
  isOfficial,
  isPlaceholder,
  mergeRegistries,
  missingNames,
  NPM_NAME,
  npmResource,
  resourceFromNpmDoc,
  sortByCreatedDesc,
  type Resource,
  type Snapshot,
} from './transform.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.resolve(__dirname, '../../src/data/communityResources.json');

const query = 'tauri-plugin-';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// GitHub answers 403 (not 429) when a token is exhausted, so status alone
// can't tell a rate limit from a genuine permission error
function isRateLimited(res: Response) {
  return (
    res.status === 429 || (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0')
  );
}

async function fetchJson(url: string, headers = new Headers()) {
  if (!headers.has('User-Agent')) {
    headers.set(
      'User-Agent',
      'tauri-docs-plugins-discover (https://github.com/tauri-apps/tauri-docs)'
    );
  }

  for (let attempt = 1; ; attempt++) {
    let res: Response;
    try {
      res = await fetch(url, { headers, signal: AbortSignal.timeout(30_000) });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      // timeouts, resets and non-JSON bodies are as transient as a 5xx
      if (attempt >= 4) throw e;
      const retryIn = attempt * 15;
      console.warn(`  ${(e as Error).message} for ${url} - retrying in ${retryIn}s`);
      await sleep(retryIn * 1000);
      continue;
    }
    if ((isRateLimited(res) || res.status >= 500) && attempt < 4) {
      // cap the server's Retry-After so a single wait stays well inside the workflow timeout
      const retryAfter = Math.min(Number(res.headers.get('retry-after')) || attempt * 15, 60);
      console.warn(`  ${res.status} for ${url} - retrying in ${retryAfter}s`);
      await sleep(retryAfter * 1000);
      continue;
    }
    throw new Error(`Failed ${url}: ${res.status} ${res.statusText}`);
  }
}

// https://crates.io/data-access
async function fetchCrates(): Promise<Resource[]> {
  const results: Resource[] = [];
  let page = 1;
  const per_page = 100;
  while (true) {
    const url = `https://crates.io/api/v1/crates?page=${page}&per_page=${per_page}&q=${query}`;
    const j = await fetchJson(url);
    if (!j.crates || j.crates.length === 0) {
      break;
    }
    for (const c of j.crates) {
      if (!c.name || !c.name.startsWith(query)) {
        continue;
      }
      results.push({
        source: 'crates',
        name: c.name,
        description: c.description || '',
        created_at: c.created_at || '',
        repository: cleanRepoUrl(c.repository || c.homepage || ''),
        crates_io: `https://crates.io/crates/${c.name}`,
        downloads: c.recent_downloads,
        downloads_window: '90d',
      });
    }
    if (j.meta && j.meta.total <= page * per_page) break;
    page++;
    await sleep(1001);
  }
  return results;
}

// https://docs.npmjs.com/policies/open-source-terms
async function fetchNpm(): Promise<Resource[]> {
  // relevance paging is not stable, so the same package shows up on several pages
  const results = new Map<string, Resource>();
  const size = 250;
  let from = 0;
  while (true) {
    const url = `https://registry.npmjs.org/-/v1/search?text=${query}&size=${size}&from=${from}`;
    const j = await fetchJson(url);
    const objects = j.objects || [];
    if (objects.length === 0) {
      break;
    }
    for (const obj of objects) {
      const p = obj.package;
      const name = p.name;
      if (!name) {
        continue;
      }
      if (!NPM_NAME.test(name) || results.has(name)) {
        continue;
      }
      results.set(
        name,
        npmResource({
          name,
          description: p.description,
          created_at: p.date,
          // `links` is sparse - many packages expose only `links.npm`
          repository: p.links?.repository || p.links?.homepage,
          downloads: obj.downloads?.monthly,
        })
      );
    }
    from += size;
    // `text=` matches fuzzily (descriptions, keywords), so j.total is far
    // larger than the set of real name matches and name matches keep turning
    // up deep into the ranking (pages with zero hits are followed by pages
    // with several). Crawl to npm's 10k cap on `from + size`, 40 requests.
    if (from >= Math.min(j.total || 0, 10_000)) {
      break;
    }
    await sleep(1001);
  }
  return [...results.values()];
}

async function fetchNpmDoc(name: string) {
  try {
    return await fetchJson(`https://registry.npmjs.org/${encodeURIComponent(name)}`);
  } catch {
    return null;
  }
}

// undocumented CouchDB view, but the only exact prefix listing npm has; it
// cannot list scoped names, and npm has restricted it before, so callers must
// treat a failure as "search only"
async function fetchNpmAllDocs(): Promise<string[]> {
  const url = new URL('https://replicate.npmjs.com/_all_docs');
  url.searchParams.set('startkey', JSON.stringify(query));
  url.searchParams.set('endkey', JSON.stringify(`${query}￰`));
  const j = await fetchJson(url.toString());
  return (j.rows || []).map((row: { id: string }) => row.id);
}

async function fetchNpmDownloads(names: string[]) {
  const downloads = new Map<string, number>();
  for (const batch of chunk(names, 128)) {
    const j = await fetchJson(
      `https://api.npmjs.org/downloads/point/last-month/${batch.join(',')}`
    );
    // a single name gets the point object itself rather than a map keyed by name
    const points: Record<string, { downloads?: unknown }> =
      batch.length === 1 ? { [batch[0]]: j } : j;
    for (const [name, point] of Object.entries(points)) {
      if (typeof point?.downloads === 'number') {
        downloads.set(name, point.downloads);
      }
    }
    await sleep(1001);
  }
  return downloads;
}

// search ranking is not guaranteed to surface every name, so cross-check the
// unscoped names against the exact listing and fetch whatever search missed
async function fetchNpmCompletion(found: Resource[]): Promise<Resource[]> {
  let ids: string[];
  try {
    ids = await fetchNpmAllDocs();
  } catch (e) {
    console.warn(
      `  replicate _all_docs unavailable, npm stays search-only: ${(e as Error).message}`
    );
    return [];
  }

  const missing = missingNames(found, ids);
  const added: Resource[] = [];
  for (const name of missing) {
    const item = resourceFromNpmDoc(await fetchNpmDoc(name));
    if (item) {
      added.push(item);
    }
    await sleep(100);
  }
  const downloads = await fetchNpmDownloads(added.map((item) => item.name));
  for (const item of added) {
    item.downloads = downloads.get(item.name);
  }
  console.log(
    `Completion pass: ${missing.length} unscoped names missed by search, ${added.length} added.`
  );
  return added;
}

// the npm search API only exposes the last-publish date; the real creation
// date lives in the package's registry document under time.created
async function addNpmCreatedDates(items: Resource[], alreadyDated: Set<string>) {
  const npmOnly = items.filter((item) => item.source === 'npm' && !alreadyDated.has(item.name));
  console.log(`Fetching creation dates for ${npmOnly.length} npm-only packages...`);
  let done = 0;
  for (const item of npmOnly) {
    const created = (await fetchNpmDoc(item.name))?.time?.created;
    if (created) {
      item.created_at = created;
    }
    done++;
    if (done % 50 === 0) {
      console.log(`  dates ${done}/${npmOnly.length}`);
    }
    await sleep(100);
  }
}

async function readPrevious(): Promise<Snapshot | null> {
  try {
    return JSON.parse(await fs.readFile(OUTPUT_FILE, 'utf8')) as Snapshot;
  } catch {
    return null;
  }
}

async function run() {
  const previous = await readPrevious();

  console.log('Fetching crates.io packages...');
  const crates = await fetchCrates();
  console.log(`Found ${crates.length} crates matching prefix.`);

  console.log('Fetching npm packages...');
  const npm = await fetchNpm();
  console.log(`Found ${npm.length} npm packages matching prefix.`);
  const completion = await fetchNpmCompletion(npm);

  const merged = mergeRegistries(
    crates,
    [...npm, ...completion].filter((pkg) => !isPlaceholder(pkg.description))
  );
  const items = merged.filter((item) => !isOfficial(item.repository));
  console.log(
    `Merged to ${merged.length} entries, ${merged.length - items.length} official dropped.`
  );

  await addNpmCreatedDates(items, new Set(completion.map((pkg) => pkg.name)));

  const resources = sortByCreatedDesc(items);
  assertNoDataLoss(previous, resources);

  // the timestamp alone would make every weekly run a diff, and the sync
  // workflow would open a pull request for it
  if (previous && JSON.stringify(previous.resources) === JSON.stringify(resources)) {
    console.log(`No changes to ${resources.length} resources - leaving the file untouched.`);
    return;
  }

  const output: Snapshot = { generated: new Date().toISOString(), resources };
  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  // trailing newline so the file is already prettier-clean and CI needs no format pass
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${resources.length} resources to ${OUTPUT_FILE}`);
}

run().catch((e) => {
  console.error('Error generating resources:', e);
  process.exit(1);
});
