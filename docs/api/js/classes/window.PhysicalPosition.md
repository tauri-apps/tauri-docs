[@tauri-apps/api](../index.md) / [window](../modules/window.md) / PhysicalPosition

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

[window.ts:171](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L171)

## Properties

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:167](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L167)

___

### x

• **x**: `number`

#### Defined in

[window.ts:168](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L168)

___

### y

• **y**: `number`

#### Defined in

[window.ts:169](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L169)

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

[window.ts:177](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L177)
