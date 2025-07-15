import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import semver from 'semver';

const note =
  '\n# NOTE: This file is auto-generated in packages/releases-generator/build.ts\n# For corrections please edit it directly';
const packages = [
  {
    name: 'tauri',
    url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/crates/tauri/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/tauri/releases/tag',
  },
  {
    name: '@tauri-apps/api',
    url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/packages/api/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/tauri/releases/tag',
  },
  {
    name: 'tauri-cli',
    url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/crates/tauri-cli/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/tauri/releases/tag',
  },
  {
    name: '@tauri-apps/cli',
    url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/packages/cli/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/tauri/releases/tag',
  },
  {
    name: 'tauri-bundler',
    url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/crates/tauri-bundler/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/tauri/releases/tag',
  },
  {
    name: 'wry',
    url: 'https://raw.githubusercontent.com/tauri-apps/wry/dev/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/wry/releases/tag',
  },
  {
    name: 'tao',
    url: 'https://raw.githubusercontent.com/tauri-apps/tao/dev/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/tao/releases/tag',
  },
  {
    name: 'autostart',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/autostart/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'barcode-scanner',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/barcode-scanner/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'biometric',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/biometric/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'cli',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/cli/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'clipboard-manager',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/clipboard-manager/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'deep-link',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/deep-link/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'dialog',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/dialog/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'fs',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/fs/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'global-shortcut',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/global-shortcut/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'http',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/http/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'log',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/log/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'nfc',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/nfc/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'notification',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/notification/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'opener',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/opener/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'os',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/os/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'positioner',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/positioner/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'process',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/process/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'shell',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/shell/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'sql',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/sql/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'store',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/store/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'stronghold',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/stronghold/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'updater',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/updater/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'upload',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/upload/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'websocket',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/websocket/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
  {
    name: 'window-state',
    url: 'https://raw.githubusercontent.com/tauri-apps/plugins-workspace/v2/plugins/window-state/CHANGELOG.md',
    tag: 'https://github.com/tauri-apps/plugins-workspace/releases/tag',
    group: 'plugins-workspace',
  },
];

const baseDir = '../../src/content/docs/release';

let latestVersions: {
  [key: string]: string;
} = {};

async function generator() {
  for (const pkg of packages) {
    const response = await fetch(pkg.url);
    const responseText: string = await response.text();
    const releases = responseText
      .split('## \\[')
      .filter((item) => !item.includes('# Changelog'))
      .map((section) => {
        const [version, ...c] = section.split('\n');
        const contents = c.join('\n');
        return {
          version: version.replace('\\[', '').replace(']', ''),
          notes: contents,
        };
      })
      .filter(({ version }) => !version.includes('Not Published'));

    mkdirSync(join(baseDir, pkg.group || '', pkg.name), { recursive: true });

    releases.sort((a, b) => {
      return semver.rcompare(a.version, b.version);
    });
    //
    /*
     * Write files for each version
     */
    const len = releases.length;
    for (let i = 0; i < len; i++) {
      /**
       * Deal with next-prev labels
       */
      const thisVersion = releases[i].version;

      if (i === 0) {
        // latest version
        latestVersions[pkg.name] = `v${thisVersion}`;
      }
      //
      const pageFrontmatter = [
        note,
        `title: '${pkg.name}@${thisVersion}'`,
        `description: '${thisVersion}'`,
        `slug: 'release/${pkg.name}/v${thisVersion}'`,
        `tableOfContents: false`,
        `editUrl: 'https://github.com/tauri-apps/tauri-docs/blob/v2/packages/releases-generator/build.ts'`,
        'pagefind: false',
        'sidebar:',
        `  label: ${thisVersion}`,
        `  order: ${i}`,
      ];

      const frontmatter = ['---', ...pageFrontmatter, '---'].join('\n');
      //
      const indexLink = `[Return](/release/)`;
      const viewInGitHub = `<a href="${pkg.tag}/${pkg.name}-v${thisVersion}">View on GitHub</a>`;
      const linksDiv = `<div style="margin-bottom:3rem; display: flex; justify-content: space-between; align-items: center"><span>${indexLink}</span><span>${viewInGitHub}</span></div>`;
      //

      writeFileSync(
        join(baseDir, pkg.group || '', pkg.name, `v${thisVersion}.mdx`),
        `${frontmatter}\n${linksDiv}\n${entitify(releases[i].notes)}`
      );
    }
  }

  // Generate index page
  const extraNote =
    '# To quickly preview changes, you can edit this file, them make sure you copy the changes over the source build.ts script\n';
  const indexPage = [
    '---',
    note,
    extraNote,
    `title: 'Tauri Core Ecosystem Releases'`,
    `editUrl: 'https://github.com/tauri-apps/tauri-docs/packages/releases-generator/build.ts'`,
    'tableOfContents: false',
    'sidebar:',
    '  label: Overview',
    '  order: -1000000',
    '---',
  ].join('\n');

  const mainLinks = [
    { title: 'tauri', key: 'tauri' },
    { title: '@tauri-apps/api', key: '@tauri-apps/api' },
    { title: 'tauri-cli (Rust)', key: 'tauri-cli' },
    { title: '@tauri-apps/cli (JavaScript)', key: '@tauri-apps/cli' },
    { title: 'tauri-bundler', key: 'tauri-bundler' },
    { title: 'wry', key: 'wry' },
    { title: 'tao', key: 'tao' },
  ];

  const pluginLinks = [
    { title: 'autostart', key: 'autostart' },
    { title: 'barcode-scanner', key: 'barcode-scanner' },
    { title: 'biometric', key: 'biometric' },
    { title: 'cli', key: 'cli' },
    { title: 'clipboard-manager', key: 'clipboard-manager' },
    { title: 'deep-link', key: 'deep-link' },
    { title: 'dialog', key: 'dialog' },
    { title: 'fs', key: 'fs' },
    { title: 'global-shortcut', key: 'global-shortcut' },
    { title: 'http', key: 'http' },
    { title: 'log', key: 'log' },
    { title: 'nfc', key: 'nfc' },
    { title: 'notification', key: 'notification' },
    { title: 'opener', key: 'opener' },
    { title: 'os', key: 'os' },
    { title: 'positioner', key: 'positioner' },
    { title: 'process', key: 'process' },
    { title: 'shell', key: 'shell' },
    { title: 'sql', key: 'sql' },
    { title: 'store', key: 'store' },
    { title: 'stronghold', key: 'stronghold' },
    { title: 'updater', key: 'updater' },
    { title: 'upload', key: 'upload' },
    { title: 'websocket', key: 'websocket' },
    { title: 'window-state', key: 'window-state' },
  ];

  const generateLinkCards = (links: any[], latestVersions: { [x: string]: any }) => {
    return links
      .map(
        (link) => `
      <LinkCard 
        key="${link.key}" 
        title="${link.title}" 
        description="${latestVersions[link.key]}"
        href="/release/${link.key}/${latestVersions[link.key]}/" 
      />
    `
      )
      .join('\n');
  };

  const indexPageContent = `
import { LinkCard, CardGrid } from '@astrojs/starlight/components';

export const latestVersions = ${JSON.stringify(latestVersions)};

export const mainLinks = ${JSON.stringify(mainLinks)};
export const pluginLinks = ${JSON.stringify(pluginLinks)};

  <CardGrid>
    ${generateLinkCards(mainLinks, latestVersions)}
  </CardGrid>

  ## Plugins 
  <CardGrid>
    ${generateLinkCards(pluginLinks, latestVersions)}
  </CardGrid>
`;

  writeFileSync(join(baseDir, 'index.mdx'), `${indexPage}\n${indexPageContent}`);
}

function entitify(str: string): string {
  return str
    .replace(/[&<>"']/g, function (entity) {
      switch (entity) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&#39;';
        default:
          return entity;
      }
    })
    .replace(/\$\{/g, '$\\{');
}

if (process.env.CONTEXT === 'production' || process.env.HEAD?.startsWith('release-pages')) {
  generator();
} else {
  console.info('Skipping `/release` pages build');
}
