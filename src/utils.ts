import { astroI18n } from 'astro-i18n'
import { getCollection, getEntryBySlug } from 'astro:content'
import type { collections } from './content/config'

type CollectionKeys = keyof typeof collections

export async function getDefaultLangCollection(c: CollectionKeys) {
  // TODO: Fix types
  const defaultLangCollection = await getCollection(c, ({ slug }) =>
    slug.startsWith(astroI18n.defaultLangCode)
  )

  // For each default lang entry, build a route for each lang
  return defaultLangCollection.flatMap((entry) => {
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

    let defaultLangEntry = entry

    // Fixes the slug if default lang is at the root
    if (!astroI18n.showDefaultLangCode) {
      const defaultLangEntrySlug = defaultLangEntry.slug.slice(
        astroI18n.defaultLangCode.length + 1
      )
      defaultLangEntry = {
        ...entry,
        slug: defaultLangEntrySlug,
      }
    }
    return [defaultLangEntry, ...supportedLangEntries]
  })
}
