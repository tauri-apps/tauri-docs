[@tauri-apps/api](../index.md) / clipboard

# Namespace: clipboard

Read and write to the system clipboard.

This package is also accessible with `window.__TAURI__.clipboard` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Functions

### readText

▸ **readText**(): `Promise`<`string` \| ``null``\>

Gets the clipboard content as plain text.

#### Returns

`Promise`<`string` \| ``null``\>

A promise resolving to the clipboard content as plain text.

#### Defined in

[clipboard.ts:34](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/clipboard.ts#L34)

___

### writeText

▸ **writeText**(`text`): `Promise`<`void`\>

Writes a plain text to the clipboard.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[clipboard.ts:19](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/clipboard.ts#L19)
