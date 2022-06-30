const fs = require('fs')
const core = require('@actions/core')

try {
  console.log('I ran!')
} catch (error) {
  core.setFailed(`An issue ocurred while retrieving the languages: ${error}`)
}
