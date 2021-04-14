---
title: "Module: tauri"
sidebar_label: "tauri"
custom_edit_url: null
hide_title: true
---

# Module: tauri

## Table of contents

### Interfaces

- [InvokeArgs](../interfaces/tauri.invokeargs.md)

## Functions

### invoke

▸ **invoke**<T\>(`cmd`: *string*, `args?`: [*InvokeArgs*](../interfaces/tauri.invokeargs.md)): *Promise*<T\>

Sends a message to the backend.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`cmd` | *string* | - |
`args` | [*InvokeArgs*](../interfaces/tauri.invokeargs.md) | {} |

**Returns:** *Promise*<T\>

A promise resolving or rejecting to the backend response.

Defined in: [tauri.ts:55](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/tauri.ts#L55)

___

### transformCallback

▸ **transformCallback**(`callback?`: (`response`: *any*) => *void*, `once?`: *boolean*): *string*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`callback?` | (`response`: *any*) => *void* | - |
`once` | *boolean* | false |

**Returns:** *string*

Defined in: [tauri.ts:22](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/tauri.ts#L22)
