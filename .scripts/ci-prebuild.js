const fs = require('fs')
const core = require('@actions/core')

try {
  var locales = fs.readdirSync('i18n')
  console.log(`Found the locales ${locales}`)

  var config = fs
    .readFileSync(process.cwd() + '/docusaurus.config.js')
    .toString()

  config = config.replace(/(?<=locales: )(.*)(?=,)/, JSON.stringify(locales))

  const outputFile = process.cwd() + '/docusaurus.config.i18n.js'

  fs.writeFileSync(outputFile, config)

  core.setOutput('locale-list', locales)
} catch (error) {
  core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
}
