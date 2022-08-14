# PhysicalPosition

[window](../modules/window.md).PhysicalPosition

A position represented in physical pixels.

## Constructors

### `constructor`

> **new PhysicalPosition**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

## Properties

### `type`

 **type**: `string` = `'Physical'`

**Defined in** [window.ts:147](https://github.com/tauri-apps/tauri/blob/e29997c5/tooling/api/src/window.ts#L147)

___

### `x`

 **x**: `number`

**Defined in** [window.ts:148](https://github.com/tauri-apps/tauri/blob/e29997c5/tooling/api/src/window.ts#L148)

___

### `y`

 **y**: `number`

**Defined in** [window.ts:149](https://github.com/tauri-apps/tauri/blob/e29997c5/tooling/api/src/window.ts#L149)

## Methods

### `toLogical`

> **toLogical**(`scaleFactor`): [`LogicalPosition`](window.LogicalPosition.md)

Converts the physical position to a logical one.

**`Example`**

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

**Returns**: [`LogicalPosition`](window.LogicalPosition.md)
