[@tauri-apps/api](../README.md) / [window](../modules/window.md) / WindowManager

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

[window.ts:329](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L329)

## Properties

### label

• **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[label](window.WebviewWindowHandle.md#label)

#### Defined in

[window.ts:325](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L325)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[listeners](window.WebviewWindowHandle.md#listeners)

#### Defined in

[window.ts:327](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L327)

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

[window.ts:391](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L391)

___

### center

▸ **center**(): `Promise`<`void`\>

Centers the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.center();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:707](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L707)

___

### close

▸ **close**(): `Promise`<`void`\>

Closes the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.close();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1008](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1008)

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

[window.ts:380](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L380)

___

### hide

▸ **hide**(): `Promise`<`void`\>

Sets the window visibility to false.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.hide();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:983](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L983)

___

### innerPosition

▸ **innerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.innerPosition();
```

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's inner position.

#### Defined in

[window.ts:446](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L446)

___

### innerSize

▸ **innerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.innerSize();
```

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's inner size.

#### Defined in

[window.ts:497](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L497)

___

### isDecorated

▸ **isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const decorated = await appWindow.isDecorated();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is decorated or not.

#### Defined in

[window.ts:598](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L598)

___

### isFullscreen

▸ **isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const fullscreen = await appWindow.isFullscreen();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is in fullscreen mode or not.

#### Defined in

[window.ts:548](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L548)

___

### isMaximized

▸ **isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const maximized = await appWindow.isMaximized();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is maximized or not.

#### Defined in

[window.ts:573](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L573)

___

### isResizable

▸ **isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const resizable = await appWindow.isResizable();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is resizable or not.

#### Defined in

[window.ts:623](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L623)

___

### isVisible

▸ **isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const visible = await appWindow.isVisible();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is visible or not.

#### Defined in

[window.ts:648](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L648)

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

[window.ts:342](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L342)

___

### maximize

▸ **maximize**(): `Promise`<`void`\>

Maximizes the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.maximize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:833](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L833)

___

### minimize

▸ **minimize**(): `Promise`<`void`\>

Minimizes the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.minimize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:908](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L908)

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

[window.ts:363](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L363)

___

### outerPosition

▸ **outerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.outerPosition();
```

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's outer position.

#### Defined in

[window.ts:471](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L471)

___

### outerSize

▸ **outerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.outerSize();
```

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's outer size.

#### Defined in

[window.ts:523](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L523)

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

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.requestUserAttention();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestType` | ``null`` \| [`UserAttentionType`](../enums/window.UserAttentionType.md) |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:743](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L743)

___

### scaleFactor

▸ **scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
```

#### Returns

`Promise`<`number`\>

The window's monitor scale factor.

#### Defined in

[window.ts:421](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L421)

___

### setAlwaysOnTop

▸ **setAlwaysOnTop**(`alwaysOnTop`): `Promise`<`void`\>

Whether the window should always be on top of other windows.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setAlwaysOnTop(true);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1061](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1061)

___

### setCursorGrab

▸ **setCursorGrab**(`grab`): `Promise`<`void`\>

Grabs the cursor, preventing it from leaving the window.

There's no guarantee that the cursor will be hidden. You should
hide it by yourself if you want so.

#### Platform-specific

- **Linux:** Unsupported.
- **macOS:** This locks the cursor in a fixed location, which looks visually awkward.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorGrab(true);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grab` | `boolean` | `true` to grab the cursor icon, `false` to release it. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1377](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1377)

___

### setCursorIcon

▸ **setCursorIcon**(`icon`): `Promise`<`void`\>

Modifies the cursor icon of the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorIcon('help');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | [`CursorIcon`](../modules/window.md#cursoricon) | The new cursor icon. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1437](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1437)

___

### setCursorPosition

▸ **setCursorPosition**(`position`): `Promise`<`void`\>

Changes the position of the cursor in window coordinates.

**`example`**
```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setCursorPosition(new LogicalPosition(600, 300));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.PhysicalPosition.md) \| [`LogicalPosition`](window.LogicalPosition.md) | The new cursor position. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1464](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1464)

___

### setCursorVisible

▸ **setCursorVisible**(`visible`): `Promise`<`void`\>

Modifies the cursor's visibility.

#### Platform-specific

- **Windows:** The cursor is only hidden within the confines of the window.
- **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
  outside of the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorVisible(false);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | If `false`, this will hide the cursor. If `true`, this will show the cursor. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1410](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1410)

___

### setDecorations

▸ **setDecorations**(`decorations`): `Promise`<`void`\>

Whether the window should have borders and bars.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setDecorations(false);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1034](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1034)

___

### setFocus

▸ **setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFocus();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1279](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1279)

___

### setFullscreen

▸ **setFullscreen**(`fullscreen`): `Promise`<`void`\>

Sets the window fullscreen state.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFullscreen(true);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1253](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1253)

___

### setIcon

▸ **setIcon**(`icon`): `Promise`<`void`\>

Sets the window icon.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setIcon('/tauri/awesome.png');
```

Note that you need the `icon-ico` or `icon-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:
```toml
[dependencies]
tauri = { version = "...", features = ["...", "icon-png"] }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| `Uint8Array` | Icon bytes or path to the icon file. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1312](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1312)

___

### setMaxSize

▸ **setMaxSize**(`size`): `Promise`<`void`\>

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setMaxSize(new LogicalSize(600, 500));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1168](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1168)

___

### setMinSize

▸ **setMinSize**(`size`): `Promise`<`void`\>

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

**`example`**
```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window';
await appWindow.setMinSize(new PhysicalSize(600, 500));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1126](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1126)

___

### setPosition

▸ **setPosition**(`position`): `Promise`<`void`\>

Sets the window outer position.

**`example`**
```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setPosition(new LogicalPosition(600, 500));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.PhysicalPosition.md) \| [`LogicalPosition`](window.LogicalPosition.md) | The new position, in logical or physical pixels. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1210](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1210)

___

### setResizable

▸ **setResizable**(`resizable`): `Promise`<`void`\>

Updates the window resizable flag.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setResizable(false);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:780](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L780)

___

### setSize

▸ **setSize**(`size`): `Promise`<`void`\>

Resizes the window with a new inner size.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setSize(new LogicalSize(600, 500));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1088](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1088)

___

### setSkipTaskbar

▸ **setSkipTaskbar**(`skip`): `Promise`<`void`\>

Whether to show the window icon in the task bar or not.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setSkipTaskbar(true);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1342](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1342)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<`void`\>

Sets the window title.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setTitle('Tauri');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:807](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L807)

___

### show

▸ **show**(): `Promise`<`void`\>

Sets the window visibility to true.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.show();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:958](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L958)

___

### startDragging

▸ **startDragging**(): `Promise`<`void`\>

Starts dragging the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.startDragging();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:1506](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L1506)

___

### theme

▸ **theme**(): `Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

Gets the window's current theme.

#### Platform-specific

- **Linux:** Not implemented, always returns `light`.
- **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
const theme = await appWindow.theme();
```

#### Returns

`Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

The window theme.

#### Defined in

[window.ts:679](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L679)

___

### toggleMaximize

▸ **toggleMaximize**(): `Promise`<`void`\>

Toggles the window maximized state.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.toggleMaximize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:883](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L883)

___

### unmaximize

▸ **unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unmaximize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:858](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L858)

___

### unminimize

▸ **unminimize**(): `Promise`<`void`\>

Unminimizes the window.

**`example`**
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unminimize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:933](https://github.com/tauri-apps/tauri/blob/1b58174/tooling/api/src/window.ts#L933)
