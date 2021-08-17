---
title: Struct tauri::window::MenuHandle
sidebar_label: struct.MenuHandle
custom_edit_url: null
---

  # Struct tauri::window::MenuHandle,

```rs
pub struct MenuHandle<R: Runtime = Wry> { /* fields omitted */ }
```

Expand description

A handle to a system tray. Allows updating the context menu items.

## Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#61-112 "goto source code")

#### pub fn [get_item](/docs/api/rust/tauri/about:blank#method.get_item)(&self, id: MenuIdRef&lt;'\_>) -> MenuItemHandle&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#63-73 "goto source code")

Gets a handle to the menu item that has the specified `id`.

#### pub fn [show](/docs/api/rust/tauri/about:blank#method.show)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#76-78 "goto source code")

Shows the menu.

#### pub fn [hide](/docs/api/rust/tauri/about:blank#method.hide)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#81-83 "goto source code")

Hides the menu.

#### pub fn [is_visible](/docs/api/rust/tauri/about:blank#method.is_visible)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#93-95 "goto source code")

Whether the menu is visible or not.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [toggle](/docs/api/rust/tauri/about:blank#method.toggle)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#105-111 "goto source code")

Toggles the menu visibility.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

## Trait Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#35-42 "goto source code")

#### fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#36-41 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl&lt;R: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") + [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R> where R::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#29 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../../src/tauri/window/menu.rs#29 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### impl&lt;R> [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe"),

### impl&lt;R> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R>

### impl&lt;R> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;R> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;R> [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe"),

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
  