const fs = require('fs')
const core = require('@actions/core')

try {
  var locales = fs.readdirSync('i18n')
  console.log(`Found the locales ${locales}`)
  core.setOutput('language-list', JSON.stringify(locales))
} catch (error) {
  core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
}
