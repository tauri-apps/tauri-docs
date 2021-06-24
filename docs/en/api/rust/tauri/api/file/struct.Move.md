---
title: Struct tauri::api::file::Move
sidebar_label: struct.Move
---

# Struct tauri::api::file::Move,\[−]\[src],\[−],−

```rs
pub struct Move<'a> { /* fields omitted */ }
```

Moves a file from the given path to the specified destination.

`source` and `dest` must be on the same filesystem. If `replace_using_temp` is specified, the destination file will be replaced using the given temporary path.

-   Errors:

    -   Io - copying / renaming

## Implementations

### `impl<'a> Move<'a>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/file_move.rs#21-89 "goto source code")

#### `pub fn from_source(source: &'a Path) -> Move<'a>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/file_move.rs#23-25 "goto source code")

Specify source file

#### `pub fn replace_using_temp(&mut self, temp: &'a Path) -> &mutSelf`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/file_move.rs#36-39 "goto source code")

If specified and the destination file already exists, the “destination” file will be moved to the given temporary location before the “source” file is moved to the “destination” file.

In the event of an `io` error while renaming “source” to “destination”, the temporary file will be moved back to “destination”.

The `temp` dir must be explicitly provided since `rename` operations require files to live on the same filesystem.

#### `pub fn to_dest(&self, dest: &Path) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/file_move.rs#42-60 "goto source code")

Move source file to specified destination (replace whole directory)

#### `pub fn walk_to_dest(&self, dest: &Path) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/file_move.rs#64-88 "goto source code")

Walk in the source and copy all files and create directories if needed by replacing existing elements. (equivalent to a cp -R)

## Trait Implementations

### `impl<'a> Debug for Move<'a>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/file_move.rs#16 "goto source code")

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/file_move.rs#16 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### `impl<'a> RefUnwindSafe for Move<'a>`

### `impl<'a> Send for Move<'a>`

### `impl<'a> Sync for Move<'a>`

### `impl<'a> Unpin for Move<'a>`

### `impl<'a> UnwindSafe for Move<'a>`

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
