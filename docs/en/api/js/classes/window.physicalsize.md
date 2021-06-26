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

[window.ts:59](https://github.com/tauri-apps/tauri/blob/710a4f9/tooling/api/src/window.ts#L59)

## Properties

### height

• **height**: `number`

#### Defined in

[window.ts:59](https://github.com/tauri-apps/tauri/blob/710a4f9/tooling/api/src/window.ts#L59)

___

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:57](https://github.com/tauri-apps/tauri/blob/710a4f9/tooling/api/src/window.ts#L57)

___

### width

• **width**: `number`

#### Defined in

[window.ts:58](https://github.com/tauri-apps/tauri/blob/710a4f9/tooling/api/src/window.ts#L58)

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

[window.ts:67](https://github.com/tauri-apps/tauri/blob/710a4f9/tooling/api/src/window.ts#L67)
