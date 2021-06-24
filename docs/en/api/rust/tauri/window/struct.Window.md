---
title: Struct tauri::window::Window
sidebar_label: struct.Window
---

# Struct tauri::window::Window,\[−]\[src],\[−],−

```rs
pub struct Window<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }
```

A webview window managed by Tauri.

This type also implements [`Manager`](/docs/api/rust/tauri/../../tauri/trait.Manager "Manager") which allows you to manage other windows attached to the same application.

## Implementations

### `impl<P: Params> Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#143-689 "goto source code")

#### `pub fn create_window<F>( &mut self, label: P::Label, url: WindowUrl, setup: F ) -> Result<Window<P>> where F: FnOnce(<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes),`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#158-182 "goto source code")

Creates a new webview window.

#### `pub fn label(&self) -> &P::Label`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#237-239 "goto source code")

The label of this window.

#### `pub fn emit<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where P::Event: Borrow<E>, E: TagRef<P::Event>, S: Serialize,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#242-257 "goto source code")

Emits an event to the current window.

#### `pub fn emit_others<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where P::Event: Borrow<E>, E: TagRef<P::Event>, S: Serialize + Clone,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#260-267 "goto source code")

Emits an event on all windows except this one.

#### `pub fn listen<E: Into<P::Event>, F>(&self, event: E, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#270-276 "goto source code")

Listen to an event on this window.

#### `pub fn once<E: Into<P::Event>, F>(&self, event: E, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#279-285 "goto source code")

Listen to a an event on this window a single time.

#### `pub fn trigger<E: ?Sized>(&self, event: &E, data: Option<String>) where P::Event: Borrow<E>, E: TagRef<P::Event>,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#288-295 "goto source code")

Triggers an event on this window.

#### `pub fn eval(&self, js: &str) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#298-300 "goto source code")

Evaluates JavaScript on this window.

#### `pub fn on_window_event<F: Fn(&WindowEvent) + Send + 'static>(&self, f: F)`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#303-305 "goto source code")

Registers a window event listener.

#### `pub fn scale_factor(&self) -> Result<f64>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#339-341 "goto source code")

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

# [Panics](/docs/api/rust/tauri/about:blank#panics)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn inner_position(&self) -> Result<PhysicalPosition<i32>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#349-351 "goto source code")

Returns the position of the top-left hand corner of the window’s client area relative to the top-left hand corner of the desktop.

# [Panics](/docs/api/rust/tauri/about:blank#panics-1)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn outer_position(&self) -> Result<PhysicalPosition<i32>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#359-361 "goto source code")

Returns the position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

# [Panics](/docs/api/rust/tauri/about:blank#panics-2)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn inner_size(&self) -> Result<PhysicalSize<u32>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#371-373 "goto source code")

Returns the physical size of the window’s client area.

The client area is the content of the window, excluding the title bar and borders.

# [Panics](/docs/api/rust/tauri/about:blank#panics-3)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn outer_size(&self) -> Result<PhysicalSize<u32>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#383-385 "goto source code")

Returns the physical size of the entire window.

These dimensions include the title bar and borders. If you don’t want that (and you usually don’t), use inner_size instead.

# [Panics](/docs/api/rust/tauri/about:blank#panics-4)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn is_fullscreen(&self) -> Result<bool>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#393-395 "goto source code")

Gets the window’s current fullscreen state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-5)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn is_maximized(&self) -> Result<bool>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#403-405 "goto source code")

Gets the window’s current maximized state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-6)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn is_decorated(&self) -> Result<bool>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#413-415 "goto source code")

Gets the window’s current decoration state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-7)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn is_resizable(&self) -> Result<bool>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#423-425 "goto source code")

Gets the window’s current resizable state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-8)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn is_visible(&self) -> Result<bool>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#433-435 "goto source code")

Gets the window’s current vibility state.

# [Panics](/docs/api/rust/tauri/about:blank#panics-9)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn current_monitor(&self) -> Result<Option<Monitor>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#449-456 "goto source code")

