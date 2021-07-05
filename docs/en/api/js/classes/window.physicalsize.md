---
title: "Class: PhysicalSize"
sidebar_label: "PhysicalSize"
custom_edit_url: null
hide_title: true
---

# Class: PhysicalSize

[window](../modules/window.md).PhysicalSize

A size represented in physical pixels.

## Constructors

### constructor

• **new PhysicalSize**(`width`, `height`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Defined in

[window.ts:119](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L119)

## Properties

### height

• **height**: `number`

#### Defined in

[window.ts:119](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L119)

___

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:117](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L117)

___

### width

• **width**: `number`

#### Defined in

[window.ts:118](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L118)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`): [`LogicalSize`](window.logicalsize.md)

Converts the physical size to a logical one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

#### Returns

[`LogicalSize`](window.logicalsize.md)

#### Defined in

[window.ts:127](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L127)
