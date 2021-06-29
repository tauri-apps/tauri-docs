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

[window.ts:88](https://github.com/tauri-apps/tauri/blob/4339b46/tooling/api/src/window.ts#L88)

## Properties

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:86](https://github.com/tauri-apps/tauri/blob/4339b46/tooling/api/src/window.ts#L86)

___

### x

• **x**: `number`

#### Defined in

[window.ts:87](https://github.com/tauri-apps/tauri/blob/4339b46/tooling/api/src/window.ts#L87)

___

### y

• **y**: `number`

#### Defined in

[window.ts:88](https://github.com/tauri-apps/tauri/blob/4339b46/tooling/api/src/window.ts#L88)

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

[window.ts:96](https://github.com/tauri-apps/tauri/blob/4339b46/tooling/api/src/window.ts#L96)
