import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';
import configGenerator from './src/plugins/configGenerator';

await configGenerator();

// https://astro.build/config
export default defineConfig({
	site: 'https://beta.tauri.app',
	output: 'static',
	compressHTML: true,
	build: {
		inlineStylesheets: 'always',
	},
	integrations: [
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
			editLink: {
				baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/starlight',
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
							label: 'Plugins',
							link: '2/guide/plugins',
						},
					],
				},
				{
					label: 'Guides',
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
							label: 'Build & Distribute',
							link: '2/guide/build-distribute',
						},
						{
							label: 'Troubleshoot',
							link: '2/guide/troubleshoot',
						},
					],
				},
				{
					label: 'Features & Recipes',
					items: [
						/*
						{
						  label: 'Admin access',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Asset protocol',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Authentication',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Autostart',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Clipboard',
						  link: '2/recipe/window-customization',
						},
						*/
						{
						  label: 'Commands',
						  link: '2/recipe/commands',
						},
						/*
						{
						  label: 'Dialogs',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Errors',
						  link: '2/recipe/window-customization',
						},
						*/
						{
						  label: 'Events',
						  link: '2/recipe/events',
						},
						/*
						{
						  label: 'Filesystem',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Logging',
						  link: '2/recipe/window-customization',
						},
						*/
						{
						  label: 'Multiwindow',
						  link: '2/recipe/multiwindow',
						},
						{
						  label: 'Notifications',
						  link: '2/recipe/notifications',
						},
						/*
						{
						  label: 'Process',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'SQL',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Scopes',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Shell',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Shortcuts',
						  link: '2/recipe/window-customization',
						},
						*/
						{
						  label: 'Splashscreen',
						  link: '2/recipe/splashscreen',
						},
						{
						  label: 'States',
						  link: '2/recipe/states',
						},
						/*
						{
						  label: 'Store',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Stronghold',
						  link: '2/recipe/window-customization',
						},
						*/
						{
						  label: 'System Tray',
						  link: '2/recipe/system-tray',
						},
						/*
						{
						  label: 'Updater',
						  link: '2/recipe/window-customization',
						},
						{
						  label: 'Websocket',
						  link: '2/recipe/window-customization',
						},
						*/
						{
						  label: 'Window Menu',
						  link: '2/recipe/window-menu',
						},
					  ],					  
				},
				{
					label: 'References',
					items: [
						{
							label: 'Configuration',
							link: '2/reference/config',
						},
						{
							label: 'Command Line Interface (CLI)',
							link: '2/reference/cli',
						},
						{
							label: 'Core JavaScript API',
							link: '2/reference/core/js',
						},
						{
							label: 'Core Rust API (via Docs.rs)',
							// TODO: Is there a way to link this to the latest pre-released version?
							link: 'https://docs.rs/tauri/~2.0.0-alpha',
						},
						{
							label: 'Plugin References',
							link: '2/reference/plugin',
						},
					],
				},
				{
					label: 'Tauri v1',
					link: 'https://tauri.app',
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
