import { langs, defaultLang, nonDefaultLangs } from 'astro.i18n.config'

export const buildI18nStaticRoutes = () => {
  return langs.map((lang) => ({
    params: {
      lang: lang.route,
    },
  }))
}

export const buildLocalizedSlug = (slug: string) => {
  const [langBase, ...rest] = slug.split('/')
  const route = langs.find((lang) => langBase === lang.code)
  if (!route) {
    throw Error(`Invalid lang for slug ${slug}`)
  }
  let localizedLang = route.route
  let localizedRoute = rest.join('/')
  return { lang: localizedLang, route: localizedRoute }
}

export const buildLocalizedCollection = (collection: any[]) => {
  return collection.map((entry) => {
    const localizedSlug = buildLocalizedSlug(entry.slug)
    return {
      ...entry,
      slug: localizedSlug.route,
      lang: localizedSlug.lang,
    }
  })
}

export const normalizeSlug = (slug: string | undefined) => {
  if (!slug) {
    return slug
  }
  // Check if the first part of the slug is a known lang route
  const langCode = nonDefaultLangs.find(
    (lang) => slug.split('/')[0] === lang.route
  )
  // If so, return the full slug
  if (langCode) {
    return slug
  }
  // Else, add the default lang code
  return `${defaultLang.code}/${slug}`
}
