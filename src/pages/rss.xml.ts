// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getCollection('docs', ({ id }) => {
		return id.startsWith('blog');
	});
	return rss({
		title: 'Tauri Blog',
		description: 'The cross-platform app building toolkit',
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		// @ts-expect-error
		site: context.site,
		items: posts.map((post) => ({
			pubDate: post.data.date,
			description: post.data.excerpt,
			...post.data,
			// Generate a `url` from each post `slug`
			// This assumes all blog posts are rendered as `/blog/[slug]` routes
			// https://docs.astro.build/en/guides/content-collections/#generating-pages-from-content-collections
			link: `/blog/${post.slug}/`,
		})),
	});
}
