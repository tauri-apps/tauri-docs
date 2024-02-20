// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// https://docs.astro.build/en/reference/api-reference/#endpoint-context
export async function GET(context: APIContext) {
	const posts = await getCollection('docs', ({ id }) => {
		return id.startsWith('blog');
	});
	return rss({
		title: 'Tauri Blog',
		description: 'The cross-platform app building toolkit',
		// @ts-expect-error
		site: context.site,
		items: posts.map((post) => ({
			pubDate: post.data.date,
			description: post.data.excerpt,
			...post.data,
			link: `/${post.slug}/`,
		})),
	});
}
