import { OGImageRoute } from 'astro-og-canvas';
import { cardOptions } from '../../og/card';
import { fontStack, type FontName } from '../../og/fonts';
import { ogImageSlug, ogMode, ogPages } from '../../og/pages';

// Latin first, then CJK fallbacks so translated titles render glyphs rather than tofu. `sample`
// renders English only, so it skips the CJK faces (7.4 MB of the 7.5 MB stack); `off` renders
// nothing and downloads nothing
const latin: FontName[] = ['inter-400', 'noto-sans-400'];
const cjk: FontName[] = ['noto-sans-sc-400', 'noto-sans-jp-400', 'noto-sans-kr-400'];
const { fonts, families } = await fontStack(
  ogMode === 'full' ? [...latin, ...cjk] : ogMode === 'sample' ? latin : []
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: ogPages,
  getSlug: (_, page) => ogImageSlug(page.slug),
  getImageOptions: (_, { title, description }) =>
    cardOptions({ title, description, fonts, families }),
});
