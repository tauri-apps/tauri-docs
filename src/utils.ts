import { astroI18n } from 'astro-i18n'
import { CollectionEntry, getCollection, getEntryBySlug } from 'astro:content'
import type { getCollection as CollectionType } from 'astro:content'
import fs from 'fs/promises'

export async function geti18nCollection<
  C extends Parameters<typeof CollectionType>[0]
>(collection: C, lang: LangCode, slugStartsWith?: string) {
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
  slug: string
  children?: TreeNode[]
}

export function convertCollectionToTree<
  C extends Parameters<typeof CollectionType>[0]
>(entries: CollectionEntry<C>[]): TreeNode[] {
  // This sort should read the data of an entry and first sort on meta_position if
  // it exists, else meta_title if it exists, else slug
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

  const entriesMap = entries.reduce(
    (obj, { slug, ...data }: { slug: string }) => {
      const slugArray = slug.split('/')

      const leaf = slugArray.reduce((currentParent, slugSection, i) => {
        let leaf = ((currentParent.children ??= {})[slugSection] ??= {})

        return leaf
      }, obj)

      Object.assign(leaf, data)

      return obj
    },
    {} as EntryMap[string]
  )

  const tree = recurseTreeNodes(entriesMap.children)

  fs.writeFile(
    'docs.json',
    JSON.stringify({ entries, entriesMap, tree }, null, 4)
  )
  return tree
}

type EntryMap = {
  [K: string]: {
    children?: EntryMap
  }
}

function recurseTreeNodes(obj: EntryMap, parent?: string) {
  return Object.entries(obj).map(
    ([slug, { children, ...data }]): TreeNode => ({
      slug: `${parent ?? ''}${slug}`,
      ...data,
      ...(children
        ? {
            children: recurseTreeNodes(children, `${parent ?? ''}${slug}/`),
          }
        : {}),
    })
  )
}
