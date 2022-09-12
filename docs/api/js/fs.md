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
Paths accessed with this API must be relative to one of the [base directories](fs.md#basedirectory)
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

## References

### `Dir`

Renames and re-exports [BaseDirectory](fs.md#basedirectory)

### `writeFile`

Renames and re-exports [writeTextFile](fs.md#writetextfile)

## Enumerations

### `BaseDirectory`

#### Enumeration Members

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="fs.BaseDirectory.App"><a href="#fs.BaseDirectory.App">`App`</a></div> | `18` | [fs.ts:92](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L92) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Audio"><a href="#fs.BaseDirectory.Audio">`Audio`</a></div> | `1` | [fs.ts:75](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L75) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Cache"><a href="#fs.BaseDirectory.Cache">`Cache`</a></div> | `2` | [fs.ts:76](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L76) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Config"><a href="#fs.BaseDirectory.Config">`Config`</a></div> | `3` | [fs.ts:77](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L77) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Data"><a href="#fs.BaseDirectory.Data">`Data`</a></div> | `4` | [fs.ts:78](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L78) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Desktop"><a href="#fs.BaseDirectory.Desktop">`Desktop`</a></div> | `6` | [fs.ts:80](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L80) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Document"><a href="#fs.BaseDirectory.Document">`Document`</a></div> | `7` | [fs.ts:81](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L81) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Download"><a href="#fs.BaseDirectory.Download">`Download`</a></div> | `8` | [fs.ts:82](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L82) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Executable"><a href="#fs.BaseDirectory.Executable">`Executable`</a></div> | `9` | [fs.ts:83](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L83) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Font"><a href="#fs.BaseDirectory.Font">`Font`</a></div> | `10` | [fs.ts:84](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L84) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Home"><a href="#fs.BaseDirectory.Home">`Home`</a></div> | `11` | [fs.ts:85](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L85) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.LocalData"><a href="#fs.BaseDirectory.LocalData">`LocalData`</a></div> | `5` | [fs.ts:79](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L79) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Log"><a href="#fs.BaseDirectory.Log">`Log`</a></div> | `19` | [fs.ts:93](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L93) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Picture"><a href="#fs.BaseDirectory.Picture">`Picture`</a></div> | `12` | [fs.ts:86](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L86) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Public"><a href="#fs.BaseDirectory.Public">`Public`</a></div> | `13` | [fs.ts:87](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L87) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Resource"><a href="#fs.BaseDirectory.Resource">`Resource`</a></div> | `17` | [fs.ts:91](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L91) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Runtime"><a href="#fs.BaseDirectory.Runtime">`Runtime`</a></div> | `14` | [fs.ts:88](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L88) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Temp"><a href="#fs.BaseDirectory.Temp">`Temp`</a></div> | `20` | [fs.ts:94](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L94) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Template"><a href="#fs.BaseDirectory.Template">`Template`</a></div> | `15` | [fs.ts:89](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L89) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Video"><a href="#fs.BaseDirectory.Video">`Video`</a></div> | `16` | [fs.ts:90](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L90) |

## Interfaces

### `FileEntry`

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="fs.FileEntry.children"><a href="#fs.FileEntry.children">`children?`</a></div> | [`FileEntry`](fs.md#fileentry)[] | Children of this entry if it's a directory; null otherwise | [fs.ts:133](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L133) |
| <div class="anchor-with-padding" id="fs.FileEntry.name"><a href="#fs.FileEntry.name">`name?`</a></div> | `string` | Name of the directory/file can be null if the path terminates with `..` | [fs.ts:131](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L131) |
| <div class="anchor-with-padding" id="fs.FileEntry.path"><a href="#fs.FileEntry.path">`path`</a></div> | `string` | - | [fs.ts:126](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L126) |

### `FsBinaryFileOption`

Options object used to write a binary data to a file.

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="fs.FsBinaryFileOption.contents"><a href="#fs.FsBinaryFileOption.contents">`contents`</a></div> | [`BinaryFileContents`](fs.md#binaryfilecontents) | The byte array contents. | [fs.ts:122](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L122) |
| <div class="anchor-with-padding" id="fs.FsBinaryFileOption.path"><a href="#fs.FsBinaryFileOption.path">`path`</a></div> | `string` | Path to the file to write. | [fs.ts:120](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L120) |

### `FsDirOptions`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="fs.FsDirOptions.dir"><a href="#fs.FsDirOptions.dir">`dir?`</a></div> | [`BaseDirectory`](fs.md#basedirectory) | [fs.ts:103](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L103) |
| <div class="anchor-with-padding" id="fs.FsDirOptions.recursive"><a href="#fs.FsDirOptions.recursive">`recursive?`</a></div> | `boolean` | [fs.ts:104](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L104) |

### `FsOptions`

#### Properties

| Name | Type | Source |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="fs.FsOptions.dir"><a href="#fs.FsOptions.dir">`dir?`</a></div> | [`BaseDirectory`](fs.md#basedirectory) | [fs.ts:98](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L98) |

### `FsTextFileOption`

Options object used to write a UTF-8 string to a file.

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="fs.FsTextFileOption.contents"><a href="#fs.FsTextFileOption.contents">`contents`</a></div> | `string` | The UTF-8 string to write to the file. | [fs.ts:112](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L112) |
| <div class="anchor-with-padding" id="fs.FsTextFileOption.path"><a href="#fs.FsTextFileOption.path">`path`</a></div> | `string` | Path to the file to write. | [fs.ts:110](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L110) |

## Type Aliases

### `BinaryFileContents`

 **BinaryFileContents**: `Iterable`<`number`\> \| `ArrayLike`<`number`\> \| [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

[fs.ts:115](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/fs.ts#L115)

## Functions

### `copyFile`

> **copyFile**(`source`: `string`, `destination`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Copys a file to a destination.

**Example**

```typescript
import { copyFile, BaseDirectory } from '@tauri-apps/api/fs';
// Copy the `$APPDIR/app.conf` file to `$APPDIR/app.conf.bk`
await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | A path of the file to copy. |
| `destination` | `string` | A path for the destination file. |
| `options` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `createDir`

> **createDir**(`dir`: `string`, `options?`: [`FsDirOptions`](fs.md#fsdiroptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Creates a directory.
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, the promise will be rejected.

**Example**

```typescript
import { createDir, BaseDirectory } from '@tauri-apps/api/fs';
// Create the `$APPDIR/users` directory
await createDir('users', { dir: BaseDirectory.App, recursive: true });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to create. |
| `options` | [`FsDirOptions`](fs.md#fsdiroptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `readBinaryFile`

> **readBinaryFile**(`filePath`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

Reads a file as byte array.

**Example**

```typescript
import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Read the image file in the `$RESOURCEDIR/avatar.png` path
const contents = await readBinaryFile('avatar.png', { dir: BaseDirectory.Resource });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

A promise resolving to the file bytes array.

### `readDir`

> **readDir**(`dir`: `string`, `options?`: [`FsDirOptions`](fs.md#fsdiroptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FileEntry`](fs.md#fileentry)[]\>

List directory files.

**Example**

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

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to read. |
| `options` | [`FsDirOptions`](fs.md#fsdiroptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FileEntry`](fs.md#fileentry)[]\>

A promise resolving to the directory entries.

### `readTextFile`

> **readTextFile**(`filePath`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Reads a file as an UTF-8 encoded string.

**Example**

```typescript
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Read the text file in the `$APPDIR/app.conf` path
const contents = await readTextFile('app.conf', { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path to the file. |
| `options` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

A promise resolving to the file content as a UTF-8 encoded string.

### `removeDir`

> **removeDir**(`dir`: `string`, `options?`: [`FsDirOptions`](fs.md#fsdiroptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Removes a directory.
If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.

**Example**

```typescript
import { removeDir, BaseDirectory } from '@tauri-apps/api/fs';
// Remove the directory `$APPDIR/users`
await removeDir('users', { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | Path to the directory to remove. |
| `options` | [`FsDirOptions`](fs.md#fsdiroptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `removeFile`

> **removeFile**(`file`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Removes a file.

**Example**

```typescript
import { removeFile, BaseDirectory } from '@tauri-apps/api/fs';
// Remove the `$APPDIR/app.conf` file
await removeFile('app.conf', { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | Path to the file to remove. |
| `options` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `renameFile`

> **renameFile**(`oldPath`: `string`, `newPath`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Renames a file.

**Example**

```typescript
import { renameFile, BaseDirectory } from '@tauri-apps/api/fs';
// Rename the `$APPDIR/avatar.png` file
await renameFile('avatar.png', 'deleted.png', { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldPath` | `string` | A path of the file to rename. |
| `newPath` | `string` | A path of the new file name. |
| `options` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `writeBinaryFile`

> **writeBinaryFile**(`path`: `string`, `contents`: [`BinaryFileContents`](fs.md#binaryfilecontents), `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes a byte array content to a file.

**Example**

```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a binary file to the `$APPDIR/avatar.png` path
await writeBinaryFile('avatar.png', new Uint8Array([]), { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The file path. |
| `contents` | [`BinaryFileContents`](fs.md#binaryfilecontents) | The file contents. |
| `options?` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

> **writeBinaryFile**(`file`: [`FsBinaryFileOption`](fs.md#fsbinaryfileoption), `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes a byte array content to a file.

**Example**

```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a binary file to the `$APPDIR/avatar.png` path
await writeBinaryFile({ path: 'avatar.png', contents: new Uint8Array([]) }, { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsBinaryFileOption`](fs.md#fsbinaryfileoption) | The object containing the file path and contents. |
| `options?` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `writeTextFile`

> **writeTextFile**(`path`: `string`, `contents`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes a UTF-8 text file.

**Example**

```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a text file to the `$APPDIR/app.conf` path
await writeTextFile('app.conf', 'file contents', { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The file path. |
| `contents` | `string` | The file contents. |
| `options?` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

> **writeTextFile**(`file`: [`FsTextFileOption`](fs.md#fstextfileoption), `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes a UTF-8 text file.

**Example**

```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a text file to the `$APPDIR/app.conf` path
await writeTextFile({ path: 'app.conf', contents: 'file contents' }, { dir: BaseDirectory.App });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FsTextFileOption`](fs.md#fstextfileoption) | The object containing the file path and contents. |
| `options?` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.
