const fs = require('fs')
const core = require('@actions/core')
const crowdin = require('@crowdin/crowdin-api-client')

const organization = 'tauri'
const projectId = 1

async function run() {
  try {
    if (!process.env.CROWDIN_TOKEN) {
      throw 'Crowdin token not found'
    }

    // Create Crowdin object
    const { projectsGroupsApi } = new crowdin.default({
      token: process.env.CROWDIN_TOKEN,
      organization: organization,
    })

    // Get get locales from Crowdin
    const project = await projectsGroupsApi.getProject(projectId)
    const sourceLanguage = project.data.sourceLanguageId
    var locales = project.data.targetLanguages.map(
      (language) => language.locale
    )
    locales.push(sourceLanguage)
    console.log(`Retrieved the following locales: ${locales}`)

    // Load in the config file
    const configFile = process.cwd() + '/docusaurus.config.js'
    var config = fs.readFileSync(configFile).toString()

    config = config.replace(/(?<=locales: )(.*)(?=,)/g, JSON.stringify(locales))

    fs.writeFileSync(configFile, config)
    console.log('Updated Docusaurus config saved')
  } catch (error) {
    core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
  }
}

run()
