[@tauri-apps/api](../README.md) / fs

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

## Security

This module prevents path traversal, not allowing absolute paths or parent dir components
(i.e. "/usr/path/to/file" or "../path/to/file" paths are not allowed).
Paths accessed with this API must be relative to one of the [base directories](../enums/fs.BaseDirectory.md)
so if you need access to arbitrary filesystem paths, you must write such logic on the core layer instead.

The API has a scope configuration that forces you to restrict the paths that can be accessed using glob patterns.

The scope configuration is an array of glob patterns describing folder paths that are allowed.
For instance, this scope configuration only allows accessing files on the
*databases* folder of the [$APP directory](path.md#appdir):
```json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "scope": ["$APP/databases/*"]
      }
    }
  }
}
```

Notice the use of the `$APP` variable. The value is injected at runtime, resolving to the [app directory](path.md#appdir).
The available variables are:
[`$AUDIO`](path.md#audiodir), [`$CACHE`](path.md#cachedir), [`$CONFIG`](path.md#configdir), [`$DATA`](path.md#datadir),
[`$LOCALDATA`](path.md#localdatadir), [`$DESKTOP`](path.md#desktopdir), [`$DOCUMENT`](path.md#documentdir),
[`$DOWNLOAD`](path.md#downloaddir), [`$EXE`](path.md#executabledir), [`$FONT`](path.md#fontdir), [`$HOME`](path.md#homedir),
[`$PICTURE`](path.md#picturedir), [`$PUBLIC`](path.md#publicdir), [`$RUNTIME`](path.md#runtimedir),
[`$TEMPLATE`](path.md#templatedir), [`$VIDEO`](path.md#videodir), [`$RESOURCE`](path.md#resourcedir), [`$APP`](path.md#appdir),
[`$LOG`](path.md#logdir), [`$TEMP`](os.md#tempdir).

Trying to execute any API with a URL not configured on the scope results in a promise rejection due to denied access.

Note that this scope applies to **all** APIs on this module.

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

[fs.ts:309](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L309)

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

[fs.ts:265](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L265)

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

[fs.ts:161](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L161)

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

[fs.ts:242](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L242)

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

[fs.ts:140](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L140)

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

[fs.ts:287](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L287)

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

[fs.ts:332](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L332)

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

[fs.ts:354](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L354)

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

[fs.ts:213](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L213)

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

[fs.ts:184](https://github.com/tauri-apps/tauri/blob/86d82af/tooling/api/src/fs.ts#L184)
