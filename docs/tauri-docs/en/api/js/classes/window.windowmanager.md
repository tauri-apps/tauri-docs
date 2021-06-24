---
title: "Class: WindowManager"
sidebar_label: "WindowManager"
custom_edit_url: null
hide_title: true
---

# Class: WindowManager

[window](../modules/window.md).WindowManager

Manage the current window object.

## Constructors

### constructor

• **new WindowManager**()

## Methods

### close

▸ **close**(): `Promise`<void\>

Closes the window.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:518](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L518)

___

### hide

▸ **hide**(): `Promise`<void\>

Sets the window visibility to false.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:504](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L504)

___

### innerPosition

▸ **innerPosition**(): `Promise`<[PhysicalPosition](window.physicalposition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[PhysicalPosition](window.physicalposition.md)\>

#### Defined in

[window.ts:300](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L300)

___

### innerSize

▸ **innerSize**(): `Promise`<[PhysicalSize](window.physicalsize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

#### Returns

`Promise`<[PhysicalSize](window.physicalsize.md)\>

#### Defined in

[window.ts:323](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L323)

___

### isDecorated

▸ **isDecorated**(): `Promise`<boolean\>

Gets the window's current decorated state.

#### Returns

`Promise`<boolean\>

#### Defined in

[window.ts:366](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L366)

___

### isFullscreen

▸ **isFullscreen**(): `Promise`<boolean\>

Gets the window's current fullscreen state.

#### Returns

`Promise`<boolean\>

#### Defined in

[window.ts:346](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L346)

___

### isMaximized

▸ **isMaximized**(): `Promise`<boolean\>

Gets the window's current maximized state.

#### Returns

`Promise`<boolean\>

#### Defined in

[window.ts:356](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L356)

___

### isResizable

▸ **isResizable**(): `Promise`<boolean\>

Gets the window's current resizable state.

#### Returns

`Promise`<boolean\>

#### Defined in

[window.ts:376](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L376)

___

### isVisible

▸ **isVisible**(): `Promise`<boolean\>

Gets the window's current visible state.

#### Returns

`Promise`<boolean\>

#### Defined in

[window.ts:386](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L386)

___

### maximize

▸ **maximize**(): `Promise`<void\>

Maximizes the window.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:434](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L434)

___

### minimize

▸ **minimize**(): `Promise`<void\>

Minimizes the window.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:462](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L462)

___

### outerPosition

▸ **outerPosition**(): `Promise`<[PhysicalPosition](window.physicalposition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[PhysicalPosition](window.physicalposition.md)\>

#### Defined in

[window.ts:310](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L310)

___

### outerSize

▸ **outerSize**(): `Promise`<[PhysicalSize](window.physicalsize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

#### Returns

`Promise`<[PhysicalSize](window.physicalsize.md)\>

#### Defined in

[window.ts:336](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L336)

___

### scaleFactor

▸ **scaleFactor**(): `Promise`<number\>

The scale factor that can be used to map physical pixels to logical pixels.

#### Returns

`Promise`<number\>

#### Defined in

[window.ts:290](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L290)

___

### setAlwaysOnTop

▸ **setAlwaysOnTop**(`alwaysOnTop`): `Promise`<void\>

Whether the window should always be on top of other windows.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:549](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L549)

___

### setDecorations

▸ **setDecorations**(`decorations`): `Promise`<void\>

Whether the window should have borders and bars.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:533](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L533)

___

### setFocus

▸ **setFocus**(): `Promise`<void\>

Bring the window to front and focus.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:721](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L721)

___

### setFullscreen

▸ **setFullscreen**(`fullscreen`): `Promise`<void\>

Sets the window fullscreen state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:706](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L706)

___

### setIcon

▸ **setIcon**(`icon`): `Promise`<void\>

Sets the window icon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| `number`[] | Icon bytes or path to the icon file. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:736](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L736)

___

### setMaxSize

▸ **setMaxSize**(`size`): `Promise`<void\>

Sets the window max size. If the `size` argument is undefined, the max size is unset.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setMaxSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| [PhysicalSize](window.physicalsize.md) \| [LogicalSize](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:638](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L638)

___

### setMinSize

▸ **setMinSize**(`size`): `Promise`<void\>

Sets the window min size. If the `size` argument is not provided, the min size is unset.

**`example`**
```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window'
await appWindow.setMinSize(new PhysicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| [PhysicalSize](window.physicalsize.md) \| [LogicalSize](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:602](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L602)

___

### setPosition

▸ **setPosition**(`position`): `Promise`<void\>

Sets the window position.

**`example`**
```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window'
await appWindow.setPosition(new LogicalPosition(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [PhysicalPosition](window.physicalposition.md) \| [LogicalPosition](window.logicalposition.md) | The new position, in logical or physical pixels. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:674](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L674)

___

### setResizable

▸ **setResizable**(`resizable`): `Promise`<void\>

Updates the window resizable flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:403](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L403)

___

### setSize

▸ **setSize**(`size`): `Promise`<void\>

Resizes the window.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [PhysicalSize](window.physicalsize.md) \| [LogicalSize](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:570](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L570)

___

### setSkipTaskbar

▸ **setSkipTaskbar**(`skip`): `Promise`<void\>

Whether to show the window icon in the task bar or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:754](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L754)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<void\>

Sets the window title.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:419](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L419)

___

### show

▸ **show**(): `Promise`<void\>

Sets the window visibility to true.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:490](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L490)

___

### startDragging

▸ **startDragging**(): `Promise`<void\>

Starts dragging the window.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:769](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L769)

___

### unmaximize

▸ **unmaximize**(): `Promise`<void\>

Unmaximizes the window.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:448](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L448)

___

### unminimize

▸ **unminimize**(): `Promise`<void\>

Unminimizes the window.

#### Returns

`Promise`<void\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:476](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L476)
