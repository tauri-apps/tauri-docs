---
title: "Module: helpers/tauri"
sidebar_label: "helpers/tauri"
custom_edit_url: null
hide_title: true
---

# Module: helpers/tauri

## Interfaces

- [TauriCommand](../interfaces/helpers_tauri.TauriCommand.md)

## Type aliases

### TauriModule

Ƭ **TauriModule**: ``"App"`` \| ``"Fs"`` \| ``"Path"`` \| ``"Os"`` \| ``"Window"`` \| ``"Shell"`` \| ``"Event"`` \| ``"Internal"`` \| ``"Dialog"`` \| ``"Cli"`` \| ``"Notification"`` \| ``"Http"`` \| ``"GlobalShortcut"`` \| ``"Process"`` \| ``"Clipboard"``

#### Defined in

[helpers/tauri.ts:9](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/helpers/tauri.ts#L9)

## Functions

### invokeTauriCommand

▸ **invokeTauriCommand**<`T`\>(`command`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`TauriCommand`](../interfaces/helpers_tauri.TauriCommand.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[helpers/tauri.ts:31](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/helpers/tauri.ts#L31)
