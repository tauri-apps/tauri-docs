---
title: Struct tauri::PhysicalPosition
sidebar_label: struct.PhysicalPosition
custom_edit_url: null
---

  # Struct tauri::PhysicalPosition,

```rs
pub struct PhysicalPosition<P> {
    pub x: P,
    pub y: P,
}
```

Expand description

A position represented in physical pixels.

## Fields

`x: P`

Vertical axis value.

`y: P`

Horizontal axis value.

## Implementations

### impl&lt;P> [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel"),

#### pub fn [to_logical](/docs/api/rust/tauri/about:blank#method.to_logical)&lt;X>(self, scale_factor: [f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)) -> [LogicalPosition](/docs/api/rust/tauri/struct.LogicalPosition "struct tauri::LogicalPosition")&lt;X> where X: [Pixel](/docs/api/rust/tauri/trait.Pixel "trait tauri::Pixel"),

Converts the physical position to a logical one, using the scale factor.

## Trait Implementations

### impl&lt;P> [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl&lt;P> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;P> [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default"),

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl&lt;'de, P> [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de> for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>,

#### pub fn [deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html#tymethod.deserialize)&lt;\_\_D>( \_\_deserializer: \_\_D ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>, &lt;\_\_D as [Deserializer](https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de>>::[Error](https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")> where \_\_D: [Deserializer](https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de>,

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html#tymethod.deserialize)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;PhysicalPositionWrapper&lt;T>> for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;T>

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(position: PhysicalPositionWrapper&lt;T>) -> [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;T>

Performs the conversion.

### impl&lt;P> [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash"),

#### pub fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;\_\_H>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)\_\_H) where \_\_H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl&lt;P> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>> for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;P>,

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### pub fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

This method tests for `!=`.

### impl&lt;P> [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize"),

#### pub fn [serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html#tymethod.serialize)&lt;\_\_S>( &self, \_\_serializer: \_\_S ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;&lt;\_\_S as [Serializer](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html "trait serde::ser::Serializer")>::[Ok](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html#associatedtype.Ok "type serde::ser::Serializer::Ok"), &lt;\_\_S as [Serializer](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html "trait serde::ser::Serializer")>::[Error](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html#associatedtype.Error "type serde::ser::Serializer::Error")> where \_\_S: [Serializer](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html "trait serde::ser::Serializer"),

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html#tymethod.serialize)

### impl&lt;P> [Copy](https://doc.rust-lang.org/1.54.0/core/marker/trait.Copy.html "trait core::marker::Copy") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Copy](https://doc.rust-lang.org/1.54.0/core/marker/trait.Copy.html "trait core::marker::Copy"),

### impl&lt;P> [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq"),

### impl&lt;P> [StructuralEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralEq.html "trait core::marker::StructuralEq") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>

### impl&lt;P> [StructuralPartialEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P>

## Auto Trait Implementations

### impl&lt;P> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;P> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;P> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;P> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;P> [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [PhysicalPosition](/docs/api/rust/tauri/struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;P> where P: [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe"),

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

### impl&lt;'de, D, R> [CommandArg](/docs/api/rust/tauri/command/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for D where R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime"), D: [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>,[\[src\]](/docs/api/rust/tauri/../src/tauri/command.rs#51-56 "goto source code")

#### pub fn [from_command](/docs/api/rust/tauri/command/trait.CommandArg#tymethod.from_command)([CommandItem](/docs/api/rust/tauri/command/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;D, [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../src/tauri/command.rs#52-55 "goto source code")

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/command/trait.CommandArg#tymethod.from_command)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: T) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;T> [ToOwned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html "trait alloc::borrow::ToOwned") for T where T: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96 "goto source code")

#### type [Owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned) = T

The resulting type after obtaining ownership.

#### pub fn [to_owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)(&self) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### pub fn [clone_into](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)(&self, target: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T)[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)

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

### impl&lt;T> [DeserializeOwned](https://docs.rs/serde/1.0.129/serde/de/trait.DeserializeOwned.html "trait serde::de::DeserializeOwned") for T where T: for&lt;'de> [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>,

[\[src\]](https://docs.rs/serde/1.0.129/src/serde/de/mod.rs.html#603 "goto source code")
  