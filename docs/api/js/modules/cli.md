[@tauri-apps/api](../index.md) / cli

# Namespace: cli

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

#### Returns

`Promise`<[`CliMatches`](../interfaces/cli.CliMatches.md)\>

A promise resolving to the parsed arguments.

#### Defined in

[cli.ts:42](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/cli.ts#L42)
