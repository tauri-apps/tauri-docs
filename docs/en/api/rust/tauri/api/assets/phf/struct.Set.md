---
title: Struct tauri::api::assets::phf::Set
sidebar_label: struct.Set
---

# Struct tauri::api::assets::phf::Set,\[−]\[src],\[−],−

```rs
pub struct Set<T> where
    T: 'static,  { /* fields omitted */ }
```

An immutable set constructed at compile time.

## [Note](/docs/api/rust/tauri/about:blank#note)

The fields of this struct are public so that they may be initialized by the `phf_set!` macro and code generation. They are subject to change at any time and should never be accessed directly.

## Implementations

### `impl<T> Set<T>`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#30-70 "goto source code")

#### `pub fn len(&self) -> usize`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#32 "goto source code")

Returns the number of elements in the `Set`.

#### `pub fn is_empty(&self) -> bool`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#37 "goto source code")

Returns true if the `Set` contains no elements.

#### `pub fn get_key<U>(&self, key: &U) -> Option<&T> where T: PhfBorrow<U>, U: Eq + PhfHash + ?Sized,`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#45-48 "goto source code")

Returns a reference to the set’s internal static instance of the given key.

This can be useful for interning schemes.

#### `pub fn contains<U>(&self, value: &U) -> boolwhere T: PhfBorrow<U>, U: Eq + PhfHash + ?Sized,`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#54-57 "goto source code")

Returns true if `value` is in the `Set`.

#### `pub fn iter(&self) -> Iter<'_, T>ⓘ Notable traits for Iter<'a, T> impl<'a, T> Iterator for Iter<'a, T>type Item = &'aT;`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#65 "goto source code")

Returns an iterator over the values in the set.

Values are returned in an arbitrary but fixed order.

### `impl<T> Set<T> where T: Eq + PhfHash + PhfBorrow<T>,`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#72-90 "goto source code")

#### `pub fn is_disjoint(&self, other: &Set<T>) -> bool`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#77 "goto source code")

Returns true if `other` shares no elements with `self`.

#### `pub fn is_subset(&self, other: &Set<T>) -> bool`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#82 "goto source code")

Returns true if `other` contains all values in `self`.

#### `pub fn is_superset(&self, other: &Set<T>) -> bool`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#87 "goto source code")

Returns true if `self` contains all values in `other`.

## Trait Implementations

### `impl<T> Debug for Set<T> where T: Debug,`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#21-28 "goto source code")

#### `pub fn fmt(&self, fmt: &mut Formatter<'_>) -> Result<(), Error>`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#25 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'a, T> IntoIterator for &'a Set<T>`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#92-99 "goto source code")

#### `type Item = &'aT`

The type of the elements being iterated over.

#### `type IntoIter = Iter<'a, T>`

Which kind of iterator are we turning this into?

#### `pub fn into_iter(self) -> Iter<'a, T>ⓘ Notable traits for Iter<'a, T> impl<'a, T> Iterator for Iter<'a, T>type Item = &'aT;`[\[src\]](https://docs.rs/phf/0.9/src/phf/set.rs.html#96 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

## Auto Trait Implementations

### `impl<T> RefUnwindSafe for Set<T> where T: RefUnwindSafe,`

### `impl<T> Send for Set<T> where T: Send + Sync,`

### `impl<T> Sync for Set<T> where T: Sync,`

### `impl<T> Unpin for Set<T> where T: Unpin,`

### `impl<T> UnwindSafe for Set<T> where T: RefUnwindSafe + UnwindSafe,`

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
