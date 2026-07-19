import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { basePath, note } from '../config.js';

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
    'tableOfContents: false',
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
    'tableOfContents: false',
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
    'tableOfContents: false',
    'editUrl: false',
    'prev: false',
    'next: false',
  ]);

  const header = renderPageLinks(externalLinks);

  const versionList = releases
    .map(({ version, dateLabel }) => {
      const link = `[v${version}](${basePath}/${packageName}/v${version}/)`;
      return dateLabel ? `- ${link} <small class="release-date">${dateLabel}</small>` : `- ${link}`;
    })
    .join('\n');

  const content = [
    frontmatter,
    header,
    ...(description ? [description] : []),
    `[Full changelog on a single page](${basePath}/${packageName}/all-versions/)`,
    '## Versions',
    versionList,
  ]
    .filter(Boolean)
    .join('\n\n');

  writeFileSync(join(workingDir, 'index.md'), content);
}
