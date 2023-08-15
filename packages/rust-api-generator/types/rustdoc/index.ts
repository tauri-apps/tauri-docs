/**
 * RustDoc representation of a crates documentation
 */
export interface RustDoc {
	/**
	 * Crate ID
	 */
	root: ID;
	/**
	 * Name of the crate
	 */
	name: string;
	/**
	 * Crate version number
	 *
	 * May be `crate_version`
	 */
	version: undefined | null | string;
	/**
	 * Crate version number
	 *
	 * May be `version`
	 */
	crate_version: undefined | null | string;
	/**
	 * Whether private items were included
	 */
	include_private: boolean;
	/**
	 * Items in the crate
	 */
	index: {
		[key: ID]: Item;
	};
	/**
	 * Paths for items in the crate
	 */
	paths: {
		[key: ID]: ItemSummary;
	};
	/**
	 * External crates / dependencies
	 */
	external_crates: {
		[key: number]: ExternalCrate;
	};
	/**
	 * Format version of the generated docs
	 */
	format_version: number;
}

/**
 * The ID of an Item
 *
 * These are not the same between crates or even crate builds
 */
export type ID = string;

/**
 * Summary for an Item in paths
 */
export interface ItemSummary {
	/**
	 * `ID` of the crate the `Item` belongs to, the root crate is always 0
	 */
	crate_id: number;
	/**
	 * Path to the `Item`, e.g. `["some","path","Item"]`
	 */
	path: string[];
	/**
	 * Which type of `Item` this is referring to
	 */
	kind: string;
}

/**
 * Resolves a crate ID to its name and optionally to a link to its website
 */
export interface ExternalCrate {
	/**
	 * Name of the external crate/dependency
	 */
	name: string;
	/**
	 * Optional link to the crates site
	 */
	html_root_url: undefined | null | string;
}

/**
 * An Item in the `index`
 */
export interface Item {
	/**
	 * The ID of the item
	 */
	id: string;
	/**
	 * The ID of the crate this belongs to
	 */
	crate_id: number;
	/**
	 * The name of the `Item`
	 */
	name: string;
	/**
	 * The `Span` of the `Item`
	 */
	span: undefined | null | Span;
	/**
	 * The visibility of the `Item`
	 */
	visibility: Visibility;
	/**
	 * The docstring of the `Item`
	 */
	docs: undefined | null | string;
	/**
	 * A map of intra-doc link names to the IDs of the items they resolve to
	 */
	link: {
		[key: string]: ID;
	};
	/**
	 * Attributes on the item, e.g. `#[inline]`
	 */
	attrs: string[];
	/**
	 * Deprecation notice of the `Item`
	 */
	deprecation: undefined | null | Deprecation;
	/**
	 * Tends to be undefined! Use the name of the `inner` property instead
	 *
	 * The type of the inner `Item`
	 */
	kind: undefined | string;
	/**
	 * The actual item contents
	 */
	inner: any;
}

/**
 * Referenced code
 */
export interface Span {
	/**
	 * File that contains the referenced code
	 */
	filename: string;
	/**
	 * The beginning of the referenced code
	 *
	 * Row, Column
	 */
	begin: number[];
	/**
	 * The end of the referenced code
	 *
	 * Row, Column
	 */
	end: number[];
}

/**
 * Notes on the `Item`s deprecation notice
 */
export interface Deprecation {
	/**
	 * When was the `Item` deprecated
	 */
	since: undefined | null | string;
	/**
	 * Deprecation reason
	 */
	note: undefined | null | string;
}

/**
 * Restricted visibility to an `Item`
 */
export interface RestrictedVisibility {
	/**
	 * Parent ID
	 */
	parent: ID;
	/**
	 * Path of the Item as a string, e.g. `::some::item::here`
	 */
	path: string;
}

/**
 * Visibility of the `Item`
 *
 * @property default
 * @property public
 * @property crate
 * @property `RestrictedVisibility`
 */
export type Visibility = 'default' | 'public' | 'crate' | RestrictedVisibility;
