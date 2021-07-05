---
title: Struct tauri::api::assets::AssetKey
sidebar_label: struct.AssetKey
custom_edit_url: null
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

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://doc.rust-lang.org/nightly/src/core/clone.rs.html#130)_

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

#### `hash_slice`

```rs
pub fn hash_slice<H>(data: &[Self]

, state: &mut H) where
    H: Hasher, 
```

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

_Defined in: [mod.rs:190-192](https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#190-192)_

### `impl Ord for AssetKey`

#### `pub fn cmp(&self, other: &AssetKey) -> Ordering`

This method returns an [`Ordering`](https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html "Ordering") between `self` and `other`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp)

#### `max`

```rs
#[must_use]

pub fn max(self, other: Self) -> Self
```

Compares and returns the maximum of two values. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max)

_Defined in: [cmp.rs:724-726](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#724-726)_

#### `min`

```rs
#[must_use]

pub fn min(self, other: Self) -> Self
```

Compares and returns the minimum of two values. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min)

_Defined in: [cmp.rs:744-746](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#744-746)_

#### `clamp`

```rs
#[must_use]

pub fn clamp(self, min: Self, max: Self) -> Self
```

Restrict a value to a certain interval. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp)

_Defined in: [cmp.rs:769-771](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#769-771)_

### `impl PartialEq<AssetKey> for AssetKey`

#### `pub fn eq(&self, other: &AssetKey) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &AssetKey) -> bool`

This method tests for `!=`.

### `impl PartialOrd<AssetKey> for AssetKey`

#### `pub fn partial_cmp(&self, other: &AssetKey) -> Option<Ordering>`

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### `lt`

```rs
#[must_use]

pub fn lt(&self, other: &Rhs) -> bool
```

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt)

_Defined in: [cmp.rs:964](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#964)_

#### `le`

```rs
#[must_use]

pub fn le(&self, other: &Rhs) -> bool
```

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le)

_Defined in: [cmp.rs:983](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#983)_

#### `gt`

```rs
#[must_use]

pub fn gt(&self, other: &Rhs) -> bool
```

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt)

_Defined in: [cmp.rs:1001](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1001)_

#### `ge`

```rs
#[must_use]

pub fn ge(&self, other: &Rhs) -> bool
```

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge)

_Defined in: [cmp.rs:1020](https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1020)_

### `impl StructuralEq for AssetKey`

### `impl StructuralPartialEq for AssetKey`

## Auto Trait Implementations

### `impl RefUnwindSafe for AssetKey`

### `impl Send for AssetKey`

### `impl Sync for AssetKey`

### `impl Unpin for AssetKey`

### `impl UnwindSafe for AssetKey`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537)_

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
