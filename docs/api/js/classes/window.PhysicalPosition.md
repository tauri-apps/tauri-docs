[@tauri-apps/api](../README.md) / [window](../modules/window.md) / PhysicalPosition

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

[window.ts:177](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L177)

## Properties

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:173](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L173)

___

### x

• **x**: `number`

#### Defined in

[window.ts:174](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L174)

___

### y

• **y**: `number`

#### Defined in

[window.ts:175](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L175)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`): [`LogicalPosition`](window.LogicalPosition.md)

Converts the physical position to a logical one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

#### Returns

[`LogicalPosition`](window.LogicalPosition.md)

#### Defined in

[window.ts:183](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L183)
