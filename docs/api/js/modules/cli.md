[@tauri-apps/api](../README.md) / cli

# Module: cli

Parse arguments from your Command Line Interface.

This package is also accessible with `window.__TAURI__.cli` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Interfaces

- [ArgMatch](../interfaces/cli.ArgMatch.md)
- [CliMatches](../interfaces/cli.CliMatches.md)
- [SubcommandMatch](../interfaces/cli.SubcommandMatch.md)

## Functions

### getMatches

▸ **getMatches**(): `Promise`<[`CliMatches`](../interfaces/cli.CliMatches.md)\>

Parse the arguments provided to the current process and get the matches using the configuration defined `tauri.conf.json > tauri > cli`.

**`example`**
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

#### Returns

`Promise`<[`CliMatches`](../interfaces/cli.CliMatches.md)\>

A promise resolving to the parsed arguments.

#### Defined in

[cli.ts:57](https://github.com/tauri-apps/tauri/blob/f5f9f10/tooling/api/src/cli.ts#L57)
