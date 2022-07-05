const fs = require('fs')
const core = require('@actions/core')

async function run() {
  try {
    // Load in the config file
    var configFile = process.cwd() + '/docusaurus.config.js'
    var config = fs.readFileSync(configFile).toString()

    console.log('Running a production deploy build...')
    var locales = config.match(/(?<=locales: )(.*)(?=,)/g)
    locales = locales[0].replaceAll("'", '"')
    locales = JSON.parse(locales)

    console.log(`Found the locales ${locales}`)
    core.setOutput('locale-list', locales)
  } catch (error) {
    core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
  }
}

run()
