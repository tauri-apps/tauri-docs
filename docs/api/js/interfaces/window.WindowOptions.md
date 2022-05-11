[@tauri-apps/api](../README.md) / [window](../modules/window.md) / WindowOptions

# Interface: WindowOptions

[window](../modules/window.md).WindowOptions

Configuration for the window to create.

## Properties

### alwaysOnTop

• `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

#### Defined in

[window.ts:1420](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1420)

___

### center

• `Optional` **center**: `boolean`

Show window in the center of the screen..

#### Defined in

[window.ts:1382](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1382)

___

### decorations

• `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

#### Defined in

[window.ts:1418](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1418)

___

### fileDropEnabled

• `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

#### Defined in

[window.ts:1428](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1428)

___

### focus

• `Optional` **focus**: `boolean`

Whether the window will be initially hidden or focused.

#### Defined in

[window.ts:1406](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1406)

___

### fullscreen

• `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

#### Defined in

[window.ts:1404](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1404)

___

### height

• `Optional` **height**: `number`

The initial height.

#### Defined in

[window.ts:1390](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1390)

___

### maxHeight

• `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

#### Defined in

[window.ts:1398](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1398)

___

### maxWidth

• `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

#### Defined in

[window.ts:1396](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1396)

___

### maximized

• `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

#### Defined in

[window.ts:1414](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1414)

___

### minHeight

• `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

#### Defined in

[window.ts:1394](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1394)

___

### minWidth

• `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

#### Defined in

[window.ts:1392](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1392)

___

### resizable

• `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

#### Defined in

[window.ts:1400](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1400)

___

### skipTaskbar

• `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

#### Defined in

[window.ts:1422](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1422)

___

### theme

• `Optional` **theme**: [`Theme`](../modules/window.md#theme)

 The initial window theme. Defaults to the system theme.

Only implemented on Windows.

#### Defined in

[window.ts:1434](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1434)

___

### title

• `Optional` **title**: `string`

Window title.

#### Defined in

[window.ts:1402](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1402)

___

### transparent

• `Optional` **transparent**: `boolean`

Whether the window is transparent or not.
Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macOSPrivateApi`.
WARNING: Using private APIs on `macOS` prevents your application from being accepted for the `App Store`.

#### Defined in

[window.ts:1412](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1412)

___

### url

• `Optional` **url**: `string`

Remote URL or local file path to open.

- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
- data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).

#### Defined in

[window.ts:1380](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1380)

___

### visible

• `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

#### Defined in

[window.ts:1416](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1416)

___

### width

• `Optional` **width**: `number`

The initial width.

#### Defined in

[window.ts:1388](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1388)

___

### x

• `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

#### Defined in

[window.ts:1384](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1384)

___

### y

• `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

#### Defined in

[window.ts:1386](https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/window.ts#L1386)
