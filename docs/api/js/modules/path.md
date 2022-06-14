[@tauri-apps/api](../README.md) / path

# Module: path

The path module provides utilities for working with file and directory paths.

This package is also accessible with `window.__TAURI__.path` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "path": {
        "all": true, // enable all Path APIs
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## References

### BaseDirectory

Re-exports [BaseDirectory](../enums/fs.BaseDirectory.md)

## Variables

### delimiter

• `Const` **delimiter**: ``";"`` \| ``":"``

Provides the platform-specific path segment delimiter:
- `;` on Windows
- `:` on POSIX

#### Defined in

[path.ts:568](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L568)

___

### sep

• `Const` **sep**: ``"\\"`` \| ``"/"``

Provides the platform-specific path segment separator:
- `\` on Windows
- `/` on POSIX

#### Defined in

[path.ts:561](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L561)

## Functions

### appDir

▸ **appDir**(): `Promise`<`string`\>

Returns the path to the suggested directory for your app config files.
Resolves to `${configDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value configured on `tauri.conf.json > tauri > bundle > identifier`.

**`example`**
```typescript
import { appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:41](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L41)

___

### audioDir

▸ **audioDir**(): `Promise`<`string`\>

Returns the path to the user's audio directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_MUSIC_DIR`.
- **macOS:** Resolves to `$HOME/Music`.
- **Windows:** Resolves to `{FOLDERID_Music}`.

**`example`**
```typescript
import { audioDir } from '@tauri-apps/api/path';
const audioDirPath = await audioDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:68](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L68)

___

### basename

▸ **basename**(`path`, `ext?`): `Promise`<`string`\>

Returns the last portion of a `path`. Trailing directory separators are ignored.

**`example`**
```typescript
import { basename, resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('app.conf');
const base = await basename(resourcePath);
assert(base === 'app');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | - |
| `ext?` | `string` | An optional file extension to be removed from the returned path. |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:682](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L682)

___

### cacheDir

▸ **cacheDir**(): `Promise`<`string`\>

Returns the path to the user's cache directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
- **macOS:** Resolves to `$HOME/Library/Caches`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

**`example`**
```typescript
import { cacheDir } from '@tauri-apps/api/path';
const cacheDirPath = await cacheDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:95](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L95)

___

### configDir

▸ **configDir**(): `Promise`<`string`\>

Returns the path to the user's config directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

**`example`**
```typescript
import { configDir } from '@tauri-apps/api/path';
const configDirPath = await configDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:122](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L122)

___

### dataDir

▸ **dataDir**(): `Promise`<`string`\>

Returns the path to the user's data directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.

**`example`**
```typescript
import { dataDir } from '@tauri-apps/api/path';
const dataDirPath = await dataDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:149](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L149)

___

### desktopDir

▸ **desktopDir**(): `Promise`<`string`\>

Returns the path to the user's desktop directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DESKTOP_DIR`.
- **macOS:** Resolves to `$HOME/Library/Desktop`.
- **Windows:** Resolves to `{FOLDERID_Desktop}`.

**`example`**
```typescript
import { desktopDir } from '@tauri-apps/api/path';
const desktopPath = await desktopDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:176](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L176)

___

### dirname

▸ **dirname**(`path`): `Promise`<`string`\>

Returns the directory name of a `path`. Trailing directory separators are ignored.

**`example`**
```typescript
import { dirname, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const dir = await dirname(appDirPath);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:640](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L640)

___

### documentDir

▸ **documentDir**(): `Promise`<`string`\>

Returns the path to the user's document directory.

**`example`**
```typescript
import { documentDir } from '@tauri-apps/api/path';
const documentDirPath = await documentDir();
```

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOCUMENTS_DIR`.
- **macOS:** Resolves to `$HOME/Documents`.
- **Windows:** Resolves to `{FOLDERID_Documents}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:203](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L203)

___

### downloadDir

▸ **downloadDir**(): `Promise`<`string`\>

Returns the path to the user's download directory.

#### Platform-specific

- **Linux**: Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOWNLOAD_DIR`.
- **macOS**: Resolves to `$HOME/Downloads`.
- **Windows**: Resolves to `{FOLDERID_Downloads}`.

**`example`**
```typescript
import { downloadDir } from '@tauri-apps/api/path';
const downloadDirPath = await downloadDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:230](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L230)

___

### executableDir

▸ **executableDir**(): `Promise`<`string`\>

Returns the path to the user's executable directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
- **macOS:** Not supported.
- **Windows:** Not supported.

**`example`**
```typescript
import { executableDir } from '@tauri-apps/api/path';
const executableDirPath = await executableDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:257](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L257)

___

### extname

▸ **extname**(`path`): `Promise`<`string`\>

Returns the extension of the `path`.

**`example`**
```typescript
import { extname, resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('app.conf');
const ext = await extname(resourcePath);
assert(ext === 'conf');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:660](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L660)

___

### fontDir

▸ **fontDir**(): `Promise`<`string`\>

Returns the path to the user's font directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
- **macOS:** Resolves to `$HOME/Library/Fonts`.
- **Windows:** Not supported.

