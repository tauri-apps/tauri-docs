const path = require('path')
// const versions = require('./versions.json')

const languages = require('./supported-languages')

const language = process.env.LANGUAGE || 'en'

const t = require(`./translations/${language}.json`)


const repoUrl = 'https://github.com/tauri-apps/tauri'

const siteConfig = {
  title: 'Tauri Studio',
  tagline: t.config.tagline,
  organizationName: 'Tauri Studio',
  projectName: 'tauri',
  baseUrl: `/${language}/`,
  favicon: 'img/favicon-32x32.png',
  url: 'https://tauri.studio',
  onBrokenLinks: 'ignore',

  themeConfig: {
    languages,
    language,
    t,
    colorMode: {
      defaultMode: 'dark'
    },
    announcementBar: {
      id: 'beta',
      content: t.config.announcementBar.betaSentence,
      backgroundColor: 'var(--ifm-color-primary)',
    },
    navbar: {
      hideOnScroll: false,
      title: ' ',
      logo: {
        alt: 'Tauri Logo',
        src: 'img/tauri.png',
      },
      items: [
        { to: 'docs/about/intro', label: t.navbar.about, position: 'left' },
        {
          to: 'docs/getting-started/intro',
          label: t.navbar.docs,
          position: 'left',
        },
        {
          to: 'release-notes',
          label: 'Release notes',
          position: 'left',
        },
        {
          label: t.navbar.community,
          position: 'left',
          items: [
            {
              label: t.navbar.partners,
              to: 'partners',
            },
            {
              label: t.navbar.showcase,
              to: 'showcase',
            },
          ],
        },
        {
          href: repoUrl,
          'aria-label': 'GitHub',
          position: 'right',
          className: 'header-github-link'
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: t.navbar.docs,
          items: [
            {
              label: t.navbar.gettingStarted,
              to: 'docs/getting-started/intro',
            },
            {
              label: t.navbar.usage,
              to: 'docs/usage/intro',
            },
            {
              to: 'release-notes',
              label: 'Release notes',
            },
          ],
        },
        {
          title: t.navbar.contact,
          items: [
            {
              label: t.navbar.mail,
              href: 'mailto:contact@tauri.studio',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/SpmNs4S',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TauriApps',
            },
          ],
        },
        {
          title: t.navbar.network,
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
          title: t.navbar.community,
          items: [
            {
              label: t.navbar.partners,
              to: 'partners',
            },
            {
              label: t.navbar.showcase,
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
    sidebarCollapsible: true,
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs/' + language,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tauri-apps/tauri-docs/edit/dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      path.resolve(__dirname, './plugins/dynamic-css.js'),
      {
        language,
      },
    ],
    path.resolve('./plugins/external-assets'),
  ],
}

module.exports = siteConfig
