// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { repositories } from './generator/config.ts';

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
      logo: {
        dark: './src/assets/logo.svg',
        light: './src/assets/logo_light.svg',
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tauri-apps/tauri' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/tauri' },
        { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/TauriApps' },
        { icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/tauri.app' },
        { icon: 'mastodon', label: 'Mastodon', href: 'https://fosstodon.org/@TauriApps' },
        { icon: 'rss', label: 'RSS', href: 'https://v2.tauri.app/rss' },
      ],
      components: {
        Header: './src/components/overrides/Header.astro',
        Footer: './src/components/overrides/Footer.astro',
        ThemeSelect: './src/components/overrides/ThemeSelect.astro',
        PageFrame: './src/components/overrides/PageFrame.astro',
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
        ...repositories.map((repo) => ({
          label: repo.displayName,
          collapsed: true,
          items: repo.packages.map((pkg) => ({ label: pkg.name, link: `/${pkg.name}/` })),
        })),
      ],
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
