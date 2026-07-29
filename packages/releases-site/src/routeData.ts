import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { markCurrentByPrefix } from './sidebar-current.ts';

export const onRequest = defineRouteMiddleware((context) => {
  markCurrentByPrefix(context.locals.starlightRoute.sidebar, context.url.pathname);
});
