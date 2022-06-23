const fs = require('fs')
var locales = fs.readdirSync('i18n')

var config = fs.readFileSync(process.cwd() + '/docusaurus.config.js').toString()

config = config.replace(/(?<=locales: )(.*)(?=,)/, JSON.stringify(locales))

const outputFile = process.cwd() + '/docusaurus.config.i18n.js'

fs.writeFileSync(outputFile, config)

// locales: ['en'],

// fs.writeFileSync(outputFile, 'module.exports = ')

// fs.appendFileSync(outputFile, util.inspect(config, false, null))
