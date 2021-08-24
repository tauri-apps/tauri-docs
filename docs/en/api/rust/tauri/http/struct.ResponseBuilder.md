---
title: Struct tauri::http::ResponseBuilder
sidebar_label: struct.ResponseBuilder
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:ResponseBuilder,

```rs
pub struct ResponseBuilder { /* fields omitted */ }
```

Expand description

An HTTP response builder

This type can be used to construct an instance of `Response` through a builder-like pattern.

## Implementations

### impl [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

#### pub fn [new](/docs/api/rust/tauri/about:blank#method.new)() -> [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

Creates a new default instance of `Builder` to construct either a `Head` or a `Response`.

## Examples

```rs
let response = ResponseBuilder::new()
    .status(200)
    .mimetype("text/html")
    .body(Vec::new())
    .unwrap();
```

#### pub fn [mimetype](/docs/api/rust/tauri/about:blank#method.mimetype)(self, mimetype: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

Set the HTTP mimetype for this response.

#### pub fn [status](/docs/api/rust/tauri/about:blank#method.status)&lt;T>(self, status: T) -> [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder") where [StatusCode](/docs/api/rust/tauri/status/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode"): [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>, &lt;[StatusCode](/docs/api/rust/tauri/status/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error"): [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;Error>,

Set the HTTP status for this response.

#### pub fn [version](/docs/api/rust/tauri/about:blank#method.version)(self, version: [Version](/docs/api/rust/tauri/version/struct.Version "struct tauri::http&#x3A;:version::Version")) -> [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

Set the HTTP version for this response.

This function will configure the HTTP version of the `Response` that will be returned from `Builder::build`.

By default this is HTTP/1.1

#### pub fn [header](/docs/api/rust/tauri/about:blank#method.header)&lt;K, V>(self, key: K, value: V) -> [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder") where [HeaderName](/docs/api/rust/tauri/header/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"): [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;K>, &lt;[HeaderName](/docs/api/rust/tauri/header/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;K>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error"): [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;Error>, [HeaderValue](/docs/api/rust/tauri/header/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"): [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;V>, &lt;[HeaderValue](/docs/api/rust/tauri/header/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;V>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error"): [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;Error>,

Appends a header to this response builder.

This function will append the provided key/value as a header to the internal `HeaderMap` being constructed. Essentially this is equivalent to calling `HeaderMap::append`.

#### pub fn [body](/docs/api/rust/tauri/about:blank#method.body)( self, body: [Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Response](/docs/api/rust/tauri/struct.Response "struct tauri::http&#x3A;:Response"), [Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error") + 'static, [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>>

“Consumes” this builder, using the provided `body` to return a constructed `Response`.

## Errors

This function may return an error if any previously configured argument failed to parse or get converted to the internal representation. For example if an invalid `head` was specified via `header("Foo", "Bar\r\n")` the error will be returned when this function is called rather than when `header` was called.

## Examples

```rs
let response = ResponseBuilder::new()
    .mimetype("text/html")
    .body(Vec::new())
    .unwrap();
```

## Trait Implementations

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

## Auto Trait Implementations

### impl \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

### impl \&#33;[Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

### impl \&#33;[Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

### impl \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Builder](/docs/api/rust/tauri/struct.ResponseBuilder "struct tauri::http&#x3A;:ResponseBuilder")

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
  