---
title: "struct.PendingWindow"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[runtime](/docs/api/rust/tauri/../index.html)::​[window](/docs/api/rust/tauri/index.html)::​[PendingWindow](/docs/api/rust/tauri/)

    pub struct PendingWindow<M: Params> {
        pub label: M::Label,
        pub url: WindowUrl,
        pub attributes: <<M::Runtime as Runtime>::Dispatcher as Dispatch>::Attributes,
        pub rpc_handler: Option<Box<dyn Fn(DetachedWindow<M>, RpcRequest) + Send>>,
        pub file_drop_handler: Option<Box<dyn Fn(FileDropEvent, DetachedWindow<M>) -> bool + Send>>,
    }

A webview window that has yet to be built.

## Fields

`label: M::Label`

The label that the window will be named.

`url: WindowUrl`

The url the window will open with.

`attributes: <<M::Runtime as Runtime>::Dispatcher as Dispatch>::Attributes`

The [`Attributes`](/docs/api/rust/tauri/../../../tauri/runtime/webview/trait.Attributes.html "Attributes") that the webview window be created with.

`rpc_handler: Option<Box<dyn Fn(DetachedWindow<M>, RpcRequest) + Send>>`

How to handle RPC calls on the webview window.

`file_drop_handler: Option<Box<dyn Fn(FileDropEvent, DetachedWindow<M>) -> bool + Send>>`

How to handle a file dropping onto the webview window.

## Implementations

### `impl<M: Params> PendingWindow<M>`

#### `pub fn new( attributes: <<M::Runtime as Runtime>::Dispatcher as Dispatch>::Attributes, label: M::Label, url: WindowUrl ) -> Self`

Create a new [`PendingWindow`](/docs/api/rust/tauri/../../../tauri/runtime/window/struct.PendingWindow.html "PendingWindow") with a label and starting url.

#### `pub fn with_config( window_config: WindowConfig, label: M::Label, url: WindowUrl ) -> Self`

Create a new [`PendingWindow`](/docs/api/rust/tauri/../../../tauri/runtime/window/struct.PendingWindow.html "PendingWindow") from a [`WindowConfig`](/docs/api/rust/tauri/../../../tauri/api/config/struct.WindowConfig.html "WindowConfig") with a label and starting url.

## Auto Trait Implementations

### `impl<M> !RefUnwindSafe for PendingWindow<M>`

### `impl<M> Send for PendingWindow<M>`

### `impl<M> !Sync for PendingWindow<M>`

### `impl<M> Unpin for PendingWindow<M> where <<<M as Params>::Runtime as Runtime>::Dispatcher as Dispatch>::Attributes: Unpin, <M as Params>::Label: Unpin,`

### `impl<M> !UnwindSafe for PendingWindow<M>`

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
