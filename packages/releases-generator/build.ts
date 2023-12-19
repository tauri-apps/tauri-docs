import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

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

// FIXME: starlight apparently doesn't work well if the file continas multiple `.`
function encodeVersion(v: string): string {
	return v.replaceAll('.', '_');
}

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
		writeFileSync(
			join(baseDir, pkg.name, 'index.md'),
			`---\ntitle: '${pkg.name}'\nslug: '${pkg.name}'\ntemplate: splash\n---\n\n${releases
				.map((r) => `- [${r.version}](/releases/${pkg.name}/v${encodeVersion(r.version)})`)
				.join('\n')}`
		);

		for (const release of releases) {
			writeFileSync(
				join(baseDir, pkg.name, `v${release.version}.md`),
				`---\ntitle: '${pkg.name}@${release.version}'\nslug: 'v${release.version}'\ntemplate: splash\n---\n\n${release.notes}`
			);
		}
	}
}

generator();