Returns the monitor on which the window currently resides.

Returns None if current monitor can’t be detected.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific)

-   **Linux:** Unsupported

# [Panics](/docs/api/rust/tauri/about:blank#panics-10)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn primary_monitor(&self) -> Result<Option<Monitor>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#470-477 "goto source code")

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-1)

-   **Linux:** Unsupported

# [Panics](/docs/api/rust/tauri/about:blank#panics-11)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn available_monitors(&self) -> Result<Vec<Monitor>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#489-496 "goto source code")

Returns the list of all the monitors available on the system.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-2)

-   **Linux:** Unsupported

# [Panics](/docs/api/rust/tauri/about:blank#panics-12)

Panics if the app is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../../tauri/struct.Builder#method.setup) closure. You can spawn a task to use the API using the [`async_runtime`](/docs/api/rust/tauri/../../tauri/async_runtime/index) to prevent the panic.

#### `pub fn center(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#512-514 "goto source code")

Centers the window.

#### `pub fn request_user_attention( &self, request_type: Option<UserAttentionType> ) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#526-535 "goto source code")

Requests user attention to the window, this has no effect if the application is already focused. How requesting for user attention manifests is platform dependent, see `UserAttentionType` for details.

Providing `None` will unset the request for user attention. Unsetting the request for user attention might not be done automatically by the WM when the window receives input.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-3)

-   **macOS:** `None` has no effect.

#### `pub fn print(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#540-542 "goto source code")

Opens the dialog to prints the contents of the webview. Currently only supported on macOS on `wry`. `window.print()` works on all platforms.

#### `pub fn set_resizable(&self, resizable: bool) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#545-551 "goto source code")

Determines if this window should be resizable.

#### `pub fn set_title(&self, title: &str) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#554-560 "goto source code")

Set this window’s title.

#### `pub fn maximize(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#563-565 "goto source code")

Maximizes this window.

#### `pub fn unmaximize(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#568-570 "goto source code")

Un-maximizes this window.

#### `pub fn minimize(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#573-575 "goto source code")

Minimizes this window.

#### `pub fn unminimize(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#578-580 "goto source code")

Un-minimizes this window.

#### `pub fn show(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#583-585 "goto source code")

Show this window.

#### `pub fn hide(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#588-590 "goto source code")

Hide this window.

#### `pub fn close(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#593-595 "goto source code")

Closes this window.

#### `pub fn set_decorations(&self, decorations: bool) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#600-606 "goto source code")

Determines if this window should be [decorated](https://en.wikipedia.org/wiki/Window_(computing)#Window_decoration).

#### `pub fn set_always_on_top(&self, always_on_top: bool) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#609-615 "goto source code")

Determines if this window should always be on top of other windows.

#### `pub fn set_size<S: Into<Size>>(&self, size: S) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#618-624 "goto source code")

Resizes this window.

#### `pub fn set_min_size<S: Into<Size>>(&self, size: Option<S>) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#627-633 "goto source code")

Sets this window’s minimum size.

#### `pub fn set_max_size<S: Into<Size>>(&self, size: Option<S>) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#636-642 "goto source code")

Sets this window’s maximum size.

#### `pub fn set_position<Pos: Into<Position>>(&self, position: Pos) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#645-651 "goto source code")

Sets this window’s position.

#### `pub fn set_fullscreen(&self, fullscreen: bool) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#654-660 "goto source code")

Determines if this window should be fullscreen.

#### `pub fn set_focus(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#663-665 "goto source code")

Bring the window to front and focus.

#### `pub fn set_icon(&self, icon: Icon) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#668-670 "goto source code")

Sets this window’ icon.

#### `pub fn set_skip_taskbar(&self, skip: bool) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#673-679 "goto source code")

Whether to show the window icon in the task bar or not.

#### `pub fn start_dragging(&self) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#682-684 "goto source code")

Starts dragging the window.

## Trait Implementations

### `impl<P: Params> Clone for Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#96-104 "goto source code")

#### `fn clone(&self) -> Self`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#97-103 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<'de, P: Params> CommandArg<'de, P> for Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#136-141 "goto source code")

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#138-140 "goto source code")

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). This will never fail.

