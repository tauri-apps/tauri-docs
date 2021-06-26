---
title: Struct tauri::api::assets::phf::Map
sidebar_label: struct.Map
custom_edit_url: null
---

# Struct tauri::api::assets::phf::Map,\[−]\[src],\[−],−

```rs
pub struct Map<K, V> where
    V: 'static,
    K: 'static,  { /* fields omitted */ }
```

An immutable map constructed at compile time.

## [Note](/docs/api/rust/tauri/about:blank#note)

The fields of this struct are public so that they may be initialized by the `phf_map!` macro and code generation. They are subject to change at any time and should never be accessed directly.

## Implementations

### `impl<K, V> Map<K, V>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#47-134 "goto source code")

#### `pub fn is_empty(&self) -> bool`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#49 "goto source code")

Returns true if the `Map` is empty.

#### `pub fn len(&self) -> usize`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#54 "goto source code")

Returns the number of entries in the `Map`.

#### `pub fn contains_key<T>(&self, key: &T) -> boolwhere T: Eq + PhfHash + ?Sized, K: PhfBorrow<T>,`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#59-62 "goto source code")

Determines if `key` is in the `Map`.

#### `pub fn get<T>(&self, key: &T) -> Option<&V> where T: Eq + PhfHash + ?Sized, K: PhfBorrow<T>,`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#68-71 "goto source code")

Returns a reference to the value that `key` maps to.

#### `pub fn get_key<T>(&self, key: &T) -> Option<&K> where T: Eq + PhfHash + ?Sized, K: PhfBorrow<T>,`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#80-83 "goto source code")

Returns a reference to the map’s internal static instance of the given key.

This can be useful for interning schemes.

#### `pub fn get_entry<T>(&self, key: &T) -> Option<(&K, &V)> where T: Eq + PhfHash + ?Sized, K: PhfBorrow<T>,`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#89-92 "goto source code")

Like `get`, but returns both the key and the value.

#### `pub fn entries(&self) -> Entries<'_, K, V>ⓘ Notable traits for Entries<'a, K, V> impl<'a, K, V> Iterator for Entries<'a, K, V>type Item = (&'aK, &'aV);`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#111 "goto source code")

Returns an iterator over the key/value pairs in the map.

Entries are returned in an arbitrary but fixed order.

#### `pub fn keys(&self) -> Keys<'_, K, V>ⓘ Notable traits for Keys<'a, K, V> impl<'a, K, V> Iterator for Keys<'a, K, V>type Item = &'aK;`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#120 "goto source code")

Returns an iterator over the keys in the map.

Keys are returned in an arbitrary but fixed order.

#### `pub fn values(&self) -> Values<'_, K, V>ⓘ Notable traits for Values<'a, K, V> impl<'a, K, V> Iterator for Values<'a, K, V>type Item = &'aV;`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#129 "goto source code")

Returns an iterator over the values in the map.

Values are returned in an arbitrary but fixed order.

## Trait Implementations

### `impl<K, V> Debug for Map<K, V> where V: Debug, K: Debug,`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#25-33 "goto source code")

#### `pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#30 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'a, K, V, T> Index<&'aT> for Map<K, V> where T: Eq + PhfHash + ?Sized, K: PhfBorrow<T>,`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#35-45 "goto source code")

#### `type Output = V`

The returned type after indexing.

#### `pub fn index(&self, k: &'aT) -> &V`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#42 "goto source code")

Performs the indexing (`container[index]`) operation.

### `impl<'a, K, V> IntoIterator for &'a Map<K, V>`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#136-143 "goto source code")

#### `type Item = (&'aK, &'aV)`

The type of the elements being iterated over.

#### `type IntoIter = Entries<'a, K, V>`

Which kind of iterator are we turning this into?

#### `pub fn into_iter(self) -> Entries<'a, K, V>ⓘ Notable traits for Entries<'a, K, V> impl<'a, K, V> Iterator for Entries<'a, K, V>type Item = (&'aK, &'aV);`[\[src\]](https://docs.rs/phf/0.9/src/phf/map.rs.html#140 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

## Auto Trait Implementations

### `impl<K, V> RefUnwindSafe for Map<K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

### `impl<K, V> Send for Map<K, V> where K: Send + Sync, V: Send + Sync,`

### `impl<K, V> Sync for Map<K, V> where K: Sync, V: Sync,`

### `impl<K, V> Unpin for Map<K, V> where K: Unpin, V: Unpin,`

### `impl<K, V> UnwindSafe for Map<K, V> where K: RefUnwindSafe + UnwindSafe, V: RefUnwindSafe + UnwindSafe,`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135 "goto source code")

#### `pub fn type_id(&self) -> TypeId`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213 "goto source code")

#### `pub fn borrow(&self) -> &T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220 "goto source code")

#### `pub fn borrow_mut(&mut self) -> &mutT`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548 "goto source code")

#### `pub fn from(t: T) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540 "goto source code")

#### `pub fn into(self) -> U`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590 "goto source code")

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576 "goto source code")

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
