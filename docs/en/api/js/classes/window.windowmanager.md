---
sidebar_label: "WindowManager"
custom_edit_url: null
hide_title: true
---

# Class: WindowManager

[window](../modules/window.md).WindowManager

Manage the current window object.

## Constructors

### constructor

\+ **new WindowManager**(): [*WindowManager*](window.windowmanager.md)

**Returns:** [*WindowManager*](window.windowmanager.md)

## Methods

### close

▸ **close**(): *Promise*<void\>

Closes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:488](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L488)

___

### hide

▸ **hide**(): *Promise*<void\>

Sets the window visibility to false.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:474](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L474)

___

### innerPosition

▸ **innerPosition**(): *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**Returns:** *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

Defined in: [window.ts:300](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L300)

___

### innerSize

▸ **innerSize**(): *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**Returns:** *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

Defined in: [window.ts:323](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L323)

___

### isFullscreen

▸ **isFullscreen**(): *Promise*<boolean\>

Gets the window's current fullscreen state.

**Returns:** *Promise*<boolean\>

Defined in: [window.ts:346](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L346)

___

### isMaximized

▸ **isMaximized**(): *Promise*<boolean\>

Gets the window's current maximized state.

**Returns:** *Promise*<boolean\>

Defined in: [window.ts:356](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L356)

___

### maximize

▸ **maximize**(): *Promise*<void\>

Maximizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:404](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L404)

___

### minimize

▸ **minimize**(): *Promise*<void\>

Minimizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:432](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L432)

___

### outerPosition

▸ **outerPosition**(): *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**Returns:** *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

Defined in: [window.ts:310](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L310)

___

### outerSize

▸ **outerSize**(): *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**Returns:** *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

Defined in: [window.ts:336](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L336)

___

### scaleFactor

▸ **scaleFactor**(): *Promise*<number\>

The scale factor that can be used to map physical pixels to logical pixels.

**Returns:** *Promise*<number\>

Defined in: [window.ts:290](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L290)

___

### setAlwaysOnTop

▸ **setAlwaysOnTop**(`alwaysOnTop`: *boolean*): *Promise*<void\>

Whether the window should always be on top of other windows.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`alwaysOnTop` | *boolean* | Whether the window should always be on top of other windows or not.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:519](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L519)

___

### setDecorations

▸ **setDecorations**(`decorations`: *boolean*): *Promise*<void\>

Whether the window should have borders and bars.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`decorations` | *boolean* | Whether the window should have borders and bars.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:503](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L503)

___

### setFullscreen

▸ **setFullscreen**(`fullscreen`: *boolean*): *Promise*<void\>

Sets the window fullscreen state.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fullscreen` | *boolean* | Whether the window should go to fullscreen or not.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:676](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L676)

___

### setIcon

▸ **setIcon**(`icon`: *string* \| *number*[]): *Promise*<void\>

Sets the window icon.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`icon` | *string* \| *number*[] | Icon bytes or path to the icon file.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:692](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L692)

___

### setMaxSize

▸ **setMaxSize**(`size`: *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md)): *Promise*<void\>

Sets the window max size. If the `size` argument is undefined, the max size is unset.

**`example`** 
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setMaxSize(new LogicalSize(600, 500))
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`size` | *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md) | The logical or physical size.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:608](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L608)

___

### setMinSize

▸ **setMinSize**(`size`: *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md)): *Promise*<void\>

Sets the window min size. If the `size` argument is not provided, the min size is unset.

**`example`** 
```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window'
await appWindow.setMinSize(new PhysicalSize(600, 500))
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`size` | *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md) | The logical or physical size.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:572](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L572)

___

### setPosition

▸ **setPosition**(`position`: [*PhysicalPosition*](window.physicalposition.md) \| [*LogicalPosition*](window.logicalposition.md)): *Promise*<void\>

Sets the window position.

**`example`** 
```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window'
await appWindow.setPosition(new LogicalPosition(600, 500))
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`position` | [*PhysicalPosition*](window.physicalposition.md) \| [*LogicalPosition*](window.logicalposition.md) | The new position, in logical or physical pixels.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:644](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L644)

___

### setResizable

▸ **setResizable**(`resizable`: *boolean*): *Promise*<void\>

Updates the window resizable flag.

#### Parameters:

Name | Type |
:------ | :------ |
`resizable` | *boolean* |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:373](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L373)

___

### setSize

▸ **setSize**(`size`: [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md)): *Promise*<void\>

Resizes the window.

**`example`** 
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setSize(new LogicalSize(600, 500))
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`size` | [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md) | The logical or physical size.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:540](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L540)

___

### setTitle

▸ **setTitle**(`title`: *string*): *Promise*<void\>

Sets the window title.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`title` | *string* | The new title   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:389](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L389)

___

### show

▸ **show**(): *Promise*<void\>

Sets the window visibility to true.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:460](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L460)

___

### startDragging

▸ **startDragging**(): *Promise*<void\>

Starts dragging the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:709](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L709)

___

### unmaximize

▸ **unmaximize**(): *Promise*<void\>

Unmaximizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:418](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L418)

___

### unminimize

▸ **unminimize**(): *Promise*<void\>

Unminimizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:446](https://github.com/tauri-apps/tauri/blob/3afef190/tooling/api/src/window.ts#L446)
