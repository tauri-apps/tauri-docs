[@tauri-apps/api](../README.md) / [window](../modules/window.md) / WindowOptions

# Interface: WindowOptions

[window](../modules/window.md).WindowOptions

Configuration for the window to create.

## Properties

### alwaysOnTop

 `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

#### Defined in

[window.ts:1939](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1939)

___

### center

 `Optional` **center**: `boolean`

Show window in the center of the screen..

#### Defined in

[window.ts:1901](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1901)

___

### decorations

 `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

#### Defined in

[window.ts:1937](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1937)

___

### fileDropEnabled

 `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

#### Defined in

[window.ts:1947](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1947)

___

### focus

 `Optional` **focus**: `boolean`

Whether the window will be initially hidden or focused.

#### Defined in

[window.ts:1925](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1925)

___

### fullscreen

 `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

#### Defined in

[window.ts:1923](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1923)

___

### height

 `Optional` **height**: `number`

The initial height.

#### Defined in

[window.ts:1909](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1909)

___

### maxHeight

 `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

#### Defined in

[window.ts:1917](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1917)

___

### maxWidth

 `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

#### Defined in

[window.ts:1915](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1915)

___

### maximized

 `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

#### Defined in

[window.ts:1933](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1933)

___

### minHeight

 `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

#### Defined in

[window.ts:1913](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1913)

___

### minWidth

 `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

#### Defined in

[window.ts:1911](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1911)

___

### resizable

 `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

#### Defined in

[window.ts:1919](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1919)

___

### skipTaskbar

 `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

#### Defined in

[window.ts:1941](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1941)

___

### theme

 `Optional` **theme**: [`Theme`](../modules/window.md#theme)

The initial window theme. Defaults to the system theme.

Only implemented on Windows and macOS 10.14+.

#### Defined in

[window.ts:1953](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1953)

___

### title

 `Optional` **title**: `string`

Window title.

#### Defined in

[window.ts:1921](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1921)

___

### transparent

 `Optional` **transparent**: `boolean`

Whether the window is transparent or not.
Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macOSPrivateApi`.
WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.

#### Defined in

[window.ts:1931](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1931)

___

### url

 `Optional` **url**: `string`

Remote URL or local file path to open.

- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
- data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).

#### Defined in

[window.ts:1899](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1899)

___

### visible

 `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

#### Defined in

[window.ts:1935](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1935)

___

### width

 `Optional` **width**: `number`

The initial width.

#### Defined in

[window.ts:1907](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1907)

___

### x

 `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

#### Defined in

[window.ts:1903](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1903)

___

### y

 `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

#### Defined in

[window.ts:1905](https://github.com/tauri-apps/tauri/blob/47666c4/tooling/api/src/window.ts#L1905)
