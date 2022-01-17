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

[window.ts:119](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L119)

## Properties

### height

• **height**: `number`

#### Defined in

[window.ts:117](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L117)

___

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:115](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L115)

___

### width

• **width**: `number`

#### Defined in

[window.ts:116](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L116)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`): [`LogicalSize`](window.LogicalSize.md)

Converts the physical size to a logical one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

#### Returns

[`LogicalSize`](window.LogicalSize.md)

#### Defined in

[window.ts:125](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L125)
