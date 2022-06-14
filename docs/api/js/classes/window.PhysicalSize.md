[@tauri-apps/api](../README.md) / [window](../modules/window.md) / PhysicalSize

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

[window.ts:148](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L148)

## Properties

### height

• **height**: `number`

#### Defined in

[window.ts:146](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L146)

___

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:144](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L144)

___

### width

• **width**: `number`

#### Defined in

[window.ts:145](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L145)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`): [`LogicalSize`](window.LogicalSize.md)

Converts the physical size to a logical one.

**`example`**
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

#### Defined in

[window.ts:163](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L163)
