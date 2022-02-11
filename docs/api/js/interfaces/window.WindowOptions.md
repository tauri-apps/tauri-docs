[@tauri-apps/api](../index.md) / [window](../modules/window.md) / WindowOptions

# Interface: WindowOptions

[window](../modules/window.md).WindowOptions

Configuration for the window to create.

## Properties

### alwaysOnTop

• `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

#### Defined in

[window.ts:1194](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1194)

___

### center

• `Optional` **center**: `boolean`

Show window in the center of the screen..

#### Defined in

[window.ts:1156](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1156)

___

### decorations

• `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

#### Defined in

[window.ts:1192](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1192)

___

### fileDropEnabled

• `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

#### Defined in

[window.ts:1202](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1202)

___

### focus

• `Optional` **focus**: `boolean`

Whether the window will be initially hidden or focused.

#### Defined in

[window.ts:1180](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1180)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

#### Defined in

[window.ts:1178](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1178)

___

### height

• `Optional` **height**: `number`

The initial height.

#### Defined in

[window.ts:1164](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1164)

___

### maxHeight

• `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

#### Defined in

[window.ts:1172](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1172)

___

### maxWidth

• `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

#### Defined in

[window.ts:1170](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1170)

___

### maximized

• `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

#### Defined in

[window.ts:1188](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1188)

___

### minHeight

• `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

#### Defined in

[window.ts:1168](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1168)

___

### minWidth

• `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

#### Defined in

[window.ts:1166](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1166)

___

### resizable

• `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

#### Defined in

[window.ts:1174](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1174)

___

### skipTaskbar

• `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

#### Defined in

[window.ts:1196](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1196)

___

### title

• `Optional` **title**: `string`

Window title.

#### Defined in

[window.ts:1176](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1176)

___

### transparent

• `Optional` **transparent**: `boolean`

Whether the window is transparent or not.
Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macosPrivateApi`.
WARNING: Using private APIs on `macOS` prevents your application from being accepted for the `App Store`.

#### Defined in

[window.ts:1186](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1186)

___

### url

• `Optional` **url**: `string`

Remote URL or local file path to open.

- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
- data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).

#### Defined in

[window.ts:1154](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1154)

___

### visible

• `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

#### Defined in

[window.ts:1190](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1190)

___

### width

• `Optional` **width**: `number`

The initial width.

#### Defined in

[window.ts:1162](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1162)

___

### x

• `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

#### Defined in

[window.ts:1158](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1158)

___

### y

• `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

#### Defined in

[window.ts:1160](https://github.com/tauri-apps/tauri/blob/5c0a8bf/tooling/api/src/window.ts#L1160)