### `impl<P: Params> Eq for Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#113 "goto source code")

### `impl<P: Params> Hash for Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#106-111 "goto source code")

#### `fn hash<H: Hasher>(&self, state: &mutH)`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#108-110 "goto source code")

Only use the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window")’s label to represent its hash.

#### `pub fn hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`1.3.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#190-192 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

### `impl<P: Params> Manager<P> for Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#121 "goto source code")

#### `fn config(&self) -> Arc<Config>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#247-249 "goto source code")

The [`Config`](/docs/api/rust/tauri/../../tauri/struct.Config "Config") the manager was created with.

#### `fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where P::Event: Borrow<E>, E: TagRef<P::Event>, S: Serialize + Clone,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#252-259 "goto source code")

Emits a event to all windows.

#### `fn emit_to<E: ?Sized, L: ?Sized, S: Serialize + Clone>( &self, label: &L, event: &E, payload: S ) -> Result<()> where P::Label: Borrow<L>, P::Event: Borrow<E>, L: TagRef<P::Label>, E: TagRef<P::Event>,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#262-277 "goto source code")

Emits an event to a window with the specified label.

#### `fn listen_global<E: Into<P::Event>, F>( &self, event: E, handler: F ) -> EventHandler where F: Fn(Event) + Send + 'static,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#280-285 "goto source code")

Listen to a global event.

#### `fn once_global<E: Into<P::Event>, F>( &self, event: E, handler: F ) -> EventHandler where F: Fn(Event) + Send + 'static,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#288-293 "goto source code")

Listen to a global event only once.

#### `fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where P::Event: Borrow<E>, E: TagRef<P::Event>,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#296-302 "goto source code")

Trigger a global event.

#### `fn unlisten(&self, handler_id: EventHandler)`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#305-307 "goto source code")

Remove an event listener.

#### `fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where P::Label: Borrow<L>, L: TagRef<P::Label>,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#310-316 "goto source code")

Fetch a single window from the manager.

#### `fn windows(&self) -> HashMap<P::Label, Window<P>>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#319-321 "goto source code")

Fetch all managed windows.

#### `fn manage<T>(&self, state: T) where T: Send + Sync + 'static,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#325-330 "goto source code")

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../../tauri/struct.Builder#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../../tauri/trait.Manager#method.manage)

#### `fn state<T>(&self) -> State<'_, T> where T: Send + Sync + 'static,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#333-338 "goto source code")

Gets the managed state for the type `T`.

### `impl<P: Params> PartialEq<Window<P>> for Window<P>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#114-119 "goto source code")

#### `fn eq(&self, other: &Self) -> bool`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#116-118 "goto source code")

Only use the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window "Window")’s label to compare equality.

#### `#[must_use]pub fn ne(&self, other: &Rhs) -> bool`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for Window<P>`

### `impl<P> Send for Window<P>`

### `impl<P> Sync for Window<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::Dispatcher: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync,`

### `impl<P> Unpin for Window<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Unpin, <<P as Params>::Runtime as Runtime>::Dispatcher: Unpin, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Unpin, <<P as Params>::Runtime as Runtime>::Handle: Unpin, <P as Params>::Label: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for Window<P>`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135 "goto source code")

#### `pub fn type_id(&self) -> TypeId`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213 "goto source code")

#### `pub fn borrow(&self) -> &T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220 "goto source code")

#### `pub fn borrow_mut(&mut self) -> &mutT`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548 "goto source code")

#### `pub fn from(t: T) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540 "goto source code")

#### `pub fn into(self) -> U`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### `impl<T> ToOwned for T where T: Clone,`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#81-93 "goto source code")

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `pub fn to_owned(&self) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#86 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `pub fn clone_into(&self, target: &mutT)`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#90 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590 "goto source code")

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576 "goto source code")

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
