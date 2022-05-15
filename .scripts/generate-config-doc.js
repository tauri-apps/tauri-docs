const fs = require('fs')
const { type } = require('os')
const path = require('path')
const schemaPath = path.join(__dirname, '../../tauri/tooling/cli/schema.json')
const schemaString = fs
  .readFileSync(schemaPath)
  .toString()
  .replaceAll('<', '&lt;') // Fixes opening HTML brackets
  .replaceAll('>', '&gt;') // Fixes closing HTML brackets
  .replaceAll('\\n', '<br />') // Fixes new lines
  .replaceAll('SecurityConfig.dev_csp', '#dev_csp') // Fixes issue with hard-link in schema
const schema = JSON.parse(schemaString)
const templatePath = path.join(__dirname, '../docs/.templates/config.md')
const targetPath = path.join(__dirname, '../docs/api/config.md')
const template = fs.readFileSync(templatePath, 'utf8')

const output = []
const builtHeaders = []

Object.entries(schema.properties).forEach(([key, value]) => {
  if (key !== '$schema') {
    buildProperty(key, value, 1)
  }
})

function buildProperty(key, value, headingLevel) {
  // Skips building if an object with this value already exists
  if (builtHeaders.includes(key)) {
    return
  }

  if (headingLevel != 1) {
    builtHeaders.push(key)
    output.push(`${'#'.repeat(headingLevel)} \`${key}\``)
    output.push(`${value.description}\n`)

    if (typeConstructor(value.type)) {
      output.push(`Type: ${typeConstructor(value.type)}\n`)
    }
  }

  buildTable(value, headingLevel)
  buildAllOf(value, headingLevel)
  buildAnyOf(value, headingLevel)
  buildReferencedTypes(value, headingLevel)
}

function buildTable(values, headingLevel) {
  if (!values.properties) {
    return
  }

  var required = []

  if (values.required) {
    required = required.concat(values.required)
  }

  output.push('\n')
  output.push('| Name | Type | Default | Description |')
  output.push('| ---- | ---- | ------- | ----------- |')

  // Build initial table
  Object.entries(values.properties).forEach(([key, value]) => {
    output.push(
      `| \`${key}\`\
      | ${typeConstructor(value)}${required.includes(key) ? '' : '?'}\
      | ${defaultConstructor(value)}\
      | ${value.description} |`
    )
  })

  // Build any custom objects found
  Object.entries(values.properties).forEach(([_, value]) => {
    buildAllOf(value, headingLevel)
    buildAnyOf(value, headingLevel)
    buildReferencedTypes(value, headingLevel)
  })
}

function buildAllOf(value, headingLevel) {
  if ('allOf' in value) {
    value.allOf.forEach((individualValue) => {
      const propertyKey = individualValue.$ref.replace('#/definitions/', '')
      const propertyValue = schema.definitions[propertyKey]
      buildProperty(propertyKey, propertyValue, headingLevel + 1)
    })
  }
}

function buildAnyOf(value, headingLevel) {
  if ('anyOf' in value) {
    output.push('**Any of the following types can be used:**\n')
    output.push(`| Type | Default | Description |`)
    output.push(`| ---- | ------- | ----------- |`)

    value.anyOf.forEach((individualValue) => {
      output.push(
        `| ${typeConstructor(individualValue)}\
        | ${defaultConstructor(individualValue)}\
        | ${individualValue.description} |`
      )
    })

    value.anyOf.forEach((individualValue) => {
      buildAllOf(individualValue, headingLevel)
      buildAnyOf(individualValue, headingLevel)
      buildReferencedTypes(individualValue, headingLevel)
    })
  }
}

function buildReferencedTypes(value, headingLevel) {
  if (value.properties) {
    Object.entries(value.properties).forEach(([key, value]) => {
      buildReferencedTypes(value, headingLevel)
    })
  }

  if (value.items && '$ref' in value.items) {
    const propertyKey = value.items.$ref.replace('#/definitions/', '')
    const propertyValue = schema.definitions[propertyKey]
    buildProperty(propertyKey, propertyValue, headingLevel + 1)
  }
  if (value.$ref) {
    const propertyKey = value.$ref.replace('#/definitions/', '')
    const propertyValue = schema.definitions[propertyKey]
    buildProperty(propertyKey, propertyValue, headingLevel + 1)
  }
}

function typeConstructor(value) {
  if (!value) {
    return
  }

  if (typeof value === 'object') {
    if ('allOf' in value) {
      const name = value.allOf[0].$ref.replace('#/definitions/', '')
      return `[\`${name}\`](#${name.toLowerCase()})`
    }

    if ('anyOf' in value) {
      const name = value.anyOf[0].$ref.replace('#/definitions/', '')
      return `[\`${name}\`](#${name.toLowerCase()})`
    }
  }

  // if 'type' exists
  switch (typeof value.type) {
    case 'string':
      if (value.type == 'array') {
        return arrayTypeConstructor(value)
      }
      return `\`${value.type}\``
    case 'boolean':
      return `\`${value.type}\``
    case 'object':
      if (Array.isArray(value.type)) {
        return arrayTypeConstructor(value)
      }
      return `UNKNOWN: ${JSON.stringify(value)}`

    case 'undefined':
      return
    default:
      console.log('Unknown value type:', value.type)
      return `Unknown value type: ${value.type}`
  }
}

function arrayTypeConstructor(value) {
  // If the actual type object is an array
  if (Array.isArray(value.type)) {
    value.type.forEach(function (part, index) {
      this[index] = `\`${part}\``
    }, value.type)
    return `[${value.type.join(` \\| `)}]`
  }

  // If it's just faking the type...
  if (value.type == 'array') {
    // Check to see if it's referencing another object type
    if (value.items.$ref) {
      const name = value.items.$ref.replace('#/definitions/', '')
      return `[\`${name}\`](#${name.toLowerCase()})`
    }
    // Or it could just be referencing a specific primitive type
    if ('items' in value) {
      return `\`${value.items.type}\``
    }
  }

  console.log(`error: ${JSON.stringify(value)}`)
  return `ERROR: ${JSON.stringify(value)}`
}

function defaultConstructor(value) {
  switch (typeof value.default) {
    case 'string':
    case 'boolean':
    case 'number':
      return `\`${value.default}\``
    case 'undefined':
      return `\_null\_`
    case 'object':
      if (Array.isArray(value.default)) {
        if (value.default.length == 0) {
          return `\_null\_`
        }
      }
      if ('allOf' in value) {
        const name = value.allOf[0].$ref.replace('#/definitions/', '')
        return ''
      }
      if ('default' in value) {
        return `_${value.default}_`
      }
      return `OBJECT: ${JSON.stringify(value.default)}`
    default:
      console.log('Unknown default type:', value.default)
      return `Unknown default type: ${value.default}`
  }
}

fs.writeFileSync(
  targetPath,
  template.replace('{properties}', output.join('\n'))
)
