---
title: Struct tauri::Config
sidebar_label: struct.Config
custom_edit_url: null
---

  # Struct tauri::Config,

```rs
pub struct Config {
    pub package: PackageConfig,
    pub tauri: TauriConfig,
    pub build: BuildConfig,
    pub plugins: PluginConfig,
}
```

Expand description

The config type mapped to `tauri.conf.json`.

## Fields

`package: PackageConfig`

Package settings.

`tauri: TauriConfig`

The Tauri configuration.

`build: BuildConfig`

The build configuration.

`plugins: PluginConfig`

The plugins config.

## Trait Implementations

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl&lt;'de> [Deserialize](https://docs.rs/serde/1.0.127/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de> for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

#### pub fn [deserialize](https://docs.rs/serde/1.0.127/serde/de/trait.Deserialize.html#tymethod.deserialize)&lt;\_\_D>( \_\_deserializer: \_\_D ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config"), &lt;\_\_D as [Deserializer](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de>>::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")> where \_\_D: [Deserializer](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de>,

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserialize.html#tymethod.deserialize)

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")> for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### pub fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

This method tests for `!=`.

### impl [ToTokens](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html "trait quote::to_tokens::ToTokens") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

#### pub fn [to_tokens](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#tymethod.to_tokens)(&self, tokens: &mut [TokenStream](https://docs.rs/proc-macro2/1.0.28/proc_macro2/struct.TokenStream.html "struct proc_macro2::TokenStream"))

Write `self` to the given `TokenStream`. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#tymethod.to_tokens)

#### fn [to_token_stream](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.to_token_stream)(&self) -> [TokenStream](https://docs.rs/proc-macro2/1.0.28/proc_macro2/struct.TokenStream.html "struct proc_macro2::TokenStream")[\[src\]](https://docs.rs/quote/1.0.9/src/quote/to_tokens.rs.html#61 "goto source code")

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.to_token_stream)

#### fn [into_token_stream](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.into_token_stream)(self) -> [TokenStream](https://docs.rs/proc-macro2/1.0.28/proc_macro2/struct.TokenStream.html "struct proc_macro2::TokenStream")[\[src\]](https://docs.rs/quote/1.0.9/src/quote/to_tokens.rs.html#71-73 "goto source code")

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.into_token_stream)

### impl [StructuralPartialEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")

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

### impl&lt;'de, D, R> [CommandArg](/docs/api/rust/tauri/command/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for D where R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime"), D: [Deserialize](https://docs.rs/serde/1.0.127/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>,[\[src\]](/docs/api/rust/tauri/../src/tauri/command.rs#51-56 "goto source code")

#### pub fn [from_command](/docs/api/rust/tauri/command/trait.CommandArg#tymethod.from_command)([CommandItem](/docs/api/rust/tauri/command/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;D, [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../src/tauri/command.rs#52-55 "goto source code")

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/command/trait.CommandArg#tymethod.from_command)

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

### impl&lt;T> [DeserializeOwned](https://docs.rs/serde/1.0.127/serde/de/trait.DeserializeOwned.html "trait serde::de::DeserializeOwned") for T where T: for&lt;'de> [Deserialize](https://docs.rs/serde/1.0.127/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>,

[\[src\]](https://docs.rs/serde/1.0.127/src/serde/de/mod.rs.html#603 "goto source code")
  