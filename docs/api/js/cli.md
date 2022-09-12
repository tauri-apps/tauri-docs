# cli

Parse arguments from your Command Line Interface.

This package is also accessible with `window.__TAURI__.cli` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Interfaces

### `ArgMatch`

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="cli.ArgMatch.occurrences"><a href="#cli.ArgMatch.occurrences">`occurrences`</a></div> | `number` | Number of occurrences | [cli.ts:24](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L24) |
| <div class="anchor-with-padding" id="cli.ArgMatch.value"><a href="#cli.ArgMatch.value">`value`</a></div> | `null` \| `string` \| `boolean` \| `string`[] | string if takes value boolean if flag string[] or null if takes multiple values | [cli.ts:20](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L20) |

### `CliMatches`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="cli.CliMatches.args"><a href="#cli.CliMatches.args">`args`</a></div> | { `[name: string]`: [`ArgMatch`](cli.md#argmatch);  } | [cli.ts:33](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L33) |
| <div class="anchor-with-padding" id="cli.CliMatches.subcommand"><a href="#cli.CliMatches.subcommand">`subcommand`</a></div> | `null` \| [`SubcommandMatch`](cli.md#subcommandmatch) | [cli.ts:34](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L34) |

### `SubcommandMatch`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="cli.SubcommandMatch.matches"><a href="#cli.SubcommandMatch.matches">`matches`</a></div> | [`CliMatches`](cli.md#climatches) | [cli.ts:29](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L29) |
| <div class="anchor-with-padding" id="cli.SubcommandMatch.name"><a href="#cli.SubcommandMatch.name">`name`</a></div> | `string` | [cli.ts:28](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/cli.ts#L28) |

## Functions

### `getMatches`

> **getMatches**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`CliMatches`](cli.md#climatches)\>

Parse the arguments provided to the current process and get the matches using the configuration defined [`tauri.cli`](https://tauri.app/v1/api/config/#tauriconfig.cli) in `tauri.conf.json`

**Example**

```typescript
import { getMatches } from '@tauri-apps/api/cli';
const matches = await getMatches();
if (matches.subcommand?.name === 'run') {
  // `./your-app run $ARGS` was executed
  const args = matches.subcommand?.matches.args
  if ('debug' in args) {
    // `./your-app run --debug` was executed
  }
} else {
  const args = matches.args
  // `./your-app $ARGS` was executed
}
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`CliMatches`](cli.md#climatches)\>

A promise resolving to the parsed arguments.
