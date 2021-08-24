---
title: Struct tauri::http::version::Version
sidebar_label: struct.Version
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:version::Version,

```rs
pub struct Version(_);
```

Expand description

Represents a version of the HTTP spec.

## Implementations

### impl [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#28-43 "goto source code")

#### pub const [**HTTP_09**](/docs/api/rust/tauri/about:blank#associatedconstant.HTTP_09): [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#30 "goto source code")

`HTTP/0.9`

#### pub const [**HTTP_10**](/docs/api/rust/tauri/about:blank#associatedconstant.HTTP_10): [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#33 "goto source code")

`HTTP/1.0`

#### pub const [**HTTP_11**](/docs/api/rust/tauri/about:blank#associatedconstant.HTTP_11): [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#36 "goto source code")

`HTTP/1.1`

#### pub const [**HTTP_2**](/docs/api/rust/tauri/about:blank#associatedconstant.HTTP_2): [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#39 "goto source code")

`HTTP/2.0`

#### pub const [**HTTP_3**](/docs/api/rust/tauri/about:blank#associatedconstant.HTTP_3): [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#42 "goto source code")

`HTTP/3.0`

## Trait Implementations

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#62-75 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#63 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#55-60 "goto source code")

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#57 "goto source code")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

#### pub fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;\_\_H>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)\_\_H) where \_\_H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

#### pub fn [cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#tymethod.cmp)(&self, other: &[Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

This method returns an [`Ordering`](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "Ordering") between `self` and `other`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#tymethod.cmp)

#### \#\[must_use]fn [max](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.max)(self, other: Self) -> Self1.21.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#738-740 "goto source code")

Compares and returns the maximum of two values. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.max)

#### \#\[must_use]fn [min](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.min)(self, other: Self) -> Self1.21.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#758-760 "goto source code")

Compares and returns the minimum of two values. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.min)

#### \#\[must_use]fn [clamp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.clamp)(self, min: Self, max: Self) -> Self1.50.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#783-785 "goto source code")

Restrict a value to a certain interval. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.clamp)

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")> for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### pub fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

This method tests for `!=`.

### impl [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")> for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: &[Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl [Copy](https://doc.rust-lang.org/1.54.0/core/marker/trait.Copy.html "trait core::marker::Copy") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

### impl [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

### impl [StructuralEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralEq.html "trait core::marker::StructuralEq") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

### impl [StructuralPartialEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

[\[src\]](https://docs.rs/http/0.2.4/src/http/version.rs.html#25 "goto source code")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Version](/docs/api/rust/tauri/struct.Version "struct tauri::http&#x3A;:version::Version")

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
  