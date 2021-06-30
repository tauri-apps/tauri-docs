---
title: Enum tauri::Error
sidebar_label: enum.Error
custom_edit_url: null
---

# Enum tauri::Error,\[−]\[src],\[−],−

```rs
#[non_exhaustive]pub enum Error {
    Runtime(Error),
    CreateWebview(Box<dyn Error + Send>),
    CreateWindow,
    WindowLabelAlreadyExists(String),
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

`WindowLabelAlreadyExists(String)`

Window label must be unique.

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

```rs
impl Debug for Error
```

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

#### `fmt`

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

### `Display`

```rs
impl Display for Error
```

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

#### `fmt`

```rs
fn fmt(&self, __formatter: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

### `Error`

```rs
impl Error for Error
```

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

#### `source`

```rs
fn source(&self) -> Option<&(dyn Error + 'static)>
```

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

#### `backtrace`

```rs
pub fn backtrace(&self) -> Option<&Backtrace>
```

_Defined in: [error.rs:127](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/std/error.rs#L127)_

🔬 This is a nightly-only experimental API. (`backtrace`)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

#### `description`

```rs
pub fn description(&self) -> &str
```

_Defined in: [error.rs:139](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/std/error.rs#L139)_

👎 Deprecated since 1.42.0:

use the Display impl or to_string()

[Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### `cause`

```rs
pub fn cause(&self) -> Option<&dyn Error>
```

_Defined in: [error.rs:149](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/std/error.rs#L149)_

👎 Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

### `From`

```rs
impl From<Error> for Error
```

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

#### `from`

```rs
fn from(source: Error) -> Self
```

Performs the conversion.

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

### `From`

```rs
impl From<Error> for Error
```

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

#### `from`

```rs
fn from(source: Error) -> Self
```

Performs the conversion.

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

### `From`

```rs
impl From<Error> for Error
```

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

#### `from`

```rs
fn from(source: Error) -> Self
```

Performs the conversion.

_Defined in: [error.rs:8](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L8)_

### `From`

```rs
impl From<Error> for Error
```

_Defined in: [error.rs:81-89](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L81-89)_

#### `from`

```rs
fn from(error: Error) -> Self
```

Performs the conversion.

_Defined in: [error.rs:82-88](https://github.com/https://blob/e663bdd/core/tauri/src/error.rs#L82-88)_

### `From`

```rs
impl From<Error> for InvokeError
```

_Defined in: [hooks.rs:69-74](https://github.com/https://blob/e663bdd/core/tauri/src/hooks.rs#L69-74)_

#### `from`

```rs
fn from(error: Error) -> Self
```

Performs the conversion.

_Defined in: [hooks.rs:71-73](https://github.com/https://blob/e663bdd/core/tauri/src/hooks.rs#L71-73)_

## Auto Trait Implementations

### `impl !RefUnwindSafe for Error`

### `impl Send for Error`

### `impl !Sync for Error`

### `impl Unpin for Error`

### `impl !UnwindSafe for Error`

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

### `impl<D> ToJsString for D where D: Display,`

#### `pub fn to_js_string(&self) -> Result<String, Error>`

Turn any [`Tag`](/docs/api/rust/tauri/../tauri/trait.Tag "Tag") into the JavaScript representation of a string.

### `ToString`

```rs
impl<T> ToString for T where
    T: Display + ?Sized, 
```

_Defined in: [string.rs:2261-2274](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/string.rs#L2261-2274)_

#### `to_string`

```rs
pub default fn to_string(&self) -> String
```

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)

_Defined in: [string.rs:2267](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/string.rs#L2267)_

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
