---
title: Struct tauri::http::header::GetAll
sidebar_label: struct.GetAll
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:header::GetAll,

```rs
pub struct GetAll<'a, T> { /* fields omitted */ }
```

Expand description

A view to all values stored in a single entry.

This struct is returned by `HeaderMap::get_all`.

## Implementations

### impl&lt;'a, T> [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where T: 'a,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2456-2485 "goto source code")

#### pub fn [iter](/docs/api/rust/tauri/about:blank#method.iter)(&self) -> [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>ⓘNotable traits for [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>`impl<'a, T> Iterator for ValueIter<'a, T> where T: 'a,type Item = &'aT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2476 "goto source code")

Returns an iterator visiting all values associated with the entry.

Values are iterated in insertion order.

## Examples

```rs
let mut map = HeaderMap::new();
map.insert(HOST, "hello.world".parse().unwrap());
map.append(HOST, "hello.earth".parse().unwrap());

let values = map.get_all("host");
let mut iter = values.iter();
assert_eq!(&"hello.world", iter.next().unwrap());
assert_eq!(&"hello.earth", iter.next().unwrap());
assert!(iter.next().is_none());
```

## Trait Implementations

### impl&lt;'a, T> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where T: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#149 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#149 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;'a, T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2493-2500 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>ⓘNotable traits for [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>`impl<'a, T> Iterator for ValueIter<'a, T> where T: 'a,type Item = &'aT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2497 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### impl&lt;'a, 'b, T> [IntoIterator](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html "trait core::iter::traits::collect::IntoIterator") for &'b [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where 'b: 'a,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2502-2509 "goto source code")

#### type [Item](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item) = [&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T

The type of the elements being iterated over.

#### type [IntoIter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter) = [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>

Which kind of iterator are we turning this into?

#### pub fn [into_iter](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)(self) -> [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>ⓘNotable traits for [ValueIter](/docs/api/rust/tauri/struct.ValueIter "struct tauri::http&#x3A;:header::ValueIter")&lt;'a, T>`impl<'a, T> Iterator for ValueIter<'a, T> where T: 'a,type Item = &'aT;`[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2506 "goto source code")

Creates an iterator from a value. [Read more](https://doc.rust-lang.org/1.54.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter)

### impl&lt;'a, T> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T>> for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where T: [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;T>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2487-2491 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T>) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#2488 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

## Auto Trait Implementations

### impl&lt;'a, T> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where T: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;'a, T> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where T: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;'a, T> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where T: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;'a, T> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T>

### impl&lt;'a, T> [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [GetAll](/docs/api/rust/tauri/struct.GetAll "struct tauri::http&#x3A;:header::GetAll")&lt;'a, T> where T: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

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
  