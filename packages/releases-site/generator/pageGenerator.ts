import { createWriteStream, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { finished } from 'node:stream/promises';
import {
  changelogFilePath,
  contentDir,
  cratesWebUrl,
  npmWebUrl,
  publicDir,
  repositories,
  resolveBranch,
} from './config.ts';
import { releaseDateFormatter } from './dateFormat.ts';
import { buildCoreGroups, groupBySeries, splitPrereleases } from './groupedPage.ts';
import { parseAndSortChangelog } from './scripts/parse.ts';
import {
  getAllVersionsHead,
  renderSeriesHead,
  renderRelease,
  writeCorePage,
  writeCorePrereleasesPage,
  writePackageIndex,
  writeVersionPage,
  type PageLink,
} from './scripts/writePage.ts';
import type { PackageData, Release, RepoPackage, Repository, TableMetadata } from './types.ts';
import { escapeChangelogMarkdown } from './utils.ts';
import { writeLatestVersions } from './writeLatestVersions.ts';

export type ReleaseWithDate = Release & {
  date?: string;
  dateLabel?: string;
};

export type ReleasesByPackage = Map<string, ReleaseWithDate[]>;

interface PackageConfig {
  repo: Repository;
  pkg: RepoPackage;
  changelogUrl: string;
}

function getGitHubReleaseTagBase(repo: Repository, pkg: RepoPackage): string {
  return repo.tagsUsePackageName ? pkg.name : pkg.cratesPath || pkg.npmPath || pkg.name;
}

function buildGitHubReleaseUrl(repo: Repository, pkg: RepoPackage, version: string): string {
  const tagBase = encodeURIComponent(getGitHubReleaseTagBase(repo, pkg));
  return `${repo.repoUrl}/releases/tag/${tagBase}-v${version}`;
}

const cratesIoIcon = `<svg viewBox="0 0 14 16" fill="currentColor"><path d="M11.2468 4.54809L7 2L2.77581 4.53452L7.02308 6.98668L11.2468 4.54809ZM12 6.42265L8 8.73205V13.4L12 11V6.42265ZM2 6.396V11L6 13.4V8.7054L2 6.396ZM7 0L14 4V12L7 16L0 12V4L7 0Z" /></svg>`;
const npmIcon = `<svg viewBox="0 0 24 12" fill="currentColor"><path d="M4 4V8H6V5H7V8H8V4H4ZM9 4V9H11V8H13V4H9ZM12 5V7H11V5H12ZM14 4V8H16V5H17V8H18V5H19V8H20V4H14ZM3 3H21V9H12V10H8V9H3V3Z" /></svg>`;
const githubIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>`;

function buildExternalLinks(config: PackageConfig | undefined): PageLink[] {
  if (!config) {
    return [];
  }
  const links: PageLink[] = [];
  links.push({ label: 'GitHub', icon: githubIcon, href: config.repo.repoUrl });
  if (config.pkg.cratesPath) {
    links.push({
      label: 'crates.io',
      icon: cratesIoIcon,
      href: cratesWebUrl(config.pkg.cratesPath),
    });
  }
  if (config.pkg.npmPath) {
    links.push({ label: 'npm', icon: npmIcon, href: npmWebUrl(config.pkg.npmPath) });
  }
  return links;
}

const packageConfigs = new Map<string, PackageConfig>();
for (const repo of repositories) {
  for (const pkg of repo.packages) {
    packageConfigs.set(pkg.name, {
      repo,
      pkg,
      changelogUrl: `${repo.repoUrl}/blob/${resolveBranch(repo)}/${changelogFilePath(pkg)}`,
    });
  }
}

/** latestVersions.ts is always written: RepoPackages.astro imports it, so `astro check` needs it even when the pages are skipped */
export async function generatePagesAndTableData(
  packageData: PackageData,
  { pages = true }: { pages?: boolean } = {}
) {
  const releasesByPackage = buildReleasesByPackage(packageData);
  if (pages) {
    await writeTableData(packageData, releasesByPackage);
    await writePageData(packageData, releasesByPackage);
  }
  writeLatestVersions(packageData, releasesByPackage);
}

function buildReleasesByPackage(packageData: PackageData): ReleasesByPackage {
  const releasesByPackage: ReleasesByPackage = new Map();
  for (const [packageName, data] of Object.entries(packageData)) {
    if (!data.changelogs) {
      console.warn(`missing changelog ${packageName}`);
    }
    // escaped once here so no renderer escapes its own copy, which would show the
    // entities verbatim
    const releases = escapeReleaseNotes(
      withReleaseDates(parseAndSortChangelog(data.changelogs), data)
    );
    if (releases.length === 0) {
      console.warn(`missing releases ${packageName}`);
    }
    releasesByPackage.set(packageName, releases);
  }
  return releasesByPackage;
}

async function writePageData(
  packageData: PackageData,
  releasesByPackage: ReleasesByPackage
): Promise<void> {
  // stale pages from renamed or removed packages would otherwise keep shipping
  for (const entry of readdirSync(contentDir, { withFileTypes: true })) {
    if (entry.isDirectory() || entry.name.endsWith('.md')) {
      rmSync(join(contentDir, entry.name), { recursive: true, force: true });
    }
  }

  const streamFinalizers: Promise<void>[] = [];

  for (const packageName of Object.keys(packageData)) {
    // Flat layout: /release/<package>/... regardless of the source repo
    const workingDir = join(contentDir, packageName);
    mkdirSync(workingDir, { recursive: true });

    const releases = releasesByPackage.get(packageName) ?? [];
    const groups = groupBySeries(releases);
    const config = packageConfigs.get(packageName);
    const changelogUrl = config?.changelogUrl;

    writePackageIndex({
      packageName,
      description: config?.pkg.description,
      externalLinks: buildExternalLinks(config),
      releases,
      groups,
      workingDir,
    });

    const allVersionsStream = createWriteStream(join(workingDir, 'all-versions.md'));

    allVersionsStream.write(getAllVersionsHead(packageName, changelogUrl));

    for (const group of groups) {
      allVersionsStream.write(`\n\n${renderSeriesHead(group.series)}`);

      for (const release of group.releases) {
        const { version, notes, dateLabel } = release;

        allVersionsStream.write(`\n\n${renderRelease(release)}`);

        const releaseUrl = config
          ? buildGitHubReleaseUrl(config.repo, config.pkg, version)
          : changelogUrl;

        writeVersionPage({
          packageName,
          version,
          notes,
          releaseDateLabel: dateLabel,
          githubReleaseUrl: releaseUrl,
          workingDir,
        });
      }
    }

    allVersionsStream.end();
    streamFinalizers.push(finished(allVersionsStream));
  }

  const { stable, prereleases } = splitPrereleases(buildCoreGroups(releasesByPackage));
  writeCorePage({ groups: stable, workingDir: contentDir });
  writeCorePrereleasesPage({ groups: prereleases, workingDir: contentDir });

  await Promise.all(streamFinalizers);
}

async function writeTableData(
  packageData: PackageData,
  releasesByPackage: ReleasesByPackage
): Promise<void> {
  const tableMetadata: TableMetadata = {
    packages: {},
    repoList: [],
  };
  const repoList = new Set<string>();

  mkdirSync(publicDir, { recursive: true });
  const tableDataPath = join(publicDir, 'tableData.json');

  const stream = createWriteStream(tableDataPath);

  stream.write('{\n"tableMetadata": ');

  Object.entries(packageData).forEach(([packageName, data]) => {
    const key = data.group || packageName;
    if (!tableMetadata.packages[key]) {
      tableMetadata.packages[key] = [];
    }
    (tableMetadata.packages[key] as string[]).push(packageName);
    repoList.add(key);
  });
  tableMetadata.repoList = Array.from(repoList);

  stream.write(JSON.stringify(tableMetadata, null, 2));
  stream.write(',\n"tableData": [');

  let isFirst = true;

  for (const [packageName, data] of Object.entries(packageData)) {
    const repo = data.group || packageName;
    const releases = releasesByPackage.get(packageName) ?? [];

    for (const release of releases) {
      if (!isFirst) {
        stream.write(',');
      }

      // No changelog content here — the table fetches it on demand from the
      // release's own page, keeping this payload small.
      const { version, date } = release;
      stream.write(JSON.stringify({ name: packageName, repo, version, date }));
      isFirst = false;
    }
  }
  stream.write(']\n}');
  stream.end();
  await finished(stream);
}

function escapeReleaseNotes(releases: ReleaseWithDate[]): ReleaseWithDate[] {
  return releases.map((release) => ({ ...release, notes: escapeChangelogMarkdown(release.notes) }));
}

function withReleaseDates(releases: Release[], data: PackageData[string]): ReleaseWithDate[] {
  return releases.map((release) => {
    const date = getReleaseDate(release.version, data);

    if (!date) {
      return { ...release };
    }

    return {
      ...release,
      date,
      dateLabel: releaseDateFormatter.format(new Date(date)),
    };
  });
}

function getReleaseDate(version: string, data: PackageData[string]): string | undefined {
  return data.npmData?.versions?.[version] ?? data.cratesData?.versions?.[version];
}
