---
title: "Module: path"
sidebar_label: "path"
custom_edit_url: null
hide_title: true
---

# Module: path

## Functions

### appDir

▸ **appDir**(): *Promise*<string\>

Returns the path to the suggested directory for your app config files.
Resolves to `${configDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value configured on `tauri.conf.json > tauri > bundle > identifier`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:19](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L19)

___

### audioDir

▸ **audioDir**(): *Promise*<string\>

Returns the path to the user's audio directory.
# Linux
Resolves to `$XDG_MUSIC_DIR`.
# macOS
Resolves to `$HOME/Music`.
# Windows
Resolves to `{FOLDERID_Music}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:41](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L41)

___

### cacheDir

▸ **cacheDir**(): *Promise*<string\>

Returns the path to the user's cache directory.
# Linux
Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
# macOS
Resolves to `$HOME/Library/Caches`.
# Windows
Resolves to `{FOLDERID_LocalAppData}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:63](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L63)

___

### configDir

▸ **configDir**(): *Promise*<string\>

Returns the path to the user's config directory.
# Linux
Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
# macOS
Resolves to `$HOME/Library/Application Support`.
# Windows
Resolves to `{FOLDERID_LocalAppData}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:85](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L85)

___

### currentDir

▸ **currentDir**(): *Promise*<string\>

Returns the path to the current working directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:403](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L403)

___

### dataDir

▸ **dataDir**(): *Promise*<string\>

Returns the path to the user's data directory.
# Linux
Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
# macOS
Resolves to `$HOME/Library/Application Support`.
# Windows
Resolves to `{FOLDERID_RoamingAppData}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:107](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L107)

___

### desktopDir

▸ **desktopDir**(): *Promise*<string\>

Returns the path to the user's desktop directory.
# Linux
Resolves to `$XDG_DESKTOP_DIR`.
# macOS
Resolves to `$HOME/Library/Desktop`.
# Windows
Resolves to `{FOLDERID_Desktop}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:129](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L129)

___

### documentDir

▸ **documentDir**(): *Promise*<string\>

Returns the path to the user's document directory.
# Linux
Resolves to `$XDG_DOCUMENTS_DIR`.
# macOS
Resolves to `$HOME/Documents`.
# Windows
Resolves to `{FOLDERID_Documents}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:151](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L151)

___

### downloadDir

▸ **downloadDir**(): *Promise*<string\>

Returns the path to the user's download directory.
# Linux
Resolves to `$XDG_DOWNLOAD_DIR`.
# macOS
Resolves to `$HOME/Downloads`.
# Windows
Resolves to `{FOLDERID_Downloads}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:173](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L173)

___

### executableDir

▸ **executableDir**(): *Promise*<string\>

Returns the path to the user's executable directory.
# Linux
Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
# macOS
Not supported.
# Windows
Not supported.

**Returns:** *Promise*<string\>

Defined in: [path.ts:195](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L195)

___

### fontDir

▸ **fontDir**(): *Promise*<string\>

Returns the path to the user's font directory.
# Linux
Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
# macOS
Resolves to `$HOME/Library/Fonts`.
# Windows
Not supported.

**Returns:** *Promise*<string\>

Defined in: [path.ts:217](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L217)

___

### homeDir

▸ **homeDir**(): *Promise*<string\>

Returns the path to the user's home directory.
# Linux
Resolves to `$HOME`.
# macOS
Resolves to `$HOME`.
# Windows
Resolves to `{FOLDERID_Profile}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:239](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L239)

___

### localDataDir

▸ **localDataDir**(): *Promise*<string\>

Returns the path to the user's local data directory.
# Linux
Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
# macOS
Resolves to `$HOME/Library/Application Support`.
# Windows
Resolves to `{FOLDERID_LocalAppData}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:261](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L261)

___

### pictureDir

▸ **pictureDir**(): *Promise*<string\>

Returns the path to the user's picture directory.
# Linux
Resolves to `$XDG_PICTURES_DIR`.
# macOS
Resolves to `$HOME/Pictures`.
# Windows
Resolves to `{FOLDERID_Pictures}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:283](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L283)

___

### publicDir

▸ **publicDir**(): *Promise*<string\>

Returns the path to the user's public directory.
# Linux
Resolves to `$XDG_PUBLICSHARE_DIR`.
# macOS
Resolves to `$HOME/Public`.
# Windows
Resolves to `{FOLDERID_Public}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:305](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L305)

___

### resolvePath

▸ **resolvePath**(`path`: *string*, `directory`: [*BaseDirectory*](../enums/fs.basedirectory.md)): *Promise*<string\>

Resolves the path with the optional base directory.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | *string* | A path to resolve   |
`directory` | [*BaseDirectory*](../enums/fs.basedirectory.md) | A base directory to use when resolving the given path   |

**Returns:** *Promise*<string\>

A path resolved to the given base directory.

Defined in: [path.ts:421](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L421)

___

### resourceDir

▸ **resourceDir**(): *Promise*<string\>

Returns the path to the user's resource directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:321](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L321)

___

### runtimeDir

▸ **runtimeDir**(): *Promise*<string\>

Returns the path to the user's runtime directory.
# Linux
Resolves to `$XDG_RUNTIME_DIR`.
# macOS
Not supported.
# Windows
Not supported.

**Returns:** *Promise*<string\>

Defined in: [path.ts:343](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L343)

___

### templateDir

▸ **templateDir**(): *Promise*<string\>

Returns the path to the user's template directory.
# Linux
Resolves to `$XDG_TEMPLATES_DIR`.
# macOS
Not supported.
# Windows
Resolves to `{FOLDERID_Templates}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:365](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L365)

___

### videoDir

▸ **videoDir**(): *Promise*<string\>

Returns the path to the user's video directory.
# Linux
Resolves to `$XDG_VIDEOS_DIR`.
# macOS
Resolves to `$HOME/Movies`.
# Windows
Resolves to `{FOLDERID_Videos}`.

**Returns:** *Promise*<string\>

Defined in: [path.ts:387](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/path.ts#L387)
