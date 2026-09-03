import { getCollection } from 'astro:content';
import { basePath, releaseSidebar } from '../../packages/releases-site/generator/config';
import { isKnownLocale } from '../components/locale-memory';
import { cardFormat } from './card';
import { isProductionDeploy } from './env';

export interface OgCard {
  /** path under `/open-graph/`, without the extension */
  slug: string;
  title: string;
  description: string;
}

// `full` renders every entry, `sample` only English (enough to eyeball a deploy preview), `off`
// renders none. A misspelt value is an error rather than a silent `sample`: production would
// render English only and every translated page would fall back, with a healthy-looking deploy
const modes = ['full', 'sample', 'off'] as const;
export type OgMode = (typeof modes)[number];

export const ogMode = parseMode(process.env.OG_MODE);

function parseMode(raw: string | undefined): OgMode {
  if (raw === undefined) return isProductionDeploy ? 'full' : 'sample';
  if (!modes.includes(raw as OgMode)) {
    throw new Error(`[og] OG_MODE must be one of ${modes.join(', ')}, got ${JSON.stringify(raw)}`);
  }
  return raw as OgMode;
}

// `root` is English, which never appears in a URL; the rest prefix their pages' ids
const isTranslated = (id: string) => isKnownLocale(id.split('/')[0]);

// the collection id of the root page is `'index'`, but Starlight's `entry.id` normalizes it to `''`
export const docsCardSlug = (id: string) => (id === 'index' || id === '' ? 'index' : id);

const docsCards: OgCard[] = (
  ogMode === 'off'
    ? []
    : await getCollection(
        'docs',
        ({ id, data }) =>
          // Astro's build mode, not the deploy context: `astro dev` shows drafts, Starlight
          // drops them from every build, so don't render cards for them
          (import.meta.env.MODE !== 'production' || data.draft === false) &&
          (ogMode === 'full' || !isTranslated(id))
      )
).map(({ id, data }) => ({
  slug: docsCardSlug(id),
  title: data.title,
  // blog posts (starlight-blog schema) carry an `excerpt` rather than a `description`
  description: data.excerpt ?? data.description ?? '',
}));

// one card per package, shared by its ~2,840 version pages; cards mirror the URLs they serve,
// so slashed package names (`@tauri-apps/api`) nest a directory deeper like their pages do
const releaseCardDir = basePath.replace(/^\//, '');

// the landing pages are exactly the sidebar's links: overview, table, core, prereleases, packages
const releasePageSlugs = releaseSidebar
  .flatMap((entry) => ('items' in entry ? entry.items : [entry]))
  .map(({ link }) => link.slice(basePath.length).replace(/^\/|\/$/g, ''));

const releaseCardSlugFor = (pageSlug: string) =>
  `${releaseCardDir}/${pageSlug === '' ? 'index' : pageSlug}`;

// filtered in the loader: the collection holds ~2,840 version pages and only the ~20 landing
// entries get a card. Looked up rather than assumed so packages with no generated pages drop
// out (the filesystem probe in `astro.config.mjs` can't be used here, see `release-pages.node.mjs`)
const wanted = new Set(releasePageSlugs);
const releaseCards: OgCard[] = (
  ogMode === 'off' ? [] : await getCollection('releases', ({ data }) => wanted.has(data.slug))
).map(({ data }) => ({
  slug: releaseCardSlugFor(data.slug),
  title: data.title,
  description: data.description ?? '',
}));

// `OG_LIMIT=n` for local iteration; applied per group because docs cards outnumber release
// cards 4:1 and a shared budget would never reach the release ones. Anything that isn't a
// number is an error rather than a silent `slice(0, NaN)`, which would render no cards at all
const limit = parseLimit(process.env.OG_LIMIT);

function parseLimit(raw: string | undefined): number {
  if (raw === undefined) return Infinity;
  const n = Number(raw);
  if (raw.trim() === '' || !Number.isInteger(n) || n < 0) {
    throw new Error(`[og] OG_LIMIT must be a non-negative integer, got ${JSON.stringify(raw)}`);
  }
  return n;
}
const all = [...docsCards.slice(0, limit), ...releaseCards.slice(0, limit)];

export const ogPages: Record<string, OgCard> = Object.fromEntries(
  all.map((card) => [card.slug, card])
);

export const ogImageSlug = (slug: string) => `${slug}.${cardFormat.toLowerCase()}`;

export const ogImagePath = (slug: string) => `/open-graph/${ogImageSlug(slug)}`;

const existing = (slug: string) => (Object.hasOwn(ogPages, slug) ? slug : undefined);

// translated pages whose own card wasn't rendered (`sample` mode, or an `OG_LIMIT` cut) fall
// back to the English card, the same thing Starlight does for untranslated pages. Both resolvers
// return `undefined` for "no card", so the middleware needs no second existence check
export function docsCardSlugOrEnglish(id: string): string | undefined {
  const own = existing(docsCardSlug(id));
  if (own !== undefined || !isTranslated(id)) return own;
  return existing(docsCardSlug(id.split('/').slice(1).join('/')));
}

// longest first so `core/prereleases` wins over `core`
const byLength = releasePageSlugs
  .filter((pageSlug) => pageSlug !== '')
  .sort((a, b) => b.length - a.length);

export function releaseCardSlug(pathname: string): string | undefined {
  const path = pathname.slice(basePath.length).replace(/^\/|\/$/g, '');
  if (path === '') return existing(releaseCardSlugFor(''));

  const match = byLength.find((pageSlug) => path === pageSlug || path.startsWith(pageSlug + '/'));
  return match === undefined ? undefined : existing(releaseCardSlugFor(match));
}
