import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';
import configGenerator from './src/plugins/configGenerator';
import starlightLinksValidator from 'starlight-links-validator';
import starlightBlog from 'starlight-blog';

await configGenerator();

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
};

const site = 'https://beta.tauri.app';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlightLinksValidator(),
		starlightBlog({ authors }),
		starlight({
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
			},
			components: {
				Footer: 'src/components/overrides/Footer.astro',
				MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
				Sidebar: 'starlight-blog/overrides/Sidebar.astro',
				ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
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
			],
			// TODO: Be sure this is updated when the branch is switched
			editLink: {
				baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/next',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Quick Start',
					items: [
						{ label: 'What is Tauri?', link: 'guides' },
						{
							label: 'Prerequisites',
							translations: {
								es: 'Prerrequisitos',
							},
							link: 'guides/prerequisites',
						},
						{
							label: 'Create a Project',
							link: 'guides/create',
						},
						{
							label: 'Frontend Configuration',
							translations: {
								es: 'Configuración del Frontend',
							},
							link: 'guides/frontend',
						},
						{
							label: 'Upgrade & Migrate',
							link: 'guides/upgrade-migrate',
						},
						{
							label: 'Core Concepts',
							link: 'concepts',
						},
						{
							label: 'Troubleshooting',
							link: 'guides/troubleshoot',
						},
					],
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Develop',
							link: 'guides/develop',
						},
						{
							label: 'Debug',
							link: 'guides/debug',
						},
						{
							label: 'Test',
							link: 'guides/test',
						},
						{
							label: 'Build',
							link: 'guides/build',
						},
						{
							label: 'Distribute',
							link: 'guides/distribute',
						},
						{
							label: 'Plugin Development',
							link: 'guides/plugins',
						},
					],
				},
				{
					label: 'References',
					items: [
						{
							label: 'Tauri Configuration',
							link: '2/reference/config',
						},
						{
							label: 'Command Line Interface (CLI)',
							link: '2/reference/cli',
						},
						{
							label: 'JavaScript API',
							link: '2/reference/js',
						},
						{
							label: 'Rust API (via Docs.rs)',
							// TODO: Is there a way to link this to the latest pre-released version?
							link: 'https://docs.rs/tauri/~2.0.0-alpha',
						},
					],
				},
				{
					label: 'Features & Recipes',
					autogenerate: { directory: 'features' },
				},
			],
			locales,
			lastUpdated: true,
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
	},
	//
	// v1 /guides/testing -> /guides/test
	'/v1/guides/testing/mocking': '/guides/testing/mocking',
	'/v1/guides/testing/webdriver/ci': '/guides/teste/webdriver/ci',
	'/v1/guides/testing/webdriver/introduction': '/guides/test/webdriver/introduction',
	'/v1/guides/testing/webdriver/example/setup': '/guides/test/webdriver/example/setup',
	'/v1/guides/testing/webdriver/example/selenium': '/guides/webdriver/example/selenium',
	'/v1/guides/testing/webdriver/example/webdriverio': '/guides/teste/webdriver/example/webdriverio',
	// i18n fr
	'/fr/v1/guides/testing/mocking': '/fr/guides/testing/mocking',
	'/fr/v1/guides/testing/webdriver/ci': '/fr/guides/teste/webdriver/ci',
	'/fr/v1/guides/testing/webdriver/introduction': '/fr/guides/test/webdriver/introduction',
	'/fr/v1/guides/testing/webdriver/example/setup': '/fr/guides/test/webdriver/example/setup',
	'/fr/v1/guides/testing/webdriver/example/selenium': '/fr/guides/webdriver/example/selenium',
	'/fr/v1/guides/testing/webdriver/example/webdriverio': '/fr/guides/teste/webdriver/example/webdriverio',
	// i18n ko
	'/ko/v1/guides/testing/mocking': '/ko/guides/testing/mocking',
	'/ko/v1/guides/testing/webdriver/ci': '/ko/guides/teste/webdriver/ci',
	'/ko/v1/guides/testing/webdriver/introduction': '/ko/guides/test/webdriver/introduction',
	'/ko/v1/guides/testing/webdriver/example/setup': '/ko/guides/test/webdriver/example/setup',
	'/ko/v1/guides/testing/webdriver/example/selenium': '/ko/guides/webdriver/example/selenium',
	'/ko/v1/guides/testing/webdriver/example/webdriverio': '/ko/guides/teste/webdriver/example/webdriverio',
	// i18n zh-cn
	'/zh-cn/v1/guides/testing/mocking': '/zh-cn/guides/testing/mocking',
	'/zh-cn/v1/guides/testing/webdriver/ci': '/zh-cn/guides/teste/webdriver/ci',
	'/zh-cn/v1/guides/testing/webdriver/introduction': '/zh-cn/guides/test/webdriver/introduction',
	'/zh-cn/v1/guides/testing/webdriver/example/setup': '/zh-cn/guides/test/webdriver/example/setup',
	'/zh-cn/v1/guides/testing/webdriver/example/selenium': '/zh-cn/guides/webdriver/example/selenium',
	'/zh-cn/v1/guides/testing/webdriver/example/webdriverio': '/zh-cn/guides/teste/webdriver/example/webdriverio',
	// i18n it
	'/it/v1/guides/testing/mocking': '/it/guides/testing/mocking',
	'/it/v1/guides/testing/webdriver/ci': '/it/guides/teste/webdriver/ci',
	'/it/v1/guides/testing/webdriver/introduction': '/it/guides/test/webdriver/introduction',
	'/it/v1/guides/testing/webdriver/example/setup': '/it/guides/test/webdriver/example/setup',
	'/it/v1/guides/testing/webdriver/example/selenium': '/it/guides/webdriver/example/selenium',
	'/it/v1/guides/testing/webdriver/example/webdriverio': '/it/guides/teste/webdriver/example/webdriverio',
	//
});
