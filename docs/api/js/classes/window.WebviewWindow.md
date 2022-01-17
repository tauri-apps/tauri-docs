# Class: WebviewWindow

[window](../modules/window.md).WebviewWindow

Create new webview windows and get a handle to existing ones.

**`example`**
```typescript
// loading embedded asset:
const webview = new WebviewWindow('theUniqueLabel', {
  url: 'path/to/page.html'
})
// alternatively, load a remote URL:
const webview = new WebviewWindow('theUniqueLabel', {
  url: 'https://github.com/tauri-apps/tauri'
})

webview.once('tauri://created', function () {
 // webview window successfully created
})
webview.once('tauri://error', function (e) {
 // an error happened creating the webview window
})

// emit an event to the backend
await webview.emit("some event", "data")
// listen to an event from the backend
const unlisten = await webview.listen("event name", e => {})
unlisten()
```

## Hierarchy

- [`WindowManager`](window.WindowManager.md)

  ↳ **`WebviewWindow`**

## Constructors

### constructor

• **new WebviewWindow**(`label`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `undefined` \| ``null`` \| `string` |
| `options` | [`WindowOptions`](../interfaces/window.WindowOptions.md) |

#### Overrides

[WindowManager](window.WindowManager.md).[constructor](window.WindowManager.md#constructor)

#### Defined in

[window.ts:1097](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L1097)

## Properties

### label

• **label**: `string`

Window label.

#### Inherited from

[WindowManager](window.WindowManager.md).[label](window.WindowManager.md#label)

#### Defined in

[window.ts:227](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L227)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Inherited from

[WindowManager](window.WindowManager.md).[listeners](window.WindowManager.md#listeners)

#### Defined in

[window.ts:229](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L229)

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

[WindowManager](window.WindowManager.md).[_handleTauriEvent](window.WindowManager.md#_handletaurievent)

#### Defined in

[window.ts:297](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L297)

___

### center

▸ **center**(): `Promise`<`void`\>

Centers the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[center](window.WindowManager.md#center)

#### Defined in

[window.ts:491](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L491)

___

### close

▸ **close**(): `Promise`<`void`\>

Closes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[close](window.WindowManager.md#close)

#### Defined in

[window.ts:736](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L736)

___

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `payload?` | `unknown` | Event payload. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[WindowManager](window.WindowManager.md).[emit](window.WindowManager.md#emit)

#### Defined in

[window.ts:286](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L286)

___

### hide

▸ **hide**(): `Promise`<`void`\>

Sets the window visibility to false.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[hide](window.WindowManager.md#hide)

#### Defined in

[window.ts:716](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L716)

___

### innerPosition

▸ **innerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

#### Inherited from

[WindowManager](window.WindowManager.md).[innerPosition](window.WindowManager.md#innerposition)

#### Defined in

[window.ts:334](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L334)

___

### innerSize

▸ **innerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

#### Inherited from

[WindowManager](window.WindowManager.md).[innerSize](window.WindowManager.md#innersize)

#### Defined in

[window.ts:369](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L369)

___

### isDecorated

▸ **isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[WindowManager](window.WindowManager.md).[isDecorated](window.WindowManager.md#isdecorated)

#### Defined in

[window.ts:436](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L436)

___

### isFullscreen

▸ **isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[WindowManager](window.WindowManager.md).[isFullscreen](window.WindowManager.md#isfullscreen)

#### Defined in

[window.ts:404](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L404)

___

### isMaximized

▸ **isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[WindowManager](window.WindowManager.md).[isMaximized](window.WindowManager.md#ismaximized)

#### Defined in

[window.ts:420](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L420)

___

### isResizable

▸ **isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[WindowManager](window.WindowManager.md).[isResizable](window.WindowManager.md#isresizable)

#### Defined in

[window.ts:452](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L452)

___

### isVisible

▸ **isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[WindowManager](window.WindowManager.md).[isVisible](window.WindowManager.md#isvisible)

#### Defined in

[window.ts:468](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L468)

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
| `event` | [`EventName`](../modules/event.md#eventname) | Event name. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Inherited from

[WindowManager](window.WindowManager.md).[listen](window.WindowManager.md#listen)

#### Defined in

[window.ts:248](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L248)

___

### maximize

▸ **maximize**(): `Promise`<`void`\>

Maximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[maximize](window.WindowManager.md#maximize)

#### Defined in

[window.ts:596](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L596)

___

### minimize

▸ **minimize**(): `Promise`<`void`\>

Minimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[minimize](window.WindowManager.md#minimize)

#### Defined in

[window.ts:656](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L656)

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

[WindowManager](window.WindowManager.md).[once](window.WindowManager.md#once)

#### Defined in

[window.ts:269](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L269)

___

### outerPosition

▸ **outerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

#### Inherited from

[WindowManager](window.WindowManager.md).[outerPosition](window.WindowManager.md#outerposition)

#### Defined in

[window.ts:350](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L350)

___

### outerSize

▸ **outerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

#### Inherited from

[WindowManager](window.WindowManager.md).[outerSize](window.WindowManager.md#outersize)

#### Defined in

[window.ts:388](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L388)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestType` | ``null`` \| [`UserAttentionType`](../enums/window.UserAttentionType.md) |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[requestUserAttention](window.WindowManager.md#requestuserattention)

#### Defined in

[window.ts:521](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L521)

___

### scaleFactor

▸ **scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

#### Returns

`Promise`<`number`\>

#### Inherited from

[WindowManager](window.WindowManager.md).[scaleFactor](window.WindowManager.md#scalefactor)

#### Defined in

[window.ts:318](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L318)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setAlwaysOnTop](window.WindowManager.md#setalwaysontop)

#### Defined in

[window.ts:779](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L779)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setDecorations](window.WindowManager.md#setdecorations)

#### Defined in

[window.ts:757](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L757)

___

### setFocus

▸ **setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[setFocus](window.WindowManager.md#setfocus)

#### Defined in

[window.ts:987](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L987)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setFullscreen](window.WindowManager.md#setfullscreen)

#### Defined in

[window.ts:966](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L966)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setIcon](window.WindowManager.md#seticon)

#### Defined in

[window.ts:1008](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L1008)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setMaxSize](window.WindowManager.md#setmaxsize)

#### Defined in

[window.ts:886](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L886)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setMinSize](window.WindowManager.md#setminsize)

#### Defined in

[window.ts:844](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L844)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setPosition](window.WindowManager.md#setposition)

#### Defined in

[window.ts:928](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L928)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setResizable](window.WindowManager.md#setresizable)

#### Defined in

[window.ts:553](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L553)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setSize](window.WindowManager.md#setsize)

#### Defined in

[window.ts:806](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L806)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setSkipTaskbar](window.WindowManager.md#setskiptaskbar)

#### Defined in

[window.ts:1032](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L1032)

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

#### Inherited from

[WindowManager](window.WindowManager.md).[setTitle](window.WindowManager.md#settitle)

#### Defined in

[window.ts:575](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L575)

___

### show

▸ **show**(): `Promise`<`void`\>

Sets the window visibility to true.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[show](window.WindowManager.md#show)

#### Defined in

[window.ts:696](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L696)

___

### startDragging

▸ **startDragging**(): `Promise`<`void`\>

Starts dragging the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[startDragging](window.WindowManager.md#startdragging)

#### Defined in

[window.ts:1053](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L1053)

___

### toggleMaximize

▸ **toggleMaximize**(): `Promise`<`void`\>

Toggles the window maximized state.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[toggleMaximize](window.WindowManager.md#togglemaximize)

#### Defined in

[window.ts:636](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L636)

___

### unmaximize

▸ **unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[unmaximize](window.WindowManager.md#unmaximize)

#### Defined in

[window.ts:616](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L616)

___

### unminimize

▸ **unminimize**(): `Promise`<`void`\>

Unminimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Inherited from

[WindowManager](window.WindowManager.md).[unminimize](window.WindowManager.md#unminimize)

#### Defined in

[window.ts:676](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L676)

___

### getByLabel

▸ `Static` **getByLabel**(`label`): ``null`` \| [`WebviewWindow`](window.WebviewWindow.md)

Gets the WebviewWindow for the webview associated with the given label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The webview window label. |

#### Returns

``null`` \| [`WebviewWindow`](window.WebviewWindow.md)

The WebviewWindow instance to communicate with the webview or null if the webview doesn't exist.

#### Defined in

[window.ts:1127](https://github.com/tauri-apps/tauri/blob/2d73b99/tooling/api/src/window.ts#L1127)
