---
title: Struct tauri::api::file::Move
sidebar_label: struct.Move
custom_edit_url: null
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

### `Move`

```rs
impl<'a> Move<'a>
```

_Defined in: [file_move.rs:21-89](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/file_move.rs#L21-89)_

#### `from_source`

```rs
pub fn from_source(source: &'a Path) -> Move<'a>
```

Specify source file

_Defined in: [file_move.rs:23-25](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/file_move.rs#L23-25)_

#### `replace_using_temp`

```rs
pub fn replace_using_temp(&mut self, temp: &'a Path) -> &mut Self
```

If specified and the destination file already exists, the “destination” file will be moved to the given temporary location before the “source” file is moved to the “destination” file.

In the event of an `io` error while renaming “source” to “destination”, the temporary file will be moved back to “destination”.

The `temp` dir must be explicitly provided since `rename` operations require files to live on the same filesystem.

_Defined in: [file_move.rs:36-39](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/file_move.rs#L36-39)_

#### `to_dest`

```rs
pub fn to_dest(&self, dest: &Path) -> Result<()>
```

Move source file to specified destination (replace whole directory)

_Defined in: [file_move.rs:42-60](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/file_move.rs#L42-60)_

#### `walk_to_dest`

```rs
pub fn walk_to_dest(&self, dest: &Path) -> Result<()>
```

Walk in the source and copy all files and create directories if needed by replacing existing elements. (equivalent to a cp -R)

_Defined in: [file_move.rs:64-88](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/file_move.rs#L64-88)_

## Trait Implementations

### `Debug`

```rs
impl<'a> Debug for Move<'a>
```

_Defined in: [file_move.rs:16](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/file_move.rs#L16)_

#### `fmt`

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [file_move.rs:16](https://github.com/https://blob/e663bdd/core/tauri/src/../../api/file/file_move.rs#L16)_

## Auto Trait Implementations

### `impl<'a> RefUnwindSafe for Move<'a>`

### `impl<'a> Send for Move<'a>`

### `impl<'a> Sync for Move<'a>`

### `impl<'a> Unpin for Move<'a>`

### `impl<'a> UnwindSafe for Move<'a>`

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
