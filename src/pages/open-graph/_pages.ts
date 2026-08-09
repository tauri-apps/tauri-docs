import { getCollection } from 'astro:content';
import locales from '../../../locales.json';
import {
  basePath,
  corePageSlug,
  corePrereleasesSlug,
  repositories,
} from '../../../packages/releases-site/generator/config';

export interface OgCard {
  /** path under `/open-graph/`, without `.webp` */
  slug: string;
  title: string;
  description: string;
}

// `full` renders every entry, `sample` only English (enough to eyeball a deploy preview), `off`
// renders none. Keyed off `CONTEXT`, not `CI`: Netlify sets `CI=true` in every context, the
// same trap as `TAURI_DOCS_SKIP_IMAGE_OPT` in `astro.config.mjs`
const ogMode = process.env.OG_MODE ?? (process.env.CONTEXT === 'production' ? 'full' : 'sample');

// `root` is English, which never appears in a URL; the rest prefix their pages' ids
const translatedDirs = new Set(Object.keys(locales).filter((code) => code !== 'root'));
const isTranslated = (id: string) => translatedDirs.has(id.split('/')[0]);

const docsEntries =
  ogMode === 'off'
    ? []
    : await getCollection(
        'docs',
        ({ id, data }) =>
          // Starlight drops drafts from production builds, don't render cards for them
          (import.meta.env.MODE !== 'production' || data.draft === false) &&
          (ogMode === 'full' || !isTranslated(id))
      );

// the collection id of the root page is `'index'`, but Starlight's `entry.id` normalizes it to `''`
export const docsCardSlug = (id: string) => (id === 'index' || id === '' ? 'index' : id);

const docsCards: OgCard[] = docsEntries.map(({ id, data }) => ({
  slug: docsCardSlug(id),
  title: data.title,
  // blog posts (starlight-blog schema) carry an `excerpt` rather than a `description`
  description: data.excerpt ?? data.description ?? '',
}));

// one card per package, shared by its ~2,840 version pages; cards mirror the URLs they serve,
// so slashed package names (`@tauri-apps/api`) nest a directory deeper like their pages do
const releaseCardDir = basePath.replace(/^\//, '');

// looked up in the `releases` collection below rather than assumed, so packages with no
// generated pages drop out (the filesystem probe in `astro.config.mjs` can't be used here,
// see `src/release-pages.node.mjs`)
const releasePageSlugs = [
  '',
  'table',
  corePageSlug,
  corePrereleasesSlug,
  ...repositories.flatMap((repo) => repo.packages).map((pkg) => pkg.name),
];

const releaseEntries = new Map(
  (ogMode === 'off' ? [] : await getCollection('releases')).map((entry) => [
    entry.data.slug,
    entry.data,
  ])
);

const releaseCardSlugFor = (pageSlug: string) =>
  `${releaseCardDir}/${pageSlug === '' ? 'index' : pageSlug}`;

const releaseCards: OgCard[] = releasePageSlugs.flatMap((pageSlug) => {
  const data = releaseEntries.get(pageSlug);
  if (!data) return [];
  return [
    { slug: releaseCardSlugFor(pageSlug), title: data.title, description: data.description ?? '' },
  ];
});

// `OG_LIMIT=n` for local iteration; applied per group because docs cards outnumber release
// cards 4:1 and a shared budget would never reach the release ones
const limit = Number(process.env.OG_LIMIT ?? Infinity);
const all = [...docsCards.slice(0, limit), ...releaseCards.slice(0, limit)];

export const ogPages: Record<string, OgCard> = Object.fromEntries(
  all.map((card) => [card.slug, card])
);

export const ogImageSlug = (slug: string) => `${slug}.webp`;

export const ogImagePath = (slug: string) => `/open-graph/${ogImageSlug(slug)}`;

export const hasCard = (slug: string) => Object.hasOwn(ogPages, slug);

// longest first so `core/prereleases` wins over `core`
const byLength = releasePageSlugs
  .filter((pageSlug) => pageSlug !== '')
  .sort((a, b) => b.length - a.length);

export function releaseCardSlug(pathname: string): string | undefined {
  const path = pathname.slice(basePath.length).replace(/^\/|\/$/g, '');
  if (path === '' || path === 'index') return releaseCardSlugFor('');

  const match = byLength.find((pageSlug) => path === pageSlug || path.startsWith(pageSlug + '/'));
  return match === undefined ? undefined : releaseCardSlugFor(match);
}
