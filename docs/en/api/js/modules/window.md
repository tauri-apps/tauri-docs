---
title: "Module: window"
sidebar_label: "window"
custom_edit_url: null
hide_title: true
---

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
        "create": true // enable window creation
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

#### 'tauri://destroyed'
Emitted after the window is closed.

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

- [UserAttentionType](../enums/window.userattentiontype.md)

## Classes

- [LogicalPosition](../classes/window.logicalposition.md)
- [LogicalSize](../classes/window.logicalsize.md)
- [PhysicalPosition](../classes/window.physicalposition.md)
- [PhysicalSize](../classes/window.physicalsize.md)
- [WebviewWindow](../classes/window.webviewwindow.md)
- [WebviewWindowHandle](../classes/window.webviewwindowhandle.md)
- [WindowManager](../classes/window.windowmanager.md)

## Interfaces

- [Monitor](../interfaces/window.monitor.md)
- [WindowOptions](../interfaces/window.windowoptions.md)

## Variables

### appWindow

• `Const` **appWindow**: [`WindowManager`](../classes/window.windowmanager.md)

The manager for the current window. Allows you to manipulate the window object, listen and emit events.

#### Defined in

[window.ts:906](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L906)

## Functions

### availableMonitors

▸ **availableMonitors**(): `Promise`<[`Monitor`](../interfaces/window.monitor.md)[]\>

Returns the list of all the monitors available on the system.

#### Returns

`Promise`<[`Monitor`](../interfaces/window.monitor.md)[]\>

#### Defined in

[window.ts:981](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L981)

___

### currentMonitor

▸ **currentMonitor**(): `Promise`<[`Monitor`](../interfaces/window.monitor.md) \| ``null``\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

#### Returns

`Promise`<[`Monitor`](../interfaces/window.monitor.md) \| ``null``\>

#### Defined in

[window.ts:958](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L958)

___

### getAll

▸ **getAll**(): `WindowDef`[]

Gets metadata for all available webview windows.

#### Returns

`WindowDef`[]

The list of webview handles.

#### Defined in

[window.ts:206](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L206)

___

### getCurrent

▸ **getCurrent**(): [`WebviewWindowHandle`](../classes/window.webviewwindowhandle.md)

Get a handle to the current webview window. Allows emitting and listening to events from the backend that are tied to the window.

#### Returns

[`WebviewWindowHandle`](../classes/window.webviewwindowhandle.md)

The current window handle.

#### Defined in

[window.ts:197](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L197)

___

### primaryMonitor

▸ **primaryMonitor**(): `Promise`<[`Monitor`](../interfaces/window.monitor.md) \| ``null``\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

#### Returns

`Promise`<[`Monitor`](../interfaces/window.monitor.md) \| ``null``\>

#### Defined in

[window.ts:971](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L971)
