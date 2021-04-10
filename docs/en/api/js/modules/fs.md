---
title: "Module: fs"
sidebar_label: "fs"
custom_edit_url: null
hide_title: true
---

# Module: fs

## Table of contents

### Enumerations

- [BaseDirectory](../enums/fs.basedirectory.md)

### Interfaces

- [FileEntry](../interfaces/fs.fileentry.md)
- [FsBinaryFileOption](../interfaces/fs.fsbinaryfileoption.md)
- [FsDirOptions](../interfaces/fs.fsdiroptions.md)
- [FsOptions](../interfaces/fs.fsoptions.md)
- [FsTextFileOption](../interfaces/fs.fstextfileoption.md)

## References

### Dir

Renames and exports: [BaseDirectory](../enums/fs.basedirectory.md)

## Functions

### copyFile

▸ **copyFile**(`source`: *string*, `destination`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Copy file

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:275](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L275)

___

### createDir

▸ **createDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<void\>

Creates a directory
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, it will be rejected

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dir` | *string* | path to the directory to create   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:228](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L228)

___

### readBinaryFile

▸ **readBinaryFile**(`filePath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<number[]\>

**`name`** readBinaryFile

**`description`** Reads a file as binary

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filePath` | *string* | path to the file   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | - |

**Returns:** *Promise*<number[]\>

Defined in: [fs.ts:83](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L83)

___

### readDir

▸ **readDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<[*FileEntry*](../interfaces/fs.fileentry.md)[]\>

list directory files

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dir` | *string* | path to the directory to read   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | - |

**Returns:** *Promise*<[*FileEntry*](../interfaces/fs.fileentry.md)[]\>

Defined in: [fs.ts:203](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L203)

___

### readTextFile

▸ **readTextFile**(`filePath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<string\>

**`name`** readTextFile

**`description`** Reads a file as text

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filePath` | *string* | path to the file   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | - |

**Returns:** *Promise*<string\>

Defined in: [fs.ts:61](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L61)

___

### removeDir

▸ **removeDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<void\>

Removes a directory
If the directory is not empty and the `recursive` option isn't set to true, it will be rejected

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dir` | *string* | path to the directory to remove   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:252](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L252)

___

### removeFile

▸ **removeFile**(`file`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Removes a file

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`file` | *string* | path to the file to remove   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:299](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L299)

___

### renameFile

▸ **renameFile**(`oldPath`: *string*, `newPath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Renames a file

#### Parameters:

Name | Type |
:------ | :------ |
`oldPath` | *string* |
`newPath` | *string* |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:322](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L322)

___

### writeBinaryFile

▸ **writeBinaryFile**(`file`: [*FsBinaryFileOption*](../interfaces/fs.fsbinaryfileoption.md), `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

writes a binary file

#### Parameters:

Name | Type |
:------ | :------ |
`file` | [*FsBinaryFileOption*](../interfaces/fs.fsbinaryfileoption.md) |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:172](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L172)

___

### writeFile

▸ **writeFile**(`file`: [*FsTextFileOption*](../interfaces/fs.fstextfileoption.md), `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

writes a text file

#### Parameters:

Name | Type |
:------ | :------ |
`file` | [*FsTextFileOption*](../interfaces/fs.fstextfileoption.md) |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:107](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/fs.ts#L107)
