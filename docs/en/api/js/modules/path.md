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

**Returns:** *Promise*<string\>

Defined in: [path.ts:13](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L13)

___

### audioDir

▸ **audioDir**(): *Promise*<string\>

Returns the path to the user's audio directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:29](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L29)

___

### cacheDir

▸ **cacheDir**(): *Promise*<string\>

Returns the path to the user's cache directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:45](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L45)

___

### configDir

▸ **configDir**(): *Promise*<string\>

Returns the path to the user's config directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:61](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L61)

___

### currentDir

▸ **currentDir**(): *Promise*<string\>

Returns the path to the current working directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:301](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L301)

___

### dataDir

▸ **dataDir**(): *Promise*<string\>

Returns the path to the user's data directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:77](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L77)

___

### desktopDir

▸ **desktopDir**(): *Promise*<string\>

Returns the path to the user's desktop directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:93](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L93)

___

### documentDir

▸ **documentDir**(): *Promise*<string\>

Returns the path to the user's document directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:109](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L109)

___

### downloadDir

▸ **downloadDir**(): *Promise*<string\>

Returns the path to the user's download directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:125](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L125)

___

### executableDir

▸ **executableDir**(): *Promise*<string\>

Returns the path to the user's executable directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:141](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L141)

___

### fontDir

▸ **fontDir**(): *Promise*<string\>

Returns the path to the user's font directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:157](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L157)

___

### homeDir

▸ **homeDir**(): *Promise*<string\>

Returns the path to the user's home directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:173](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L173)

___

### localDataDir

▸ **localDataDir**(): *Promise*<string\>

Returns the path to the user's local data directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:189](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L189)

___

### pictureDir

▸ **pictureDir**(): *Promise*<string\>

Returns the path to the user's picture directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:205](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L205)

___

### publicDir

▸ **publicDir**(): *Promise*<string\>

Returns the path to the user's public directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:221](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L221)

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

Defined in: [path.ts:319](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L319)

___

### resourceDir

▸ **resourceDir**(): *Promise*<string\>

Returns the path to the user's resource directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:237](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L237)

___

### runtimeDir

▸ **runtimeDir**(): *Promise*<string\>

Returns the path to the user's runtime directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:253](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L253)

___

### templateDir

▸ **templateDir**(): *Promise*<string\>

Returns the path to the user's template directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:269](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L269)

___

### videoDir

▸ **videoDir**(): *Promise*<string\>

Returns the path to the user's video directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:285](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/path.ts#L285)
