import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { markCurrentByPrefix } from './components/releases/sidebar-current.ts';
import { isReleasePage } from './release-config.mjs';

export const onRequest = defineRouteMiddleware((context) => {
  // version pages are not sidebar entries — mark their package's entry instead
  if (isReleasePage(context.url.pathname)) {
    markCurrentByPrefix(context.locals.starlightRoute.sidebar, context.url.pathname);
  }
});
