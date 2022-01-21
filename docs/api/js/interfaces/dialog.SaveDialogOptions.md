[@tauri-apps/api](../index.md) / [dialog](../modules/dialog.md) / SaveDialogOptions

# Interface: SaveDialogOptions

[dialog](../modules/dialog.md).SaveDialogOptions

Options for the save dialog.

## Properties

### defaultPath

• `Optional` **defaultPath**: `string`

Initial directory or file path.
If it's a directory path, the dialog interface will change to that folder.
If it's not an existing directory, the file name will be set to the dialog's file name input and the dialog will be set to the parent folder.

#### Defined in

[dialog.ts:65](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/dialog.ts#L65)

___

### filters

• `Optional` **filters**: [`DialogFilter`](dialog.DialogFilter.md)[]

The filters of the dialog.

#### Defined in

[dialog.ts:59](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/dialog.ts#L59)
