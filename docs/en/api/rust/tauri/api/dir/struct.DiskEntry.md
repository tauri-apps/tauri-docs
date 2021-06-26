---
title: Struct tauri::api::dir::DiskEntry
sidebar_label: struct.DiskEntry
custom_edit_url: null
---

# Struct tauri::api::dir::DiskEntry,\[−]\[src],\[−],−

```rs
#[non_exhaustive]pub struct DiskEntry {
    pub path: PathBuf,
    pub name: Option<String>,
    pub children: Option<Vec<DiskEntry>>,
}
```

The result of the `read_dir` function.

A DiskEntry is either a file or a directory. The `children` Vec is always `Some` if the entry is a directory.

## Fields (Non-exhaustive)

Non-exhaustive structs could have additional fields added in future. Therefore, non-exhaustive structs cannot be constructed in external crates using the traditional `Struct {{ .. }}` syntax; cannot be matched against without a wildcard `..`; and struct update syntax will not work.

`path: PathBuf`

The path to this entry.

`name: Option<String>`

The name of this entry (file name with extension or directory name)

`children: Option<Vec<DiskEntry>>`

The children of this entry if it’s a directory.

## Trait Implementations

### `impl Debug for DiskEntry`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/dir.rs#16 "goto source code")

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/dir.rs#16 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Serialize for DiskEntry`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/dir.rs#16 "goto source code")

#### `fn serialize<__S>(&self, __serializer: __S) -> Result<__S::Ok, __S::Error> where __S: Serializer,`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/dir.rs#16 "goto source code")

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for DiskEntry`

### `impl Send for DiskEntry`

### `impl Sync for DiskEntry`

### `impl Unpin for DiskEntry`

### `impl UnwindSafe for DiskEntry`

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
