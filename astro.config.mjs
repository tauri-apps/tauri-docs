import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generateTypeDoc } from 'starlight-typedoc';
import { existsSync } from 'node:fs';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';

const typeDocOptions = {
  // TODO: Currently not respecting set name, will need to PR/fix after
  // https://github.com/HiDeoo/starlight-typedoc/pull/10 is merged with
  // https://github.com/tgreyuk/typedoc-plugin-markdown/blob/next/packages/typedoc-plugin-markdown/docs/usage/options.md#indexfilename
  // TODO: Pending API.md link fix in https://github.com/HiDeoo/starlight-typedoc/pull/12
  indexFileName: 'reference.md',
  entryFileName: 'index.md',
  readme: undefined,
  skipIndexPage: false,
  // TODO: This isn't being set in the frontmatter or anywhere else, will raise issue after above are resolved.
  // indexPageTitle: 'foobar',
  outputFileStrategy: 'modules',
  flattenOutputFiles: true,
  hideGenerator: true,
  identifiersAsCodeBlocks: true,
  enumMembersFormat: 'table',
  propertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  plugin: [
    'typedoc-plugin-mdn-links',
    './packages/tauri-typedoc-theme/dist/index',
  ],
  theme: 'tauri-typedoc-theme',
};

// Generates the JS API routes, check CONTRIBUTING.md for instructions
if (existsSync('packages/tauri/tooling/api/node_modules')) {
  await generateTypeDoc({
    entryPoints: ['packages/tauri/tooling/api/src/index.ts'],
    tsconfig: 'packages/tauri/tooling/api/tsconfig.json',
    output: '2/reference/core/js',
    typeDoc: {
      gitRevision: 'dev',
      ...typeDocOptions,
    },
  });
} else {
  console.log('JS API is not initialized. JS API routes will not be rendered.');
}

// TODO: the following plugins don't have a JS API:
// 'localhost',
// 'persisted-scope',
// 'single-instance',

const plugins = [
  'app',
  'authenticator',
  'autostart',
  'cli',
  'clipboard-manager',
  'dialog',
  'fs',
  'global-shortcut',
  'http',
  'log',
  'notification',
  'os',
  'positioner',
  'process',
  'shell',
  'sql',
  'store',
  'stronghold',
  'updater',
  'upload',
  'websocket',
  'window',
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
      typeDoc: {
        gitRevision: 'v2',
        ...typeDocOptions,
      },
    });
  });
} else {
  console.log(
    'Plugins workspace is not initialized. Respective API routes will not be rendered.'
  );
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
        twitter: 'https://twitter.com/TauriApps',
        mastodon: 'https://fosstodon.org/@TauriApps',
      },
      editLink: {
        baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/starlight',
      },
      head: [
        {
          tag: 'script',
          attrs: { src: '/javascript/navigator.js' },
        },
      ],
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
          collapsed: true,
          items: [
            {
              label: 'Core JavaScript',
              autogenerate: { directory: '2/reference/core/js' },
            },
            // ...plugins.map((plugin) => ({
            //   label: plugin,
            //   link: `2/reference/plugin/${plugin}/js`,
            // })),
          ],
        },
        {
          label: 'Autogenerated References',
          // collapsed: true,
          autogenerate: { directory: '2/reference/plugin' },
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
