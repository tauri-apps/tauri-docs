---
title: "struct.InvokeError"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[InvokeError](/docs/api/rust/tauri/)

```rs
pub struct InvokeError(_);
```

Error response from an [`InvokeMessage`](/docs/api/rust/tauri/../tauri/struct.InvokeMessage.html "InvokeMessage").

## Implementations

### `impl InvokeError`

#### `pub fn from_serde_json(error: Error) -> Self`

Create an [`InvokeError`](/docs/api/rust/tauri/../tauri/struct.InvokeError.html "InvokeError") as a string of the [`serde_json::Error`](https://docs.rs/serde_json/1.0.64/serde_json/error/struct.Error.html "serde_json::Error") message.

## Trait Implementations

### `impl Debug for InvokeError`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl From<Error> for InvokeError`

#### `fn from(error: Error) -> Self`

Performs the conversion.

### `impl From<InvokeError> for InvokeResponse`

#### `fn from(error: InvokeError) -> Self`

Performs the conversion.

### `impl<T: Serialize> From<T> for InvokeError`

#### `fn from(value: T) -> Self`

Performs the conversion.

## Auto Trait Implementations

### `impl RefUnwindSafe for InvokeError`

### `impl Send for InvokeError`

### `impl Sync for InvokeError`

### `impl Unpin for InvokeError`

### `impl UnwindSafe for InvokeError`

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
