---
id: "fs.createdir"
title: "Function: createDir"
sidebar_label: "createDir"
custom_edit_url: null
hide_title: true
---

# Function: createDir

[fs](../modules/fs.md).createDir

▸ **createDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<*void*\>

Creates a directory
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, it will be rejected

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dir` | *string* | - | path to the directory to create   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | ... | - |

**Returns:** *Promise*<*void*\>

Defined in: [fs.ts:216](https://github.com/tauri-apps/tauri/blob/237b49b/cli/tauri.js/api-src/fs.ts#L216)
