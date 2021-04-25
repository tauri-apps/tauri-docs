---
title: "struct.WryDispatcher"
---

# Struct [tauri](/docs/api/rust/tauri/../../../index.html)::​[runtime](/docs/api/rust/tauri/../../index.html)::​[flavors](/docs/api/rust/tauri/../index.html)::​[wry](/docs/api/rust/tauri/index.html)::​[WryDispatcher](/docs/api/rust/tauri/)

    pub struct WryDispatcher { /* fields omitted */ }

The Tauri [`Dispatch`](/docs/api/rust/tauri/../../../../tauri/runtime/trait.Dispatch.html "Dispatch") for [`Wry`](/docs/api/rust/tauri/../../../../tauri/runtime/flavors/wry/struct.Wry.html "Wry").

## Trait Implementations

### `impl Clone for WryDispatcher`

#### `fn clone(&self) -> WryDispatcher`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Dispatch for WryDispatcher`

#### `type Runtime = Wry`

The runtime this [`Dispatch`](/docs/api/rust/tauri/../../../../tauri/runtime/trait.Dispatch.html "Dispatch") runs under.

#### `type Icon = WryIcon`

Representation of a window icon.

#### `type Attributes = WryAttributes`

The webview builder type.

#### `fn create_window<M: Params<Runtime = Self::Runtime>>( &mut self, pending: PendingWindow<M> ) -> Result<DetachedWindow<M>>`

Create a new webview window.

#### `fn set_resizable(&self, resizable: bool) -> Result<()>`

Updates the window resizable flag.

#### `fn set_title<S: Into<String>>(&self, title: S) -> Result<()>`

Updates the window title.

#### `fn maximize(&self) -> Result<()>`

Maximizes the window.

#### `fn unmaximize(&self) -> Result<()>`

Unmaximizes the window.

#### `fn minimize(&self) -> Result<()>`

Minimizes the window.

#### `fn unminimize(&self) -> Result<()>`

Unminimizes the window.

#### `fn show(&self) -> Result<()>`

Shows the window.

#### `fn hide(&self) -> Result<()>`

Hides the window.

#### `fn close(&self) -> Result<()>`

Closes the window.

#### `fn set_decorations(&self, decorations: bool) -> Result<()>`

Updates the hasDecorations flag.

#### `fn set_always_on_top(&self, always_on_top: bool) -> Result<()>`

Updates the window alwaysOnTop flag.

#### `fn set_width(&self, width: f64) -> Result<()>`

Updates the window width.

#### `fn set_height(&self, height: f64) -> Result<()>`

Updates the window height.

#### `fn resize(&self, width: f64, height: f64) -> Result<()>`

Resizes the window.

#### `fn set_min_size(&self, min_width: f64, min_height: f64) -> Result<()>`

Updates the window min size.

#### `fn set_max_size(&self, max_width: f64, max_height: f64) -> Result<()>`

Updates the window max size.

#### `fn set_x(&self, x: f64) -> Result<()>`

Updates the X position.

#### `fn set_y(&self, y: f64) -> Result<()>`

Updates the Y position.

#### `fn set_position(&self, x: f64, y: f64) -> Result<()>`

Updates the window position.

#### `fn set_fullscreen(&self, fullscreen: bool) -> Result<()>`

Updates the window fullscreen state.

#### `fn set_icon(&self, icon: Self::Icon) -> Result<()>`

Updates the window icon.

#### `fn eval_script<S: Into<String>>(&self, script: S) -> Result<()>`

Executes javascript on the window this [`Dispatch`](/docs/api/rust/tauri/../../../../tauri/runtime/trait.Dispatch.html "Dispatch") represents.

## Auto Trait Implementations

### `impl RefUnwindSafe for WryDispatcher`

### `impl Send for WryDispatcher`

### `impl Sync for WryDispatcher`

### `impl Unpin for WryDispatcher`

### `impl UnwindSafe for WryDispatcher`

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

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T> Instrument for T`

#### `pub fn instrument(self, span: Span) -> Instrumented<Self>`

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.in_current_span)

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
