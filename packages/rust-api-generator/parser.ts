import type { RustDoc, Page, PageMember, ID } from './types';
import { PageMemberType, PageType } from './types/pages';
import { existsSync, readFileSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateContent } from './generator';

async function parseModules(
	rootPath: string,
	baseUrl: string,
	rustdoc: RustDoc,
	isCrate: boolean = false
): Promise<Page[]> {
	const pages: Page[] = [];
	if (isCrate) {
		const item = rustdoc.index[rustdoc.root];
		const path = rustdoc.paths[rustdoc.root];
		const members: PageMember[] = item.inner.module.items.map((id: ID) => {
			const member: PageMember = {
				type: PageMemberType.struct,
				item: rustdoc.index[id],
				path: rustdoc.paths[id],
			};
			return member;
		});
		pages.push({
			type: PageType.crate,
			path: join(rootPath, path.path.slice(1).join('/'), 'index.md'),
			content: await generateContent(PageType.crate, {
				title: path.path.join('::'),
				description: item.docs ?? '',
				moduleUrl: baseUrl,
				members: members,
			}),
		});
	} else {
		for (const id in rustdoc.paths) {
			const path = rustdoc.paths[id];
			if (path.kind !== 'module' || path.crate_id !== 0 || id === rustdoc.root) continue;
			const item = rustdoc.index[id];
			const members: PageMember[] = item.inner.module.items.map((id: ID) => {
				const member: PageMember = {
					type: PageMemberType.struct,
					item: rustdoc.index[id],
					path: rustdoc.paths[id],
				};
				return member;
			});
			pages.push({
				type: PageType.module,
				path: join(rootPath, path.path.slice(1).join('/'), 'index.md'),
				content: await generateContent(PageType.module, {
					title: path.path.join('::'),
					description: item.docs ?? '',
					moduleUrl: baseUrl,
					members: members,
				}),
			});
		}
	}
	return pages;
}

async function parseStructs(rootPath: string, baseUrl: string, rustdoc: RustDoc): Promise<Page[]> {
	const pages: Page[] = [];
	return pages;
}

/**
 * Parses a single JSON file
 */
export async function parseCrate(
	rustdoc: RustDoc,
	baseUrl: string,
	rootPath: string
): Promise<Page[]> {
	let pages: Page[] = [];
	const crateItem = rustdoc.index[rustdoc.root];

	for (const type in PageType) {
		switch (type) {
			case 'crate':
				pages = pages.concat(await parseModules(rootPath, baseUrl, rustdoc, true));
			case 'module':
				pages = pages.concat(await parseModules(rootPath, baseUrl, rustdoc));
			case 'struct':
				pages = pages.concat(await parseStructs(rootPath, baseUrl, rustdoc));
		}
	}
	return pages;
}

/**
 * Resolves the path to a json file for external crates
 * @param crate
 */
export async function crateResolver(crate: string): Promise<RustDoc | null> {
	const targetFolder = '../tauri/target';
	for (const file of readdirSync(targetFolder)) {
		if (file !== crate + '.json') continue;

		const rustdoc: RustDoc = JSON.parse(readFileSync(join(targetFolder, file), 'utf-8'));
		rustdoc.name = crate;
		return rustdoc;
	}
	return null;
}
