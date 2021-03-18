---
title: "enum.Error"
---

# Enum [tauri_api](/docs/api/rust/tauri_api/index.html)::​[Error](/docs/api/rust/tauri_api/)

    pub enum Error {
        Architecture,
        OS,
        Environment,
        Unknown,
        ParentProcess,
        ParentPID,
        ChildProcess,
    }

The error types.

## Variants

`Architecture`

Target triple architecture error

`OS`

Target triple OS error

`Environment`

Target triple environment error

`Unknown`

Target triple unknown target-os error

`ParentProcess`

Get parent process error

`ParentPID`

Get parent process PID error

`ChildProcess`

Get child process error

## Trait Implementations

### `impl Debug for Error`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Display for Error`

#### `fn fmt(&self, __formatter: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### `impl Error for Error`

#### `fn source(&self) -> Option<&(dyn Error + 'static)>`1.30.0

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

#### `fn backtrace(&self) -> Option<&Backtrace>`

🔬 This is a nightly-only experimental API. (`backtrace`)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

#### `fn description(&self) -> &str`1.0.0

👎 Deprecated since 1.42.0:

use the Display impl or to_string()

`if let Err(e) = "xc".parse::<u32>() { // Print`e`itself, no need for description(). eprintln!("Error: {}", e); }` [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### `fn cause(&self) -> Option<&dyn Error>`1.0.0

👎 Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

## Auto Trait Implementations

### `impl RefUnwindSafe for Error`

### `impl Send for Error`

### `impl Sync for Error`

### `impl Unpin for Error`

### `impl UnwindSafe for Error`

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
