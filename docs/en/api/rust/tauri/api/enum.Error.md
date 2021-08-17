---
title: Enum tauri::api::Error
sidebar_label: enum.Error
custom_edit_url: null
---

  # Enum tauri::api::Error,

```rs
#[non_exhaustive]

pub enum Error {
Show variants    Command(String),
    Extract(String),
    Path(String),
    PathPrefix(StripPrefixError),
    Dialog(String),
    DialogCancelled,
    Network(Error),
    HttpMethod(InvalidMethod),
    HttpHeader(InvalidHeaderName),
    Utf8(FromUtf8Error),
    InvalidHttpForm,
    Semver(Error),
    Json(Error),
    Bincode(Box<ErrorKind>),
    Io(Error),
    Ignore(Error),
    Zip(ZipError),
    FailedToDetectPlatform(String),
    Shell(String),
}
```

Expand description

The error types.

## Variants (Non-exhaustive)

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`Command(String)`

Command error.

`Extract(String)`

The extract archive error.

`Path(String)`

The path operation error.

`PathPrefix(StripPrefixError)`

The path StripPrefixError error.

`Dialog(String)`

Error showing the dialog.

`DialogCancelled`

The dialog operation was cancelled by the user.

`Network(Error)`

The network error.

`HttpMethod(InvalidMethod)`

HTTP method error.

`HttpHeader(InvalidHeaderName)`

Invalid HTTP header value.

`Utf8(FromUtf8Error)`

Failed to serialize header value as string.

`InvalidHttpForm`

HTTP form to must be an object.

`Semver(Error)`

Semver error.

`Json(Error)`

JSON error.

`Bincode(Box<ErrorKind>)`

Bincode error.

`Io(Error)`

IO error.

`Ignore(Error)`

Ignore error.

`Zip(ZipError)`

ZIP error.

`FailedToDetectPlatform(String)`

failed to detect the current platform.

`Shell(String)`

Shell error.

## Trait Implementations

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)(&self, \_\_formatter: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)

### impl [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [source](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html#method.source)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&(dyn [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error") + 'static)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

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

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;[ErrorKind](https://docs.rs/bincode/1.3.3/bincode/error/enum.ErrorKind.html "enum bincode::error::ErrorKind"), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;[ErrorKind](https://docs.rs/bincode/1.3.3/bincode/error/enum.ErrorKind.html "enum bincode::error::ErrorKind")>) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;Error> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: Error) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://docs.rs/semver/1.0.4/semver/parse/struct.Error.html "struct semver::parse::Error")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [Error](https://docs.rs/semver/1.0.4/semver/parse/struct.Error.html "struct semver::parse::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://docs.rs/serde_json/1.0.66/serde_json/error/struct.Error.html "struct serde_json::error::Error")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [Error](https://docs.rs/serde_json/1.0.66/serde_json/error/struct.Error.html "struct serde_json::error::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](https://doc.rust-lang.org/1.54.0/std/io/error/struct.Error.html "struct std::io::error::Error")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [Error](https://doc.rust-lang.org/1.54.0/std/io/error/struct.Error.html "struct std::io::error::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;Error> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: Error) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")> for [Error](/docs/api/rust/tauri/../enum.Error "enum tauri::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/error.rs#8 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/error.rs#8 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[FromUtf8Error](https://doc.rust-lang.org/1.54.0/alloc/string/struct.FromUtf8Error.html "struct alloc::string::FromUtf8Error")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [FromUtf8Error](https://doc.rust-lang.org/1.54.0/alloc/string/struct.FromUtf8Error.html "struct alloc::string::FromUtf8Error")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[InvalidHeaderName](https://docs.rs/http/0.2.4/http/header/name/struct.InvalidHeaderName.html "struct http&#x3A;:header::name::InvalidHeaderName")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [InvalidHeaderName](https://docs.rs/http/0.2.4/http/header/name/struct.InvalidHeaderName.html "struct http&#x3A;:header::name::InvalidHeaderName")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[InvalidMethod](https://docs.rs/http/0.2.4/http/method/struct.InvalidMethod.html "struct http&#x3A;:method::InvalidMethod")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [InvalidMethod](https://docs.rs/http/0.2.4/http/method/struct.InvalidMethod.html "struct http&#x3A;:method::InvalidMethod")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[StripPrefixError](https://doc.rust-lang.org/1.54.0/std/path/struct.StripPrefixError.html "struct std::path::StripPrefixError")> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: [StripPrefixError](https://doc.rust-lang.org/1.54.0/std/path/struct.StripPrefixError.html "struct std::path::StripPrefixError")) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;ZipError> for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

#### fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(source: ZipError) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/api/error.rs#6 "goto source code")

Performs the conversion.

## Auto Trait Implementations

### impl \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")

### impl \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Error](/docs/api/rust/tauri/enum.Error "enum tauri::api::Error")

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
  