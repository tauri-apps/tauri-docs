---
title: "Module: fs"
sidebar_label: "fs"
custom_edit_url: null
hide_title: true
---

# Module: fs

Access the file system.

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

Copys a file to a destination.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`source` | *string* | - | A path of the file to copy.   |
`destination` | *string* | - | A path for the destination file.   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [fs.ts:274](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L274)

___

### createDir

▸ **createDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<void\>

Creates a directory.
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, the promise will be rejected.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | Path to the directory to create.   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [fs.ts:230](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L230)

___

### readBinaryFile

▸ **readBinaryFile**(`filePath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<number[]\>

Reads a file as byte array.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`filePath` | *string* | - | Path to the file.   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<number[]\>

A promise resolving to the file bytes array.

Defined in: [fs.ts:92](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L92)

___

### readDir

▸ **readDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<[*FileEntry*](../interfaces/fs.fileentry.md)[]\>

List directory files.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | Path to the directory to read.   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<[*FileEntry*](../interfaces/fs.fileentry.md)[]\>

A promise resolving to the directory entries.

Defined in: [fs.ts:207](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L207)

___

### readTextFile

▸ **readTextFile**(`filePath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<string\>

Reads a file as UTF-8 encoded string.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`filePath` | *string* | - | Path to the file.   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<string\>

A promise resolving to the file content as a UTF-8 encoded string.

Defined in: [fs.ts:71](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L71)

___

### removeDir

▸ **removeDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<void\>

Removes a directory.
If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | Path to the directory to remove.   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [fs.ts:252](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L252)

___

### removeFile

▸ **removeFile**(`file`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Removes a file.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`file` | *string* | - | Path to the file to remove.   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [fs.ts:297](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L297)

___

### renameFile

▸ **renameFile**(`oldPath`: *string*, `newPath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Renames a file.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`oldPath` | *string* | - | A path of the file to rename.   |
`newPath` | *string* | - | A path of the new file name.   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [fs.ts:319](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L319)

___

### writeBinaryFile

▸ **writeBinaryFile**(`file`: [*FsBinaryFileOption*](../interfaces/fs.fsbinaryfileoption.md), `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Writes a binary file.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`file` | [*FsBinaryFileOption*](../interfaces/fs.fsbinaryfileoption.md) | - | Write configuration object.   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [fs.ts:178](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L178)

___

### writeFile

▸ **writeFile**(`file`: [*FsTextFileOption*](../interfaces/fs.fstextfileoption.md), `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Writes a text file.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`file` | [*FsTextFileOption*](../interfaces/fs.fstextfileoption.md) | - | File configuration object.   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | Configuration object.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [fs.ts:113](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/fs.ts#L113)
