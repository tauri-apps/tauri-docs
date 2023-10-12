// ISSUE: Some pages don't have description field in the frontmatter, but have title. In those cases it is returning undefined written on the OG image. Example: /features/commands/

// TODO: Fix breaking character '&'

// TODO: Define default or import from somewhere else
const SITE_TITLE = 'Tauri';
const SITE_DESCRIPTION = 'Tauri is awesome';
import { createRequire } from 'module';
import { matchPath } from '@assets/dynamic-og/utils';
import { createBlogTemplate, createDefaultTemplate } from '@assets/dynamic-og/templates';

// We can't import sharp normally because it's a CJS thing and those don't seems to work well with Astro, Vite, everyone
const cjs = createRequire(import.meta.url);
const sharp = cjs('sharp');

const blogPosts = Object.fromEntries(
	Object.entries(import.meta.glob('../../content/docs/**/*.{md,mdx}')).map(([path, getInfo]) => {
		path = path.replaceAll('../', '');
		path = path.replace('.mdx', '');
		path = path.replace('.md', '');

		return [path, getInfo];
	})
);

export async function getStaticPaths() {
	const paths = ['index', 'blog'];

	for (const [path, getInfo] of Object.entries(blogPosts)) {
		const info = (await getInfo()) as Record<string, any>;

		if (!info.frontmatter.draft) {
			paths.push(path);
		}
	}

	return paths.map((path) => ({ params: { path } }));
}

export async function GET({ params, request }) {
	const getInfo = blogPosts[params.path];
	let template;
	if (getInfo) {
		const info = (await getInfo()) as Record<string, any>;
		const fm = info.frontmatter;

		if (matchPath(params.path, '/blog')) {
			const date: Date = new Date(fm.date);
			// en-GB -> dd MM yy
			const postDate = date.toLocaleDateString('en-GB', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			});
			template = fm.excerpt
				? createBlogTemplate(fm.title, postDate, fm.excerpt)
				: createBlogTemplate(fm.title, postDate);
		} else {
			template = fm.description
				? createDefaultTemplate(fm.title, fm.description)
				: createDefaultTemplate(fm.title);
		}
	} else {
		// TODO: define default template text
		template = createDefaultTemplate(SITE_TITLE, SITE_DESCRIPTION);
	}

	// Generate our image
	const svgBuffer = Buffer.from(template);
	const body = await sharp(svgBuffer).resize(1200, 675).png().toBuffer();

	return new Response(body);
}
