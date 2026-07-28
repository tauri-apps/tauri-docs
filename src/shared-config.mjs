// Starlight config shared by both astro.config.mjs files. The releases site's
// netlify.toml watches this path — keep its build-ignore rule in sync.

/** `root` is the prefix back to the repo root (docs: './', releases: '../../'). */
export const logo = (root = './') => ({
  dark: `${root}src/assets/logo.svg`,
  light: `${root}src/assets/logo_light.svg`,
  replacesTitle: true,
});

/**
 * The RSS feed lives on the docs site — pass its `site` so forks point at their
 * own. Annotated because `icon` widens from Starlight's named-icon union to
 * `string` once it is returned from a function instead of inlined in the config.
 *
 * @param {string} site
 * @returns {{ icon: import('@astrojs/starlight/types').StarlightIcon, label: string, href: string }[]}
 */
export const social = (site) => [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/tauri-apps/tauri' },
  { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/tauri' },
  { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/TauriApps' },
  { icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/tauri.app' },
  { icon: 'mastodon', label: 'Mastodon', href: 'https://fosstodon.org/@TauriApps' },
  // resolved, not concatenated: a SITE_URL with a trailing slash would give `//rss`
  { icon: 'rss', label: 'RSS', href: new URL('/rss', site).href },
];

/** Visual style only — language registration stays per-site. */
export const ecStyleOverrides = {
  codePaddingBlock: '1rem',
  codePaddingInline: '1.35rem',
  borderRadius: '0.5rem',
  textMarkers: {
    borderLuminance: '66',
    backgroundOpacity: '25%',
  },
  frames: {
    editorActiveTabIndicatorHeight: '0',
  },
};
