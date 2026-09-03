import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { markCurrentByPrefix } from './components/releases/sidebar-current.ts';
import { docsCardSlugOrEnglish, ogImagePath, releaseCardSlug } from './og/pages';
import { isReleasePage } from './release-config.mjs';

export const onRequest = defineRouteMiddleware((context) => {
  const { entry, head, sidebar } = context.locals.starlightRoute;
  const isRelease = isReleasePage(context.url.pathname);

  // version pages are not sidebar entries — mark their package's entry instead
  if (isRelease) {
    markCurrentByPrefix(sidebar, context.url.pathname);
  }

  // docs match on `entry.id` so untranslated locales reuse the English card (translated ones
  // without a rendered card do too); release pages match on the URL because `<StarlightPage>`
  // gets a synthesised entry without the slug
  const slug = isRelease
    ? releaseCardSlug(context.url.pathname)
    : docsCardSlugOrEnglish(entry?.id ?? '');
  const image = new URL(slug === undefined ? '/og.png?v=1' : ogImagePath(slug), context.site);

  // the only place these are set; don't add a site-wide pair to `head:` in `astro.config.mjs`
  head.push(
    { tag: 'meta', attrs: { property: 'og:image', content: image.toString() } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image.toString() } }
  );
});
