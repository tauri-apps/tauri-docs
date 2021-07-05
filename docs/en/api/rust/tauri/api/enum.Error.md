---
title: Enum tauri::api::Error
sidebar_label: enum.Error
custom_edit_url: null
---

# Enum tauri::api::Error,\[−],\[−],−

```rs
#[non_exhaustive]
pub enum Error {
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

#### `backtrace`

```rs
pub fn backtrace(&self) -> Option<&Backtrace>
```

_Defined in: [error.rs:127](https://doc.rust-lang.org/nightly/src/std/error.rs.html#127)_

🔬 This is a nightly-only experimental API. (`backtrace`)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

#### `description`

```rs
pub fn description(&self) -> &str
```

_Defined in: [error.rs:139](https://doc.rust-lang.org/nightly/src/std/error.rs.html#139)_

👎 Deprecated since 1.42.0:

use the Display impl or to_string()

[Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### `cause`

```rs
pub fn cause(&self) -> Option<&dyn Error>
```

_Defined in: [error.rs:149](https://doc.rust-lang.org/nightly/src/std/error.rs.html#149)_

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

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537)_

### `impl<D> ToJsString for D where D: Display,`

#### `pub fn to_js_string(&self) -> Result<String, Error>`

Turn any [`Tag`](/docs/api/rust/tauri/../../tauri/trait.Tag "Tag") into the JavaScript representation of a string.

### `ToString`

```rs
impl<T> ToString for T where
    T: Display + ?Sized, 
```

_Defined in: [string.rs:2261-2274](https://doc.rust-lang.org/nightly/src/alloc/string.rs.html#2261-2274)_

#### `to_string`

```rs
pub default fn to_string(&self) -> String
```

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)

_Defined in: [string.rs:2267](https://doc.rust-lang.org/nightly/src/alloc/string.rs.html#2267)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
