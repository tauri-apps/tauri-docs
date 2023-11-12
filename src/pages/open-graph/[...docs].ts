import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const allPages = await getCollection('docs');


// Helper function to return either an empty string or to clamp a too big one.
function clamp(txt: string | undefined): string {
  if (!txt) {
    return '';
  }
  const MAX_LEN = 53
  if (txt.length > MAX_LEN) {
    txt = txt.trim().substring(0, MAX_LEN);
    txt[txt.length - 1] === "." ? txt += ".." : txt += "..."
  }
  return txt;
}

// TODO: Setup the line below to skip on non production builds
// const paths = process.env.SKIP_OG ? [] : allPages;
const paths = allPages;

const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));

// REFERENCE:
// https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
export const { getStaticPaths, GET } = OGImageRoute({
  param: 'docs',
  pages,
  
  // TODO: Setup fonts locally, 
  // TODO: Tweak astro-og-canvas to add custom field: blog date
  // TODO: Limit title and description max-width then break into 2 lines, maybe need Intl.Segmenter and get current locale to do it properly
  // TODO: Setup background after https://github.com/delucis/astro-og-canvas/issues/32 is solved 

  getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => {
    const title = data.title
    const description = slug.startsWith("blog/") ? clamp(data.excerpt) : clamp(data.description);
    return {
      title,
      description,
      font: {
        title: {
          size: 96,
          families: [
            'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          ],
          weight: 'ExtraBold',
        },
        description: {
          size: 48,
          lineHeight: 1.25,
          families: [
            'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          ],
          weight: 'Normal',
        },
      },

    };
  },
});