import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.resolve(__dirname, '../../src/data/communityResources.json');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || null;
const query = 'tauri-plugin-';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function cleanRepoUrl(url: string) {
  if (!url) {
    return null;
  }
  const cleaned = url.replace(/^git\+/, '').replace(/\.git$/, '');
  // registry metadata is author-controlled; only keep http(s) URLs
  if (!/^https?:\/\//.test(cleaned)) {
    return null;
  }
  return cleaned;
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
    if ((res.status === 429 || res.status >= 500) && attempt < 4) {
      const retryAfter = Number(res.headers.get('retry-after')) || attempt * 15;
      console.warn(`  ${res.status} for ${url} - retrying in ${retryAfter}s`);
      await sleep(retryAfter * 1000);
      continue;
    }
    throw new Error(`Failed ${url}: ${res.status} ${res.statusText}`);
  }
}

// https://crates.io/data-access
async function fetchCrates() {
  const results = [];
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

interface ResultsItem {
  source: string;
  name: string;
  description: string;
  version: string;
  version_npm?: string;
  created_at?: string;
  repository: string | null;
  npm?: string;
  crates_io?: string;
  stars?: number | null;
}

// https://docs.npmjs.com/policies/open-source-terms
async function fetchNpm() {
  const results: ResultsItem[] = [];
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
      const repo = p.links && p.links.repository ? p.links.repository : p.repository;
      results.push({
        source: 'npm',
        name,
        description: p.description || '',
        version: p.version || '',
        created_at: p.date || '',
        repository: cleanRepoUrl(repo || p.links?.homepage || ''),
        npm: `https://www.npmjs.com/package/${encodeURIComponent(name)}`,
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
  } catch (e) {
    return null;
  }
}

function extractGithubRepo(url: string) {
  if (!url) {
    return null;
  }
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com') {
      return null;
    }
    const parts = u.pathname.replace(/^\//, '').split('/');
    if (parts.length < 2) {
      return null;
    }
    return `${parts[0]}/${parts[1]}`;
  } catch (e) {
    return null;
  }
}

async function fetchGithubStars(ownerRepo: string) {
  if (!ownerRepo) {
    return null;
  }
  const url = `https://api.github.com/repos/${ownerRepo}`;
  const headers = new Headers();
  headers.append('Accept', 'application/vnd.github+json');
  if (GITHUB_TOKEN) {
    headers.append('Authorization', `token ${GITHUB_TOKEN}`);
  }
  try {
    const j = await fetchJson(url, headers);
    return j.stargazers_count ?? null;
  } catch (e) {
    return null;
  }
}

async function run() {
  console.log('Fetching crates.io packages...');
  const crates = await fetchCrates();
  console.log(`Found ${crates.length} crates matching prefix.`);

  console.log('Fetching npm packages...');
  const npm = await fetchNpm();
  console.log(`Found ${npm.length} npm packages matching prefix.`);

  const map = new Map();

  for (const c of crates) {
    map.set(c.name, { ...c });
  }
  for (const n of npm) {
    // Merge by exact name, or by the documented naming convention: a crate
    // `tauri-plugin-X` publishes its JS bindings as `tauri-plugin-X-api`.
    // The convention match additionally requires the repositories not to
    // disagree - monorepos share one repo URL across different plugins, so
    // neither the suffix nor the URL is a safe key on its own. Scoped
    // packages (`@scope/plugin-X`) are not matched and stay separate rows.
    let existing = map.get(n.name);
    if (!existing && n.name.endsWith('-api')) {
      const candidate = map.get(n.name.slice(0, -'-api'.length));
      if (
        candidate &&
        (!candidate.repository ||
          !n.repository ||
          candidate.repository.toLowerCase() === n.repository.toLowerCase())
      ) {
        existing = candidate;
      }
    }
    if (existing) {
      existing.npm = n.npm;
      existing.version_npm = n.version;
      existing.description = existing.description || n.description;
      existing.repository = existing.repository || n.repository;
    } else {
      map.set(n.name, { ...n });
    }
  }

  const items: ResultsItem[] = Array.from(map.values());

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
      const ownerRepo = extractGithubRepo(item.repository || '');
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

  items.sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return dateB - dateA;
  });

  const outputData = {
    generated: new Date().toISOString(),
    count: items.length,
    resources: items,
  };

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(outputData, null, 2), 'utf8');
  console.log(`Wrote ${items.length} resources to ${OUTPUT_FILE}`);
}

run().catch((e) => {
  console.error('Error generating resources:', e);
  process.exit(1);
});
