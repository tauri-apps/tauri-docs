[@tauri-apps/api](../index.md) / fs

# Namespace: fs

Access the file system.

This package is also accessible with `window.__TAURI__.fs` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "all": true, // enable all FS APIs
        "readFile": true,
        "writeFile": true,
        "readDir": true,
        "copyFile": true,
        "createDir": true,
        "removeDir": true,
        "removeFile": true,
        "renameFile": true
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Enumerations

- [BaseDirectory](../enums/fs.BaseDirectory.md)

## Interfaces

- [FileEntry](../interfaces/fs.FileEntry.md)
- [FsBinaryFileOption](../interfaces/fs.FsBinaryFileOption.md)
- [FsDirOptions](../interfaces/fs.FsDirOptions.md)
- [FsOptions](../interfaces/fs.FsOptions.md)
- [FsTextFileOption](../interfaces/fs.FsTextFileOption.md)

## References

### Dir

Renames and re-exports [BaseDirectory](../enums/fs.BaseDirectory.md)

## Functions

### copyFile

▸ **copyFile**(`source`, `destination`, `options?`): `Promise`<`void`\>

Copys a file to a destination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | A path of the file to copy. |
| `destination` | `string` | A path for the destination file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:270](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L270)

___

### createDir

▸ **createDir**(`dir`, `options?`): `Promise`<`void`\>

Creates a directory.
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, the promise will be rejected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to create. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:226](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L226)

___

### readBinaryFile

▸ **readBinaryFile**(`filePath`, `options?`): `Promise`<`Uint8Array`\>

Reads a file as byte array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`Uint8Array`\>

A promise resolving to the file bytes array.

#### Defined in

[fs.ts:122](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L122)

___

### readDir

▸ **readDir**(`dir`, `options?`): `Promise`<[`FileEntry`](../interfaces/fs.FileEntry.md)[]\>

List directory files.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to read. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

#### Returns

`Promise`<[`FileEntry`](../interfaces/fs.FileEntry.md)[]\>

A promise resolving to the directory entries.

#### Defined in

[fs.ts:203](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L203)

___

### readTextFile

▸ **readTextFile**(`filePath`, `options?`): `Promise`<`string`\>

Reads a file as an UTF-8 encoded string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`string`\>

A promise resolving to the file content as a UTF-8 encoded string.

#### Defined in

[fs.ts:101](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L101)

___

### removeDir

▸ **removeDir**(`dir`, `options?`): `Promise`<`void`\>

Removes a directory.
If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to remove. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:248](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L248)

___

### removeFile

▸ **removeFile**(`file`, `options?`): `Promise`<`void`\>

Removes a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | Path to the file to remove. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:293](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L293)

___

### renameFile

▸ **renameFile**(`oldPath`, `newPath`, `options?`): `Promise`<`void`\>

Renames a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldPath` | `string` | A path of the file to rename. |
| `newPath` | `string` | A path of the new file name. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:315](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L315)

___

### writeBinaryFile

▸ **writeBinaryFile**(`file`, `options?`): `Promise`<`void`\>

Writes a byte array content to a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsBinaryFileOption`](../interfaces/fs.FsBinaryFileOption.md) | Write configuration object. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:174](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L174)

___

### writeFile

▸ **writeFile**(`file`, `options?`): `Promise`<`void`\>

Writes a UTF-8 text file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsTextFileOption`](../interfaces/fs.FsTextFileOption.md) | File configuration object. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:145](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/fs.ts#L145)
