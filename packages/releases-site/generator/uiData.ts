import type { ReleasesByPackage } from './pageGenerator.js';
import type { PackageData, RepoPackage, Repository } from './types.js';

interface LatestVersionsEntry {
  crate?: string;
  npm?: string;
  dateLabel?: string;
}

type LatestVersionsMap = Record<string, LatestVersionsEntry>;

export interface PackageLink {
  name: string;
  href: string;
}

export interface VersionPill {
  label: 'crate' | 'npm';
  version: string;
}

export interface HomeSummaryPackage {
  name: string;
  description: string;
  links: PackageLink[];
  versions: VersionPill[];
  latestReleaseDateLabel?: string;
}

export interface HomeSummaryRepo {
  displayName: string;
  repoUrl: string;
  repoSlug: string;
  packages: HomeSummaryPackage[];
}

function getLatestVersionKey(repoName: string, packageName: string): string {
  return `${repoName}/${packageName}`;
}

function buildPackageLinks(pkg: RepoPackage): PackageLink[] {
  const links: PackageLink[] = [];

  if (pkg.cratesPath) {
    const slug = pkg.cratesPath.split('/').pop() ?? pkg.cratesPath;
    links.push({
      name: `${pkg.name} (crate)`,
      href: `https://crates.io/crates/${slug}`,
    });
  }

  if (pkg.npmPath) {
    links.push({
      name: `${pkg.name} (npm)`,
      href: `https://www.npmjs.com/package/${pkg.npmPath}`,
    });
  }

  return links;
}

function buildVersionPills(
  pkg: RepoPackage,
  latestVersions: LatestVersionsEntry | undefined
): VersionPill[] {
  const pills: VersionPill[] = [];

  if (pkg.cratesPath && latestVersions?.crate) {
    pills.push({ label: 'crate', version: latestVersions.crate });
  }

  if (pkg.npmPath && latestVersions?.npm) {
    pills.push({ label: 'npm', version: latestVersions.npm });
  }

  return pills;
}

export function buildHomeSummaryRepos(
  repositories: Repository[],
  latestVersions: LatestVersionsMap
): HomeSummaryRepo[] {
  return repositories.map((repo) => ({
    displayName: repo.displayName,
    repoUrl: repo.repoUrl,
    repoSlug: repo.repoUrl.replace('https://github.com/', '').replace(/\/$/, ''),
    packages: repo.packages.map((pkg) => ({
      name: pkg.name,
      description: pkg.description,
      links: buildPackageLinks(pkg),
      versions: buildVersionPills(pkg, latestVersions[getLatestVersionKey(repo.name, pkg.name)]),
      latestReleaseDateLabel: latestVersions[getLatestVersionKey(repo.name, pkg.name)]?.dateLabel,
    })),
  }));
}

// The version shown per registry is the latest changelog entry, which can
// briefly be ahead of what the registry has actually published.
export function buildLatestVersions(
  packageData: PackageData,
  releasesByPackage: ReleasesByPackage
): LatestVersionsMap {
  const latestVersions: LatestVersionsMap = {};

  for (const [packageName, data] of Object.entries(packageData)) {
    const latestReleaseEntry = releasesByPackage.get(packageName)?.[0];
    const latestRelease = latestReleaseEntry?.version;
    if (!latestReleaseEntry || !latestRelease) {
      continue;
    }

    const key = getLatestVersionKey(data.group || packageName, packageName);
    const entry: LatestVersionsEntry = {};

    if (data.cratesData.name) {
      entry.crate = latestRelease;
    }

    if (data.npmData.name) {
      entry.npm = latestRelease;
    }

    if (latestReleaseEntry.dateLabel) {
      entry.dateLabel = latestReleaseEntry.dateLabel;
    }

    if (entry.crate || entry.npm) {
      latestVersions[key] = entry;
    }
  }

  return latestVersions;
}

export function formatLatestVersionsModule(latestVersions: LatestVersionsMap): string {
  const lines = [
    'export const latestVersions: Record<string, { crate?: string; npm?: string; dateLabel?: string }> = {',
  ];

  for (const [key, value] of Object.entries(latestVersions).sort(([a], [b]) =>
    a.localeCompare(b)
  )) {
    const parts = Object.entries(value)
      .map(([registry, version]) => `${registry}: "${version}"`)
      .join(', ');
    lines.push(`  "${key}": { ${parts} },`);
  }

  lines.push('};', '');
  return lines.join('\n');
}
