import { astroI18n } from 'astro-i18n'
import { getCollection, getEntryBySlug } from 'astro:content'
import type { collections } from './content/config'

export async function geti18nCollection<C extends keyof typeof collections>(
  collection: C,
  lang: LangCode
) {
  // Get entries from a collection for the default lang
  const defaultLangCollection = await getCollection(collection, ({ slug }) =>
    slug.startsWith(`${astroI18n.defaultLangCode}/`)
  )

  // Iterate through each of the entries for the default lang
  const allEntries = await Promise.all(
    defaultLangCollection.map(async (entry) => {
      const baseSlug = entry.slug.slice(astroI18n.defaultLangCode.length + 1)

      // If we're getting for the default lang then return the entry
      if (lang === astroI18n.defaultLangCode) {
        if (!astroI18n.showDefaultLangCode) {
          return {
            ...entry,
            slug: baseSlug,
          }
        } else {
          return entry
        }
      }

      // Attempt to load the localized entry
      const localizedSlug = `${lang}/${baseSlug}`
      const localizedEntry = await getEntryBySlug(collection, localizedSlug)

      // Fall back to the default lang entry
      if (!localizedEntry) {
        return {
          ...entry,
          slug: baseSlug,
        }
      }

      return localizedEntry
    })
  ).then((result) => result.flat())

  return allEntries
}
