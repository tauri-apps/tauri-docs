const fs = require('fs')
const path = require('path')
const schemaPath = path.join(__dirname, '../../tauri/tooling/cli/schema.json')
const schemaString = fs
  .readFileSync(schemaPath)
  .toString()
  // Fixes any angle brackets that aren't escaped propertly
  .replaceAll('(?<!\\)<', '<')
  .replaceAll('(?!\\)>', '>')
const schema = JSON.parse(schemaString)
const targetPath = path.join(__dirname, '../docs/api/config.md')

const output = []

buildObject(null, schema, 1)

function buildObject(key, value) {
  var headerTitle, headerLevel
  if (value.title) {
    headerTitle = 'Configuration'
    headerLevel = 1
  } else {
    headerTitle = key
    headerLevel = headerTitle.endsWith('Config') ? 3 : 4
  }

  var header = `${'#'.repeat(headerLevel)} ${headerTitle}\n`

  output.push(header)
  output.push(`${descriptionConstructor(value.description)}\n`)

  if (headerLevel > 1) {
    output.push(`${longFormTypeConstructor(key, value)}\n`)
    output.push(buildProperties(headerTitle, value).join('\n'))
  } else {
    Object.entries(value.definitions).forEach(([innerKey, innerValue]) => {
      buildObject(innerKey, innerValue)
    })
  }
}

function buildProperties(parentName, object, describeInnerObjects = false) {
  const out = []
  if (!object.properties) return out

  var required = []

  if (object.required) {
    required = object.required
  }

  // Build table header
  out.push('| Name | Type | Default | Description |')
  out.push('| ---- | ---- | ------- | ----------- |')

  // Populate table
  Object.entries(object.properties).forEach(([key, value]) => {
    if (key == '$schema') return

    var propertyType = typeConstructor(value, describeInnerObjects)

    if (required.includes(key)) {
      propertyType += ' (required)'
    }
    const propertyDefault = defaultConstructor(value)

    const url = `${parentName.toLowerCase()}.${key.toLowerCase()}`
    const name = `<div className="anchor-with-padding" id="${url}">\`${key}\`<a class="hash-link" href="#${url}"></a></div>`
    out.push(
      `| ${name} | ${propertyType} | ${propertyDefault} | ${descriptionConstructor(
        value.description,
        true
      )} |`
    )
  })

  out.push('\n')

  return out
}

