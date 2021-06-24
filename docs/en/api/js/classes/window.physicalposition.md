---
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

Defined in: [window.ts:88](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L88)

## Properties

### type

• **type**: *string*= 'Physical'

Defined in: [window.ts:86](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L86)

___

### x

• **x**: *number*

Defined in: [window.ts:87](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L87)

___

### y

• **y**: *number*

Defined in: [window.ts:88](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L88)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`: *number*): [*LogicalPosition*](window.logicalposition.md)

Converts the physical position to a logical one.

#### Parameters:

Name | Type |
:------ | :------ |
`scaleFactor` | *number* |

**Returns:** [*LogicalPosition*](window.logicalposition.md)

Defined in: [window.ts:96](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L96)
