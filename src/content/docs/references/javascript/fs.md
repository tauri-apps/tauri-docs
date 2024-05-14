---
title: '@tauri-apps/plugin-fs'
editUrl: false
sidebar:
  label: 'fs'
---

Access the file system.

## Security

This module prevents path traversal, not allowing absolute paths or parent dir components
(i.e. "/usr/path/to/file" or "../path/to/file" paths are not allowed).
Paths accessed with this API must be relative to one of the [base directories](/references/javascript/fs/#basedirectory)
so if you need access to arbitrary filesystem paths, you must write such logic on the core layer instead.

The API has a scope configuration that forces you to restrict the paths that can be accessed using glob patterns.

The scope configuration is an array of glob patterns describing folder paths that are allowed.
For instance, this scope configuration only allows accessing files on the
_databases_ folder of the [`$APPDATA` directory](https://beta.tauri.app/2/reference/js/core/namespacepath/#appdatadir):

```json
{
  "plugins": {
    "fs": {
      "scope": ["$APPDATA/databases/*"]
    }
  }
}
```

Notice the use of the `$APPDATA` variable. The value is injected at runtime, resolving to the [app data directory](https://beta.tauri.app/2/reference/js/core/namespacepath/#appdatadir).

The available variables are:
[`$APPCONFIG`](https://beta.tauri.app/2/reference/js/core/namespacepath/#appconfigdir),
[`$APPDATA`](https://beta.tauri.app/2/reference/js/core/namespacepath/#appdatadir),
[`$APPLOCALDATA`](https://beta.tauri.app/2/reference/js/core/namespacepath/#appLocaldatadir),
[`$APPCACHE`](https://beta.tauri.app/2/reference/js/core/namespacepath/#appcachedir),
[`$APPLOG`](https://beta.tauri.app/2/reference/js/core/namespacepath/#applogdir),
[`$AUDIO`](https://beta.tauri.app/2/reference/js/core/namespacepath/#audiodir),
[`$CACHE`](https://beta.tauri.app/2/reference/js/core/namespacepath/#cachedir),
[`$CONFIG`](https://beta.tauri.app/2/reference/js/core/namespacepath/#configdir),
[`$DATA`](https://beta.tauri.app/2/reference/js/core/namespacepath/#datadir),
[`$LOCALDATA`](https://beta.tauri.app/2/reference/js/core/namespacepath/#localdatadir),
[`$DESKTOP`](https://beta.tauri.app/2/reference/js/core/namespacepath/#desktopdir),
[`$DOCUMENT`](https://beta.tauri.app/2/reference/js/core/namespacepath/#documentdir),
[`$DOWNLOAD`](https://beta.tauri.app/2/reference/js/core/namespacepath/#downloaddir),
[`$EXE`](https://beta.tauri.app/2/reference/js/core/namespacepath/#executabledir),
[`$FONT`](https://beta.tauri.app/2/reference/js/core/namespacepath/#fontdir),
[`$HOME`](https://beta.tauri.app/2/reference/js/core/namespacepath/#homedir),
[`$PICTURE`](https://beta.tauri.app/2/reference/js/core/namespacepath/#picturedir),
[`$PUBLIC`](https://beta.tauri.app/2/reference/js/core/namespacepath/#publicdir),
[`$RUNTIME`](https://beta.tauri.app/2/reference/js/core/namespacepath/#runtimedir),
[`$TEMPLATE`](https://beta.tauri.app/2/reference/js/core/namespacepath/#templatedir),
[`$VIDEO`](https://beta.tauri.app/2/reference/js/core/namespacepath/#videodir),
[`$RESOURCE`](https://beta.tauri.app/2/reference/js/core/namespacepath/#resourcedir),
[`$TEMP`](https://beta.tauri.app/2/reference/js/core/namespacepath/#tempdir).

Trying to execute any API with a URL not configured on the scope results in a promise rejection due to denied access.

Note that this scope applies to **all** APIs on this module.

## Enumerations

### BaseDirectory

#### Since

2.0.0

#### Enumeration Members

##### AppCache

```ts
AppCache: 16;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:20](undefined)

---

##### AppConfig

```ts
AppConfig: 13;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:17](undefined)

---

##### AppData

```ts
AppData: 14;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:18](undefined)

---

##### AppLocalData

```ts
AppLocalData: 15;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:19](undefined)

---

##### AppLog

```ts
AppLog: 17;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:21](undefined)

---

##### Audio

```ts
Audio: 1;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:5](undefined)

---

##### Cache

```ts
Cache: 2;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:6](undefined)

---

##### Config

```ts
Config: 3;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:7](undefined)

---

##### Data

```ts
Data: 4;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:8](undefined)

---

##### Desktop

```ts
Desktop: 18;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:22](undefined)

---

##### Document

```ts
Document: 6;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:10](undefined)

---

##### Download

```ts
Download: 7;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:11](undefined)

---

##### Executable

```ts
Executable: 19;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:23](undefined)

---

##### Font

```ts
Font: 20;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:24](undefined)

---

##### Home

```ts
Home: 21;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:25](undefined)

---

##### LocalData

```ts
LocalData: 5;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:9](undefined)

---

##### Picture

```ts
Picture: 8;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:12](undefined)

---

##### Public

```ts
Public: 9;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:13](undefined)

---

##### Resource

```ts
Resource: 11;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:15](undefined)

---

##### Runtime

```ts
Runtime: 22;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:26](undefined)

---

##### Temp

```ts
Temp: 12;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:16](undefined)

---

##### Template

```ts
Template: 23;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:27](undefined)

---

##### Video

```ts
Video: 10;
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/path.d.ts:14](undefined)

---

### SeekMode

#### Enumeration Members

##### Current

```ts
Current: 1;
```

**Source**: [plugins/fs/guest-js/index.ts:69](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L69)

---

##### End

```ts
End: 2;
```

**Source**: [plugins/fs/guest-js/index.ts:70](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L70)

---

##### Start

```ts
Start: 0;
```

**Source**: [plugins/fs/guest-js/index.ts:68](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L68)

## Classes

### FileHandle

The Tauri abstraction for reading and writing files.

#### Since

2.0.0

#### Extends

- `Resource`

#### Constructors

##### constructor()

```ts
new FileHandle(rid): FileHandle
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `rid`     | `number` |

###### Returns

[`FileHandle`](/references/javascript/fs/#filehandle)

###### Overrides

Resource.constructor

**Source**: [plugins/fs/guest-js/index.ts:252](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L252)

#### Properties

| Property                                                   | Type  |
| :--------------------------------------------------------- | :---- |
| `private` <a id="#private" name="#private"></a> `#private` | `any` |

#### Accessors

##### rid

```ts
get rid(): number
```

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/core.d.ts:123](undefined)

###### Inherited from

Resource.rid

#### Methods

##### close()

```ts
close(): Promise< void >
```

Destroys and cleans up this resource from memory.
**You should not call any method on this object anymore and should drop any reference to it.**

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

Resource.close

**Source**: [node_modules/.pnpm/@tauri-apps+api@2.0.0-alpha.13/node_modules/@tauri-apps/api/core.d.ts:129](undefined)

---

##### read()

```ts
read(buffer): Promise< null | number >
```

Reads up to `p.byteLength` bytes into `p`. It resolves to the number of
bytes read (`0` < `n` <= `p.byteLength`) and rejects if any error
encountered. Even if `read()` resolves to `n` \< `p.byteLength`, it may
use all of `p` as scratch space during the call. If some data is
available but not `p.byteLength` bytes, `read()` conventionally resolves
to what is available instead of waiting for more.

When `read()` encounters end-of-file condition, it resolves to EOF
(`null`).

When `read()` encounters an error, it rejects with an error.

Callers should always process the `n` \> `0` bytes returned before
considering the EOF (`null`). Doing so correctly handles I/O errors that
happen after reading some bytes and also both of the allowed EOF
behaviors.

###### Example

```typescript
import { open, read, close, BaseDirectory } from '@tauri-apps/plugin-fs';
// if "$APP/foo/bar.txt" contains the text "hello world":
const file = await open('foo/bar.txt', { dir: BaseDirectory.App });
const buf = new Uint8Array(100);
const numberOfBytesRead = await file.read(buf); // 11 bytes
const text = new TextDecoder().decode(buf); // "hello world"
await close(file.rid);
```

###### Since

2.0.0

###### Parameters

| Parameter | Type                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------- |
| `buffer`  | [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| `number` \>

**Source**: [plugins/fs/guest-js/index.ts:287](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L287)

---

##### seek()

```ts
seek(offset, whence): Promise< number >
```

Seek sets the offset for the next `read()` or `write()` to offset,
interpreted according to `whence`: `Start` means relative to the
start of the file, `Current` means relative to the current offset,
and `End` means relative to the end. Seek resolves to the new offset
relative to the start of the file.

Seeking to an offset before the start of the file is an error. Seeking to
any positive offset is legal, but the behavior of subsequent I/O
operations on the underlying object is implementation-dependent.
It returns the number of cursor position.

###### Example

```typescript
import {
  open,
  seek,
  write,
  SeekMode,
  BaseDirectory,
} from '@tauri-apps/plugin-fs';

// Given hello.txt pointing to file with "Hello world", which is 11 bytes long:
const file = await open('hello.txt', {
  read: true,
  write: true,
  truncate: true,
  create: true,
  dir: BaseDirectory.App,
});
await file.write(new TextEncoder().encode('Hello world'), {
  dir: BaseDirectory.App,
});

// Seek 6 bytes from the start of the file
console.log(await file.seek(6, SeekMode.Start)); // "6"
// Seek 2 more bytes from the current position
console.log(await file.seek(2, SeekMode.Current)); // "8"
// Seek backwards 2 bytes from the end of the file
console.log(await file.seek(-2, SeekMode.End)); // "9" (e.g. 11-2)
```

###### Since

2.0.0

###### Parameters

| Parameter | Type                                              |
| :-------- | :------------------------------------------------ |
| `offset`  | `number`                                          |
| `whence`  | [`SeekMode`](/references/javascript/fs/#seekmode) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `number` \>

**Source**: [plugins/fs/guest-js/index.ts:332](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L332)

---

##### stat()

```ts
stat(): Promise< FileInfo >
```

Returns a [`FileInfo`](/references/javascript/fs/#fileinfo) for this file.

###### Example

```typescript
import { open, fstat, BaseDirectory } from '@tauri-apps/plugin-fs';
const file = await open('file.txt', { read: true, dir: BaseDirectory.App });
const fileInfo = await fstat(file.rid);
console.log(fileInfo.isFile); // true
```

###### Since

2.0.0

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`FileInfo`](/references/javascript/fs/#fileinfo) \>

**Source**: [plugins/fs/guest-js/index.ts:353](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L353)

---

##### truncate()

```ts
truncate(len?): Promise< void >
```

Truncates or extends this file, to reach the specified `len`.
If `len` is not specified then the entire file contents are truncated.

###### Example

```typescript
import {
  ftruncate,
  open,
  write,
  read,
  BaseDirectory,
} from '@tauri-apps/plugin-fs';

// truncate the entire file
const file = await open('my_file.txt', {
  read: true,
  write: true,
  create: true,
  dir: BaseDirectory.App,
});
await ftruncate(file.rid);

// truncate part of the file
const file = await open('my_file.txt', {
  read: true,
  write: true,
  create: true,
  dir: BaseDirectory.App,
});
await write(file.rid, new TextEncoder().encode('Hello World'));
await ftruncate(file.rid, 7);
const data = new Uint8Array(32);
await read(file.rid, data);
console.log(new TextDecoder().decode(data)); // Hello W
```

###### Since

2.0.0

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `len`?    | `number` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:384](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L384)

---

##### write()

```ts
write(data): Promise< number >
```

Writes `p.byteLength` bytes from `p` to the underlying data stream. It
resolves to the number of bytes written from `p` (`0` <= `n` <=
`p.byteLength`) or reject with the error encountered that caused the
write to stop early. `write()` must reject with a non-null error if
would resolve to `n` < `p.byteLength`. `write()` must not modify the
slice data, even temporarily.

###### Example

```typescript
import { open, write, close, BaseDirectory } from '@tauri-apps/plugin-fs';
const encoder = new TextEncoder();
const data = encoder.encode('Hello world');
const file = await open('bar.txt', { write: true, dir: BaseDirectory.App });
const bytesWritten = await write(file.rid, data); // 11
await close(file.rid);
```

###### Since

2.0.0

###### Parameters

| Parameter | Type                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------- |
| `data`    | [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `number` \>

**Source**: [plugins/fs/guest-js/index.ts:411](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L411)

## Interfaces

### CopyFileOptions

#### Since

2.0.0

#### Properties

| Property                                                               | Type                                                        | Description                    |
| :--------------------------------------------------------------------- | :---------------------------------------------------------- | :----------------------------- |
| <a id="frompathbasedir" name="frompathbasedir"></a> `fromPathBaseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `fromPath`. |
| <a id="topathbasedir" name="topathbasedir"></a> `toPathBaseDir`?       | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `toPath`.   |

---

### CreateOptions

#### Since

2.0.0

#### Properties

| Property                                       | Type                                                        | Description               |
| :--------------------------------------------- | :---------------------------------------------------------- | :------------------------ |
| <a id="basedir" name="basedir"></a> `baseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path` |

---

### DebouncedWatchOptions

#### Since

2.0.0

#### Extends

- [`WatchOptions`](/references/javascript/fs/#watchoptions)

#### Properties

| Property                                             | Type                                                        | Description                   |
| :--------------------------------------------------- | :---------------------------------------------------------- | :---------------------------- |
| <a id="basedir" name="basedir"></a> `baseDir`?       | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`     |
| <a id="delayms" name="delayms"></a> `delayMs`?       | `number`                                                    | Debounce delay                |
| <a id="recursive" name="recursive"></a> `recursive`? | `boolean`                                                   | Watch a directory recursively |

---

### DirEntry

A disk entry which is either a file, a directory or a symlink.

This is the result of the [`readDir`](/references/javascript/fs/#readdir).

#### Since

2.0.0

#### Properties

| Property                                                  | Type      | Description                                                         |
| :-------------------------------------------------------- | :-------- | :------------------------------------------------------------------ |
| <a id="isdirectory" name="isdirectory"></a> `isDirectory` | `boolean` | Specifies whether this entry is a directory or not.                 |
| <a id="isfile" name="isfile"></a> `isFile`                | `boolean` | Specifies whether this entry is a file or not.                      |
| <a id="issymlink" name="issymlink"></a> `isSymlink`       | `boolean` | Specifies whether this entry is a symlink or not.                   |
| <a id="name" name="name"></a> `name`                      | `string`  | The name of the entry (file name with extension or directory name). |

---

### ExistsOptions

#### Since

2.0.0

#### Properties

| Property                                       | Type                                                        | Description                |
| :--------------------------------------------- | :---------------------------------------------------------- | :------------------------- |
| <a id="basedir" name="basedir"></a> `baseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`. |

---

### FileInfo

A FileInfo describes a file and is returned by `stat`, `lstat` or `fstat`.

#### Since

2.0.0

#### Properties

| Property                                                           | Type                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                      |
| :----------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="atime" name="atime"></a> `atime`                            | `null` \| [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | The last access time of the file. This corresponds to the `atime`<br />field from `stat` on Unix and `ftLastAccessTime` on Windows. This may not<br />be available on all platforms.                                                                                                                                                                                             |
| <a id="birthtime" name="birthtime"></a> `birthtime`                | `null` \| [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | The creation time of the file. This corresponds to the `birthtime`<br />field from `stat` on Mac/BSD and `ftCreationTime` on Windows. This may<br />not be available on all platforms.                                                                                                                                                                                           |
| <a id="blksize" name="blksize"></a> `blksize`                      | `null` \| `number`                                                                                  | Blocksize for filesystem I/O.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                                                           |
| <a id="blocks" name="blocks"></a> `blocks`                         | `null` \| `number`                                                                                  | Number of blocks allocated to the file, in 512-byte units.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                              |
| <a id="dev" name="dev"></a> `dev`                                  | `null` \| `number`                                                                                  | ID of the device containing the file.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                                                   |
| <a id="fileattributes" name="fileattributes"></a> `fileAttributes` | `null` \| `number`                                                                                  | This field contains the file system attribute information for a file<br />or directory. For possible values and their descriptions, see<br />[File Attribute Constants](https://docs.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants) in the Windows Dev Center<br /><br />#### Platform-specific<br /><br />- **macOS / Linux / Android / iOS:** Unsupported. |
| <a id="gid" name="gid"></a> `gid`                                  | `null` \| `number`                                                                                  | Group ID of the owner of this file.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                                                     |
| <a id="ino" name="ino"></a> `ino`                                  | `null` \| `number`                                                                                  | Inode number.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                                                                           |
| <a id="isdirectory" name="isdirectory"></a> `isDirectory`          | `boolean`                                                                                           | True if this is info for a regular directory. Mutually exclusive to<br />`FileInfo.isFile` and `FileInfo.isSymlink`.                                                                                                                                                                                                                                                             |
| <a id="isfile" name="isfile"></a> `isFile`                         | `boolean`                                                                                           | True if this is info for a regular file. Mutually exclusive to<br />`FileInfo.isDirectory` and `FileInfo.isSymlink`.                                                                                                                                                                                                                                                             |
| <a id="issymlink" name="issymlink"></a> `isSymlink`                | `boolean`                                                                                           | True if this is info for a symlink. Mutually exclusive to<br />`FileInfo.isFile` and `FileInfo.isDirectory`.                                                                                                                                                                                                                                                                     |
| <a id="mode" name="mode"></a> `mode`                               | `null` \| `number`                                                                                  | The underlying raw `st_mode` bits that contain the standard Unix<br />permissions for this file/directory.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                              |
| <a id="mtime" name="mtime"></a> `mtime`                            | `null` \| [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | The last modification time of the file. This corresponds to the `mtime`<br />field from `stat` on Linux/Mac OS and `ftLastWriteTime` on Windows. This<br />may not be available on all platforms.                                                                                                                                                                                |
| <a id="nlink" name="nlink"></a> `nlink`                            | `null` \| `number`                                                                                  | Number of hard links pointing to this file.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                                             |
| <a id="rdev" name="rdev"></a> `rdev`                               | `null` \| `number`                                                                                  | Device ID of this file.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                                                                 |
| <a id="readonly" name="readonly"></a> `readonly`                   | `boolean`                                                                                           | Whether this is a readonly (unwritable) file.                                                                                                                                                                                                                                                                                                                                    |
| <a id="size" name="size"></a> `size`                               | `number`                                                                                            | The size of the file, in bytes.                                                                                                                                                                                                                                                                                                                                                  |
| <a id="uid" name="uid"></a> `uid`                                  | `null` \| `number`                                                                                  | User ID of the owner of this file.<br /><br />#### Platform-specific<br /><br />- **Windows:** Unsupported.                                                                                                                                                                                                                                                                      |

---

### MkdirOptions

#### Since

2.0.0

#### Properties

| Property                                             | Type                                                        | Description                                                                                                                                 |
| :--------------------------------------------------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="basedir" name="basedir"></a> `baseDir`?       | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`                                                                                                                   |
| <a id="mode" name="mode"></a> `mode`?                | `number`                                                    | Permissions to use when creating the directory (defaults to `0o777`, before the process's umask). Ignored on Windows.                       |
| <a id="recursive" name="recursive"></a> `recursive`? | `boolean`                                                   | Defaults to `false`. If set to `true`, means that any intermediate directories will also be created (as with the shell command `mkdir -p`). |

---

### OpenOptions

#### Since

2.0.0

#### Properties

| Property                                             | Type                                                        | Description                                                                                                                                                                                                                                                               |
| :--------------------------------------------------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="append" name="append"></a> `append`?          | `boolean`                                                   | Sets the option for the append mode. This option, when `true`, means that<br />writes will append to a file instead of overwriting previous contents.<br />Note that setting `{ write: true, append: true }` has the same effect as<br />setting only `{ append: true }`. |
| <a id="basedir" name="basedir"></a> `baseDir`?       | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`                                                                                                                                                                                                                                                 |
| <a id="create" name="create"></a> `create`?          | `boolean`                                                   | Sets the option to allow creating a new file, if one doesn't already<br />exist at the specified path. Requires write or append access to be<br />used.                                                                                                                   |
| <a id="createnew" name="createnew"></a> `createNew`? | `boolean`                                                   | Defaults to `false`. If set to `true`, no file, directory, or symlink is<br />allowed to exist at the target location. Requires write or append<br />access to be used. When createNew is set to `true`, create and truncate<br />are ignored.                            |
| <a id="mode" name="mode"></a> `mode`?                | `number`                                                    | Permissions to use if creating the file (defaults to `0o666`, before<br />the process's umask).<br />Ignored on Windows.                                                                                                                                                  |
| <a id="read" name="read"></a> `read`?                | `boolean`                                                   | Sets the option for read access. This option, when `true`, means that the<br />file should be read-able if opened.                                                                                                                                                        |
| <a id="truncate" name="truncate"></a> `truncate`?    | `boolean`                                                   | Sets the option for truncating a previous file. If a file is<br />successfully opened with this option set it will truncate the file to `0`<br />size if it already exists. The file must be opened with write access<br />for truncate to work.                          |
| <a id="write" name="write"></a> `write`?             | `boolean`                                                   | Sets the option for write access. This option, when `true`, means that<br />the file should be write-able if opened. If the file already exists,<br />any write calls on it will overwrite its contents, by default without<br />truncating it.                           |

---

### ReadDirOptions

#### Since

2.0.0

#### Properties

| Property                                       | Type                                                        | Description               |
| :--------------------------------------------- | :---------------------------------------------------------- | :------------------------ |
| <a id="basedir" name="basedir"></a> `baseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path` |

---

### ReadFileOptions

#### Since

2.0.0

#### Properties

| Property                                       | Type                                                        | Description               |
| :--------------------------------------------- | :---------------------------------------------------------- | :------------------------ |
| <a id="basedir" name="basedir"></a> `baseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path` |

---

### RemoveOptions

#### Since

2.0.0

#### Properties

| Property                                             | Type                                                        | Description                                                                                     |
| :--------------------------------------------------- | :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| <a id="basedir" name="basedir"></a> `baseDir`?       | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`                                                                       |
| <a id="recursive" name="recursive"></a> `recursive`? | `boolean`                                                   | Defaults to `false`. If set to `true`, path will be removed even if it's a non-empty directory. |

---

### RenameOptions

#### Since

2.0.0

#### Properties

| Property                                                            | Type                                                        | Description                   |
| :------------------------------------------------------------------ | :---------------------------------------------------------- | :---------------------------- |
| <a id="newpathbasedir" name="newpathbasedir"></a> `newPathBaseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `newPath`. |
| <a id="oldpathbasedir" name="oldpathbasedir"></a> `oldPathBaseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `oldPath`. |

---

### StatOptions

#### Since

2.0.0

#### Properties

| Property                                       | Type                                                        | Description                |
| :--------------------------------------------- | :---------------------------------------------------------- | :------------------------- |
| <a id="basedir" name="basedir"></a> `baseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`. |

---

### TruncateOptions

#### Since

2.0.0

#### Properties

| Property                                       | Type                                                        | Description                |
| :--------------------------------------------- | :---------------------------------------------------------- | :------------------------- |
| <a id="basedir" name="basedir"></a> `baseDir`? | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`. |

---

### WatchOptions

#### Since

2.0.0

#### Extended By

- [`DebouncedWatchOptions`](/references/javascript/fs/#debouncedwatchoptions)

#### Properties

| Property                                             | Type                                                        | Description                   |
| :--------------------------------------------------- | :---------------------------------------------------------- | :---------------------------- |
| <a id="basedir" name="basedir"></a> `baseDir`?       | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`     |
| <a id="recursive" name="recursive"></a> `recursive`? | `boolean`                                                   | Watch a directory recursively |

---

### WriteFileOptions

#### Since

2.0.0

#### Properties

| Property                                             | Type                                                        | Description                                                                                                            |
| :--------------------------------------------------- | :---------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| <a id="append" name="append"></a> `append`?          | `boolean`                                                   | Defaults to `false`. If set to `true`, will append to a file instead of overwriting previous contents.                 |
| <a id="basedir" name="basedir"></a> `baseDir`?       | [`BaseDirectory`](/references/javascript/fs/#basedirectory) | Base directory for `path`                                                                                              |
| <a id="create" name="create"></a> `create`?          | `boolean`                                                   | Sets the option to allow creating a new file, if one doesn't already exist at the specified path (defaults to `true`). |
| <a id="createnew" name="createnew"></a> `createNew`? | `boolean`                                                   | Sets the option to create a new file, failing if it already exists.                                                    |
| <a id="mode" name="mode"></a> `mode`?                | `number`                                                    | File permissions. Ignored on Windows.                                                                                  |

## Type Aliases

### UnwatchFn

```ts
UnwatchFn: () => void
```

#### Since

2.0.0

#### Returns

`void`

**Source**: [plugins/fs/guest-js/index.ts:1168](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1168)

---

### WatchEvent

```ts
WatchEvent: object;
```

#### Since

2.0.0

#### Type declaration

| Member                                  | Type                                                          |
| :-------------------------------------- | :------------------------------------------------------------ |
| <a id="attrs" name="attrs"></a> `attrs` | `unknown`                                                     |
| <a id="paths" name="paths"></a> `paths` | `string`[]                                                    |
| <a id="type" name="type"></a> `type`    | [`WatchEventKind`](/references/javascript/fs/#watcheventkind) |

**Source**: [plugins/fs/guest-js/index.ts:1101](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1101)

---

### WatchEventKind

```ts
WatchEventKind: "any" | {access: WatchEventKindAccess;} | {create: WatchEventKindCreate;} | {modify: WatchEventKindModify;} | {remove: WatchEventKindRemove;} | "other"
```

#### Since

2.0.0

**Source**: [plugins/fs/guest-js/index.ts:1110](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1110)

---

### WatchEventKindAccess

```ts
WatchEventKindAccess: {kind: "any";} | {kind: "close"; mode: "any" | "execute" | "read" | "write" | "other";} | {kind: "open"; mode: "any" | "execute" | "read" | "write" | "other";} | {kind: "other";}
```

#### Since

2.0.0

**Source**: [plugins/fs/guest-js/index.ts:1121](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1121)

---

### WatchEventKindCreate

```ts
WatchEventKindCreate: {kind: "any";} | {kind: "file";} | {kind: "folder";} | {kind: "other";}
```

#### Since

2.0.0

**Source**: [plugins/fs/guest-js/index.ts:1130](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1130)

---

### WatchEventKindModify

```ts
WatchEventKindModify: {kind: "any";} | {kind: "data"; mode: "any" | "size" | "content" | "other";} | {kind: "metadata"; mode: "any" | "access-time" | "write-time" | "permissions" | "ownership" | "extended" | "other";} | {kind: "name"; mode: "any" | "to" | "from" | "both" | "other";} | {kind: "other";}
```

#### Since

2.0.0

**Source**: [plugins/fs/guest-js/index.ts:1139](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1139)

---

### WatchEventKindRemove

```ts
WatchEventKindRemove: {kind: "any";} | {kind: "file";} | {kind: "folder";} | {kind: "other";}
```

#### Since

2.0.0

**Source**: [plugins/fs/guest-js/index.ts:1159](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1159)

## Functions

### copyFile()

```ts
copyFile(
  fromPath,
  toPath,
  options?): Promise< void >
```

Copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting.

#### Example

```typescript
import { copyFile, BaseDirectory } from '@tauri-apps/plugin-fs';
await copyFile('app.conf', 'app.conf.bk', { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `fromPath` | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `toPath`   | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`CopyFileOptions`](/references/javascript/fs/#copyfileoptions)     |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:560](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L560)

---

### create()

```ts
create(path, options?): Promise< FileHandle >
```

Creates a file if none exists or truncates an existing file and resolves to
an instance of [`FileHandle`](/references/javascript/fs/#filehandle).

#### Example

```typescript
import { create, BaseDirectory } from '@tauri-apps/plugin-fs';
const file = await create('foo/bar.txt', { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`CreateOptions`](/references/javascript/fs/#createoptions)         |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`FileHandle`](/references/javascript/fs/#filehandle) \>

**Source**: [plugins/fs/guest-js/index.ts:439](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L439)

---

### exists()

```ts
exists(path, options?): Promise< boolean >
```

Check if a path exists.

#### Example

```typescript
import { exists, BaseDirectory } from '@tauri-apps/plugin-fs';
// Check if the `$APPDATA/avatar.png` file exists
await exists('avatar.png', { dir: BaseDirectory.AppData });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`ExistsOptions`](/references/javascript/fs/#existsoptions)         |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [plugins/fs/guest-js/index.ts:1066](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1066)

---

### lstat()

```ts
lstat(path, options?): Promise< FileInfo >
```

Resolves to a [`FileInfo`](/references/javascript/fs/#fileinfo) for the specified `path`. If `path` is a
symlink, information for the symlink will be returned instead of what it
points to.

#### Example

```typescript
import { lstat, BaseDirectory } from '@tauri-apps/plugin-fs';
const fileInfo = await lstat('hello.txt', { dir: BaseDirectory.App });
console.log(fileInfo.isFile); // true
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`StatOptions`](/references/javascript/fs/#statoptions)             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`FileInfo`](/references/javascript/fs/#fileinfo) \>

**Source**: [plugins/fs/guest-js/index.ts:919](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L919)

---

### mkdir()

```ts
mkdir(path, options?): Promise< void >
```

Creates a new directory with the specified path.

#### Example

```typescript
import { mkdir, BaseDirectory } from '@tauri-apps/plugin-fs';
await mkdir('users', { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`MkdirOptions`](/references/javascript/fs/#mkdiroptions)           |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:603](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L603)

---

### open()

```ts
open(path, options?): Promise< FileHandle >
```

Open a file and resolve to an instance of [`FileHandle`](/references/javascript/fs/#filehandle). The
file does not need to previously exist if using the `create` or `createNew`
open options. It is the callers responsibility to close the file when finished
with it.

#### Example

```typescript
import { open, BaseDirectory } from '@tauri-apps/plugin-fs';
const file = await open('foo/bar.txt', {
  read: true,
  write: true,
  dir: BaseDirectory.App,
});
// Do work with file
await close(file.rid);
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`OpenOptions`](/references/javascript/fs/#openoptions)             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`FileHandle`](/references/javascript/fs/#filehandle) \>

**Source**: [plugins/fs/guest-js/index.ts:524](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L524)

---

### readDir()

```ts
readDir(path, options?): Promise< DirEntry[] >
```

Reads the directory given by path and returns an array of `DirEntry`.

#### Example

```typescript
import { readDir, BaseDirectory } from '@tauri-apps/plugin-fs';
const dir = 'users';
const entries = await readDir('users', { dir: BaseDirectory.App });
processEntriesRecursive(dir, entries);
async function processEntriesRecursive(parent, entries) {
  for (const entry of entries) {
    console.log(`Entry: ${entry.name}`);
    if (entry.isDirectory) {
      const dir = parent + entry.name;
      processEntriesRecursive(
        dir,
        await readDir(dir, { dir: BaseDirectory.App })
      );
    }
  }
}
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`ReadDirOptions`](/references/javascript/fs/#readdiroptions)       |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`DirEntry`](/references/javascript/fs/#direntry)[] \>

**Source**: [plugins/fs/guest-js/index.ts:664](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L664)

---

### readFile()

```ts
readFile(path, options?): Promise< Uint8Array >
```

Reads and resolves to the entire contents of a file as an array of bytes.
TextDecoder can be used to transform the bytes to string if required.

#### Example

```typescript
import { readFile, BaseDirectory } from '@tauri-apps/plugin-fs';
const contents = await readFile('avatar.png', { dir: BaseDirectory.Resource });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`ReadFileOptions`](/references/javascript/fs/#readfileoptions)     |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \>

**Source**: [plugins/fs/guest-js/index.ts:697](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L697)

---

### readTextFile()

```ts
readTextFile(path, options?): Promise< string >
```

Reads and returns the entire contents of a file as UTF-8 string.

#### Example

```typescript
import { readTextFile, BaseDirectory } from '@tauri-apps/plugin-fs';
const contents = await readTextFile('app.conf', { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`ReadFileOptions`](/references/javascript/fs/#readfileoptions)     |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [plugins/fs/guest-js/index.ts:723](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L723)

---

### readTextFileLines()

```ts
readTextFileLines(path, options?): Promise< AsyncIterableIterator< string > >
```

Returns an async AsyncIterableIterator over the lines of a file as UTF-8 string.

#### Example

```typescript
import { readTextFileLines, BaseDirectory } from '@tauri-apps/plugin-fs';
const lines = await readTextFileLines('app.conf', { dir: BaseDirectory.App });
for await (const line of lines) {
  console.log(line);
}
```

You could also call AsyncIterableIterator.next to advance the
iterator so you can lazily read the next line whenever you want.

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`ReadFileOptions`](/references/javascript/fs/#readfileoptions)     |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `AsyncIterableIterator`\< `string` \> \>

**Source**: [plugins/fs/guest-js/index.ts:752](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L752)

---

### remove()

```ts
remove(path, options?): Promise< void >
```

Removes the named file or directory.
If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.

#### Example

```typescript
import { remove, BaseDirectory } from '@tauri-apps/plugin-fs';
await remove('users/file.txt', { dir: BaseDirectory.App });
await remove('users', { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`RemoveOptions`](/references/javascript/fs/#removeoptions)         |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:814](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L814)

---

### rename()

```ts
rename(
  oldPath,
  newPath,
  options): Promise< void >
```

Renames (moves) oldpath to newpath. Paths may be files or directories.
If newpath already exists and is not a directory, rename() replaces it.
OS-specific restrictions may apply when oldpath and newpath are in different directories.

On Unix, this operation does not follow symlinks at either path.

#### Example

```typescript
import { rename, BaseDirectory } from '@tauri-apps/plugin-fs';
await rename('avatar.png', 'deleted.png', { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter | Type                                                                |
| :-------- | :------------------------------------------------------------------ |
| `oldPath` | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `newPath` | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options` | [`RenameOptions`](/references/javascript/fs/#renameoptions)         |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:853](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L853)

---

### stat()

```ts
stat(path, options?): Promise< FileInfo >
```

Resolves to a [`FileInfo`](/references/javascript/fs/#fileinfo) for the specified `path`. Will always
follow symlinks but will reject if the symlink points to a path outside of the scope.

#### Example

```typescript
import { stat, BaseDirectory } from '@tauri-apps/plugin-fs';
const fileInfo = await stat('hello.txt', { dir: BaseDirectory.App });
console.log(fileInfo.isFile); // true
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `options`? | [`StatOptions`](/references/javascript/fs/#statoptions)             |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`FileInfo`](/references/javascript/fs/#fileinfo) \>

**Source**: [plugins/fs/guest-js/index.ts:893](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L893)

---

### truncate()

```ts
truncate(
  path,
  len?,
  options?): Promise< void >
```

Truncates or extends the specified file, to reach the specified `len`.
If `len` is `0` or not specified, then the entire file contents are truncated.

#### Example

```typescript
import {
  truncate,
  readFile,
  writeFile,
  BaseDirectory,
} from '@tauri-apps/plugin-fs';
// truncate the entire file
await truncate('my_file.txt', 0, { dir: BaseDirectory.App });

// truncate part of the file
let file = 'file.txt';
await writeFile(file, new TextEncoder().encode('Hello World'), {
  dir: BaseDirectory.App,
});
await truncate(file, 7);
const data = await readFile(file, { dir: BaseDirectory.App });
console.log(new TextDecoder().decode(data)); // "Hello W"
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `len`?     | `number`                                                            |
| `options`? | [`TruncateOptions`](/references/javascript/fs/#truncateoptions)     |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:959](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L959)

---

### watch()

```ts
watch(
  paths,
  cb,
  options?): Promise< UnwatchFn >
```

Watch changes (after a delay) on files or directories.

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `paths`    | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) \| `string`[] \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)[] |
| `cb`       | (`event`) => `void`                                                                                                                            |
| `options`? | [`DebouncedWatchOptions`](/references/javascript/fs/#debouncedwatchoptions)                                                                    |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnwatchFn`](/references/javascript/fs/#unwatchfn) \>

**Source**: [plugins/fs/guest-js/index.ts:1179](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1179)

---

### watchImmediate()

```ts
watchImmediate(
  paths,
  cb,
  options?): Promise< UnwatchFn >
```

Watch changes on files or directories.

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `paths`    | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) \| `string`[] \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)[] |
| `cb`       | (`event`) => `void`                                                                                                                            |
| `options`? | [`WatchOptions`](/references/javascript/fs/#watchoptions)                                                                                      |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnwatchFn`](/references/javascript/fs/#unwatchfn) \>

**Source**: [plugins/fs/guest-js/index.ts:1217](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1217)

---

### writeFile()

```ts
writeFile(
  path,
  data,
  options?): Promise< void >
```

Write `data` to the given `path`, by default creating a new file if needed, else overwriting.

#### Example

```typescript
import { writeFile, BaseDirectory } from '@tauri-apps/plugin-fs';

let encoder = new TextEncoder();
let data = encoder.encode('Hello World');
await writeFile('file.txt', data, { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)                                   |
| `data`     | [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) |
| `options`? | [`WriteFileOptions`](/references/javascript/fs/#writefileoptions)                                     |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:1004](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1004)

---

### writeTextFile()

```ts
writeTextFile(
  path,
  data,
  options?): Promise< void >
```

Writes UTF-8 string `data` to the given `path`, by default creating a new file if needed, else overwriting.

#### Example

```typescript
import { writeTextFile, BaseDirectory } from '@tauri-apps/plugin-fs';

await writeTextFile('file.txt', 'Hello world', { dir: BaseDirectory.App });
```

#### Since

2.0.0

#### Parameters

| Parameter  | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `path`     | `string` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL) |
| `data`     | `string`                                                            |
| `options`? | [`WriteFileOptions`](/references/javascript/fs/#writefileoptions)   |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [plugins/fs/guest-js/index.ts:1031](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/fs/guest-js/index.ts#L1031)
