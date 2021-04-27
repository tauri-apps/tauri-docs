---
title: "struct.Set"
---

# Struct [tauri](/docs/api/rust/tauri/../../../../index.html)::​[api](/docs/api/rust/tauri/../../../index.html)::​[assets](/docs/api/rust/tauri/../../index.html)::​[phf](/docs/api/rust/tauri/../index.html)::​[set](/docs/api/rust/tauri/index.html)::​[Set](/docs/api/rust/tauri/)

```
pub struct Set<T> where
    T: 'static,  { /* fields omitted */ }
```

An immutable set constructed at compile time.

## [Note](/docs/api/rust/tauri/about:blank#note)

The fields of this struct are public so that they may be initialized by the `phf_set!` macro and code generation. They are subject to change at any time and should never be accessed directly.

## Implementations

### `impl<T> Set<T>`

#### `pub fn len(&self) -> usize`

Returns the number of elements in the `Set`.

#### `pub fn is_empty(&self) -> bool`

Returns true if the `Set` contains no elements.

#### `pub fn get_key<U>(&self, key: &U) -> Option<&T> where T: Borrow<U>, U: Eq + PhfHash + ?Sized,`

Returns a reference to the set's internal static instance of the given key.

This can be useful for interning schemes.

#### `pub fn contains<U>(&self, value: &U) -> boolwhere T: Borrow<U>, U: Eq + PhfHash + ?Sized,`

Returns true if `value` is in the `Set`.

#### `pub fn iter(&'a self) -> Iter<'a, T>ⓘ Notable traits for Iter<'a, T> impl<'a, T> Iterator for Iter<'a, T>type Item = &'aT;`

Returns an iterator over the values in the set.

Values are returned in an arbitrary but fixed order.

### `impl<T> Set<T> where T: Eq + PhfHash,`

#### `pub fn is_disjoint(&self, other: &Set<T>) -> bool`

Returns true if `other` shares no elements with `self`.

#### `pub fn is_subset(&self, other: &Set<T>) -> bool`

Returns true if `other` contains all values in `self`.

#### `pub fn is_superset(&self, other: &Set<T>) -> bool`

Returns true if `self` contains all values in `other`.

## Trait Implementations

### `impl<T> Debug for Set<T> where T: Debug,`

#### `pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'a, T> IntoIterator for &'a Set<T>`

#### `type Item = &'aT`

The type of the elements being iterated over.

#### `type IntoIter = Iter<'a, T>`

Which kind of iterator are we turning this into?

#### `pub fn into_iter(self) -> Iter<'a, T>ⓘ Notable traits for Iter<'a, T> impl<'a, T> Iterator for Iter<'a, T>type Item = &'aT;`

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

## Auto Trait Implementations

### `impl<T> RefUnwindSafe for Set<T> where T: RefUnwindSafe,`

### `impl<T> Send for Set<T> where T: Send + Sync,`

### `impl<T> Sync for Set<T> where T: Sync,`

### `impl<T> Unpin for Set<T> where T: Unpin,`

### `impl<T> UnwindSafe for Set<T> where T: RefUnwindSafe + UnwindSafe,`

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
