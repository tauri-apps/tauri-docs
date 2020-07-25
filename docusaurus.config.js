// const versions = require('./versions.json')
const language = process.env.LANGUAGE || 'en'

const path = require('path')

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
    languages: {
      en: 'English',
      fr: 'Français',
      // 'pt-br': 'Português',
      // 'zh-hant': '繁體中文',
      // 'zh-hans': '简体中文',
      // ru: 'русский',
    },
    language,
    t,
    announcementBar: {
      id: 'testapp',
      content: t.config.announcementBar.validationApp,
      backgroundColor: 'var(--ifm-color-primary)',
    },
    navbar: {
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
          to: 'docs/api/config',
          label: t.navbar.api,
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
          label: 'Alpha',
          to: '/#roadmap',
          position: 'right',
          // type: 'badge',
          // title: 'Tauri is still alpha, take a look at our roadmap!',
        },
        {
          to: 'release-notes',
          label: 'Release notes',
          position: 'right',
        },
        {
          href: repoUrl,
          label: 'GitHub',
          position: 'right',
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
          sidebarPath: require.resolve('./sidebars.json'),
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
