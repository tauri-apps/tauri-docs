---
title: "struct.DiskEntry"
---

# Struct [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::​[dir](/docs/api/rust/tauri\_api/index.html)::​[DiskEntry](/docs/api/rust/tauri\_api/)

    pub struct DiskEntry {
        pub path: String,
        pub is\_dir: bool,
        pub name: String,
    }

## Fields

`path: String``is\_dir: bool``name: String`

## Trait Implementations

### `impl Debug for DiskEntry`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Serialize for DiskEntry`

#### `fn serialize<\_\_S>(&self, \_\_serializer: \_\_S) -> Result<\_\_S::Ok, \_\_S::Error> where \_\_S: Serializer,`

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html#tymethod.serialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for DiskEntry`

### `impl Send for DiskEntry`

### `impl Sync for DiskEntry`

### `impl Unpin for DiskEntry`

### `impl UnwindSafe for DiskEntry`

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

      