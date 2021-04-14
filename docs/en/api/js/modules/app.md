---
title: "Module: app"
sidebar_label: "app"
custom_edit_url: null
hide_title: true
---

# Module: app

## Functions

### exit

▸ **exit**(`exitCode?`: *number*): *Promise*<void\>

Exits immediately with the given `exitCode`.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`exitCode` | *number* | 0 | The exit code to use   |

**Returns:** *Promise*<void\>

Defined in: [app.ts:58](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/app.ts#L58)

___

### getName

▸ **getName**(): *Promise*<string\>

Gets the application name.

**Returns:** *Promise*<string\>

A promise resolving to application name.

Defined in: [app.ts:27](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/app.ts#L27)

___

### getTauriVersion

▸ **getTauriVersion**(): *Promise*<string\>

Gets the tauri version.

**Returns:** *Promise*<string\>

A promise resolving to tauri version.

Defined in: [app.ts:42](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/app.ts#L42)

___

### getVersion

▸ **getVersion**(): *Promise*<string\>

Gets the application version.

**Returns:** *Promise*<string\>

A promise resolving to application version.

Defined in: [app.ts:12](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/app.ts#L12)

___

### relaunch

▸ **relaunch**(): *Promise*<void\>

Exits the current instance of the app then relaunches it.

**Returns:** *Promise*<void\>

Defined in: [app.ts:74](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/app.ts#L74)
