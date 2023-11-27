import { JSONSchema7 } from 'json-schema';
import { existsSync, writeFileSync } from 'node:fs';

const schemaFile = '../tauri/core/tauri-config-schema/schema.json';
const outputFile = '../../src/content/docs/2/reference/config.md';

if (!existsSync(schemaFile)) {
	throw Error('Could not find the Tauri config schema. Is the Tauri submodule initialized?');
}

let schema: JSONSchema7 = await import(schemaFile);

const out = ['---', 'title: Configuration', '---'];

// Schema Annotations
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
out.push('## Schema Annotations');
// TODO: WHere should the title logic be handled?
schema.title && out.push(`**title**: ${schema.title}`);
// FIXME: Doing this as a way to temporarily escape MD formatting
schema.description &&
	out.push(`**description**: ${JSON.stringify(schema.description).substring(0, 100)}`);
schema.default && out.push(`**default**: ${schema.default}`);
schema.readOnly && out.push(`**readOnly**: ${schema.readOnly}`);
schema.writeOnly && out.push(`**writeOnly**: ${schema.writeOnly}`);
schema.examples && out.push(`**examples**: ${schema.examples}`);

// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01
out.push('## Metadata');
schema.$id && out.push(`**$id**: ${schema.$id}`);
schema.$ref && out.push(`**$ref**: ${schema.$ref}`);
schema.$schema && out.push(`**$schema**: ${schema.$schema}`);
schema.$comment && out.push(`**$comment**: ${schema.$comment}`);

// Schema Re-Use With "$defs"
// https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-9
out.push('## Definitions');
schema.$defs && out.push(`**$defs**: ${schema.$defs}`);
schema.definitions && out.push(`**definitions**: ${schema.definitions}`);

out.push('## Validation');

// Validation Keywords for Any Instance Type
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1
out.push('### Any Instance');
schema.type && out.push(`**type**: ${schema.type}`);
schema.enum && out.push(`**enum**: ${schema.enum}`);
schema.const && out.push(`**const**: ${schema.const}`);

// Validation Keywords for Numeric Instances (number and integer)
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.2
out.push('### Numeric');
schema.multipleOf && out.push(`**multipleOf**: ${schema.multipleOf}`);
schema.maximum && out.push(`**maximum**: ${schema.maximum}`);
schema.exclusiveMaximum && out.push(`**exclusiveMaximum**: ${schema.exclusiveMaximum}`);
schema.minimum && out.push(`**minimum**: ${schema.minimum}`);
schema.exclusiveMinimum && out.push(`**exclusiveMinimum**: ${schema.exclusiveMinimum}`);

// Validation Keywords for Strings
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.3
out.push('### String');
schema.maxLength && out.push(`**maxLength**: ${schema.maxLength}`);
schema.minLength && out.push(`**minLength**: ${schema.minLength}`);
schema.pattern && out.push(`**pattern**: ${schema.pattern}`);

// Validation Keywords for Arrays
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.4
out.push('### Arrays');
schema.items && out.push(`**items**: ${schema.items}`);
schema.additionalItems && out.push(`**additionalItems**: ${schema.additionalItems}`);
schema.maxItems && out.push(`**maxItems**: ${schema.maxItems}`);
schema.minItems && out.push(`**minItems**: ${schema.minItems}`);
schema.uniqueItems && out.push(`**uniqueItems**: ${schema.uniqueItems}`);
schema.contains && out.push(`**contains**: ${schema.contains}`);

// Validation Keywords for Objects
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.5
out.push('### Objects');
schema.maxProperties && out.push(`**maxProperties**: ${schema.maxProperties}`);
schema.minProperties && out.push(`**minProperties**: ${schema.minProperties}`);
schema.required && out.push(`**required**: ${schema.required}`);
schema.properties && out.push(`**properties**: ${schema.properties}`);
schema.patternProperties && out.push(`**patternProperties**: ${schema.patternProperties}`);
schema.additionalProperties && out.push(`**additionalProperties**: ${schema.additionalProperties}`);
schema.dependencies && out.push(`**dependencies**: ${schema.dependencies}`);
schema.propertyNames && out.push(`**propertyNames**: ${schema.propertyNames}`);

// Keywords for Applying Subschemas Conditionally
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.6
out.push('## Conditional Subschemas');
schema.if && out.push(`**if**: ${schema.if}`);
schema.then && out.push(`**then**: ${schema.then}`);
schema.else && out.push(`**else**: ${schema.else}`);

// Keywords for Applying Subschemas With Boolean Logic
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.7
out.push('## Boolean Logic');
schema.allOf && out.push(`**allOf**: ${schema.allOf}`);
schema.anyOf && out.push(`**anyOf**: ${schema.anyOf}`);
schema.oneOf && out.push(`**oneOf**: ${schema.oneOf}`);
schema.not && out.push(`**not**: ${schema.not}`);

// Semantic Validation With "format"
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-7
out.push('## Format');
schema.format && out.push(`**format**: ${schema.format}`);

// String-Encoding Non-JSON Data
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-8
out.push('## Non-JSON Data');
schema.contentMediaType && out.push(`**contentMediaType**: ${schema.contentMediaType}`);
schema.contentEncoding && out.push(`**contentEncoding**: ${schema.contentEncoding}`);

writeFileSync(outputFile, out.join('\n\n'));
