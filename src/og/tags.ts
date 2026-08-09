import type { StarlightRouteData } from '@astrojs/starlight/route-data';

type Head = StarlightRouteData['head'];

// only `src/routeData.ts` sets these; don't add a site-wide pair to `head:` in `astro.config.mjs`
export function ogTags(image: URL): Head {
  const content = image.toString();
  return [
    { tag: 'meta', attrs: { property: 'og:image', content } },
    { tag: 'meta', attrs: { name: 'twitter:image', content } },
  ];
}
