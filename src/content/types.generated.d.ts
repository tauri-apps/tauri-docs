declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"api-core-cli-1": {
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "api-core-cli-1",
  data: any
},
},
"api-core-config-1": {
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "api-core-config-1",
  data: any
},
},
"api-core-js-1": {
"app.md": {
  id: "app.md",
  slug: "app",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"cli.md": {
  id: "cli.md",
  slug: "cli",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"clipboard.md": {
  id: "clipboard.md",
  slug: "clipboard",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"dialog.md": {
  id: "dialog.md",
  slug: "dialog",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"event.md": {
  id: "event.md",
  slug: "event",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"fs.md": {
  id: "fs.md",
  slug: "fs",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"globalShortcut.md": {
  id: "globalShortcut.md",
  slug: "globalShortcut",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"http.md": {
  id: "http.md",
  slug: "http",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"index.md": {
  id: "index.md",
  slug: "index",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"mocks.md": {
  id: "mocks.md",
  slug: "mocks",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"notification.md": {
  id: "notification.md",
  slug: "notification",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"os.md": {
  id: "os.md",
  slug: "os",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"path.md": {
  id: "path.md",
  slug: "path",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"process.md": {
  id: "process.md",
  slug: "process",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"shell.md": {
  id: "shell.md",
  slug: "shell",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"tauri.md": {
  id: "tauri.md",
  slug: "tauri",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"updater.md": {
  id: "updater.md",
  slug: "updater",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
"window.md": {
  id: "window.md",
  slug: "window",
  body: string,
  collection: "api-core-js-1",
  data: InferEntrySchema<"api-core-js-1">
},
},
"blog": {
"tauri-1-0.md": {
  id: "tauri-1-0.md",
  slug: "tauri-1-0",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-1-1.md": {
  id: "tauri-1-1.md",
  slug: "tauri-1-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-1-2.md": {
  id: "tauri-1-2.md",
  slug: "tauri-1-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-egui-0-1.md": {
  id: "tauri-egui-0-1.md",
  slug: "tauri-egui-0-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-mobile-alpha.md": {
  id: "tauri-mobile-alpha.md",
  slug: "tauri-mobile-alpha",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tauri-programme-turns-1-and-board-elections.md": {
  id: "tauri-programme-turns-1-and-board-elections.md",
  slug: "tauri-programme-turns-1-and-board-elections",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("./config");
}
