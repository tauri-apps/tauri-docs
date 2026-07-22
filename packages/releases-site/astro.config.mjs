// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { repositories } from './generator/config.ts';
import { logo, social, ecStyleOverrides } from '../../src/shared-config.mjs';

// Canonical origin is the docs site (the releases site is proxied at <docs>/release/*).
// Override with SITE_URL for fork demos.
const site = process.env.SITE_URL ?? 'https://v2.tauri.app';

// https://astro.build/config
export default defineConfig({
  site,
  base: '/release',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Tauri Releases',
      description: 'Release notes for the Tauri core ecosystem',
      logo: logo('../../'),
      social,
      components: {
        // Header (and its SiteTitle) is a deliberate fork — English-only, no
        // topics, logo links to the docs home. The rest is imported straight
        // from the docs site so UI changes propagate (see README "Shared UI").
        Header: './src/components/overrides/Header.astro',
        // Highlights the package entry while on its version pages, which have
        // no sidebar entries of their own
        Sidebar: './src/components/overrides/Sidebar.astro',
        Footer: '../../src/components/overrides/Footer.astro',
        ThemeSelect: '../../src/components/overrides/ThemeSelect.astro',
        PageFrame: '../../src/components/overrides/PageFrame.astro',
        TwoColumnContent: '../../src/components/overrides/TwoColumnContent.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#181818' },
        },
      ],
      customCss: ['./src/styles/custom.scss'],
      sidebar: [
        { label: 'Overview', link: '/' },
        { label: 'Changelog Table', link: '/table/' },
        ...repositories.map((repo) =>
          // Single-package repos (Wry, Tao, Create Tauri App) become plain
          // links — a one-child group is just noise
          repo.packages.length === 1
            ? { label: repo.displayName, link: `/${repo.packages[0].name}/` }
            : {
                label: repo.displayName,
                collapsed: false,
                items: repo.packages.map((pkg) => ({ label: pkg.name, link: `/${pkg.name}/` })),
              }
        ),
      ],
      expressiveCode: {
        styleOverrides: ecStyleOverrides,
      },
      lastUpdated: false,
    }),
  ],
  vite: {
    server: {
      fs: {
        // Allow importing the shared styles from the repo root during `astro dev`
        allow: ['../..'],
      },
    },
  },
});
