[@tauri-apps/api](../index.md) / [fs](../modules/fs.md) / FileEntry

# Interface: FileEntry

[fs](../modules/fs.md).FileEntry

## Properties

### children

• `Optional` **children**: [`FileEntry`](fs.FileEntry.md)[]

Children of this entry if it's a directory; null otherwise

#### Defined in

[fs.ts:128](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/fs.ts#L128)

___

### name

• `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

#### Defined in

[fs.ts:126](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/fs.ts#L126)

___

### path

• **path**: `string`

#### Defined in

[fs.ts:121](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/fs.ts#L121)
