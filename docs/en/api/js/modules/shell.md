---
title: "Module: shell"
sidebar_label: "shell"
custom_edit_url: null
hide_title: true
---

# Module: shell

## Functions

### execute

▸ **execute**(`command`: *string*, `args?`: *string* \| *string*[]): *Promise*<string\>

spawns a process

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`command` | *string* | args   |
`args?` | *string* \| *string*[] | - |

**Returns:** *Promise*<string\>

promise resolving to the stdout text

Defined in: [shell.ts:10](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/shell.ts#L10)

___

### open

▸ **open**(`url`: *string*): *Promise*<void\>

opens an URL on the user default browser

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | the URL to open    |

**Returns:** *Promise*<void\>

Defined in: [shell.ts:33](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/shell.ts#L33)
