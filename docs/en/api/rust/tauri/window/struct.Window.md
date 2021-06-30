---
title: Struct tauri::window::Window
sidebar_label: struct.Window
custom_edit_url: null
---

# Struct tauri::window::Window,\[−]\[src],\[−],−

```rs
pub struct Window<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }
```

A webview window managed by Tauri.

This type also implements [`Manager`](/docs/api/rust/tauri/../../tauri/trait.Manager "Manager") which allows you to manage other windows attached to the same application.

## Implementations

### `Params`

```rs
impl<P: Params> Window<P>
```

_Defined in: [window.rs:143-694](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L143-694)_

#### `create_window`

```rs
pub fn create_window<F>(
    &mut self, 
    label: P::Label, 
    url: WindowUrl, 
    setup: F
) -> Result<Window<P>> where
    F: FnOnce(<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes), 
```

Creates a new webview window.

_Defined in: [window.rs:158-182](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L158-182)_

#### `label`

```rs
pub fn label(&self) -> &P::Label
```

The label of this window.

_Defined in: [window.rs:237-239](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L237-239)_

#### `emit`

```rs
pub fn emit<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize, 
```

Emits an event to the current window.

_Defined in: [window.rs:242-257](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L242-257)_

#### `emit_others`

```rs
pub fn emit_others<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Emits an event on all windows except this one.

_Defined in: [window.rs:260-267](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L260-267)_

#### `listen`

```rs
pub fn listen<E: Into<P::Event>, F>(&self, event: E, handler: F) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to an event on this window.

_Defined in: [window.rs:270-276](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L270-276)_

#### `once`

```rs
pub fn once<E: Into<P::Event>, F>(&self, event: E, handler: F) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to a an event on this window a single time.

_Defined in: [window.rs:279-285](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L279-285)_

#### `trigger`

```rs
pub fn trigger<E: ?Sized>(&self, event: &E, data: Option<String>) where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Triggers an event on this window.

_Defined in: [window.rs:288-295](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L288-295)_

#### `eval`

```rs
pub fn eval(&self, js: &str) -> Result<()>
```

Evaluates JavaScript on this window.

_Defined in: [window.rs:298-300](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L298-300)_

#### `on_window_event`

```rs
pub fn on_window_event<F: Fn(&WindowEvent) + Send + 'static>(&self, f: F)
```

Registers a window event listener.

_Defined in: [window.rs:303-305](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L303-305)_

#### `scale_factor`

```rs
pub fn scale_factor(&self) -> Result<f64>
```

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

# [Panics](/docs/api/rust/tauri/about:blank#panics)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:339-341](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L339-341)_

#### `inner_position`

```rs
pub fn inner_position(&self) -> Result<PhysicalPosition<i32>>
```

Returns the position of the top-left hand corner of the window’s client area relative to the top-left hand corner of the desktop.

# [Panics](/docs/api/rust/tauri/about:blank#panics-1)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:349-351](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L349-351)_

#### `outer_position`

```rs
pub fn outer_position(&self) -> Result<PhysicalPosition<i32>>
```

Returns the position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

# [Panics](/docs/api/rust/tauri/about:blank#panics-2)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:359-361](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L359-361)_

#### `inner_size`

```rs
pub fn inner_size(&self) -> Result<PhysicalSize<u32>>
```

Returns the physical size of the window’s client area.

The client area is the content of the window, excluding the title bar and borders.

# [Panics](/docs/api/rust/tauri/about:blank#panics-3)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:371-373](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L371-373)_

#### `outer_size`

```rs
pub fn outer_size(&self) -> Result<PhysicalSize<u32>>
```

Returns the physical size of the entire window.

These dimensions include the title bar and borders. If you don’t want that (and you usually don’t), use inner_size instead.

# [Panics](/docs/api/rust/tauri/about:blank#panics-4)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:383-385](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L383-385)_

#### `is_fullscreen`

