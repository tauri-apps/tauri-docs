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

• `Optional` **children**: [*FileEntry*](fs.fileentry.md)[]

Children of this entry if it's a directory; null otherwise

Defined in: [fs.ts:56](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L56)

___

### name

• `Optional` **name**: *string*

Name of the directory/file
can be null if the path terminates with `..`

Defined in: [fs.ts:54](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L54)

___

### path

• **path**: *string*

Defined in: [fs.ts:49](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/fs.ts#L49)
