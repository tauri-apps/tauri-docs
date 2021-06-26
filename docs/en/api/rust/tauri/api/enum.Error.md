---
title: Enum tauri::api::Error
sidebar_label: enum.Error
custom_edit_url: null
---

# Enum tauri::api::Error,\[−],\[−],−

```rs
#[non_exhaustive]pub enum Error {
    Architecture,
    Os,
    Environment,
    UnsupportedPlatform,
    ParentProcess,
    ParentPid,
    ChildProcess,
    Io(Error),
}
```

The error types.

## Variants (Non-exhaustive)

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`Architecture`

Target triple architecture error

`Os`

Target triple OS error

`Environment`

Target triple environment error

`UnsupportedPlatform`

Tried to get resource on an unsupported platform.

`ParentProcess`

Get parent process error

`ParentPid`

Get parent process PID error

`ChildProcess`

Get child process error

`Io(Error)`

IO error.

## Trait Implementations

### `impl Debug for Error`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Display for Error`

#### `pub fn fmt(&self, __formatter: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### `impl Error for Error`

#### `pub fn source(&self) -> Option<&(dyn Error + 'static)>`

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

#### `pub fn backtrace(&self) -> Option<&Backtrace>`[\[src\]](https://doc.rust-lang.org/nightly/src/std/error.rs.html#127 "goto source code")

🔬 This is a nightly-only experimental API. (`backtrace`)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

#### `pub fn description(&self) -> &str`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/std/error.rs.html#139 "goto source code")

👎 Deprecated since 1.42.0:

use the Display impl or to_string()

[Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### `pub fn cause(&self) -> Option<&dyn Error>`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/std/error.rs.html#149 "goto source code")

👎 Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

### `impl From<Error> for Error`

#### `pub fn from(source: Error) -> Error`

Performs the conversion.

## Auto Trait Implementations

### `impl !RefUnwindSafe for Error`

### `impl Send for Error`

### `impl Sync for Error`

### `impl Unpin for Error`

### `impl !UnwindSafe for Error`

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

### `impl<D> ToJsString for D where D: Display,`

#### `pub fn to_js_string(&self) -> Result<String, Error>`

Turn any [`Tag`](/docs/api/rust/tauri/../../tauri/trait.Tag "Tag") into the JavaScript representation of a string.

### `impl<T> ToString for T where T: Display + ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/string.rs.html#2261-2274 "goto source code")

#### `pub default fn to_string(&self) -> String`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/string.rs.html#2267 "goto source code")

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)

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