```rs
pub fn is_fullscreen(&self) -> Result<bool>
```

Gets the window’s current fullscreen state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-5)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:393-395](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L393-395)_

#### `is_maximized`

```rs
pub fn is_maximized(&self) -> Result<bool>
```

Gets the window’s current maximized state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-6)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:403-405](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L403-405)_

#### `is_decorated`

```rs
pub fn is_decorated(&self) -> Result<bool>
```

Gets the window’s current decoration state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-7)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:413-415](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L413-415)_

#### `is_resizable`

```rs
pub fn is_resizable(&self) -> Result<bool>
```

Gets the window’s current resizable state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-8)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:423-425](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L423-425)_

#### `is_visible`

```rs
pub fn is_visible(&self) -> Result<bool>
```

Gets the window’s current vibility state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-9)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:433-435](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L433-435)_

#### `current_monitor`

```rs
pub fn current_monitor(&self) -> Result<Option<Monitor>>
```

Returns the monitor on which the window currently resides.

Returns None if current monitor can’t be detected.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific)

-   **Linux:** Unsupported

# [Panics](/docs/api/rust/tauri/about:blank#panics-10)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:449-456](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L449-456)_

#### `primary_monitor`

```rs
pub fn primary_monitor(&self) -> Result<Option<Monitor>>
```

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-1)

-   **Linux:** Unsupported

# [Panics](/docs/api/rust/tauri/about:blank#panics-11)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:470-477](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L470-477)_

#### `available_monitors`

```rs
pub fn available_monitors(&self) -> Result<Vec<Monitor>>
```

Returns the list of all the monitors available on the system.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-2)

-   **Linux:** Unsupported

# [Panics](/docs/api/rust/tauri/about:blank#panics-12)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

_Defined in: [window.rs:489-496](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L489-496)_

#### `center`

```rs
pub fn center(&self) -> Result<()>
```

Centers the window.

_Defined in: [window.rs:517-519](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L517-519)_

#### `request_user_attention`

```rs
pub fn request_user_attention(
    &self, 
    request_type: Option<UserAttentionType>
) -> Result<()>
```

Requests user attention to the window, this has no effect if the application is already focused. How requesting for user attention manifests is platform dependent, see `UserAttentionType` for details.

Providing `None` will unset the request for user attention. Unsetting the request for user attention might not be done automatically by the WM when the window receives input.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-3)

-   **macOS:** `None` has no effect.

_Defined in: [window.rs:531-540](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L531-540)_

#### `print`

```rs
pub fn print(&self) -> Result<()>
```

Opens the dialog to prints the contents of the webview. Currently only supported on macOS on `wry`. `window.print()` works on all platforms.

_Defined in: [window.rs:545-547](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L545-547)_

#### `set_resizable`

```rs
pub fn set_resizable(&self, resizable: bool) -> Result<()>
```

Determines if this window should be resizable.

_Defined in: [window.rs:550-556](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L550-556)_

#### `set_title`

```rs
pub fn set_title(&self, title: &str) -> Result<()>
```

Set this window’s title.

_Defined in: [window.rs:559-565](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L559-565)_

#### `maximize`

```rs
pub fn maximize(&self) -> Result<()>
```

Maximizes this window.

_Defined in: [window.rs:568-570](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L568-570)_

#### `unmaximize`

```rs
pub fn unmaximize(&self) -> Result<()>
```

Un-maximizes this window.

_Defined in: [window.rs:573-575](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L573-575)_

#### `minimize`

```rs
pub fn minimize(&self) -> Result<()>
```

Minimizes this window.

_Defined in: [window.rs:578-580](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L578-580)_

#### `unminimize`

```rs
pub fn unminimize(&self) -> Result<()>
```

Un-minimizes this window.

_Defined in: [window.rs:583-585](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L583-585)_

#### `show`

```rs
pub fn show(&self) -> Result<()>
```

