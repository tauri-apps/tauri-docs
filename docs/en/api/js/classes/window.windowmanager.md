---
title: "Class: WindowManager"
sidebar_label: "WindowManager"
custom_edit_url: null
hide_title: true
---

# Class: WindowManager

[window](../modules/window.md).WindowManager

## Constructors

### constructor

\+ **new WindowManager**(): [*WindowManager*](window.windowmanager.md)

**Returns:** [*WindowManager*](window.windowmanager.md)

## Methods

### close

▸ **close**(): *Promise*<void\>

Closes the window.

**Returns:** *Promise*<void\>

Defined in: [window.ts:267](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L267)

___

### hide

▸ **hide**(): *Promise*<void\>

Sets the window visibility to false.

**Returns:** *Promise*<void\>

Defined in: [window.ts:253](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L253)

___

### maximize

▸ **maximize**(): *Promise*<void\>

Maximizes the window.

**Returns:** *Promise*<void\>

Defined in: [window.ts:183](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L183)

___

### minimize

▸ **minimize**(): *Promise*<void\>

Minimizes the window.

**Returns:** *Promise*<void\>

Defined in: [window.ts:211](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L211)

___

### resize

▸ **resize**(`width`: *number*, `height`: *number*): *Promise*<void\>

Resizes the window.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`width` | *number* | The new window width   |
`height` | *number* | The new window height   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:347](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L347)

___

### setAlwaysOnTop

▸ **setAlwaysOnTop**(`alwaysOnTop`: *boolean*): *Promise*<void\>

Whether the window should always be on top of other windows.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`alwaysOnTop` | *boolean* | Whether the window should always be on top of other windows or not   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:298](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L298)

___

### setDecorations

▸ **setDecorations**(`decorations`: *boolean*): *Promise*<void\>

Whether the window should have borders and bars.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`decorations` | *boolean* | Whether the window should have borders and bars   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:282](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L282)

___

### setFullscreen

▸ **setFullscreen**(`fullscreen`: *boolean*): *Promise*<void\>

Sets the window fullscreen state.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`fullscreen` | *boolean* | Whether the window should go to fullscreen or not   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:450](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L450)

___

### setHeight

▸ **setHeight**(`height`: *number*): *Promise*<void\>

Sets the window height.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`height` | *number* | The new window height   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:330](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L330)

___

### setIcon

▸ **setIcon**(`icon`: *string* \| *number*[]): *Promise*<void\>

Sets the window icon.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`icon` | *string* \| *number*[] | Icon bytes or path to the icon file   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:466](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L466)

___

### setMaxSize

▸ **setMaxSize**(`maxWidth`: *number*, `maxHeight`: *number*): *Promise*<void\>

Sets the window max size.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`maxWidth` | *number* | The new window max width   |
`maxHeight` | *number* | The new window max height   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:383](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L383)

___

### setMinSize

▸ **setMinSize**(`minWidth`: *number*, `minHeight`: *number*): *Promise*<void\>

Sets the window min size.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`minWidth` | *number* | The new window min width   |
`minHeight` | *number* | The new window min height   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:365](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L365)

___

### setPosition

▸ **setPosition**(`x`: *number*, `y`: *number*): *Promise*<void\>

Sets the window position.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`x` | *number* | The new window x position   |
`y` | *number* | The new window y position   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:433](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L433)

___

### setResizable

▸ **setResizable**(`resizable`: *boolean*): *Promise*<void\>

Updates the window resizable flag.

#### Parameters:

Name | Type |
:------ | :------ |
`resizable` | *boolean* |

**Returns:** *Promise*<void\>

Defined in: [window.ts:152](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L152)

___

### setTitle

▸ **setTitle**(`title`: *string*): *Promise*<void\>

Sets the window title.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`title` | *string* | The new title   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:168](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L168)

___

### setWidth

▸ **setWidth**(`width`: *number*): *Promise*<void\>

Sets the window width.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`width` | *number* | The new window width   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:314](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L314)

___

### setX

▸ **setX**(`x`: *number*): *Promise*<void\>

Sets the window x position.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`x` | *number* | The new window x position   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:400](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L400)

___

### setY

▸ **setY**(`y`: *number*): *Promise*<void\>

Sets the window y position.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`y` | *number* | The new window y position   |

**Returns:** *Promise*<void\>

Defined in: [window.ts:416](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L416)

___

### show

▸ **show**(): *Promise*<void\>

Sets the window visibility to true.

**Returns:** *Promise*<void\>

Defined in: [window.ts:239](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L239)

___

### unmaximize

▸ **unmaximize**(): *Promise*<void\>

Unmaximizes the window.

**Returns:** *Promise*<void\>

Defined in: [window.ts:197](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L197)

___

### unminimize

▸ **unminimize**(): *Promise*<void\>

Unminimizes the window.

**Returns:** *Promise*<void\>

Defined in: [window.ts:225](https://github.com/tauri-apps/tauri/blob/850a99a5/tooling/api/src/window.ts#L225)
