import { astroI18n } from 'astro-i18n'
import { getCollection, getEntryBySlug } from 'astro:content'
import type { CollectionKey } from './content/config'

export async function getI18nCollection(collection: CollectionKey, lang: LangCode, slugStartsWith?: string) {
  // Get entries from a collection for the default lang
  const defaultLangCollection = await getCollection(
    collection,
    ({ slug }) =>
      // @ts-ignore
      slug.startsWith(
        `${astroI18n.defaultLangCode}/${slugStartsWith ? slugStartsWith : ''}`
      )
  )

  // Iterate through each of the entries for the default lang
  return await Promise.all(
    defaultLangCollection.map(async (entry) => {
      // @ts-ignore
      const [_, ...baseSlugArray] = entry.slug.split('/')
      let baseSlug = baseSlugArray.join('/')

      // If we're getting for the default lang then return the entry
      if (lang === astroI18n.defaultLangCode) {
        return {
            // @ts-ignore
            ...entry,
            slug: baseSlug
          }
      }

      // Attempt to load the localized entry
      const localizedSlug = `${lang}/${baseSlug}`
      const localizedEntry = await getEntryBySlug(collection, localizedSlug)

      // Fall back to the default lang entry
      if (!localizedEntry) {
        return {
          // @ts-ignore
          ...entry,
          slug: baseSlug,
        }
      }

      return localizedEntry
    })
  )
}
