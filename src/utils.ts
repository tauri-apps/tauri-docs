import { langs } from 'astro.i18n.config'
import { getCollection } from 'astro:content'

export const getDocsCollection = async () => {
  const collection = await getCollection(
    'docs',
    ({ slug }) => !slug.split('/').some((part) => part.startsWith('_'))
  )
  return collection.map((entry) => {
    const [baseLang, ...rest] = entry.slug.split('/')
    const lang = langs.find((lang) => baseLang === lang.code)

    if (!lang) {
      throw Error(`Invalid lang for file ${entry.id}`)
    }

    const slug = rest.join('/')

    const path = `/${lang.route ? `${lang.route}/` : ''}${
      entry.collection
    }/${slug}`

    return {
      ...entry,
      slug,
      lang: lang.route,
      path,
    }
  })
}

export const getApiCollection = async () => {
  const collection = await getCollection('api')
  return langs.flatMap((lang) => {
    return collection.map((entry) => {
      const path = `/${lang.route ? `${lang.route}/` : ''}${entry.collection}/${
        entry.slug
      }`
      return {
        ...entry,
        lang: lang.route,
        path,
      }
    })
  })
}

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
