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

**`name`** appDir

**`description`** Returns the path to the suggested directory for your app config files.

**Returns:** *Promise*<string\>

Defined in: [path.ts:9](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L9)

___

### audioDir

▸ **audioDir**(): *Promise*<string\>

**`name`** audioDir

**`description`** Returns the path to the user's audio directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:25](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L25)

___

### cacheDir

▸ **cacheDir**(): *Promise*<string\>

**`name`** cacheDir

**`description`** Returns the path to the user's cache directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:41](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L41)

___

### configDir

▸ **configDir**(): *Promise*<string\>

**`name`** configDir

**`description`** Returns the path to the user's config directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:57](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L57)

___

### currentDir

▸ **currentDir**(): *Promise*<string\>

**`name`** currentDir

**`descriptionreturns`** Returns the path to the current working dir.

**Returns:** *Promise*<string\>

Defined in: [path.ts:297](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L297)

___

### dataDir

▸ **dataDir**(): *Promise*<string\>

**`name`** dataDir

**`description`** Returns the path to the user's data directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:73](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L73)

___

### desktopDir

▸ **desktopDir**(): *Promise*<string\>

**`name`** desktopDir

**`description`** Returns the path to the user's desktop directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:89](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L89)

___

### documentDir

▸ **documentDir**(): *Promise*<string\>

**`name`** documentDir

**`description`** Returns the path to the user's document directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:105](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L105)

___

### downloadDir

▸ **downloadDir**(): *Promise*<string\>

**`name`** downloadDir

**`description`** Returns the path to the user's download directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:121](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L121)

___

### executableDir

▸ **executableDir**(): *Promise*<string\>

**`name`** executableDir

**`description`** Returns the path to the user's executable directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:137](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L137)

___

### fontDir

▸ **fontDir**(): *Promise*<string\>

**`name`** fontDir

**`description`** Returns the path to the user's font directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:153](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L153)

___

### homeDir

▸ **homeDir**(): *Promise*<string\>

**`name`** homeDir

**`description`** Returns the path to the user's home directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:169](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L169)

___

### localDataDir

▸ **localDataDir**(): *Promise*<string\>

**`name`** localDataDir

**`description`** Returns the path to the user's local data directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:185](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L185)

___

### pictureDir

▸ **pictureDir**(): *Promise*<string\>

**`name`** pictureDir

**`description`** Returns the path to the user's picture directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:201](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L201)

___

### publicDir

▸ **publicDir**(): *Promise*<string\>

**`name`** publicDir

**`description`** Returns the path to the user's public directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:217](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L217)

___

### resolvePath

▸ **resolvePath**(`path`: *string*, `directory`: [*BaseDirectory*](../enums/fs.basedirectory.md)): *Promise*<string\>

**`name`** resolvePath

**`descriptionreturns`** Resolves the path with the optional base directory.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |
`directory` | [*BaseDirectory*](../enums/fs.basedirectory.md) |

**Returns:** *Promise*<string\>

Defined in: [path.ts:313](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L313)

___

### resourceDir

▸ **resourceDir**(): *Promise*<string\>

**`name`** resourceDir

**`description`** Returns the path to the user's resource directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:233](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L233)

___

### runtimeDir

▸ **runtimeDir**(): *Promise*<string\>

**`name`** runtimeDir

**`descriptionreturns`** Returns the path to the user's runtime directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:249](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L249)

___

### templateDir

▸ **templateDir**(): *Promise*<string\>

**`name`** templateDir

**`descriptionreturns`** Returns the path to the user's template directory.

**Returns:** *Promise*<string\>

Defined in: [path.ts:265](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L265)

___

### videoDir

▸ **videoDir**(): *Promise*<string\>

**`name`** videoDir

**`descriptionreturns`** Returns the path to the user's video dir.

**Returns:** *Promise*<string\>

Defined in: [path.ts:281](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/path.ts#L281)
