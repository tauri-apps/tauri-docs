---
title: "Module: tauri"
sidebar_label: "tauri"
custom_edit_url: null
hide_title: true
---

# Module: tauri

## Functions

### invoke

▸ **invoke**<T\>(`cmd`: *string* \| { [key: string]: *unknown*;  }, `args?`: { [key: string]: *unknown*;  }): *Promise*<T\>

sends a message to the backend

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`cmd` | *string* \| { [key: string]: *unknown*;  } |
`args` | *object* |

**Returns:** *Promise*<T\>

Promise resolving or rejecting to the backend response

Defined in: [tauri.ts:59](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/tauri.ts#L59)

___

### transformCallback

▸ **transformCallback**(`callback?`: (`response`: *any*) => *void*, `once?`: *boolean*): *string*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`callback?` | (`response`: *any*) => *void* | - |
`once` | *boolean* | false |

**Returns:** *string*

Defined in: [tauri.ts:31](https://github.com/tauri-apps/tauri/blob/29a1c33a/api/src/tauri.ts#L31)
