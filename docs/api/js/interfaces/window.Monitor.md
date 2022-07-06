[@tauri-apps/api](../README.md) / [window](../modules/window.md) / Monitor

# Interface: Monitor

[window](../modules/window.md).Monitor

Allows you to retrieve information about a given monitor.

## Properties

### name

• **name**: ``null`` \| `string`

Human-readable name of the monitor

#### Defined in

[window.ts:72](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L72)

___

### position

• **position**: [`PhysicalPosition`](../classes/window.PhysicalPosition.md)

the Top-left corner position of the monitor relative to the larger full screen area.

#### Defined in

[window.ts:76](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L76)

___

### scaleFactor

• **scaleFactor**: `number`

The scale factor that can be used to map physical pixels to logical pixels.

#### Defined in

[window.ts:78](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L78)

___

### size

• **size**: [`PhysicalSize`](../classes/window.PhysicalSize.md)

The monitor's resolution.

#### Defined in

[window.ts:74](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/window.ts#L74)
