import { astroI18n } from 'astro-i18n'
import { getCollection, getEntryBySlug } from 'astro:content'
import type { collections } from './content/config'

export async function geti18nCollection<C extends keyof typeof collections>(
  collection: C,
  lang: LangCode,
  slugStartsWith?: string
) {
  // Get entries from a collection for the default lang
  const defaultLangCollection = await getCollection(collection, ({ slug }) =>
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

  return allEntries
}

export interface TreeNode {
  name: string
  description?: string
  slug: string
  children?: TreeNode[]
}

export async function convertCollectionToTree<
  C extends keyof typeof collections
>(
  collection: C,
  lang: LangCode,
  startsWith?: string,
  maxDepth?: number,
  baseUrl?: string
): Promise<TreeNode[]> {
  let entries = await geti18nCollection(collection, lang, startsWith)

  if (maxDepth) {
    entries = entries.filter((entry) => entry.slug.split('/').length < maxDepth)
  }

  entries.sort((a, b) => {
    if (a.data && b.data) {
      if (a.data.meta_position && b.data.meta_position) {
        // Use meta position primarily
        return a.data.meta_position - b.data.meta_position
      } else if (a.data.meta_title && b.data.meta_title) {
        // Else use the title
        return a.data.meta_title.localeCompare(b.data.meta_title)
      }
    }
    return 0
  })

  return entries.map((entry) => {
    const node: TreeNode = {
      name: entry.data.meta_title ?? entry.slug,
      description: entry.data.meta_description,
      slug: entry.slug,
      children: undefined,
    }
    console.log(node)
    return node
  })
}
