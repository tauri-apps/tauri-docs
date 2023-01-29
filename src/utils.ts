import { astroI18n } from 'astro-i18n'
import { getCollection, getEntryBySlug } from 'astro:content'
import type { collections } from './content/config'

type CollectionKeys = keyof typeof collections

export async function getDefaultLangCollection(c: CollectionKeys) {
  // Get all the entries for the default lang code
  const collection = await getCollection(c, ({ slug }) =>
    slug.startsWith(astroI18n.defaultLangCode)
  )

  // For each default lang entry, build a route for each lang
  return collection.flatMap((entry) => {
    const supportedLangEntries = astroI18n.supportedLangCodes.map(
      async (lang) => {
        // Builds out a dynamic slug per lang
        const slug = `${lang}/${entry.slug.slice(
          astroI18n.defaultLangCode.length + 1
        )}`
        // Falls back to the default lang entry if it doesn't exist
        return (await getEntryBySlug(c, slug)) || entry
      }
    )
    let defaultEntry = entry

    if (!astroI18n.showDefaultLangCode) {
      defaultEntry = {
        ...entry,
        slug: defaultEntry.slug.slice(astroI18n.defaultLangCode.length + 1),
      }
    }
    return [defaultEntry, ...supportedLangEntries]
  })
}
