---
title: Enum tauri::Error
sidebar_label: enum.Error
custom_edit_url: null
---

  # Enum tauri::Error,

```rs
#[non_exhaustive]

pub enum Error {
Show variants    Runtime(Error),
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
    InvalidUrl(ParseError),
    JoinError(Box<dyn Error + Send>),
}
```

Expand description

Runtime errors that can happen inside a Tauri application.

## Variants (Non-exhaustive)

This enum is marked as non-exhaustive

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

`InvalidUrl(ParseError)`

A part of the URL is malformed or invalid. This may occur when parsing and combining user-provided URLs and paths.

`JoinError(Box<dyn Error + Send>)`

Task join error.

## Trait Implementations

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)(&self, \_\_formatter: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)

### impl [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

#### fn [source](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.source)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&(dyn [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error") + 'static)>[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

The lower-level source of this error, if any. [Read more](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.source)

#### fn [backtrace](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.backtrace)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[Backtrace](https://doc.rust-lang.org/1.54.0/std/backtrace/struct.Backtrace.html "struct std::backtrace::Backtrace")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/std/error.rs.html#134 "goto source code")

🔬 This is a nightly-only experimental API. (`backtrace`)

Returns a stack backtrace, if available, of where this error occurred. [Read more](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.backtrace)

#### fn [description](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.description)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/std/error.rs.html#146 "goto source code")

👎 Deprecated since 1.42.0:

use the Display impl or to_string()

[Read more](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.description)

#### fn [cause](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.cause)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&dyn [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error")>1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/std/error.rs.html#156 "goto source code")

👎 Deprecated since 1.33.0:

replaced by Error::source, which can support downcasting

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;Error> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: Error) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/docs/api/rust/tauri/api/enum.Error "enum tauri::api::Error")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [Error](/docs/api/rust/tauri/api/enum.Error "enum tauri::api::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://doc.rust-lang.org/1.54.0/std/io/error/struct.Error.html "struct std::io::error::Error")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [Error](https://doc.rust-lang.org/1.54.0/std/io/error/struct.Error.html "struct std::io::error::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#8 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://docs.rs/serde_json/1.0.66/serde_json/error/struct.Error.html "struct serde_json::error::Error")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#89-97 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(error: [Error](https://docs.rs/serde_json/1.0.66/serde_json/error/struct.Error.html "struct serde_json::error::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/error.rs#90-96 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")> for [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#72-77 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(error: [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/hooks.rs#74-76 "goto source code")

Performs the conversion.

## Auto Trait Implementations

### impl \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")

### impl \&#33;[Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")

### impl \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::Error")

## Blanket Implementations

### impl&lt;T> [Any](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html "trait core::any::Any") for T where T: 'static + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135 "goto source code")

#### pub fn [type_id](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)(&self) -> [TypeId](https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html "struct core::any::TypeId")[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)

### impl&lt;T> [Borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213 "goto source code")

#### pub fn [borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)

### impl&lt;T> [BorrowMut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220 "goto source code")

#### pub fn [borrow_mut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: T) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;T> [ToString](https://doc.rust-lang.org/1.54.0/alloc/string/trait.ToString.html "trait alloc::string::ToString") for T where T: [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/string.rs.html#2372-2386 "goto source code")

#### pub default fn [to_string](https://doc.rust-lang.org/1.54.0/alloc/string/trait.ToString.html#tymethod.to_string)(&self) -> [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/string.rs.html#2378 "goto source code")

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/1.54.0/alloc/string/trait.ToString.html#tymethod.to_string)

### impl&lt;T, U> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U> for T where U: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryInto](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U> for T where U: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")

The type returned in the event of a conversion error.

#### pub fn [try_into](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### impl&lt;V, T> VZip&lt;V> for T where V: MultiLane&lt;T>,

#### pub fn [vzip](/docs/api/rust/tauri/about:blank#tymethod.vzip)(self) -> V
  