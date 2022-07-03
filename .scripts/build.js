const fs = require('fs')
const core = require('@actions/core')

async function run() {
  try {
    console.log('Env:', process.env.I18N_BUILD)
    var locales
    var configFile = process.cwd() + '/docusaurus.config.js'
    var config = fs.readFileSync(configFile).toString()

    if (process.env.I18N_BUILD) {
      console.log('Running an i18n build...')
      locales = fs.readdirSync('i18n')

      config = config.replace(
        /(?<=locales: )(.*)(?=,)/,
        JSON.stringify(locales)
      )

      console.log('Writing updated i18n config...')
      fs.writeFileSync(configFile, config)
      console.log('i18n config saved.')
    } else {
      console.log('Running a production deploy build...')
      locales = config.match(/(?<=locales: )(.*)(?=,)/g)
      locales = locales[0].replaceAll("'", '"')
      locales = JSON.parse(locales)
    }
    console.log(`Found the locales ${locales}`)
    core.setOutput('locale-list', locales)
  } catch (error) {
    core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
  }
}

run()
