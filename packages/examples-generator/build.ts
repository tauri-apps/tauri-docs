import { join, dirname } from 'node:path';
import { readdirSync, writeFileSync, readFileSync, mkdir } from 'node:fs';
import { fileURLToPath } from 'node:url';

const rootPath = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const examplesPath = join(rootPath, 'packages', 'tauri', 'examples');
const examplesOutputPath = join(rootPath, 'src', 'content', 'docs', '2', 'example');

async function main() {
	console.log('Copying examples', examplesPath);
	for (const example of readdirSync(examplesPath, { withFileTypes: true })) {
		if (example.name.startsWith('.') || example.isFile()) continue;
		const sourcePath = join(examplesPath, example.name, 'README.md');
		const outPath = join(examplesOutputPath, example.name) + '.md';
		writeFileSync(outPath, readFileSync(sourcePath, 'utf-8'));
	}
}
main();
