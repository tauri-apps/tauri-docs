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

async function fetchJson(url: string, headers = new Headers()) {
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
    throw Object.assign(new Error(`Failed ${url}: ${res.status} ${res.statusText}`), {
      rateLimited: isRateLimited(res),
    });
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
      if (!/(^|\/)tauri-plugin-/.test(name) || results.has(name)) {
        continue;
      }
      results.set(name, {
        source: 'npm',
        name,
        description: p.description || '',
        created_at: p.date || '',
        // `links` is sparse - many packages expose only `links.npm`
        repository: cleanRepoUrl(p.links?.repository || p.links?.homepage || ''),
        npm: npmPackageUrl(name),
        downloads: obj.downloads?.monthly,
      });
    }
    from += size;
    // `text=` matches fuzzily (descriptions, keywords), so j.total is far
    // larger than the set of real name matches and name matches keep turning
    // up deep into the ranking (pages with zero hits are followed by pages
    // with several). Crawl to npm's 10k cap on `from`, ~40 requests.
    if (from >= Math.min(j.total || 0, 10_000 - size)) {
      break;
    }
    await sleep(1001);
  }
  return [...results.values()];
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
    // an exhausted token would null out every remaining repo, one 90s retry
    // cycle at a time, and still pass the star guard - fail the run instead
    if ((e as { rateLimited?: boolean }).rateLimited) {
      throw e;
    }
    // a 404 here is normal (repo renamed or deleted); anything else is worth seeing
    console.warn(`  no stars for ${ownerRepo}: ${(e as Error).message}`);
    return null;
  }
}

async function addNpmCreatedDates(items: Resource[]) {
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
      console.log(`  dates ${done}/${npmOnly.length}`);
    }
    await sleep(100);
  }
}

async function addGithubStars(items: Resource[]) {
  if (!GITHUB_TOKEN) {
    console.warn(
      'GITHUB_TOKEN not set - skipping star counts (unauthenticated rate limits are too low).'
    );
    return;
  }

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

  // registry.npmjs.org and api.github.com have independent rate budgets, and
  // the two passes touch different fields, so they can run side by side
  await Promise.all([addNpmCreatedDates(items), addGithubStars(items)]);

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
