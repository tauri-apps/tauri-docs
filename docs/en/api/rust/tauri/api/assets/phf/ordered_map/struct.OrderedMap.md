---
title: Struct tauri::api::assets::phf::ordered_map::OrderedMap
sidebar_label: struct.OrderedMap
custom_edit_url: null
---

# Struct tauri::api::assets::phf::ordered_map::OrderedMap,\[−]\[src],\[−],−

```rs
pub struct OrderedMap<K, V> where
    V: 'static,
    K: 'static,  { /* fields omitted */ }
```

An order-preserving immutable map constructed at compile time.

Unlike a `Map`, iteration order is guaranteed to match the definition order.

## [Note](/docs/api/rust/tauri/about:blank#note)

The fields of this struct are public so that they may be initialized by the `phf_ordered_map!` macro and code generation. They are subject to change at any time and should never be accessed directly.

## Implementations

### `OrderedMap`

```rs
impl<K, V> OrderedMap<K, V>
```

_Defined in: [ordered_map.rs:53-166](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L53-166)_

#### `len`

```rs
pub fn len(&self) -> usize
```

Returns the number of entries in the `Map`.

_Defined in: [ordered_map.rs:55](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L55)_

#### `is_empty`

```rs
pub fn is_empty(&self) -> bool
```

Returns true if the `Map` is empty.

_Defined in: [ordered_map.rs:60](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L60)_

#### `get`

```rs
pub fn get<T>(&self, key: &T) -> Option<&V> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Returns a reference to the value that `key` maps to.

_Defined in: [ordered_map.rs:65-68](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L65-68)_

#### `get_key`

```rs
pub fn get_key<T>(&self, key: &T) -> Option<&K> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Returns a reference to the map’s internal static instance of the given key.

This can be useful for interning schemes.

_Defined in: [ordered_map.rs:77-80](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L77-80)_

#### `contains_key`

```rs
pub fn contains_key<T>(&self, key: &T) -> bool where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Determines if `key` is in the `Map`.

_Defined in: [ordered_map.rs:86-89](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L86-89)_

#### `get_index`

```rs
pub fn get_index<T>(&self, key: &T) -> Option<usize> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Returns the index of the key within the list used to initialize the ordered map.

_Defined in: [ordered_map.rs:96-99](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L96-99)_

#### `index`

```rs
pub fn index(&self, index: usize) -> Option<(&K, &V)>
```

Returns references to both the key and values at an index within the list used to initialize the ordered map. See `.get_index(key)`.

_Defined in: [ordered_map.rs:106](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L106)_

#### `get_entry`

```rs
pub fn get_entry<T>(&self, key: &T) -> Option<(&K, &V)> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

Like `get`, but returns both the key and the value.

_Defined in: [ordered_map.rs:111-114](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L111-114)_

#### `entries`

```rs
pub fn entries(&self) -> Entries<'_, K, V>ⓘ
Notable traits for Entries<'a, K, V>
impl<'a, K, V> Iterator for Entries<'a, K, V>
    type Item = (&'a K, &'a V);

```

Returns an iterator over the key/value pairs in the map.

Entries are returned in the same order in which they were defined.

_Defined in: [ordered_map.rs:143](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L143)_

#### `keys`

```rs
pub fn keys(&self) -> Keys<'_, K, V>ⓘ
Notable traits for Keys<'a, K, V>
impl<'a, K, V> Iterator for Keys<'a, K, V>
    type Item = &'a K;

```

Returns an iterator over the keys in the map.

Keys are returned in the same order in which they were defined.

_Defined in: [ordered_map.rs:152](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L152)_

#### `values`

```rs
pub fn values(&self) -> Values<'_, K, V>ⓘ
Notable traits for Values<'a, K, V>
impl<'a, K, V> Iterator for Values<'a, K, V>
    type Item = &'a V;

```

Returns an iterator over the values in the map.

Values are returned in the same order in which they were defined.

_Defined in: [ordered_map.rs:161](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L161)_

## Trait Implementations

### `Debug`

```rs
impl<K, V> Debug for OrderedMap<K, V> where
    V: Debug,
    K: Debug, 
```

_Defined in: [ordered_map.rs:31-39](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L31-39)_

#### `fmt`

```rs
pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [ordered_map.rs:36](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L36)_

### `Index`

```rs
impl<'a, K, V, T> Index<&'a T> for OrderedMap<K, V> where
    T: Eq + PhfHash + ?Sized,
    K: PhfBorrow<T>, 
```

_Defined in: [ordered_map.rs:41-51](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L41-51)_

#### `type Output = V`

The returned type after indexing.

#### `index`

```rs
pub fn index(&self, k: &'a T) -> &V
```

Performs the indexing (`container[index]`) operation.

_Defined in: [ordered_map.rs:48](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L48)_

### `IntoIterator`

```rs
impl<'a, K, V> IntoIterator for &'a OrderedMap<K, V>
```

_Defined in: [ordered_map.rs:168-175](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L168-175)_

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

_Defined in: [ordered_map.rs:172](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_map.rs#L172)_

## Auto Trait Implementations

### `impl<K, V> RefUnwindSafe for OrderedMap<K, V> where K: RefUnwindSafe, V: RefUnwindSafe,`

### `impl<K, V> Send for OrderedMap<K, V> where K: Send + Sync, V: Send + Sync,`

### `impl<K, V> Sync for OrderedMap<K, V> where K: Sync, V: Sync,`

### `impl<K, V> Unpin for OrderedMap<K, V> where K: Unpin, V: Unpin,`

### `impl<K, V> UnwindSafe for OrderedMap<K, V> where K: RefUnwindSafe + UnwindSafe, V: RefUnwindSafe + UnwindSafe,`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
