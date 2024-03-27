import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const note =
	'\n# NOTE: This file was auto-generated bu packages/releases-generator/build.ts\n# For corrections, please edit it directly';
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
const pagesDir = '../../src/pages/releases';

writeFileSync(join(baseDir, `.gitignore`), `${note}\n\n*.mdx\n*.md`);
writeFileSync(join(pagesDir, `.gitignore`), `${note}\n\n*.astro`);

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
		mkdirSync(join(pagesDir, pkg.name), { recursive: true });

		const allVersions: string[] = [];

		/*
		 * Write files for each version
		 */
		const len = releases.length;
		for (let i = 0; i < len; i++) {
			const thisVersion = releases[i].version;
			allVersions.push(`"${thisVersion}"`);

			const pageFrontmatter = [
				note,
				`title: '${pkg.name}@${thisVersion}'`,
				`description: '${thisVersion}'`,
			];
			const frontmatter = ['---', ...pageFrontmatter, '---'].join('\n');
			writeFileSync(
				join(baseDir, pkg.name, `_v${thisVersion}.md`),
				`${frontmatter}\n${entitify(releases[i].notes)}`
			);
		}

		// Gen erate Astro page in pagesDir
		const releasePage = `---
		import Releases from '@components/Releases.astro';
		const pages = await Astro.glob('src/content/docs/releases/${pkg.name}/*.md');
		---
		<Releases pkgName="${pkg.name}" pkgTag="${pkg.tag}" versionList={[${allVersions}]} pages={pages} />
		`;
		writeFileSync(join(pagesDir, `${pkg.name}.astro`), `${releasePage}`);
	}

	// Generate index page in baseDir
	const extraNote =
		'# To quickly preview changes, you can edit this file, then make sure you copy the changes to the releases generator script\n';
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
	<LinkCard title="tauri" href="/releases/tauri/" />
	<LinkCard title="@tauri-apps/api" href="/releases/@tauri-apps/api/" />
	<LinkCard title="tauri-cli (Rust)" href="/releases/tauri-cli/" />
	<LinkCard title="@tauri-apps/cli (JavaScript)" href="/releases/@tauri-apps/cli/" />
	<LinkCard title="tauri-bundler" href="/releases/tauri-bundler/" />
	<LinkCard title="wry" href="/releases/wry/" />
	<LinkCard title="tao" href="/releases/tao/" />
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
