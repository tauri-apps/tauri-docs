---
title: "struct.Window"
---

# Struct [tauri](/docs/api/rust/tauri/../index.html)::​[window](/docs/api/rust/tauri/index.html)::​[Window](/docs/api/rust/tauri/)

    pub struct Window<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }

A webview window managed by Tauri.

This type also implements [`Manager`](/docs/api/rust/tauri/../../tauri/trait.Manager.html "Manager") which allows you to manage other windows attached to the same application.

## Implementations

### `impl<P: Params> Window<P>`

#### `pub fn create_window<F>( &mut self, label: P::Label, url: WindowUrl, setup: F ) -> Result<Window<P>> where F: FnOnce(<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes),`

Creates a new webview window.

#### `pub fn label(&self) -> &P::Label`

The label of this window.

#### `pub fn emit<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where P::Event: Borrow<E>, E: TagRef<P::Event>, S: Serialize,`

Emits an event to the current window.

#### `pub fn emit_others<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where P::Event: Borrow<E>, E: TagRef<P::Event>, S: Serialize + Clone,`

Emits an event on all windows except this one.

#### `pub fn listen<E: Into<P::Event>, F>(&self, event: E, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to an event on this window.

#### `pub fn once<E: Into<P::Event>, F>(&self, event: E, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a an event on this window a single time.

#### `pub fn trigger<E: ?Sized>(&self, event: &E, data: Option<String>) where P::Event: Borrow<E>, E: TagRef<P::Event>,`

Triggers an event on this window.

#### `pub fn eval(&self, js: &str) -> Result<()>`

Evaluates JavaScript on this window.

#### `pub fn on_window_event<F: Fn(&WindowEvent) + Send + 'static>(&self, f: F)`

Registers a window event listener.

#### `pub fn scale_factor(&self) -> Result<f64>`

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

#### `pub fn inner_position(&self) -> Result<PhysicalPosition<i32>>`

Returns the position of the top-left hand corner of the window’s client area relative to the top-left hand corner of the desktop.

#### `pub fn outer_position(&self) -> Result<PhysicalPosition<i32>>`

Returns the position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

#### `pub fn inner_size(&self) -> Result<PhysicalSize<u32>>`

Returns the physical size of the window’s client area.

The client area is the content of the window, excluding the title bar and borders.

#### `pub fn outer_size(&self) -> Result<PhysicalSize<u32>>`

Returns the physical size of the entire window.

These dimensions include the title bar and borders. If you don’t want that (and you usually don’t), use inner_size instead.

#### `pub fn is_fullscreen(&self) -> Result<bool>`

Gets the window’s current fullscreen state.

#### `pub fn is_maximized(&self) -> Result<bool>`

Gets the window’s current maximized state.

#### `pub fn current_monitor(&self) -> Result<Option<Monitor>>`

Returns the monitor on which the window currently resides.

Returns None if current monitor can’t be detected.

#### `pub fn primary_monitor(&self) -> Result<Option<Monitor>>`

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

#### `pub fn available_monitors(&self) -> Result<Vec<Monitor>>`

Returns the list of all the monitors available on the system.

#### `pub fn print(&self) -> Result<()>`

Opens the dialog to prints the contents of the webview. Currently only supported on macOS on `wry`. `window.print()` works on all platforms.

#### `pub fn set_resizable(&self, resizable: bool) -> Result<()>`

Determines if this window should be resizable.

#### `pub fn set_title(&self, title: &str) -> Result<()>`

Set this window’s title.

#### `pub fn maximize(&self) -> Result<()>`

Maximizes this window.

#### `pub fn unmaximize(&self) -> Result<()>`

Un-maximizes this window.

#### `pub fn minimize(&self) -> Result<()>`

Minimizes this window.

#### `pub fn unminimize(&self) -> Result<()>`

Un-minimizes this window.

#### `pub fn show(&self) -> Result<()>`

Show this window.

#### `pub fn hide(&self) -> Result<()>`

Hide this window.

#### `pub fn close(&self) -> Result<()>`

Closes this window.

#### `pub fn set_decorations(&self, decorations: bool) -> Result<()>`

