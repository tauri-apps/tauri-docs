[@tauri-apps/api](../README.md) / [window](../modules/window.md) / WindowOptions

# Interface: WindowOptions

[window](../modules/window.md).WindowOptions

Configuration for the window to create.

## Properties

### alwaysOnTop

• `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

#### Defined in

[window.ts:1239](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1239)

___

### center

• `Optional` **center**: `boolean`

Show window in the center of the screen..

#### Defined in

[window.ts:1201](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1201)

___

### decorations

• `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

#### Defined in

[window.ts:1237](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1237)

___

### fileDropEnabled

• `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

#### Defined in

[window.ts:1247](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1247)

___

### focus

• `Optional` **focus**: `boolean`

Whether the window will be initially hidden or focused.

#### Defined in

[window.ts:1225](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1225)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

#### Defined in

[window.ts:1223](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1223)

___

### height

• `Optional` **height**: `number`

The initial height.

#### Defined in

[window.ts:1209](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1209)

___

### maxHeight

• `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

#### Defined in

[window.ts:1217](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1217)

___

### maxWidth

• `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

#### Defined in

[window.ts:1215](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1215)

___

### maximized

• `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

#### Defined in

[window.ts:1233](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1233)

___

### minHeight

• `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

#### Defined in

[window.ts:1213](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1213)

___

### minWidth

• `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

#### Defined in

[window.ts:1211](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1211)

___

### resizable

• `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

#### Defined in

[window.ts:1219](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1219)

___

### skipTaskbar

• `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

#### Defined in

[window.ts:1241](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1241)

___

### title

• `Optional` **title**: `string`

Window title.

#### Defined in

[window.ts:1221](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1221)

___

### transparent

• `Optional` **transparent**: `boolean`

Whether the window is transparent or not.
Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macosPrivateApi`.
WARNING: Using private APIs on `macOS` prevents your application from being accepted for the `App Store`.

#### Defined in

[window.ts:1231](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1231)

___

### url

• `Optional` **url**: `string`

Remote URL or local file path to open.

- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
- data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).

#### Defined in

[window.ts:1199](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1199)

___

### visible

• `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

#### Defined in

[window.ts:1235](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1235)

___

### width

• `Optional` **width**: `number`

The initial width.

#### Defined in

[window.ts:1207](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1207)

___

### x

• `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

#### Defined in

[window.ts:1203](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1203)

___

### y

• `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

#### Defined in

[window.ts:1205](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/window.ts#L1205)
