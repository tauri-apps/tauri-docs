import { astroI18n } from 'astro-i18n'
import { getCollection, getEntryBySlug } from 'astro:content'
import type { collections } from './content/config'

type CollectionKeys = keyof typeof collections

export async function getDefaultLangCollection(c: CollectionKeys) {
  const collection = await getCollection(c, ({ slug }) => {
    return slug.startsWith(astroI18n.defaultLangCode)
  })
  return collection.map((entry) => ({
    ...entry,
    slug: entry.slug.slice(astroI18n.defaultLangCode.length + 1),
  }))
}

// This takes the defaultLangCode slug and transforms it into the respective entry
export async function getLocalizedEntry(c: CollectionKeys, entry: any) {
  const localizedEntry = await getEntryBySlug(
    c,
    `${astroI18n.langCode}/${entry.slug}`
  )

  return localizedEntry
}
