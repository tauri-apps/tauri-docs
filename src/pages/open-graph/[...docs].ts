import type { CollectionEntry } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { allPages } from 'src/utils/content';

// setup rtlLanguages here
const rtlLanguages = new Set(['']);
const getLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) => slug.split('/')[0];

// TODO: Setup the line below to skip on non production builds
// const paths = process.env.SKIP_OG ? [] : allPages;
/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = allPages;

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));


/**
 * TODO: This can be improved
 * Helper function to clamp a string
 * @param txt Text to process
 * @param singleLine Limit into a single line or not (default to false)
 * @returns A string with "..." at the end if text is longer than set
 */
function clamp(txt: string, fontSize: number, singleLine = false,): string {
  // those numbers are what more or less fit to description and title size
  let LEN = 54;
  if (fontSize > 50) {
    LEN = 24
  }
  let MAX_LEN = singleLine ? LEN : LEN + 10;
  if (txt.length > MAX_LEN) {
    txt = txt.trim().substring(0, MAX_LEN);
    txt[txt.length - 1] === '.' ? (txt += '..') : (txt += '...');
  }
  return txt;
}

// REFERENCE:
// https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
export const { getStaticPaths, GET } = OGImageRoute({
  param: 'docs',
  pages,

  // TODO: Limit title and description max-width then break into 2 lines, maybe need Intl.Segmenter and get current locale to do it properly

  getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => {
    /** Those titleSize and descSize are coupled with @function clamp() */
    const [titleSize, descSize, dateSize] = [72, 36, 27];
    let description = "";
    let postDate = "";
    const title = clamp(data.title, titleSize);
    if (data.description) { description = clamp(data.description, descSize); }
    if (slug.startsWith('blog/') && data.date && data.excerpt) {
      description = clamp(data.excerpt, descSize, true);
      const date: Date = new Date(data.date);
      // en-GB -> dd MM yy
      postDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }

    return {
      title,
      description,
      extraField: postDate,
      dir: rtlLanguages.has(getLangFromSlug(slug)) ? 'rtl' : 'ltr',
      padding: 66,
      bgImage: { path: './src/assets/og-bg.png' },
      logo: { path: './src/assets/og-logo.png' },
      font: {
        title: {  
           /** Size is coupled with @function clamp() */
          size: titleSize,
          lineHeight: 1.25,
          weight: 'Bold',
          families: ["Noto Sans Condensed", "Noto Sans SC"]
        },
        description: {
          /** Size is coupled with @function clamp() */
          size: descSize,
          lineHeight: 1.25,
          weight: 'Normal',
          families: ["Noto Sans", "Noto Sans SC"]
        },
        extraField: {

          size: dateSize,
          lineHeight: 1.25,
          weight: 'Light',
          families: ["Noto Sans", "Noto Sans SC"]
        },
      },
      fonts: [
        './src/pages/open-graph/_fonts/NotoSans_Condensed-Bold.ttf',
        './src/pages/open-graph/_fonts/NotoSans-Regular.ttf',
        './src/pages/open-graph/_fonts/NotoSans-Light.ttf',

        // simplified chinese
        './src/pages/open-graph/_fonts/NotoSansSC-Regular.ttf',
        './src/pages/open-graph/_fonts/NotoSansSC-Bold.ttf',
        './src/pages/open-graph/_fonts/NotoSansSC-Light.ttf',
      ],
    };
  },
});