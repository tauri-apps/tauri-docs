---
title: "struct.Map"
---

# Struct [tauri](/docs/api/rust/tauri/../../../../index.html)::​[api](/docs/api/rust/tauri/../../../index.html)::​[assets](/docs/api/rust/tauri/../../index.html)::​[phf](/docs/api/rust/tauri/../index.html)::​[map](/docs/api/rust/tauri/index.html)::​[Map](/docs/api/rust/tauri/)

```rs
pub struct Map<K, V> where
    V: 'static,
    K: 'static,  { /* fields omitted */ }
```

An immutable map constructed at compile time.

## [Note](/docs/api/rust/tauri/about:blank#note)

The fields of this struct are public so that they may be initialized by the `phf_map!` macro and code generation. They are subject to change at any time and should never be accessed directly.

## Implementations

### `impl<K, V> Map<K, V>`

#### `pub fn is_empty(&self) -> bool`

Returns true if the `Map` is empty.

#### `pub fn len(&self) -> usize`

Returns the number of entries in the `Map`.

#### `pub fn contains_key<T>(&self, key: &T) -> boolwhere T: Eq + PhfHash + ?Sized, K: Borrow<T>,`

Determines if `key` is in the `Map`.

#### `pub fn get<T>(&self, key: &T) -> Option<&V> where T: Eq + PhfHash + ?Sized, K: Borrow<T>,`

Returns a reference to the value that `key` maps to.

#### `pub fn get_key<T>(&self, key: &T) -> Option<&K> where T: Eq + PhfHash + ?Sized, K: Borrow<T>,`

Returns a reference to the map’s internal static instance of the given key.

This can be useful for interning schemes.

#### `pub fn get_entry<T>(&self, key: &T) -> Option<(&K, &V)> where T: Eq + PhfHash + ?Sized, K: Borrow<T>,`

Like `get`, but returns both the key and the value.

#### `pub fn entries(&'a self) -> Entries<'a, K, V>ⓘ Notable traits for Entries<'a, K, V> impl<'a, K, V> Iterator for Entries<'a, K, V>type Item = (&'aK, &'aV);`

Returns an iterator over the key/value pairs in the map.

Entries are returned in an arbitrary but fixed order.

#### `pub fn keys(&'a self) -> Keys<'a, K, V>ⓘ Notable traits for Keys<'a, K, V> impl<'a, K, V> Iterator for Keys<'a, K, V>type Item = &'aK;`

Returns an iterator over the keys in the map.

Keys are returned in an arbitrary but fixed order.

#### `pub fn values(&'a self) -> Values<'a, K, V>ⓘ Notable traits for Values<'a, K, V> impl<'a, K, V> Iterator for Values<'a, K, V>type Item = &'aV;`

Returns an iterator over the values in the map.

Values are returned in an arbitrary but fixed order.

## Trait Implementations

### `impl<K, V> Debug for Map<K, V> where V: Debug, K: Debug,`

#### `pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'a, K, V, T> Index<&'aT> for Map<K, V> where T: Eq + PhfHash + ?Sized, K: Borrow<T>,`

#### `type Output = V`

The returned type after indexing.

#### `pub fn index(&self, k: &'aT) -> &V`

Performs the indexing (`container[index]`) operation.

### `impl<'a, K, V> IntoIterator for &'a Map<K, V>`

#### `type Item = (&'aK, &'aV)`

The type of the elements being iterated over.

#### `type IntoIter = Entries<'a, K, V>`

Which kind of iterator are we turning this into?

#### `pub fn into_iter(self) -> Entries<'a, K, V>ⓘ Notable traits for Entries<'a, K, V> impl<'a, K, V> Iterator for Entries<'a, K, V>type Item = (&'aK, &'aV);`

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

## Auto Trait Implementations

### `impl<K, V> RefUnwindSafe for Map<K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

### `impl<K, V> Send for Map<K, V> where K: Send + Sync, V: Send + Sync,`

### `impl<K, V> Sync for Map<K, V> where K: Sync, V: Sync,`

### `impl<K, V> Unpin for Map<K, V> where K: Unpin, V: Unpin,`

### `impl<K, V> UnwindSafe for Map<K, V> where K: RefUnwindSafe + UnwindSafe, V: RefUnwindSafe + UnwindSafe,`

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
