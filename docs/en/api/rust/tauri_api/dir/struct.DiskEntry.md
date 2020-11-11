---
title: "struct.DiskEntry"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[dir](/docs/api/rust/tauri_api/index.html)::​[DiskEntry](/docs/api/rust/tauri_api/)

    pub struct DiskEntry {
        pub path: PathBuf,
        pub name: Option<String>,
        pub children: Option<Vec<DiskEntry>>,
    }

The result of the `read_dir` function.

A DiskEntry is either a file or a directory. The `children` Vec is always `Some` if the entry is a directory.

## Fields

`path: PathBuf`

The path to this entry.

`name: Option<String>`

The name of this entry (file name with extension or directory name)

`children: Option<Vec<DiskEntry>>`

The children of this entry if it's a directory.

## Trait Implementations

### `impl Debug for DiskEntry`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Serialize for DiskEntry`

#### `fn serialize<__S>(&self, __serializer: __S) -> Result<__S::Ok, __S::Error> where __S: Serializer,`

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.117/serde/ser/trait.Serialize.html#tymethod.serialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for DiskEntry`

### `impl Send for DiskEntry`

### `impl Sync for DiskEntry`

### `impl Unpin for DiskEntry`

### `impl UnwindSafe for DiskEntry`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.init)

#### `unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.deref)

#### `unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.deref_mut)

#### `unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.drop)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `fn vzip(self) -> V`
