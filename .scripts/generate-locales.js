const fs = require('fs')
const core = require('@actions/core')

try {
  // var locales = fs.readdirSync('i18n')
  var locales = ['en', 'fr', 'es']
  console.log(`Found the locales ${locales}`)
  core.setOutput('language-list', locales)
} catch (error) {
  core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
}
