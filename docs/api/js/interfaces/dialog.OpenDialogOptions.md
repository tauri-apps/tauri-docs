[@tauri-apps/api](../index.md) / [dialog](../modules/dialog.md) / OpenDialogOptions

# Interface: OpenDialogOptions

[dialog](../modules/dialog.md).OpenDialogOptions

Options for the open dialog.

## Properties

### defaultPath

• `Optional` **defaultPath**: `string`

Initial directory or file path. It must exist.

#### Defined in

[dialog.ts:49](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/dialog.ts#L49)

___

### directory

• `Optional` **directory**: `boolean`

Whether the dialog is a directory selection or not.

#### Defined in

[dialog.ts:53](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/dialog.ts#L53)

___

### filters

• `Optional` **filters**: [`DialogFilter`](dialog.DialogFilter.md)[]

The filters of the dialog.

#### Defined in

[dialog.ts:47](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/dialog.ts#L47)

___

### multiple

• `Optional` **multiple**: `boolean`

Whether the dialog allows multiple selection or not.

#### Defined in

[dialog.ts:51](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/dialog.ts#L51)
