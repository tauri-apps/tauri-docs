const path = require('path')
const fs = require('fs')

const version = fs.readFileSync('./version.txt', 'utf-8').trim()

const repoUrl = 'https://github.com/tauri-apps/tauri'
const discordURL = 'https://discord.com/invite/tauri'

const navbarItems = [
  {
    to: 'docs/about/intro',
    label: 'About',
    position: 'left',
  },
  {
    to: 'docs/get-started/intro',
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
        label: 'Partners',
        to: 'partners',
      },
      {
        label: 'Showcase',
        to: 'showcase',
      },
      {
        label: 'Discord',
        href: discordURL,
      },
    ],
  },
  {
    label: 'Beta',
    to: '/#roadmap',
    position: 'right',
    className: 'badge badge--warning',
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
        to: 'docs/get-started/intro',
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
        label: 'Discord',
        href: discordURL,
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
        label: 'DevTo',
        href: 'https://dev.to/tauri',
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
        label: 'Partners',
        to: 'partners',
      },
      {
        label: 'Showcase',
        to: 'showcase',
      },
    ],
  },
]

const siteConfig = {
  title: 'Tauri Studio',
  tagline: 'Build smaller, faster, and more secure desktop applications with a web frontend',
  organizationName: 'Tauri Studio',
  projectName: 'tauri',
  baseUrl: `/`,
  favicon: 'img/favicon-32x32.png',
  url: 'https://tauri.studio',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themeConfig: {
    prism: {
      theme: require('./src/theme/CodeBlockTheme'),
      additionalLanguages: ['rust']
    },
    version,
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️'
      }
    },
    announcementBar: {
      id: 'beta',
      content: "<div id='announcement-beta'>🚀 Tauri Beta has landed! <a target='_blank' rel='noopener noreferrer' href='https://dev.to/tauri/announcing-tauri-beta-more-efficient-crossplatform-apps-with-better-features-1nbd'>Click here for more details.</a></div>",
      backgroundColor: 'var(--ifm-color-primary)',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Tauri Logo',
        src: 'img/tauri_with_wordmark_dark.svg',
        srcDark: 'img/tauri_with_wordmark.svg'
      },
      items: navbarItems,
    },
    footer: {
      links: footerLinks,
      copyright: `Copyright © ${new Date().getFullYear()} Tauri Contributors. CC-BY / MIT`,
    },
    metadata: [{
      name: 'theme-color',
      content: '#ffc131'
    }]
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs/',
          exclude: [
            'api/rust/**'
          ],
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
  plugins: [
    path.resolve('./plugins/external-assets')
  ],
}

module.exports = siteConfig
