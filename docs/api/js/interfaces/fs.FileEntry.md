[@tauri-apps/api](../index.md) / [fs](../modules/fs.md) / FileEntry

# Interface: FileEntry

[fs](../modules/fs.md).FileEntry

## Properties

### children

• `Optional` **children**: [`FileEntry`](fs.FileEntry.md)[]

Children of this entry if it's a directory; null otherwise

#### Defined in

[fs.ts:88](https://github.com/tauri-apps/tauri/blob/72b78f39/tooling/api/src/fs.ts#L88)

___

### name

• `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

#### Defined in

[fs.ts:86](https://github.com/tauri-apps/tauri/blob/72b78f39/tooling/api/src/fs.ts#L86)

___

### path

• **path**: `string`

#### Defined in

[fs.ts:81](https://github.com/tauri-apps/tauri/blob/72b78f39/tooling/api/src/fs.ts#L81)
