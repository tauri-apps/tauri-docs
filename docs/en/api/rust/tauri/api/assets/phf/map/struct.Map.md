---
title: Struct tauri::api::assets::phf::map::Map
sidebar_label: struct.Map
custom_edit_url: null
---

# Struct tauri::api::assets::phf::map::Map,\[−]\[src],\[−],−

```rs
pub struct Map<K, V> where
    V: 'static,
    K: 'static,  { /* fields omitted */ }
```

An immutable map constructed at compile time.

## [Note](/docs/api/rust/tauri/about:blank#note)

The fields of this struct are public so that they may be initialized by the `phf_map!` macro and code generation. They are subject to change at any time and should never be accessed directly.

## Implementations

### `Map`

```rs
impl<K, V> Map<K, V>
```

_Defined in: [map.rs:47-134](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L47-134)_

#### `is_empty`

```rs
pub fn is_empty(&self) -> bool
```

Returns true if the `Map` is empty.

_Defined in: [map.rs:49](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L49)_

#### `len`

```rs
pub fn len(&self) -> usize
```

Returns the number of entries in the `Map`.

_Defined in: [map.rs:54](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L54)_

#### `contains_key`

```rs
pub fn contains_key<T>(&self, key: &T) -> bool where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Determines if `key` is in the `Map`.

_Defined in: [map.rs:59-62](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L59-62)_

#### `get`

```rs
pub fn get<T>(&self, key: &T) -> Option<&V> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Returns a reference to the value that `key` maps to.

_Defined in: [map.rs:68-71](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L68-71)_

#### `get_key`

```rs
pub fn get_key<T>(&self, key: &T) -> Option<&K> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Returns a reference to the map’s internal static instance of the given key.

This can be useful for interning schemes.

_Defined in: [map.rs:80-83](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L80-83)_

#### `get_entry`

```rs
pub fn get_entry<T>(&self, key: &T) -> Option<(&K, &V)> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Like `get`, but returns both the key and the value.

_Defined in: [map.rs:89-92](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L89-92)_

#### `entries`

```rs
pub fn entries(&self) -> Entries<'_, K, V>ⓘ
Notable traits for Entries<'a, K, V>
impl<'a, K, V> Iterator for Entries<'a, K, V>
    type Item = (&'a K, &'a V);

```

Returns an iterator over the key/value pairs in the map.

Entries are returned in an arbitrary but fixed order.

_Defined in: [map.rs:111](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L111)_

#### `keys`

```rs
pub fn keys(&self) -> Keys<'_, K, V>ⓘ
Notable traits for Keys<'a, K, V>
impl<'a, K, V> Iterator for Keys<'a, K, V>
    type Item = &'a K;

```

Returns an iterator over the keys in the map.

Keys are returned in an arbitrary but fixed order.

_Defined in: [map.rs:120](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L120)_

#### `values`

```rs
pub fn values(&self) -> Values<'_, K, V>ⓘ
Notable traits for Values<'a, K, V>
impl<'a, K, V> Iterator for Values<'a, K, V>
    type Item = &'a V;

```

Returns an iterator over the values in the map.

Values are returned in an arbitrary but fixed order.

_Defined in: [map.rs:129](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L129)_

## Trait Implementations

### `Debug`

```rs
impl<K, V> Debug for Map<K, V> where
    V: Debug,
    K: Debug, 
```

_Defined in: [map.rs:25-33](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L25-33)_

#### `fmt`

```rs
pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [map.rs:30](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L30)_

### `Index`

```rs
impl<'a, K, V, T> Index<&'a T> for Map<K, V> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

_Defined in: [map.rs:35-45](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L35-45)_

#### `type Output = V`

The returned type after indexing.

#### `index`

```rs
pub fn index(&self, k: &'a T) -> &V
```

Performs the indexing (`container[index]`) operation.

_Defined in: [map.rs:42](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L42)_

### `IntoIterator`

```rs
impl<'a, K, V> IntoIterator for &'a Map<K, V>
```

_Defined in: [map.rs:136-143](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L136-143)_

#### `type Item = (&'aK, &'aV)`

The type of the elements being iterated over.

#### `type IntoIter = Entries<'a, K, V>`

Which kind of iterator are we turning this into?

#### `into_iter`

```rs
pub fn into_iter(self) -> Entries<'a, K, V>ⓘ
Notable traits for Entries<'a, K, V>
impl<'a, K, V> Iterator for Entries<'a, K, V>
    type Item = (&'a K, &'a V);

```

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

_Defined in: [map.rs:140](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/map.rs#L140)_

## Auto Trait Implementations

### `impl<K, V> RefUnwindSafe for Map<K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

### `impl<K, V> Send for Map<K, V> where K: Send + Sync, V: Send + Sync,`

### `impl<K, V> Sync for Map<K, V> where K: Sync, V: Sync,`

### `impl<K, V> Unpin for Map<K, V> where K: Unpin, V: Unpin,`

### `impl<K, V> UnwindSafe for Map<K, V> where K: RefUnwindSafe + UnwindSafe, V: RefUnwindSafe + UnwindSafe,`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/4339b46/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
