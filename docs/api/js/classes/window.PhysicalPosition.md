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

[window.ts:150](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/window.ts#L150)

## Properties

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:146](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/window.ts#L146)

___

### x

• **x**: `number`

#### Defined in

[window.ts:147](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/window.ts#L147)

___

### y

• **y**: `number`

#### Defined in

[window.ts:148](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/window.ts#L148)

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

[window.ts:156](https://github.com/tauri-apps/tauri/blob/52723ee8/tooling/api/src/window.ts#L156)
