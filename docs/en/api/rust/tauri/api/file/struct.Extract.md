---
title: "struct.Extract"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[file](/docs/api/rust/tauri/index.html)::​[Extract](/docs/api/rust/tauri/)

```rs
pub struct Extract<'a> { /* fields omitted */ }
```

The extract manager.

## Implementations

### `impl<'a> Extract<'a>`

#### `pub fn from_source(source: &'a Path) -> Extract<'a>`

Create an \`Extractor from a source path

#### `pub fn archive_format(&mut self, format: ArchiveFormat) -> &mutSelf`

Specify an archive format of the source being extracted. If not specified, the archive format will determined from the file extension.

#### `pub fn extract_into(&self, into_dir: &Path) -> Result<()>`

Extract an entire source archive into a specified path. If the source is a single compressed file and not an archive, it will be extracted into a file with the same name inside of `into_dir`.

#### `pub fn extract_file<T: AsRef<Path>>( &self, into_dir: &Path, file_to_extract: T ) -> Result<()>`

Extract a single file from a source and save to a file of the same name in `into_dir`. If the source is a single compressed file, it will be saved with the name `file_to_extract` in the specified `into_dir`.

## Trait Implementations

### `impl<'a> Debug for Extract<'a>`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### `impl<'a> RefUnwindSafe for Extract<'a>`

### `impl<'a> Send for Extract<'a>`

### `impl<'a> Sync for Extract<'a>`

### `impl<'a> Unpin for Extract<'a>`

### `impl<'a> UnwindSafe for Extract<'a>`

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

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

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
