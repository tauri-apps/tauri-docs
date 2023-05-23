import { astroI18n } from 'astro-i18n'

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

// Handle params
export function createLocalizedPaths(callback?: (lang: any) => any) {
  return async () => {
    return astroI18n.langCodes.flatMap((lang) => {
      // Determine what the lang route should be
      let langRoute: string | undefined = lang
      if (
        !astroI18n.showDefaultLangCode &&
        lang === astroI18n.defaultLangCode
      ) {
        langRoute = undefined
      }
      // Build the base params
      const template = {
        params: {
          lang: langRoute,
        },
      }
      // Return just the lang route if no callback
      if (!callback) {
        return template
      }
      // Join all the objects together
      return {
        ...template,
        ...callback(lang),
      }
    })
  }
}
