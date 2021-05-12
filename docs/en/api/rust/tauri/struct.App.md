---
title: "struct.App"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[App](/docs/api/rust/tauri/)

```rs
pub struct App<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }
```

The instance of the currently running application.

This type implements [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager.html "Manager") which allows for manipulation of global application items.

## Implementations

### `impl<P: Params> App<P>`

#### `pub fn create_window<F>( &mut self, label: P::Label, url: WindowUrl, setup: F ) -> Result<()> where F: FnOnce(<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes),`

Creates a new webview window.

## Trait Implementations

### `impl<P: Params> Manager<P> for App<P>`

#### `fn config(&self) -> Arc<Config>`

The [`Config`](/docs/api/rust/tauri/../tauri/struct.Config.html "Config") the manager was created with.

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

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder.html#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../tauri/trait.Manager.html#method.manage)

#### `fn state<T>(&self) -> State<'_, T> where T: Send + Sync + 'static,`

Gets the managed state for the type `T`.

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for App<P>`

### `impl<P> Send for App<P> where <P as Params>::Runtime: Send,`

### `impl<P> Sync for App<P> where <P as Params>::Runtime: Sync,`

### `impl<P> Unpin for App<P> where <P as Params>::Runtime: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for App<P>`

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
