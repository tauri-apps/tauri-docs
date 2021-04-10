---
title: "Module: shell"
sidebar_label: "shell"
custom_edit_url: null
hide_title: true
---

# Module: shell

## Table of contents

### Classes

- [Child](../classes/shell.child.md)
- [Command](../classes/shell.command.md)

## Functions

### open

▸ **open**(`path`: *string*, `openWith?`: *string*): *Promise*<void\>

opens a path or URL with the system's default app,
or the one specified with `openWith`

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | *string* | the path or URL to open   |
`openWith?` | *string* | the app to open the file or URL with    |

**Returns:** *Promise*<void\>

Defined in: [shell.ts:200](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/shell.ts#L200)
