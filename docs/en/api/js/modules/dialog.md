---
title: "Module: dialog"
sidebar_label: "dialog"
custom_edit_url: null
hide_title: true
---

# Module: dialog

Native system dialogs for opening and saving files.

This package is also accessible with `window.__TAURI__.dialog` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "dialog": {
        "all": true, // enable all dialog APIs
        "open": true, // enable file open API
        "save": true // enable file save API
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Interfaces

- [DialogFilter](../interfaces/dialog.dialogfilter.md)
- [OpenDialogOptions](../interfaces/dialog.opendialogoptions.md)
- [SaveDialogOptions](../interfaces/dialog.savedialogoptions.md)

## Functions

### open

▸ **open**(`options?`): `Promise`<`string` \| `string`[]\>

Open a file/directory selection dialog

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`OpenDialogOptions`](../interfaces/dialog.opendialogoptions.md) |

#### Returns

`Promise`<`string` \| `string`[]\>

A promise resolving to the selected path(s)

#### Defined in

[dialog.ts:69](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/dialog.ts#L69)

___

### save

▸ **save**(`options?`): `Promise`<`string`\>

Open a file/directory save dialog.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SaveDialogOptions`](../interfaces/dialog.savedialogoptions.md) |

#### Returns

`Promise`<`string`\>

A promise resolving to the selected path.

#### Defined in

[dialog.ts:90](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/dialog.ts#L90)
