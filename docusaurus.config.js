const path = require('path')
const fs = require('fs')

const version = fs.readFileSync('./version.txt', 'utf-8').trim()

const repoUrl = 'https://github.com/tauri-apps/tauri'
const discordUrl = 'https://discord.com/invite/tauri'
const devToUrl = 'https://dev.to/tauri'
const awesomeTauriUrl = 'https://github.com/tauri-apps/awesome-tauri'

const navbarItems = [
  {
    to: 'docs/about/intro',
    label: 'About',
    position: 'left',
  },
  {
    to: 'docs/getting-started/prerequisites',
    label: 'Docs',
    position: 'left',
  },
  {
    to: 'docs/api/config',
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
        to: 'docs/community/contributor-guide',
      },
      {
        label: 'Discord',
        href: discordUrl,
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl
      }
    ],
  },
  {
    href: repoUrl,
    'aria-label': 'GitHub',
    position: 'right',
    className: 'bi bi-github',
  },
  {
    type: 'localeDropdown',
    position: 'right',
    dropdownItemsAfter: [
      {
        to: 'https://github.com/tauri-apps/tauri-docs#contributing',
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
    title: 'Docs',
    items: [
      {
        label: 'Get started',
        to: 'docs/getting-started/beginning-tutorial',
      },
      {
        label: 'API',
        to: 'docs/api/config/',
      },
      {
        label: 'Release notes',
        to: 'release-notes',
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
        href: repoUrl,
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'Discord',
        href: discordUrl,
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl
      }
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
  favicon: 'img/favicon-32x32.png',
  url: 'https://tauri.studio',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    prism: {
      theme: require('./src/theme/CodeBlockTheme'),
      additionalLanguages: ['rust'],
    },
    version,
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      disableSwitch: false,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      },
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Tauri Logo',
        src: 'img/tauri_with_wordmark_mono.svg',
        srcDark: 'img/tauri_with_wordmark.svg',
      },
      items: navbarItems,
    },
    footer: {
      links: footerLinks,
      copyright: `Copyright © ${new Date().getFullYear()} Tauri Contributors. CC-BY / MIT`,
    },
    metadata: [
      {
        name: 'theme-color',
        content: '#ffc131',
      },
    ],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs/',
          exclude: ['api/rust/**'],
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/tauri-apps/tauri-docs/edit/dev/',
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve('./plugins/external-assets')],
}

module.exports = siteConfig
