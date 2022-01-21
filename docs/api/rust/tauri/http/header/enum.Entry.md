---
title: Enum tauri::http::header::Entry
sidebar_label: enum.Entry
custom_edit_url: null
---

  # Enum tauri::http&#x3A;:header::Entry,

```rs
pub enum Entry<'a, T> where
    T: 'a,  {
    Occupied(OccupiedEntry<'a, T>),
    Vacant(VacantEntry<'a, T>),
}
```

Expand description

A view into a single location in a `HeaderMap`, which may be vacant or occupied.

## Variants

`Occupied(OccupiedEntry<'a, T>)`

An occupied entry

`Vacant(VacantEntry<'a, T>)`

A vacant entry

## Implementations

### impl&lt;'a, T> [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'a, T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2264-2361 "goto source code")

#### pub fn [or_insert](/docs/api/rust/tauri/about:blank#method.or_insert)(self, default: T) -> [&'a mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2291 "goto source code")

Ensures a value is in the entry by inserting the default if empty.

Returns a mutable reference to the **first** value in the entry.

## Examples

```rs
let mut map: HeaderMap<u32> = HeaderMap::default();

let headers = &[
    "content-length",
    "x-hello",
    "Content-Length",
    "x-world",
];

for &header in headers {
    let counter = map.entry(header)
        .or_insert(0);
    *counter += 1;
}

assert_eq!(map["content-length"], 2);
assert_eq!(map["x-hello"], 1);
```

#### pub fn [or_insert_with](/docs/api/rust/tauri/about:blank#method.or_insert_with)&lt;F>(self, default: F) -> [&'a mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -> T,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2334 "goto source code")

Ensures a value is in the entry by inserting the result of the default function if empty.

The default function is not called if the entry exists in the map. Returns a mutable reference to the **first** value in the entry.

## Examples

Basic usage.

```rs
let mut map = HeaderMap::new();

let res = map.entry("x-hello")
    .or_insert_with(|| "world".parse().unwrap());

assert_eq!(res, "world");
```

The default function is not called if the entry exists in the map.

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "world".parse().unwrap());

let res = map.entry("host")
    .or_insert_with(|| unreachable!());


assert_eq!(res, "world");
```

#### pub fn [key](/docs/api/rust/tauri/about:blank#method.key)(&self) -> &[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2353 "goto source code")

Returns a reference to the entry’s key

## Examples

```rs
let mut map = HeaderMap::new();

assert_eq!(map.entry("x-hello").key(), "x-hello");
```

## Trait Implementations

### impl&lt;'a, T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'a, T> where T: 'a + [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#156 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#156 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### impl&lt;'a, T> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'a, T> where T: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;'a, T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'a, T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;'a, T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'a, T> where T: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;'a, T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'a, T>

### impl&lt;'a, T> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Entry](/docs/api/rust/tauri/enum.Entry "enum tauri::http&#x3A;:header::Entry")&lt;'a, T>

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
  