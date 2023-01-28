import { locales } from './config'

// Build paths for all locales. Should be used together with `getStaticPaths()`
export const buildLocalizedStaticPaths = (params?: object, props?: object) => [
  { params: { locale: undefined, ...params }, props: { ...props } },
  ...locales
    .filter((locale) => locale !== 'en')
    .map((locale) => ({
      params: { locale: locale, ...params },
      props: { ...props },
    })),
]

// Updates the slug of localized documents from this: `[locale]/[...slug]`
// ...to this: `[locale]/[basePath]/[...slug]
// Will also remove `en` from slugs as English is treated as the default route
export const transformLocalizedEntrySlug = (
  slug: string,
  basePath?: string
) => {
  const [locale, ...rest] = slug.split('/')
  const path = []

  if (basePath !== undefined) {
    path.push(basePath)
  }

  if (locale !== 'en') {
    path.push(locale)
  }

  return path.concat(rest).join('/')
}
