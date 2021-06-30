---
title: "Interface: FileEntry"
sidebar_label: "FileEntry"
custom_edit_url: null
hide_title: true
---

# Interface: FileEntry

[fs](../modules/fs.md).FileEntry

## Properties

### children

• `Optional` **children**: [`FileEntry`](fs.fileentry.md)[]

Children of this entry if it's a directory; null otherwise

#### Defined in

[fs.ts:87](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/fs.ts#L87)

___

### name

• `Optional` **name**: `string`

Name of the directory/file
can be null if the path terminates with `..`

#### Defined in

[fs.ts:85](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/fs.ts#L85)

___

### path

• **path**: `string`

#### Defined in

[fs.ts:80](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/fs.ts#L80)
