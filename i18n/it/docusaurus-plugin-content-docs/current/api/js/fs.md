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
        "renameFile": true,
        "exists": true
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
*databases* folder of the [$APPDATA directory](path.md#appdatadir):
```json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "scope": ["$APPDATA/databases/*"]
      }
    }
  }
}
```

Notice the use of the `$APPDATA` variable. The value is injected at runtime, resolving to the [app data directory](path.md#appdatadir).
The available variables are:
[`$APPCONFIG`](path.md#appconfigdir), [`$APPDATA`](path.md#appdatadir), [`$APPLOCALDATA`](path.md#applocaldatadir),
[`$APPCACHE`](path.md#appcachedir), [`$APPLOG`](path.md#applogdir),
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

**Since**: 1.0.0

#### Enumeration Members

| Name | Type | Defined in |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="fs.BaseDirectory.App"><a href="#fs.BaseDirectory.App">`App`</a></div> | `18` | [fs.ts:98](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L98) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.AppCache"><a href="#fs.BaseDirectory.AppCache">`AppCache`</a></div> | `24` | [fs.ts:104](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L104) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.AppConfig"><a href="#fs.BaseDirectory.AppConfig">`AppConfig`</a></div> | `21` | [fs.ts:101](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L101) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.AppData"><a href="#fs.BaseDirectory.AppData">`AppData`</a></div> | `22` | [fs.ts:102](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L102) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.AppLocalData"><a href="#fs.BaseDirectory.AppLocalData">`AppLocalData`</a></div> | `23` | [fs.ts:103](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L103) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.AppLog"><a href="#fs.BaseDirectory.AppLog">`AppLog`</a></div> | `25` | [fs.ts:105](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L105) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Audio"><a href="#fs.BaseDirectory.Audio">`Audio`</a></div> | `1` | [fs.ts:81](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L81) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Cache"><a href="#fs.BaseDirectory.Cache">`Cache`</a></div> | `2` | [fs.ts:82](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L82) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Config"><a href="#fs.BaseDirectory.Config">`Config`</a></div> | `3` | [fs.ts:83](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L83) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Data"><a href="#fs.BaseDirectory.Data">`Data`</a></div> | `4` | [fs.ts:84](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L84) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Desktop"><a href="#fs.BaseDirectory.Desktop">`Desktop`</a></div> | `6` | [fs.ts:86](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L86) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Document"><a href="#fs.BaseDirectory.Document">`Document`</a></div> | `7` | [fs.ts:87](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L87) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Download"><a href="#fs.BaseDirectory.Download">`Download`</a></div> | `8` | [fs.ts:88](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L88) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Executable"><a href="#fs.BaseDirectory.Executable">`Executable`</a></div> | `9` | [fs.ts:89](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L89) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Font"><a href="#fs.BaseDirectory.Font">`Font`</a></div> | `10` | [fs.ts:90](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L90) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Home"><a href="#fs.BaseDirectory.Home">`Home`</a></div> | `11` | [fs.ts:91](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L91) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.LocalData"><a href="#fs.BaseDirectory.LocalData">`LocalData`</a></div> | `5` | [fs.ts:85](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L85) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Log"><a href="#fs.BaseDirectory.Log">`Log`</a></div> | `19` | [fs.ts:99](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L99) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Picture"><a href="#fs.BaseDirectory.Picture">`Picture`</a></div> | `12` | [fs.ts:92](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L92) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Public"><a href="#fs.BaseDirectory.Public">`Public`</a></div> | `13` | [fs.ts:93](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L93) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Resource"><a href="#fs.BaseDirectory.Resource">`Resource`</a></div> | `17` | [fs.ts:97](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L97) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Runtime"><a href="#fs.BaseDirectory.Runtime">`Runtime`</a></div> | `14` | [fs.ts:94](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L94) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Temp"><a href="#fs.BaseDirectory.Temp">`Temp`</a></div> | `20` | [fs.ts:100](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L100) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Template"><a href="#fs.BaseDirectory.Template">`Template`</a></div> | `15` | [fs.ts:95](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L95) |
| <div class="anchor-with-padding" id="fs.BaseDirectory.Video"><a href="#fs.BaseDirectory.Video">`Video`</a></div> | `16` | [fs.ts:96](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L96) |

## Interfaces

### `FileEntry`

**Since**: 1.0.0

#### Properties

##### `children`

> `Optional` **children**: [`FileEntry`](fs.md#fileentry)[]

Children of this entry if it's a directory; null otherwise

**Defined in:** [fs.ts:161](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L161)

##### `name`

> `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

**Defined in:** [fs.ts:159](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L159)

##### `path`

>  **path**: `string`

**Defined in:** [fs.ts:154](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L154)

### `FsBinaryFileOption`

Options object used to write a binary data to a file.

**Since**: 1.0.0

#### Properties

##### `contents`

>  **contents**: [`BinaryFileContents`](fs.md#binaryfilecontents)

The byte array contents.

**Defined in:** [fs.ts:147](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L147)

##### `path`

>  **path**: `string`

Path to the file to write.

**Defined in:** [fs.ts:145](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L145)

### `FsDirOptions`

**Since**: 1.0.0

#### Properties

##### `dir`

> `Optional` **dir**: [`BaseDirectory`](fs.md#basedirectory)

**Defined in:** [fs.ts:120](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L120)

##### `recursive`

> `Optional` **recursive**: `boolean`

**Defined in:** [fs.ts:121](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L121)

### `FsOptions`

**Since**: 1.0.0

#### Properties

##### `dir`

> `Optional` **dir**: [`BaseDirectory`](fs.md#basedirectory)

**Defined in:** [fs.ts:112](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L112)

### `FsTextFileOption`

Options object used to write a UTF-8 string to a file.

**Since**: 1.0.0

#### Properties

##### `contents`

>  **contents**: `string`

The UTF-8 string to write to the file.

**Defined in:** [fs.ts:133](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L133)

##### `path`

>  **path**: `string`

Path to the file to write.

**Defined in:** [fs.ts:131](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L131)

## Type Aliases

### `BinaryFileContents`

>  **BinaryFileContents**: `Iterable`<`number`\> \| `ArrayLike`<`number`\> \| [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

**Defined in:** [fs.ts:136](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/fs.ts#L136)

## Functions

### `copyFile`

> **copyFile**(`source`: `string`, `destination`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Copies a file to a destination.

**Example**

```typescript
import { copyFile, BaseDirectory } from '@tauri-apps/api/fs';
// Copy the `$APPCONFIG/app.conf` file to `$APPCONFIG/app.conf.bk`
await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.AppConfig });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `options` | [`FsOptions`](fs.md#fsoptions) |

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
// Create the `$APPDATA/users` directory
await createDir('users', { dir: BaseDirectory.AppData, recursive: true });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `options` | [`FsDirOptions`](fs.md#fsdiroptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `exists`

> **exists**(`path`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Check if a path exists.

**Example**

```typescript
import { exists, BaseDirectory } from '@tauri-apps/api/fs';
// Check if the `$APPDATA/avatar.png` file exists
await exists('avatar.png', { dir: BaseDirectory.AppData });
```

**Since**: 1.1.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | [`FsOptions`](fs.md#fsoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

### `readBinaryFile`

> **readBinaryFile**(`filePath`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

Reads a file as byte array.

**Example**

```typescript
import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Read the image file in the `$RESOURCEDIR/avatar.png` path
const contents = await readBinaryFile('avatar.png', { dir: BaseDirectory.Resource });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`FsOptions`](fs.md#fsoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

### `readDir`

> **readDir**(`dir`: `string`, `options?`: [`FsDirOptions`](fs.md#fsdiroptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FileEntry`](fs.md#fileentry)[]\>

List directory files.

**Example**

```typescript
import { readDir, BaseDirectory } from '@tauri-apps/api/fs';
// Reads the `$APPDATA/users` directory recursively
const entries = await readDir('users', { dir: BaseDirectory.AppData, recursive: true });

function processEntries(entries) {
  for (const entry of entries) {
    console.log(`Entry: ${entry.path}`);
    if (entry.children) {
      processEntries(entry.children)
    }
  }
}
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `options` | [`FsDirOptions`](fs.md#fsdiroptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`FileEntry`](fs.md#fileentry)[]\>

### `readTextFile`

> **readTextFile**(`filePath`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Reads a file as an UTF-8 encoded string.

**Example**

```typescript
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Read the text file in the `$APPCONFIG/app.conf` path
const contents = await readTextFile('app.conf', { dir: BaseDirectory.AppConfig });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `options` | [`FsOptions`](fs.md#fsoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `removeDir`

> **removeDir**(`dir`: `string`, `options?`: [`FsDirOptions`](fs.md#fsdiroptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Removes a directory.
If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.

**Example**

```typescript
import { removeDir, BaseDirectory } from '@tauri-apps/api/fs';
// Remove the directory `$APPDATA/users`
await removeDir('users', { dir: BaseDirectory.AppData });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `options` | [`FsDirOptions`](fs.md#fsdiroptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `removeFile`

> **removeFile**(`file`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Removes a file.

**Example**

```typescript
import { removeFile, BaseDirectory } from '@tauri-apps/api/fs';
// Remove the `$APPConfig/app.conf` file
await removeFile('app.conf', { dir: BaseDirectory.AppConfig });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`FsOptions`](fs.md#fsoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `renameFile`

> **renameFile**(`oldPath`: `string`, `newPath`: `string`, `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Renames a file.

**Example**

```typescript
import { renameFile, BaseDirectory } from '@tauri-apps/api/fs';
// Rename the `$APPDATA/avatar.png` file
await renameFile('avatar.png', 'deleted.png', { dir: BaseDirectory.AppData });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `oldPath` | `string` |
| `newPath` | `string` |
| `options` | [`FsOptions`](fs.md#fsoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `writeBinaryFile`

> **writeBinaryFile**(`path`: `string`, `contents`: [`BinaryFileContents`](fs.md#binaryfilecontents), `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes a byte array content to a file.

**Example**

```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a binary file to the `$APPDATA/avatar.png` path
await writeBinaryFile('avatar.png', new Uint8Array([]), { dir: BaseDirectory.AppData });
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | - |
| `contents` | [`BinaryFileContents`](fs.md#binaryfilecontents) | - |
| `options?` | [`FsOptions`](fs.md#fsoptions) | Configuration object. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

> **writeBinaryFile**(`file`: [`FsBinaryFileOption`](fs.md#fsbinaryfileoption), `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes a byte array content to a file.

**Example**

```typescript
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a binary file to the `$APPDATA/avatar.png` path
await writeBinaryFile({ path: 'avatar.png', contents: new Uint8Array([]) }, { dir: BaseDirectory.AppData });
```

**Since**: 1.0.0

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
// Write a text file to the `$APPCONFIG/app.conf` path
await writeTextFile('app.conf', 'file contents', { dir: BaseDirectory.AppConfig });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `contents` | `string` |
| `options?` | [`FsOptions`](fs.md#fsoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

> **writeTextFile**(`file`: [`FsTextFileOption`](fs.md#fstextfileoption), `options?`: [`FsOptions`](fs.md#fsoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes a UTF-8 text file.

**Example**

```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
// Write a text file to the `$APPCONFIG/app.conf` path
await writeTextFile({ path: 'app.conf', contents: 'file contents' }, { dir: BaseDirectory.AppConfig });
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `file` | [`FsTextFileOption`](fs.md#fstextfileoption) |
| `options?` | [`FsOptions`](fs.md#fsoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.
