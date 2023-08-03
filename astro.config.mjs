import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';
import configGenerator from './src/plugins/configGenerator';
import starlightBlog from 'starlight-blog';

await configGenerator();

// https://astro.build/config
export default defineConfig({
  site: 'https://beta.tauri.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    starlightBlog(),
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
              label: 'Upgrade & Migrate',
              link: '2/guide/upgrade-migrate',
            },
            {
              label: 'Core Concepts',
              link: '2/guide/core-concepts',
            },
            {
              label: 'Plugins',
              link: '2/guide/plugins',
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Develop',
              link: '2/guide/develop',
            },
            {
              label: 'Debug',
              link: '2/guide/debug',
            },
            {
              label: 'Test',
              link: '2/guide/test',
            },
            {
              label: 'Build & Distribute',
              link: '2/guide/build-distribute',
            },
            {
              label: 'Troubleshoot',
              link: '2/guide/troubleshoot',
            },
          ],
        },
        {
          label: 'Features & Recipes',
          link: '2/recipe',
        },
        {
          label: 'References',
          items: [
            {
              label: 'Configuration',
              link: '2/reference/config',
            },
            {
              label: 'Command Line Interface (CLI)',
              link: '2/reference/cli',
            },
            {
              label: 'Core JavaScript API',
              link: '2/reference/core/js',
            },
            {
              label: 'Core Rust API (via Docs.rs)',
              // TODO: Is there a way to link this to the latest pre-released version?
              link: 'https://docs.rs/tauri/~2.0.0-alpha',
            },
            {
              label: 'Plugin References',
              link: '2/reference/plugin',
            },
          ],
        },
        {
          label: 'Tauri v1',
          link: 'https://tauri.app',
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
