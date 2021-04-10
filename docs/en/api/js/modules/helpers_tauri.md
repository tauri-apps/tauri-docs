---
title: "Module: helpers/tauri"
sidebar_label: "helpers/tauri"
custom_edit_url: null
hide_title: true
---

# Module: helpers/tauri

## Table of contents

### Interfaces

- [TauriCommand](../interfaces/helpers_tauri.tauricommand.md)

## Type aliases

### TauriModule

Ƭ **TauriModule**: *App* \| *Fs* \| *Window* \| *Shell* \| *Event* \| *Internal* \| *Dialog* \| *Cli* \| *Notification* \| *Http* \| *GlobalShortcut*

Defined in: [helpers/tauri.ts:3](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/helpers/tauri.ts#L3)

## Functions

### invokeTauriCommand

▸ **invokeTauriCommand**<T\>(`command`: [*TauriCommand*](../interfaces/helpers_tauri.tauricommand.md)): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`command` | [*TauriCommand*](../interfaces/helpers_tauri.tauricommand.md) |

**Returns:** *Promise*<T\>

Defined in: [helpers/tauri.ts:22](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/helpers/tauri.ts#L22)
