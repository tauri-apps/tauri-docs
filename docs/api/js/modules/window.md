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
import { appWindow } from "@tauri-apps/api/window";
appWindow.listen("my-window-event", ({ event, payload }) => { });
```

## Enumerations

- [UserAttentionType](../enums/window.UserAttentionType.md)

## Classes

- [CloseRequestedEvent](../classes/window.CloseRequestedEvent.md)
- [LogicalPosition](../classes/window.LogicalPosition.md)
- [LogicalSize](../classes/window.LogicalSize.md)
- [PhysicalPosition](../classes/window.PhysicalPosition.md)
- [PhysicalSize](../classes/window.PhysicalSize.md)
- [WebviewWindow](../classes/window.WebviewWindow.md)
- [WebviewWindowHandle](../classes/window.WebviewWindowHandle.md)
- [WindowManager](../classes/window.WindowManager.md)

## Interfaces

- [Monitor](../interfaces/window.Monitor.md)
- [ScaleFactorChanged](../interfaces/window.ScaleFactorChanged.md)
- [WindowOptions](../interfaces/window.WindowOptions.md)

## Type Aliases

### CursorIcon

Ƭ **CursorIcon**: ``"default"`` \| ``"crosshair"`` \| ``"hand"`` \| ``"arrow"`` \| ``"move"`` \| ``"text"`` \| ``"wait"`` \| ``"help"`` \| ``"progress"`` \| ``"notAllowed"`` \| ``"contextMenu"`` \| ``"cell"`` \| ``"verticalText"`` \| ``"alias"`` \| ``"copy"`` \| ``"noDrop"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"allScroll"`` \| ``"zoomIn"`` \| ``"zoomOut"`` \| ``"eResize"`` \| ``"nResize"`` \| ``"neResize"`` \| ``"nwResize"`` \| ``"sResize"`` \| ``"seResize"`` \| ``"swResize"`` \| ``"wResize"`` \| ``"ewResize"`` \| ``"nsResize"`` \| ``"neswResize"`` \| ``"nwseResize"`` \| ``"colResize"`` \| ``"rowResize"``

#### Defined in

[window.ts:202](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/window.ts#L202)

___

### FileDropEvent

Ƭ **FileDropEvent**: { `paths`: `string`[] ; `type`: ``"hover"``  } \| { `paths`: `string`[] ; `type`: ``"drop"``  } \| { `type`: ``"cancel"``  }

The file drop event types.

#### Defined in

[window.ts:90](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/window.ts#L90)

___

### Theme

Ƭ **Theme**: ``"light"`` \| ``"dark"``

#### Defined in

[window.ts:67](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/window.ts#L67)

## Variables

### appWindow

• **appWindow**: [`WebviewWindow`](../classes/window.WebviewWindow.md)

The WebviewWindow for the current window.

#### Defined in

[window.ts:1871](https://github.com/tauri-apps/tauri/blob/95abf48/tooling/api/src/window.ts#L1871)

## Functions

### availableMonitors

▸ **availableMonitors**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

Returns the list of all the monitors available on the system.

**`Example`**

```typescript
import { availableMonitors } from '@tauri-apps/api/window';
const monitors = availableMonitors();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

___

### currentMonitor

▸ **currentMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

**`Example`**

```typescript
import { currentMonitor } from '@tauri-apps/api/window';
const monitor = currentMonitor();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

___

### getAll

▸ **getAll**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)[]

Gets an instance of `WebviewWindow` for all available webview windows.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)[]

The list of WebviewWindow.

___

### getCurrent

▸ **getCurrent**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)

Get an instance of `WebviewWindow` for the current webview window.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)

The current WebviewWindow.

___

### primaryMonitor

▸ **primaryMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

**`Example`**

```typescript
import { primaryMonitor } from '@tauri-apps/api/window';
const monitor = primaryMonitor();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>
