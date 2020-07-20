---
title: "enum.ErrorKind"
---

# Enum [tauri_api](/docs/api/rust/tauri_api/index.html)::​[ErrorKind](/docs/api/rust/tauri_api/)

    pub enum ErrorKind {
        Io(Error),
        Msg(String),
        // some variants omitted
    }

The kind of an error.

## Variants

`Io(Error)`

`Msg(String)`

A convenient variant for String.

## Methods

### `impl ErrorKind`

#### `pub fn description(&self) -> &str`

A string describing the error kind.

## Trait Implementations

### `impl Debug for ErrorKind`

#### `fn fmt(&self, f: &mut Formatter) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Display for ErrorKind`

#### `fn fmt(&self, fmt: &mut Formatter) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### `impl<'a> From<&'a str> for ErrorKind`

#### `fn from(s: &'a str) -> ErrorKind`

Performs the conversion.

### `impl From<Error> for ErrorKind`

#### `fn from(e: Error) -> ErrorKind`

Performs the conversion.

### `impl From<ErrorKind> for Error`

#### `fn from(e: ErrorKind) -> Error`

Performs the conversion.

### `impl From<String> for ErrorKind`

#### `fn from(s: String) -> ErrorKind`

Performs the conversion.

## Auto Trait Implementations

### `impl !RefUnwindSafe for ErrorKind`

### `impl Send for ErrorKind`

### `impl Sync for ErrorKind`

### `impl Unpin for ErrorKind`

### `impl !UnwindSafe for ErrorKind`

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

### `impl<T> ToString for T where T: Display + ?Sized,`

#### `default fn to_string(&self) -> String`

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)

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

      