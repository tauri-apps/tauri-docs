import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { markCurrentByPrefix } from './components/releases/sidebar-current.ts';

export const onRequest = defineRouteMiddleware((context) => {
  // Release pages only: version pages are not sidebar entries, so highlight
  // their package's entry instead. Docs pages keep Starlight's own matching.
  if (context.url.pathname.startsWith('/release/')) {
    markCurrentByPrefix(context.locals.starlightRoute.sidebar, context.url.pathname);
  }
});
