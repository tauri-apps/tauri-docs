// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { corePageSlug, corePrereleasesSlug, repositories } from './generator/config.ts';
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
      social: social(site),
      routeMiddleware: './src/routeData.ts',
      components: {
        // Local: Header (and its SiteTitle) is a deliberate fork — English-only,
        // no topics, logo links to the docs home.
        Header: './src/components/overrides/Header.astro',

        // Imported from the docs site so UI changes propagate (README "Shared UI")
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
        ...repositories.map((repo) => {
          if (repo.packages.length === 1) {
            return { label: repo.displayName, link: `/${repo.packages[0].name}/` };
          }
          const items = repo.packages.map((pkg) => ({ label: pkg.name, link: `/${pkg.name}/` }));
          if (repo.name === 'tauri') {
            items.unshift(
              { label: 'Core Releases', link: `/${corePageSlug}/` },
              { label: '2.0 Prereleases', link: `/${corePrereleasesSlug}/` }
            );
          }
          return { label: repo.displayName, items };
        }),
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
