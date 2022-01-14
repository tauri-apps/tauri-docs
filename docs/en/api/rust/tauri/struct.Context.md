---
title: Struct tauri::Context
sidebar_label: struct.Context
custom_edit_url: null
---

  # Struct tauri::Context,

```rs
pub struct Context<A: Assets> { /* fields omitted */ }
```

Expand description

User supplied data required inside of a Tauri application.

## Stability

This is the output of the `tauri::generate_context!` macro, and is not considered part of the stable API. Unless you know what you are doing and are prepared for this type to have breaking changes, do not create it yourself.

## Implementations

### impl&lt;A: [Assets](/docs/api/rust/tauri/trait.Assets "trait tauri::Assets")> [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#170-250 "goto source code")

#### pub fn [config](/docs/api/rust/tauri/about:blank#method.config)(&self) -> &[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#173-175 "goto source code")

The config the application was prepared with.

#### pub fn [config_mut](/docs/api/rust/tauri/about:blank#method.config_mut)(&mut self) -> &mut [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#179-181 "goto source code")

A mutable reference to the config the application was prepared with.

#### pub fn [assets](/docs/api/rust/tauri/about:blank#method.assets)(&self) -> [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;A>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#185-187 "goto source code")

The assets to be served directly by Tauri.

#### pub fn [assets_mut](/docs/api/rust/tauri/about:blank#method.assets_mut)(&mut self) -> &mut [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;A>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#191-193 "goto source code")

A mutable reference to the assets to be served directly by Tauri.

#### pub fn [default_window_icon](/docs/api/rust/tauri/about:blank#method.default_window_icon)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#197-199 "goto source code")

The default window icon Tauri should use when creating windows.

#### pub fn [default_window_icon_mut](/docs/api/rust/tauri/about:blank#method.default_window_icon_mut)(&mut self) -> &mut [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)>>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#203-205 "goto source code")

A mutable reference to the default window icon Tauri should use when creating windows.

#### pub fn [system_tray_icon](/docs/api/rust/tauri/about:blank#method.system_tray_icon)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[Icon](/docs/api/rust/tauri/enum.Icon "enum tauri::Icon")>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#209-211 "goto source code")

The icon to use on the system tray UI.

#### pub fn [system_tray_icon_mut](/docs/api/rust/tauri/about:blank#method.system_tray_icon_mut)(&mut self) -> &mut [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Icon](/docs/api/rust/tauri/enum.Icon "enum tauri::Icon")>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#215-217 "goto source code")

A mutable reference to the icon to use on the system tray UI.

#### pub fn [package_info](/docs/api/rust/tauri/about:blank#method.package_info)(&self) -> &[PackageInfo](/docs/api/rust/tauri/struct.PackageInfo "struct tauri::PackageInfo")[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#221-223 "goto source code")

Package information.

#### pub fn [package_info_mut](/docs/api/rust/tauri/about:blank#method.package_info_mut)(&mut self) -> &mut [PackageInfo](/docs/api/rust/tauri/struct.PackageInfo "struct tauri::PackageInfo")[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#227-229 "goto source code")

A mutable reference to the package information.

#### pub fn [new](/docs/api/rust/tauri/about:blank#method.new)( config: [Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config"), assets: [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;A>, default_window_icon: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)>>, system_tray_icon: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Icon](/docs/api/rust/tauri/enum.Icon "enum tauri::Icon")>, package_info: [PackageInfo](/docs/api/rust/tauri/struct.PackageInfo "struct tauri::PackageInfo"), info_plist: [()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html) ) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#233-249 "goto source code")

Create a new [`Context`](/docs/api/rust/tauri/struct.Context "Context") from the minimal required items.

## Trait Implementations

### impl&lt;A: [Assets](/docs/api/rust/tauri/trait.Assets "trait tauri::Assets")> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#159-168 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#160-167 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### impl&lt;A> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A> where A: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;A> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A>

### impl&lt;A> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A>

### impl&lt;A> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A>

### impl&lt;A> [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A> where A: [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

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
  