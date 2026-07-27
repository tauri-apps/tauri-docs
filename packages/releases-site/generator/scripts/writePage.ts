import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { basePath, corePageSlug, note, versionPageHref } from '../config.ts';
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

// Starlight's native `external` icon. Generated pages are plain .md (no
// component support), so the path data is copied from
// @astrojs/starlight/components-internals/Icons.ts (not an exported module)
// and wrapped the same way its <Icon> component renders.
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

export function renderReleaseDateLabel(date: string | undefined, extraClass = ''): string {
  if (!date) {
    return '';
  }

  const cls = ['release-date-row', extraClass].filter(Boolean).join(' ');
  return `<div class="${cls}"><small class="release-date">${date}</small></div>`;
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
 * A release: the version, then one `####` section per package that published
 * it. The package heading has to outrank the notes' own sections, or a reader
 * scrolling through "Bug Fixes / Dependencies" loses track of which package
 * they are reading.
 *
 * The release is dated by its first publish, so a package only carries a date
 * of its own when it got to this version later — `@tauri-apps/api` reached
 * 2.11.1 six weeks after `tauri` did, and that gap should be visible rather
 * than flattened into the heading above.
 */
function renderCoreRelease(release: CoreRelease): string {
  const date = renderReleaseDateLabel(release.dateLabel, 'version-date');
  const bodies = release.entries.map((entry) => {
    const notes = demoteNotesHeadings(escapeChangelogMarkdown(entry.notes), 2);
    const lagged =
      entry.dateLabel && entry.dateLabel !== release.dateLabel
        ? renderReleaseDateLabel(entry.dateLabel, 'package-date')
        : '';
    // the version repeats the heading above — it stays for a unique anchor id
    // and for anyone scanning mid-page, but it is styled back out of the way
    const heading = `#### ${entry.pkgLabel} <small class="package-version">${entry.version}</small>`;
    // a package and its notes need to be one object on the page: every package
    // in a release repeats the same "Bug Fixes / Dependencies" categories, so
    // without something enclosing them a reader mid-scroll cannot tell whose
    // they are. Blank lines keep the markdown between the tags parsed as markdown.
    return ['<div class="package-block">', heading, lagged, notes, '</div>']
      .filter(Boolean)
      .join('\n\n');
  });
  return [`### ${release.version}`, date, ...bodies].filter(Boolean).join('\n\n');
}

/**
 * write the grouped changelog of the core packages: one section per minor,
 * one sub-section per version
 */
export function writeCorePage(params: { groups: CoreGroup[]; workingDir: string }): void {
  const { groups, workingDir } = params;

  const frontmatter = frontmatterBlock([
    `title: ${yaml('Tauri Core Releases')}`,
    `description: ${yaml('Grouped release notes for tauri, @tauri-apps/api, and the CLI')}`,
    `slug: ${yaml(corePageSlug)}`,
    // A minor per top-level entry, its releases nested under it. Deeper levels
    // stay out: those are the packages and their notes sections, which repeat
    // ("Bug Fixes", "Dependencies") on every release and would bury the versions.
    'tableOfContents:',
    '  minHeadingLevel: 2',
    '  maxHeadingLevel: 3',
    'pagefind: false',
    'editUrl: false',
    'prev: false',
    'next: false',
  ]);

  const header = renderPageLinks([
    {
      label: 'Releases on GitHub',
      href: 'https://github.com/tauri-apps/tauri/releases',
      align: 'end',
    },
  ]);

  const sections = groups.map((group) => {
    const date = renderReleaseDateLabel(group.date, 'minor-date');
    // the minor marks the section it opens rather than heading it — the releases
    // inside are what you read — so it and its date share one line as a badge
    const head = ['<div class="minor-head">', `## ${group.minor}`, date, '</div>']
      .filter(Boolean)
      .join('\n\n');
    const releases = group.releases.map(renderCoreRelease).join('\n\n');
    return [head, releases].join('\n\n');
  });

  const content = [frontmatter, header, ...sections].join('\n\n');

  mkdirSync(workingDir, { recursive: true });
  writeFileSync(join(workingDir, `${corePageSlug}.md`), content);
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
