---
title: "struct.AssetKey"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[assets](/docs/api/rust/tauri/index.html)::​[AssetKey](/docs/api/rust/tauri/)

    pub struct AssetKey(_);

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

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

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

#### `pub fn hash_slice<H>(data: &[Self], state: &mutH) where H: Hasher,`1.3.0

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

### `impl Ord for AssetKey`

#### `pub fn cmp(&self, other: &AssetKey) -> Ordering`

This method returns an [`Ordering`](https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html "Ordering") between `self` and `other`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp)

#### `#[must_use]pub fn max(self, other: Self) -> Self`1.21.0

Compares and returns the maximum of two values. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max)

#### `#[must_use]pub fn min(self, other: Self) -> Self`1.21.0

Compares and returns the minimum of two values. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min)

#### `#[must_use]pub fn clamp(self, min: Self, max: Self) -> Self`1.50.0

Restrict a value to a certain interval. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp)

### `impl PartialEq<AssetKey> for AssetKey`

#### `pub fn eq(&self, other: &AssetKey) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &AssetKey) -> bool`

This method tests for `!=`.

### `impl PartialOrd<AssetKey> for AssetKey`

#### `pub fn partial_cmp(&self, other: &AssetKey) -> Option<Ordering>`

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### `pub fn lt(&self, other: &AssetKey) -> bool`

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt)

#### `pub fn le(&self, other: &AssetKey) -> bool`

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le)

#### `pub fn gt(&self, other: &AssetKey) -> bool`

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt)

#### `pub fn ge(&self, other: &AssetKey) -> bool`

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
