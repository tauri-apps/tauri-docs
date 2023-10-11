// ISSUE: Some pages don't have description field in the frontmatter, but have title. In those cases it is returning undefined written on the OG image. Example: /features/commands/ 

// TODO: Define default or import from somewhere else
const SITE_TITLE = 'Tauri';
const SITE_DESCRIPTION = 'Tauri is awesome';
import { breakText } from './utils';
import { createRequire } from 'module';

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
	const paths = ['index'];

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
		template = createTemplate(info.frontmatter.title, info.frontmatter.description);
	} else {
		template = createTemplate(SITE_TITLE, SITE_DESCRIPTION);
	}

	// Generate our image
	const svgBuffer = Buffer.from(template);
	const body = await sharp(svgBuffer).resize(1200, 675).png().toBuffer();

	return new Response(body);
}



function createTemplate(title: string, description: string): string {
	const [titleFirstLine, titleSecondLine] = breakText(title, 2, 30);

	const [descriptionFirstLine, descriptionSecondLine, descriptionThirdLine] = breakText(
		description,
		3,
		40
	);
	// TODO: Make a proper design and revise text layout.
	return `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1200 675">
    <style>
      .title {
        fill: #fff;
        font: bold 64pt sans-serif;
      }
      .description {
        fill: rgb(132, 131, 130);
        font: 40pt sans-serif;
      }
      .link {
        fill: rgb(50, 50, 50);
        font: 32pt sans-serif;
      }
    </style>
    <text x="50" y="350" font-family="Open Sans" class="title">${titleFirstLine || ''}</text>
    <text x="50" y="420" font-family="Open Sans" class="title">${titleSecondLine || ''}</text>
    <!-- max length 25 chars -->
    <text x="50" y="490" font-family="Open Sans" class="description"
      >${descriptionFirstLine || ''}</text
    >
    <text x="50" y="530" font-family="Open Sans" class="description"
      >${descriptionSecondLine || ''}</text
    >
    <text x="50" y="570" font-family="Open Sans" class="description"
      >${descriptionThirdLine || ''}</text
    >
    <text x="840" y="620" font-family="Open Sans" class="link">TAURI IS AWESOME</text>
  
    <defs>
      <radialGradient
        id="a"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 778 -1531 0 1126 629)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#fff"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </radialGradient>
    </defs>
  </svg>`;
}
