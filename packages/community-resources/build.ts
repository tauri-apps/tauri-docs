import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  assertNoDataLoss,
  cleanRepoUrl,
  githubRepo,
  isOfficial,
  mergeRegistries,
  npmPackageUrl,
  sortByCreatedDesc,
  type Resource,
  type Snapshot,
} from './transform.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.resolve(__dirname, '../../src/data/communityResources.json');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null;
const query = 'tauri-plugin-';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// GitHub answers 403 (not 429) when a token is exhausted, so status alone
// can't tell a rate limit from a genuine permission error
function isRateLimited(res: Response) {
  return (
    res.status === 429 || (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0')
  );
}

async function fetchJson(url: string, headers?: Headers) {
  if (!headers) {
    headers = new Headers();
  }
  if (!headers.has('User-Agent')) {
    headers.set(
      'User-Agent',
      'tauri-docs-plugins-discover (https://github.com/tauri-apps/tauri-docs)'
    );
  }

  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(30_000) });
    if (res.ok) {
      return res.json();
    }
    if ((isRateLimited(res) || res.status >= 500) && attempt < 4) {
      const retryAfter = Number(res.headers.get('retry-after')) || attempt * 15;
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
        version: c.max_version || c.newest_version || '',
        created_at: c.created_at || '',
        repository: cleanRepoUrl(c.repository || c.homepage || ''),
        license: c.license || '',
        homepage: c.homepage || '',
        crates_io: `https://crates.io/crates/${c.name}`,
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
  const results: Resource[] = [];
  const size = 250;
  let from = 0;
  while (true) {
    const url = `https://registry.npmjs.org/-/v1/search?text=${query}&size=${size}&from=${from}`;
    const j = await fetchJson(url);
    const objects = j.objects || [];
    if (objects.length === 0) {
      break;
    }
    let pageMatches = 0;
    for (const obj of objects) {
      const p = obj.package;
      const name = p.name;
      if (!name) {
        continue;
      }
      if (!/(^|\/)tauri-plugin-/.test(name)) {
        continue;
      }
      pageMatches++;
      results.push({
        source: 'npm',
        name,
        description: p.description || '',
        version: p.version || '',
        created_at: p.date || '',
        // `links` is sparse - many packages expose only `links.npm`
        repository: cleanRepoUrl(p.links?.repository || p.links?.homepage || ''),
        npm: npmPackageUrl(name),
      });
    }
    from += size;
    // `text=` matches fuzzily (descriptions, keywords), so j.total is far
    // larger than the set of real name matches, and npm caps `from` at 10k
    // anyway. Results are relevance-sorted, so once a whole page has no
    // name match the tail is only noise - stop there.
    if (pageMatches === 0 || from >= Math.min(j.total || 0, 10_000 - size)) {
      break;
    }
    await sleep(1001);
  }
  return results;
}

// the npm search API only exposes the last-publish date; the real creation
// date lives in the package's registry document under time.created
async function fetchNpmCreatedDate(name: string) {
  try {
    const j = await fetchJson(`https://registry.npmjs.org/${encodeURIComponent(name)}`);
    return j.time?.created || null;
  } catch {
    return null;
  }
}

async function fetchGithubStars(ownerRepo: string) {
  const headers = new Headers({ Accept: 'application/vnd.github+json' });
  if (GITHUB_TOKEN) {
    headers.append('Authorization', `token ${GITHUB_TOKEN}`);
  }
  try {
    const j = await fetchJson(`https://api.github.com/repos/${ownerRepo}`, headers);
    return j.stargazers_count ?? null;
  } catch (e) {
    // a 404 here is normal (repo renamed or deleted); anything else is worth seeing
    console.warn(`  no stars for ${ownerRepo}: ${(e as Error).message}`);
    return null;
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

  const merged = mergeRegistries(crates, npm);
  const items = merged.filter((item) => !isOfficial(item.repository));
  console.log(
    `Merged to ${merged.length} entries, ${merged.length - items.length} official dropped.`
  );

  const npmOnly = items.filter((item) => item.source === 'npm');
  console.log(`Fetching creation dates for ${npmOnly.length} npm-only packages...`);
  let done = 0;
  for (const item of npmOnly) {
    const created = await fetchNpmCreatedDate(item.name);
    if (created) {
      item.created_at = created;
    }
    done++;
    if (done % 50 === 0) {
      console.log(`  ${done}/${npmOnly.length}`);
    }
    await sleep(100);
  }

  if (GITHUB_TOKEN) {
    console.log('Fetching GitHub star counts...');
    const starsCache = new Map<string, number | null>();
    for (const item of items) {
      const ownerRepo = githubRepo(item.repository);
      if (!ownerRepo) {
        continue;
      }
      if (!starsCache.has(ownerRepo)) {
        starsCache.set(ownerRepo, await fetchGithubStars(ownerRepo));
        await sleep(100);
      }
      item.stars = starsCache.get(ownerRepo) ?? null;
    }
  } else {
    console.warn(
      'GITHUB_TOKEN not set - skipping star counts (unauthenticated rate limits are too low).'
    );
  }

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
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
  console.log(`Wrote ${resources.length} resources to ${OUTPUT_FILE}`);
}

run().catch((e) => {
  console.error('Error generating resources:', e);
  process.exit(1);
});
