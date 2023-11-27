import { JSONSchema7, JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';
import { existsSync, writeFileSync } from 'node:fs';

const schemaFile = '../tauri/core/tauri-config-schema/schema.json';
const outputFile = '../../src/content/docs/2/reference/config.md';

if (!existsSync(schemaFile)) {
	throw Error('Could not find the Tauri config schema. Is the Tauri submodule initialized?');
}

let schema: JSONSchema7 = await import(schemaFile);

const out = ['---', 'title: Configuration', '---'];

out.push(...buildSchemaDefinition(schema, { headingLevel: 2, renderDefault: false }));

writeFileSync(outputFile, out.join('\n\n'));

interface Options {
	headingLevel: number;
	renderTitle: boolean;
	renderDefault: boolean;
}

function buildSchemaDefinition(
	schema: JSONSchema7Definition,
	passedOptions: Partial<Options> = {}
): string[] {
	// Assign options with default values
	const opts = Object.assign(
		{
			headingLevel: 1,
			renderTitle: true,
			renderDefault: true,
		},
		passedOptions
	);

	if (typeof schema === 'boolean') {
		return [`\`${schema}\``];
	}

	const out = [];

	// MARK: Formatted

	// Schema Annotations
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
	schema.title && opts.renderTitle && out.push(`${'#'.repeat(opts.headingLevel)} ${schema.title}`);
	// FIXME: Doing this as a way to temporarily escape MD formatting
	schema.description && out.push(`${schema.description.substring(0, 100)}`);

	// Validation Keywords for Any Instance Type
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1
	if (schema.type) {
		let line = '**Type**: ';
		if (typeof schema.type === 'string') {
			line += '`' + schema.type + '`';
		} else {
			line += schema.type.map((value) => `\`${value}\``).join(' | ');
		}
		out.push(line);
	}

	// Validation Keywords for Objects
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.5
	if (schema.properties) {
		out.push(`${'#'.repeat(opts.headingLevel + 1)} Properties`);
		Object.entries(schema.properties)
			.filter(([key]) => key !== '$schema')
			.sort(([a], [b]) => a.localeCompare(b))
			.forEach(([key, value]) => {
				out.push(`${'#'.repeat(opts.headingLevel + 2)} ${key}`);
				out.push(...buildSchemaDefinition(value, { headingLevel: opts.headingLevel + 2 }));
			});
	}

	// MARK: TODO
	out.push(`${'#'.repeat(opts.headingLevel + 1)} TODO`);

	// Schema Annotations
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
	if (schema.default && opts.renderDefault) {
		out.push(`**default**: ${JSON.stringify(schema.default)}`);
	}

	schema.readOnly && out.push(`**readOnly**: ${schema.readOnly}`);
	schema.writeOnly && out.push(`**writeOnly**: ${schema.writeOnly}`);
	schema.examples && out.push(`**examples**: ${schema.examples}`);

	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01
	schema.$id && out.push(`**$id**: ${schema.$id}`);
	schema.$ref && out.push(`**$ref**: ${schema.$ref}`);
	// `schema.$schema` is purposefully ignored
	schema.$comment && out.push(`**$comment**: ${schema.$comment}`);

	// Validation Keywords for Any Instance Type
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1
	schema.enum && out.push(`**enum**: ${schema.enum}`);
	schema.const && out.push(`**const**: ${schema.const}`);

	// Validation Keywords for Numeric Instances (number and integer)
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.2
	schema.multipleOf && out.push(`**multipleOf**: ${schema.multipleOf}`);
	schema.maximum && out.push(`**maximum**: ${schema.maximum}`);
	schema.exclusiveMaximum && out.push(`**exclusiveMaximum**: ${schema.exclusiveMaximum}`);
	schema.minimum && out.push(`**minimum**: ${schema.minimum}`);
	schema.exclusiveMinimum && out.push(`**exclusiveMinimum**: ${schema.exclusiveMinimum}`);

	// Validation Keywords for Strings
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.3
	schema.maxLength && out.push(`**maxLength**: ${schema.maxLength}`);
	schema.minLength && out.push(`**minLength**: ${schema.minLength}`);
	schema.pattern && out.push(`**pattern**: ${schema.pattern}`);

	// Validation Keywords for Arrays
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.4
	schema.items && out.push(`**items**: ${schema.items}`);
	schema.additionalItems && out.push(`**additionalItems**: ${schema.additionalItems}`);
	schema.maxItems && out.push(`**maxItems**: ${schema.maxItems}`);
	schema.minItems && out.push(`**minItems**: ${schema.minItems}`);
	schema.uniqueItems && out.push(`**uniqueItems**: ${schema.uniqueItems}`);
	schema.contains && out.push(`**contains**: ${schema.contains}`);

	// Validation Keywords for Objects
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.5
	schema.maxProperties && out.push(`**maxProperties**: ${schema.maxProperties}`);
	schema.minProperties && out.push(`**minProperties**: ${schema.minProperties}`);
	schema.required && out.push(`**required**: ${schema.required}`);
	schema.patternProperties && out.push(`**patternProperties**: ${schema.patternProperties}`);
	schema.additionalProperties &&
		out.push(`**additionalProperties**: ${schema.additionalProperties}`);
	schema.dependencies && out.push(`**dependencies**: ${schema.dependencies}`);
	schema.propertyNames && out.push(`**propertyNames**: ${schema.propertyNames}`);

	// Keywords for Applying Subschemas Conditionally
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.6
	schema.if && out.push(`**if**: ${schema.if}`);
	schema.then && out.push(`**then**: ${schema.then}`);
	schema.else && out.push(`**else**: ${schema.else}`);

	// Keywords for Applying Subschemas With Boolean Logic
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.7
	schema.allOf && out.push(`**allOf**: ${schema.allOf}`);
	schema.anyOf && out.push(`**anyOf**: ${schema.anyOf}`);
	schema.oneOf && out.push(`**oneOf**: ${schema.oneOf}`);
	schema.not && out.push(`**not**: ${schema.not}`);

	// Semantic Validation With "format"
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-7
	schema.format && out.push(`**format**: ${schema.format}`);

	// String-Encoding Non-JSON Data
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-8
	schema.contentMediaType && out.push(`**contentMediaType**: ${schema.contentMediaType}`);
	schema.contentEncoding && out.push(`**contentEncoding**: ${schema.contentEncoding}`);

	// Schema Re-Use With "$defs"
	// https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-9
	schema.$defs && out.push(`**$defs**: ${schema.$defs}`);
	schema.definitions && out.push(`**definitions**: ${schema.definitions}`);

	return out;
}
