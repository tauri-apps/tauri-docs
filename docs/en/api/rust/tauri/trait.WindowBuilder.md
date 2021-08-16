---
title: Trait tauri::WindowBuilder
sidebar_label: trait.WindowBuilder
custom_edit_url: null
---

  # Trait tauri::WindowBuilder,

```rs
pub trait WindowBuilder: WindowBuilderBase {
Show methods    fn new() -> Self;

    fn with_config(config: WindowConfig) -> Self;

    fn menu(self, menu: Menu) -> Self;

    fn center(self) -> Self;

    fn position(self, x: f64, y: f64) -> Self;

    fn inner_size(self, min_width: f64, min_height: f64) -> Self;

    fn min_inner_size(self, min_width: f64, min_height: f64) -> Self;

    fn max_inner_size(self, max_width: f64, max_height: f64) -> Self;

    fn resizable(self, resizable: bool) -> Self;

    fn title<S>(self, title: S) -> Self
    where
        S: Into<String>;

    fn fullscreen(self, fullscreen: bool) -> Self;

    fn focus(self) -> Self;

    fn maximized(self, maximized: bool) -> Self;

    fn visible(self, visible: bool) -> Self;

    fn transparent(self, transparent: bool) -> Self;

    fn decorations(self, decorations: bool) -> Self;

    fn always_on_top(self, always_on_top: bool) -> Self;

    fn icon(self, icon: Icon) -> Result<Self, Error>;

    fn skip_taskbar(self, skip: bool) -> Self;

    fn has_icon(&self) -> bool;

    fn has_menu(&self) -> bool;
}
```

Expand description

A builder for all attributes related to a single webview.

This trait is only meant to be implemented by a custom [`Runtime`](/docs/api/rust/tauri/trait.Runtime) and not by applications.

## Required methods

#### fn [new](/docs/api/rust/tauri/about:blank#tymethod.new)() -> Self

Initializes a new window attributes builder.

#### fn [with_config](/docs/api/rust/tauri/about:blank#tymethod.with_config)(config: WindowConfig) -> Self

Initializes a new webview builder from a \[`WindowConfig`]

#### fn [menu](/docs/api/rust/tauri/about:blank#tymethod.menu)(self, menu: [Menu](/docs/api/rust/tauri/struct.Menu "struct tauri::Menu")) -> Self

Sets the menu for the window.

#### fn [center](/docs/api/rust/tauri/about:blank#tymethod.center)(self) -> Self

Show window in the center of the screen.

#### fn [position](/docs/api/rust/tauri/about:blank#tymethod.position)(self, x: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), y: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> Self

The initial position of the window’s.

#### fn [inner_size](/docs/api/rust/tauri/about:blank#tymethod.inner_size)(self, min_width: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), min_height: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> Self

Window size.

#### fn [min_inner_size](/docs/api/rust/tauri/about:blank#tymethod.min_inner_size)(self, min_width: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), min_height: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> Self

Window min inner size.

#### fn [max_inner_size](/docs/api/rust/tauri/about:blank#tymethod.max_inner_size)(self, max_width: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), max_height: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> Self

Window max inner size.

#### fn [resizable](/docs/api/rust/tauri/about:blank#tymethod.resizable)(self, resizable: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Whether the window is resizable or not.

#### fn [title](/docs/api/rust/tauri/about:blank#tymethod.title)&lt;S>(self, title: S) -> Self where S: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>,

The title of the window in the title bar.

#### fn [fullscreen](/docs/api/rust/tauri/about:blank#tymethod.fullscreen)(self, fullscreen: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Whether to start the window in fullscreen or not.

#### fn [focus](/docs/api/rust/tauri/about:blank#tymethod.focus)(self) -> Self

Whether the window will be initially hidden or focused.

#### fn [maximized](/docs/api/rust/tauri/about:blank#tymethod.maximized)(self, maximized: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Whether the window should be maximized upon creation.

#### fn [visible](/docs/api/rust/tauri/about:blank#tymethod.visible)(self, visible: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Whether the window should be immediately visible upon creation.

#### fn [transparent](/docs/api/rust/tauri/about:blank#tymethod.transparent)(self, transparent: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Whether the the window should be transparent. If this is true, writing colors with alpha values different than `1.0` will produce a transparent window.

