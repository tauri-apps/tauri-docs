/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
]

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
    navbar: {
      logo: {
        alt: 'Tauri Logo',
        src: 'img/tauri.svg',
      },
      links: [
        { to: 'about', label: 'About', position: 'left' },
        {
          to: 'docs/getting-started/intro',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/docs/api/config',
          label: 'API',
          position: 'left',
        },
        {
          to: '/partners',
          label: 'Partners',
          position: 'left',
        },
        {
          href: 'https://github.com/tauri-apps/tauri',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
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
              href: 'https://dev.to/tauri'
            },
            {
              label: 'OpenCollective',
              href: 'https://opencollective.com/tauri',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tauri-apps/tauri',
            },
          ],
        },
        {
          title: 'Contribution',
          items: [
            {
              label: 'Partners',
              to: 'partners',
            },
            // TODO: add code of conduct
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tauri Studio. Built with Docusaurus.`,
      
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
