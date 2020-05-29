// const versions = require('./versions.json')

const repoUrl = 'https://github.com/tauri-apps/tauri'

const siteConfig = {
  title: 'Tauri Studio',
  tagline: 'Make smaller, faster and more secure native apps',
  organizationName: 'Tauri Studio',
  projectName: 'tauri',
  baseUrl: '/',
  favicon: 'img/favicon-32x32.png',
  url: 'https://tauri.studio',

  themeConfig: {
    announcementBar: {
      id: 'testapp',
      content:
        '🚀 Download our validation app to take Tauri for a test drive: <a href="https://github.com/tauri-apps/tauri/releases/download/0.5.2-binaries/app_0.1.0_amd64.deb" target="_blank">[Linux - deb]</a> - <a href="https://github.com/tauri-apps/tauri/releases/download/0.5.2-binaries/app-macos.dmg" target="_blank">[MacOS - dmg]</a> - <a href="https://github.com/tauri-apps/tauri/releases/download/0.5.2-binaries/app.exe" target="_blank">[Windows - exe]</a>',
    },
    navbar: {
      logo: {
        alt: 'Tauri Logo',
        src: 'img/tauri.png',
      },
      links: [
        { to: 'docs/about/intro', label: 'About', position: 'left' },
        {
          to: 'docs/getting-started/intro',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/api/config',
          label: 'API',
          position: 'left',
        },
        {
          label: 'Community',
          type: 'category',
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
          ],
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
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/getting-started/intro',
            },
            {
              label: 'Usage',
              to: 'docs/usage/intro',
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
              href: 'https://discord.gg/SpmNs4S',
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
    // Equivalent to `docsSideNavCollapsible`
    sidebarCollapsible: true,
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl: 'https://github.com/tauri-apps/tauri-docs/edit/dev/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}

module.exports = siteConfig
