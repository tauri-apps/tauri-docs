import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const note =
	'\n# NOTE: This file is auto-generated in packages/releases-generator/build.ts\n# For corrections please edit it directly';
const packages = [
	{
		name: 'tauri',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/core/tauri/CHANGELOG.md',
		tag: 'https://github.com/tauri-apps/tauri/releases/tag',
	},
	{
		name: '@tauri-apps/api',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/api/CHANGELOG.md',
		tag: 'https://github.com/tauri-apps/tauri/releases/tag',
	},
	{
		name: 'tauri-cli',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli/CHANGELOG.md',
		tag: 'https://github.com/tauri-apps/tauri/releases/tag',
	},
	{
		name: '@tauri-apps/cli',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli/node/CHANGELOG.md',
		tag: 'https://github.com/tauri-apps/tauri/releases/tag',
	},
	{
		name: 'tauri-bundler',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/bundler/CHANGELOG.md',
		tag: 'https://github.com/tauri-apps/tauri/releases/tag',
	},
	{
		name: 'wry',
		url: 'https://raw.githubusercontent.com/tauri-apps/wry/dev/CHANGELOG.md',
		tag: 'https://github.com/tauri-apps/wry/releases/tag',
	},
	{
		name: 'tao',
		url: 'https://raw.githubusercontent.com/tauri-apps/tao/dev/CHANGELOG.md',
		tag: 'https://github.com/tauri-apps/tao/releases/tag',
	},
];

const baseDir = '../../src/content/docs/releases';

let latestVersions: {
	[key: string]: string;
} = {};

async function generator() {
	for (const pkg of packages) {
		const response = await fetch(pkg.url);
		const responseText: string = await response.text();
		const releases = responseText
			.split('## \\[')
			.filter((item) => !item.includes('# Changelog'))
			.map((section) => {
				const [version, ...c] = section.split('\n');
				const contents = c.join('\n');
				return {
					version: version.replace('\\[', '').replace(']', ''),
					notes: contents,
				};
			})
			.filter(({ version }) => !version.includes('Not Published'));

		mkdirSync(join(baseDir, pkg.name), { recursive: true });
		//
		/*
		 * Write files for each version
		 */
		let nextPage = '/releases';
		let nextLabel = pkg.name;
		const len = releases.length;
		for (let i = 0; i < len; i++) {
			/**
			 * Deal with next-prev labels
			 */
			const thisVersion = releases[i].version;
			let prevLabel, prevPage;
			let navFrontmatter;
			if (i !== len - 1) {
				prevLabel = releases[i + 1].version;
				prevPage = `releases/${pkg.name}/v${releases[i + 1].version}`;
			}
			if (i === 0) {
				// latest version
				latestVersions[pkg.name] = `v${thisVersion}`;
				navFrontmatter = [
					`prev:`,
					`   link: '${prevPage}'`,
					`   label: '${prevLabel}'`,
					`next: false`,
				];
			} else if (i === len - 1) {
				// earliest version
				navFrontmatter = [
					`prev: false`,
					`next:`,
					`   link: '${nextPage}'`,
					`   label: '${nextLabel}'`,
				];
			} else {
				navFrontmatter = [
					`prev:`,
					`   link: '${prevPage}'`,
					`   label: '${prevLabel}'`,
					`next:`,
					`   link: '${nextPage}'`,
					`   label: '${nextLabel}'`,
				];
			}

			//
			const pageFrontmatter = [
				note,
				`title: '${pkg.name}@${thisVersion}'`,
				`description: '${thisVersion}'`,
				`slug: 'releases/${pkg.name}/v${thisVersion}'`,
				'template: splash',
				`editUrl: 'https://github.com/tauri-apps/tauri-docs/packages/releases-generator/build.ts'`,
			];

			const frontmatter = ['---', ...pageFrontmatter, ...navFrontmatter, '---'].join('\n');
			//
			const indexLink = `[Return](/releases)`;
			const viewInGitHub = `<a href="${pkg.tag}/${pkg.name}-v${thisVersion}">View on GitHub</a>`;
			const linksDiv = `<div style="margin-bottom:3rem; display: flex; justify-content: space-between; align-items: center"><span>${indexLink}</span><span>${viewInGitHub}</span></div>`;
			//
			const sidebar = `\nimport ReleaseSidebar from '@components/list/ReleaseSidebar.astro';
			\n\n<ReleaseSidebar slug="releases/${pkg.name}"  packageName="${pkg.name}" />\n`;

			writeFileSync(
				join(baseDir, pkg.name, `v${thisVersion}.mdx`),
				`${frontmatter}\n${sidebar}\n${linksDiv}\n${entitify(releases[i].notes)}`
			);

			// use in next iteration
			nextPage = `releases/${pkg.name}/v${thisVersion}`;
			nextLabel = `v${thisVersion}`;
		}
	}

	// Generate index page
	const extraNote =
		'# To quickly preview changes, you can edit this file, them make sure you copy the changes over the source build.ts script\n';
	const indexPage = [
		'---',
		note,
		extraNote,
		`title: 'Tauri Core Ecosystem Releases'`,
		`editUrl: 'https://github.com/tauri-apps/tauri-docs/packages/releases-generator/build.ts'`,
		'---',
	].join('\n');

	const indexPageContent = `import { LinkCard, CardGrid } from '@astrojs/starlight/components';\n
<CardGrid>
	<LinkCard title="tauri" href="/releases/tauri/${latestVersions['tauri']}" />
	<LinkCard title="@tauri-apps/api" href="/releases/@tauri-apps/api/${latestVersions['@tauri-apps/api']}" />
	<LinkCard title="tauri-cli (JavaScript)" href="/releases/tauri-cli/${latestVersions['tauri-cli']}" />
	<LinkCard title="@tauri-apps/cli (Rust)" href="/releases/@tauri-apps/cli/${latestVersions['@tauri-apps/cli']}" />
	<LinkCard title="tauri-bundler" href="/releases/tauri-bundler/${latestVersions['tauri-bundler']}" />
	<LinkCard title="wry" href="/releases/wry/${latestVersions['wry']}" />
	<LinkCard title="tao" href="/releases/tao/${latestVersions['tao']}" />
</CardGrid>`;

	writeFileSync(join(baseDir, 'index.mdx'), `${indexPage}\n${indexPageContent}`);
}

function entitify(str: string): string {
	return str
		.replace(/[&<>"']/g, function (entity) {
			switch (entity) {
				case '&':
					return '&amp;';
				case '<':
					return '&lt;';
				case '>':
					return '&gt;';
				case '"':
					return '&quot;';
				case "'":
					return '&#39;';
				default:
					return entity;
			}
		})
		.replace(/\$\{/g, '$\\{');
}

generator();
