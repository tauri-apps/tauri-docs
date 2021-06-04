---
title: "Interface: WindowOptions"
sidebar_label: "WindowOptions"
custom_edit_url: null
hide_title: true
---

# Interface: WindowOptions

[window](../modules/window.md).WindowOptions

Configuration for the window to create.

## Properties

### alwaysOnTop

• `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

#### Defined in

[window.ts:821](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L821)

___

### decorations

• `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

#### Defined in

[window.ts:819](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L819)

___

### focus

• `Optional` **focus**: `boolean`

Whether the window will be initially hidden or focused.

#### Defined in

[window.ts:811](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L811)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

#### Defined in

[window.ts:809](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L809)

___

### height

• `Optional` **height**: `number`

The initial height.

#### Defined in

[window.ts:795](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L795)

___

### maxHeight

• `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

#### Defined in

[window.ts:803](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L803)

___

### maxWidth

• `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

#### Defined in

[window.ts:801](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L801)

___

### maximized

• `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

#### Defined in

[window.ts:815](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L815)

___

### minHeight

• `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

#### Defined in

[window.ts:799](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L799)

___

### minWidth

• `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

#### Defined in

[window.ts:797](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L797)

___

### resizable

• `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

#### Defined in

[window.ts:805](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L805)

___

### skipTaskbar

• `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

#### Defined in

[window.ts:823](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L823)

___

### title

• `Optional` **title**: `string`

Window title.

#### Defined in

[window.ts:807](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L807)

___

### transparent

• `Optional` **transparent**: `boolean`

Whether the window is transparent or not.

#### Defined in

[window.ts:813](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L813)

___

### url

• `Optional` **url**: `string`

Remote URL or local file path to open, e.g. `https://github.com/tauri-apps` or `path/to/page.html`.

#### Defined in

[window.ts:787](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L787)

___

### visible

• `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

#### Defined in

[window.ts:817](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L817)

___

### width

• `Optional` **width**: `number`

The initial width.

#### Defined in

[window.ts:793](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L793)

___

### x

• `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

#### Defined in

[window.ts:789](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L789)

___

### y

• `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

#### Defined in

[window.ts:791](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L791)
