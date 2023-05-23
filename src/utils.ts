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

export function createLocalizedPaths(callback?: (lang: any) => any) {
  return async () => {
    const mapped = await Promise.all(
      astroI18n.langCodes.flatMap(async (lang) => {
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

        const results = await callback(lang)

        // Join all the objects together
        return results.map((result: any) => {
          return merge(result, template)
        })
      })
    )

    return mapped.flat()
  }
}

// Adapted from https://attacomsian.com/blog/javascript-merge-objects
const merge = (...props: any) => {
  // create a new object
  let target = {}

  // deep merge the object into the target object
  const merger = (obj) => {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          // if the property is a nested object
          target[prop] = merge(target[prop], obj[prop])
        } else {
          // for regular property
          target[prop] = obj[prop]
        }
      }
    }
  }

  // iterate through all objects and
  // deep merge them with target
  for (let i = 0; i < props.length; i++) {
    merger(props[i])
  }

  return target
}
