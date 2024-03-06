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
		//
		/*
		 * Write index file for each package
		 */
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
		const indexLink = `#### [All release](/releases)`;
		writeFileSync(
			join(baseDir, pkg.name, 'index.md'),
			`${releaseFrontmatter}\n${indexLink}\n${releases.map((r) => `- [${r.version}](/releases/${pkg.name}/v${r.version})`).join('\n')}`
		);

		/*
		 * Write files for each version
		 */
		let nextPage = '/releases';
		let nextLabel = pkg.name;
		const len = releases.length;
		for (let i = 0; i < len; i++) {
			const thisVersion = releases[i].version;
			let prevLabel, prevPage;
			if (i !== len - 1) {
				prevLabel = releases[i + 1].version;
				prevPage = `releases/${pkg.name}/v${releases[i + 1].version}`;
			}
			let navFrontmatter;
			if (i === len - 1) {
				navFrontmatter = [
					`prev: false`,
					`next:`,
					`   link: '${nextPage}'`,
					`   label: '${nextLabel}'`,
				];
			} else if (i === 0) {
				navFrontmatter = [
					`prev:`,
					`   link: '${prevPage}'`,
					`   label: '${prevPage}'`,
					`next: false`,
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

			const pageFrontmatter = [
				note,
				`title: '${pkg.name}@${thisVersion}'`,
				`slug: 'releases/${pkg.name}/v${thisVersion}'`,
				'template: splash',
				`editUrl: 'https://github.com/tauri-apps/tauri-docs/packages/releases-generator/build.ts'`,
			];

			const frontmatter = ['---', ...pageFrontmatter, ...navFrontmatter, '---'].join('\n');
			const indexLink = `[Return to: ${pkg.name}](/releases/${pkg.name})`;
			writeFileSync(
				join(baseDir, pkg.name, `v${thisVersion}.md`),
				`${frontmatter}\n${indexLink}\n\n${releases[i].notes}`
			);
			nextPage = `releases/${pkg.name}/v${thisVersion}`;
			nextLabel = `v${thisVersion}`;
		}
	}
}

generator();
