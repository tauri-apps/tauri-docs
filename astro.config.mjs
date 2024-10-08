import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';
import starlightLinksValidator from 'starlight-links-validator';
import starlightBlog from 'starlight-blog';
import serviceWorker from 'astrojs-service-worker';
import astroD2 from 'astro-d2';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import path from 'path';
import { fileURLToPath } from 'url';

const authors = {
  nothingismagick: {
    name: 'Daniel Thompson-Yvetot',
    title: 'Tauri Co-Founder',
    picture: '/authors/nothingismagick.jpeg',
  },
  lucasfernog: {
    name: 'Lucas Nogueira',
    title: 'Tauri Co-Founder',
    picture: '/authors/lucasfernog.jpeg',
  },
  beanow: {
    name: 'Robin van Boven',
    title: 'Tauri Board Director',
    picture: '/authors/Beanow.png',
  },
  jbolda: {
    name: 'Jacob Bolda',
    title: 'Tauri Board Director',
    picture: '/authors/jbolda.jpeg',
  },
  lorenzolewis: {
    name: 'Lorenzo Lewis',
    title: 'Tauri Community Lead',
    picture: '/authors/lorenzolewis.png',
  },
  tweidinger: {
    name: 'Tillmann Weidinger',
    title: 'Tauri Security',
    picture: '/authors/tweidinger.png',
  },
  amrbashir: {
    name: 'Amr Bashir',
    title: 'Tauri Development',
    picture: '/authors/amrbashir.png',
  },
  wusyong: {
    name: 'Wu Yu Wei',
    title: 'Tauri Development Lead',
    picture: '/authors/wusyong.png',
  },
  chip: {
    name: 'Chip Reed',
    title: 'Tauri Security',
    picture: '/authors/chip.png',
  },
};

