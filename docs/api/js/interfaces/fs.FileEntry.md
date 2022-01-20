[@tauri-apps/api](../index.md) / [fs](../modules/fs.md) / FileEntry

# Interface: FileEntry

[fs](../modules/fs.md).FileEntry

## Properties

### children

• `Optional` **children**: [`FileEntry`](fs.FileEntry.md)[]

Children of this entry if it's a directory; null otherwise

#### Defined in

[fs.ts:87](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L87)

___

### name

• `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

#### Defined in

[fs.ts:85](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L85)

___

### path

• **path**: `string`

#### Defined in

[fs.ts:80](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/fs.ts#L80)
