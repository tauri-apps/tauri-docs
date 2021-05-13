---
title: "Module: window"
sidebar_label: "window"
custom_edit_url: null
hide_title: true
---

# Module: window

Provides APIs to create windows, communicate with other windows and manipulate the current window.

## Table of contents

### Classes

- [LogicalPosition](../classes/window.logicalposition.md)
- [LogicalSize](../classes/window.logicalsize.md)
- [PhysicalPosition](../classes/window.physicalposition.md)
- [PhysicalSize](../classes/window.physicalsize.md)
- [WebviewWindow](../classes/window.webviewwindow.md)
- [WebviewWindowHandle](../classes/window.webviewwindowhandle.md)
- [WindowManager](../classes/window.windowmanager.md)

### Interfaces

- [Monitor](../interfaces/window.monitor.md)
- [WindowOptions](../interfaces/window.windowoptions.md)

## Variables

### appWindow

• `Const` **appWindow**: [*WindowManager*](../classes/window.windowmanager.md)

The manager for the current window. Allows you to manipulate the window object.

Defined in: [window.ts:660](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L660)

## Functions

### availableMonitors

▸ **availableMonitors**(): *Promise*<[*Monitor*](../interfaces/window.monitor.md)[]\>

Returns the list of all the monitors available on the system.

**Returns:** *Promise*<[*Monitor*](../interfaces/window.monitor.md)[]\>

Defined in: [window.ts:729](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L729)

___

### currentMonitor

▸ **currentMonitor**(): *Promise*<[*Monitor*](../interfaces/window.monitor.md) \| *null*\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

**Returns:** *Promise*<[*Monitor*](../interfaces/window.monitor.md) \| *null*\>

Defined in: [window.ts:706](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L706)

___

### getAll

▸ **getAll**(): WindowDef[]

Gets metadata for all available webview windows.

**Returns:** WindowDef[]

The list of webview handles.

Defined in: [window.ts:113](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L113)

___

### getCurrent

▸ **getCurrent**(): [*WebviewWindowHandle*](../classes/window.webviewwindowhandle.md)

Get a handle to the current webview window. Allows emitting and listening to events from the backend that are tied to the window.

**Returns:** [*WebviewWindowHandle*](../classes/window.webviewwindowhandle.md)

The current window handle.

Defined in: [window.ts:104](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L104)

___

### primaryMonitor

▸ **primaryMonitor**(): *Promise*<[*Monitor*](../interfaces/window.monitor.md) \| *null*\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

**Returns:** *Promise*<[*Monitor*](../interfaces/window.monitor.md) \| *null*\>

Defined in: [window.ts:719](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L719)
