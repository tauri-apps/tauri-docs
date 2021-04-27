---
title: "struct.DetachedWindow"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[runtime](/docs/api/rust/tauri/../index.html)::​[window](/docs/api/rust/tauri/index.html)::​[DetachedWindow](/docs/api/rust/tauri/)

```
pub struct DetachedWindow<M: Params> {
    pub label: M::Label,
    pub dispatcher: <M::Runtime as Runtime>::Dispatcher,
}
```

A webview window that is not yet managed by Tauri.

## Fields

`label: M::Label`

Name of the window

`dispatcher: <M::Runtime as Runtime>::Dispatcher`

The [`Dispatch`](/docs/api/rust/tauri/../../../tauri/runtime/trait.Dispatch.html) associated with the window.

## Trait Implementations

### `impl<M: Params> Clone for DetachedWindow<M>`

#### `fn clone(&self) -> Self`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<M: Params> Eq for DetachedWindow<M>`

### `impl<M: Params> Hash for DetachedWindow<M>`

#### `fn hash<H: Hasher>(&self, state: &mutH)`

Only use the [`DetachedWindow`](/docs/api/rust/tauri/../../../tauri/runtime/window/struct.DetachedWindow.html "DetachedWindow")'s label to represent its hash.

#### `pub fn hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`1.3.0

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

### `impl<M: Params> PartialEq<DetachedWindow<M>> for DetachedWindow<M>`

#### `fn eq(&self, other: &Self) -> bool`

Only use the [`DetachedWindow`](/docs/api/rust/tauri/../../../tauri/runtime/window/struct.DetachedWindow.html "DetachedWindow")'s label to compare equality.

#### `#[must_use]pub fn ne(&self, other: &Rhs) -> bool`1.0.0

This method tests for `!=`.

## Auto Trait Implementations

### `impl<M> RefUnwindSafe for DetachedWindow<M> where <<M as Params>::Runtime as Runtime>::Dispatcher: RefUnwindSafe, <M as Params>::Label: RefUnwindSafe,`

### `impl<M> Send for DetachedWindow<M>`

### `impl<M> Sync for DetachedWindow<M> where <<M as Params>::Runtime as Runtime>::Dispatcher: Sync,`

### `impl<M> Unpin for DetachedWindow<M> where <<M as Params>::Runtime as Runtime>::Dispatcher: Unpin, <M as Params>::Label: Unpin,`

### `impl<M> UnwindSafe for DetachedWindow<M> where <<M as Params>::Runtime as Runtime>::Dispatcher: UnwindSafe, <M as Params>::Label: UnwindSafe,`

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
