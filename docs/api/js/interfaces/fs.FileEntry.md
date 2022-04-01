[@tauri-apps/api](../README.md) / [fs](../modules/fs.md) / FileEntry

# Interface: FileEntry

[fs](../modules/fs.md).FileEntry

## Properties

### children

• `Optional` **children**: [`FileEntry`](fs.FileEntry.md)[]

Children of this entry if it's a directory; null otherwise

#### Defined in

[fs.ts:130](https://github.com/tauri-apps/tauri/blob/4541eaf/tooling/api/src/fs.ts#L130)

___

### name

• `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

#### Defined in

[fs.ts:128](https://github.com/tauri-apps/tauri/blob/4541eaf/tooling/api/src/fs.ts#L128)

___

### path

• **path**: `string`

#### Defined in

[fs.ts:123](https://github.com/tauri-apps/tauri/blob/4541eaf/tooling/api/src/fs.ts#L123)
