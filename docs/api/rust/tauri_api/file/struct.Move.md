---
title: "struct.Move"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[file](/docs/api/rust/tauri_api/index.html)::​[Move](/docs/api/rust/tauri_api/)

    pub struct Move<'a> { /* fields omitted */ }

Moves a file from the given path to the specified destination.

`source` and `dest` must be on the same filesystem. If `replace_using_temp` is specified, the destination file will be replaced using the given temporary path.

-   Errors:

    -   Io - copying / renaming

## Methods

### `impl<'a> Move<'a>`

#### `pub fn from_source(source: &'a Path) -> Move<'a>`

Specify source file

#### `pub fn replace_using_temp(&mut self, temp: &'a Path) -> &mutSelf`

If specified and the destination file already exists, the "destination" file will be moved to the given temporary location before the "source" file is moved to the "destination" file.

In the event of an `io` error while renaming "source" to "destination", the temporary file will be moved back to "destination".

The `temp` dir must be explicitly provided since `rename` operations require files to live on the same filesystem.

#### `pub fn to_dest(&self, dest: &Path) -> Result<()>`

Move source file to specified destination

## Trait Implementations

### `impl<'a> Debug for Move<'a>`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### `impl<'a> RefUnwindSafe for Move<'a>`

### `impl<'a> Send for Move<'a>`

### `impl<'a> Sync for Move<'a>`

### `impl<'a> Unpin for Move<'a>`

### `impl<'a> UnwindSafe for Move<'a>`

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
      