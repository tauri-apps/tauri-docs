import { JSONSchema7, JSONSchema7Definition } from 'json-schema';
import { existsSync, writeFileSync } from 'node:fs';

/**
 * TODO
 * - Move simple defaults to be after type
 * - Links for $ref
 * - Nested properties (BeforeDevCommand, PatternKind)
 * - renderSimpleTypes for `null` values (BuildConfig > [beforeDevCommand, beforeBundle, beforeBuildCommand], BundleConfig > [externalBin, fileAssociations, resources], DebConfig > depends, NsisConfig > languages)
 * - Array type rendering for BuildConfig > features
 * - list rendering in descriptions (main config)
 * - Optional: Swap type and description for "simple" layouts such as anyOf (BundleTarget)
 * - OneOf rendering (BundleType, NSISInstallerMode, PatternKind, Theme, TitleBarStyle, WebviewInstallMode, WindowEffect, WindowEffectState, WindowsUpdateInstallMode)
 * - Enum rendering (WebviewInstallMode, WindowEffect, WindowEffectState, WindowsUpdateInstallMode)
 * - additionalProperties (DebConfig > files)
 * - AnyOf for nulls (SecurityConfig > [csp, devCsp], TauriConfig > trayIcon, WindowEffectsConfig > [color, state], WindowsConfig > [nsis, wix])
 * - Maximum height of codeblocks
 */

const schemaFile = '../tauri/core/tauri-config-schema/schema.json';
const outputFile = '../../src/content/docs/2/reference/config.md';

if (!existsSync(schemaFile)) {
	throw Error('Could not find the Tauri config schema. Is the Tauri submodule initialized?');
}

let schema: JSONSchema7 = await import(schemaFile);

const output = ['---', 'title: Configuration', '---'];

output.push(
	...buildSchemaDefinition(schema, {
		headingLevel: 2,
		renderDefault: false,
		renderTitle: false,
		renderLineBreak: true,
	})
);

writeFileSync(outputFile, output.join('\n\n'));

