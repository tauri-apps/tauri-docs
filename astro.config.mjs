import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';
import configGenerator from './src/plugins/configGenerator';
import starlightLinksValidator from 'starlight-links-validator';

await configGenerator();

// https://astro.build/config
export default defineConfig({
	site: 'https://beta.tauri.app',
	compressHTML: true,
	build: {
		inlineStylesheets: 'always',
	},
	integrations: [
		starlightLinksValidator(),
		starlight({
			title: 'Tauri',
			description: 'The cross-platform app building toolkit',
			logo: {
				src: './src/assets/logo.svg',
				// light: './src/assets/logo_light.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/tauri-apps/tauri',
				discord: 'https://discord.com/invite/tauri',
				twitter: 'https://twitter.com/TauriApps',
				mastodon: 'https://fosstodon.org/@TauriApps',
			},
			// TODO: Be sure this is updated when the branch is switched
			editLink: {
				baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/next',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Quick Start',
					items: [
						{ label: 'Why Tauri?', link: '/2/guide/' },
						{ label: 'Prerequisites', link: '/2/guide/prerequisites' },
						{
							label: 'Create a Project',
							link: '/2/guide/create/',
						},
						{
							label: 'Upgrade & Migrate',
							link: '2/guide/upgrade-migrate',
						},
						{
							label: 'Core Concepts',
							link: '2/guide/core-concepts',
						},
						{
							label: 'Troubleshooting',
							link: '2/guide/troubleshoot',
						},
					],
				},
				{
					label: 'Workflow',
					items: [
						{
							label: 'Develop',
							link: '2/guide/develop',
						},
						{
							label: 'Debug',
							link: '2/guide/debug',
						},
						{
							label: 'Test',
							link: '2/guide/test',
						},
						{
							label: 'Build',
							link: '2/guide/build',
						},
						{
							label: 'Distribute',
							link: '2/guide/distribute',
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
					items: [
						{ label: 'All Features and Recipes', link: '2/guide/list' },
						{ label: 'Authenticator', link: '2/guide/authenticator' },
						{ label: 'Autostart', link: '2/guide/autostart' },
						{ label: 'CLI', link: '2/guide/cli' },
						{ label: 'Clipboard', link: '2/guide/clipboard' },
						{ label: 'Dialog', link: '2/guide/dialog' },
						{ label: 'File System', link: '2/guide/file-system' },
						{ label: 'Global Shortcut', link: '2/guide/global-shortcut' },
						{ label: 'HTTP Client', link: '2/guide/http-client' },
						{ label: 'Localhost', link: '2/guide/localhost' },
						{ label: 'Logging', link: '2/guide/logging' },
						{ label: 'Notification', link: '2/guide/notification' },
						{ label: 'OS Info', link: '2/guide/os-info' },
						{ label: 'Persisted Scope', link: '2/guide/persisted-scope' },
						{ label: 'Positioner', link: '2/guide/positioner' },
						{ label: 'Process', link: '2/guide/process' },
						{ label: 'Shell', link: '2/guide/shell' },
						{ label: 'Single Instance', link: '2/guide/single-instance' },
						{ label: 'SQL', link: '2/guide/sql' },
						{ label: 'Store', link: '2/guide/store' },
						{ label: 'Stronghold', link: '2/guide/stronghold' },
						{ label: 'Updater', link: '2/guide/updater' },
						{ label: 'Upload', link: '2/guide/upload' },
						{ label: 'Websocket', link: '2/guide/websocket' },
						{ label: 'Window State', link: '2/guide/window-state' },
					],
				},
			],
			locales,
			lastUpdated: true,
		}),
	],
	markdown: {
		shikiConfig: {
			langs: ['powershell'],
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
	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
