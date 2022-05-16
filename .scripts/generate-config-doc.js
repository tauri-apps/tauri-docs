const fs = require('fs')
const { type } = require('os')
const path = require('path')
const schemaPath = path.join(__dirname, '../../tauri/tooling/cli/schema.json')
const schemaString = fs
  .readFileSync(schemaPath)
  .toString()
  .replaceAll('<file>', '')
const schema = JSON.parse(schemaString)
const templatePath = path.join(__dirname, '../docs/.templates/config.md')
const targetPath = path.join(__dirname, '../docs/api/config.md')
const template = fs.readFileSync(templatePath, 'utf8')

const markdownLinkRegex = /\[([^\[]+)\]\((.*)\)/gm

/*

 https://json-schema.org/understanding-json-schema/reference/combining.html

 If `allOf`...
  if only one and it is $ref, then treat as referencing an object and build there

 if `anyOf`...
  If one ref and the other is null, then optional..
  else list them out as OR

 If `oneOf`...
  Is an enum

 Only create table if properties
*/

const output = []

// Used to keep track of built sections so there aren't duplicates
const builtObjects = []

Object.entries(schema.properties).forEach(([key, value]) => {
  if (key !== '$schema') {
    buildObject(key, value, 1)
  }
})

function buildObject(key, value, headingLevel) {
  // Skips building if an object with this value already exists
  if (builtObjects.includes(key)) {
    return
  }

  // Forces correctly rendering headers of very deeply nested objects
  if (headingLevel > 5) {
    headingLevel = 5
  }

  // Don't generate headings for the top-most level
  if (headingLevel != 1) {
    builtObjects.push(key)
    output.push(`${'#'.repeat(headingLevel)} \`${key}\``)

    if (value.description) {
      output.push(
        `${descriptionConstructor(value.description, false, headingLevel)}\n`
      )
    }

    if (typeConstructor(value)) {
      output.push(`**Type:** ${typeConstructor(value)}\n`)
    }
  }

  buildProperties(key, value, headingLevel)
  buildXOf(key, value, headingLevel)
  buildReferencedTypes(value, headingLevel)
}

function buildProperties(parentKey, values, headingLevel) {
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
    const requiredProperty = required.includes(key)

    if (Array.isArray(value.type) && !requiredProperty) {
      value.type = value.type.filter((t) => t !== 'null')
      if (value.type.length === 1) {
        value.type = value.type[0]
      }
    }
    const propertyType = typeConstructor(value, requiredProperty).concat(
      requiredProperty ? '' : '?'
    )
    const propertyDefault = defaultConstructor(value)
    const propertyDescription = descriptionConstructor(value.description, true)

    const url = `${parentKey.toLowerCase()}.${key.toLowerCase()}`
    const name = `<div id="${url}">\`${key}\` <a className="hash-link" href="#${url}"></a></div>`

    output.push(
      `| ${name} | ${propertyType} | ${propertyDefault} | ${propertyDescription} |`
    )
  })

  output.push('\n')

  // Build any referenced types
  Object.entries(values.properties).forEach(([key, value]) => {
    buildXOf(key, value, headingLevel)
  })
}

function buildXOf(key, value, headingLevel) {
  buildAllOf(key, value, headingLevel)
  buildAnyOf(key, value, headingLevel)
  buildOneOf(key, value, headingLevel)

  // Builds any objects found in the `allOf` item of an object
  function buildAllOf(key, value, headingLevel) {
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
  function buildAnyOf(key, value, headingLevel) {
    if (value.anyOf) {
      // Check if a null is contained and the object should just be optional
      if (
        value.anyOf.some((e) => e.type == 'null') &&
        value.anyOf.length == 2
      ) {
        console.log('Contains a null', value.anyOf)
        // Remove the null values
        value.anyOf = value.anyOf.filter((item) => item.type != 'null')
        // Render it normally
      } else {
        // Build normally without being an optional
      }

      // Remove any null values
      const valuesWithoutNull = value.anyOf.filter(
        (item) => item.type != 'null'
      )

      // Check if a null value was removed
      if (value.anyOf.count == valuesWithoutNull.count + 1) {
        console.log('Only a single value was referenced', value.anyOf)
      } else {
      }
      // Create a table for this type
      output.push('The value can be any of the following:\n')

      // Populate this table
      value.anyOf.forEach((individualValue) => {
        if (typeConstructor(individualValue).includes('null')) {
          return
        }

        const propertyType = typeConstructor(individualValue)
        const propertyDefault = defaultConstructor(individualValue)
        const propertyDescription = descriptionConstructor(
          individualValue.description,
          true
        )

        output.push(`- ${propertyType} (Defaults to ${propertyDefault})`)
        if (propertyDescription) {
          output.push(`  - ${propertyDescription}`)
        }
      })

      output.push('\n')

      // See if any referenced objects need built
      Object.entries(value.anyOf).forEach(([key, individualValue]) => {
        buildProperties(key, individualValue)
        buildXOf(key, individualValue, headingLevel)
        buildReferencedTypes(individualValue, headingLevel)
      })
    }
  }

  function buildOneOf(key, value, headingLevel) {
    if (value.oneOf) {
      // Create a table for this type
      output.push('**One of the following types can be used:**\n')
      output.push(`| Type | Default | Description |`)
      output.push(`| ---- | ------- | ----------- |`)

      // Populate this table
      value.oneOf.forEach((individualValue) => {
        const propertyType = typeConstructor(individualValue)
        const propertyDefault = defaultConstructor(individualValue)
        output.push(
          `| ${propertyType} | ${propertyDefault} | ${descriptionConstructor(
            individualValue.description,
            true
          )} |`
        )
      })

      output.push('\n')

      // See if any referenced objects need built
      Object.entries(value.oneOf).forEach(([_, individualValue]) => {
        buildProperties(key, individualValue)
        buildXOf(key, individualValue, headingLevel)
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

function descriptionConstructor(
  description,
  fixNewlines = false,
  headingLevel = 3
) {
  if (!description) {
    return description
  }

  const exampleHeadingTag = `h${headingLevel + 1}`
  description = description.replace(
    '# Examples',
    `<${exampleHeadingTag}>Examples</${exampleHeadingTag}>`
  )

  if (fixNewlines) {
    description = description.replaceAll('\n', '<br />')
  }

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

// Determins how the type of an object should be rendered
function typeConstructor(value) {
  if (value.enum) {
    return `Enum: ${value.enum}`
  }

  // Skip if no type
  if (value.type) {
    // Logic for any remaining scenarios
    switch (typeof value.type) {
      case 'boolean':
      case 'string':
        if (value.type == 'array') {
          return arrayTypeConstructor(value)
        }
        // Fix for ShellAllowedArg.anyOf.object
        if (value.type == 'object') {
          if (value.required) {
            return `[\`${value.required}\`]`
          }
        }
        if (value.format) {
          return `\`${value.type}\` (${value.format})`
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

    return `[${value.type.join(` \\| `)}]`
  }

  // If it's just faking the type...
  if (value.type == 'array') {
    // Check to see if it's referencing another object type
    if (value.items.$ref) {
      const name = value.items.$ref.replace('#/definitions/', '')
      return `\[[\`${name}\`](#${name.toLowerCase()})]`
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
