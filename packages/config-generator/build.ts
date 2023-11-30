import { JSONSchema7, JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';
import { existsSync, writeFileSync } from 'node:fs';
import { slug } from 'github-slugger';

// TODO:
// Enum not being built for BundleTarget
// Apply xOf logic to rest (check PatternKind)
// Formatting for multiple lines of xOf (description after type/value), WebviewInstallMode, TitleBarStyle, WindowEffect
// Property list links
// Add type label

const schemaFile = '../tauri/core/tauri-config-schema/schema.json';
const outputFile = '../../src/content/docs/2/reference/config.md';

if (!existsSync(schemaFile)) {
	throw Error('Could not find the Tauri config schema. Is the Tauri submodule initialized?');
}

let schema: JSONSchema7 = (await import(schemaFile)).default;

const output = ['---\ntitle: Configuration\n---'];

output.push(
	...buildSchemaDefinition(schema, {
		headingLevel: 2,
		renderTitle: false,
	})
);

writeFileSync(outputFile, output.join('\n\n'));

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

	if (!opts.leadWithType) {
		out.push(...buildMetadata(schema, opts));
	}
	out.push(...buildType(schema, opts));
	out.push(...buildExtendedItems(schema, opts));
	out.push(...buildProperties(schema, opts));
	out.push(...buildConditionalSubschemas(schema, opts));
	out.push(...buildBooleanSubschemas(schema, opts));
	if (opts.leadWithType) {
		out.push(...buildMetadata(schema, opts));
	}
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
				.replaceAll('<', '&lt;')
				.replaceAll('>', '&gt;')
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
	// TODO: Validate that the right type is populated when building items and enums
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
		line += `const: ${JSON.stringify(schema.const)}`;
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

	// TODO: Adjust formatting
	if (validation.length > 0) {
		line += ' ' + validation.join(', ');
	}

	return [line];

	function buildTypeName(
		typeName: JSONSchema7TypeName,
		parentSchema: JSONSchema7Definition,
		opts: Options
	): string {
		let line = '';

		if (typeof parentSchema === 'object' && parentSchema.enum) {
			const enumValues: string[] = [];
			parentSchema.enum.forEach((value) => {
				switch (typeof value) {
					case 'string':
						enumValues.push(`\`"${value}"\``);
						break;
					default:
						enumValues.push(`\`${value}\``);
				}
			});
			return enumValues.join(' | ');
		}
		switch (typeName) {
			case 'object':
				line += `\`${typeName}\` (see properties below)`;
				break;
			case 'array':
				if (typeof parentSchema !== 'object' || !parentSchema.items) {
					throw Error('Invalid array');
				}
				line += '[';
				if (Array.isArray(parentSchema.items)) {
					line += parentSchema.items
						.map((value) => {
							const definition = buildSchemaDefinition(value, opts);
							if (definition.length > 1) {
								// Format additional information to be in parenthesis
								const [first, ...rest] = definition;
								// TODO: Need to check for extra whitespace, see Color
								return [first, ' (', rest.join(', '), ')'];
							} else {
								return definition.join();
							}
						})
						.join(' | ');
				} else {
					line += buildSchemaDefinition(parentSchema.items, opts);
				}
				line += ']';
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
		out.push(`${'#'.repeat(Math.min(6, opts.headingLevel))} Properties`);

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

	schema.patternProperties &&
		out.push(`patternProperties: ${JSON.stringify(schema.patternProperties)}`);
	schema.additionalProperties &&
		out.push(
			`**Allows additional properties**: ${buildSchemaDefinition(
				schema.additionalProperties,
				opts
			)}`
		);
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

	schema.if && out.push(`if: ${JSON.stringify(schema.if)}`);
	schema.then && out.push(`then: ${JSON.stringify(schema.then)}`);
	schema.else && out.push(`else: ${JSON.stringify(schema.else)}`);

	return out;
}

/**
 * Builds: allOf, anyOf, oneOf, not
 */
function buildBooleanSubschemas(schema: JSONSchema7Definition, opts: Options): string[] {
	// TODO: Formatting
	if (typeof schema !== 'object') {
		return [];
	}

	const out: string[] = [];

	if (schema.allOf) {
		const xOf = buildXOf(schema.allOf, { ...opts, leadWithType: true });
		if (xOf.length > 1) {
			out.push('**All of the following**:');
			out.push(xOf.map((value) => `- ${value.join(' ')}`).join('\n'));
		} else {
			out.push(...xOf.flat());
		}
	}

	if (schema.anyOf) {
		const xOf = buildXOf(schema.anyOf, { ...opts, leadWithType: true });

		if (xOf.length > 1) {
			out.push('**Any of the following**:');
			const list: string[] = [];
			const subDefinitions: string[][] = [];
			xOf.forEach((value) => {
				if (value[0].startsWith('`object`')) {
					const [first, ...rest] = value;
					list.push(`- ${first}: Subdefinition ${subDefinitions.length + 1}`);
					subDefinitions.push(rest);
				} else {
					list.push(`- ${value.join(' ')}`);
				}
			});
			out.push(list.join('\n'));
			subDefinitions.forEach((definition, index) => {
				out.push(`${'#'.repeat(Math.min(6, opts.headingLevel))} Subdefinition ${index + 1}`);
				definition.forEach((line) => {
					out.push(
						// Indents headings one more level
						line.replaceAll(/#{1,6}(?=.+)/g, '#'.repeat(Math.min(opts.headingLevel + 1, 6)))
					);
				});
			});
		} else {
			out.push(...xOf.flat());
		}
	}

	if (schema.oneOf) {
		const xOf = buildXOf(schema.oneOf, { ...opts, leadWithType: true });
		if (xOf.length > 1) {
			out.push('**One of the following**:');
			out.push(xOf.map((value) => `- ${value.join(' ')}`).join('\n'));
		} else {
			out.push(...xOf.flat());
		}
	}

	schema.not && out.push(`not: ${JSON.stringify(schema.not)}`);

	return out;

	function buildXOf(schemas: JSONSchema7Definition[], opts: Options): string[][] {
		const out: string[][] = [];
		out.push(...schemas.map((value) => buildSchemaDefinition(value, opts)));

		if (out.every((value) => value.length == 1)) {
			// Short definition, can be rendered on a single line
			return [[out.join(' | ')]];
		} else {
			return out;
		}
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