Show this window.

_Defined in: [window.rs:588-590](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L588-590)_

#### `hide`

```rs
pub fn hide(&self) -> Result<()>
```

Hide this window.

_Defined in: [window.rs:593-595](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L593-595)_

#### `close`

```rs
pub fn close(&self) -> Result<()>
```

Closes this window.

_Defined in: [window.rs:598-600](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L598-600)_

#### `set_decorations`

```rs
pub fn set_decorations(&self, decorations: bool) -> Result<()>
```

Determines if this window should be [decorated](https://en.wikipedia.org/wiki/Window_(computing)#Window_decoration).

_Defined in: [window.rs:605-611](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L605-611)_

#### `set_always_on_top`

```rs
pub fn set_always_on_top(&self, always_on_top: bool) -> Result<()>
```

Determines if this window should always be on top of other windows.

_Defined in: [window.rs:614-620](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L614-620)_

#### `set_size`

```rs
pub fn set_size<S: Into<Size>>(&self, size: S) -> Result<()>
```

Resizes this window.

_Defined in: [window.rs:623-629](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L623-629)_

#### `set_min_size`

```rs
pub fn set_min_size<S: Into<Size>>(&self, size: Option<S>) -> Result<()>
```

Sets this window’s minimum size.

_Defined in: [window.rs:632-638](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L632-638)_

#### `set_max_size`

```rs
pub fn set_max_size<S: Into<Size>>(&self, size: Option<S>) -> Result<()>
```

Sets this window’s maximum size.

_Defined in: [window.rs:641-647](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L641-647)_

#### `set_position`

```rs
pub fn set_position<Pos: Into<Position>>(&self, position: Pos) -> Result<()>
```

Sets this window’s position.

_Defined in: [window.rs:650-656](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L650-656)_

#### `set_fullscreen`

```rs
pub fn set_fullscreen(&self, fullscreen: bool) -> Result<()>
```

Determines if this window should be fullscreen.

_Defined in: [window.rs:659-665](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L659-665)_

#### `set_focus`

```rs
pub fn set_focus(&self) -> Result<()>
```

Bring the window to front and focus.

_Defined in: [window.rs:668-670](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L668-670)_

#### `set_icon`

```rs
pub fn set_icon(&self, icon: Icon) -> Result<()>
```

Sets this window’ icon.

_Defined in: [window.rs:673-675](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L673-675)_

#### `set_skip_taskbar`

```rs
pub fn set_skip_taskbar(&self, skip: bool) -> Result<()>
```

Whether to show the window icon in the task bar or not.

_Defined in: [window.rs:678-684](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L678-684)_

#### `start_dragging`

```rs
pub fn start_dragging(&self) -> Result<()>
```

Starts dragging the window.

_Defined in: [window.rs:687-689](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L687-689)_

## Trait Implementations

### `Params`

```rs
impl<P: Params> Clone for Window<P>
```

_Defined in: [window.rs:96-104](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L96-104)_

#### `clone`

```rs
fn clone(&self) -> Self
```

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

_Defined in: [window.rs:97-103](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L97-103)_

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)_

### `Params`

```rs
impl<'de, P: Params> CommandArg<'de, P> for Window<P>
```

_Defined in: [window.rs:136-141](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L136-141)_

#### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). This will never fail.

_Defined in: [window.rs:138-140](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L138-140)_

### `Params`

```rs
impl<P: Params> Eq for Window<P>
```

_Defined in: [window.rs:113](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L113)_

### `Params`

```rs
impl<P: Params> Hash for Window<P>
```

_Defined in: [window.rs:106-111](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L106-111)_

#### `hash`

```rs
fn hash<H: Hasher>(&self, state: &mut H)
```

Only use the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window")’s label to represent its hash.

_Defined in: [window.rs:108-110](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L108-110)_

#### `hash_slice`

```rs
pub fn hash_slice<H>(data: &[Self], state: &mut H) where
    H: Hasher, 
```

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

