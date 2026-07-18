import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { note } from '../config.js';

export type VersionListEntry = {
  version: string;
  dateLabel?: string;
};

export type PageLink = {
  label: string;
  href: string;
};

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
  const anchors = links.map(({ label, href }) => {
    const attrs = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}"${attrs}>${label}</a>`;
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
    { label: `← ${packageName} releases`, href: `/release/${packageName}/` },
    ...(githubReleaseUrl ? [{ label: 'View on GitHub', href: githubReleaseUrl }] : []),
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
    { label: `← ${packageName} releases`, href: `/release/${packageName}/` },
    ...(changelogUrl ? [{ label: 'CHANGELOG.md on GitHub', href: changelogUrl }] : []),
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
      const link = `[v${version}](/release/${packageName}/v${version}/)`;
      return dateLabel ? `- ${link} <small class="release-date">${dateLabel}</small>` : `- ${link}`;
    })
    .join('\n');

  const content = [
    frontmatter,
    header,
    ...(description ? [description] : []),
    `[Full changelog on a single page](/release/${packageName}/all-versions/)`,
    '## Versions',
    versionList,
  ]
    .filter(Boolean)
    .join('\n\n');

  writeFileSync(join(workingDir, 'index.md'), content);
}
