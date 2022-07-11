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

**new WindowManager**(`label`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[constructor](window.WebviewWindowHandle.md#constructor)

## Properties

### label

 **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[label](window.WebviewWindowHandle.md#label)

#### Defined in

[window.ts:280](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L280)

___

### listeners

 **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[listeners](window.WebviewWindowHandle.md#listeners)

#### Defined in

[window.ts:282](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L282)

## Methods

### \_handleTauriEvent

**_handleTauriEvent**<`T`\>(`event`, `handler`): `boolean`

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

___

### center

**center**(): `Promise`<`void`\>

Centers the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.center();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### close

**close**(): `Promise`<`void`\>

Closes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.close();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### emit

**emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[emit](window.WebviewWindowHandle.md#emit)

___

### hide

**hide**(): `Promise`<`void`\>

Sets the window visibility to false.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.hide();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### innerPosition

**innerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.innerPosition();
```

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's inner position.

___

### innerSize

**innerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.innerSize();
```

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's inner size.

___

### isDecorated

**isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const decorated = await appWindow.isDecorated();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is decorated or not.

___

### isFullscreen

**isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const fullscreen = await appWindow.isFullscreen();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is in fullscreen mode or not.

___

### isMaximized

**isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const maximized = await appWindow.isMaximized();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is maximized or not.

___

### isResizable

**isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const resizable = await appWindow.isResizable();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is resizable or not.

___

### isVisible

**isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const visible = await appWindow.isVisible();
```

#### Returns

`Promise`<`boolean`\>

Whether the window is visible or not.

___

### listen

**listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

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
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[listen](window.WebviewWindowHandle.md#listen)

___

### maximize

**maximize**(): `Promise`<`void`\>

Maximizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.maximize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### minimize

**minimize**(): `Promise`<`void`\>

Minimizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.minimize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### onCloseRequested

**onCloseRequested**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window close requested. Emitted when the user requests to closes the window.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
import { confirm } from '@tauri-apps/api/dialog';
const unlisten = await appWindow.onCloseRequested(async (event) => {
  const confirmed = await confirm('Are you sure?');
  if (!confirmed) {
    // user did not confirm closing the window; let's prevent it
    event.preventDefault();
  }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`event`: [`CloseRequestedEvent`](window.CloseRequestedEvent.md)) => `void` |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### onFileDropEvent

**onFileDropEvent**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the window,
drops the files or cancels the operation.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onFileDropEvent((event) => {
 if (event.payload.type === 'hover') {
   console.log('User hovering', event.payload.paths);
 } else if (event.payload.type === 'drop') {
   console.log('User dropped', event.payload.paths);
 } else {
   console.log('File drop cancelled');
 }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`FileDropEvent`](../modules/window.md#filedropevent)\> |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### onFocusChanged

**onFocusChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window focus change.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onFocusChanged(({ payload: focused }) => {
 console.log('Focus changed, window is focused? ' + focused);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`boolean`\> |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### onMenuClicked

**onMenuClicked**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to the window menu item click. The payload is the item id.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMenuClicked(({ payload: menuId }) => {
 console.log('Menu clicked: ' + menuId);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`string`\> |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### onMoved

**onMoved**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window move.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMoved(({ payload: position }) => {
 console.log('Window moved', position);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`PhysicalPosition`](window.PhysicalPosition.md)\> |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### onResized

**onResized**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window resize.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onResized(({ payload: size }) => {
 console.log('Window resized', size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`PhysicalSize`](window.PhysicalSize.md)\> |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### onScaleChanged

**onScaleChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window scale change. Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:
- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onScaleChanged(({ payload }) => {
 console.log('Scale changed', payload.scaleFactor, payload.size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`ScaleFactorChanged`](../interfaces/window.ScaleFactorChanged.md)\> |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### onThemeChanged

**onThemeChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to the system theme change.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onThemeChanged(({ payload: theme }) => {
 console.log('New theme: ' + theme);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`Theme`](../modules/window.md#theme)\> |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### once

**once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

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
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

#### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[once](window.WebviewWindowHandle.md#once)

___

### outerPosition

**outerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.outerPosition();
```

#### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's outer position.

___

### outerSize

**outerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.outerSize();
```

#### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's outer size.

___

### requestUserAttention

**requestUserAttention**(`requestType`): `Promise`<`void`\>

Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

#### Platform-specific

- **macOS:** `null` has no effect.
- **Linux:** Urgency levels have the same effect.

**`Example`**

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

___

### scaleFactor

**scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
```

#### Returns

`Promise`<`number`\>

The window's monitor scale factor.

___

### setAlwaysOnTop

**setAlwaysOnTop**(`alwaysOnTop`): `Promise`<`void`\>

Whether the window should always be on top of other windows.

**`Example`**

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

___

### setCursorGrab

**setCursorGrab**(`grab`): `Promise`<`void`\>

Grabs the cursor, preventing it from leaving the window.

There's no guarantee that the cursor will be hidden. You should
hide it by yourself if you want so.

#### Platform-specific

- **Linux:** Unsupported.
- **macOS:** This locks the cursor in a fixed location, which looks visually awkward.

**`Example`**

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

___

### setCursorIcon

**setCursorIcon**(`icon`): `Promise`<`void`\>

Modifies the cursor icon of the window.

**`Example`**

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

___

### setCursorPosition

**setCursorPosition**(`position`): `Promise`<`void`\>

Changes the position of the cursor in window coordinates.

**`Example`**

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

___

### setCursorVisible

**setCursorVisible**(`visible`): `Promise`<`void`\>

Modifies the cursor's visibility.

#### Platform-specific

- **Windows:** The cursor is only hidden within the confines of the window.
- **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
  outside of the window.

**`Example`**

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

___

### setDecorations

**setDecorations**(`decorations`): `Promise`<`void`\>

Whether the window should have borders and bars.

**`Example`**

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

___

### setFocus

**setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFocus();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### setFullscreen

**setFullscreen**(`fullscreen`): `Promise`<`void`\>

Sets the window fullscreen state.

**`Example`**

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

___

### setIcon

**setIcon**(`icon`): `Promise`<`void`\>

Sets the window icon.

**`Example`**

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

___

### setMaxSize

**setMaxSize**(`size`): `Promise`<`void`\>

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

**`Example`**

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

___

### setMinSize

**setMinSize**(`size`): `Promise`<`void`\>

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

**`Example`**

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

___

### setPosition

**setPosition**(`position`): `Promise`<`void`\>

Sets the window outer position.

**`Example`**

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

___

### setResizable

**setResizable**(`resizable`): `Promise`<`void`\>

Updates the window resizable flag.

**`Example`**

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

___

### setSize

**setSize**(`size`): `Promise`<`void`\>

Resizes the window with a new inner size.

**`Example`**

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

___

### setSkipTaskbar

**setSkipTaskbar**(`skip`): `Promise`<`void`\>

Whether to show the window icon in the task bar or not.

**`Example`**

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

___

### setTitle

**setTitle**(`title`): `Promise`<`void`\>

Sets the window title.

**`Example`**

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

___

### show

**show**(): `Promise`<`void`\>

Sets the window visibility to true.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.show();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### startDragging

**startDragging**(): `Promise`<`void`\>

Starts dragging the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.startDragging();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### theme

**theme**(): `Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

Gets the window's current theme.

#### Platform-specific

- **Linux:** Not implemented, always returns `light`.
- **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const theme = await appWindow.theme();
```

#### Returns

`Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

The window theme.

___

### toggleMaximize

**toggleMaximize**(): `Promise`<`void`\>

Toggles the window maximized state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.toggleMaximize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### unmaximize

**unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unmaximize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### unminimize

**unminimize**(): `Promise`<`void`\>

Unminimizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unminimize();
```

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.
