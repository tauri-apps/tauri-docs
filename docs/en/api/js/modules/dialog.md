---
title: "Module: dialog"
sidebar_label: "dialog"
custom_edit_url: null
hide_title: true
---

# Module: dialog

Native system dialogs for opening and saving files.

## Table of contents

### Interfaces

- [DialogFilter](../interfaces/dialog.dialogfilter.md)
- [OpenDialogOptions](../interfaces/dialog.opendialogoptions.md)
- [SaveDialogOptions](../interfaces/dialog.savedialogoptions.md)

## Functions

### open

▸ **open**(`options?`: [*OpenDialogOptions*](../interfaces/dialog.opendialogoptions.md)): *Promise*<string \| string[]\>

Open a file/directory selection dialog

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`options` | [*OpenDialogOptions*](../interfaces/dialog.opendialogoptions.md) | {} |

**Returns:** *Promise*<string \| string[]\>

A promise resolving to the selected path(s)

Defined in: [dialog.ts:51](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/dialog.ts#L51)

___

### save

▸ **save**(`options?`: [*SaveDialogOptions*](../interfaces/dialog.savedialogoptions.md)): *Promise*<string\>

Open a file/directory save dialog.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`options` | [*SaveDialogOptions*](../interfaces/dialog.savedialogoptions.md) | {} |

**Returns:** *Promise*<string\>

A promise resolving to the selected path.

Defined in: [dialog.ts:72](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/dialog.ts#L72)
