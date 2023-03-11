import { astroI18n } from 'astro-i18n'
import { CollectionEntry, getCollection, getEntryBySlug } from 'astro:content'
import type { getCollection as CollectionType } from 'astro:content'

export async function geti18nCollection<
  C extends Parameters<typeof CollectionType>[0]
>(collection: C, lang: LangCode, slugStartsWith?: string) {
  // Get entries from a collection for the default lang
  const defaultLangCollection: CollectionEntry<'docs'>[] = await getCollection(
    collection,
    ({ slug }) =>
      slug.startsWith(
        `${astroI18n.defaultLangCode}/${slugStartsWith ? slugStartsWith : ''}`
      )
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

  // Sort first on meta_position, then meta_title, then slug
  allEntries.sort((a, b) => {
    if (a.data.meta_position) {
      if (b.data.meta_position) {
        return a.data.meta_position - b.data.meta_position
      }
      // Use meta position
      return -1
    }

    return a.slug.localeCompare(b.slug)
  })

  return allEntries
}

export interface TreeNode {
  slug: string
  children?: TreeNode[]
  entry?: CollectionEntry<'api'>
}

export function convertCollectionToTree<
  C extends Parameters<typeof CollectionType>
>(entries: CollectionEntry<C>[]): TreeNode {
  var result: TreeNode = { slug: '' }

  entries.forEach((entry) =>
    entry.slug
      .split('/')
      .reduce(
        (o, slug) => (o[slug] = o[slug] || { _metadata: { ...entry } }),
        result
      )
  )

  return result
}
