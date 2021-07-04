---
title: "Class: WindowManager"
sidebar_label: "WindowManager"
custom_edit_url: null
hide_title: true
---

# Class: WindowManager

[window](../modules/window.md).WindowManager

Manage the current window object.

## Hierarchy

- [`WebviewWindowHandle`](window.webviewwindowhandle.md)

  ↳ **`WindowManager`**

## Constructors

### constructor

• **new WindowManager**(`label`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[constructor](window.webviewwindowhandle.md#constructor)

#### Defined in

[window.ts:221](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L221)

## Properties

### label

• **label**: `string`

Window label.

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[label](window.webviewwindowhandle.md#label)

#### Defined in

[window.ts:219](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L219)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[listeners](window.webviewwindowhandle.md#listeners)

#### Defined in

[window.ts:221](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L221)

## Methods

### \_handleTauriEvent

▸ **_handleTauriEvent**<`T`\>(`event`, `handler`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> |

#### Returns

`boolean`

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[_handleTauriEvent](window.webviewwindowhandle.md#_handletaurievent)

#### Defined in

[window.ts:285](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L285)

___

### center

▸ **center**(): `Promise`<`void`\>

Centers the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:479](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L479)

___

### close

▸ **close**(): `Promise`<`void`\>

Closes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:644](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L644)

___

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `payload?` | `string` | Event payload. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[emit](window.webviewwindowhandle.md#emit)

#### Defined in

[window.ts:274](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L274)

___

### hide

▸ **hide**(): `Promise`<`void`\>

Sets the window visibility to false.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:630](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L630)

___

### innerPosition

▸ **innerPosition**(): `Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

#### Defined in

[window.ts:376](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L376)

___

### innerSize

▸ **innerSize**(): `Promise`<[`PhysicalSize`](window.physicalsize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

#### Returns

`Promise`<[`PhysicalSize`](window.physicalsize.md)\>

#### Defined in

[window.ts:399](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L399)

___

### isDecorated

▸ **isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:442](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L442)

___

### isFullscreen

▸ **isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:422](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L422)

___

### isMaximized

▸ **isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:432](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L432)

___

### isResizable

▸ **isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:452](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L452)

___

### isVisible

▸ **isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:462](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L462)

___

### listen

▸ **listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[listen](window.webviewwindowhandle.md#listen)

#### Defined in

[window.ts:236](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L236)

___

### maximize

▸ **maximize**(): `Promise`<`void`\>

Maximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:560](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L560)

___

### minimize

▸ **minimize**(): `Promise`<`void`\>

Minimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:588](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L588)

___

### once

▸ **once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[once](window.webviewwindowhandle.md#once)

#### Defined in

[window.ts:257](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L257)

___

### outerPosition

▸ **outerPosition**(): `Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

#### Defined in

[window.ts:386](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L386)

___

### outerSize

▸ **outerSize**(): `Promise`<[`PhysicalSize`](window.physicalsize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

#### Returns

`Promise`<[`PhysicalSize`](window.physicalsize.md)\>

#### Defined in

[window.ts:412](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L412)

___

### requestUserAttention

▸ **requestUserAttention**(`requestType`): `Promise`<`void`\>

 Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

## Platform-specific

- **macOS:** `null` has no effect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestType` | ``null`` \| [`UserAttentionType`](../enums/window.userattentiontype.md) |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:503](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L503)

___

### scaleFactor

▸ **scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

#### Returns

`Promise`<`number`\>

#### Defined in

[window.ts:366](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L366)

___

### setAlwaysOnTop

▸ **setAlwaysOnTop**(`alwaysOnTop`): `Promise`<`void`\>

Whether the window should always be on top of other windows.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:675](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L675)

___

### setDecorations

▸ **setDecorations**(`decorations`): `Promise`<`void`\>

Whether the window should have borders and bars.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:659](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L659)

___

### setFocus

▸ **setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:847](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L847)

___

### setFullscreen

▸ **setFullscreen**(`fullscreen`): `Promise`<`void`\>

Sets the window fullscreen state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:832](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L832)

___

### setIcon

▸ **setIcon**(`icon`): `Promise`<`void`\>

Sets the window icon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| `number`[] | Icon bytes or path to the icon file. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:862](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L862)

___

### setMaxSize

▸ **setMaxSize**(`size`): `Promise`<`void`\>

Sets the window max size. If the `size` argument is undefined, the max size is unset.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setMaxSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| [`PhysicalSize`](window.physicalsize.md) \| [`LogicalSize`](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:764](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L764)

___

### setMinSize

▸ **setMinSize**(`size`): `Promise`<`void`\>

Sets the window min size. If the `size` argument is not provided, the min size is unset.

**`example`**
```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window'
await appWindow.setMinSize(new PhysicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| [`PhysicalSize`](window.physicalsize.md) \| [`LogicalSize`](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:728](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L728)

___

### setPosition

▸ **setPosition**(`position`): `Promise`<`void`\>

Sets the window position.

**`example`**
```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window'
await appWindow.setPosition(new LogicalPosition(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.physicalposition.md) \| [`LogicalPosition`](window.logicalposition.md) | The new position, in logical or physical pixels. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:800](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L800)

___

### setResizable

▸ **setResizable**(`resizable`): `Promise`<`void`\>

Updates the window resizable flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:529](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L529)

___

### setSize

▸ **setSize**(`size`): `Promise`<`void`\>

Resizes the window.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`PhysicalSize`](window.physicalsize.md) \| [`LogicalSize`](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:696](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L696)

___

### setSkipTaskbar

▸ **setSkipTaskbar**(`skip`): `Promise`<`void`\>

Whether to show the window icon in the task bar or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:880](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L880)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<`void`\>

Sets the window title.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:545](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L545)

___

### show

▸ **show**(): `Promise`<`void`\>

Sets the window visibility to true.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:616](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L616)

___

### startDragging

▸ **startDragging**(): `Promise`<`void`\>

Starts dragging the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:895](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L895)

___

### unmaximize

▸ **unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:574](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L574)

___

### unminimize

▸ **unminimize**(): `Promise`<`void`\>

Unminimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:602](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L602)
