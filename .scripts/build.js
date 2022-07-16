const fs = require('fs')
const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    // Load in the config file
    var configFile = process.cwd() + '/docusaurus.config.js'
    var config = fs.readFileSync(configFile).toString()

    console.log(github.context)

    if (github.context.eventName === 'pull_request') {
      if (
        github.context.payload.head.repo.full_name === github.context.repo.repo
      ) {
      }
    }

    if (
      github.context.eventName === 'push'
      // (github.context.eventName === 'pull_request' && github.)
      // github.context.event.pull_request.head.repo.full_name ==
      //   github.context.repository
    ) {
      console.log('Running from a trusted location...')
      var locales = config.match(/(?<=locales: )(.*)(?=,)/g)
      locales = locales[0].replaceAll("'", '"')
      locales = JSON.parse(locales)

      console.log(`Found the locales ${locales}`)
      core.setOutput('locale-list', locales)
    } else {
      console.log('Running an untrusted deploy preview...')
      core.setOutput('locale-list', ['en'])
    }
  } catch (error) {
    core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
  }
}

run()
