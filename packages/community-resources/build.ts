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
  return url.replace(/^git\+/, '').replace(/\.git$/, '');
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

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Failed ${url}: ${res.status} ${res.statusText}`);
  }
  return res.json();
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
}

// https://docs.npmjs.com/policies/open-source-terms
async function fetchNpm() {
  const results: ResultsItem[] = [];
  const size = 250;
  const url = `https://registry.npmjs.org/-/v1/search?text=tauri-plugin-&size=${size}`;
  const j = await fetchJson(url);
  if (!j.objects) return results;
  for (const obj of j.objects) {
    const p = obj.package;
    const name = p.name;
    if (!name) {
      continue;
    }
    if (!/(^|\/)tauri-plugin-/.test(name)) {
      continue;
    }
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
  return results;
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
    const existing = map.get(n.name);
    if (existing) {
      existing.npm = n.npm;
      existing.version_npm = n.version;
      existing.description = existing.description || n.description;
      existing.repository = existing.repository || n.repository;
    } else {
      map.set(n.name, { ...n });
    }
  }

  const items = Array.from(map.values()).sort((a, b) => {
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
