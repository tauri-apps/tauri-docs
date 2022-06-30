const fs = require('fs')
const core = require('@actions/core')
const tc = require('@actions/cache')

try {
  var locales = process.env.LOCALES
  // core.getInput('locale-list', { required: true })
  // Get the locales variable
  // Load in each via a loop
  // Merge them together into the build folder
  // Tell netlify to pick it up (outside of this file and with another action probably)
  console.log(`I ran! Locales: ${locales}`)
} catch (error) {
  core.setFailed(`An issue ocurred while combining locales: ${error}`)
}
