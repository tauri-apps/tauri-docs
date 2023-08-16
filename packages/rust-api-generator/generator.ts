import type { Page, PageContent, PageType } from './types';
import { existsSync, readFileSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

/**
 * Write a single page to disk
 */
export async function generatePage(page: Page) {
	mkdirSync(dirname(page.path), { recursive: true });
	writeFileSync(page.path, page.content);
}

/**
 * Generates content for a page
 *
 * @param type
 * @returns
 */
export async function generateContent(type: PageType, content: PageContent): Promise<string> {
	switch (type) {
		case 'crate':
			return await generateContentModule(content, true);
		case 'module':
			return await generateContentModule(content);
		case 'struct':
			return await generateContentStruct(content);
		default:
			throw Error('Unknown content type');
	}
}

/**
 * Generates a page header
 * @date 8/17/2023 - 12:23:19 AM
 *
 * @param {string} title
 * @returns {string}
 */
function header(title: string): string {
	return `---
title: '${title}'
editUrl: false
prev: false
next: false
---
`;
}

/**
 * Empty string if docs is null, only use first line
 * @date 8/17/2023 - 12:23:46 AM
 *
 * @param {(undefined | null | string)} docs
 * @returns {string}
 */
function fixDocs(docs: undefined | null | string): string {
	if (!docs) return '';
	return docs.split('\n')[0];
}

function members(content: PageContent): string {
	const output: string[] = [];
	const modules = content.members.filter((val) => 'module' in val.item.inner);
	if (modules.length > 0) output.push('## Modules\n\n');
	for (const member of modules) {
		output.push(
			`- [${member.item.name}](${content.moduleUrl}${member.path.path
				.slice(1)
				.join('/')}): ${fixDocs(member.item.docs)}`
		);
	}
	const structs = content.members.filter((val) => 'struct' in val.item.inner);
	if (structs.length > 0) output.push('## Structs\n\n');
	for (const member of structs) {
		output.push(
			`- [${member.item.name}](${content.moduleUrl}${member.item.name}): ${fixDocs(
				member.item.docs
			)}`
		);
	}
	return output.join('\n');
}

/**
 * Generates content for either a crate or a module, they are virtually identical
 *
 * @param isCrate
 * @returns
 */
export async function generateContentModule(
	content: PageContent,
	isCrate: boolean = false
): Promise<string> {
	return `${header((isCrate ? 'Crate' : 'Module') + ' ' + content.title)}

${content.description}
${members(content)}`;
}

/**
 * Generates content for a struct
 *
 * @returns
 */
export async function generateContentStruct(content: PageContent): Promise<string> {
	return '';
}