interface Options {
	headingLevel: number;
	renderTitle: boolean;
	renderDefault: boolean;
	renderLineBreak: boolean;
	renderSimpleTypes: boolean;
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
			renderSimpleTypes: false,
		},
		passedOptions
	);

	if (typeof schema === 'boolean') {
		return [`\`${schema}\``];
	}

	// TODO:
	const keys = [
		// Meta data
		'examples',

		// Applicators
		// any
		'not',
		'if',
		'then',
		'else',
	];

	const out = [];

	/**
	 * Metadata
	 * Renders: title, readOnly, writeOnly, description, default, examples
	 */
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
			// Sets headings to appropriate level
			`${schema.description.replaceAll(
				/#{1,6}(?=.+[\n\\n])/g,
				'#'.repeat(Math.min(opts.headingLevel, 6))
			)}`
		);

	/**
	 * Type validation & annotations
	 * Renders: type, enum, const
	 */
	let types = '';

	if (schema.type) {
		// TODO: If object then link to properties heading?
		if (!opts.renderSimpleTypes) {
			types += '**Type**: ';
		}

		if (Array.isArray(schema.type)) {
			types += schema.type.map((value) => '`' + value + '`').join(' | ');
		} else {
			// TODO: If array then special handling
			types += '`' + schema.type + '`';
		}
	}

	if (schema.enum) {
		if (!schema.enum.every((value) => typeof value === 'string')) {
			throw Error(`Complex enum not handled: ${JSON.stringify(schema.enum)}`);
		}

		// TODO: Formatting
		types += `Enum: ${schema.enum.map((value) => '`' + value + '`').join(' | ')}`;
	}

	if (schema.const) {
		throw Error('Not implemented');
	}

	/**
	 * String constraints: maxLength, minLength, pattern, format, contentMediaType, contentEncoding
	 * Numeric constraints: multipleOf, maximum, exclusiveMaximum, minimum, exclusiveMinimum
	 * Object constraints: maxProperties, minProperties
	 * Array constraints: maxItems, minItems, uniqueItems
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
	if (schema.items) {
		const itemsDefinitions = [];
		if (Array.isArray(schema.items)) {
			schema.items.map((item) => {
				const definition = buildSchemaDefinition(item, { ...opts, renderSimpleTypes: true });
				if (definition.length == 1) {
					itemsDefinitions.push(definition);
				} else {
					throw Error(`Non-simple item: ${item}`);
				}
			});
		} else {
			const definition = buildSchemaDefinition(schema.items, { ...opts, renderSimpleTypes: true });
			if (definition.length == 1) {
				itemsDefinitions.push(definition);
			} else {
				throw Error(`Non-simple item: ${schema.items}`);
			}
		}
		types += `<${itemsDefinitions.map((value) => value).join(' | ')}>`;
	}
	schema.maxItems && constraints.push(`maximum of \`${schema.maxItems}\` items`);
	schema.minItems && constraints.push(`minimum of \`${schema.minItems}\` items`);
	schema.uniqueItems && constraints.push(`each item must be unique`);

	if (constraints.length > 0) {
		if (opts.renderSimpleTypes) {
			types += ' (' + constraints.join(', ') + ')';
		} else {
			types += ', ' + constraints.join(', ') + '.';
		}
	}

	if (types.length > 0) {
		out.push(types);
	}

	if (schema.contains) {
		throw Error('Not implemented');
	}
	if (schema.additionalItems) {
		throw Error('Not implemented');
	}

	// Object properties
	// Renders: properties, required
	// TODO: object
	// 'patternProperties',
	// 'additionalProperties',
	// 'dependencies',
	// 'propertyNames',
	if (schema.properties) {
		out.push(`${'#'.repeat(Math.min(opts.headingLevel, 6))} Properties`);
		const sortedProperties = Object.entries(schema.properties)
			.filter(([key]) => key !== '$schema')
			.sort(([a], [b]) => a.localeCompare(b));
		out.push(
			sortedProperties
				.map(([key]) => `- \`${key}\`${schema.required?.includes(key) ? ' (required)' : ''}`)
				.join('\n')
		);
		// TODO: List out the properties with an anchor to each one
		sortedProperties.forEach(([key, value]) => {
			out.push(`${'#'.repeat(Math.min(opts.headingLevel, 6) + 1)} ${key}`);
			out.push(
				buildSchemaDefinition(value, {
					...opts,
					headingLevel: Math.min(opts.headingLevel, 6) + 2,
				}).join('\n\n')
			);
		});
	}

	// TODO: Need a way to show a simplified view of this
	if (schema.allOf) {
		if (schema.allOf.length > 1) {
			throw Error('All of with more than one schema found');
		}
		const definition = buildSchemaDefinition(schema.allOf[0]);
		if (definition.length == 1) {
			out.push(`${opts.renderSimpleTypes ? '' : '**Type**: '}${definition}`);
		} else {
			throw Error(`Non-simple definition for allOf: ${JSON.stringify(definition)}`);
		}
	}

	if (schema.anyOf) {
		out.push(`**Any of the following types**:`);
		out.push(
			schema.anyOf
				.map((value) => {
					// TODO: Formatting
					return `- ${buildSchemaDefinition(value, opts).join('  \n')}`;
				})
				.join('\n')
		);
	}

	if (schema.oneOf) {
		out.push(`**One of**:`);
		Object.entries(schema.oneOf).forEach(([key, value]) => {
			out.push(`\`${key}\``);
			out.push(...buildSchemaDefinition(value, opts));
		});
	}

	// TODO: Might move this below the type, could potentially combine with type if a simple type (not an object)
	if (opts.renderDefault && schema.default) {
		if (typeof schema.default !== 'object') {
			// Simple default value
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

	// https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-validation-01
	// TODO: Slug & Link
	// schema.$id && out.push(`**$id**: ${schema.$id}`);
	if (schema.$ref) {
		const last = schema.$ref.split('/').pop();
		if (!last) {
			throw Error(`Unknown ref: ${schema.$ref}`);
		}
		out.push(`\`${last}\``);
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
						renderLineBreak: true,
					})
				);
			});
	}

	// opts.renderLineBreak && out.push('---');

	return out;
}
