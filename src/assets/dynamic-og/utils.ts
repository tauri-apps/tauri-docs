// TODO: analyze what really needs escaping in frontmatter, it seems ' and " is not necessary https://developer.mozilla.org/en-US/docs/Glossary/Entity
function escape(unsafe: string) {
	if (unsafe) {
		if (unsafe.includes('&amp;')) {
			return unsafe;
		} else {
			// &, <, > are necessary
			return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
		}
	}
}

export function matchPath(path: string, match: string): boolean {
	path = path.replace('content/docs', '');
	return path.startsWith(match);
}

export function breakText(str: string, maxLines: number, maxLineLen: number) {
	const segmenterTitle = new Intl.Segmenter('en-US', { granularity: 'word' });
	const segments = segmenterTitle.segment(str);

	let linesOut = [''];
	let lineNo = 0;
	let offsetInLine = 0;
	for (const word of Array.from(segments)) {
		if (offsetInLine + word.segment.length >= maxLineLen) {
			lineNo++;
			offsetInLine = 0;
			linesOut.push('');
		}

		if (lineNo >= maxLines) {
			return linesOut.slice(0, maxLines);
		}

		linesOut[lineNo] += escape(word.segment);
		offsetInLine += word.segment.length;
	}

	return linesOut;
}

// to the Head.astro
export const imageURL = Object.fromEntries(
	Object.entries(import.meta.glob('../../content/docs/**/index.{md,mdx}')).map(([path]) => {
		path = path.replaceAll('../../content/docs', '');
		path = path.replace('.mdx', '');
		path = path.replace('.md', '');
		path = path.replace(/\/$/, '');
		const pageURL = path.replace('/index', '');
		return [pageURL, path];
	})
);

// to the [...path].png.ts
export const docsContent = Object.fromEntries(
	Object.entries(import.meta.glob('../../content/docs/**/*.{md,mdx}')).map(([path, getInfo]) => {
		path = path.replaceAll('../', '');
		path = path.replace('.mdx', '');
		path = path.replace('.md', '');
		return [path, getInfo];
	})
);