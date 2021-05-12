---
title: "struct.InvokeResolver"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[InvokeResolver](/docs/api/rust/tauri/)

    pub struct InvokeResolver<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }

Resolver of a invoke message.

## Implementations

### `impl<P: Params> InvokeResolver<P>`

#### `pub fn respond_async<T, F>(self, task: F) where T: Serialize, F: Future<Output = Result<T, InvokeError>> + Send + 'static,`

Reply to the invoke promise with an async task.

#### `pub fn respond_async_serialized<F>(self, task: F) where F: Future<Output = Result<JsonValue, InvokeError>> + Send + 'static,`

Reply to the invoke promise with an async task which is already serialized.

#### `pub fn respond<T: Serialize>(self, value: Result<T, InvokeError>)`

Reply to the invoke promise with a serializable value.

#### `pub fn respond_closure<T, F>(self, f: F) where T: Serialize, F: FnOnce() -> Result<T, InvokeError>,`

Reply to the invoke promise running the given closure.

#### `pub fn resolve<T: Serialize>(self, value: T)`

Resolve the invoke promise with a value.

#### `pub fn reject<T: Serialize>(self, value: T)`

Reject the invoke promise with a value.

#### `pub fn invoke_error(self, error: InvokeError)`

Reject the invoke promise with an [`InvokeError`](/docs/api/rust/tauri/../tauri/struct.InvokeError.html "InvokeError").

#### `pub async fn return_task<T, F>( window: Window<P>, task: F, success_callback: String, error_callback: String ) where T: Serialize, F: Future<Output = Result<T, InvokeError>> + Send + 'static,`

Asynchronously executes the given task and evaluates its Result to the JS promise described by the `success_callback` and `error_callback` function names.

If the Result `is_ok()`, the callback will be the `success_callback` function name and the argument will be the Ok value. If the Result `is_err()`, the callback will be the `error_callback` function name and the argument will be the Err value.

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for InvokeResolver<P>`

### `impl<P> Send for InvokeResolver<P>`

### `impl<P> Sync for InvokeResolver<P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Sync,`

### `impl<P> Unpin for InvokeResolver<P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Unpin, <P as Params>::Label: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for InvokeResolver<P>`

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
