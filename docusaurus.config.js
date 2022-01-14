const path = require('path')
const fs = require('fs')

const version = fs.readFileSync('./version.txt', 'utf-8').trim()

const repoUrl = 'https://github.com/tauri-apps/tauri'
const discordURL = 'https://discord.com/invite/tauri'

module.exports = {
  title: 'Tauri Studio',
  tagline:
    'Build smaller, faster, and more secure desktop applications with a web frontend',
  organizationName: 'Tauri Studio',
  projectName: 'tauri',
  baseUrl: `/`,
  favicon: 'img/favicon-32x32.png',
  url: 'https://tauri.studio',
  onBrokenLinks: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  themeConfig: {
    version,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
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
        src: 'img/tauri_with_wordmark.svg',
      },
      // Leading side
      items: [
        {
          to: 'docs/about/intro',
          label: "About",
          position: 'left',
        },
        {
          to: 'docs/get-started/intro',
          label: "Docs",
          position: 'left',
        },
        {
          to: 'docs/api/config',
          label: t.navbar.api,
          position: 'left',
        },
        {
          to: 'release-notes',
          label: 'Release notes',
          position: 'left',
        },
        {
          label: "Community",
          position: 'left',
          items: [
            {
              label: "Partners",
              to: 'partners',
            },
            {
              label: "Showcase",
              to: 'showcase',
            },
            {
              label: 'Discord',
              href: discordURL,
            },
          ],
        },
        // Trailing side
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
          className: 'header-github-link',
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
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get started",
              to: 'docs/get-started/intro',
            },
            {
              label: "Usage",
              to: 'docs/usage/intro',
            },
            {
              to: 'release-notes',
              label: 'Release notes',
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Mail",
              href: 'mailto:contact@tauri.studio',
            },
            {
              label: "Discord",
              href: discordURL,
            },
            {
              label: "Twitter",
              href: 'https://twitter.com/TauriApps',
            },
          ],
        },
        {
          title: "Network",
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
          title: "Community",
          items: [
            {
              label: "Partners",
              to: 'partners',
            },
            {
              label: "Showcase",
              to: 'showcase',
            },
            // TODO: add code of conduct
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tauri Contributors. CC-BY / MIT`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs/',
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
    path.resolve(__dirname, './plugins/dynamic-css.js'),
    path.resolve('./plugins/external-assets'),
  ],
}
