const fs = require('fs')
const core = require('@actions/core')
const cache = require('@actions/cache')

try {
  const locales = process.env.LOCALES

  for (locale in locales) {
    const path = 'build/' + locale
    const key = `${locale}-build`
    const cacheKey = await cache.restoreCache(path, key)

    console.log(path, key, cacheKey)

    if (!cacheKey) {
      throw `Cache couldn't be restored for locale ${locale}`
    }
  }
  // Get the locales variable
  // Load in each via a loop
  // Merge them together into the build folder
  // Tell netlify to pick it up (outside of this file and with another action probably)
} catch (error) {
  core.setFailed(`An issue ocurred while combining locale builds: ${error}`)
}
