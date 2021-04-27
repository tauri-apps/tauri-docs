---
title: "struct.App"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[App](/docs/api/rust/tauri/)

```
pub struct App<P: Params> { /* fields omitted */ }
```

A handle to the currently running application.

This type implements [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager.html "Manager") which allows for manipulation of global application items.

## Trait Implementations

### `impl<P: Params> Manager<P> for App<P>`

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

## Auto Trait Implementations

### `impl<P> !RefUnwindSafe for App<P>`

### `impl<P> Send for App<P> where <P as Params>::Runtime: Send,`

### `impl<P> Sync for App<P> where <P as Params>::Runtime: Sync,`

### `impl<P> Unpin for App<P> where <P as Params>::Runtime: Unpin,`

### `impl<P> !UnwindSafe for App<P>`

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
