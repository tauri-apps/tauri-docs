import { JSONSchema7, JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';
import { existsSync, writeFileSync } from 'node:fs';
import { slug } from 'github-slugger';

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
}

function buildSchemaDefinition(
	schema: JSONSchema7Definition,
	passedOptions: Partial<Options> = {}
): string[] {
	// Assign default values for missing options
	const opts = Object.assign(
		{
			headingLevel: 1,
			renderTitle: true,
		},
		passedOptions
	);

	if (typeof schema === 'boolean') {
		return [`\`${schema}\``];
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

	schema.description && out.push(buildDescription(schema.description, opts));

	/**
	 * Summary of type information
	 */
	const typeInfo: string[] = [];

	if (schema.$ref) {
		const ref = schema.$ref.split('/').pop();
		if (!ref) {
			throw Error(`Invalid ref: ${schema.$ref}`);
		}
		typeInfo.push(`[\`${ref}\`](#${slug(ref)})`);
	}

	if (schema.type) {
		if (Array.isArray(schema.type)) {
			typeInfo.push(schema.type.map((value) => buildType(value, schema, opts)).join(' | '));
		} else {
			const info = buildType(schema.type, schema, opts);
			info && typeInfo.push(info);
		}
	}

	if (schema.enum) {
		typeInfo.push(schema.enum.map((value) => `\`"${value}"\``).join(' | '));
	}

	// Need a way to indicate if this should be built out into a more complicated type
	if (schema.allOf) {
		const { output, multipleDefinitions, needSubDefinition } = buildXOf(schema.allOf, opts);
		if (multipleDefinitions) {
			typeInfo.push('**All of the following types**:');
			typeInfo.push(output.map((value) => `- ${value.join(', ')}`).join('\n'));
		} else {
			typeInfo.push(...output.flat());
		}
	}

	if (schema.anyOf) {
		const { output, multipleDefinitions, needSubDefinition } = buildXOf(schema.anyOf, opts);
		if (multipleDefinitions) {
			typeInfo.push('**Any of the following types**:');
			typeInfo.push(output.map((value) => `- ${value.join(', ')}`).join('\n'));
		} else {
			typeInfo.push(...output.flat());
		}
	}

	if (schema.oneOf) {
		const { output, multipleDefinitions, needSubDefinition } = buildXOf(schema.oneOf, opts);
		if (multipleDefinitions) {
			typeInfo.push('**One of the following types**:');
			typeInfo.push(output.map((value) => `- ${value.join(', ')}`).join('\n'));
		} else {
			typeInfo.push(...output.flat());
		}
	}

	/**
	 * Constraints
	 */

	const constraints = [];
	// String
	schema.maxLength && constraints.push(`maximum length of \`${schema.maxLength}\``);
	schema.minLength && constraints.push(`minimum length of \`${schema.minLength}\``);
	schema.pattern && constraints.push(`pattern of \`${schema.pattern}\``);
	schema.format && constraints.push(`formatted as \`${schema.format}\``);
	schema.contentMediaType &&
		constraints.push(`content media type of \`${schema.contentMediaType}\``);
	schema.contentEncoding && constraints.push(`content encoding of \`${schema.contentEncoding}\``);
	// Number
	schema.multipleOf && constraints.push(`multiple of \`${schema.multipleOf}\``);
	schema.maximum && constraints.push(`maximum of \`${schema.maximum}\``);
	schema.exclusiveMaximum &&
		constraints.push(`exclusive maximum of \`${schema.exclusiveMaximum}\``);
	schema.minimum && constraints.push(`minimum of \`${schema.minimum}\``);
	schema.exclusiveMinimum &&
		constraints.push(`exclusive minimum of \`${schema.exclusiveMinimum}\``);
	// Object
	schema.maxProperties && constraints.push(`maximum of \`${schema.maxProperties}\` properties`);
	schema.minProperties && constraints.push(`minimum of \`${schema.minProperties}\` properties`);
	// Array
	schema.maxItems && constraints.push(`maximum of \`${schema.maxItems}\` items`);
	schema.minItems && constraints.push(`minimum of \`${schema.minItems}\` items`);
	schema.uniqueItems && constraints.push(`each item must be unique`);

	if (constraints.length > 0) {
		typeInfo.push(constraints.join(', '));
	}

	if (typeInfo.length > 0) {
		out.push(typeInfo.join(', '));
	}

	// MARK: Render Sub-Definitions
	// if (buildSubDefinitions) {
	// 	out.push(`${'#'.repeat(Math.min(6, opts.headingLevel))} Sub-Definitions`);
	// 	out.push('NEED TO BUILD SUBDEFINITION');
	// }

	if (schema.default) {
		if (typeof schema.default !== 'object') {
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

	if (schema.properties) {
		out.push(`${'#'.repeat(Math.min(6, opts.headingLevel))} Properties`);
		// Build list
		const properties = Object.entries(schema.properties)
			.filter(([key]) => key !== '$schema')
			.sort(([a], [b]) => a.localeCompare(b));
		out.push(
			properties
				.map(([key]) => `- \`${key}\`${schema.required?.includes(key) ? ' (required)' : ''}`)
				.join('\n')
		);
		// Build details
		properties.forEach(([key, value]) => {
			out.push(`${'#'.repeat(opts.headingLevel + 1)} ${key}`);
			out.push(...buildSchemaDefinition(value, { ...opts, headingLevel: opts.headingLevel + 1 }));
		});
	}

	if (schema.additionalProperties) {
		out.push(
			`Allows additional properties of type ${buildSchemaDefinition(
				schema.additionalProperties,
				opts
			)}`
		);
	}

	// Schema Re-Use With "$defs"
	// https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-8.2.4
	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01#section-9
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

function buildType(
	typeName: JSONSchema7TypeName,
	parentSchema: JSONSchema7Definition,
	opts: Options
): string | undefined {
	// Rendered separately
	if (typeof parentSchema === 'object' && parentSchema.enum) {
		return;
	}
	if (typeName === 'null') {
		return 'null';
	}
	let typeLine = '';
	if (typeName === 'array') {
		typeLine += '[';
	}

	// Build array items
	if (typeof parentSchema === 'object' && parentSchema.items) {
		let items = [];

		if (Array.isArray(parentSchema.items)) {
			items = [...parentSchema.items];
		} else {
			items = [parentSchema.items];
		}

		// TODO: Formatting style (AppUrl)
		typeLine += items.map((item) => buildSchemaDefinition(item).join(', ')).join(' , ');
	}

	if (typeName === 'array') {
		typeLine += ']';
	}

	if (typeName !== 'array') {
		typeLine += '`' + typeName + '`';
	}
	// TODO: Render const
	return typeLine;
}

function buildXOf(
	schema: JSONSchema7Definition[],
	opts: Options
): { output: string[][]; multipleDefinitions: boolean; needSubDefinition: boolean } {
	let needSubDefinition = false;
	const xOf = schema.map((value) => {
		if (typeof value === 'object' && value.properties) {
			needSubDefinition = true;
			console.warn('Need to render sub-definitions');
		}

		const definition = buildSchemaDefinition(value, {
			...opts,
			headingLevel: Math.min(6, opts.headingLevel + 1),
		});

		return definition;
	});

	const withoutNull = xOf.filter((value) => value.join() !== 'null');

	const output =
		withoutNull.length !== xOf.length ? [[`${withoutNull.join()} (optional)`]] : withoutNull;

	return {
		output,
		multipleDefinitions: output.length > 1 ? true : false,
		needSubDefinition,
	};
}

function buildDescription(description: string, opts: Options): string {
	// Sets headings to appropriate level
	return `${description.replaceAll(
		/#{1,6}(?=.+[\n\\n])/g,
		'#'.repeat(Math.min(opts.headingLevel + 1, 6))
	)}`;
}

function buildSubDefinitions(schema: JSONSchema7Definition, opts: Options): string[] {
	const out: string[] = ['Sub-Definitions'];

	return out;
}
