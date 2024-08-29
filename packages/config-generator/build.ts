import { JSONSchema7, JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';
import { existsSync, writeFileSync } from 'node:fs';
import { slug } from 'github-slugger';

generatePageFromSchema(
  '../tauri/crates/tauri-schema-generator/schemas/config.schema.json',
  '../../src/content/docs/reference/config.md',
  'Configuration'
);

generatePageFromSchema(
  '../tauri/crates/tauri-schema-generator/schemas/capability.schema.json',
  '../../src/content/docs/reference/acl/capability.md',
  'Capability'
);

generatePageFromSchema(
  '../tauri/crates/tauri-schema-generator/schemas/permission.schema.json',
  '../../src/content/docs/reference/acl/permission.md',
  'Permission'
);

generatePageFromSchema(
  '../tauri/crates/tauri-schema-generator/schemas/scope.schema.json',
  '../../src/content/docs/reference/acl/scope.md',
  'Scope'
);

async function generatePageFromSchema(
  schemaFile: string,
  outputFile: string,
  pageTitle: string,
  sidebarOrder: number = 1
) {
  if (!existsSync(schemaFile)) {
    throw Error(
      `Could not find the Tauri config schema ${schemaFile}. Is the Tauri submodule initialized?`
    );
  }

  let schema: JSONSchema7 = (await import(schemaFile)).default;

  const output = [
    `---
  # NOTE: This file is auto-generated. Do not edit here!
  # For corrections please directly edit the documentation of the underlying Rust source code.
  # Example for the configuration reference: 
  # - https://github.com/tauri-apps/tauri/blob/dev/crates/tauri-utils/src/config.rs
  
  title: ${pageTitle}
  sidebar:
    order: ${sidebarOrder}\n---`,
  ];

  output.push(
    ...buildSchemaDefinition(schema, {
      headingLevel: 2,
      renderTitle: false,
    })
  );

  writeFileSync(outputFile, output.join('\n\n'));
}

interface Options {
  headingLevel: number;
  renderTitle: boolean;
  leadWithType: boolean;
}

function buildSchemaDefinition(
  schema: JSONSchema7Definition,
  passedOptions: Partial<Options> = {}
): string[] {
  // Note: $id, $schema, and $comment are explicitly not rendered

  // Assign default values for any missing options
  const opts = Object.assign(
    {
      headingLevel: 1,
      renderTitle: true,
      leadWithType: false,
    },
    passedOptions
  );

  if (typeof schema === 'boolean') {
    return [`\`${schema}\``];
  }

  const out: string[] = [];

  out.push(...buildType(schema, opts));
  out.push(...buildExtendedItems(schema, opts));
  out.push(...buildConditionalSubschemas(schema, opts));
  out.push(...buildBooleanSubschemas(schema, opts));
  out.push(...buildMetadata(schema, opts));
  out.push(...buildProperties(schema, opts));
  out.push(...buildExtendedMetadata(schema, opts));
  out.push(...buildDefinitions(schema, opts));

  return out;
}

/**
 * Builds: title, readOnly, writeOnly, description
 *
 * Also see: buildExtendedMetadata()
 */
function buildMetadata(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  const out: string[] = [];

  opts.renderTitle &&
    schema.title &&
    out.push(`${'#'.repeat(Math.min(opts.headingLevel, 6))} ${schema.title}`);

  if (schema.readOnly || schema.writeOnly) {
    const line = [];
    schema.readOnly && line.push('Read only');
    schema.writeOnly && line.push('Write only');
    out.push(line.join(' & '));
  }

  schema.description &&
    out.push(
      schema.description
        // Set headings to appropriate level
        .replaceAll(/#{1,6}(?=.+[\n\\n])/g, '#'.repeat(Math.min(opts.headingLevel + 1, 6)))
        // Fix improperly formatted heading links
        .replaceAll(/#{1,6}(?=[^\s#])/g, '#')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        // Fix for link at https://github.com/tauri-apps/tauri/blob/713f84db2b5bf17e4217053a229f9c11cbb22c74/core/tauri-config-schema/schema.json#L1863-L1864
        .replace('#SecurityConfig.devCsp', '#securityconfig')
    );

  return out;
}

/**
 * Builds: 						$ref, type, enum, const, items
 * Number validation: 			multipleOf, maximum, exclusiveMaximum, minimum, exclusiveMinimum
 * String validation: 			maxLength, minLength, pattern
 * Array validation: 			maxItems, minItems, uniqueItems
 * Object validation: 			maxProperties, minProperties
 * Semantic validation: 		format
 * Non-JSON data validation: 	contentMediaType, contentEncoding
 */
function buildType(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  let line: string = '';

  if (schema.type) {
    if (Array.isArray(schema.type)) {
      line += schema.type.map((value) => buildTypeName(value, schema, opts)).join(' | ');
    } else {
      line += buildTypeName(schema.type, schema, opts);
    }
  }

  if (schema.$ref) {
    const reference = schema.$ref.split('/').pop();

    if (!reference) {
      throw Error(`Invalid reference: ${schema.$ref}`);
    }

    line += `[\`${reference}\`](#${slug(reference)})`;
  }

  if (schema.const) {
    switch (typeof schema.const) {
      case 'string':
        line += `\`"${schema.const}"\``;
        break;
      default:
        line += `\`${schema.const}\``;
    }
  }

  if (schema.enum) {
    const enumValues: string[] = [];
    schema.enum.forEach((value) => {
      switch (typeof value) {
        case 'string':
          enumValues.push(`\`"${value}"\``);
          break;
        default:
          enumValues.push(`\`${value}\``);
      }
    });
    line += enumValues.join(' | ');
  }

  const validation = [];

  // Number validation
  schema.multipleOf && validation.push(`multiple of \`${schema.multipleOf}\``);
  schema.maximum && validation.push(`maximum of \`${schema.maximum}\``);
  schema.exclusiveMaximum && validation.push(`exclusive maximum of \`${schema.exclusiveMaximum}\``);
  schema.minimum && validation.push(`minimum of \`${schema.minimum}\``);
  schema.exclusiveMinimum && validation.push(`exclusive minimum of \`${schema.exclusiveMinimum}\``);

  // String validation
  schema.maxLength && validation.push(`maximum length of \`${schema.maxLength}\``);
  schema.minLength && validation.push(`minimum length of \`${schema.minLength}\``);
  schema.pattern && validation.push(`pattern of \`${schema.pattern}\``);

  // Array validation
  schema.maxItems && validation.push(`maximum of \`${schema.maxItems}\` items`);
  schema.minItems && validation.push(`minimum of \`${schema.minItems}\` items`);
  schema.uniqueItems && validation.push(`each item must be unique`);

  // Object validation
  schema.maxProperties && validation.push(`maximum of \`${schema.maxProperties}\` properties`);
  schema.minProperties && validation.push(`minimum of \`${schema.minProperties}\` properties`);

  // Semantic validation
  schema.format && validation.push(`formatted as \`${schema.format}\``);

  // Non-JSON data validation
  schema.contentMediaType &&
    validation.push(`content media type of \`${schema.contentMediaType}\``);
  schema.contentEncoding && validation.push(`content encoding of \`${schema.contentEncoding}\``);

  if (validation.length > 0) {
    line += ' ' + validation.join(', ');
  }

  return [line];

  function buildTypeName(
    typeName: JSONSchema7TypeName,
    parentSchema: JSONSchema7Definition,
    opts: Options
  ): string {
    // Rendering logic for enums and consts are handled separately
    if (typeof parentSchema === 'object' && (parentSchema.enum || parentSchema.const)) {
      return '';
    }

    let line = '';
    switch (typeName) {
      case 'object':
        break;
      case 'array':
        if (typeof parentSchema !== 'object' || !parentSchema.items) {
          throw Error('Invalid array');
        }
        if (Array.isArray(parentSchema.items)) {
          line += parentSchema.items
            .map((value) => {
              const definition = buildSchemaDefinition(value, opts);
              if (definition.length > 1) {
                // Format additional information to be in parenthesis
                const [first, ...rest] = definition;
                return [first, ' (', rest.join(', '), ')'];
              } else {
                return definition.join();
              }
            })
            .join(' | ');
        } else {
          line += buildSchemaDefinition(parentSchema.items, opts);
        }
        line += '[]';
        break;
      default:
        line += '`' + typeName + '`';
    }
    return line;
  }
}

/**
 * Builds: additionalItems, contains
 */
function buildExtendedItems(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  if (schema.additionalItems) {
    throw Error('Not implemented');
  }
  if (schema.contains) {
    throw Error('Not implemented');
  }

  const out: string[] = [];

  schema.additionalItems && out.push(`additionalItems: ${JSON.stringify(schema.additionalItems)}`);
  schema.contains && out.push(`contains: ${JSON.stringify(schema.contains)}`);

  return out;
}

/**
 * Builds: required, properties, patternProperties, additionalProperties, dependencies, propertyNames
 */
function buildProperties(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  const out: string[] = [];

  if (schema.properties) {
    out.push(`**Object Properties**:`);

    const properties = Object.entries(schema.properties)
      .filter(([key]) => key !== '$schema')
      .sort(([a], [b]) => a.localeCompare(b));

    out.push(
      properties
        .map(
          ([key]) =>
            `- ${key} ${schema.required && schema.required.includes(key) ? '(required)' : ''}`
        )
        .join('\n')
    );

    properties.forEach(([key, value]) => {
      out.push(`${'#'.repeat(Math.min(6, opts.headingLevel + 1))} ${key}`);
      out.push(...buildSchemaDefinition(value, { ...opts, headingLevel: opts.headingLevel + 1 }));
    });
  }

  schema.additionalProperties &&
    out.push(
      `**Allows additional properties**: ${buildSchemaDefinition(
        schema.additionalProperties,
        opts
      )}`
    );

  if (schema.patternProperties || schema.dependencies || schema.propertyNames) {
    throw Error('Not implemented');
  }

  schema.patternProperties &&
    out.push(`patternProperties: ${JSON.stringify(schema.patternProperties)}`);
  schema.dependencies && out.push(`dependencies: ${JSON.stringify(schema.dependencies)}`);
  schema.propertyNames && out.push(`propertyNames: ${JSON.stringify(schema.propertyNames)}`);

  return out;
}

/**
 * Builds: if, then, else
 */
function buildConditionalSubschemas(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  const out: string[] = [];

  if (schema.if || schema.then || schema.else) {
    throw Error('Not implemented');
  }

  schema.if && out.push(`if: ${JSON.stringify(schema.if)}`);
  schema.then && out.push(`then: ${JSON.stringify(schema.then)}`);
  schema.else && out.push(`else: ${JSON.stringify(schema.else)}`);

  return out;
}

/**
 * Builds: allOf, anyOf, oneOf, not
 */
function buildBooleanSubschemas(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  const out: string[] = [];

  if (schema.allOf) {
    out.push(...buildXOf('All', schema.allOf, opts));
  }

  if (schema.anyOf) {
    out.push(...buildXOf('Any', schema.anyOf, opts));
  }

  if (schema.oneOf) {
    out.push(...buildXOf('One', schema.oneOf, opts));
  }

  if (schema.not) {
    throw Error('Not implemented');
  }

  schema.not && out.push(`not: ${JSON.stringify(schema.not)}`);

  return out;

  function buildXOf(
    label: 'One' | 'Any' | 'All',
    schemas: JSONSchema7Definition[],
    opts: Options
  ): string[] {
    const definitions = schemas.map((value) =>
      buildSchemaDefinition(value, { ...opts, leadWithType: true })
    );

    if (definitions.every((definition) => definition.length == 1)) {
      // Short definition, can be rendered on a single line
      return [definitions.join(' | ')];
    }

    const out: string[] = [];

    if (definitions.length > 1) {
      // Render as a list
      out.push(`**${label} of the following**:`);
      const list: string[] = [];

      const additionalDefinitions: string[][] = [];

      definitions.forEach((definition) => {
        if (definition[0].startsWith('`object`')) {
          // Is an object, need to render subdefinitions
          const [first] = definition;
          list.push(`- ${first}: Subdefinition ${additionalDefinitions.length + 1}`);
          additionalDefinitions.push(definition);
        } else {
          // Render inline in list
          list.push(`- ${definition.map((value) => value.replaceAll('\n', ' ')).join(' ')}`);
        }
      });

      out.push(list.join('\n'));

      if (additionalDefinitions.length > 0) {
        out.push(`${'#'.repeat(Math.min(6, opts.headingLevel))} Subdefinitions`);
        additionalDefinitions.forEach((definition, index) => {
          // Render heading
          out.push(`${'#'.repeat(Math.min(6, opts.headingLevel + 1))} Subdefinition ${index + 1}`);

          // Render definition, giving additional heading indention as needed
          definition.forEach((line) => {
            out.push(
              line.replaceAll(/#{1,6}\s(?=.+)/g, '#'.repeat(Math.min(opts.headingLevel + 2, 6)))
            );
          });
        });
      }
    } else {
      // Render as a block
      // Mapping might need some fixing...
      out.push(...definitions.map((definition) => definition.join()));
    }
    return out;
  }
}

/**
 * Builds: default, examples
 *
 * https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
 * https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-9
 */
function buildExtendedMetadata(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  const out: string[] = [];

  if (schema.default) {
    if (typeof schema.default === 'string') {
      out.push(`**Default**: \`"${schema.default}"\``);
    } else if (typeof schema.default !== 'object') {
      // Render on single line
      out.push(`**Default**: \`${schema.default}\``);
    } else if (Object.keys(schema.default).length == 0) {
      // Empty object, render on a single line
      out.push(`**Default**: \`${JSON.stringify(schema.default)}\``);
    } else {
      // Object with properties, render in code block
      out.push(
        `\n\`\`\`json title='Default'\n${JSON.stringify(schema.default, null, '\t')}\n\`\`\`\n`
      );
    }
  }

  if (schema.examples) {
    throw Error('Examples not implemented');
  }

  return out;
}

/**
 * Builds: $defs, definitions
 *
 * https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
 * https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-9
 */
function buildDefinitions(schema: JSONSchema7Definition, opts: Options): string[] {
  if (typeof schema !== 'object') {
    return [];
  }

  const out: string[] = [];

  // Combine definitions together
  // `definitions` was renamed to `$defs` in Draft 7 but still allowed in either place
  const definitions = { ...schema.$defs, ...schema.definitions };
  if (Object.keys(definitions).length > 0) {
    out.push(`${'#'.repeat(Math.min(opts.headingLevel, 6))} Definitions`);
    Object.entries(definitions)
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([key, value]) => {
        out.push(`${'#'.repeat(Math.min(opts.headingLevel, 6) + 1)} ${key}`);
        out.push(
          ...buildSchemaDefinition(value, {
            ...opts,
            headingLevel: Math.min(opts.headingLevel, 6) + 2,
          })
        );
      });
  }
  return out;
}
