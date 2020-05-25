---
title: "struct.Error"
---

# Struct [tauri_utils](/docs/api/rust/tauri_utils/index.html)::​[Error](/docs/api/rust/tauri_utils/)

    pub struct Error(pub ErrorKind, _);

The Error type.

This tuple struct is made of two elements:

-   an `ErrorKind` which is used to determine the type of the error.

-   An internal `State`, not meant for direct use outside of `error_chain` internals, containing:

    -   a backtrace, generated when the error is created.
    -   an error chain, used for the implementation of `Error::cause()`.

## Methods

### `impl Error`

#### `pub fn from_kind(kind: ErrorKind) -> Error`

Constructs an error from a kind, and generates a backtrace.

#### `pub fn with_chain<E, K>(error: E, kind: K) -> Errorwhere E: Error + Send + 'static, K: Into<ErrorKind>,`

Constructs a chained error from another error and a kind, and generates a backtrace.

#### `pub fn with_boxed_chain<K>(error: Box<dyn Error + Send>, kind: K) -> Errorwhere K: Into<ErrorKind>,`

Construct a chained error from another boxed error and a kind, and generates a backtrace

#### `pub fn kind(&self) -> &ErrorKind`

Returns the kind of the error.

#### `pub fn iter(&self) -> Iter`

Iterates over the error chain.

#### `pub fn backtrace(&self) -> Option<&Backtrace>`

Returns the backtrace associated with this error.

#### `pub fn chain_err<F, EK>(self, error: F) -> Errorwhere F: FnOnce() -> EK, EK: Into<ErrorKind>,`

Extends the error chain with a new entry.

#### `pub fn description(&self) -> &str`

A short description of the error. This method is identical to [`Error::description()`](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#tymethod.description)

## Trait Implementations

### `impl ChainedError for Error`

#### `type ErrorKind = ErrorKind`

Associated kind type.

#### `fn new(kind: ErrorKind, state: State) -> Error`

#### `fn from_kind(kind: Self::ErrorKind) -> Self`

Constructs an error from a kind, and generates a backtrace.

#### `fn with_chain<E, K>(error: E, kind: K) -> Self where E: Error + Send + 'static, K: Into<Self::ErrorKind>,`

Constructs a chained error from another error and a kind, and generates a backtrace.

#### `fn kind(&self) -> &Self::ErrorKind`

Returns the kind of the error.

#### `fn iter(&self) -> Iter`

Iterates over the error chain.

#### `fn chain_err<F, EK>(self, error: F) -> Self where F: FnOnce() -> EK, EK: Into<ErrorKind>,`

Extends the error chain with a new entry.

#### `fn backtrace(&self) -> Option<&Backtrace>`

Returns the backtrace associated with this error.

#### `fn extract_backtrace( e: &(dyn Error + Send + 'static) ) -> Option<InternalBacktrace>`

#### `fn display_chain(&'a self) -> DisplayChain<'a, Self>`

Returns an object which implements `Display` for printing the full context of this error. [Read more](https://docs.rs/error-chain/0.12.2/error_chain/trait.ChainedError.html#method.display_chain)

### `impl Debug for Error`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Display for Error`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### `impl Error for Error`

#### `fn description(&self) -> &str`

This method is soft-deprecated. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### `fn source(&self) -> Option<&(dyn Error + 'static)>`

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

#### `fn cause(&self) -> Option<&dyn Error>`1.0.0

Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

The lower-level cause of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.cause)

#### `fn backtrace(&self) -> Option<&Backtrace>`

🔬 This is a nightly-only experimental API. (`backtrace`)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

### `impl<'a> From<&'a str> for Error`

#### `fn from(s: &'a str) -> Self`

Performs the conversion.

### `impl From<Error> for Error`

#### `fn from(e: Error) -> Self`

Performs the conversion.

### `impl From<Error> for ErrorKind`

#### `fn from(e: Error) -> Self`

Performs the conversion.

### `impl From<ErrorKind> for Error`

#### `fn from(e: ErrorKind) -> Self`

Performs the conversion.

### `impl From<String> for Error`

#### `fn from(s: String) -> Self`

Performs the conversion.

## Auto Trait Implementations

### `impl !RefUnwindSafe for Error`

### `impl Send for Error`

### `impl !Sync for Error`

### `impl Unpin for Error`

### `impl !UnwindSafe for Error`

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

      