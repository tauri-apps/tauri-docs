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

• **new WindowManager**()

## Methods

### center

▸ **center**(): `Promise`<`void`\>

Centers the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:419](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L419)

___

### close

▸ **close**(): `Promise`<`void`\>

Closes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:584](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L584)

___

### hide

▸ **hide**(): `Promise`<`void`\>

Sets the window visibility to false.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:570](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L570)

___

### innerPosition

▸ **innerPosition**(): `Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

#### Defined in

[window.ts:316](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L316)

___

### innerSize

▸ **innerSize**(): `Promise`<[`PhysicalSize`](window.physicalsize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

#### Returns

`Promise`<[`PhysicalSize`](window.physicalsize.md)\>

#### Defined in

[window.ts:339](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L339)

___

### isDecorated

▸ **isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:382](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L382)

___

### isFullscreen

▸ **isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:362](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L362)

___

### isMaximized

▸ **isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:372](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L372)

___

### isResizable

▸ **isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:392](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L392)

___

### isVisible

▸ **isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[window.ts:402](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L402)

___

### maximize

▸ **maximize**(): `Promise`<`void`\>

Maximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:500](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L500)

___

### minimize

▸ **minimize**(): `Promise`<`void`\>

Minimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:528](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L528)

___

### outerPosition

▸ **outerPosition**(): `Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

#### Returns

`Promise`<[`PhysicalPosition`](window.physicalposition.md)\>

#### Defined in

[window.ts:326](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L326)

___

### outerSize

▸ **outerSize**(): `Promise`<[`PhysicalSize`](window.physicalsize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

#### Returns

`Promise`<[`PhysicalSize`](window.physicalsize.md)\>

#### Defined in

[window.ts:352](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L352)

___

### requestUserAttention

▸ **requestUserAttention**(`requestType`): `Promise`<`void`\>

 Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

## Platform-specific

- **macOS:** `null` has no effect.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestType` | ``null`` \| [`UserAttentionType`](../enums/window.userattentiontype.md) |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:443](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L443)

___

### scaleFactor

▸ **scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

#### Returns

`Promise`<`number`\>

#### Defined in

[window.ts:306](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L306)

___

### setAlwaysOnTop

▸ **setAlwaysOnTop**(`alwaysOnTop`): `Promise`<`void`\>

Whether the window should always be on top of other windows.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:615](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L615)

___

### setDecorations

▸ **setDecorations**(`decorations`): `Promise`<`void`\>

Whether the window should have borders and bars.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:599](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L599)

___

### setFocus

▸ **setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:787](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L787)

___

### setFullscreen

▸ **setFullscreen**(`fullscreen`): `Promise`<`void`\>

Sets the window fullscreen state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:772](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L772)

___

### setIcon

▸ **setIcon**(`icon`): `Promise`<`void`\>

Sets the window icon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| `number`[] | Icon bytes or path to the icon file. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:802](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L802)

___

### setMaxSize

▸ **setMaxSize**(`size`): `Promise`<`void`\>

Sets the window max size. If the `size` argument is undefined, the max size is unset.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setMaxSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| [`PhysicalSize`](window.physicalsize.md) \| [`LogicalSize`](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:704](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L704)

___

### setMinSize

▸ **setMinSize**(`size`): `Promise`<`void`\>

Sets the window min size. If the `size` argument is not provided, the min size is unset.

**`example`**
```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window'
await appWindow.setMinSize(new PhysicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| [`PhysicalSize`](window.physicalsize.md) \| [`LogicalSize`](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:668](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L668)

___

### setPosition

▸ **setPosition**(`position`): `Promise`<`void`\>

Sets the window position.

**`example`**
```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window'
await appWindow.setPosition(new LogicalPosition(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.physicalposition.md) \| [`LogicalPosition`](window.logicalposition.md) | The new position, in logical or physical pixels. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:740](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L740)

___

### setResizable

▸ **setResizable**(`resizable`): `Promise`<`void`\>

Updates the window resizable flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:469](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L469)

___

### setSize

▸ **setSize**(`size`): `Promise`<`void`\>

Resizes the window.

**`example`**
```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window'
await appWindow.setSize(new LogicalSize(600, 500))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`PhysicalSize`](window.physicalsize.md) \| [`LogicalSize`](window.logicalsize.md) | The logical or physical size. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:636](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L636)

___

### setSkipTaskbar

▸ **setSkipTaskbar**(`skip`): `Promise`<`void`\>

Whether to show the window icon in the task bar or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:820](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L820)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<`void`\>

Sets the window title.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:485](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L485)

___

### show

▸ **show**(): `Promise`<`void`\>

Sets the window visibility to true.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:556](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L556)

___

### startDragging

▸ **startDragging**(): `Promise`<`void`\>

Starts dragging the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:835](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L835)

___

### unmaximize

▸ **unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:514](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L514)

___

### unminimize

▸ **unminimize**(): `Promise`<`void`\>

Unminimizes the window.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[window.ts:542](https://github.com/tauri-apps/tauri/blob/2a65ac1/tooling/api/src/window.ts#L542)
