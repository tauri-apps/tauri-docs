# Interface: WindowOptions

[window](../modules/window.md).WindowOptions

Configuration for the window to create.

## Properties

### alwaysOnTop

• `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

#### Defined in

[window.ts:1183](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1183)

___

### center

• `Optional` **center**: `boolean`

Show window in the center of the screen..

#### Defined in

[window.ts:1149](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1149)

___

### decorations

• `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

#### Defined in

[window.ts:1181](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1181)

___

### fileDropEnabled

• `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

#### Defined in

[window.ts:1191](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1191)

___

### focus

• `Optional` **focus**: `boolean`

Whether the window will be initially hidden or focused.

#### Defined in

[window.ts:1173](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1173)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

#### Defined in

[window.ts:1171](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1171)

___

### height

• `Optional` **height**: `number`

The initial height.

#### Defined in

[window.ts:1157](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1157)

___

### maxHeight

• `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

#### Defined in

[window.ts:1165](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1165)

___

### maxWidth

• `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

#### Defined in

[window.ts:1163](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1163)

___

### maximized

• `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

#### Defined in

[window.ts:1177](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1177)

___

### minHeight

• `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

#### Defined in

[window.ts:1161](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1161)

___

### minWidth

• `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

#### Defined in

[window.ts:1159](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1159)

___

### resizable

• `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

#### Defined in

[window.ts:1167](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1167)

___

### skipTaskbar

• `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

#### Defined in

[window.ts:1185](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1185)

___

### title

• `Optional` **title**: `string`

Window title.

#### Defined in

[window.ts:1169](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1169)

___

### transparent

• `Optional` **transparent**: `boolean`

Whether the window is transparent or not.

#### Defined in

[window.ts:1175](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1175)

___

### url

• `Optional` **url**: `string`

Remote URL or local file path to open, e.g. `https://github.com/tauri-apps` or `path/to/page.html`.

#### Defined in

[window.ts:1147](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1147)

___

### visible

• `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

#### Defined in

[window.ts:1179](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1179)

___

### width

• `Optional` **width**: `number`

The initial width.

#### Defined in

[window.ts:1155](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1155)

___

### x

• `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

#### Defined in

[window.ts:1151](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1151)

___

### y

• `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

#### Defined in

[window.ts:1153](https://github.com/tauri-apps/tauri/blob/25bcf2b/tooling/api/src/window.ts#L1153)
