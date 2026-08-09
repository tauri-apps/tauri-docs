import { OGImageRoute } from 'astro-og-canvas';
import { cardOptions } from '../../og/card';
import { fontStack } from '../../og/fonts';
import { ogImageSlug, ogPages } from './_pages';

// Latin first, then CJK fallbacks so translated titles render glyphs rather than tofu.
// Skipped when nothing will be rendered, so `OG_MODE=off` doesn't pay the ~7.5 MB download.
const { fonts, families } =
  Object.keys(ogPages).length === 0
    ? { fonts: [], families: [] }
    : await fontStack([
        'inter-400',
        'noto-sans-400',
        'noto-sans-sc-400',
        'noto-sans-jp-400',
        'noto-sans-kr-400',
      ]);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: ogPages,
  getSlug: (_, page) => ogImageSlug(page.slug),
  getImageOptions: (_, { title, description }) =>
    cardOptions({ title, description, fonts, families }),
});
