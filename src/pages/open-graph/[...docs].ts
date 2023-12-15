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
* TODO: Make this function work for title or description (currently only description).
* Helper function to clamp a string
* This is coupled to the current description size.
* @param txt Text to process
* @param singleLine Limit into a single line or not (default to)
* @returns A string with "..." at the end if text is longer than set
*/
function clamp(txt: string | undefined, singleLine = false): string | undefined {
  if (!txt) {
    return;
  }
  // magic number that fits one or two lines
  let MAX_LEN = singleLine ? 42 : 52;
  if (txt.length > MAX_LEN) {
    txt = txt.trim().substring(0, MAX_LEN);
    txt[txt.length - 1] === "." ? txt += ".." : txt += "..."
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
    const title = data.title;
    let description = clamp(data.description);
    let postDate = "";
    
    if (slug.startsWith("blog/") && data.date) {
      description = clamp(data.excerpt, true);
      const date: Date = new Date(data.date);
      // en-GB -> dd MM yy
      postDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }

    const fontFamily = ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto']
    return {
      title,
      description,
      extraField: postDate,
      dir: rtlLanguages.has(getLangFromSlug(slug)) ? 'rtl' : 'ltr',
      padding: 67,
      bgImage: { path: './src/assets/og-bg.png' },
      logo: { path: './src/assets/og-logo.png' },
      font: {
        title: {
          size: 96,
          lineHeight: 1.25,
          families: fontFamily,
          weight: 'ExtraBold',
        },
        description: {
          /** Size is coupled with @function clamp() */
          size: 48,
          lineHeight: 1.25,
          families: fontFamily,
        },
        extraField: {
          size: 36,
          lineHeight: 1.25,
          families: fontFamily,
        },
      },
    };
  },
});