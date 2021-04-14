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

Copys a file to a destination.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`source` | *string* | - | A path of the file to copy   |
`destination` | *string* | - | A path for the destination file   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:266](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L266)

___

### createDir

▸ **createDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<void\>

Creates a directory.
If one of the path's parent components doesn't exist
and the `recursive` option isn't set to true, it will be rejected.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | Path to the directory to create   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | {} | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:222](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L222)

___

### readBinaryFile

▸ **readBinaryFile**(`filePath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<number[]\>

Reads a file as binary.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`filePath` | *string* | - | Path to the file   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | - |

**Returns:** *Promise*<number[]\>

A promise resolving to an array of the file bytes.

Defined in: [fs.ts:87](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L87)

___

### readDir

▸ **readDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<[*FileEntry*](../interfaces/fs.fileentry.md)[]\>

List directory files.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | Path to the directory to read   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | {} | - |

**Returns:** *Promise*<[*FileEntry*](../interfaces/fs.fileentry.md)[]\>

Defined in: [fs.ts:199](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L199)

___

### readTextFile

▸ **readTextFile**(`filePath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<string\>

Reads a file as text.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`filePath` | *string* | - | Path to the file   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | - |

**Returns:** *Promise*<string\>

A promise resolving to a string of the file content.

Defined in: [fs.ts:66](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L66)

___

### removeDir

▸ **removeDir**(`dir`: *string*, `options?`: [*FsDirOptions*](../interfaces/fs.fsdiroptions.md)): *Promise*<void\>

Removes a directory.
If the directory is not empty and the `recursive` option isn't set to true, it will be rejected.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`dir` | *string* | - | Path to the directory to remove   |
`options` | [*FsDirOptions*](../interfaces/fs.fsdiroptions.md) | {} | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:244](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L244)

___

### removeFile

▸ **removeFile**(`file`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Removes a file.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`file` | *string* | - | Path to the file to remove   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:289](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L289)

___

### renameFile

▸ **renameFile**(`oldPath`: *string*, `newPath`: *string*, `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Renames a file

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`oldPath` | *string* | - | A path of the file to rename   |
`newPath` | *string* | - | A path of the new file name   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:311](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L311)

___

### writeBinaryFile

▸ **writeBinaryFile**(`file`: [*FsBinaryFileOption*](../interfaces/fs.fsbinaryfileoption.md), `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Writes a binary file

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`file` | [*FsBinaryFileOption*](../interfaces/fs.fsbinaryfileoption.md) | - | File configuration object   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:170](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L170)

___

### writeFile

▸ **writeFile**(`file`: [*FsTextFileOption*](../interfaces/fs.fstextfileoption.md), `options?`: [*FsOptions*](../interfaces/fs.fsoptions.md)): *Promise*<void\>

Writes a text file.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`file` | [*FsTextFileOption*](../interfaces/fs.fstextfileoption.md) | - | File configuration object   |
`options` | [*FsOptions*](../interfaces/fs.fsoptions.md) | {} | - |

**Returns:** *Promise*<void\>

Defined in: [fs.ts:108](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L108)
