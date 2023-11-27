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
out.push(`**title**: ${schema.title}`);
// FIXME: Doing this as a way to temporarily escape MD formatting
out.push(`**description**: ${JSON.stringify(schema.description)}`);
out.push(`**default**: ${schema.default}`);
out.push(`**readOnly**: ${schema.readOnly}`);
out.push(`**writeOnly**: ${schema.writeOnly}`);
out.push(`**examples**: ${schema.examples}`);

// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01
out.push('## Metadata');
out.push(`**$id**: ${schema.$id}`);
out.push(`**$ref**: ${schema.$ref}`);
out.push(`**$schema**: ${schema.$schema}`);
out.push(`**$comment**: ${schema.$comment}`);

// Schema Re-Use With "$defs"
// https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-9
out.push('## Definitions');
out.push(`**$defs**: ${schema.$defs}`);

out.push('## Validation');

// Validation Keywords for Any Instance Type
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1
out.push('### Any Instance');
out.push(`**type**: ${schema.type}`);
out.push(`**enum**: ${schema.enum}`);
out.push(`**const**: ${schema.const}`);

// Validation Keywords for Numeric Instances (number and integer)
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.2
out.push('### Numeric');
out.push(`**multipleOf**: ${schema.multipleOf}`);
out.push(`**maximum**: ${schema.maximum}`);
out.push(`**exclusiveMaximum**: ${schema.exclusiveMaximum}`);
out.push(`**minimum**: ${schema.minimum}`);
out.push(`**exclusiveMinimum**: ${schema.exclusiveMinimum}`);

// Validation Keywords for Strings
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.3
out.push('### String');
out.push(`**maxLength**: ${schema.maxLength}`);
out.push(`**minLength**: ${schema.minLength}`);
out.push(`**pattern**: ${schema.pattern}`);

// Validation Keywords for Arrays
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.4
out.push('### Arrays');
out.push(`**items**: ${schema.items}`);
out.push(`**additionalItems**: ${schema.additionalItems}`);
out.push(`**maxItems**: ${schema.maxItems}`);
out.push(`**minItems**: ${schema.minItems}`);
out.push(`**uniqueItems**: ${schema.uniqueItems}`);
out.push(`**contains**: ${schema.contains}`);

// Validation Keywords for Objects
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.5
out.push('### Objects');
out.push(`**maxProperties**: ${schema.maxProperties}`);
out.push(`**minProperties**: ${schema.minProperties}`);
out.push(`**required**: ${schema.required}`);
out.push(`**properties**: ${schema.properties}`);
out.push(`**patternProperties**: ${schema.patternProperties}`);
out.push(`**additionalProperties**: ${schema.additionalProperties}`);
out.push(`**dependencies**: ${schema.dependencies}`);
out.push(`**propertyNames**: ${schema.propertyNames}`);

// Keywords for Applying Subschemas Conditionally
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.6
out.push('## Conditional Subschemas');
out.push(`**if**: ${schema.if}`);
out.push(`**then**: ${schema.then}`);
out.push(`**else**: ${schema.else}`);

// Keywords for Applying Subschemas With Boolean Logic
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.7
out.push('## Conditional Subschemas');
out.push(`**allOf**: ${schema.allOf}`);
out.push(`**anyOf**: ${schema.anyOf}`);
out.push(`**oneOf**: ${schema.oneOf}`);
out.push(`**not**: ${schema.not}`);

// Semantic Validation With "format"
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-7
out.push('## Format');
out.push(`**format**: ${schema.format}`);

// String-Encoding Non-JSON Data
// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-8
out.push('## Non-JSON Data');
out.push(`**contentMediaType**: ${schema.contentMediaType}`);
out.push(`**contentEncoding**: ${schema.contentEncoding}`);

writeFileSync(outputFile, out.join('\n\n'));
