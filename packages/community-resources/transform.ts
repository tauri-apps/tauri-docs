export interface Resource {
  source: 'crates' | 'npm';
  name: string;
  description: string;
  created_at?: string;
  repository: string | null;
  npm?: string;
  crates_io?: string;
  stars?: number | null;
  // crates.io reports the last 90 days, npm the last 30; a merged row keeps the crate's figure
  downloads?: number | null;
}

export interface Snapshot {
  generated: string;
  resources: Resource[];
}

// registry metadata is author-controlled; only http(s) URLs are safe in an href
export function cleanRepoUrl(url: unknown): string | null {
  if (typeof url !== 'string' || !url) {
    return null;
  }
  const cleaned = url.replace(/^git\+/, '').replace(/\.git$/, '');
  return /^https?:\/\//.test(cleaned) ? cleaned : null;
}

export function githubRepo(url: string | null): string | null {
  if (!url) {
    return null;
  }
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.hostname !== 'github.com') {
    return null;
  }
  const [owner, repo] = parsed.pathname.replace(/^\//, '').split('/');
  return owner && repo ? `${owner}/${repo}` : null;
}

// official plugins have their own docs pages - match the owner segment rather
// than the whole URL, so third-party repos merely containing the string stay
export function isOfficial(repository: string | null): boolean {
  return githubRepo(repository)?.split('/')[0].toLowerCase() === 'tauri-apps';
}

// npmjs.com serves scoped packages at /package/@scope/name; percent-encoding
// the separator collapses it into a single path segment
export function npmPackageUrl(name: string): string {
  return `https://www.npmjs.com/package/${name}`;
}

function repositoriesAgree(a: string | null, b: string | null): boolean {
  return !a || !b || a.toLowerCase() === b.toLowerCase();
}

/**
 * Merge by exact name, or by the documented naming convention: a crate
 * `tauri-plugin-X` publishes its JS bindings as `tauri-plugin-X-api`.
 *
 * The convention match additionally requires the repositories not to disagree -
 * monorepos share one repo URL across different plugins, so neither the suffix
 * nor the URL is a safe key on its own. Scoped packages (`@scope/plugin-X`)
 * are not matched and stay separate rows.
 */
export function mergeRegistries(crates: Resource[], npm: Resource[]): Resource[] {
  const map = new Map<string, Resource>();
  for (const crate of crates) {
    map.set(crate.name, { ...crate });
  }

  for (const pkg of npm) {
    let existing = map.get(pkg.name);
    if (!existing && pkg.name.endsWith('-api')) {
      const candidate = map.get(pkg.name.slice(0, -'-api'.length));
      if (candidate && repositoriesAgree(candidate.repository, pkg.repository)) {
        existing = candidate;
      }
    }
    if (existing) {
      // some crates publish both `tauri-plugin-x` and `tauri-plugin-x-api` on
      // npm; the exact name wins regardless of which the search returns first
      if (pkg.name === existing.name || !existing.npm) {
        existing.npm = pkg.npm;
      }
      existing.description ||= pkg.description;
      existing.repository ||= pkg.repository;
      existing.downloads ??= pkg.downloads;
    } else {
      map.set(pkg.name, { ...pkg });
    }
  }

  return [...map.values()];
}

function createdTime(date?: string): number {
  const time = date ? new Date(date).getTime() : 0;
  return Number.isFinite(time) ? time : 0;
}

export function sortByCreatedDesc(items: Resource[]): Resource[] {
  return [...items].sort((a, b) => createdTime(b.created_at) - createdTime(a.created_at));
}

/**
 * A partial crawl or an exhausted GitHub token both produce a technically valid
 * but much poorer file. The sync workflow commits whatever lands here, so bail
 * out rather than let a degraded run overwrite good data.
 */
export function assertNoDataLoss(previous: Snapshot | null, resources: Resource[]): void {
  if (!previous) {
    return;
  }

  const before = previous.resources.length;
  if (before > 0 && resources.length < before * 0.9) {
    throw new Error(
      `Refusing to write: ${resources.length} resources, down from ${before}. Likely a partial crawl.`
    );
  }

  const countStars = (list: Resource[]) => list.filter((r) => typeof r.stars === 'number').length;
  const starsBefore = countStars(previous.resources);
  const starsNow = countStars(resources);
  if (starsBefore > 0 && starsNow < starsBefore * 0.8) {
    throw new Error(
      `Refusing to write: star counts dropped from ${starsBefore} entries to ${starsNow}. Check GITHUB_TOKEN.`
    );
  }
}
