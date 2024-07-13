import type { CollectionEntry } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { allPages } from 'src/utils/content';

// setup rtlLanguages here
const rtlLanguages = new Set(['']);
const getLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) => slug.split('/')[0];

/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = process.env.CONTEXT == 'production' || import.meta.env.DEV ? allPages : [];
// const paths = allPages // use this to build locally

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));

/**
 * TODO: This can be improved
 * Helper function to clamp a string
 * @returns A string that fits in two lines with "..." at the end if text is longer than MAX_LEN
 */
function clampTwoLines(txt: string, fontSize: number): string {
  // those numbers are what more or less fit to description and title size, not precisely
  // it can vary based on font, as of now it matches Inter.
  // Maybe this can help? https://github.com/adambisek/string-pixel-width/blob/master/src/pixelWidthCalculator.html
  // or this https://github.com/Evgenus/js-server-text-width
  let MAX_LEN = 70;
  // title:
  if (fontSize > 60) {
    MAX_LEN = 48;
  }
  if (txt.length > MAX_LEN) {
    txt = txt.trim().substring(0, MAX_LEN).trim();
    txt[txt.length - 1] === '.' ? (txt += '..') : (txt += '...');
  }
  return txt;
}

// REFERENCE:
// https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
export const { getStaticPaths, GET } = OGImageRoute({
  param: 'docs',
  pages,
  getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => {
    /** titleSize and descSize are coupled with @function clampTwoLines() */
    let [titleSize, descSize] = [72, 48];
    let description = '';
    let title = clampTwoLines(data.title, titleSize);
    if (data.description) {
      description = clampTwoLines(data.description, descSize);
    }
    if (slug.startsWith('blog/') && data.date && data.excerpt) {
      description = clampTwoLines(data.excerpt, descSize);
    }
    return {
      title,
      description,
      dir: rtlLanguages.has(getLangFromSlug(slug)) ? 'rtl' : 'ltr',
      padding: 66,
      bgImage: { path: './src/assets/og-bg.png' },
      logo: { path: './src/assets/og-logo.png' },
      font: {
        title: {
          /** Size is coupled with @function clampTwoLines() */
          size: titleSize,
          lineHeight: 1.25,
          weight: 'Normal',
          families: ['Inter', 'Noto Sans SC Thin'],
        },
        description: {
          /** Size is coupled with @function clampTwoLines() */
          size: descSize,
          lineHeight: 1.25,
          weight: 'Normal',
          families: ['Inter', 'Noto Sans SC Thin'],
        },
      },
      fonts: [
        './node_modules/@fontsource-variable/inter/files/inter-latin-standard-normal.woff2',
        // simplified chinese
        './node_modules/@fontsource/noto-sans-sc/files/noto-sans-sc-chinese-simplified-400-normal.woff2',
      ],
    };
  },
});
