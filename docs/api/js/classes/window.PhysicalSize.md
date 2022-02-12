[@tauri-apps/api](../index.md) / [window](../modules/window.md) / PhysicalSize

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

[window.ts:142](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L142)

## Properties

### height

• **height**: `number`

#### Defined in

[window.ts:140](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L140)

___

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:138](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L138)

___

### width

• **width**: `number`

#### Defined in

[window.ts:139](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L139)

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

[window.ts:148](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L148)
