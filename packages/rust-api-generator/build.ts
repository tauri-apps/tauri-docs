import { parseCrate, crateResolver } from './parser';
import { generatePage } from './generator';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// IMPORTANT: Keep these up to date and correct
const baseUrl = '/2/reference/core/rust';
const rootDir = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const docsPath = join(rootDir, 'src', 'content', 'docs', '2', 'reference', 'core', 'rust');
const documentCrates = [
	'tauri',
	'tauri-build',
	'tauri-codegen',
	'tauri-macros',
	'tauri-runtime',
	'tauri-runtime-wry',
	'tauri-utils',
];

async function main() {
	console.log('Starting');
	for (const crate of documentCrates) {
		console.log(`Documenting crate: ${crate}`);
		const rustdoc = await crateResolver(crate);
		if (!rustdoc) {
			console.error(`Crate could not be resolved: ${crate}`);
			continue;
		}
		const pages = await parseCrate(rustdoc, `${baseUrl}/${crate}/`, join(docsPath, crate));
		for (const page of pages) {
			console.log(`Generating page: ${page.path}`);
			await generatePage(page);
		}
	}
}

main();
