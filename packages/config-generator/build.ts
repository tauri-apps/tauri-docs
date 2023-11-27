import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import { existsSync, writeFileSync } from 'node:fs';

// TODO: Check AssetProtocolConfig > properties > scope, is it an array?
// TODO: Add constraints directly after type

const schemaFile = '../tauri/core/tauri-config-schema/schema.json';
const outputFile = '../../src/content/docs/2/reference/config.md';

if (!existsSync(schemaFile)) {
	throw Error('Could not find the Tauri config schema. Is the Tauri submodule initialized?');
}

let schema: JSONSchema7 = await import(schemaFile);

const out = ['---', 'title: Configuration', '---'];

out.push(
	...buildSchemaDefinition(schema, {
		headingLevel: 1,
		renderDefault: false,
		renderTitle: false,
		renderLineBreak: true,
	})
);

writeFileSync(outputFile, out.join('\n\n'));

interface Options {
	headingLevel: number;
	renderTitle: boolean;
	renderDefault: boolean;
	renderLineBreak: boolean;
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
			renderLineBreak: false,
		},
		passedOptions
	);

	if (typeof schema === 'boolean') {
		return [`\`${schema}\``];
	}

	const unhandledKeys = ['$id'];
	unhandledKeys.forEach((key) => {
		// Check for unhandled keys
		if (Object.keys(schema).includes(key)) {
			throw Error(`Unhandled key: ${key}`);
		}
	});

	const out = [];
	const constraints = [];

	// Schema Annotations
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
	schema.title && opts.renderTitle && out.push(`${'#'.repeat(opts.headingLevel)} ${schema.title}`);
	// FIXME: Doing this as a way to temporarily escape MD formatting
	schema.description && out.push(`${schema.description}`);

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

	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01
	// TODO: Slug & Link
	schema.$id && out.push(`**$id**: ${schema.$id}`);
	if (schema.$ref) {
		const last = schema.$ref.split('/').pop();
		if (!last) {
			throw Error(`Unknown ref: ${schema.$ref}`);
		}
		out.push(`\`${last}\``);
	}

	// Keywords for Applying Subschemas With Boolean Logic
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.7
	if (schema.allOf) {
		if (schema.allOf.length != 1) {
			throw Error('Unhandled all of');
		}
		out.push(
			`**Type**: ${buildSchemaDefinition(schema.allOf[0], {
				headingLevel: opts.headingLevel + 1,
			}).join('\n\n')}`
		);
	}
	// TODO: Determine if there are multiple
	// If so, list them out in a list or table
	// Look at `BeforeDevCommand` and `AppUrl` for examples
	if (schema.anyOf) {
		out.push(
			`**AnyOf**: ${schema.anyOf.map((value) =>
				buildSchemaDefinition(value, {
					headingLevel: opts.headingLevel + 1,
				}).join('\n\n')
			)}`
		);
	}
	// TODO: If multiple then render in a list or table.
	// `WindowEffect` as an example
	if (schema.oneOf) {
		out.push(
			`**OneOf**: ${schema.oneOf.map((value) =>
				buildSchemaDefinition(value, {
					headingLevel: opts.headingLevel + 1,
				}).join('\n\n')
			)}`
		);
	}

	// TODO:
	schema.not && out.push(`**not**: ${schema.not}`);

	// Schema Annotations
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
	schema.readOnly && constraints.push(`is read only`);
	schema.writeOnly && constraints.push(`is write only`);

	// Validation Keywords for Numeric Instances (number and integer)
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.2
	schema.multipleOf && constraints.push(`multiple of \`${schema.multipleOf}\``);
	schema.maximum && constraints.push(`maximum of \`${schema.maximum}\``);
	schema.exclusiveMaximum &&
		constraints.push(`exclusive maximum of \`${schema.exclusiveMaximum}\``);
	schema.minimum && constraints.push(`minimum of \`${schema.minimum}\``);
	schema.exclusiveMinimum &&
		constraints.push(`exclusive minimum of \`${schema.exclusiveMinimum}\``);

	// Validation Keywords for Strings
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.3
	schema.maxLength && constraints.push(`maximum length of \`${schema.maxLength}\``);
	schema.minLength && constraints.push(`minimum length of \`${schema.minLength}\``);
	schema.pattern && constraints.push(`pattern of \`${schema.pattern}\``);

	// Validation Keywords for Arrays
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.4
	schema.maxItems && constraints.push(`maximum items of \`${schema.maxItems}\``);
	schema.minItems && constraints.push(`minimum items of \`${schema.minItems}\``);
	schema.uniqueItems && constraints.push(`items must be unique: \`${schema.uniqueItems}\``);

	// Validation Keywords for Objects
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.5
	schema.maxProperties && constraints.push(`maximum properties: \`${schema.maxProperties}\``);
	schema.minProperties && constraints.push(`minimum properties: \`${schema.minProperties}\``);

	// Semantic Validation With "format"
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-7
	schema.format && constraints.push(`formatted as \`${schema.format}\``);

	// String-Encoding Non-JSON Data
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-8
	schema.contentMediaType && constraints.push(`content media type: \`${schema.contentMediaType}\``);
	schema.contentEncoding && constraints.push(`content encoding: \`${schema.contentEncoding}\``);

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

	// Schema Annotations
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
	schema.examples && out.push(`**examples**: ${schema.examples}`);

	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01
	schema.$id && out.push(`**$id**: ${schema.$id}`);
	// `schema.$schema` is purposefully ignored
	schema.$comment && out.push(`**$comment**: ${schema.$comment}`);

	// Validation Keywords for Any Instance Type
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.1
	schema.enum && out.push(`**enum**: ${schema.enum}`);
	schema.const && out.push(`**const**: ${schema.const}`);

	// Validation Keywords for Arrays
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.4
	schema.items && out.push(`**items**: ${JSON.stringify(schema.items)}`);
	schema.additionalItems && out.push(`**additionalItems**: ${schema.additionalItems}`);
	schema.contains && out.push(`**contains**: ${schema.contains}`);

	// Validation Keywords for Objects
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-6.5
	// TODO:
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

	if (constraints.length != 0) {
		out.push(`**Constraints**: ${constraints.join(', ')}`);
	}

	// Schema Annotations
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-10
	if (schema.default && opts.renderDefault) {
		if (typeof schema.default !== 'object') {
			// Simple default
			out.push(`**Default Value**: \`${schema.default}\``);
		} else if (Object.keys(schema.default).length == 0) {
			// Empty object
			out.push(`**Default Value**: \`${JSON.stringify(schema.default)}\``);
		} else {
			// Object with properties
			out.push(
				`\`\`\`json title="Default Value"\n${JSON.stringify(schema.default, null, '\t')}\n\`\`\`\n`
			);
		}
	}

	// Schema Re-Use With "$defs"
	// https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-9
	const definitions = { ...schema.$defs, ...schema.definitions };
	if (Object.keys(definitions).length > 0) {
		out.push(`${'#'.repeat(opts.headingLevel + 1)} Definitions`);
		Object.entries(definitions)
			.sort(([a], [b]) => a.localeCompare(b))
			.forEach(([key, value]) => {
				out.push(`${'#'.repeat(opts.headingLevel + 2)} ${key}`);
				out.push(
					...buildSchemaDefinition(value, {
						headingLevel: opts.headingLevel + 2,
						renderLineBreak: true,
					})
				);
			});
	}

	opts.renderLineBreak && out.push('---');

	return out;
}
