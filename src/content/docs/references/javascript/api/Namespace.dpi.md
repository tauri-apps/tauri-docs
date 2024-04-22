---
title: 'dpi'
editUrl: false
prev: false
next: false
---

## Classes

### LogicalPosition

A position represented in logical pixels.

#### Since

2.0.0

#### Constructors

##### constructor()

```ts
new LogicalPosition(x, y): LogicalPosition
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

[`LogicalPosition`](/references/javascript/api/namespacedpi/#logicalposition)

**Source**: [dpi.ts:62](undefined)

#### Properties

| Property                             | Type     |
| :----------------------------------- | :------- |
| <a id="type" name="type"></a> `type` | `string` |
| <a id="x" name="x"></a> `x`          | `number` |
| <a id="y" name="y"></a> `y`          | `number` |

---

### LogicalSize

A size represented in logical pixels.

#### Since

2.0.0

#### Constructors

##### constructor()

```ts
new LogicalSize(width, height): LogicalSize
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `width`   | `number` |
| `height`  | `number` |

###### Returns

[`LogicalSize`](/references/javascript/api/namespacedpi/#logicalsize)

**Source**: [dpi.ts:15](undefined)

#### Properties

| Property                                   | Type     |
| :----------------------------------------- | :------- |
| <a id="height" name="height"></a> `height` | `number` |
| <a id="type" name="type"></a> `type`       | `string` |
| <a id="width" name="width"></a> `width`    | `number` |

---

### PhysicalPosition

A position represented in physical pixels.

#### Since

2.0.0

#### Constructors

##### constructor()

```ts
new PhysicalPosition(x, y): PhysicalPosition
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `x`       | `number` |
| `y`       | `number` |

###### Returns

[`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition)

**Source**: [dpi.ts:78](undefined)

#### Properties

| Property                             | Type     |
| :----------------------------------- | :------- |
| <a id="type" name="type"></a> `type` | `string` |
| <a id="x" name="x"></a> `x`          | `number` |
| <a id="y" name="y"></a> `y`          | `number` |

#### Methods

##### toLogical()

```ts
toLogical(scaleFactor): LogicalPosition
```

Converts the physical position to a logical one.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const appWindow = getCurrent();
const factor = await appWindow.scaleFactor();
const position = await appWindow.innerPosition();
const logical = position.toLogical(factor);
```

###### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `scaleFactor` | `number` |

###### Returns

[`LogicalPosition`](/references/javascript/api/namespacedpi/#logicalposition)

**Source**: [dpi.ts:94](undefined)

---

### PhysicalSize

A size represented in physical pixels.

#### Since

2.0.0

#### Constructors

##### constructor()

```ts
new PhysicalSize(width, height): PhysicalSize
```

###### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `width`   | `number` |
| `height`  | `number` |

###### Returns

[`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize)

**Source**: [dpi.ts:31](undefined)

#### Properties

| Property                                   | Type     |
| :----------------------------------------- | :------- |
| <a id="height" name="height"></a> `height` | `number` |
| <a id="type" name="type"></a> `type`       | `string` |
| <a id="width" name="width"></a> `width`    | `number` |

#### Methods

##### toLogical()

```ts
toLogical(scaleFactor): LogicalSize
```

Converts the physical size to a logical one.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const appWindow = getCurrent();
const factor = await appWindow.scaleFactor();
const size = await appWindow.innerSize();
const logical = size.toLogical(factor);
```

###### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `scaleFactor` | `number` |

###### Returns

[`LogicalSize`](/references/javascript/api/namespacedpi/#logicalsize)

**Source**: [dpi.ts:47](undefined)
