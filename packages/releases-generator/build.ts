import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const note =
	'\n# NOTE: This file is auto-generated in packages/releases-generator/build.ts\n# For corrections please edit it directly';
const packages = [
	{
		name: 'tauri',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/core/tauri/CHANGELOG.md',
	},
	{
		name: '@tauri-apps/api',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/api/CHANGELOG.md',
	},
	{
		name: 'tauri-cli',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli/CHANGELOG.md',
	},
	{
		name: '@tauri-apps/cli',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli/node/CHANGELOG.md',
	},
	{
		name: 'tauri-bundler',
		url: 'https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/bundler/CHANGELOG.md',
	},
	{
		name: 'wry',
		url: 'https://raw.githubusercontent.com/tauri-apps/wry/dev/CHANGELOG.md',
	},
	{
		name: 'tao',
		url: 'https://raw.githubusercontent.com/tauri-apps/tao/dev/CHANGELOG.md',
	},
];

const baseDir = '../../src/content/docs/releases';

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
		const releaseFrontmatter = [
			'---',
			note,
			`title: '${pkg.name}'`,
			`slug: 'releases/${pkg.name}'`,
			'prev: false',
			'next: false',
			`editUrl: 'https://github.com/tauri-apps/tauri-docs/packages/releases-generator/build.ts'`,
			'---',
		].join('\n');
		writeFileSync(
			join(baseDir, pkg.name, 'index.md'),
			`${releaseFrontmatter}\n${releases.map((r) => `- [${r.version}](/releases/${pkg.name}/v${r.version})`).join('\n')}`
		);
		let previousPage = '/releases';
		let previousPageLabel = pkg.name;

		for (let i = 0; i < releases.length - 1; i++) {
			const thisVersion = releases[i].version;
			const nextPageLabel = releases[i + 1].version;
			const nextPage = `releases/${pkg.name}/v${releases[i + 1].version}`;
			const versionFrontmatter = [
				'---',
				note,
				`title: '${pkg.name}@${thisVersion}'`,
				`slug: 'releases/${pkg.name}/v${thisVersion}'`,
				'template: splash',
				`prev:`,
				`   link: '${nextPage}'`,
				`   label: '${nextPageLabel}'`,
				`next:`,
				`   link: '${previousPage}'`,
				`   label: '${previousPageLabel}'`,
				`editUrl: 'https://github.com/tauri-apps/tauri-docs/packages/releases-generator/build.ts'`,
				'---',
			].join('\n');
			const indexLink = `[${pkg.name}](/releases/${pkg.name})`;
			writeFileSync(
				join(baseDir, pkg.name, `v${thisVersion}.md`),
				`${versionFrontmatter}\n${indexLink}\n\n${releases[i].notes}`
			);
			previousPage = `releases/${pkg.name}/v${thisVersion}`;
			previousPageLabel = `v${thisVersion}`;
		}
		const t = releases.length - 1;
		const version = releases[t].version;
		const versionFrontmatter = [
			'---',
			note,
			`title: '${pkg.name}@${version}'`,
			`slug: 'releases/${pkg.name}/v${version}'`,
			'template: splash',
			`prev: false`,
			`next:`,
			`   link: '${previousPage}'`,
			`   label: '${previousPageLabel}'`,
			`editUrl: 'https://github.com/tauri-apps/tauri-docs/packages/releases-generator/build.ts'`,
			'---',
		].join('\n');
		const indexLink = `[${pkg.name}](/releases/${pkg.name})`;
		writeFileSync(
			join(baseDir, pkg.name, `v${version}.md`),
			`${versionFrontmatter}\n${indexLink}\n\n${releases[t].notes}`
		);

		// writeFileSync(join(baseDir, pkg.name, `v${version}.md`), `${versionFrontmatter}\n${version}`);
		// 	previousPage = `releases/${pkg.name}/v${version}`;
		// 	previousPageLabel = `v${version}`;
	}
}

generator();
