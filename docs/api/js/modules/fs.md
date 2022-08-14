# fs

Access the file system.

This package is also accessible with `window.__TAURI__.fs` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.fs`](https://tauri.app/v1/api/config/#allowlistconfig.fs) in `tauri.conf.json`:
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

### `Dir`

Renames and re-exports [BaseDirectory](../enums/fs.BaseDirectory.md)

___

### `writeFile`

Renames and re-exports [writeTextFile](fs.md#writetextfile)

## Type Aliases

### `BinaryFileContents`

 **BinaryFileContents**: `Iterable`<`number`\> \| `ArrayLike`<`number`\> \| `ArrayBuffer`

**Defined in** [fs.ts:115](https://github.com/tauri-apps/tauri/blob/e29997c5/tooling/api/src/fs.ts#L115)

## Functions

### `copyFile`

> **copyFile**(`source`, `destination`, `options?`): `Promise`<`void`\>

Copys a file to a destination.

**`Example`**

```typescript
import { copyFile, BaseDirectory } from '@tauri-apps/api/fs';
// Copy the `$APPDIR/app.conf` file to `$APPDIR/app.conf.bk`
await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | A path of the file to copy. |
| `destination` | `string` | A path for the destination file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### `createDir`

> **createDir**(`dir`, `options?`): `Promise`<`void`\>

Creates a directory.
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, the promise will be rejected.

**`Example`**

```typescript
import { createDir, BaseDirectory } from '@tauri-apps/api/fs';
// Create the `$APPDIR/users` directory
await createDir('users', { dir: BaseDirectory.App, recursive: true });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to create. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### `readBinaryFile`

> **readBinaryFile**(`filePath`, `options?`): `Promise`<`Uint8Array`\>

Reads a file as byte array.

**`Example`**

```typescript
import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Read the image file in the `$RESOURCEDIR/avatar.png` path
const contents = await readBinaryFile('avatar.png', { dir: BaseDirectory.Resource });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`Uint8Array`\>

A promise resolving to the file bytes array.

___

### `readDir`

> **readDir**(`dir`, `options?`): `Promise`<[`FileEntry`](../interfaces/fs.FileEntry.md)[]\>

List directory files.

**`Example`**

```typescript
import { readDir, BaseDirectory } from '@tauri-apps/api/fs';
// Reads the `$APPDIR/users` directory recursively
const entries = await readDir('users', { dir: BaseDirectory.App, recursive: true });

function processEntries(entries) {
  for (const entry of entries) {
    console.log(`Entry: ${entry.path}`);
    if (entry.children) {
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

**Returns**: `Promise`<[`FileEntry`](../interfaces/fs.FileEntry.md)[]\>

A promise resolving to the directory entries.

___

### `readTextFile`

> **readTextFile**(`filePath`, `options?`): `Promise`<`string`\>

Reads a file as an UTF-8 encoded string.

**`Example`**

```typescript
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Read the text file in the `$APPDIR/app.conf` path
const contents = await readTextFile('app.conf', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`string`\>

A promise resolving to the file content as a UTF-8 encoded string.

___

### `removeDir`

> **removeDir**(`dir`, `options?`): `Promise`<`void`\>

Removes a directory.
If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.

**`Example`**

```typescript
import { removeDir, BaseDirectory } from '@tauri-apps/api/fs';
// Remove the directory `$APPDIR/users`
await removeDir('users', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to remove. |
| `options` | [`FsDirOptions`](../interfaces/fs.FsDirOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### `removeFile`

> **removeFile**(`file`, `options?`): `Promise`<`void`\>

Removes a file.

**`Example`**

```typescript
import { removeFile, BaseDirectory } from '@tauri-apps/api/fs';
// Remove the `$APPDIR/app.conf` file
await removeFile('app.conf', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | Path to the file to remove. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### `renameFile`

> **renameFile**(`oldPath`, `newPath`, `options?`): `Promise`<`void`\>

Renames a file.

**`Example`**

```typescript
import { renameFile, BaseDirectory } from '@tauri-apps/api/fs';
// Rename the `$APPDIR/avatar.png` file
await renameFile('avatar.png', 'deleted.png', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldPath` | `string` | A path of the file to rename. |
| `newPath` | `string` | A path of the new file name. |
| `options` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### `writeBinaryFile`

> **writeBinaryFile**(`path`, `contents`, `options?`): `Promise`<`void`\>

Writes a byte array content to a file.

**`Example`**

```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a binary file to the `$APPDIR/avatar.png` path
await writeBinaryFile('avatar.png', new Uint8Array([]), { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The file path. |
| `contents` | [`BinaryFileContents`](fs.md#binaryfilecontents) | The file contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

> **writeBinaryFile**(`file`, `options?`): `Promise`<`void`\>

Writes a byte array content to a file.

**`Example`**

```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a binary file to the `$APPDIR/avatar.png` path
await writeBinaryFile({ path: 'avatar.png', contents: new Uint8Array([]) }, { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsBinaryFileOption`](../interfaces/fs.FsBinaryFileOption.md) | The object containing the file path and contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### `writeTextFile`

> **writeTextFile**(`path`, `contents`, `options?`): `Promise`<`void`\>

Writes a UTF-8 text file.

**`Example`**

```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a text file to the `$APPDIR/app.conf` path
await writeTextFile('app.conf', 'file contents', { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The file path. |
| `contents` | `string` | The file contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.

> **writeTextFile**(`file`, `options?`): `Promise`<`void`\>

Writes a UTF-8 text file.

**`Example`**

```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a text file to the `$APPDIR/app.conf` path
await writeTextFile({ path: 'app.conf', contents: 'file contents' }, { dir: BaseDirectory.App });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsTextFileOption`](../interfaces/fs.FsTextFileOption.md) | The object containing the file path and contents. |
| `options?` | [`FsOptions`](../interfaces/fs.FsOptions.md) | Configuration object. |

**Returns**: `Promise`<`void`\>

A promise indicating the success or failure of the operation.
