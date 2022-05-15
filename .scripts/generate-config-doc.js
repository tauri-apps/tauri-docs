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

// Used to keep track of built sections so there aren't duplicates
const builtHeaders = []

Object.entries(schema.properties).forEach(([key, value]) => {
  if (key !== '$schema') {
    buildObject(key, value, 1)
  }
})

function buildObject(key, value, headingLevel) {
  // Skips building if an object with this value already exists
  if (builtHeaders.includes(key)) {
    return
  }

  // Forces correctly rendering headers of very deeply nested objects
  if (headingLevel > 6) {
    headingLevel = 6
  }

  // Don't generate headings for the top-most level
  if (headingLevel != 1) {
    builtHeaders.push(key)
    output.push(`${'#'.repeat(headingLevel)} \`${key}\``)
    output.push(`${value.description}\n`)

    if (typeConstructor(value)) {
      output.push(`**Type:** ${typeConstructor(value)}\n`)
    }

    if (value.enum) {
      output.push(`Options: ${value.enum.join(', ')}\n`)
    }
  }

  buildProperties(value, headingLevel)

  buildXOf(value, headingLevel)

  buildReferencedTypes(value, headingLevel)
}

function buildProperties(values, headingLevel) {
  if (!values.properties) {
    return
  }

  // Keeps track of which items in the schema are required
  var required = []

  if (values.required) {
    required = required.concat(values.required)
  }

  // Build table header
  output.push('| Name | Type | Default | Description |')
  output.push('| ---- | ---- | ------- | ----------- |')

  // Populate table
  Object.entries(values.properties).forEach(([key, value]) => {
    const lineType = typeConstructor(value).concat(
      required.includes(key) ? '' : '?'
    )
    const lineDefault = defaultConstructor(value)
    output.push(
      `| \`${key}\` | ${lineType} | ${lineDefault} | ${value.description}\ |`
    )
  })

  // Build any `object` types
  Object.entries(values.properties).forEach(([_, value]) => {
    buildXOf(value, headingLevel)
  })
}

function buildXOf(value, headingLevel) {
  buildAllOf(value, headingLevel)
  buildAnyOf(value, headingLevel)
  buildOneOf(value, headingLevel)

  // Builds any objects found in the `allOf` item of an object
  function buildAllOf(value, headingLevel) {
    if (value.allOf) {
      // Loop through those objects
      value.allOf.forEach((individualValue) => {
        const propertyKey = individualValue.$ref.replace('#/definitions/', '')
        const propertyValue = schema.definitions[propertyKey]
        buildObject(propertyKey, propertyValue, headingLevel + 1)
      })
    }
  }

  // Builds any objects found in the `anyOf` item of an object
  function buildAnyOf(value, headingLevel) {
    if (value.anyOf) {
      // Create a table for this type
      output.push('**Any of the following types can be used:**\n')
      output.push(`| Type | Default | Description |`)
      output.push(`| ---- | ------- | ----------- |`)

      // Populate this table
      value.anyOf.forEach((individualValue) => {
        output.push(
          `| ${typeConstructor(individualValue)}\
        | ${defaultConstructor(individualValue)}\
        | ${individualValue.description} |`
        )
      })

      // See if any referenced objects need built
      Object.entries(value.anyOf).forEach(([key, individualValue]) => {
        buildProperties(individualValue)
        buildXOf(individualValue, headingLevel)
        buildReferencedTypes(individualValue, headingLevel)
      })
    }
  }

  function buildOneOf(value, headingLevel) {
    if (value.oneOf) {
      // Create a table for this type
      output.push('**One of the following types can be used:**\n')
      output.push(`| Type | Default | Description |`)
      output.push(`| ---- | ------- | ----------- |`)

      // Populate this table
      value.oneOf.forEach((individualValue) => {
        output.push(
          `| ${typeConstructor(individualValue)}\
        | ${defaultConstructor(individualValue)}\
        | ${individualValue.description} |`
        )
      })

      // See if any referenced objects need built
      Object.entries(value.oneOf).forEach(([key, individualValue]) => {
        buildProperties(individualValue)
        buildXOf(individualValue, headingLevel)
        buildReferencedTypes(individualValue, headingLevel)
      })
    }
  }
}

