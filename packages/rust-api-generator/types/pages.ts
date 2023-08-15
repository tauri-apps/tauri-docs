import type { Item, ItemSummary } from './rustdoc';

/**
 * A `Page` to be rendered
 */
export interface Page {
	/**
	 * The type of the page
	 */
	type: PageType;
	/**
	 * Path to the page .md file
	 */
	path: string;
	/**
	 * Contents of the page
	 */
	content: string;
}

/**
 * Page content used for templating
 */
export interface PageContent {
	/**
	 * Page title
	 */
	title: string;
	/**
	 * URL to the page
	 */
	moduleUrl: string;
	/**
	 * Page description
	 */
	description: string;
	/**
	 * Member items of this page
	 */
	members: PageMember[];
}

export interface PageMember {
	type: PageMemberType;
	item: Item;
	path: ItemSummary;
}

/**
 * The type of the page
 */
export enum PageMemberType {
	'module' = 'module',
	'struct' = 'struct',
}

/**
 * The type of the page
 */
export enum PageType {
	'crate' = 'crate',
	'module' = 'module',
	'struct' = 'struct',
}