#### fn [decorations](/docs/api/rust/tauri/about:blank#tymethod.decorations)(self, decorations: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Whether the window should have borders and bars.

#### fn [always_on_top](/docs/api/rust/tauri/about:blank#tymethod.always_on_top)(self, always_on_top: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Whether the window should always be on top of other windows.

#### fn [icon](/docs/api/rust/tauri/about:blank#tymethod.icon)(self, icon: [Icon](/docs/api/rust/tauri/enum.Icon "enum tauri::Icon")) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, Error>

Sets the window icon.

#### fn [skip_taskbar](/docs/api/rust/tauri/about:blank#tymethod.skip_taskbar)(self, skip: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> Self

Sets whether or not the window icon should be added to the taskbar.

#### fn [has_icon](/docs/api/rust/tauri/about:blank#tymethod.has_icon)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

Whether the icon was set or not.

#### fn [has_menu](/docs/api/rust/tauri/about:blank#tymethod.has_menu)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

Whether the menu was set or not.

## Implementations on Foreign Types

### impl [WindowBuilder](/docs/api/rust/tauri/trait.WindowBuilder "trait tauri::WindowBuilder") for WindowBuilderWrapper

#### pub fn [focus](/docs/api/rust/tauri/about:blank#tymethod.focus)(self) -> WindowBuilderWrapper

Deprecated since 0.1.4 (noop) Windows is automatically focused when created.

#### pub fn [new](/docs/api/rust/tauri/about:blank#tymethod.new)() -> WindowBuilderWrapper

#### pub fn [with_config](/docs/api/rust/tauri/about:blank#tymethod.with_config)(config: WindowConfig) -> WindowBuilderWrapper

#### pub fn [menu](/docs/api/rust/tauri/about:blank#tymethod.menu)(self, menu: [Menu](/docs/api/rust/tauri/struct.Menu "struct tauri::Menu")) -> WindowBuilderWrapper

#### pub fn [center](/docs/api/rust/tauri/about:blank#tymethod.center)(self) -> WindowBuilderWrapper

#### pub fn [position](/docs/api/rust/tauri/about:blank#tymethod.position)(self, x: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), y: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> WindowBuilderWrapper

#### pub fn [inner_size](/docs/api/rust/tauri/about:blank#tymethod.inner_size)(self, width: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), height: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> WindowBuilderWrapper

#### pub fn [min_inner_size](/docs/api/rust/tauri/about:blank#tymethod.min_inner_size)( self, min_width: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), min_height: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html) ) -> WindowBuilderWrapper

#### pub fn [max_inner_size](/docs/api/rust/tauri/about:blank#tymethod.max_inner_size)( self, max_width: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html), max_height: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html) ) -> WindowBuilderWrapper

#### pub fn [resizable](/docs/api/rust/tauri/about:blank#tymethod.resizable)(self, resizable: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [title](/docs/api/rust/tauri/about:blank#tymethod.title)&lt;S>(self, title: S) -> WindowBuilderWrapper where S: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>,

#### pub fn [fullscreen](/docs/api/rust/tauri/about:blank#tymethod.fullscreen)(self, fullscreen: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [maximized](/docs/api/rust/tauri/about:blank#tymethod.maximized)(self, maximized: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [visible](/docs/api/rust/tauri/about:blank#tymethod.visible)(self, visible: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [transparent](/docs/api/rust/tauri/about:blank#tymethod.transparent)(self, transparent: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [decorations](/docs/api/rust/tauri/about:blank#tymethod.decorations)(self, decorations: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [always_on_top](/docs/api/rust/tauri/about:blank#tymethod.always_on_top)(self, always_on_top: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [icon](/docs/api/rust/tauri/about:blank#tymethod.icon)(self, icon: [Icon](/docs/api/rust/tauri/enum.Icon "enum tauri::Icon")) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;WindowBuilderWrapper, Error>

#### pub fn [skip_taskbar](/docs/api/rust/tauri/about:blank#tymethod.skip_taskbar)(self, skip: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> WindowBuilderWrapper

#### pub fn [has_icon](/docs/api/rust/tauri/about:blank#tymethod.has_icon)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

#### pub fn [has_menu](/docs/api/rust/tauri/about:blank#tymethod.has_menu)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

## Implementors
  