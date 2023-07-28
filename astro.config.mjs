import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generateTypeDoc } from 'starlight-typedoc';
import { existsSync } from 'node:fs';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';

const typeDocOptions = {
  entryFileName: 'index.md',
  flattenOutputFiles: true,
  hideGenerator: true,
  identifiersAsCodeBlocks: true,
  enumMembersFormat: 'table',
  propertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  plugin: ['typedoc-plugin-mdn-links'],
};

// Generates the JS API routes, check CONTRIBUTING.md for instructions
if (existsSync('packages/tauri/tooling/api/node_modules')) {
  await generateTypeDoc({
    entryPoints: ['packages/tauri/tooling/api/src/index.ts'],
    tsconfig: 'packages/tauri/tooling/api/tsconfig.json',
    output: '2/reference/js',
    typeDoc: {
      outputFileStrategy: 'modules',
      // Don't enable until https://github.com/HiDeoo/starlight-typedoc/pull/7 is merged
      // readme: 'packages/tauri/tooling/api/README.md',
      ...typeDocOptions,
    },
  });
} else {
  // console.log('JS API is not initialized. JS API routes will not be rendered.');
}

const plugins = [
  'app',
  'authenticator',
  'autostart',
  'cli',
  'clipboard-manager',
  'dialog',
  // 'fs',
  // 'fs-extra',
  // 'fs-watch',
  'global-shortcut',
  'http',
  // 'localhost',
  'log',
  // 'notification',
  'os',
  // 'persisted-scope',
  'positioner',
  'process',
  'shell',
  // 'single-instance',
  'sql',
  'store',
  'stronghold',
  // 'updater',
  // 'upload',
  'websocket',
  // 'window',
  'window-state',
];

// Generates the plugins JS API routes
if (existsSync('packages/plugins-workspace/node_modules')) {
  plugins.forEach(async (plugin) => {
    await generateTypeDoc({
      entryPoints: [
        `packages/plugins-workspace/plugins/${plugin}/guest-js/index.ts`,
      ],
      tsconfig: `packages/plugins-workspace/plugins/${plugin}/tsconfig.json`,
      output: `2/reference/plugin/${plugin}`,
      typeDoc: typeDocOptions,
    });
  });
} else {
  console
    .log
    // 'Plugins workspace is not initialized. Respective API routes will not be rendered.'
    ();
}

// https://astro.build/config
export default defineConfig({
  site: 'https://beta.tauri.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    starlight({
      title: 'Tauri',
      description: 'The cross-platform app building toolkit',
      logo: {
        dark: './src/assets/logo.svg',
        light: './src/assets/logo_light.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/tauri-apps/tauri',
        discord: 'https://discord.com/invite/tauri',
        mastodon: 'https://fosstodon.org/@TauriApps',
        twitter: 'https://twitter.com/TauriApps',
      },
      editLink: {
        baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/starlight',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Quick Start',
          items: [
            { label: 'Why Tauri?', link: '/2/guide/' },
            { label: 'Prerequisites', link: '/2/guide/prerequisites' },
            {
              label: 'Create a Project',
              link: '/2/guide/create/',
            },
            {
              label: 'Concepts & Best Practices',
              link: '#',
            },
          ],
        },
        {
          label: 'Workflows',
          collapsed: true,
          items: [
            {
              label: 'Develop',
              link: '#',
            },
            {
              label: 'Debug',
              link: '#',
            },
            {
              label: 'Test',
              link: '#',
            },
            {
              label: 'Build',
              link: '#',
            },
            {
              label: 'Distribute',
              link: '#',
            },
            {
              label: 'Troubleshooting',
              link: '/2/guide/troubleshoot',
            },
          ],
        },
        {
          label: 'Features',
          collapsed: true,
          items: [
            {
              label: 'App Storage',
              link: '#',
            },
            {
              label: 'Commands',
              link: '#',
            },
            {
              label: 'Multi-Window',
              link: '#',
            },
            {
              label: 'Updater',
              link: '#',
            },
            {
              label: 'Window Customization',
              link: '#',
            },
            {
              label: 'More Features',
              link: '/2/guide/list',
            },
          ],
        },
        {
          label: 'Recipes',
          collapsed: true,
          items: [
            {
              label: 'App Storage',
              link: '#',
            },
            {
              label: 'Commands',
              link: '#',
            },
            {
              label: 'Multi-Window',
              link: '#',
            },
            {
              label: 'Updater',
              link: '#',
            },
            {
              label: 'Window Customization',
              link: '#',
            },
            {
              label: 'More Features',
              link: '/2/guide/list',
            },
          ],
        },
        {
          label: 'References',
          collapsed: false,
          items: [
            {
              label: 'Command Line Interface (CLI)',
              link: '#',
            },
            {
              label: 'Tauri Config',
              link: '#',
            },
            {
              label: 'JavaScript API',
              autogenerate: { directory: '2/reference', collapsed: false },
            },
            {
              label: 'Rust API',
              link: '#',
            },
          ],
        },
        {
          label: 'Tauri v1 (temporary)',
          collapsed: true,
          autogenerate: { directory: '1' },
        },
      ],
      locales,
      lastUpdated: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      langs: ['powershell'],
    },
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: { ariaHidden: true, tabIndex: -1, class: 'heading-link' },
        },
      ],
    ],
  },
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
