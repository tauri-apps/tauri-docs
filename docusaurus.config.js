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
} catch {
  console.error()
}

const repoUrl = 'https://github.com/tauri-apps/tauri'
const discordUrl = 'https://discord.com/invite/tauri'
const awesomeTauriUrl = 'https://github.com/tauri-apps/awesome-tauri'

const navbarItems = [
  {
    label: 'Guides',
    type: 'docSidebar',
    sidebarId: 'guides',
  },
  {
    label: 'API',
    items: [
      {
        type: 'doc',
        docId: 'api/config',
        label: 'Configuration',
      },
      {
        type: 'doc',
        docId: 'api/cli',
        label: 'CLI',
      },
      {
        type: 'doc',
        docId: 'api/js/README',
        label: 'JavaScript / TypeScript',
      },
      {
        label: 'Rust (via Docs.rs)',
        href: 'https://docs.rs/tauri/1/',
        target: '_self',
      },
    ],
  },
  {
    label: 'References',
    type: 'docSidebar',
    sidebarId: 'references',
  },

  {
    label: 'Blog',
    href: 'https://beta.tauri.app/blog',
    position: 'left',
  },
  {
    label: 'Community',
    position: 'left',
    items: [
      {
        label: 'Get Involved',
        href: 'https://github.com/tauri-apps/tauri/blob/dev/.github/CONTRIBUTING.md',
        target: '_self',
      },
      {
        label: 'Sponsors',
        to: '/#sponsors',
        activeBasePath: 'never-active',
      },
      {
        label: 'Discord',
        href: discordUrl,
        target: '_self',
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl,
        target: '_self',
      },
    ],
  },
  {
    label: 'About',
    to: 'about/intro',

    items: [
      {
        label: 'What is Tauri?',
        to: 'about/intro',
      },
      {
        label: 'Governance',
        to: 'about/governance',
      },
      {
        label: 'Trademark Guidelines',
        to: 'about/trademark',
      },
      {
        label: 'Tauri Book',
        to: 'about/book',
      },
    ],
  },
  {
    label: 'Release Notes',
    to: 'releases',
    position: 'right',
  },
  {
    href: repoUrl,
    'aria-label': 'GitHub',
    position: 'right',
    className: 'navbarIcon gitHubIcon',
    target: '_self',
  },
  {
    type: 'localeDropdown',
    position: 'right',
  },
  {
    type: 'docsVersionDropdown',
    position: 'right',
    className: 'navbarIcon versionIcon',
    dropdownItemsAfter: [
      {
        href: 'https://beta.tauri.app/',
        label: 'v2 (Beta)',
        target: '_self',
      },
    ],
    dropdownActiveClassDisabled: true,
  },
]

const footerLinks = [
  {
    title: 'Repositories',
    items: [
      {
        label: 'Tauri',
        href: repoUrl,
        target: '_self',
      },
      {
        label: 'TAO',
        href: 'https://github.com/tauri-apps/tao',
        target: '_self',
      },
      {
        label: 'WRY',
        href: 'https://github.com/tauri-apps/wry',
        target: '_self',
      },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        label: 'Mail',
        href: 'mailto:contact@tauri.app',
        target: '_self',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/TauriApps',
        target: '_self',
      },
      {
        label: 'Mastodon',
        href: 'https://fosstodon.org/@TauriApps',
        rel: 'me',
        target: '_self',
      },
    ],
  },
  {
    title: 'Network',
    items: [
      {
        label: 'Blog',
        href: 'https://beta.tauri.app/blog',
      },
      {
        label: 'OpenCollective',
        href: 'https://opencollective.com/tauri',
        target: '_self',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/tauri-apps',
        target: '_self',
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
        target: '_self',
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl,
        target: '_self',
      },
    ],
  },
]

async function siteConfig() {
  const mdxMermaid = await import('mdx-mermaid')
  return {
    title: 'Tauri Apps',
    tagline:
      'Build smaller, faster, and more secure desktop applications with a web frontend',
    organizationName: 'Tauri Apps',
    projectName: 'tauri',
    baseUrl: '/',
    favicon: '/meta/favicon-32x32.png',
    url: 'https://tauri.app',
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr', 'ko', 'zh-cn', 'it'],
    },
    themeConfig: {
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/oceanicNext'),
        additionalLanguages: ['rust', 'powershell', 'bash', 'toml', 'json5'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        content:
          "<b>🚀 The <a id='announcement-link' href='https://beta.tauri.app/blog/tauri-2-0-0-beta/'>Beta for Tauri 2.0</a> has launched!</b>",
        backgroundColor: 'var(--ifm-color-primary)',
        textColor: 'var(--ifm-button-color)',
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Tauri Logo',
          src: 'meta/tauri_logo_light.svg',
          srcDark: 'meta/tauri_logo_dark.svg',
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
            editUrl: ({ docPath, versionDocsDirPath }) => {
              if (docPath === 'api/cli.md') {
                return 'https://github.com/tauri-apps/tauri/tree/dev/tooling/cli/src'
              } else if (docPath === 'api/config.md') {
                return 'https://github.com/tauri-apps/tauri/edit/dev/core/tauri-utils/src/config.rs'
              } else if (docPath.startsWith('api/js')) {
                const mod = docPath.split('/').at(-1).split('.')[0]
                return `https://github.com/tauri-apps/tauri/edit/dev/tooling/api/src/${mod}.ts`
              } else {
                return `https://github.com/tauri-apps/tauri-docs/edit/dev/${versionDocsDirPath}/${docPath}`
              }
            },
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
            remarkPlugins: [
              [
                mdxMermaid.default,
                {
                  mermaid: {
                    theme: 'default',
                    themeCSS: fs.readFileSync('./src/css/mermaid.css', 'utf-8'),
                  },
                },
              ],
            ],
            async sidebarItemsGenerator({
              defaultSidebarItemsGenerator,
              ...args
            }) {
              const sidebarItems = await defaultSidebarItemsGenerator(args)
              return sidebarItems.filter(
                (item) =>
                  // This makes sure that the landing pages are not duplicated in the sidebars
                  item.id !== 'guides/readme' && item.id !== 'references/readme'
              )
            },
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
    plugins: [
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
    ],

    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve('esbuild-loader'),
        options: {
          loader: 'tsx',
          format: isServer ? 'cjs' : undefined,
          target: isServer ? 'node12' : 'es2017',
        },
      }),
    },
  }
}

module.exports = siteConfig
