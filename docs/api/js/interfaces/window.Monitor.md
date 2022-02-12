[@tauri-apps/api](../index.md) / [window](../modules/window.md) / Monitor

# Interface: Monitor

[window](../modules/window.md).Monitor

Allows you to retrieve information about a given monitor.

## Properties

### name

• **name**: ``null`` \| `string`

Human-readable name of the monitor

#### Defined in

[window.ts:115](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L115)

___

### position

• **position**: [`PhysicalPosition`](../classes/window.PhysicalPosition.md)

the Top-left corner position of the monitor relative to the larger full screen area.

#### Defined in

[window.ts:119](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L119)

___

### scaleFactor

• **scaleFactor**: `number`

The scale factor that can be used to map physical pixels to logical pixels.

#### Defined in

[window.ts:121](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L121)

___

### size

• **size**: [`PhysicalSize`](../classes/window.PhysicalSize.md)

The monitor's resolution.

#### Defined in

[window.ts:117](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L117)
