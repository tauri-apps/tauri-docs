[@tauri-apps/api](../index.md) / [fs](../modules/fs.md) / FileEntry

# Interface: FileEntry

[fs](../modules/fs.md).FileEntry

## Properties

### children

• `Optional` **children**: [`FileEntry`](fs.FileEntry.md)[]

Children of this entry if it's a directory; null otherwise

#### Defined in

[fs.ts:91](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/fs.ts#L91)

___

### name

• `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

#### Defined in

[fs.ts:89](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/fs.ts#L89)

___

### path

• **path**: `string`

#### Defined in

[fs.ts:84](https://github.com/tauri-apps/tauri/blob/ffb9a19/tooling/api/src/fs.ts#L84)