function descriptionConstructor(description, fixNewlines = false) {
  if (!description) return

  // Remove links to current page
  description = description.replaceAll(
    /\n\nSee more: https:\/\/tauri\.app\/v[0-9]\/api\/config.*$/g,
    ''
  )

  // fix Rust doc style links
  description = description.replaceAll(/\[`Self::(\S+)`\]/g, '`$1`')

  // Fix bullet points not being on a newline
  description = description.replaceAll(' - ', '\n- ')

  // Parse any json code blocks
  if (description.includes('```json ')) {
    let newDescription = ''
    const s = description.split('```')

    for (const text of s) {
      if (text.startsWith('json')) {
        const description = text.match(/([^{]+)/)[0]
        const json = JSON.stringify(
          JSON.parse(text.replace(description, '')),
          null,
          2
        )
        newDescription += `${description}\n${json}\n`
      } else {
        newDescription += text + '```'
      }
    }
    description = newDescription
  }

  // Fix any embedded new lines
  if (fixNewlines) {
    description = description.replaceAll('\n', '<br />')
  }

  const markdownLinkRegex = /\[([^\[]+)\]\((.*)\)/gm
  const markdownLinkMatches = markdownLinkRegex.exec(description)

  if (markdownLinkMatches) {
    const url = markdownLinkMatches[2]
    if (!url.startsWith('http')) {
      description = description.replace(
        url,
        `#${url.toLowerCase().replaceAll('_', '')}`
      )
    }
  }
  return description
}

function typeConstructor(object, describeObject = false) {
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
      return `${items.map((t) => typeConstructor(t, describeObject))}?`
    }

    return items.map((t) => typeConstructor(t, describeObject)).join(' \\| ')
  }

  if (object.allOf) {
    return refLinkConstructor(object.allOf[0].$ref)
  }

  if (object.oneOf) {
    return object.oneOf
      .map((t) => typeConstructor(t, describeObject))
      .join(' | ')
  }

  const m = describeObject ? '' : '`'

  if (object.type) {
    var typeString = ''

    // See what the type is
    switch (typeof object.type) {
      case 'string':
        // See if referencing a different type
        switch (object.type) {
          case 'string':
            typeString = object.enum
              ? object.enum.map((e) => `"${e}"`).join(', ')
              : `${m}${object.type}${m}`
            break
          case 'number':
          case 'boolean':
            typeString = `${m}${object.type}${m}`
            break
          case 'object':
            if (describeObject && object.properties) {
              typeString = `${m}{`
              const len = Object.keys(object.properties).length
              let i = 0
              for (const prop in object.properties) {
                typeString += ` "${prop}": ${typeConstructor(
                  object.properties[prop],
                  describeObject
                )}`
                i++
                if (i < len) typeString += ','
              }
              typeString += ` }${m}`
            } else {
              typeString = `${m}${object.type}${m}`
            }
            break
          case 'array':
            if (object.items) {
              if (describeObject) {
                typeString = `[${typeConstructor(
                  object.items,
                  describeObject
                )}]`
              } else {
                const type = typeConstructor(object.items, true)
                const hasLink = type.includes('(#')
                typeString = hasLink
                  ? type.replace(/\[`(.*)`\]/, '[`$1[]`]')
                  : `${m}${type}[]${m}`
              }
              break
            }
          default:
            break
        }
        break
      case 'undefined':
        typeString = '_null_'
        break
      case 'object':
        if (Array.isArray(object.type)) {
          // Check if it should just be an optional value
          if (object.type.length == 2 && object.type.includes('null')) {
            typeString = `${m}${object.type.filter(
              (item) => item != 'null'
            )}${m}?`
            break
          }
        }
      default:
        break
    }

    var additionalProperties = []

    if (object.format) {
      additionalProperties.push(`format: \`${object.format}\``)
    }

    if (object.multipleOf) {
      additionalProperties.push(`multiple of: \`${object.multipleOf}\``)
    }

    if (object.minimum) {
      additionalProperties.push(`minimum: \`${object.minimum}\``)
    }

    if (object.exclusiveMinimum) {
      additionalProperties.push(
        `exclusive minimum: \`${object.exclusiveMinimum}\``
      )
    }

    if (object.maximum) {
      additionalProperties.push(`maximum: \`${object.maximum}\``)
    }

    if (object.exclusiveMaximum) {
      additionalProperties.push(
        `exclusive maximum: \`${object.exclusiveMaximum}\``
      )
    }

    if (additionalProperties != '') {
      additionalProperties = `_(${additionalProperties.join(', ')})_`
    }

    if (typeString != '') {
      if (additionalProperties.length > 0) {
        return `${typeString} ${additionalProperties}`
      }
      return typeString
    }
  }

  if (object.enum) {
    return `${m}${object.enum.map((e) => `"${e}"`).join(', ')}${m}`
  }

  console.log('A type was not able to be parsed:', object)
  return JSON.stringify(object)
}

/** prepares a description to be added to a markdown bullet point list */
function listDescription(description) {
  return description.replace('\n\n', '\n\n\t')
}

function longFormTypeConstructor(key, object) {
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
        description = `: ${descriptionConstructor(item.description)}`
      }
      const hasProperties = 'properties' in item
      let typeDef = typeConstructor(item, hasProperties)
      if (hasProperties) {
        typeDef = '`' + typeDef + '`'
      }
      buffer.push(`- ${typeDef}${listDescription(description)}`)
      if (hasProperties) {
        buffer.push('\n\t')
        buffer.push(
          buildProperties(key, item, true)
            .map((line) => `\t${line}`)
            .join('\n')
        )
      }
    })

    return buffer.join(`\n`)
  }

  if (object.oneOf) {
    var buffer = []
    buffer.push('Can be any **ONE** of the following types:\n')
    object.oneOf.forEach((item) => {
      var description = ':'
      if (item.description) {
        description = `: ${descriptionConstructor(item.description)}`
      }
      const hasProperties = 'properties' in item
      let typeDef = typeConstructor(item, hasProperties)
      if (hasProperties) {
        typeDef = '`' + typeDef + '`'
      }
      buffer.push(`- ${typeDef}${listDescription(description)}`)
      if ('properties' in item) {
        buffer.push('\n\t')
        buffer.push(
          buildProperties(key, item, true)
            .map((line) => `\t${line}`)
            .join('\n')
        )
      }
    })

    return buffer.join(`\n`)
  }

  return `Type: ${typeConstructor(object)}`
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

fs.writeFileSync(targetPath, output.join('\n'))
