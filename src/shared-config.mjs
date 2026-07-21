// Starlight config values shared between the docs site (astro.config.mjs)
// and the releases site (packages/releases-site/astro.config.mjs) so they
// cannot drift apart. The releases site's netlify.toml watches this file —
// keep its build-ignore rule in sync if more shared files appear.

/** Starlight `logo` config. `root` is the path prefix back to the repo root
 * from the consuming config's project root (docs: './', releases: '../../'). */
export const logo = (root = './') => ({
  dark: `${root}src/assets/logo.svg`,
  light: `${root}src/assets/logo_light.svg`,
  replacesTitle: true,
});

export const social = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/tauri-apps/tauri' },
  { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/tauri' },
  { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/TauriApps' },
  { icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/tauri.app' },
  { icon: 'mastodon', label: 'Mastodon', href: 'https://fosstodon.org/@TauriApps' },
  { icon: 'rss', label: 'RSS', href: 'https://v2.tauri.app/rss' },
];

/** Shared part of the expressiveCode config (visual style only — language
 * registration stays per-site). */
export const ecStyleOverrides = {
  codePaddingBlock: '1rem',
  codePaddingInline: '1.35rem',
  borderRadius: '0.5rem',
  // borderWidth: '0',
  textMarkers: {
    borderLuminance: '66',
    backgroundOpacity: '25%',
  },
  frames: {
    editorActiveTabIndicatorHeight: '0',
  },
};
