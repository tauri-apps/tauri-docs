---
title: "enum.Error"
---

# Enum [tauri](/docs/api/rust/tauri/index.html)::​[Error](/docs/api/rust/tauri/)

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
        Base64Decode(DecodeError),
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

`Base64Decode(DecodeError)`

Failed to decode base64.

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

### `impl Debug for Error`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Display for Error`

#### `fn fmt(&self, __formatter: &mut Formatter<'_>) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt)

### `impl Error for Error`

#### `fn source(&self) -> Option<&(dyn Error + 'static)>`

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.source)

#### `pub fn backtrace(&self) -> Option<&Backtrace>`

🔬 This is a nightly-only experimental API. (`backtrace`)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.backtrace)

#### `pub fn description(&self) -> &str`1.0.0

👎 Deprecated since 1.42.0:

use the Display impl or to_string()

[Read more](https://doc.rust-lang.org/nightly/std/error/trait.Error.html#method.description)

#### `pub fn cause(&self) -> Option<&dyn Error>`1.0.0

👎 Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

### `impl From<DecodeError> for Error`

#### `fn from(source: DecodeError) -> Self`

Performs the conversion.

### `impl From<Error> for Error`

#### `fn from(source: Error) -> Self`

Performs the conversion.

### `impl From<Error> for Error`

#### `fn from(source: Error) -> Self`

Performs the conversion.

### `impl From<Error> for Error`

#### `fn from(source: Error) -> Self`

Performs the conversion.

### `impl From<Error> for Error`

#### `fn from(error: Error) -> Self`

Performs the conversion.

### `impl From<Error> for InvokeError`

#### `fn from(error: Error) -> Self`

Performs the conversion.

## Auto Trait Implementations

### `impl !RefUnwindSafe for Error`

### `impl Send for Error`

### `impl !Sync for Error`

### `impl Unpin for Error`

### `impl !UnwindSafe for Error`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `pub fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `pub fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `pub fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T> Instrument for T`

#### `pub fn instrument(self, span: Span) -> Instrumented<Self>`

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.in_current_span)

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `pub fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `pub const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `pub unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.init)

#### `pub unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref)

#### `pub unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref_mut)

#### `pub unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.drop)

### `impl<D> ToJsString for D where D: Display,`

#### `pub fn to_js_string(&self) -> Result<String, Error>`

Turn any [`Tag`](/docs/api/rust/tauri/../tauri/trait.Tag.html "Tag") into the JavaScript representation of a string.

### `impl<T> ToString for T where T: Display + ?Sized,`

#### `pub default fn to_string(&self) -> String`

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/nightly/alloc/string/trait.ToString.html#tymethod.to_string)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
