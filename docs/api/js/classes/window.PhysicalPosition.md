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

[window.ts:186](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L186)

## Properties

### type

• **type**: `string` = `'Physical'`

#### Defined in

[window.ts:182](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L182)

___

### x

• **x**: `number`

#### Defined in

[window.ts:183](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L183)

___

### y

• **y**: `number`

#### Defined in

[window.ts:184](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L184)

## Methods

### toLogical

▸ **toLogical**(`scaleFactor`): [`LogicalPosition`](window.LogicalPosition.md)

Converts the physical position to a logical one.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
const position = await appWindow.innerPosition();
const logical = position.toLogical(factor);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

#### Returns

[`LogicalPosition`](window.LogicalPosition.md)

#### Defined in

[window.ts:201](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L201)
