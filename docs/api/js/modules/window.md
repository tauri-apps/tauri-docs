[@tauri-apps/api](../README.md) / window

# Module: window

Provides APIs to create windows, communicate with other windows and manipulate the current window.

This package is also accessible with `window.__TAURI__.window` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "window": {
        "all": true, // enable all window APIs
        "create": true, // enable window creation
        "center": true,
        "requestUserAttention": true,
        "setResizable": true,
        "setTitle": true,
        "maximize": true,
        "unmaximize": true,
        "minimize": true,
        "unminimize": true,
        "show": true,
        "hide": true,
        "close": true,
        "setDecorations": true,
        "setAlwaysOnTop": true,
        "setSize": true,
        "setMinSize": true,
        "setMaxSize": true,
        "setPosition": true,
        "setFullscreen": true,
        "setFocus": true,
        "setIcon": true,
        "setSkipTaskbar": true,
        "setCursorGrab": true,
        "setCursorVisible": true,
        "setCursorIcon": true,
        "setCursorPosition": true,
        "startDragging": true,
        "print": true
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

# Window events

Events can be listened using `appWindow.listen`:
```typescript
import { appWindow } from '@tauri-apps/api/window'
appWindow.listen('tauri://move', ({ event, payload }) => {
  const { x, y } = payload // payload here is a `PhysicalPosition`
})
```

Window-specific events emitted by the backend:

#### 'tauri://resize'
Emitted when the size of the window has changed.
*EventPayload*:
```typescript
type ResizePayload = PhysicalSize
```

#### 'tauri://move'
Emitted when the position of the window has changed.
*EventPayload*:
```typescript
type MovePayload = PhysicalPosition
```

#### 'tauri://close-requested'
Emitted when the user requests the window to be closed.
If a listener is registered for this event, Tauri won't close the window so you must call `appWindow.close()` manually.

#### 'tauri://focus'
Emitted when the window gains focus.

#### 'tauri://blur'
Emitted when the window loses focus.

#### 'tauri://scale-change'
Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:
- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.
*Event payload*:
```typescript
interface ScaleFactorChanged {
  scaleFactor: number
  size: PhysicalSize
}
```

#### 'tauri://menu'
Emitted when a menu item is clicked.
*EventPayload*:
```typescript
type MenuClicked = string
```

## Enumerations

- [UserAttentionType](../enums/window.UserAttentionType.md)

## Classes

- [LogicalPosition](../classes/window.LogicalPosition.md)
- [LogicalSize](../classes/window.LogicalSize.md)
- [PhysicalPosition](../classes/window.PhysicalPosition.md)
- [PhysicalSize](../classes/window.PhysicalSize.md)
- [WebviewWindow](../classes/window.WebviewWindow.md)
- [WebviewWindowHandle](../classes/window.WebviewWindowHandle.md)
- [WindowManager](../classes/window.WindowManager.md)

## Interfaces

- [Monitor](../interfaces/window.Monitor.md)
- [WindowOptions](../interfaces/window.WindowOptions.md)

## Type Aliases

### CursorIcon

Ƭ **CursorIcon**: ``"default"`` \| ``"crosshair"`` \| ``"hand"`` \| ``"arrow"`` \| ``"move"`` \| ``"text"`` \| ``"wait"`` \| ``"help"`` \| ``"progress"`` \| ``"notAllowed"`` \| ``"contextMenu"`` \| ``"cell"`` \| ``"verticalText"`` \| ``"alias"`` \| ``"copy"`` \| ``"noDrop"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"allScroll"`` \| ``"zoomIn"`` \| ``"zoomOut"`` \| ``"eResize"`` \| ``"nResize"`` \| ``"neResize"`` \| ``"nwResize"`` \| ``"sResize"`` \| ``"seResize"`` \| ``"swResize"`` \| ``"wResize"`` \| ``"ewResize"`` \| ``"nsResize"`` \| ``"neswResize"`` \| ``"nwseResize"`` \| ``"colResize"`` \| ``"rowResize"``

#### Defined in

[window.ts:237](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L237)

___

### Theme

Ƭ **Theme**: ``"light"`` \| ``"dark"``

#### Defined in

[window.ts:116](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L116)

## Variables

### appWindow

• **appWindow**: [`WebviewWindow`](../classes/window.WebviewWindow.md)

The WebviewWindow for the current window.

#### Defined in

[window.ts:1599](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L1599)

## Functions

### availableMonitors

▸ **availableMonitors**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

Returns the list of all the monitors available on the system.

**`example`**
```typescript
import { availableMonitors } from '@tauri-apps/api/window';
const monitors = availableMonitors();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

#### Defined in

[window.ts:1738](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L1738)

___

### currentMonitor

▸ **currentMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

**`example`**
```typescript
import { currentMonitor } from '@tauri-apps/api/window';
const monitor = currentMonitor();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

#### Defined in

[window.ts:1693](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L1693)

___

### getAll

▸ **getAll**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)[]

Gets an instance of `WebviewWindow` for all available webview windows.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)[]

The list of WebviewWindow.

#### Defined in

[window.ts:295](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L295)

___

### getCurrent

▸ **getCurrent**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)

Get an instance of `WebviewWindow` for the current webview window.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)

The current WebviewWindow.

#### Defined in

[window.ts:283](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L283)

___

### primaryMonitor

▸ **primaryMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

**`example`**
```typescript
import { primaryMonitor } from '@tauri-apps/api/window';
const monitor = primaryMonitor();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

#### Defined in

[window.ts:1716](https://github.com/tauri-apps/tauri/blob/07bc998/tooling/api/src/window.ts#L1716)
