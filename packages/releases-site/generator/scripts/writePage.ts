import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { basePath, corePageSlug, corePrereleasesSlug, note, versionPageHref } from '../config.ts';
import { demoteNotesHeadings, type CoreGroup, type CoreRelease } from '../groupedPage.ts';
import { escapeChangelogMarkdown } from '../utils.ts';

export type VersionListEntry = {
  version: string;
  dateLabel?: string;
};

export type PageLink = {
  label: string;
  href: string;
  /** Push this link to the far end of the links row */
  align?: 'end';
};

// Generated pages are plain .md, so Starlight's `external` icon is copied from
// components-internals/Icons.ts (not an exported module) and wrapped like <Icon>.
const externalIcon =
  '<svg class="external-icon" aria-hidden="true" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z"/><path d="M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z"/></svg>';

// Single-quoted YAML scalar; single quotes are escaped by doubling
function yaml(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

function frontmatterBlock(fields: string[]): string {
  return ['---', note, ...fields, '---'].join('\n');
}

function renderPageLinks(links: PageLink[]): string {
  if (links.length === 0) {
    return '';
  }
  const anchors = links.map(({ label, href, align }) => {
    const external = href.startsWith('http');
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
    const cls = align === 'end' ? ' class="align-end"' : '';
    const icon = external ? ` ${externalIcon}` : '';
    return `<a href="${href}"${cls}${attrs}>${label}${icon}</a>`;
  });
  return `<div class="release-links">${anchors.join('\n')}</div>`;
}

export function renderReleaseDateLabel(date: string | undefined): string {
  if (!date) {
    return '';
  }

  return `<div class="release-date-row"><small class="release-date">${date}</small></div>`;
}

/**
 * write an individual page for each version
 */
export function writeVersionPage(params: {
  packageName: string;
  version: string;
  notes: string;
  releaseDateLabel?: string;
  githubReleaseUrl?: string;
  workingDir: string;
}): void {
  const { packageName, version, notes, releaseDateLabel, githubReleaseUrl, workingDir } = params;

  const frontmatter = frontmatterBlock([
    `title: ${yaml(`${packageName}@${version}`)}`,
    `description: ${yaml(`${packageName} ${version} release notes`)}`,
    `slug: ${yaml(`${packageName}/v${version}`)}`,
    'pagefind: false',
    'editUrl: false',
    'prev: false',
    'next: false',
  ]);

  const header = renderPageLinks([
    { label: `← ${packageName} releases`, href: `${basePath}/${packageName}/` },
    ...(githubReleaseUrl
      ? [{ label: 'View on GitHub', href: githubReleaseUrl, align: 'end' as const }]
      : []),
  ]);

  const date = renderReleaseDateLabel(releaseDateLabel);
  const content = [frontmatter, header, date, notes].filter(Boolean).join('\n\n');
  const fileName = `v${version}.md`;

  writeFileSync(join(workingDir, fileName), content);
}

export function getAllVersionsHead(packageName: string, changelogUrl: string | undefined): string {
  const frontmatter = frontmatterBlock([
    `title: ${yaml(`${packageName} full changelog`)}`,
    `description: ${yaml(`All changelog entries for ${packageName}`)}`,
    `slug: ${yaml(`${packageName}/all-versions`)}`,
    'tableOfContents:',
    '  minHeadingLevel: 2',
    '  maxHeadingLevel: 2',
    'pagefind: false',
    'editUrl: false',
    'prev: false',
    'next: false',
  ]);

  const header = renderPageLinks([
    { label: `← ${packageName} releases`, href: `${basePath}/${packageName}/` },
    ...(changelogUrl
      ? [{ label: 'CHANGELOG.md on GitHub', href: changelogUrl, align: 'end' as const }]
      : []),
  ]);

  return `${frontmatter}\n\n${header}\n\n`;
}

/**
 * The version, then one `####` section per package that published it — the
 * package heading has to outrank the notes' own sections. Only the minor above
 * carries a date; a release is identified by its version alone.
 */
function renderCoreRelease(release: CoreRelease): string {
  const bodies = release.entries.map((entry) => {
    const notes = demoteNotesHeadings(escapeChangelogMarkdown(entry.notes), 2);
    // repeats the heading above, but earns a unique anchor id; styled back out of the way
    const heading = `#### ${entry.pkgLabel} <small class="package-version">${entry.version}</small>`;
    // one block per package, or the repeated "Bug Fixes" headings have no visible
    // owner. Blank lines keep the markdown between the tags parsed as markdown.
    return ['<div class="package-block">', heading, notes, '</div>'].filter(Boolean).join('\n\n');
  });
  return [`### ${release.version}`, ...bodies].filter(Boolean).join('\n\n');
}

const githubReleasesLink: PageLink = {
  label: 'Releases on GitHub',
  href: 'https://github.com/tauri-apps/tauri/releases',
  align: 'end',
};

/** the grouped core changelog: one section per minor, one sub-section per version */
export function writeCorePage(params: { groups: CoreGroup[]; workingDir: string }): void {
  writeGroupedPage({
    ...params,
    slug: corePageSlug,
    title: 'Tauri Core Releases',
    description: 'Release notes for tauri, @tauri-apps/api, and the Tauri CLI, grouped by version',
    intro: '`tauri`, `@tauri-apps/api`, and the Tauri CLI, grouped by version.',
    links: [
      { label: '2.0 Prereleases', href: `${basePath}/${corePrereleasesSlug}/` },
      githubReleasesLink,
    ],
  });
}

/** the same page for the 2.0 alphas, betas and rcs — two thirds of the releases,
 * split off to keep the main page from stalling a browser */
export function writeCorePrereleasesPage(params: {
  groups: CoreGroup[];
  workingDir: string;
}): void {
  writeGroupedPage({
    ...params,
    slug: corePrereleasesSlug,
    title: 'Tauri 2.0 Prereleases',
    description:
      'Release notes for the alpha, beta, and release candidate versions that led to Tauri 2.0',
    intro: 'The alpha, beta, and release candidate versions that led up to Tauri 2.0.',
    links: [{ label: '← Core Releases', href: `${basePath}/${corePageSlug}/` }, githubReleasesLink],
  });
}

function writeGroupedPage(params: {
  groups: CoreGroup[];
  workingDir: string;
  slug: string;
  title: string;
  description: string;
  intro: string;
  links: PageLink[];
}): void {
  const { groups, workingDir, slug, title, description, intro, links } = params;

  const frontmatter = frontmatterBlock([
    `title: ${yaml(title)}`,
    `description: ${yaml(description)}`,
    `slug: ${yaml(slug)}`,
    // minors and their releases only — the levels below repeat "Bug Fixes" on
    // every release and would bury the versions
    'tableOfContents:',
    '  minHeadingLevel: 2',
    '  maxHeadingLevel: 3',
    'pagefind: false',
    'editUrl: false',
    'prev: false',
    'next: false',
  ]);

  const header = renderPageLinks(links);

  const sections = groups.map((group) => {
    const date = renderReleaseDateLabel(group.date);
    // `.x` so the badge reads as the line of releases under it, not a version of
    // its own. custom.scss also keys the grouped-page style block off `.minor-head`
    const head = ['<div class="minor-head">', `## ${group.minor}.x`, date, '</div>']
      .filter(Boolean)
      .join('\n\n');
    const releases = group.releases.map(renderCoreRelease).join('\n\n');
    return [head, releases].join('\n\n');
  });

  const content = [frontmatter, header, intro, ...sections].join('\n\n');

  // a slug can carry a path, so the file needs the directories under it
  const file = join(workingDir, `${slug}.md`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

/**
 * write the per-package landing page listing all versions
 */
export function writePackageIndex(params: {
  packageName: string;
  description?: string;
  externalLinks: PageLink[];
  releases: VersionListEntry[];
  workingDir: string;
}): void {
  const { packageName, description, externalLinks, releases, workingDir } = params;

  const frontmatter = frontmatterBlock([
    `title: ${yaml(packageName)}`,
    `description: ${yaml(description ?? `${packageName} releases`)}`,
    `slug: ${yaml(packageName)}`,
    'editUrl: false',
    'prev: false',
    'next: false',
  ]);

  const header = renderPageLinks(externalLinks);

  const versionList = releases
    .map(({ version, dateLabel }) => {
      const link = `[v${version}](${versionPageHref(packageName, version)})`;
      return dateLabel ? `- ${link} <small class="release-date">${dateLabel}</small>` : `- ${link}`;
    })
    .join('\n');

  const content = [
    frontmatter,
    header,
    ...(description ? [description] : []),
    `[Full changelog](${basePath}/${packageName}/all-versions/)`,
    '## Versions',
    versionList,
  ]
    .filter(Boolean)
    .join('\n\n');

  writeFileSync(join(workingDir, 'index.md'), content);
}
