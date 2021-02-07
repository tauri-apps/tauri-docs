---
id: "fs.removedir"
title: "Function: removeDir"
sidebar_label: "removeDir"
custom_edit_url: null
hide_title: true
---

# Function: removeDir

[fs](../modules/fs.md).removeDir

▸ **removeDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<*void*\>

Removes a directory
If the directory is not empty and the `recursive` option isn't set to true, it will be rejected

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`dir` | *string* | - | path to the directory to remove   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | ... | - |

**Returns:** *Promise*<*void*\>

Defined in: [fs.ts:238](https://github.com/tauri-apps/tauri/blob/237b49b/cli/tauri.js/api-src/fs.ts#L238)
