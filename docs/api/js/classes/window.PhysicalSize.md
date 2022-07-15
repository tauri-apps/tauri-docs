[@tauri-apps/api](../README.md) / [window](../modules/window.md) / PhysicalSize

# Class: PhysicalSize

[window](../modules/window.md).PhysicalSize

A size represented in physical pixels.

## Constructors

### constructor

**new PhysicalSize**(`width`, `height`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

## Properties

### height

 **height**: `number`

#### Defined in

[window.ts:111](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/window.ts#L111)

___

### type

 **type**: `string` = `'Physical'`

#### Defined in

[window.ts:109](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/window.ts#L109)

___

### width

 **width**: `number`

#### Defined in

[window.ts:110](https://github.com/tauri-apps/tauri/blob/b1d5342/tooling/api/src/window.ts#L110)

## Methods

### toLogical

**toLogical**(`scaleFactor`): [`LogicalSize`](window.LogicalSize.md)

Converts the physical size to a logical one.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
const size = await appWindow.innerSize();
const logical = size.toLogical(factor);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

#### Returns

[`LogicalSize`](window.LogicalSize.md)
