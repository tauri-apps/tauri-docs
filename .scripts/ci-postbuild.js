const fs = require('fs')
const core = require('@actions/core')
const cache = require('@actions/cache')

try {
  const locales = process.env.LOCALES
  console.log(`Retrieved the following locales: ${locales}`)

  for (locale in locales) {
    const path = 'build/' + locale
    const key = `${locale}-build`
    const cacheKey = cache.restoreCache(path, key)

    console.log(path, key, cacheKey)

    if (!cacheKey) {
      throw `Cache couldn't be restored for locale ${locale}`
    }
  }
} catch (error) {
  core.setFailed(`An issue ocurred while combining locale builds: ${error}`)
}
