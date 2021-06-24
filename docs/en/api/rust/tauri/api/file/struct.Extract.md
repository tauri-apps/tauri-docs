---
title: Struct tauri::api::file::Extract
sidebar_label: struct.Extract
---

# Struct tauri::api::file::Extract,\[−]\[src],\[−],−

```rs
pub struct Extract<'a> { /* fields omitted */ }
```

The extract manager.

## Implementations

### `impl<'a> Extract<'a>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/extract.rs#54-198 "goto source code")

#### `pub fn from_source(source: &'a Path) -> Extract<'a>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/extract.rs#56-61 "goto source code")

Create an \`Extractor from a source path

#### `pub fn archive_format(&mut self, format: ArchiveFormat) -> &mutSelf`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/extract.rs#65-68 "goto source code")

Specify an archive format of the source being extracted. If not specified, the archive format will determined from the file extension.

#### `pub fn extract_into(&self, into_dir: &Path) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/extract.rs#83-129 "goto source code")

Extract an entire source archive into a specified path. If the source is a single compressed file and not an archive, it will be extracted into a file with the same name inside of `into_dir`.

#### `pub fn extract_file<T: AsRef<Path>>( &self, into_dir: &Path, file_to_extract: T ) -> Result<()>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/extract.rs#134-197 "goto source code")

Extract a single file from a source and save to a file of the same name in `into_dir`. If the source is a single compressed file, it will be saved with the name `file_to_extract` in the specified `into_dir`.

## Trait Implementations

### `impl<'a> Debug for Extract<'a>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/extract.rs#30 "goto source code")

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/file/extract.rs#30 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### `impl<'a> RefUnwindSafe for Extract<'a>`

### `impl<'a> Send for Extract<'a>`

### `impl<'a> Sync for Extract<'a>`

### `impl<'a> Unpin for Extract<'a>`

### `impl<'a> UnwindSafe for Extract<'a>`

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
