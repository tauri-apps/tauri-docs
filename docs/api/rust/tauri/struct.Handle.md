---
title: "struct.Handle"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[Handle](/docs/api/rust/tauri/)

    pub struct Handle<T> { /* fields omitted */ }

A thread-safe handle to a [`WebView`](/docs/api/rust/tauri/struct.WebView.html) instance. Used to dispatch closures onto its task queue.

## Methods

### `impl<T> Handle<T>`

#### `pub fn dispatch<F>(&self, f: F) -> Result<(), Error> where F: FnOnce(&mut WebView<T>) -> Result<(), Error> + Send + 'static,`

Schedules a closure to be run on the [`WebView`](/docs/api/rust/tauri/struct.WebView.html) thread.

# [Errors](/docs/api/rust/tauri/about:blank#errors)

Returns [`Error::Dispatch`](/docs/api/rust/tauri/enum.Error.html#variant.Dispatch) if the [`WebView`](/docs/api/rust/tauri/struct.WebView.html) has been dropped.

If the closure returns an `Err`, it will be returned on the next call to [`step()`](/docs/api/rust/tauri/struct.WebView.html#method.step).

## Trait Implementations

### `impl<T> Clone for Handle<T>`

#### `fn clone(&self) -> Handle<T>`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<T> Send for Handle<T>`

### `impl<T> Sync for Handle<T>`

## Auto Trait Implementations

### `impl<T> RefUnwindSafe for Handle<T> where T: RefUnwindSafe,`

### `impl<T> Unpin for Handle<T> where T: Unpin,`

### `impl<T> UnwindSafe for Handle<T> where T: UnwindSafe,`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `fn to_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `fn clone_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `fn vzip(self) -> V`
      