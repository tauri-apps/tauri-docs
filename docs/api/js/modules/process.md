[@tauri-apps/api](../index.md) / process

# Namespace: process

Perform operations on the current process.

This package is also accessible with `window.__TAURI__.process` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Functions

### exit

▸ **exit**(`exitCode?`): `Promise`<`void`\>

Exits immediately with the given `exitCode`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `exitCode` | `number` | `0` | The exit code to use. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[process.ts:20](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/process.ts#L20)

___

### relaunch

▸ **relaunch**(): `Promise`<`void`\>

Exits the current instance of the app then relaunches it.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[process.ts:35](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/process.ts#L35)
