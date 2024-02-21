// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// https://docs.astro.build/en/reference/api-reference/#endpoint-context
export async function GET(context: APIContext) {
	const posts = await getCollection('docs', ({ id }) => {
		return id.startsWith('blog');
	});

	posts.sort((a, b) => {
		const dateA = a.data.date;
		const dateB = b.data.date;
		if (dateA && dateB) {
			if (dateA < dateB) return 1;
			if (dateA > dateB) return -1;
			return 0;
		} else return 0;
	});

	return rss({
		title: 'Tauri Blog',
		description: 'The cross-platform app building toolkit',
		site: context.site as URL,
		items: posts.map((post) => ({
			pubDate: post.data.date,
			description: post.data.excerpt,
			...post.data,
			link: `/${post.slug}/`,
		})),
	});
}
