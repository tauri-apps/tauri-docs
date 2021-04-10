---
title: "Module: app"
sidebar_label: "app"
custom_edit_url: null
hide_title: true
---

# Module: app

## Functions

### exit

▸ **exit**(`exitCode?`: Number): *Promise*<string\>

**`name`** exit

**`description`** Exits immediately with exitCode.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`exitCode` | Number | 0 |

**Returns:** *Promise*<string\>

Application is closing, nothing is returned

Defined in: [app.ts:54](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/app.ts#L54)

___

### getName

▸ **getName**(): *Promise*<string\>

**`name`** getName

**`description`** Get application name

**Returns:** *Promise*<string\>

Promise resolving to application name

Defined in: [app.ts:23](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/app.ts#L23)

___

### getTauriVersion

▸ **getTauriVersion**(): *Promise*<string\>

**`name`** getTauriVersion

**`description`** Get tauri version

**Returns:** *Promise*<string\>

Promise resolving to tauri version

Defined in: [app.ts:38](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/app.ts#L38)

___

### getVersion

▸ **getVersion**(): *Promise*<string\>

**`name`** getVersion

**`description`** Get application version

**Returns:** *Promise*<string\>

Promise resolving to application version

Defined in: [app.ts:8](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/app.ts#L8)

___

### relaunch

▸ **relaunch**(): *Promise*<string\>

**`name`** relaunch

**`description`** Relaunches the app when current instance exits.

**Returns:** *Promise*<string\>

Application is restarting, nothing is returned

Defined in: [app.ts:70](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/app.ts#L70)
