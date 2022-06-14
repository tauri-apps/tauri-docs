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

___

### writeFile

Renames and re-exports [writeTextFile](fs.md#writetextfile)

## Type Aliases

### BinaryFileContents

Ƭ **BinaryFileContents**: `Iterable`<`number`\> \| `ArrayLike`<`number`\>

#### Defined in

[fs.ts:115](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L115)

## Functions

### copyFile

▸ **copyFile**(`source`, `destination`, `options?`): `Promise`<`void`\>

Copys a file to a destination.

**`example`** Copy the `$APPDIR/app.conf` file to `$APPDIR/app.conf.bk`
```typescript
import { copyFile, BaseDirectory } from '@tauri-apps/api/fs';
await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.App });
```

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

[fs.ts:458](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L458)

___

### createDir

▸ **createDir**(`dir`, `options?`): `Promise`<`void`\>

Creates a directory.
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, the promise will be rejected.

**`example`** Create the `$APPDIR/users` directory
```typescript
import { createDir, BaseDirectory } from '@tauri-apps/api/fs';
await createDir('users', { dir: BaseDirectory.App, recursive: true });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to create. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:404](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L404)

___

### readBinaryFile

▸ **readBinaryFile**(`filePath`, `options?`): `Promise`<`Uint8Array`\>

Reads a file as byte array.

**`example`** Read the image file in the `$RESOURCEDIR/avatar.png` path
```typescript
import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
const contents = await readBinaryFile('avatar.png', { dir: BaseDirectory.Resource });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`Uint8Array`\>

A promise resolving to the file bytes array.

#### Defined in

[fs.ts:174](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L174)

___

### readDir

▸ **readDir**(`dir`, `options?`): `Promise`<[`FileEntry`](../interfaces/fs.FileEntry.md)[]\>

List directory files.

**`example`** Reads the `$APPDIR/users` directory recursively
```typescript
import { readDir, BaseDirectory } from '@tauri-apps/api/fs';
const entries = await readDir('users', new Uint8Array([]), { dir: BaseDirectory.App, recursive: true });

function processEntries(entries) {
  for (const entry of entries) {
    console.log(`Entry: ${entry.path}`);
    if (entry.children !== null) {
      processEntries(entry.children)
    }
  }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to read. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

#### Returns

`Promise`<[`FileEntry`](../interfaces/fs.FileEntry.md)[]\>

A promise resolving to the directory entries.

#### Defined in

[fs.ts:376](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L376)

___

### readTextFile

▸ **readTextFile**(`filePath`, `options?`): `Promise`<`string`\>

Reads a file as an UTF-8 encoded string.

**`example`** Read the text file in the `$APPDIR/app.conf` path
```typescript
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
const contents = await readTextFile('app.conf', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`string`\>

A promise resolving to the file content as a UTF-8 encoded string.

#### Defined in

[fs.ts:148](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L148)

___

### removeDir

▸ **removeDir**(`dir`, `options?`): `Promise`<`void`\>

Removes a directory.
If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.

**`example`** Remove the directory `$APPDIR/users`
```typescript
import { removeDir, BaseDirectory } from '@tauri-apps/api/fs';
await removeDir('users', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to remove. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:431](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L431)

___

### removeFile

▸ **removeFile**(`file`, `options?`): `Promise`<`void`\>

Removes a file.

**`example`** Remove the `$APPDIR/app.conf` file
```typescript
import { removeFile, BaseDirectory } from '@tauri-apps/api/fs';
await removeFile('app.conf', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | Path to the file to remove. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:486](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L486)

___

### renameFile

▸ **renameFile**(`oldPath`, `newPath`, `options?`): `Promise`<`void`\>

Renames a file.

**`example`** Rename the `$APPDIR/avatar.png` file
```typescript
import { renameFile, BaseDirectory } from '@tauri-apps/api/fs';
await renameFile('avatar.png', 'deleted.png', { dir: BaseDirectory.App });
```

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

[fs.ts:513](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L513)

___

### writeBinaryFile

▸ **writeBinaryFile**(`path`, `contents`, `options?`): `Promise`<`void`\>

Writes a byte array content to a file.

**`example`** Write a binary file to the `$APPDIR/avatar.png` path
```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
await writeBinaryFile('avatar.png', new Uint8Array([]), { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The file path. |
| `contents` | [`BinaryFileContents`](fs.md#binaryfilecontents) | The file contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:285](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L285)

▸ **writeBinaryFile**(`file`, `options?`): `Promise`<`void`\>

Writes a byte array content to a file.

**`example`** Write a binary file to the `$APPEDIR/avatar.png` path
```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
await writeBinaryFile({ path: 'avatar.png', contents: new Uint8Array([]) }, { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsBinaryFileOption`](../interfaces/fs.FsBinaryFileOption.md) | The object containing the file path and contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:303](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L303)

___

### writeTextFile

▸ **writeTextFile**(`path`, `contents`, `options?`): `Promise`<`void`\>

Writes a UTF-8 text file.

**`example`** Write a text file to the `$APPDIR/app.conf` path
```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
await writeTextFile('app.conf', 'file contents', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The file path. |
| `contents` | `string` | The file contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:203](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L203)

▸ **writeTextFile**(`file`, `options?`): `Promise`<`void`\>

Writes a UTF-8 text file.

**`example`** Write a text file to the `$APPDIR/app.conf` path
```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
await writeTextFile({ path: 'app.conf', contents: 'file contents' }, { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsTextFileOption`](../interfaces/fs.FsTextFileOption.md) | The object containing the file path and contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[fs.ts:221](https://github.com/tauri-apps/tauri/blob/6e16679/tooling/api/src/fs.ts#L221)
