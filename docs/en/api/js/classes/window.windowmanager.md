---
title: "Class: WindowManager"
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

Defined in: [window.ts:471](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L471)

___

### hide

▸ **hide**(): *Promise*<void\>

Sets the window visibility to false.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:457](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L457)

___

### innerPosition

▸ **innerPosition**(): *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**Returns:** *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

Defined in: [window.ts:283](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L283)

___

### innerSize

▸ **innerSize**(): *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**Returns:** *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

Defined in: [window.ts:306](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L306)

___

### isFullscreen

▸ **isFullscreen**(): *Promise*<boolean\>

Gets the window's current fullscreen state.

**Returns:** *Promise*<boolean\>

Defined in: [window.ts:329](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L329)

___

### isMaximized

▸ **isMaximized**(): *Promise*<boolean\>

Gets the window's current maximized state.

**Returns:** *Promise*<boolean\>

Defined in: [window.ts:339](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L339)

___

### maximize

▸ **maximize**(): *Promise*<void\>

Maximizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:387](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L387)

___

### minimize

▸ **minimize**(): *Promise*<void\>

Minimizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:415](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L415)

___

### outerPosition

▸ **outerPosition**(): *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**Returns:** *Promise*<[*PhysicalPosition*](window.physicalposition.md)\>

Defined in: [window.ts:293](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L293)

___

### outerSize

▸ **outerSize**(): *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**Returns:** *Promise*<[*PhysicalSize*](window.physicalsize.md)\>

Defined in: [window.ts:319](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L319)

___

### scaleFactor

▸ **scaleFactor**(): *Promise*<number\>

The scale factor that can be used to map physical pixels to logical pixels.

**Returns:** *Promise*<number\>

Defined in: [window.ts:273](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L273)

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

Defined in: [window.ts:502](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L502)

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

Defined in: [window.ts:486](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L486)

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

Defined in: [window.ts:616](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L616)

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

Defined in: [window.ts:632](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L632)

___

### setMaxSize

▸ **setMaxSize**(`size`: *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md)): *Promise*<void\>

Sets the window max size.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`size` | *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md) | The logical or physical size.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:566](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L566)

___

### setMinSize

▸ **setMinSize**(`size`: *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md)): *Promise*<void\>

Sets the window min size.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`size` | *undefined* \| [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md) | The logical or physical size.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:540](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L540)

___

### setPosition

▸ **setPosition**(`position`: [*PhysicalPosition*](window.physicalposition.md) \| [*LogicalPosition*](window.logicalposition.md)): *Promise*<void\>

Sets the window position.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`position` | [*PhysicalPosition*](window.physicalposition.md) \| [*LogicalPosition*](window.logicalposition.md) | The new position, in logical or physical pixels.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:592](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L592)

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

Defined in: [window.ts:356](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L356)

___

### setSize

▸ **setSize**(`size`: [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md)): *Promise*<void\>

Resizes the window.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`size` | [*PhysicalSize*](window.physicalsize.md) \| [*LogicalSize*](window.logicalsize.md) | The logical or physical size.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:518](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L518)

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

Defined in: [window.ts:372](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L372)

___

### show

▸ **show**(): *Promise*<void\>

Sets the window visibility to true.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:443](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L443)

___

### startDragging

▸ **startDragging**(): *Promise*<void\>

Starts dragging the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:649](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L649)

___

### unmaximize

▸ **unmaximize**(): *Promise*<void\>

Unmaximizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:401](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L401)

___

### unminimize

▸ **unminimize**(): *Promise*<void\>

Unminimizes the window.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [window.ts:429](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/window.ts#L429)
