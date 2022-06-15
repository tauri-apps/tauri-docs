const path = require('path')
const fs = require('fs')

// Change this value to update what the un-versioned docs url should be
const unreleasedTauriVersion = 'v1'
var lastestReleasedVersion

// Checks if Docusaurus has been versioned before and sets versions accordingly
try {
  lastestReleasedVersion = JSON.parse(
    fs.readFileSync('versions.json', 'utf-8')
  )[0]
} catch {}

const repoUrl = 'https://github.com/tauri-apps/tauri'
const discordUrl = 'https://discord.com/invite/tauri'
const devToUrl = 'https://dev.to/tauri'
const awesomeTauriUrl = 'https://github.com/tauri-apps/awesome-tauri'

const navbarItems = [
  {
    to: 'about/intro',
    label: 'About',
    position: 'left',
    items: [
      {
        label: 'What is Tauri?',
        to: 'about/intro',
      },
      {
        label: 'Architecture',
        to: 'about/architecture',
      },
      {
        label: 'Security',
        to: 'about/security',
      },
      {
        label: 'Governance',
        to: 'about/governance',
      },
      {
        label: 'Get the Book',
        to: 'about/book',
      },
      {
        label: 'Benchmarks',
        to: 'about/benchmarks',
      },
    ],
  },
  {
    type: 'docSidebar',
    sidebarId: 'guides',
    label: 'Guides',
    position: 'left',
  },
  {
    type: 'docSidebar',
    sidebarId: 'api',
    label: 'API',
    position: 'left',
  },
  {
    to: 'release-notes',
    label: 'Release Notes',
    position: 'left',
  },
  {
    label: 'Community',
    position: 'left',
    items: [
      {
        label: 'Get Involved',
        href: 'https://github.com/tauri-apps/tauri/blob/dev/.github/CONTRIBUTING.md',
      },
      {
        label: 'Sponsors',
        to: '/#sponsors',
        activeBasePath: 'never-active',
      },
      {
        label: 'Discord',
        href: discordUrl,
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl,
      },
    ],
  },
  {
    label: 'RC',
    to: '/#roadmap',
    position: 'right',
    className: 'badge badge--warning',
  },
  {
    href: repoUrl,
    'aria-label': 'GitHub',
    position: 'right',
    className: 'header-github-link',
  },
  {
    type: 'localeDropdown',
    position: 'right',
    dropdownItemsAfter: [
      {
        to: 'https://tauri.crowdin.com/documentation',
        label: 'Help us translate',
      },
    ],
  },
  {
    type: 'search',
    position: 'right',
  },
]

const footerLinks = [
  {
    title: 'Repositories',
    items: [
      {
        label: 'Tauri',
        href: repoUrl,
      },
      {
        label: 'Tao',
        href: 'https://github.com/tauri-apps/tao',
      },
      {
        label: 'Wry',
        href: 'https://github.com/tauri-apps/wry',
      },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        label: 'Mail',
        href: 'mailto:contact@tauri.studio',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/TauriApps',
      },
    ],
  },
  {
    title: 'Network',
    items: [
      {
        label: 'DevTo Blog',
        href: devToUrl,
      },
      {
        label: 'OpenCollective',
        href: 'https://opencollective.com/tauri',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/tauri-apps',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'Sponsors',
        to: '/#sponsors',
      },
      {
        label: 'Discord',
        href: discordUrl,
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl,
      },
    ],
  },
]

const siteConfig = {
  title: 'Tauri Studio',
  tagline:
    'Build smaller, faster, and more secure desktop applications with a web frontend',
  organizationName: 'Tauri Studio',
  projectName: 'tauri',
  baseUrl: `/`,
  favicon: 'meta/favicon-32x32.png',
  url: 'https://tauri.studio',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
      additionalLanguages: ['rust', 'powershell', 'bash'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'rc',
      content:
        "<div id='announcement-rc'>🚀 Tauri Release Candidate has landed! <a id='announcement-link' target='_blank' rel='noopener noreferrer' href='https://dev.to/tauri/tauri-10-release-candidate-53jk'>Click here for more details.</a></div>",
      backgroundColor: 'var(--ifm-color-primary)',
      textColor: 'var(--ifm-button-color)',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Tauri Logo',
        src: 'meta/tauri_logo_pride_light.svg',
        srcDark: 'meta/tauri_logo_pride_dark.svg',
      },
      items: navbarItems,
    },

    footer: {
      style: 'dark',
      links: footerLinks,
      copyright: `Copyright © ${new Date().getFullYear()} Tauri Contributors. CC-BY / MIT`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: './docs/',
          exclude: ['api/rust/**', 'api/js/js-api.json', '**/_*.{md,mdx}'],
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/tauri-apps/tauri-docs/edit/dev/',
          sidebarCollapsible: true,
          versions: {
            // Maps the working "current" version to a custom url instead of `next`
            current: {
              label: unreleasedTauriVersion,
              path: unreleasedTauriVersion,
            },
            // If there is a "latest" version, map url to version number
            ...(lastestReleasedVersion && {
              [lastestReleasedVersion]: {
                label: lastestReleasedVersion,
                path: lastestReleasedVersion,
              },
            }),
          },
          remarkPlugins: [require('mdx-mermaid')],
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './plugins/dynamic-css.js'),
    path.resolve('./plugins/external-assets'),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'saveData',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/meta/favicon-96x96.png',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/meta/favicon-apple-touch-icon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/meta/favicon-144x144.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/meta/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#0F0F0F',
          },
        ],
      },
    ],
    ['@docusaurus/plugin-ideal-image', {}],
  ],
}

module.exports = siteConfig
