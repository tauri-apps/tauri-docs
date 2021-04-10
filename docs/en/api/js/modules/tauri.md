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

sends a message to the backend

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | *string* |
`args` | [*InvokeArgs*](../interfaces/tauri.invokeargs.md) |

**Returns:** *Promise*<T\>

Promise resolving or rejecting to the backend response

Defined in: [tauri.ts:51](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/tauri.ts#L51)

___

### transformCallback

▸ **transformCallback**(`callback?`: (`response`: *any*) => *void*, `once?`: *boolean*): *string*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`callback?` | (`response`: *any*) => *void* | - |
`once` | *boolean* | false |

**Returns:** *string*

Defined in: [tauri.ts:18](https://github.com/tauri-apps/tauri/blob/b9cbaad4/api/src/tauri.ts#L18)
