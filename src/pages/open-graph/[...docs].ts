import { OGImageRoute } from 'astro-og-canvas';
import { allPages } from 'src/utils/content';

// TODO: 
//import { rtlLanguages } from '~/i18n/languages';
//import { getLangFromSlug } from '~/util';


// TODO: Setup the process.env to skip on non production builds
/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = process.env.SKIP_OG ? [] : allPages;

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));

function getDate(date: Date): string {
  // en-GB -> dd MM yy
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * TODO: This can be improved
 * Helper function to clamp a string
 * @param txt Text to process
 * @param singleLine Limit into a single line or not (default to false)
 * @returns A string with "..." at the end if text is longer than set
 */
function clamp(txt: string, fontSize: number, singleLine = false,): string {
  // those numbers are what more or less fit to description and title size, not precisely
  // it can vary based on font. Maybe this can help? https://github.com/adambisek/string-pixel-width/blob/master/src/pixelWidthCalculator.html
  let LEN = 54;
  let EXTRA = 16;
  // this should be less than titleSize
  if (fontSize > 60) {
    LEN = 32
    EXTRA = 10;
  }
  let MAX_LEN = singleLine ? LEN : LEN + EXTRA;
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
  // TODO: Improve texts size and placement
  getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => {
    /** titleSize and descSize are coupled with @function clamp() */
    let [titleSize, descSize, dateSize] = [96, 48, 32];
    let description = "";
    let postDate = "";
    let title = clamp(data.title, titleSize);
    if (data.description) {
      titleSize *= 0.85; // 81,6
      description = clamp(data.description, descSize);
    }
    if (slug.startsWith('blog/') && data.date && data.excerpt) {
      titleSize *= 0.75; // 72
      descSize *= 0.75; // 36
      description = clamp(data.excerpt, descSize, true);
      postDate = getDate(new Date(data.date));
    }

    return {
      title,
      description,
      // extraField was patched with sole purpose to place blog post date
      extraField: postDate,
      padding: 66,
      bgImage: { path: './src/assets/og-bg.png' },
      logo: { path: './src/assets/og-logo.png' },
      font: {
        title: {
          /** Size is coupled with @function clamp() */
          size: titleSize,
          lineHeight: 1.25,
          weight: 'Normal',
          families: ["Noto Sans", "Noto Sans SC"]
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
        './src/pages/open-graph/_fonts/NotoSans-Bold.ttf',
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