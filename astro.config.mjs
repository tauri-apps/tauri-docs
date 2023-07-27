import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Tauri',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/tauri-apps/tauri',
        discord: 'https://github.com/tauri-apps/tauri',
        mastodon: 'https://github.com/tauri-apps/tauri',
        twitter: 'https://github.com/tauri-apps/tauri',
      },
      editLink: {
        baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/dev',
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
              link: '#',
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
    }),
  ],
  markdown: {
    shikiConfig: {
      langs: ['powershell'],
    },
  },
  experimental: {
    assets: true,
  },
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
