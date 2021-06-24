---
title: Struct tauri::api::assets::AssetKey
sidebar_label: struct.AssetKey
---

# Struct tauri::api::assets::AssetKey,\[−],\[−],−

```rs
pub struct AssetKey(_);
```

Represent an asset file path in a normalized way.

The following rules are enforced and added if needed:

-   Unix path component separators
-   Has a root directory
-   No trailing slash - directories are not included in assets

## Trait Implementations

### `impl AsRef<str> for AssetKey`

#### `pub fn as_ref(&self) -> &str`

Performs the conversion.

### `impl Clone for AssetKey`

#### `pub fn clone(&self) -> AssetKey`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Debug for AssetKey`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Eq for AssetKey`

### `impl<P> From<P> for AssetKeywhere P: AsRef<Path>,`

#### `pub fn from(path: P) -> AssetKey`

Performs the conversion.

### `impl Hash for AssetKey`

#### `pub fn hash<__H>(&self, state: &mut__H) where __H: Hasher,`

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash)

#### `pub fn hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`1.3.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#190-192 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

### `impl Ord for AssetKey`

#### `pub fn cmp(&self, other: &AssetKey) -> Ordering`

This method returns an [`Ordering`](https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html "Ordering") between `self` and `other`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp)

#### `#[must_use]pub fn max(self, other: Self) -> Self`1.21.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#724-726 "goto source code")

Compares and returns the maximum of two values. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max)

#### `#[must_use]pub fn min(self, other: Self) -> Self`1.21.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#744-746 "goto source code")

Compares and returns the minimum of two values. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min)

#### `#[must_use]pub fn clamp(self, min: Self, max: Self) -> Self`1.50.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#769-771 "goto source code")

Restrict a value to a certain interval. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp)

### `impl PartialEq<AssetKey> for AssetKey`

#### `pub fn eq(&self, other: &AssetKey) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &AssetKey) -> bool`

This method tests for `!=`.

### `impl PartialOrd<AssetKey> for AssetKey`

#### `pub fn partial_cmp(&self, other: &AssetKey) -> Option<Ordering>`

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### `#[must_use]pub fn lt(&self, other: &Rhs) -> bool`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#964 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt)

#### `#[must_use]pub fn le(&self, other: &Rhs) -> bool`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#983 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le)

#### `#[must_use]pub fn gt(&self, other: &Rhs) -> bool`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1001 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt)

#### `#[must_use]pub fn ge(&self, other: &Rhs) -> bool`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1020 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge)

### `impl StructuralEq for AssetKey`

### `impl StructuralPartialEq for AssetKey`

## Auto Trait Implementations

### `impl RefUnwindSafe for AssetKey`

### `impl Send for AssetKey`

### `impl Sync for AssetKey`

### `impl Unpin for AssetKey`

### `impl UnwindSafe for AssetKey`

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

### `impl<T> ToOwned for T where T: Clone,`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#81-93 "goto source code")

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `pub fn to_owned(&self) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#86 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `pub fn clone_into(&self, target: &mutT)`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#90 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

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
