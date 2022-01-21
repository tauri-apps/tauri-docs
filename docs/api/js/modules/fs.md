[@tauri-apps/api](../index.md) / fs

# Module: fs

Access the file system.

This package is also accessible with `window.__TAURI__.fs` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "all": true, // enable all FS APIs
        "readTextFile": true,
        "readBinaryFile": true,
        "writeFile": true,
        "writeBinaryFile": true,
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

Renames and exports: [BaseDirectory](../enums/fs.BaseDirectory.md)

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

[fs.ts:300](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L300)

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

[fs.ts:256](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L256)

___

### readBinaryFile

▸ **readBinaryFile**(`filePath`, `options?`): `Promise`<`number`[]\>

Reads a file as byte array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`number`[]\>

A promise resolving to the file bytes array.

#### Defined in

[fs.ts:118](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L118)

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

[fs.ts:233](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L233)

___

### readTextFile

▸ **readTextFile**(`filePath`, `options?`): `Promise`<`string`\>

Reads a file as UTF-8 encoded string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`string`\>

A promise resolving to the file content as a UTF-8 encoded string.

#### Defined in

[fs.ts:97](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L97)

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

[fs.ts:278](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L278)

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

[fs.ts:323](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L323)

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

[fs.ts:345](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L345)

___

### writeBinaryFile

▸ **writeBinaryFile**(`file`, `options?`): `Promise`<`void`\>

Writes a binary file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsBinaryFileOption`](../interfaces/fs.FsBinaryFileOption.md) | Write configuration object. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:204](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L204)

___

### writeFile

▸ **writeFile**(`file`, `options?`): `Promise`<`void`\>

Writes a text file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsTextFileOption`](../interfaces/fs.FsTextFileOption.md) | File configuration object. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:139](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L139)
