---
title: "enum.ArchiveFormat"
---

# Enum [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::​[file](/docs/api/rust/tauri\_api/index.html)::​[ArchiveFormat](/docs/api/rust/tauri\_api/)

    pub enum ArchiveFormat {
        Tar(Option<Compression>),
        Plain(Option<Compression>),
        Zip,
    }

## Variants

`Tar(Option<Compression>)`

`Plain(Option<Compression>)`

`Zip`

## Trait Implementations

### `impl Clone for ArchiveFormat`

#### `fn clone(&self) -> ArchiveFormat`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `fn clone\_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone\_from)

### `impl Copy for ArchiveFormat`

### `impl Debug for ArchiveFormat`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl PartialEq<ArchiveFormat> for ArchiveFormat`

#### `fn eq(&self, other: &ArchiveFormat) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `fn ne(&self, other: &ArchiveFormat) -> bool`

This method tests for `!=`.

### `impl StructuralPartialEq for ArchiveFormat`

## Auto Trait Implementations

### `impl RefUnwindSafe for ArchiveFormat`

### `impl Send for ArchiveFormat`

### `impl Sync for ArchiveFormat`

### `impl Unpin for ArchiveFormat`

### `impl UnwindSafe for ArchiveFormat`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type\_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type\_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow\_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow\_mut)

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `fn to\_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to\_owned)

#### `fn clone\_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned\_clone\_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone\_into)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try\_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try\_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `fn vzip(self) -> V`

      