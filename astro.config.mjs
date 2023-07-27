import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generateTypeDoc } from 'starlight-typedoc';
import { existsSync } from 'node:fs';

// Generates the JS API routes, check CONTRIBUTING.md for instructions
if (existsSync('packages/tauri/tooling/api/node_modules')) {
  await generateTypeDoc({
    entryPoints: [
      'packages/tauri/tooling/api/src/event.ts',
      'packages/tauri/tooling/api/src/mocks.ts',
      'packages/tauri/tooling/api/src/path.ts',
      'packages/tauri/tooling/api/src/tauri.ts',
    ],
    tsconfig: 'packages/tauri/tooling/api/tsconfig.json',
    output: '2/reference/js',
  });
} else {
  console.log('JS API is not initialized. JS API routes will not be rendered.');
}

export const locales = {
  root: {
    label: 'English',
    lang: 'en',
  },
  fr: {
    label: 'Français',
    lang: 'fr',
  },
  it: {
    label: 'Italiano',
    lang: 'it',
  },
  ko: {
    label: '한국어',
    lang: 'ko',
  },
  zh: {
    label: '中文',
    lang: 'zh',
  },
};

// https://astro.build/config
export default defineConfig({
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
              label: 'Command Line Interface (CLI)',
              link: '#',
            },
            {
              label: 'Tauri Config',
              link: '#',
            },
            {
              label: 'JavaScript API',
              autogenerate: { directory: '2/reference/js', collapsed: true },
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
  },
  // Required until https://github.com/withastro/starlight/issues/421 is addressed
  experimental: {
    assets: true,
  },
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
