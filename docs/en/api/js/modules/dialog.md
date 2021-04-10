---
title: "Module: dialog"
sidebar_label: "dialog"
custom_edit_url: null
hide_title: true
---

# Module: dialog

## Table of contents

### Interfaces

- [DialogFilter](../interfaces/dialog.dialogfilter.md)
- [OpenDialogOptions](../interfaces/dialog.opendialogoptions.md)
- [SaveDialogOptions](../interfaces/dialog.savedialogoptions.md)

## Functions

### open

▸ **open**(`options?`: [*OpenDialogOptions*](../interfaces/dialog.opendialogoptions.md)): *Promise*<string \| string[]\>

**`name`** openDialog

**`description`** Open a file/directory selection dialog

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*OpenDialogOptions*](../interfaces/dialog.opendialogoptions.md) |

**Returns:** *Promise*<string \| string[]\>

Promise resolving to the select path(s)

Defined in: [dialog.ts:30](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/dialog.ts#L30)

___

### save

▸ **save**(`options?`: [*SaveDialogOptions*](../interfaces/dialog.savedialogoptions.md)): *Promise*<string\>

**`name`** save

**`description`** Open a file/directory save dialog

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*SaveDialogOptions*](../interfaces/dialog.savedialogoptions.md) |

**Returns:** *Promise*<string\>

Promise resolving to the select path

Defined in: [dialog.ts:55](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/dialog.ts#L55)
