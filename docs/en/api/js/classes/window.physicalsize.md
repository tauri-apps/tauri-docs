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

\+ **new PhysicalSize**(`width`: *number*, `height`: *number*): [*PhysicalSize*](window.physicalsize.md)

#### Parameters:

Name | Type |
:------ | :------ |
`width` | *number* |
`height` | *number* |

**Returns:** [*PhysicalSize*](window.physicalsize.md)

Defined in: [window.ts:42](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L42)

## Properties

### height

• **height**: *number*

Defined in: [window.ts:42](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L42)

___

### type

• **type**: *string*= 'Physical'

Defined in: [window.ts:40](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L40)

___

### width

• **width**: *number*

Defined in: [window.ts:41](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L41)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`: *number*): [*LogicalSize*](window.logicalsize.md)

Converts the physical size to a logical one.

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** [*LogicalSize*](window.logicalsize.md)

Defined in: [window.ts:50](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L50)
