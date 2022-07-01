const fs = require('fs')
const core = require('@actions/core')
const cache = require('@actions/cache')

const locales = JSON.parse(process.env.LOCALES)

if (locales.length == 0) {
  throw 'No locales were given to be built'
}

console.log(`Retrieved the following locales: ${locales}`)

for (locale of locales) {
  console.log(`Started processing ${locale}`)

  const path = 'build/' + locale
  const key = `${locale}-build`

  cache
    .restoreCache(path, key)
    .then((value) => {
      console.log('Value is', value)
    })
    .catch((error) => {
      console.error(error)
    })

  console.log(cacheKey)
}
