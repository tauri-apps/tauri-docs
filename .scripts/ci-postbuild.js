const fs = require('fs')
const core = require('@actions/core')
const cache = require('@actions/cache')

try {
  const locales = JSON.parse(process.env.LOCALES)
  console.log('locales type is', typeof locales)
  console.log('Is it an array?', Array.isArray(locales))

  if (locales.length == 0) {
    throw 'No locales were given to be built'
  }

  console.log(`Retrieved the following locales: ${locales}`)

  for ([key, value] in locales) {
    console.log(key, value)
    // const path = 'build/' + locale
    // const key = `${locale}-build`
    // cache
    //   .restoreCache(path, key)
    //   .then((cacheKey) => {
    //     console.log(`Started processing ${locale}`)
    //     console.log(path, key, cacheKey)

    //     if (!cacheKey) {
    //       throw `Cache couldn't be restored for locale ${locale}`
    //     }

    //     console.log(`Finished processing ${locale}`)
    //   })
    //   .catch((error) => {
    //     throw `Error ocurred while retrieving the cache: ${error}`
    //   })
  }
} catch (error) {
  core.setFailed(`An issue ocurred while combining locale builds: ${error}`)
}