_Defined in: [mod.rs:190-192](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/hash/mod.rs#L190-192)_

### `Params`

```rs
impl<P: Params> Manager<P> for Window<P>
```

_Defined in: [window.rs:121](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L121)_

#### `config`

```rs
fn config(&self) -> Arc<Config>
```

The [`Config`](/docs/api/rust/tauri/../../tauri/struct.Config "Config") the manager was created with.

_Defined in: [lib.rs:247-249](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L247-249)_

#### `emit_all`

```rs
fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Emits a event to all windows.

_Defined in: [lib.rs:252-259](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L252-259)_

#### `emit_to`

```rs
fn emit_to<E: ?Sized, L: ?Sized, S: Serialize + Clone>(
    &self, 
    label: &L, 
    event: &E, 
    payload: S
) -> Result<()> where
    P::Label: Borrow<L>,
    P::Event: Borrow<E>,
    L: TagRef<P::Label>,
    E: TagRef<P::Event>, 
```

Emits an event to a window with the specified label.

_Defined in: [lib.rs:262-277](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L262-277)_

#### `listen_global`

```rs
fn listen_global<E: Into<P::Event>, F>(
    &self, 
    event: E, 
    handler: F
) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to a global event.

_Defined in: [lib.rs:280-285](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L280-285)_

#### `once_global`

```rs
fn once_global<E: Into<P::Event>, F>(
    &self, 
    event: E, 
    handler: F
) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to a global event only once.

_Defined in: [lib.rs:288-293](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L288-293)_

#### `trigger_global`

```rs
fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Trigger a global event.

_Defined in: [lib.rs:296-302](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L296-302)_

#### `unlisten`

```rs
fn unlisten(&self, handler_id: EventHandler)
```

Remove an event listener.

_Defined in: [lib.rs:305-307](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L305-307)_

#### `get_window`

```rs
fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where
    P::Label: Borrow<L>,
    L: TagRef<P::Label>, 
```

Fetch a single window from the manager.

_Defined in: [lib.rs:310-316](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L310-316)_

#### `windows`

```rs
fn windows(&self) -> HashMap<P::Label, Window<P>>
```

Fetch all managed windows.

_Defined in: [lib.rs:319-321](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L319-321)_

#### `manage`

```rs
fn manage<T>(&self, state: T) where
    T: Send + Sync + 'static, 
```

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../../tauri/struct.Builder#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../../tauri/trait.Manager#method.manage)

_Defined in: [lib.rs:325-330](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L325-330)_

#### `state`

```rs
fn state<T>(&self) -> State<'_, T> where
    T: Send + Sync + 'static, 
```

Gets the managed state for the type `T`.

_Defined in: [lib.rs:333-338](https://github.com/https://blob/e663bdd/core/tauri/src/../lib.rs#L333-338)_

### `Params`

```rs
impl<P: Params> PartialEq<Window<P>> for Window<P>
```

_Defined in: [window.rs:114-119](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L114-119)_

#### `eq`

```rs
fn eq(&self, other: &Self) -> bool
```

Only use the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window")’s label to compare equality.

_Defined in: [window.rs:116-118](https://github.com/https://blob/e663bdd/core/tauri/src/../window.rs#L116-118)_

#### `ne`

```rs
#[must_use]pub fn ne(&self, other: &Rhs) -> bool
```

This method tests for `!=`.

_Defined in: [cmp.rs:213](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/cmp.rs#L213)_

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for Window<P>`

### `impl<P> Send for Window<P>`

### `impl<P> Sync for Window<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::Dispatcher: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync,`

### `impl<P> Unpin for Window<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Unpin, <<P as Params>::Runtime as Runtime>::Dispatcher: Unpin, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Unpin, <<P as Params>::Runtime as Runtime>::Handle: Unpin, <P as Params>::Label: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for Window<P>`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
