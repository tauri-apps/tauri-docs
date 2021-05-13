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

\+ **new PhysicalPosition**(`x`: *number*, `y`: *number*): [*PhysicalPosition*](window.physicalposition.md)

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*PhysicalPosition*](window.physicalposition.md)

Defined in: [window.ts:71](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L71)

## Properties

### type

• **type**: *string*= 'Physical'

Defined in: [window.ts:69](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L69)

___

### x

• **x**: *number*

Defined in: [window.ts:70](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L70)

___

### y

• **y**: *number*

Defined in: [window.ts:71](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L71)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`: *number*): [*LogicalPosition*](window.logicalposition.md)

Converts the physical position to a logical one.

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** [*LogicalPosition*](window.logicalposition.md)

Defined in: [window.ts:79](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L79)
