---
title: Struct tauri::api::assets::phf::ordered_set::OrderedSet
sidebar_label: struct.OrderedSet
custom_edit_url: null
---

# Struct tauri::api::assets::phf::ordered_set::OrderedSet,\[−]\[src],\[−],−

```rs
pub struct OrderedSet<T> where
    T: 'static,  { /* fields omitted */ }
```

An order-preserving immutable set constructed at compile time.

Unlike a `Set`, iteration order is guaranteed to match the definition order.

## [Note](/docs/api/rust/tauri/about:blank#note)

The fields of this struct are public so that they may be initialized by the `phf_ordered_set!` macro and code generation. They are subject to change at any time and should never be accessed directly.

## Implementations

### `OrderedSet`

```rs
impl<T> OrderedSet<T>
```

_Defined in: [ordered_set.rs:31-87](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L31-87)_

#### `len`

```rs
pub fn len(&self) -> usize
```

Returns the number of elements in the `OrderedSet`.

_Defined in: [ordered_set.rs:33](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L33)_

#### `is_empty`

```rs
pub fn is_empty(&self) -> bool
```

Returns true if the `OrderedSet` contains no elements.

_Defined in: [ordered_set.rs:38](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L38)_

#### `get_key`

```rs
pub fn get_key<U>(&self, key: &U) -> Option<&T> where
    T: PhfBorrow<U>,
    U: Eq + PhfHash + ?Sized, 
```

Returns a reference to the set’s internal static instance of the given key.

This can be useful for interning schemes.

_Defined in: [ordered_set.rs:46-49](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L46-49)_

#### `get_index`

```rs
pub fn get_index<U>(&self, key: &U) -> Option<usize> where
    T: PhfBorrow<U>,
    U: Eq + PhfHash + ?Sized, 
```

Returns the index of the key within the list used to initialize the ordered set.

_Defined in: [ordered_set.rs:56-59](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L56-59)_

#### `index`

```rs
pub fn index(&self, index: usize) -> Option<&T>
```

Returns a reference to the key at an index within the list used to initialize the ordered set. See `.get_index(key)`.

_Defined in: [ordered_set.rs:66](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L66)_

#### `contains`

```rs
pub fn contains<U>(&self, value: &U) -> bool where
    T: PhfBorrow<U>,
    U: Eq + PhfHash + ?Sized, 
```

Returns true if `value` is in the `Set`.

_Defined in: [ordered_set.rs:71-74](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L71-74)_

#### `iter`

```rs
pub fn iter(&self) -> Iter<'_, T>ⓘ
Notable traits for Iter<'a, T>
impl<'a, T> Iterator for Iter<'a, T>
    type Item = &'a T;

```

Returns an iterator over the values in the set.

Values are returned in the same order in which they were defined.

_Defined in: [ordered_set.rs:82](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L82)_

### `OrderedSet`

```rs
impl<T> OrderedSet<T> where
    T: Eq + PhfHash + PhfBorrow<T>, 
```

_Defined in: [ordered_set.rs:89-110](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L89-110)_

#### `is_disjoint`

```rs
pub fn is_disjoint(&self, other: &OrderedSet<T>) -> bool
```

Returns true if `other` shares no elements with `self`.

_Defined in: [ordered_set.rs:95](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L95)_

#### `is_subset`

```rs
pub fn is_subset(&self, other: &OrderedSet<T>) -> bool
```

Returns true if `other` contains all values in `self`.

_Defined in: [ordered_set.rs:101](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L101)_

#### `is_superset`

```rs
pub fn is_superset(&self, other: &OrderedSet<T>) -> bool
```

Returns true if `self` contains all values in `other`.

_Defined in: [ordered_set.rs:107](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L107)_

## Trait Implementations

### `Debug`

```rs
impl<T> Debug for OrderedSet<T> where
    T: Debug, 
```

_Defined in: [ordered_set.rs:22-29](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L22-29)_

#### `fmt`

```rs
pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [ordered_set.rs:26](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L26)_

### `IntoIterator`

```rs
impl<'a, T> IntoIterator for &'a OrderedSet<T>
```

_Defined in: [ordered_set.rs:112-119](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L112-119)_

#### `type Item = &'aT`

The type of the elements being iterated over.

#### `type IntoIter = Iter<'a, T>`

Which kind of iterator are we turning this into?

#### `into_iter`

```rs
pub fn into_iter(self) -> Iter<'a, T>ⓘ
Notable traits for Iter<'a, T>
impl<'a, T> Iterator for Iter<'a, T>
    type Item = &'a T;

```

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

_Defined in: [ordered_set.rs:116](https://github.com/https://blob/4339b46/core/tauri/src/https://docs.rs/phf/0.9/src/phf/ordered_set.rs#L116)_

## Auto Trait Implementations

### `impl<T> RefUnwindSafe for OrderedSet<T> where T: RefUnwindSafe,`

### `impl<T> Send for OrderedSet<T> where T: Send + Sync,`

### `impl<T> Sync for OrderedSet<T> where T: Sync,`

### `impl<T> Unpin for OrderedSet<T> where T: Unpin,`

### `impl<T> UnwindSafe for OrderedSet<T> where T: RefUnwindSafe + UnwindSafe,`

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
