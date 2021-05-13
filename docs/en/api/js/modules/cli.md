---
title: "Module: cli"
sidebar_label: "cli"
custom_edit_url: null
hide_title: true
---

# Module: cli

Parse arguments from your Command Line Interface.

## Table of contents

### Interfaces

- [ArgMatch](../interfaces/cli.argmatch.md)
- [CliMatches](../interfaces/cli.climatches.md)
- [SubcommandMatch](../interfaces/cli.subcommandmatch.md)

## Functions

### getMatches

▸ **getMatches**(): *Promise*<[*CliMatches*](../interfaces/cli.climatches.md)\>

Parse the arguments provided to the current process and get the matches using the configuration defined `tauri.conf.json > tauri > cli`.

**Returns:** *Promise*<[*CliMatches*](../interfaces/cli.climatches.md)\>

A promise resolving to the parsed arguments.

Defined in: [cli.ts:40](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/cli.ts#L40)
