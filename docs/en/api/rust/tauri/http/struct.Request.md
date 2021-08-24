---
title: Struct tauri::http::Request
sidebar_label: struct.Request
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:Request,

```rs
pub struct Request {
    pub head: RequestParts,
    pub body: Vec<u8, Global>,
}
```

Expand description

Represents an HTTP request from the WebView.

An HTTP request consists of a head and a potentially optional body.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific)

-   **Linux:** Headers are not exposed.

## Fields

`head: RequestParts``body: Vec<u8, Global>`

## Implementations

### impl [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

#### pub fn [new](/docs/api/rust/tauri/about:blank#method.new)(body: [Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>) -> [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

Creates a new blank `Request` with the body

#### pub fn [method](/docs/api/rust/tauri/about:blank#method.method)(&self) -> &[Method](/docs/api/rust/tauri/method/struct.Method "struct tauri::http&#x3A;:method::Method")

Returns a reference to the associated HTTP method.

#### pub fn [uri](/docs/api/rust/tauri/about:blank#method.uri)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)

Returns a reference to the associated URI.

#### pub fn [headers](/docs/api/rust/tauri/about:blank#method.headers)(&self) -> &[HeaderMap](/docs/api/rust/tauri/header/struct.HeaderMap "struct tauri::http&#x3A;:header::HeaderMap")&lt;[HeaderValue](/docs/api/rust/tauri/header/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")>

Returns a reference to the associated header field map.

#### pub fn [body](/docs/api/rust/tauri/about:blank#method.body)(&self) -> &[Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>

Returns a reference to the associated HTTP body.

#### pub fn [into_parts](/docs/api/rust/tauri/about:blank#method.into_parts)(self) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)[RequestParts](/docs/api/rust/tauri/struct.RequestParts "struct tauri::http&#x3A;:RequestParts"), [Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)

Consumes the request returning the head and body RequestParts.

## Trait Implementations

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Request](/docs/api/rust/tauri/struct.Request "struct tauri::http&#x3A;:Request")

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
  