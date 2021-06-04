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

• `Const` **appWindow**: [WindowManager](../classes/window.windowmanager.md)

The manager for the current window. Allows you to manipulate the window object.

#### Defined in

[window.ts:780](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/window.ts#L780)

## Functions

### availableMonitors

▸ **availableMonitors**(): `Promise`<[Monitor](../interfaces/window.monitor.md)[]\>

Returns the list of all the monitors available on the system.

#### Returns

`Promise`<[Monitor](../interfaces/window.monitor.md)[]\>

#### Defined in

[window.ts:853](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/window.ts#L853)

___

### currentMonitor

▸ **currentMonitor**(): `Promise`<[Monitor](../interfaces/window.monitor.md) \| ``null``\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

#### Returns

`Promise`<[Monitor](../interfaces/window.monitor.md) \| ``null``\>

#### Defined in

[window.ts:830](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/window.ts#L830)

___

### getAll

▸ **getAll**(): `WindowDef`[]

Gets metadata for all available webview windows.

#### Returns

`WindowDef`[]

The list of webview handles.

#### Defined in

[window.ts:130](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/window.ts#L130)

___

### getCurrent

▸ **getCurrent**(): [WebviewWindowHandle](../classes/window.webviewwindowhandle.md)

Get a handle to the current webview window. Allows emitting and listening to events from the backend that are tied to the window.

#### Returns

[WebviewWindowHandle](../classes/window.webviewwindowhandle.md)

The current window handle.

#### Defined in

[window.ts:121](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/window.ts#L121)

___

### primaryMonitor

▸ **primaryMonitor**(): `Promise`<[Monitor](../interfaces/window.monitor.md) \| ``null``\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

#### Returns

`Promise`<[Monitor](../interfaces/window.monitor.md) \| ``null``\>

#### Defined in

[window.ts:843](https://github.com/tauri-apps/tauri/blob/4bee3a7/tooling/api/src/window.ts#L843)
