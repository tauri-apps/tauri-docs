---
title: '@tauri-apps/plugin-cli'
editUrl: false
sidebar:
  label: 'cli'
---

Parse arguments from your Command Line Interface.

## Interfaces

### ArgMatch

#### Since

2.0.0

#### Properties

| Property                                                  | Type                                          | Description                                                                               |
| :-------------------------------------------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------- |
| <a id="occurrences" name="occurrences"></a> `occurrences` | `number`                                      | Number of occurrences                                                                     |
| <a id="value" name="value"></a> `value`                   | `null` \| `string` \| `boolean` \| `string`[] | string if takes value<br />boolean if flag<br />string[] or null if takes multiple values |

---

### CliMatches

#### Since

2.0.0

#### Properties

| Property                                               | Type                                                                                                                                                          |
| :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="args" name="args"></a> `args`                   | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, [`ArgMatch`](/references/javascript/cli/#argmatch) \> |
| <a id="subcommand" name="subcommand"></a> `subcommand` | `null` \| [`SubcommandMatch`](/references/javascript/cli/#subcommandmatch)                                                                                    |

---

### SubcommandMatch

#### Since

2.0.0

#### Properties

| Property                                      | Type                                                   |
| :-------------------------------------------- | :----------------------------------------------------- |
| <a id="matches" name="matches"></a> `matches` | [`CliMatches`](/references/javascript/cli/#climatches) |
| <a id="name" name="name"></a> `name`          | `string`                                               |

## Functions

### getMatches()

```ts
getMatches(): Promise< CliMatches >
```

Parse the arguments provided to the current process and get the matches using the configuration defined [`tauri.cli`](https://tauri.app/v1/api/config/#tauriconfig.cli) in `tauri.conf.json`

#### Example

```typescript
import { getMatches } from '@tauri-apps/plugin-cli';
const matches = await getMatches();
if (matches.subcommand?.name === 'run') {
  // `./your-app run $ARGS` was executed
  const args = matches.subcommand?.matches.args;
  if ('debug' in args) {
    // `./your-app run --debug` was executed
  }
} else {
  const args = matches.args;
  // `./your-app $ARGS` was executed
}
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`CliMatches`](/references/javascript/cli/#climatches) \>

**Source**: [index.ts:66](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/cli/guest-js/index.ts#L66)
