# path

The path module provides utilities for working with file and directory paths.

This package is also accessible with `window.__TAURI__.path` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.path`](https://tauri.app/v1/api/config/#allowlistconfig.path) in `tauri.conf.json`:
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

### `BaseDirectory`

Re-exports [BaseDirectory](fs.md#basedirectory)

## Variables

### `delimiter`

> `Const` **delimiter**: `";"` \| `":"`

Provides the platform-specific path segment delimiter:
- `;` on Windows
- `:` on POSIX

**Since**

1.0.0

**Defined in:** [path.ts:574](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/path.ts#L574)

### `sep`

> `Const` **sep**: `"\\"` \| `"/"`

Provides the platform-specific path segment separator:
- `\` on Windows
- `/` on POSIX

**Since**

1.0.0

**Defined in:** [path.ts:565](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/path.ts#L565)

## Functions

### `appDir`

> **appDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the suggested directory for your app config files.
Resolves to `${configDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value [`tauri.bundle.identifier`](https://tauri.app/v1/api/config/#bundleconfig.identifier) is configured in `tauri.conf.json`.

**Example**

```typescript
import { appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `audioDir`

> **audioDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's audio directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_MUSIC_DIR`.
- **macOS:** Resolves to `$HOME/Music`.
- **Windows:** Resolves to `{FOLDERID_Music}`.

**Example**

```typescript
import { audioDir } from '@tauri-apps/api/path';
const audioDirPath = await audioDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `basename`

> **basename**(`path`: `string`, `ext?`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the last portion of a `path`. Trailing directory separators are ignored.

**Example**

```typescript
import { basename, resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('app.conf');
const base = await basename(resourcePath);
assert(base === 'app');
```

**Since**

1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | - |
| `ext?` | `string` | An optional file extension to be removed from the returned path. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `cacheDir`

> **cacheDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's cache directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
- **macOS:** Resolves to `$HOME/Library/Caches`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

**Example**

```typescript
import { cacheDir } from '@tauri-apps/api/path';
const cacheDirPath = await cacheDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `configDir`

> **configDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's config directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.

**Example**

```typescript
import { configDir } from '@tauri-apps/api/path';
const configDirPath = await configDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `dataDir`

> **dataDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's data directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.

**Example**

```typescript
import { dataDir } from '@tauri-apps/api/path';
const dataDirPath = await dataDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `desktopDir`

> **desktopDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's desktop directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DESKTOP_DIR`.
- **macOS:** Resolves to `$HOME/Library/Desktop`.
- **Windows:** Resolves to `{FOLDERID_Desktop}`.

**Example**

```typescript
import { desktopDir } from '@tauri-apps/api/path';
const desktopPath = await desktopDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `dirname`

> **dirname**(`path`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the directory name of a `path`. Trailing directory separators are ignored.

**Example**

```typescript
import { dirname, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const dir = await dirname(appDirPath);
```

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `path` | `string` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `documentDir`

> **documentDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's document directory.

**Example**

```typescript
import { documentDir } from '@tauri-apps/api/path';
const documentDirPath = await documentDir();
```

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOCUMENTS_DIR`.
- **macOS:** Resolves to `$HOME/Documents`.
- **Windows:** Resolves to `{FOLDERID_Documents}`.

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `downloadDir`

> **downloadDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's download directory.

#### Platform-specific

- **Linux**: Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOWNLOAD_DIR`.
- **macOS**: Resolves to `$HOME/Downloads`.
- **Windows**: Resolves to `{FOLDERID_Downloads}`.

**Example**

```typescript
import { downloadDir } from '@tauri-apps/api/path';
const downloadDirPath = await downloadDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `executableDir`

> **executableDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's executable directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
- **macOS:** Not supported.
- **Windows:** Not supported.

**Example**

```typescript
import { executableDir } from '@tauri-apps/api/path';
const executableDirPath = await executableDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `extname`

> **extname**(`path`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the extension of the `path`.

**Example**

```typescript
import { extname, resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('app.conf');
const ext = await extname(resourcePath);
assert(ext === 'conf');
```

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `path` | `string` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `fontDir`

> **fontDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's font directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
- **macOS:** Resolves to `$HOME/Library/Fonts`.
- **Windows:** Not supported.

**Example**

```typescript
import { fontDir } from '@tauri-apps/api/path';
const fontDirPath = await fontDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `homeDir`

> **homeDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's home directory.

#### Platform-specific

- **Linux:** Resolves to `$HOME`.
- **macOS:** Resolves to `$HOME`.
- **Windows:** Resolves to `{FOLDERID_Profile}`.

**Example**

```typescript
import { homeDir } from '@tauri-apps/api/path';
const homeDirPath = await homeDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `isAbsolute`

> **isAbsolute**(`path`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Returns whether the path is absolute or not.

**Example**

```typescript
import { isAbsolute } from '@tauri-apps/api/path';
assert(await isAbsolute('/home/tauri'));
```

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `path` | `string` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

### `join`

> **join**(...`paths`: `string`[]): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Joins all given `path` segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

**Example**

```typescript
import { join, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const path = await join(appDirPath, 'users', 'tauri', 'avatar.png');
```

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `localDataDir`

> **localDataDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's local data directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

**Example**

```typescript
import { localDataDir } from '@tauri-apps/api/path';
const localDataDirPath = await localDataDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `logDir`

> **logDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the suggested log directory.

#### Platform-specific

- **Linux:** Resolves to `${configDir}/${bundleIdentifier}`.
- **macOS:** Resolves to `${homeDir}//Library/Logs/{bundleIdentifier}`
- **Windows:** Resolves to `${configDir}/${bundleIdentifier}`.

**Example**

```typescript
import { logDir } from '@tauri-apps/api/path';
const logDirPath = await logDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `normalize`

> **normalize**(`path`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Normalizes the given `path`, resolving `'..'` and `'.'` segments and resolve symbolic links.

**Example**

```typescript
import { normalize, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const path = await normalize(appDirPath, '..', 'users', 'tauri', 'avatar.png');
```

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `path` | `string` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `pictureDir`

> **pictureDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's picture directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PICTURES_DIR`.
- **macOS:** Resolves to `$HOME/Pictures`.
- **Windows:** Resolves to `{FOLDERID_Pictures}`.

**Example**

```typescript
import { pictureDir } from '@tauri-apps/api/path';
const pictureDirPath = await pictureDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `publicDir`

> **publicDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's public directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PUBLICSHARE_DIR`.
- **macOS:** Resolves to `$HOME/Public`.
- **Windows:** Resolves to `{FOLDERID_Public}`.

**Example**

```typescript
import { publicDir } from '@tauri-apps/api/path';
const publicDirPath = await publicDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `resolve`

> **resolve**(...`paths`: `string`[]): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Resolves a sequence of `paths` or `path` segments into an absolute path.

**Example**

```typescript
import { resolve, appDir } from '@tauri-apps/api/path';
const appDirPath = await appDir();
const path = await resolve(appDirPath, '..', 'users', 'tauri', 'avatar.png');
```

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `resolveResource`

> **resolveResource**(`resourcePath`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Resolve the path to a resource file.

**Example**

```typescript
import { resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('script.sh');
```

**Since**

1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourcePath` | `string` | The path to the resource.<br/>Must follow the same syntax as defined in `tauri.conf.json > tauri > bundle > resources`, i.e. keeping subfolders and parent dir components (`../`). |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

The full path to the resource.

### `resourceDir`

> **resourceDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the application's resource directory.
To resolve a resource path, see the [[resolveResource | `resolveResource API`]].

**Example**

```typescript
import { resourceDir } from '@tauri-apps/api/path';
const resourceDirPath = await resourceDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `runtimeDir`

> **runtimeDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's runtime directory.

#### Platform-specific

- **Linux:** Resolves to `$XDG_RUNTIME_DIR`.
- **macOS:** Not supported.
- **Windows:** Not supported.

**Example**

```typescript
import { runtimeDir } from '@tauri-apps/api/path';
const runtimeDirPath = await runtimeDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `templateDir`

> **templateDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's template directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_TEMPLATES_DIR`.
- **macOS:** Not supported.
- **Windows:** Resolves to `{FOLDERID_Templates}`.

**Example**

```typescript
import { templateDir } from '@tauri-apps/api/path';
const templateDirPath = await templateDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `videoDir`

> **videoDir**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Returns the path to the user's video directory.

#### Platform-specific

- **Linux:** Resolves to [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_VIDEOS_DIR`.
- **macOS:** Resolves to `$HOME/Movies`.
- **Windows:** Resolves to `{FOLDERID_Videos}`.

**Example**

```typescript
import { videoDir } from '@tauri-apps/api/path';
const videoDirPath = await videoDir();
```

**Since**

1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>