Determines if this window should be [decorated](https://en.wikipedia.org/wiki/Window_(computing)#Window_decoration).

#### `pub fn set_always_on_top(&self, always_on_top: bool) -> Result<()>`

Determines if this window should always be on top of other windows.

#### `pub fn set_size<S: Into<Size>>(&self, size: S) -> Result<()>`

Resizes this window.

#### `pub fn set_min_size<S: Into<Size>>(&self, size: Option<S>) -> Result<()>`

Sets this window’s minimum size.

#### `pub fn set_max_size<S: Into<Size>>(&self, size: Option<S>) -> Result<()>`

Sets this window’s maximum size.

#### `pub fn set_position<Pos: Into<Position>>(&self, position: Pos) -> Result<()>`

Sets this window’s position.

#### `pub fn set_fullscreen(&self, fullscreen: bool) -> Result<()>`

Determines if this window should be fullscreen.

#### `pub fn set_icon(&self, icon: Icon) -> Result<()>`

Sets this window’ icon.

#### `pub fn start_dragging(&self) -> Result<()>`

Starts dragging the window.

## Trait Implementations

### `impl<P: Params> Clone for Window<P>`

#### `fn clone(&self) -> Self`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<'de, P: Params> CommandArg<'de, P> for Window<P>`

#### `fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>`

Grabs the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window.html "Window") from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem"). This will never fail.

### `impl<P: Params> Eq for Window<P>`

### `impl<P: Params> Hash for Window<P>`

#### `fn hash<H: Hasher>(&self, state: &mutH)`

Only use the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window.html "Window")’s label to represent its hash.

#### `pub fn hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`1.3.0

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

### `impl<P: Params> Manager<P> for Window<P>`

#### `fn config(&self) -> Arc<Config>`

The [`Config`](/docs/api/rust/tauri/../../tauri/struct.Config.html "Config") the manager was created with.

#### `fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where P::Event: Borrow<E>, E: TagRef<P::Event>, S: Serialize + Clone,`

Emits a event to all windows.

#### `fn emit_to<E: ?Sized, L: ?Sized, S: Serialize + Clone>( &self, label: &L, event: &E, payload: S ) -> Result<()> where P::Label: Borrow<L>, P::Event: Borrow<E>, L: TagRef<P::Label>, E: TagRef<P::Event>,`

Emits an event to a window with the specified label.

#### `fn listen_global<E: Into<P::Event>, F>( &self, event: E, handler: F ) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event.

#### `fn once_global<E: Into<P::Event>, F>( &self, event: E, handler: F ) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event only once.

#### `fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where P::Event: Borrow<E>, E: TagRef<P::Event>,`

Trigger a global event.

#### `fn unlisten(&self, handler_id: EventHandler)`

Remove an event listener.

#### `fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where P::Label: Borrow<L>, L: TagRef<P::Label>,`

Fetch a single window from the manager.

#### `fn windows(&self) -> HashMap<P::Label, Window<P>>`

Fetch all managed windows.

#### `fn manage<T>(&self, state: T) where T: Send + Sync + 'static,`

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../../tauri/struct.Builder.html#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../../tauri/trait.Manager.html#method.manage)

#### `fn state<T>(&self) -> State<'_, T> where T: Send + Sync + 'static,`

Gets the managed state for the type `T`.

### `impl<P: Params> PartialEq<Window<P>> for Window<P>`

#### `fn eq(&self, other: &Self) -> bool`

Only use the [`Window`](/docs/api/rust/tauri/../../tauri/window/struct.Window.html "Window")’s label to compare equality.

#### `#[must_use]pub fn ne(&self, other: &Rhs) -> bool`1.0.0

This method tests for `!=`.

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for Window<P>`

### `impl<P> Send for Window<P>`

### `impl<P> Sync for Window<P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Sync,`

### `impl<P> Unpin for Window<P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Unpin, <P as Params>::Label: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for Window<P>`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `pub fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `pub fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `pub fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<Q, K> Equivalent<K> for Q where K: Borrow<Q> + ?Sized, Q: Eq + ?Sized,`

#### `pub fn equivalent(&self, key: &K) -> bool`

Compare self to `key` and return `true` if they are equal.

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T> Instrument for T`

#### `pub fn instrument(self, span: Span) -> Instrumented<Self>`

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.in_current_span)

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `pub fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `pub const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `pub unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.init)

#### `pub unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref)

#### `pub unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref_mut)

#### `pub unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.drop)

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `pub fn to_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `pub fn clone_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
