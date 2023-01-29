import { getCollection } from 'astro:content'
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

export const getTransformedBlogCollection = async () => {
  const collection = await getCollection('blog')
  return collection.map((entry) => {
    const slug = []

    slug.push('')
    const [locale, blog, slugTitle] = entry.slug.split('/')

    if (locale !== 'en') {
      slug.push(locale)
    }

    slug.push(blog)
    slug.push(String(entry.data.date.getFullYear()))
    slug.push(String(entry.data.date.getMonth() + 1).padStart(2, '0'))
    slug.push(String(entry.data.date.getDate()).padStart(2, '0'))
    slug.push(slugTitle)

    return {
      ...entry,
      slug: slug.join('/'),
    }
  })
}

// Updates the slug of localized documents from this: `[locale]/[...slug]`
// ...to this: `[locale]/[basePath]/[...slug]
// Will also remove `en` from slugs as English is treated as the default route
export const transformLocalizedEntrySlug = (
  slug: string,
  basePath?: string
) => {
  const [locale, ...rest] = slug.split('/')
  const path = []

  // Adds a leading slash to make the link absolute
  if (basePath !== undefined) {
    path.push('')
  }

  if (locale !== 'en') {
    path.push(locale)
  }

  if (basePath !== undefined) {
    path.push(basePath)
  }

  return path.concat(rest).join('/')
}
