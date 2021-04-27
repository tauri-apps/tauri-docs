---
title: "struct.Window"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[Window](/docs/api/rust/tauri/)

```
pub struct Window<P: Params> { /* fields omitted */ }
```

A webview window managed by Tauri.

This type also implements [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager.html "Manager") which allows you to manage other windows attached to the same application.

TODO: expand these docs since this is a pretty important type

## Implementations

### `impl<P: Params> Window<P>`

#### `pub fn label(&self) -> &P::Label`

The label of this window.

#### `pub fn emit<S: Serialize>( &self, event: &P::Event, payload: Option<S> ) -> Result<()>`

Emits an event to the current window.

#### `pub fn emit_others<S: Serialize + Clone>( &self, event: P::Event, payload: Option<S> ) -> Result<()>`

Emits an event on all windows except this one.

#### `pub fn listen<F>(&self, event: P::Event, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to an event on this window.

#### `pub fn once<F>(&self, event: P::Event, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a an event on this window a single time.

#### `pub fn trigger(&self, event: P::Event, data: Option<String>)`

Triggers an event on this window.

#### `pub fn eval(&self, js: &str) -> Result<()>`

Evaluates JavaScript on this window.

#### `pub fn set_resizable(&self, resizable: bool) -> Result<()>`

Determines if this window should be resizable.

#### `pub fn set_title(&self, title: &str) -> Result<()>`

Set this window's title.

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

#### `pub fn set_width(&self, width: impl Into<f64>) -> Result<()>`

Sets this window's width.

#### `pub fn set_height(&self, height: impl Into<f64>) -> Result<()>`

Sets this window's height.

#### `pub fn resize( &self, width: impl Into<f64>, height: impl Into<f64> ) -> Result<()>`

Resizes this window.

#### `pub fn set_min_size( &self, min_width: impl Into<f64>, min_height: impl Into<f64> ) -> Result<()>`

Sets this window's minimum size.

#### `pub fn set_max_size( &self, max_width: impl Into<f64>, max_height: impl Into<f64> ) -> Result<()>`

Sets this window's maximum size.

#### `pub fn set_x(&self, x: impl Into<f64>) -> Result<()>`

Sets this window's x position.

#### `pub fn set_y(&self, y: impl Into<f64>) -> Result<()>`

Sets this window's y position.

#### `pub fn set_position(&self, x: impl Into<f64>, y: impl Into<f64>) -> Result<()>`

Sets this window's position.

#### `pub fn set_fullscreen(&self, fullscreen: bool) -> Result<()>`

Determines if this window should be fullscreen.

#### `pub fn set_icon(&self, icon: Icon) -> Result<()>`

Sets this window' icon.

## Trait Implementations

### `impl<M: Params> Clone for Window<M>`

#### `fn clone(&self) -> Self`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<P: Params> Eq for Window<P>`

### `impl<P: Params> Hash for Window<P>`

#### `fn hash<H: Hasher>(&self, state: &mutH)`

Only use the [`Window`](/docs/api/rust/tauri/../tauri/struct.Window.html "Window")'s label to represent its hash.

#### `pub fn hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`1.3.0

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

### `impl<P: Params> Manager<P> for Window<P>`

#### `fn config(&self) -> &Config`

The [`Config`](/docs/api/rust/tauri/../tauri/api/config/struct.Config.html "Config") the manager was created with.

#### `fn emit_all<S: Serialize + Clone>( &self, event: M::Event, payload: Option<S> ) -> Result<()>`

Emits a event to all windows.

#### `fn emit_to<S: Serialize + Clone>( &self, label: &M::Label, event: M::Event, payload: Option<S> ) -> Result<()>`

Emits an event to a window with the specified label.

#### `fn create_window(&mut self, pending: PendingWindow<M>) -> Result<Window<M>>`

Creates a new [`Window`](/docs/api/rust/tauri/../tauri/struct.Window.html "Window") on the [`Runtime`](/docs/api/rust/tauri/../tauri/runtime/trait.Runtime.html "Runtime") and attaches it to the [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager.html "Manager").

#### `fn listen_global<F>(&self, event: M::Event, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event.

#### `fn once_global<F>(&self, event: M::Event, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event only once.

#### `fn trigger_global(&self, event: M::Event, data: Option<String>)`

Trigger a global event.

#### `fn unlisten(&self, handler_id: EventHandler)`

Remove an event listener.

#### `fn get_window(&self, label: &M::Label) -> Option<Window<M>>`

Fetch a single window from the manager.

#### `fn windows(&self) -> HashMap<M::Label, Window<M>>`

Fetch all managed windows.

### `impl<P: Params> PartialEq<Window<P>> for Window<P>`

#### `fn eq(&self, other: &Self) -> bool`

Only use the [`Window`](/docs/api/rust/tauri/../tauri/struct.Window.html "Window")'s label to compare equality.

#### `#[must_use]pub fn ne(&self, other: &Rhs) -> bool`1.0.0

This method tests for `!=`.

## Auto Trait Implementations

### `impl<P> !RefUnwindSafe for Window<P>`

### `impl<P> Send for Window<P>`

### `impl<P> Sync for Window<P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Sync,`

### `impl<P> Unpin for Window<P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Unpin, <P as Params>::Label: Unpin,`

### `impl<P> !UnwindSafe for Window<P>`

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