// Checks the `$ref` object to build any of those objects
function buildReferencedTypes(value, headingLevel) {
  // If a parent object with properties was passed...
  if (value.properties) {
    Object.entries(value.properties).forEach(([key, value]) => {
      buildReferencedTypes(value, headingLevel)
    })
  }

  // See if an item's property is included and any references in that
  if (value.items && '$ref' in value.items) {
    const propertyKey = value.items.$ref.replace('#/definitions/', '')
    const propertyValue = schema.definitions[propertyKey]
    buildObject(propertyKey, propertyValue, headingLevel + 1)
  }

  // Lastly check if there are any sibling `$ref` objects
  if (value.$ref) {
    const propertyKey = value.$ref.replace('#/definitions/', '')
    const propertyValue = schema.definitions[propertyKey]
    buildObject(propertyKey, propertyValue, headingLevel + 1)
  }

  // Checks if there's an `additionalProperties` node
  if (value.additionalProperties && value.additionalProperties.$ref) {
    const propertyKey = value.additionalProperties.$ref.replace(
      '#/definitions/',
      ''
    )
    const propertyValue = schema.definitions[propertyKey]
    buildObject(propertyKey, propertyValue, headingLevel + 1)
  }
}

// Determins how the type of an object should be rendered
function typeConstructor(value) {
  // Skip if no type
  if (value.type) {
    // Logic for any remaining scenarios
    switch (typeof value.type) {
      case 'boolean':
      case 'string':
        if (value.type == 'array') {
          return arrayTypeConstructor(value)
        } else if (value.type == 'object' && value.properties) {
          console.log('A new object was found', value.properties)
        }
        return `\`${value.type}\``
      case 'object':
        if (Array.isArray(value.type)) {
          return arrayTypeConstructor(value)
        }
        console.log('Unknown value type:', value.type)
        return ''
      case 'undefined':
        return ''
      default:
        console.log('Unknown value type:', value.type)
        return ''
    }
  }

  if (value.$ref) {
    const name = value.$ref.replace('#/definitions/', '')
    return `[\`${name}\`](#${name.toLowerCase()})`
  }

  if (value.allOf) {
    const name = value.allOf[0].$ref.replace('#/definitions/', '')
    return `[\`${name}\`](#${name.toLowerCase()})`
  }

  if (value.anyOf) {
    return arrayTypeConstructor(value)
  }
  return ''
}

function arrayTypeConstructor(value) {
  // If the actual type object is an array
  if (Array.isArray(value.type)) {
    // Remove null values
    value.type = value.type.filter((item) => item != 'null')

    value.type.forEach(function (part, index) {
      this[index] = `\`${part}\``
    }, value.type)
    if (value.type.count > 1) {
      return `[${value.type.join(` \\| `)}]`
    } else {
      return `${value.type.join(` \\| `)}`
    }
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
      return `[\`${value.items.type}\`]`
    }
  }

  if (value.anyOf) {
    var objects = []

    value.anyOf.forEach((value) => {
      const tempType = typeConstructor(value)

      // Ignore these types, this should be indicated by a '?'
      if (!tempType.includes('null')) {
        objects.push(tempType)
      }
    })

    return objects.join(' \\| ')
  }

  console.log(`error: ${JSON.stringify(value)}`)
  return `ERROR: ${JSON.stringify(value)}`
}

function defaultConstructor(value) {
  switch (typeof value.default) {
    case 'string':
      if (!value.default) {
        return '_null_'
      }
    case 'boolean':
    case 'number':
      return `\`${value.default}\``
    case 'undefined':
      return '_null_'
    case 'object':
      if (Array.isArray(value.default)) {
        if (value.default.length == 0) {
          return '_null_'
        }
      }

      if ('allOf' in value) {
        const name = value.allOf[0].$ref
          .replace('#/definitions/', '')
          .toLowerCase()
        return `[\_view\_](#${name})`
      }

      if ('additionalProperties' in value) {
        return `\`${value.additionalProperties.type}\``
      }

      if ('default' in value) {
        return `_${value.default}_`
      }
      console.log('Uncaught object type:', value.default)
      return `OBJECT: ${JSON.stringify(value.default)}`
    default:
      console.log('Unknown default type:', value.default)
      return ''
  }
}

fs.writeFileSync(
  targetPath,
  template.replace('{properties}', output.join('\n'))
)
