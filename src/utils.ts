import type { CollectionEntry } from 'astro:content'

export const sortCollection = (collection: CollectionEntry<'docs-1'>[]) => {
  collection.sort((a, b) => {
    // Arrange on position
    if (a.data.position) {
      return a.data.position - (b.data.position || 0)
    }
    // Arrange on title
    if (a.data.title) {
      if (b.data.title) {
        return a.data.title.localeCompare(b.data.title || b.slug)
      }
    }
    // Arrange on slug
    return a.slug.localeCompare(b.slug)
  })
  return collection
}
