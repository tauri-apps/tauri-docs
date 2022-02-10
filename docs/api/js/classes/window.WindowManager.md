[@tauri-apps/api](../index.md) / [window](../modules/window.md) / WindowManager

# Class: WindowManager

[window](../modules/window.md).WindowManager

Manage the current window object.

## Hierarchy

- [`WebviewWindowHandle`](window.WebviewWindowHandle.md)

  ↳ **`WindowManager`**

  ↳↳ [`WebviewWindow`](window.WebviewWindow.md)

## Constructors

### constructor

• **new WindowManager**(`label`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[constructor](window.WebviewWindowHandle.md#constructor)

#### Defined in

[window.ts:231](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L231)

## Properties

### label

• **label**: `string`

Window label.

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[label](window.WebviewWindowHandle.md#label)

#### Defined in

[window.ts:227](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L227)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[listeners](window.WebviewWindowHandle.md#listeners)

#### Defined in

[window.ts:229](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L229)

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

[WebviewWindowHandle](window.WebviewWindowHandle.md).[_handleTauriEvent](window.WebviewWindowHandle.md#_handletaurievent)

#### Defined in

[window.ts:293](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L293)

___

### center

▸ **center**(): `Promise`<`void`\>

Centers the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:487](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L487)

___

### close

▸ **close**(): `Promise`<`void`\>

Closes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:733](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L733)

___

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[emit](window.WebviewWindowHandle.md#emit)

#### Defined in

[window.ts:282](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L282)

___

### hide

▸ **hide**(): `Promise`<`void`\>

Sets the window visibility to false.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:713](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L713)

___

### innerPosition

▸ **innerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

#### Defined in

[window.ts:330](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L330)

___

### innerSize

▸ **innerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

#### Defined in

[window.ts:365](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L365)

___

### isDecorated

▸ **isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:432](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L432)

___

### isFullscreen

▸ **isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:400](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L400)

___

### isMaximized

▸ **isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:416](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L416)

___

### isResizable

▸ **isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:448](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L448)

___

### isVisible

▸ **isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:464](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L464)

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
| `event` | [`EventName`](../modules/event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[listen](window.WebviewWindowHandle.md#listen)

#### Defined in

[window.ts:244](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L244)

___

### maximize

▸ **maximize**(): `Promise`<`void`\>

Maximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:593](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L593)

___

### minimize

▸ **minimize**(): `Promise`<`void`\>

Minimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:653](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L653)

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
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[once](window.WebviewWindowHandle.md#once)

#### Defined in

[window.ts:265](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L265)

___

### outerPosition

▸ **outerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

#### Defined in

[window.ts:346](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L346)

___

### outerSize

▸ **outerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

#### Defined in

[window.ts:384](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L384)

___

### requestUserAttention

▸ **requestUserAttention**(`requestType`): `Promise`<`void`\>

 Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

#### Platform-specific

- **macOS:** `null` has no effect.
- **Linux:** Urgency levels have the same effect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestType` | ``null`` \| [`UserAttentionType`](../enums/window.UserAttentionType.md) |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:518](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L518)

___

### scaleFactor

▸ **scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

#### Returns

`Promise`<`number`\>

#### Defined in

[window.ts:314](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L314)

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

[window.ts:776](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L776)

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

[window.ts:754](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L754)

___

### setFocus

▸ **setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:984](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L984)

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

[window.ts:963](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L963)

___

### setIcon

▸ **setIcon**(`icon`): `Promise`<`void`\>

Sets the window icon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| `Uint8Array` | Icon bytes or path to the icon file. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1005](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L1005)

___

### setMaxSize

▸ **setMaxSize**(`size`): `Promise`<`void`\>

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setMaxSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:883](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L883)

___

### setMinSize

▸ **setMinSize**(`size`): `Promise`<`void`\>

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

**`example`**
```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window'
await appWindow.setMinSize(new PhysicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:841](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L841)

___

### setPosition

▸ **setPosition**(`position`): `Promise`<`void`\>

Sets the window outer position.

**`example`**
```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window'
await appWindow.setPosition(new LogicalPosition(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.PhysicalPosition.md) \| [`LogicalPosition`](window.LogicalPosition.md) | The new position, in logical or physical pixels. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:925](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L925)

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

[window.ts:550](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L550)

___

### setSize

▸ **setSize**(`size`): `Promise`<`void`\>

Resizes the window with a new inner size.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:803](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L803)

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

[window.ts:1030](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L1030)

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

[window.ts:572](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L572)

___

### show

▸ **show**(): `Promise`<`void`\>

Sets the window visibility to true.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:693](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L693)

___

### startDragging

▸ **startDragging**(): `Promise`<`void`\>

Starts dragging the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1051](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L1051)

___

### toggleMaximize

▸ **toggleMaximize**(): `Promise`<`void`\>

Toggles the window maximized state.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:633](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L633)

___

### unmaximize

▸ **unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:613](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L613)

___

### unminimize

▸ **unminimize**(): `Promise`<`void`\>

Unminimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:673](https://github.com/tauri-apps/tauri/blob/7c0fb73/tooling/api/src/window.ts#L673)
