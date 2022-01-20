[@tauri-apps/api](../index.md) / tauri

# Namespace: tauri

Invoke your custom commands.

This package is also accessible with `window.__TAURI__.tauri` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Interfaces

- [InvokeArgs](../interfaces/tauri.InvokeArgs.md)

## Functions

### convertFileSrc

▸ **convertFileSrc**(`filePath`): `string`

Convert a device file path to an URL that can be loaded by the webview.
Note that `asset:` must be allowed on the `csp` value configured on `tauri.conf.json`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | the file path. |

#### Returns

`string`

the URL that can be used as source on the webview

#### Defined in

[tauri.ts:103](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/tauri.ts#L103)

___

### invoke

▸ **invoke**<`T`\>(`cmd`, `args?`): `Promise`<`T`\>

Sends a message to the backend.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | `string` | The command name. |
| `args` | [`InvokeArgs`](../interfaces/tauri.InvokeArgs.md) | The optional arguments to pass to the command. |

#### Returns

`Promise`<`T`\>

A promise resolving or rejecting to the backend response.

#### Defined in

[tauri.ts:75](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/tauri.ts#L75)

___

### transformCallback

▸ **transformCallback**(`callback?`, `once?`): `string`

Transforms a callback function to a string identifier that can be passed to the backend.
The backend uses the identifier to `eval()` the callback.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback?` | (`response`: `any`) => `void` | `undefined` |
| `once` | `boolean` | `false` |

#### Returns

`string`

A unique identifier associated with the callback function.

#### Defined in

[tauri.ts:42](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/tauri.ts#L42)