const site = 'https://v2.tauri.app';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    starlight({
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: 'horizontalList',
          },
        }),
        starlightBlog({ authors }),
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnRelativeLinks: false,
          exclude: ['/plugin/*/#default-permission', '/plugin/*/#permission-table'],
        }),
      ],
      title: 'Tauri',
      description: 'The cross-platform app building toolkit',
      logo: {
        dark: './src/assets/logo.svg',
        light: './src/assets/logo_light.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/tauri-apps/tauri',
        discord: 'https://discord.com/invite/tauri',
        twitter: 'https://twitter.com/TauriApps',
        mastodon: 'https://fosstodon.org/@TauriApps',
        rss: `${site}/rss/`,
      },
      components: {
        Header: './src/components/overrides/Header.astro',
        Footer: 'src/components/overrides/Footer.astro',
        ThemeSelect: 'src/components/overrides/ThemeSelect.astro',
        PageFrame: 'src/components/overrides/PageFrame.astro',
        TableOfContents: 'src/components/overrides/TableOfContents.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + '/og.png?v=1' },
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + '/og.png?v=1' },
        },
        {
          tag: 'script',
          attrs: {
            src: '/navigate.js',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/manifest.json',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#181818' },
        },
      ],
      editLink: {
        baseUrl:
          process.env.NODE_ENV === 'development'
            ? `vscode://file/${path.dirname(fileURLToPath(import.meta.url))}`
            : 'https://github.com/tauri-apps/tauri-docs/edit/v2',
      },
      customCss: ['./src/styles/custom.scss'],
      expressiveCode: {
        styleOverrides: { borderRadius: '0.5rem' },
      },
      sidebar: [
        {
          label: 'Guides',
          translations: {
            'zh-CN': '指引',
          },
          collapsed: true,
          items: [
            {
              label: 'Quick Start',
              translations: {
                'zh-CN': '快速开始',
              },
              collapsed: true,
              items: [
                {
                  label: 'What is Tauri?',
                  translations: {
                    'zh-CN': '什么是 Tauri？',
                  },
                  link: '/start/',
                },
                {
                  label: 'Prerequisites',
                  translations: {
                    'zh-CN': '前置条件',
                  },
                  link: '/start/prerequisites/',
                },
                {
                  label: 'Create a Project',
                  translations: {
                    'zh-CN': '创建项目',
                  },
                  link: '/start/create-project/',
                },
                {
                  label: 'Frontend Configuration',
                  translations: {
                    'zh-CN': '前端配置',
                  },
                  collapsed: true,
                  autogenerate: { directory: 'start/frontend' },
                },
                {
                  label: 'Upgrade & Migrate',
                  translations: {
                    'zh-CN': '升级和迁移',
                  },
                  collapsed: true,
                  autogenerate: { directory: 'start/migrate' },
                },
              ],
            },
            {
              label: 'Core Concepts',
              translations: {
                'zh-CN': '核心概念',
              },
              collapsed: true,
              autogenerate: { directory: 'concept' },
            },
            {
              label: 'Security',
              translations: {
                'zh-CN': '安全',
              },
              collapsed: true,
              autogenerate: { directory: 'security' },
            },
            {
              label: 'Develop',
              translations: {
                'zh-CN': '开发',
              },
              collapsed: true,
              autogenerate: { directory: 'develop' },
            },
            {
              label: 'Distribute',
              translations: {
                'zh-CN': '分发',
              },
              collapsed: true,
              autogenerate: { directory: 'distribute' },
            },
            {
              label: 'Learn',
              translations: {
                'zh-CN': '学习',
              },
              collapsed: true,
              autogenerate: { directory: 'learn' },
            },
            {
              label: 'Plugins',
              translations: {
                'zh-CN': '插件',
              },
              collapsed: true,
              autogenerate: { directory: 'plugin' },
            },
            {
              label: 'About',
              translations: {
                'zh-CN': '关于',
              },
              collapsed: true,
              autogenerate: { directory: 'about' },
            },
          ],
        },
        {
          label: 'References',
          translations: {
            'zh-CN': '参考',
          },
          collapsed: true,
          items: [
            {
              label: 'Security',
              translations: {
                'zh-CN': '安全',
              },
              collapsed: true,
              autogenerate: { directory: 'reference/acl' },
            },
            {
              label: 'Command Line Interface',
              translations: {
                'zh-CN': '命令行接口（CLI）',
              },
              link: '/reference/cli/',
            },
            {
              label: 'Configuration',
              translations: {
                'zh-CN': '配置',
              },
              link: '/reference/config/',
            },
            {
              label: 'Environment Variables',
              translations: {
                'zh-CN': '环境变量',
              },
              link: '/reference/environment-variables/',
            },
            {
              label: 'Webview Versions',
              translations: {
                'zh-CN': 'Webview 版本',
              },
              link: '/reference/webview-versions/',
            },
            {
              label: 'Releases',
              translations: {
                'zh-CN': '发行版',
              },
              collapsed: true,
              autogenerate: { directory: 'release' },
            },
            {
              label: 'JavaScript',
              collapsed: true,
              autogenerate: { directory: 'reference/javascript' },
            },
            {
              label: 'Rust (docs.rs)',
              link: 'https://docs.rs/tauri/2.0.0-rc/tauri/index.html',
            },
          ],
        },
        {
          label: 'Blog',
          translations: {
            'zh-CN': '博客',
          },
          collapsed: true,
          items: [
            {
              label: 'All posts',
              link: '/blog/',
            },
            {
              label: 'Recent posts',
              collapsed: false,
              autogenerate: { directory: 'blog', sort: 'date', order: 'descending' },
            },
          ],
        },
      ],
      locales,
      lastUpdated: true,
    }),
    astroD2({
      skipGeneration: process.env.CONTEXT !== 'd2',
      theme: {
        default: '105',
      },
    }),
    serviceWorker({
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        inlineWorkboxRuntime: true,
        skipWaiting: true,
        globIgnores: ['**_redirects**', '**_headers**'],
        globPatterns: ['**/*.js', '**/*.css'],
        runtimeCaching: [
          {
            urlPattern: new RegExp('.*'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'tauri-runtime',
              expiration: {
                maxAgeSeconds: 30 * 60, // 30 minutes
              },
            },
          },
        ],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      langs: ['powershell', 'ts', 'rust', 'bash', 'json', 'toml', 'html', 'js'],
    },
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: { ariaHidden: true, tabIndex: -1, class: 'heading-link' },
        },
      ],
    ],
  },
  redirects: {
    // Old blog url schema redirects
    '/blog/2022/06/19/tauri-1-0': '/blog/tauri-1-0',
    '/blog/tauri_1_0': '/blog/tauri-1-0',
    '/blog/2022/07/12/tauri-programme-turns-1-and-board-elections':
      '/blog/tauri-programme-turns-1-and-board-elections',
    '/blog/2022/09/15/tauri-1-1': '/blog/tauri-1-1',
    '/blog/2022/09/19/tauri-egui-0-1': '/blog/tauri-egui-0-1',
    '/blog/2022/11/18/tauri-1-2': '/blog/tauri-1-2',
    '/blog/2022/12/09/tauri-mobile-alpha': '/blog/tauri-mobile-alpha',
    '/blog/2023/02/03/tauri-2-0-0-alpha-3': '/blog/tauri-2-0-0-alpha-3',
    '/blog/2023/02/09/tauri-community-growth-and-feedback':
      '/blog/tauri-community-growth-and-feedback',
    '/blog/2023/03/01/create-tauri-app-version-3-released':
      '/blog/create-tauri-app-version-3-released',
    '/blog/2023/03/20/tauri-2-0-0-alpha-4': '/blog/tauri-2-0-0-alpha-4',
    '/blog/2023/05/03/tauri-1-3': '/blog/tauri-1-3',
    '/blog/2023/06/14/tauri-1-4': '/blog/tauri-1-4',
    '/blog/2023/06/15/tauri-board-elections-and-governance-updates':
      '/blog/tauri-board-elections-and-governance-updates',
    'about/intro': 'about/philosophy',
    // v1 /guides/debugging -> /guides/debug
    ...i18nRedirect('/v1/guides/debugging/application', '/guides/debug/application'),
    ...i18nRedirect('/v1/guides/debugging/vs-code', '/guides/debug/vs-code'),
    ...i18nRedirect('/v1/guides/debugging/rustrover', '/guides/debug/rustrover'),
    // v1 /guides/development -> /guides/develop
    ...i18nRedirect(
      '/v1/guides/development/development-cycle',
      '/guides/develop/development-cycle'
    ),
    ...i18nRedirect(
      '/v1/guides/development/updating-dependencies',
      '/guides/develop/updating-dependencies'
    ),
    // v1 /guides/distribution -> /guides/distribute
    ...i18nRedirect('/v1/guides/distribution/publishing', '/guides/distribute/'),
    ...i18nRedirect('/v1/guides/distribution/updater', '/plugin/updater/'),
    // v1 /guides/testing -> /guides/test
    ...i18nRedirect('/v1/guides/testing/mocking', '/guides/test/mocking'),
    ...i18nRedirect('/v1/guides/testing/webdriver/ci', '/guides/test/webdriver/ci'),
    ...i18nRedirect('/v1/guides/testing/webdriver/introduction', '/guides/test/webdriver/'),
    ...i18nRedirect(
      '/v1/guides/testing/webdriver/example/setup',
      '/guides/test/webdriver/example/'
    ),
    ...i18nRedirect(
      '/v1/guides/testing/webdriver/example/selenium',
      '/guides/test/webdriver/example/selenium'
    ),
    ...i18nRedirect(
      '/v1/guides/testing/webdriver/example/webdriverio',
      '/test/webdriver/example/webdriverio'
    ),

    // v1 /references
    ...i18nRedirect('/v1/references', '/concepts'),
    ...i18nRedirect('/v1/reference/architecture', '/concepts/architecture'),
    ...i18nRedirect('/v1/reference/architecture/process-model', '/concepts/process-model'),
    ...i18nRedirect('/v1/reference/architecture/security', '/concepts/tauri-security'),
    ...i18nRedirect(
      '/v1/reference/architecture/inter-process-communication',
      '/concepts/inter-process-communication'
    ),
    ...i18nRedirect(
      '/v1/reference/architecture/inter-process-communication/brownfield',
      '/concepts/inter-process-communication/brownfield'
    ),
    ...i18nRedirect(
      '/v1/reference/architecture/inter-process-communication/isolation',
      '/concepts/inter-process-communication/isolation'
    ),
    ...i18nRedirect('/v1/reference/security', '/concepts/development-security'),
    ...i18nRedirect('/v1/reference/configuration-files', '/reference/configuration-files'),
    ...i18nRedirect('/v1/reference/webview-versions', '/reference/webview-versions'),

    // Decommissioned locales -> refer to /public/_redirects file
    // '/ko/[...slug]': '/[...slug]',
    // '/it/[...slug]': '/[...slug]',
  },
  server: {
    headers: readHeaders(),
  },
  //
});

// Generates a redirect for each locale.
function i18nRedirect(from, to) {
  const routes = {};
  Object.keys(locales).map((locale) =>
    locale === 'root'
      ? (routes[from] = to)
      : (routes[`/${locale}/${from.replaceAll(/^\/*/g, '')}`] = `/${locale}/${to.replaceAll(
          /^\/*/g,
          ''
        )}`)
  );
  return routes;
}

// Read the HTTP header file in `public/_headers`
function readHeaders() {
  const header_file = fs
    .readFileSync('public/_headers', { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean);
  const headers = {};
  for (const line of header_file) {
    const [key, val] = line.trim().split(/\s*:\s*(.+)/);
    if (key != undefined && val != undefined) {
      headers[key] = val.toString();
    }
  }
  return headers;
}
