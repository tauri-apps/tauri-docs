---
title: "Class: PhysicalPosition"
sidebar_label: "PhysicalPosition"
custom_edit_url: null
hide_title: true
---

# Class: PhysicalPosition

[window](../modules/window.md).PhysicalPosition

A position represented in physical pixels.

## Constructors

### constructor

• **new PhysicalPosition**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[window.ts:148](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L148)

## Properties

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:146](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L146)

___

### x

• **x**: `number`

#### Defined in

[window.ts:147](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L147)

___

### y

• **y**: `number`

#### Defined in

[window.ts:148](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L148)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`): [`LogicalPosition`](window.logicalposition.md)

Converts the physical position to a logical one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

#### Returns

[`LogicalPosition`](window.logicalposition.md)

#### Defined in

[window.ts:156](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L156)
