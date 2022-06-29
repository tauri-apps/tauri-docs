[@tauri-apps/api](../README.md) / [fs](../modules/fs.md) / FileEntry

# Interface: FileEntry

[fs](../modules/fs.md).FileEntry

## Properties

### children

• `Optional` **children**: [`FileEntry`](fs.FileEntry.md)[]

Children of this entry if it's a directory; null otherwise

#### Defined in

[fs.ts:133](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/fs.ts#L133)

___

### name

• `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

#### Defined in

[fs.ts:131](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/fs.ts#L131)

___

### path

• **path**: `string`

#### Defined in

[fs.ts:126](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/fs.ts#L126)