**`example`**
```typescript
import { fontDir } from '@tauri-apps/api/path';
const fontDirPath = await fontDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:284](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L284)

___

### homeDir

▸ **homeDir**(): `Promise`<`string`\>

Returns the path to the user's home directory.

#### Platform-specific

- **Linux:** Resolves to `$HOME`.
- **macOS:** Resolves to `$HOME`.
- **Windows:** Resolves to `{FOLDERID_Profile}`.

**`example`**
```typescript
import { homeDir } from '@tauri-apps/api/path';
const homeDirPath = await homeDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:311](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L311)

___

### isAbsolute

▸ **isAbsolute**(`path`): `Promise`<`boolean`\>

Returns whether the path is absolute or not.

**`example`**
```typescript
import { isAbsolute } from '@tauri-apps/api/path';
assert(await ibsolute('/home/tauri'));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[path.ts:701](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L701)

___

### join

▸ **join**(...`paths`): `Promise`<`string`\>

 Joins all given `path` segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

**`example`**
```typescript
import { join, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const path = await join(appDirPath, 'users', 'tauri', 'avatar.png');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | A sequence of path segments. |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:621](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L621)

___

### localDataDir

▸ **localDataDir**(): `Promise`<`string`\>

Returns the path to the user's local data directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

**`example`**
```typescript
import { localDataDir } from '@tauri-apps/api/path';
const localDataDirPath = await localDataDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:338](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L338)

___

### logDir

▸ **logDir**(): `Promise`<`string`\>

Returns the path to the suggested log directory.

### Platform-specific

- **Linux:** Resolves to `${configDir}/${bundleIdentifier}`.
- **macOS:** Resolves to `${homeDir}//Library/Logs/{bundleIdentifier}`
- **Windows:** Resolves to `${configDir}/${bundleIdentifier}`.

**`example`**
```typescript
import { logDir } from '@tauri-apps/api/path';
const logDirPath = await logDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:545](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L545)

___

### normalize

▸ **normalize**(`path`): `Promise`<`string`\>

Normalizes the given `path`, resolving `'..'` and `'.'` segments and resolve symolic links.

**`example`**
```typescript
import { normalize, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const path = await normalize(appDirPath, '..', 'users', 'tauri', 'avatar.png');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:600](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L600)

___

### pictureDir

▸ **pictureDir**(): `Promise`<`string`\>

Returns the path to the user's picture directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PICTURES_DIR`.
- **macOS:** Resolves to `$HOME/Pictures`.
- **Windows:** Resolves to `{FOLDERID_Pictures}`.

**`example`**
```typescript
import { pictureDir } from '@tauri-apps/api/path';
const pictureDirPath = await pictureDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:365](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L365)

___

### publicDir

▸ **publicDir**(): `Promise`<`string`\>

Returns the path to the user's public directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PUBLICSHARE_DIR`.
- **macOS:** Resolves to `$HOME/Public`.
- **Windows:** Resolves to `{FOLDERID_Public}`.

**`example`**
```typescript
import { publicDir } from '@tauri-apps/api/path';
const publicDirPath = await publicDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:392](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L392)

___

### resolve

▸ **resolve**(...`paths`): `Promise`<`string`\>

Resolves a sequence of `paths` or `path` segments into an absolute path.

**`example`**
```typescript
import { resolve, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const path = await resolve(appDirPath, '..', 'users', 'tauri', 'avatar.png');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | A sequence of paths or path segments. |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:581](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L581)

___

### resolveResource

▸ **resolveResource**(`resourcePath`): `Promise`<`string`\>

Resolve the path to a resource file.

**`example`**
```typescript
import { resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('script.sh');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourcePath` | `string` | The path to the resource. Must follow the same syntax as defined in `tauri.conf.json > tauri > bundle > resources`, i.e. keeping subfolders and parent dir components (`../`). |

#### Returns

`Promise`<`string`\>

The full path to the resource.

#### Defined in

[path.ts:437](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L437)

___

### resourceDir

▸ **resourceDir**(): `Promise`<`string`\>

Returns the path to the application's resource directory.
To resolve a resource path, see the [`resolveResource API`](path.md#resolveresource).

**`example`**
```typescript
import { resourceDir } from '@tauri-apps/api/path';
const resourceDirPath = await resourceDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:414](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L414)

___

### runtimeDir

▸ **runtimeDir**(): `Promise`<`string`\>

Returns the path to the user's runtime directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_RUNTIME_DIR`.
- **macOS:** Not supported.
- **Windows:** Not supported.

**`example`**
```typescript
import { runtimeDir } from '@tauri-apps/api/path';
const runtimeDirPath = await runtimeDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:464](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L464)

___

### templateDir

▸ **templateDir**(): `Promise`<`string`\>

Returns the path to the user's template directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_TEMPLATES_DIR`.
- **macOS:** Not supported.
- **Windows:** Resolves to `{FOLDERID_Templates}`.

**`example`**
```typescript
import { templateDir } from '@tauri-apps/api/path';
const templateDirPath = await templateDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:491](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L491)

___

### videoDir

▸ **videoDir**(): `Promise`<`string`\>

Returns the path to the user's video directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_VIDEOS_DIR`.
- **macOS:** Resolves to `$HOME/Movies`.
- **Windows:** Resolves to `{FOLDERID_Videos}`.

**`example`**
```typescript
import { videoDir } from '@tauri-apps/api/path';
const videoDirPath = await videoDir();
```

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:518](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/path.ts#L518)
