const fs = require('fs')
const path = require('path')
const schemaPath = path.join(__dirname, '../../tauri/tooling/cli/schema.json')
const schemaString = fs.readFileSync(schemaPath).toString() //.replace('\\n/g', '')
const schema = JSON.parse(schemaString)
const templatePath = path.join(__dirname, '../docs/.templates/config.md')
const targetPath = path.join(__dirname, '../docs/api/config.md')
const template = fs.readFileSync(templatePath, 'utf8')

const output = []

Object.entries(schema.properties).forEach(([key, value]) => {
  if (key !== '$schema') {
    buildProperty(key, value, 1)
  }
})

function buildProperty(key, value, headingLevel) {
  output.push(`${'#'.repeat(headingLevel)} \`${key}\``)
  output.push(value.description)

  if (value.type) {
    // Simple type
    output.push('\n')
    output.push(`Type: ${typeConstructor(value)}`)
    output.push('\n')
    output.push(`Default: ${value.default}`)
  } else {
    // Nested object
    if ('allOf' in value) {
      const propertyKey = value.allOf[0].$ref.replace('#/definitions/', '')
      const propertyValue = schema.definitions[propertyKey]
      buildProperty(propertyKey, propertyValue, headingLevel + 1)
    }
  }

  // If there is a reference to another property
  if (value.properties) {
    buildTable(value.properties)
    Object.entries(value.properties).forEach(([propertyKey, propertyValue]) => {
      // Check to see if it's a complex type and needs to be built further
      if ('allOf' in propertyValue) {
        buildProperty(propertyKey, propertyValue, headingLevel + 1)
      }
    })
  }
}

function buildTable(values) {
  output.push('\n')
  output.push('| Name | Type | Default | Description |')
  output.push('| ---- | ---- | ------- | ----------- |')

  Object.entries(values).forEach(([key, value]) => {
    var type = typeConstructor(value)

    output.push(
      `| \`${key}\` | ${type} | ${value.default} | ${value.description} |`
    )
  })
}

function typeConstructor(value) {
  if (Array.isArray(value.type)) {
    // Array type
    value.type.forEach(function (value, index) {
      this[index] = `\`${value}\``
    }, value.type)
    return value.type.join(' \\| ')
  } else if ('allOf' in value) {
    // Reference to another type
    const name = value.allOf[0].$ref.replace('#/definitions/', '')
    // TODO: Add link to heading
    return `\`${name}\``
  } else if (value.type) {
    return `\`${value.type}\``
  } else {
    console.log(`Unknown type: ${JSON.stringify(value)}`)
    return `COMPLEX TYPE ${JSON.stringify(value.allOf)}`
  }
}

fs.writeFileSync(
  targetPath,
  template.replace('{properties}', output.join('\n'))
)
