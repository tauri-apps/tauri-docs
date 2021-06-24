---
title: Enum tauri::Error
sidebar_label: enum.Error
---

# Enum tauri::Error,\[−]\[src],\[−],−

```rs
#[non_exhaustive]pub enum Error {
    Runtime(Error),
    CreateWebview(Box<dyn Error + Send>),
    CreateWindow,
    WebviewNotFound,
    FailedToSendMessage,
    AssetNotFound(String),
    Json(Error),
    UnknownApi(Option<Error>),
    FailedToExecuteApi(Error),
    Io(Error),
    InvalidIcon(Box<dyn Error + Send>),
    HttpClientNotInitialized,
    ApiNotEnabled(String),
    ApiNotAllowlisted(String),
    InvalidArgs(&'static str, Error),
    Setup(Box<dyn Error + Send>),
    PluginInitialization(String, String),
    DialogDefaultPathNotExists(PathBuf),
    SystemTray(Box<dyn Error + Send>),
}
```

Runtime errors that can happen inside a Tauri application.

## Variants (Non-exhaustive)

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`Runtime(Error)`

Runtime error.

`CreateWebview(Box<dyn Error + Send>)`

Failed to create webview.

`CreateWindow`

Failed to create window.

`WebviewNotFound`

Can’t access webview dispatcher because the webview was closed or not found.

`FailedToSendMessage`

Failed to send message to webview.

`AssetNotFound(String)`

Embedded asset not found.

`Json(Error)`

Failed to serialize/deserialize.

`UnknownApi(Option<Error>)`

Unknown API type.

`FailedToExecuteApi(Error)`

Failed to execute tauri API.

`Io(Error)`

IO error.

`InvalidIcon(Box<dyn Error + Send>)`

Failed to load window icon.

`HttpClientNotInitialized`

Client with specified ID not found.

`ApiNotEnabled(String)`

API not enabled by Tauri.

`ApiNotAllowlisted(String)`

API not whitelisted on tauri.conf.json

`InvalidArgs(&'static str, Error)`

Invalid args when running a command.

`Setup(Box<dyn Error + Send>)`

Encountered an error in the setup hook,

`PluginInitialization(String, String)`

Error initializing plugin.

`DialogDefaultPathNotExists(PathBuf)`

`default_path` provided to dialog API doesn’t exist.

`SystemTray(Box<dyn Error + Send>)`

Encountered an error creating the app system tray,

## Trait Implementations

### `Debug`

#### `fmt`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

```rs
impl Debug for Error
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

### `Display`

#### `fmt`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

```rs
fn fmt(&self, __formatter: &mut Formatter<'_>) -> Result
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

```rs
impl Display for Error
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

### `Error`

#### `source`

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

```rs
fn source(&self) -> Option<&(dyn Error + 'static)>
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

#### `backtrace`

🔬 This is a nightly-only experimental API. (`backtrace`)

```rs
pub fn backtrace(&self) -> Option<&Backtrace>
```

Defined in: [error.rs:127](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/std/error.rs#L127)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

#### `description`

👎 Deprecated since 1.42.0:

use the Display impl or to_string()

```rs
pub fn description(&self) -> &str
```

Defined in: [error.rs:139](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/std/error.rs#L139)

[Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### `cause`

👎 Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

```rs
pub fn cause(&self) -> Option<&dyn Error>
```

Defined in: [error.rs:149](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/std/error.rs#L149)

```rs
impl Error for Error
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

### `From`

#### `from`

Performs the conversion.

```rs
fn from(source: Error) -> Self
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

```rs
impl From<Error> for Error
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

### `From`

#### `from`

Performs the conversion.

```rs
fn from(source: Error) -> Self
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

```rs
impl From<Error> for Error
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

### `From`

#### `from`

Performs the conversion.

```rs
fn from(source: Error) -> Self
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

```rs
impl From<Error> for Error
```

Defined in: [error.rs:8](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L8)

### `From`

#### `from`

Performs the conversion.

```rs
fn from(error: Error) -> Self
```

Defined in: [error.rs:79-85](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L79-85)

```rs
impl From<Error> for Error
```

Defined in: [error.rs:78-86](https://github.com/https://blob/01d4ada/core/tauri/src/error.rs#L78-86)

### `From`

#### `from`

Performs the conversion.

```rs
fn from(error: Error) -> Self
```

Defined in: [hooks.rs:71-73](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L71-73)

```rs
impl From<Error> for InvokeError
```

Defined in: [hooks.rs:69-74](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L69-74)

## Auto Trait Implementations

### `impl !RefUnwindSafe for Error`

### `impl Send for Error`

### `impl !Sync for Error`

### `impl Unpin for Error`

### `impl !UnwindSafe for Error`

## Blanket Implementations

### `Any`

#### `type_id`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

```rs
pub fn type_id(&self) -> TypeId
```

Defined in: [any.rs:132](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)

```rs
impl<T> Any for T 
where
    T: 'static + ?Sized, 
```

Defined in: [any.rs:131-135](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)

### `Borrow`

#### `borrow`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

```rs
pub fn borrow(&self) -> &T
```

Defined in: [borrow.rs:210](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)

```rs
impl<T> Borrow<T> for T 
where
    T: ?Sized, 
```

Defined in: [borrow.rs:208-213](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)

### `BorrowMut`

#### `borrow_mut`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Defined in: [borrow.rs:217](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)

```rs
impl<T> BorrowMut<T> for T 
where
    T: ?Sized, 
```

Defined in: [borrow.rs:216-220](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)

### `From`

#### `from`

Performs the conversion.

```rs
pub fn from(t: T) -> T
```

Defined in: [mod.rs:545](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)

```rs
impl<T> From<T> for T
```

Defined in: [mod.rs:544-548](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)

### `Into`

#### `into`

Performs the conversion.

```rs
pub fn into(self) -> U
```

Defined in: [mod.rs:537](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)

```rs
impl<T, U> Into<U> for T 
where
    U: From<T>, 
```

Defined in: [mod.rs:533-540](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)

### `impl<D> ToJsString for D where D: Display,`

#### `pub fn to_js_string(&self) -> Result<String, Error>`

Turn any [`Tag`](/docs/api/rust/tauri/../tauri/trait.Tag "Tag") into the JavaScript representation of a string.

### `ToString`

#### `to_string`

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)

```rs
pub default fn to_string(&self) -> String
```

Defined in: [string.rs:2267](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/string.rs#L2267)

```rs
impl<T> ToString for T 
where
    T: Display + ?Sized, 
```

Defined in: [string.rs:2261-2274](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/string.rs#L2261-2274)

### `TryFrom`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

Performs the conversion.

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Defined in: [mod.rs:587](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)

```rs
impl<T, U> TryFrom<U> for T 
where
    U: Into<T>, 
```

Defined in: [mod.rs:581-590](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)

### `TryInto`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

Performs the conversion.

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Defined in: [mod.rs:573](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)

```rs
impl<T, U> TryInto<U> for T 
where
    U: TryFrom<T>, 
```

Defined in: [mod.rs:567-576](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
