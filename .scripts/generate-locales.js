const fs = require('fs')
const core = require('@actions/core')

try {
  //   var locales = fs.readdirSync('i18n')
  //   console.log(`Found the locales ${locals}`)
  var locales = ['en', 'fr', 'es', 'zh']
  core.setOutput('language-list', JSON.stringify(locales))
} catch {
  core.setFailed
}
