export const sortCollection = (collection: any[]) => {
  collection.sort((a, b) => {
    // Sort on position
    if (a.data.position) {
      if (b.data.position) {
        return a.data.position - b.data.position
      }
      // Sort a first
      return -1
    }
    // Sort on title
    if (a.data.title) {
      return a.data.title.localeCompare(b.data.title || b.slug)
    }
    // Sort on slug
    return a.slug.localeCompare(b.data.title || b.slug)
  })
  return collection
}

export const filterFragments = (collection: any[]) => {
  return collection.filter((entry) => {
    return !entry.slug.split('/').some((value: string) => value.startsWith('_'))
  })
}
