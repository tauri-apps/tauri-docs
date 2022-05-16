const fs = require('fs')
const path = require('path')
const schemaPath = path.join(__dirname, '../../tauri/tooling/cli/schema.json')
const schemaString = fs
  .readFileSync(schemaPath)
  .toString()
  .replaceAll('\\n', '<br />')
  .replaceAll('<file>', '')
const schema = JSON.parse(schemaString)
const templatePath = path.join(__dirname, '../docs/.templates/config.md')
const targetPath = path.join(__dirname, '../docs/api/config.md')
const template = fs.readFileSync(templatePath, 'utf8')

// Check bundle targets
// Add value formats
// Required values in properties
// Link anchor in table

const output = []

buildObject(null, schema, 2)

function buildObject(key, value, headerLevel) {
  var headerTitle
  if (value.title) {
    headerTitle = value.title
  } else {
    headerTitle = key
  }

  output.push(`${'#'.repeat(headerLevel)} ${headerTitle}\n`)
  output.push(`${value.description}\n`)
  output.push(longFormTypeConstructor(value))

  buildProperties(headerTitle, value)

  if (value.definitions) {
    Object.entries(value.definitions).forEach(([innerKey, innerValue]) => {
      buildObject(innerKey, innerValue, headerLevel + 1)
    })
  }
}

function buildProperties(parentName, object) {
  if (!object.properties) {
    return
  }

  // Build table header
  output.push('| Name | Type | Default | Description |')
  output.push('| ---- | ---- | ------- | ----------- |')

  // Populate table
  Object.entries(object.properties).forEach(([key, value]) => {
    if (key == '$schema') {
      return
    }

    const propertyType = typeConstructor(value)
    const propertyDefault = defaultConstructor(value)

    const url = `${parentName.toLowerCase()}.${key.toLowerCase()}`
    const name = `<div id="${url}">\`${key}\`<a class="hash-link" href="#${url}"></a></div>`
    output.push(
      `| ${name} | ${propertyType} | ${propertyDefault} | ${value.description} |`
    )
  })

  output.push('\n')
}

function typeConstructor(object) {
  if (object.type) {
    // See what the actual types are
    switch (typeof object.type) {
      case 'string':
        // Verify that it is a string type
        switch (object.type) {
          case 'string':
          case 'number':
          case 'boolean':
            return `\`${object.type}\``
          case 'object':
            return `\`${object.type}\``
          case 'array':
            if (object.items.type) {
              var format = ''
              if (object.items.format) {
                format = ` (${object.items.format})`
              }
              return `[\`${object.items.type}\`${format}]`
            }
            if (object.items.$ref) {
              return `[${refLinkConstructor(object.items.$ref)}]`
            }
          default:
        }
      case 'undefined':
        return '_null_'
      case 'object':
        if (Array.isArray(object.type)) {
          // Check if it should just be an optional value
          if (object.type.length == 2 && object.type.includes('null')) {
            return `\`${object.type.filter((item) => item != 'null')}\`?`
          }
        }
      default:
    }
  }

  if (object.$ref) {
    return refLinkConstructor(object.$ref)
  }

  if (object.anyOf) {
    // Removes any null values
    var canBeNull = false
    const items = object.anyOf.filter((item) => {
      if (item.type && item.type == 'null') {
        canBeNull = true
        return false
      } else {
        return true
      }
    })

    if (canBeNull && items.length == 1) {
      return `${items.map(typeConstructor)}?`
    }

    return items.map(typeConstructor).join(' \\| ')
  }

  if (object.allOf) {
    return refLinkConstructor(object.allOf[0].$ref)
  }

  if (object.oneOf) {
    return object.oneOf.map(typeConstructor).join(' | ')
  }

  console.log('A type was not able to be parsed:', object)
}

function longFormTypeConstructor(object) {
  if (object.enum) {
    var buffer = []
    buffer.push(`Can be any of the following \`${object.type}\` values:`)
    object.enum.forEach((item) => {
      buffer.push(`- ${item}`)
    })
    return buffer.join('\n')
  }
  if (object.anyOf) {
    var buffer = []
    buffer.push('Can be any of the following types:\n')
    object.anyOf.forEach((item) => {
      var description = ':'
      if (item.description) {
        description = `: ${item.description}`
      }
      buffer.push(`- ${typeConstructor(item)}${description}`)
    })

    return buffer.join(`\n`)
  }

  if (object.oneOf) {
    var buffer = []
    buffer.push('Can be any **ONE** of the following types:\n')
    object.oneOf.forEach((item) => {
      var description = ':'
      if (item.description) {
        description = `: ${item.description}`
      }
      buffer.push(`- ${typeConstructor(item)}${description}`)
    })

    return buffer.join(`\n`)
  }

  return `Type: ${typeConstructor(object)}\n`
}

function defaultConstructor(object) {
  switch (typeof object.default) {
    case 'boolean':
    case 'number':
      return `\`${object.default}\``
    case 'object':
      // Check if empty array
      if (Array.isArray(object.default) && object.default.length == 0) {
        return '[]'
      }
    default:
  }

  if (object.$ref) {
    console.error('Found $ref default:', object.$ref)
  }

  if (object.anyOf) {
    const link = object.anyOf[0].$ref
      .replace('#/definitions/', '')
      .toLowerCase()
    return `[view](#${link})`
  }

  if (object.allOf) {
    const link = object.allOf[0].$ref
      .replace('#/definitions/', '')
      .toLowerCase()
    return `[view](#${link})`
  }

  if (object.oneOf) {
    console.error('Found oneOf default:', object.oneOf)
  }

  return '_null_'
}

function refLinkConstructor(string) {
  const name = string.replace('#/definitions/', '')
  return `[\`${name}\`](#${name.toLowerCase()})`
}

fs.writeFileSync(
  targetPath,
  template.replace('{properties}', output.join('\n'))
)
