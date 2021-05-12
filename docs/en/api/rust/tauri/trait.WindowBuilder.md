---
title: "trait.WindowBuilder"
---

# Trait [tauri](/docs/api/rust/tauri/index.html)::​[WindowBuilder](/docs/api/rust/tauri/)

```rs
pub trait WindowBuilder: WindowBuilderBase {
    pub fn new() -> Self;

    pub fn with_config(config: WindowConfig) -> Self;

    pub fn menu<I>(self, menu: Vec<Menu<I>, Global>) -> Self
    where
        I: MenuId;

    pub fn position(self, x: f64, y: f64) -> Self;

    pub fn inner_size(self, min_width: f64, min_height: f64) -> Self;

    pub fn min_inner_size(self, min_width: f64, min_height: f64) -> Self;

    pub fn max_inner_size(self, min_width: f64, min_height: f64) -> Self;

    pub fn resizable(self, resizable: bool) -> Self;

    pub fn title<S>(self, title: S) -> Self
    where
        S: Into<String>;

    pub fn fullscreen(self, fullscreen: bool) -> Self;

    pub fn maximized(self, maximized: bool) -> Self;

    pub fn visible(self, visible: bool) -> Self;

    pub fn transparent(self, transparent: bool) -> Self;

    pub fn decorations(self, decorations: bool) -> Self;

    pub fn always_on_top(self, always_on_top: bool) -> Self;

    pub fn icon(self, icon: Icon) -> Result<Self, Error>;

    pub fn has_icon(&self) -> bool;

    pub fn has_menu(&self) -> bool;
}
```

A builder for all attributes related to a single webview.

This trait is only meant to be implemented by a custom [`Runtime`](/docs/api/rust/tauri/../tauri_runtime/trait.Runtime.html) and not by applications.

## Required methods

### `pub fn new() -> Self`

Initializes a new window attributes builder.

### `pub fn with_config(config: WindowConfig) -> Self`

Initializes a new webview builder from a [`WindowConfig`](/docs/api/rust/tauri/../tauri/api/config/struct.WindowConfig.html "WindowConfig")

### `pub fn menu<I>(self, menu: Vec<Menu<I>, Global>) -> Self where I: MenuId,`

Sets the menu for the window.

### `pub fn position(self, x: f64, y: f64) -> Self`

The initial position of the window’s.

### `pub fn inner_size(self, min_width: f64, min_height: f64) -> Self`

Window size.

### `pub fn min_inner_size(self, min_width: f64, min_height: f64) -> Self`

Window min inner size.

### `pub fn max_inner_size(self, min_width: f64, min_height: f64) -> Self`

Window max inner size.

### `pub fn resizable(self, resizable: bool) -> Self`

Whether the window is resizable or not.

### `pub fn title<S>(self, title: S) -> Self where S: Into<String>,`

The title of the window in the title bar.

### `pub fn fullscreen(self, fullscreen: bool) -> Self`

Whether to start the window in fullscreen or not.

### `pub fn maximized(self, maximized: bool) -> Self`

Whether the window should be maximized upon creation.

### `pub fn visible(self, visible: bool) -> Self`

Whether the window should be immediately visible upon creation.

### `pub fn transparent(self, transparent: bool) -> Self`

Whether the the window should be transparent. If this is true, writing colors with alpha values different than `1.0` will produce a transparent window.

### `pub fn decorations(self, decorations: bool) -> Self`

Whether the window should have borders and bars.

### `pub fn always_on_top(self, always_on_top: bool) -> Self`

Whether the window should always be on top of other windows.

### `pub fn icon(self, icon: Icon) -> Result<Self, Error>`

Sets the window icon.

### `pub fn has_icon(&self) -> bool`

Whether the icon was set or not.

### `pub fn has_menu(&self) -> bool`

Whether the menu was set or not.

Loading content...

## Implementations on Foreign Types

### `impl WindowBuilder for WindowBuilderWrapper`

#### `pub fn new() -> WindowBuilderWrapper`

#### `pub fn with_config(config: WindowConfig) -> WindowBuilderWrapper`

#### `pub fn menu<I>(self, menu: Vec<Menu<I>, Global>) -> WindowBuilderWrapperwhere I: MenuId,`

#### `pub fn position(self, x: f64, y: f64) -> WindowBuilderWrapper`

#### `pub fn inner_size(self, width: f64, height: f64) -> WindowBuilderWrapper`

#### `pub fn min_inner_size( self, min_width: f64, min_height: f64 ) -> WindowBuilderWrapper`

#### `pub fn max_inner_size( self, max_width: f64, max_height: f64 ) -> WindowBuilderWrapper`

#### `pub fn resizable(self, resizable: bool) -> WindowBuilderWrapper`

#### `pub fn title<S>(self, title: S) -> WindowBuilderWrapperwhere S: Into<String>,`

#### `pub fn fullscreen(self, fullscreen: bool) -> WindowBuilderWrapper`

#### `pub fn maximized(self, maximized: bool) -> WindowBuilderWrapper`

#### `pub fn visible(self, visible: bool) -> WindowBuilderWrapper`

#### `pub fn transparent(self, transparent: bool) -> WindowBuilderWrapper`

#### `pub fn decorations(self, decorations: bool) -> WindowBuilderWrapper`

#### `pub fn always_on_top(self, always_on_top: bool) -> WindowBuilderWrapper`

#### `pub fn icon(self, icon: Icon) -> Result<WindowBuilderWrapper, Error>`

#### `pub fn has_icon(&self) -> bool`

#### `pub fn has_menu(&self) -> bool`

Loading content...

## Implementors

Loading content...
