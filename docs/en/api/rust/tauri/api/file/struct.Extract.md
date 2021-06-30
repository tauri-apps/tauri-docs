---
title: Struct tauri::api::file::Extract
sidebar_label: struct.Extract
custom_edit_url: null
---

# Struct tauri::api::file::Extract,\[−]\[src],\[−],−

```rs
pub struct Extract<'a> { /* fields omitted */ }
```

The extract manager.

## Implementations

### `Extract`

```rs
impl<'a> Extract<'a>
```

_Defined in: [extract.rs:54-198](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/extract.rs#L54-198)_

#### `from_source`

```rs
pub fn from_source(source: &'a Path) -> Extract<'a>
```

Create an \`Extractor from a source path

_Defined in: [extract.rs:56-61](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/extract.rs#L56-61)_

#### `archive_format`

```rs
pub fn archive_format(&mut self, format: ArchiveFormat) -> &mut Self
```

Specify an archive format of the source being extracted. If not specified, the archive format will determined from the file extension.

_Defined in: [extract.rs:65-68](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/extract.rs#L65-68)_

#### `extract_into`

```rs
pub fn extract_into(&self, into_dir: &Path) -> Result<()>
```

Extract an entire source archive into a specified path. If the source is a single compressed file and not an archive, it will be extracted into a file with the same name inside of `into_dir`.

_Defined in: [extract.rs:83-129](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/extract.rs#L83-129)_

#### `extract_file`

```rs
pub fn extract_file<T: AsRef<Path>>(
    &self, 
    into_dir: &Path, 
    file_to_extract: T
) -> Result<()>
```

Extract a single file from a source and save to a file of the same name in `into_dir`. If the source is a single compressed file, it will be saved with the name `file_to_extract` in the specified `into_dir`.

_Defined in: [extract.rs:134-197](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/extract.rs#L134-197)_

## Trait Implementations

### `Debug`

```rs
impl<'a> Debug for Extract<'a>
```

_Defined in: [extract.rs:30](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/extract.rs#L30)_

#### `fmt`

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [extract.rs:30](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/extract.rs#L30)_

## Auto Trait Implementations

### `impl<'a> RefUnwindSafe for Extract<'a>`

### `impl<'a> Send for Extract<'a>`

### `impl<'a> Sync for Extract<'a>`

### `impl<'a> Unpin for Extract<'a>`

### `impl<'a> UnwindSafe for Extract<'a>`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
