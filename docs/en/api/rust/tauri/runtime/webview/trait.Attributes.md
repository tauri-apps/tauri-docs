---
title: "trait.Attributes"
---

# Trait [tauri](/docs/api/rust/tauri/../../index.html)::​[runtime](/docs/api/rust/tauri/../index.html)::​[webview](/docs/api/rust/tauri/index.html)::​[Attributes](/docs/api/rust/tauri/)

```
pub trait Attributes: AttributesBase {
    type Icon: TryFrom<Icon, Error = Error>;
    fn new() -> Self;

    fn with_config(config: WindowConfig) -> Self;

    fn initialization_script(self, init: &str) -> Self;

    fn x(self, x: f64) -> Self;

    fn y(self, y: f64) -> Self;

    fn width(self, width: f64) -> Self;

    fn height(self, height: f64) -> Self;

    fn min_width(self, min_width: f64) -> Self;

    fn min_height(self, min_height: f64) -> Self;

    fn max_width(self, max_width: f64) -> Self;

    fn max_height(self, max_height: f64) -> Self;

    fn resizable(self, resizable: bool) -> Self;

    fn title<S: Into<String>>(self, title: S) -> Self;

    fn fullscreen(self, fullscreen: bool) -> Self;

    fn maximized(self, maximized: bool) -> Self;

    fn visible(self, visible: bool) -> Self;

    fn transparent(self, transparent: bool) -> Self;

    fn decorations(self, decorations: bool) -> Self;

    fn always_on_top(self, always_on_top: bool) -> Self;

    fn icon(self, icon: Self::Icon) -> Self;

    fn has_icon(&self) -> bool;

    fn user_data_path(self, user_data_path: Option<PathBuf>) -> Self;

    fn url(self, url: String) -> Self;

    fn has_uri_scheme_protocol(&self, name: &str) -> bool;

    fn register_uri_scheme_protocol<N: Into<String>, H: Fn(&str) -> Result<Vec<u8>> + Send + Sync + 'static>(
        self, 
        uri_scheme: N, 
        protocol: H
    ) -> Self;

    fn build(self) -> Self;
}
```

A builder for all attributes related to a single webview.

This trait is only meant to be implemented by a custom [`Runtime`](/docs/api/rust/tauri/../../../tauri/runtime/trait.Runtime.html) and not by applications.

## Associated Types

### `type Icon: TryFrom<Icon, Error = Error>`

Expected icon format.

Loading content...

## Required methods

### `fn new() -> Self`

Initializes a new webview builder.

### `fn with_config(config: WindowConfig) -> Self`

Initializes a new webview builder from a [`WindowConfig`](/docs/api/rust/tauri/../../../tauri/api/config/struct.WindowConfig.html "WindowConfig")

### `fn initialization_script(self, init: &str) -> Self`

Sets the init script.

### `fn x(self, x: f64) -> Self`

The horizontal position of the window's top left corner.

### `fn y(self, y: f64) -> Self`

The vertical position of the window's top left corner.

### `fn width(self, width: f64) -> Self`

Window width.

### `fn height(self, height: f64) -> Self`

Window height.

### `fn min_width(self, min_width: f64) -> Self`

Window min width.

### `fn min_height(self, min_height: f64) -> Self`

Window min height.

### `fn max_width(self, max_width: f64) -> Self`

Window max width.

### `fn max_height(self, max_height: f64) -> Self`

Window max height.

### `fn resizable(self, resizable: bool) -> Self`

Whether the window is resizable or not.

### `fn title<S: Into<String>>(self, title: S) -> Self`

The title of the window in the title bar.

### `fn fullscreen(self, fullscreen: bool) -> Self`

Whether to start the window in fullscreen or not.

### `fn maximized(self, maximized: bool) -> Self`

Whether the window should be maximized upon creation.

### `fn visible(self, visible: bool) -> Self`

Whether the window should be immediately visible upon creation.

### `fn transparent(self, transparent: bool) -> Self`

Whether the the window should be transparent. If this is true, writing colors with alpha values different than `1.0` will produce a transparent window.

### `fn decorations(self, decorations: bool) -> Self`

Whether the window should have borders and bars.

### `fn always_on_top(self, always_on_top: bool) -> Self`

Whether the window should always be on top of other windows.

### `fn icon(self, icon: Self::Icon) -> Self`

Sets the window icon.

### `fn has_icon(&self) -> bool`

Whether the icon was set or not.

### `fn user_data_path(self, user_data_path: Option<PathBuf>) -> Self`

User data path for the webview. Actually only supported on Windows.

### `fn url(self, url: String) -> Self`

Sets the webview url.

### `fn has_uri_scheme_protocol(&self, name: &str) -> bool`

Whether the webview URI scheme protocol is defined or not.

### `fn register_uri_scheme_protocol<N: Into<String>, H: Fn(&str) -> Result<Vec<u8>> + Send + Sync + 'static>( self, uri_scheme: N, protocol: H ) -> Self`

Registers a webview protocol handler. Leverages [setURLSchemeHandler](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler) on macOS, [AddWebResourceRequestedFilter](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44) on Windows and [webkit-web-context-register-uri-scheme](https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme) on Linux.

# [Arguments](/docs/api/rust/tauri/about:blank#arguments)

-   `uri_scheme` The URI scheme to register, such as `example`.
-   `protocol` the protocol associated with the given URI scheme. It's a function that takes an URL such as `example://localhost/asset.css`.

### `fn build(self) -> Self`

The full attributes.

Loading content...

## Implementors

### `impl Attributes for WryAttributes`

#### `type Icon = WryIcon`

#### `fn new() -> Self`

#### `fn with_config(config: WindowConfig) -> Self`

#### `fn initialization_script(self, init: &str) -> Self`

#### `fn x(self, x: f64) -> Self`

#### `fn y(self, y: f64) -> Self`

#### `fn width(self, width: f64) -> Self`

#### `fn height(self, height: f64) -> Self`

#### `fn min_width(self, min_width: f64) -> Self`

#### `fn min_height(self, min_height: f64) -> Self`

#### `fn max_width(self, max_width: f64) -> Self`

#### `fn max_height(self, max_height: f64) -> Self`

#### `fn resizable(self, resizable: bool) -> Self`

#### `fn title<S: Into<String>>(self, title: S) -> Self`

#### `fn fullscreen(self, fullscreen: bool) -> Self`

#### `fn maximized(self, maximized: bool) -> Self`

#### `fn visible(self, visible: bool) -> Self`

#### `fn transparent(self, transparent: bool) -> Self`

#### `fn decorations(self, decorations: bool) -> Self`

#### `fn always_on_top(self, always_on_top: bool) -> Self`

#### `fn icon(self, icon: Self::Icon) -> Self`

#### `fn has_icon(&self) -> bool`

#### `fn user_data_path(self, user_data_path: Option<PathBuf>) -> Self`

#### `fn url(self, url: String) -> Self`

#### `fn has_uri_scheme_protocol(&self, name: &str) -> bool`

#### `fn register_uri_scheme_protocol<N: Into<String>, H: Fn(&str) -> Result<Vec<u8>> + Send + Sync + 'static>( self, uri_scheme: N, protocol: H ) -> Self`

#### `fn build(self) -> Self`

Loading content...
