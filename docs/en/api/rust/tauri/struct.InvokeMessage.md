---
title: "struct.InvokeMessage"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[InvokeMessage](/docs/api/rust/tauri/)

    pub struct InvokeMessage<M: Params> { /* fields omitted */ }

An invoke message.

## Implementations

### `impl<M: Params> InvokeMessage<M>`

#### `pub fn command(&self) -> &str`

The invoke command.

#### `pub fn payload(&self) -> Value`

The invoke payload.

#### `pub fn window(&self) -> Window<M>`

The window that received the invoke.

#### `pub fn respond_async<T: Serialize, Err: Serialize, F: Future<Output = Result<T, Err>> + Send + 'static>( self, task: F )`

Reply to the invoke promise with an async task.

#### `pub fn respond_closure<T: Serialize, Err: Serialize, F: FnOnce() -> Result<T, Err>>( self, f: F )`

Reply to the invoke promise running the given closure.

#### `pub fn resolve<S: Serialize>(self, value: S)`

Resolve the invoke promise with a value.

#### `pub fn reject<S: Serialize>(self, value: S)`

Reject the invoke promise with a value.

#### `pub async fn return_task<T: Serialize, Err: Serialize, F: Future<Output = Result<T, Err>> + Send + 'static>( window: Window<M>, task: F, success_callback: String, error_callback: String )`

Asynchronously executes the given task and evaluates its Result to the JS promise described by the `success_callback` and `error_callback` function names.

If the Result `is_ok()`, the callback will be the `success_callback` function name and the argument will be the Ok value. If the Result `is_err()`, the callback will be the `error_callback` function name and the argument will be the Err value.

## Auto Trait Implementations

### `impl<M> !RefUnwindSafe for InvokeMessage<M>`

### `impl<M> Send for InvokeMessage<M>`

### `impl<M> Sync for InvokeMessage<M> where <<M as Params>::Runtime as Runtime>::Dispatcher: Sync,`

### `impl<M> Unpin for InvokeMessage<M> where <<M as Params>::Runtime as Runtime>::Dispatcher: Unpin, <M as Params>::Label: Unpin,`

### `impl<M> !UnwindSafe for InvokeMessage<M>`

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
