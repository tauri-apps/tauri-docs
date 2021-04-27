---
title: "trait.Dispatch"
---

# Trait [tauri](/docs/api/rust/tauri/../index.html)::​[runtime](/docs/api/rust/tauri/index.html)::​[Dispatch](/docs/api/rust/tauri/)

```
pub trait Dispatch: Clone + Send + Sized + 'static {
    type Runtime: Runtime;
    type Icon: TryFrom<Icon, Error = Error>;
    type Attributes: Attributes<Icon = Self::Icon> + AttributesBase + Clone + Send;
    fn create_window<P: Params<Runtime = Self::Runtime>>(
        &mut self, 
        pending: PendingWindow<P>
    ) -> Result<DetachedWindow<P>>;

    fn set_resizable(&self, resizable: bool) -> Result<()>;

    fn set_title<S: Into<String>>(&self, title: S) -> Result<()>;

    fn maximize(&self) -> Result<()>;

    fn unmaximize(&self) -> Result<()>;

    fn minimize(&self) -> Result<()>;

    fn unminimize(&self) -> Result<()>;

    fn show(&self) -> Result<()>;

    fn hide(&self) -> Result<()>;

    fn close(&self) -> Result<()>;

    fn set_decorations(&self, decorations: bool) -> Result<()>;

    fn set_always_on_top(&self, always_on_top: bool) -> Result<()>;

    fn set_width(&self, width: f64) -> Result<()>;

    fn set_height(&self, height: f64) -> Result<()>;

    fn resize(&self, width: f64, height: f64) -> Result<()>;

    fn set_min_size(&self, min_width: f64, min_height: f64) -> Result<()>;

    fn set_max_size(&self, max_width: f64, max_height: f64) -> Result<()>;

    fn set_x(&self, x: f64) -> Result<()>;

    fn set_y(&self, y: f64) -> Result<()>;

    fn set_position(&self, x: f64, y: f64) -> Result<()>;

    fn set_fullscreen(&self, fullscreen: bool) -> Result<()>;

    fn set_icon(&self, icon: Self::Icon) -> Result<()>;

    fn eval_script<S: Into<String>>(&self, script: S) -> Result<()>;
}
```

Webview dispatcher. A thread-safe handle to the webview API.

## Associated Types

### `type Runtime: Runtime`

The runtime this [`Dispatch`](/docs/api/rust/tauri/../../tauri/runtime/trait.Dispatch.html "Dispatch") runs under.

### `type Icon: TryFrom<Icon, Error = Error>`

Representation of a window icon.

### `type Attributes: Attributes<Icon = Self::Icon> + AttributesBase + Clone + Send`

The webview builder type.

Loading content...

## Required methods

### `fn create_window<P: Params<Runtime = Self::Runtime>>( &mut self, pending: PendingWindow<P> ) -> Result<DetachedWindow<P>>`

Create a new webview window.

### `fn set_resizable(&self, resizable: bool) -> Result<()>`

Updates the window resizable flag.

### `fn set_title<S: Into<String>>(&self, title: S) -> Result<()>`

Updates the window title.

### `fn maximize(&self) -> Result<()>`

Maximizes the window.

### `fn unmaximize(&self) -> Result<()>`

Unmaximizes the window.

### `fn minimize(&self) -> Result<()>`

Minimizes the window.

### `fn unminimize(&self) -> Result<()>`

Unminimizes the window.

### `fn show(&self) -> Result<()>`

Shows the window.

### `fn hide(&self) -> Result<()>`

Hides the window.

### `fn close(&self) -> Result<()>`

Closes the window.

### `fn set_decorations(&self, decorations: bool) -> Result<()>`

Updates the hasDecorations flag.

### `fn set_always_on_top(&self, always_on_top: bool) -> Result<()>`

Updates the window alwaysOnTop flag.

### `fn set_width(&self, width: f64) -> Result<()>`

Updates the window width.

### `fn set_height(&self, height: f64) -> Result<()>`

Updates the window height.

### `fn resize(&self, width: f64, height: f64) -> Result<()>`

Resizes the window.

### `fn set_min_size(&self, min_width: f64, min_height: f64) -> Result<()>`

Updates the window min size.

### `fn set_max_size(&self, max_width: f64, max_height: f64) -> Result<()>`

Updates the window max size.

### `fn set_x(&self, x: f64) -> Result<()>`

Updates the X position.

### `fn set_y(&self, y: f64) -> Result<()>`

Updates the Y position.

### `fn set_position(&self, x: f64, y: f64) -> Result<()>`

Updates the window position.

### `fn set_fullscreen(&self, fullscreen: bool) -> Result<()>`

Updates the window fullscreen state.

### `fn set_icon(&self, icon: Self::Icon) -> Result<()>`

Updates the window icon.

### `fn eval_script<S: Into<String>>(&self, script: S) -> Result<()>`

Executes javascript on the window this [`Dispatch`](/docs/api/rust/tauri/../../tauri/runtime/trait.Dispatch.html "Dispatch") represents.

Loading content...

## Implementors

### `impl Dispatch for WryDispatcher`

#### `type Runtime = Wry`

#### `type Icon = WryIcon`

#### `type Attributes = WryAttributes`

#### `fn create_window<M: Params<Runtime = Self::Runtime>>( &mut self, pending: PendingWindow<M> ) -> Result<DetachedWindow<M>>`

#### `fn set_resizable(&self, resizable: bool) -> Result<()>`

#### `fn set_title<S: Into<String>>(&self, title: S) -> Result<()>`

#### `fn maximize(&self) -> Result<()>`

#### `fn unmaximize(&self) -> Result<()>`

#### `fn minimize(&self) -> Result<()>`

#### `fn unminimize(&self) -> Result<()>`

#### `fn show(&self) -> Result<()>`

#### `fn hide(&self) -> Result<()>`

#### `fn close(&self) -> Result<()>`

#### `fn set_decorations(&self, decorations: bool) -> Result<()>`

#### `fn set_always_on_top(&self, always_on_top: bool) -> Result<()>`

#### `fn set_width(&self, width: f64) -> Result<()>`

#### `fn set_height(&self, height: f64) -> Result<()>`

#### `fn resize(&self, width: f64, height: f64) -> Result<()>`

#### `fn set_min_size(&self, min_width: f64, min_height: f64) -> Result<()>`

#### `fn set_max_size(&self, max_width: f64, max_height: f64) -> Result<()>`

#### `fn set_x(&self, x: f64) -> Result<()>`

#### `fn set_y(&self, y: f64) -> Result<()>`

#### `fn set_position(&self, x: f64, y: f64) -> Result<()>`

#### `fn set_fullscreen(&self, fullscreen: bool) -> Result<()>`

#### `fn set_icon(&self, icon: Self::Icon) -> Result<()>`

#### `fn eval_script<S: Into<String>>(&self, script: S) -> Result<()>`

Loading content...
