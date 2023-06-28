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
const nullMarkdown = '_null_'

const header = `---
toc_max_heading_level: 5
---

`

const builtDefinitions = []

function buildObject(key, value, headerLevel) {
  let out = []
  headerLevel = Math.min(headerLevel, 6)

  var headerTitle = value.title ? 'Configuration' : key

  var header = `${'#'.repeat(headerLevel)} ${headerTitle}\n`

  if (headerLevel === 1) {
    headerLevel = 2
  }

  out.push(header)
  out.push(`${descriptionConstructor(value.description)}\n`)

  out.push(`${longFormTypeConstructor(key, value, headerLevel)}\n`)
  out = out.concat(buildProperties(headerTitle, value, headerLevel))

  out = out.concat(inspectRef(value, headerLevel + 1))

  return out
}

function buildDef(name, headerLevel) {
  const def = name.replace('#/definitions/', '')
  if (!builtDefinitions.includes(def)) {
    builtDefinitions.push(def)
    const obj = schema.definitions[def]
    return buildObject(def, obj, headerLevel)
  }
  return []
}

function inspectRef(object, headerLevel) {
  let out = []

  if (object.$ref) {
    out = out.concat(buildDef(object.$ref, headerLevel))
  }

  if (object.additionalProperties && object.additionalProperties.$ref) {
    out = out.concat(buildDef(object.additionalProperties.$ref, headerLevel))
  }

  if (object.items && object.items.$ref) {
    out = out.concat(buildDef(object.items.$ref, headerLevel))
  }

  for (const opt of object.allOf || []) {
    out = out.concat(inspectRef(opt, headerLevel))
  }

  for (const opt of object.anyOf || []) {
    out = out.concat(inspectRef(opt, headerLevel))
  }

  return out
}

function buildProperties(parentName, object, headerLevel) {
  const out = []
  if (!object.properties) return out

  const required = object.required || []

  // Build table header
  out.push('| Name | Type | Default | Description |')
  out.push('| ---- | ---- | ------- | ----------- |')

  let definitions = []

  // Populate table
  Object.entries(object.properties).forEach(([key, value]) => {
    if (key == '$schema') return

    let propertyType = typeConstructor(value, true)
    let propertyDefault = defaultConstructor(value)

    if (required.includes(key)) {
      propertyType += ' (required)'
      if (propertyDefault === nullMarkdown) {
        propertyDefault = ''
      }
    }

    const url = `${parentName.toLowerCase()}.${key.toLowerCase()}`
    const name = `<div className="anchor-with-padding" id="${url}">\`${key}\`<a class="hash-link" href="#${url}"></a></div>`
    out.push(
      `| ${name} | ${propertyType} | ${propertyDefault} | ${descriptionConstructor(
        value.description,
        true
      )} |`
    )

    definitions = definitions.concat(inspectRef(value, headerLevel + 1))
  })

  out.push('\n')

  return out.concat(definitions)
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

  const referenceStyleLinksRegex = /(\[[A-Za-z0-9 ]+\]): (.+)/g
  const referenceStyleLinksMatches = referenceStyleLinksRegex.exec(description)
  if (referenceStyleLinksMatches) {
    let link = referenceStyleLinksMatches[2]
    // strip `<` and `>` from `<$url>`
    if (link.startsWith('<')) {
      link = link.substring(1, link.length - 1)
    }
    description = description
      .replace(referenceStyleLinksMatches[0], '')
      .replace(
        referenceStyleLinksMatches[1],
        `${referenceStyleLinksMatches[1]}(${link})`
      )
      .trim()
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
  const canBeNull =
    (object.type && object.type.includes('null')) ||
    (object.anyOf && object.anyOf.some((item) => item.type === 'null'))

  if (object.$ref) {
    return refLinkConstructor(object.$ref, canBeNull)
  }

  if (object.additionalProperties && object.additionalProperties.$ref) {
    return refLinkConstructor(object.additionalProperties.$ref, canBeNull)
  }

  if (object.items && object.items.$ref) {
    return refLinkConstructor(object.items.$ref, canBeNull)
  }

  if (object.anyOf) {
    // Removes any null values
    const items = object.anyOf.filter(
      (item) => !(item.type && item.type == 'null')
    )

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
          case 'integer':
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
                typeString = `${typeConstructor(
                  object.items,
                  describeObject
                )}[]`
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
        typeString = nullMarkdown
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

    if (typeString != '') {
      if (additionalProperties.length > 0) {
        const props = `_(${additionalProperties.join(', ')})_`
        return `${typeString} ${props}`
      }
      return typeString
    }
  }

  if (object.enum) {
    return `${m}${object.enum.map((e) => `"${e}"`).join(', ')}${m}`
  }

  if (Array.isArray(object)) {
    if (describeObject) {
      const type = []
      for (const obj of object) {
        type.push(typeConstructor(obj))
      }
      if (type.every((t) => t === type[0])) {
        return `${m}${type[0]}${m}`
      }
      return `${m}[${type.join(', ')}]${m}`
    } else {
      return `${m}array${m}`
    }
  }

  console.log('A type was not able to be parsed:', object)
  return JSON.stringify(object)
}

/** prepares a description to be added to a markdown bullet point list */
function listDescription(description) {
  return description.replace('\n\n', '\n\n\t')
}

function longFormTypeConstructor(key, object, headerLevel) {
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
          buildProperties(key, item, headerLevel)
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
          buildProperties(key, item, headerLevel)
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

  return nullMarkdown
}

function refLinkConstructor(string, nullable = false) {
  const name = string.replace('#/definitions/', '')
  return `[\`${name}\`](#${name.toLowerCase()})${nullable ? '?' : ''}`
}

const config = buildObject(null, schema, 1).join('\n')
fs.writeFileSync(targetPath, `${header}${config}`)
