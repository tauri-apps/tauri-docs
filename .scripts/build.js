const fs = require('fs')
const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    // Load in the config file
    var configFile = process.cwd() + '/docusaurus.config.js'
    var config = fs.readFileSync(configFile).toString()

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
