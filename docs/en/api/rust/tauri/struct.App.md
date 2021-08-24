---
title: Struct tauri::App
sidebar_label: struct.App
custom_edit_url: null
---

  # Struct tauri::App,

```rs
pub struct App<R: Runtime = Wry> { /* fields omitted */ }
```

Expand description

The instance of the currently running application.

This type implements [`Manager`](/docs/api/rust/tauri/trait.Manager "Manager") which allows for manipulation of global application items.

## Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#395 "goto source code")

#### pub fn [create_window](/docs/api/rust/tauri/about:blank#method.create_window)&lt;F>( &self, label: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, url: [WindowUrl](/docs/api/rust/tauri/enum.WindowUrl "enum tauri::WindowUrl"), setup: F ) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(&lt;R::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder, [WebviewAttributes](/docs/api/rust/tauri/struct.WebviewAttributes "struct tauri::WebviewAttributes")) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)&lt;R::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder, [WebviewAttributes](/docs/api/rust/tauri/struct.WebviewAttributes "struct tauri::WebviewAttributes")[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html),[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#395 "goto source code")

Creates a new webview window.

#### pub fn [path_resolver](/docs/api/rust/tauri/about:blank#method.path_resolver)(&self) -> [PathResolver](/docs/api/rust/tauri/struct.PathResolver "struct tauri::PathResolver")[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#395 "goto source code")

The path resolver for the application.

#### pub fn [global_shortcut_manager](/docs/api/rust/tauri/about:blank#method.global_shortcut_manager)(&self) -> R::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager")[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#395 "goto source code")

Gets a copy of the global shortcut manager instance.

#### pub fn [clipboard_manager](/docs/api/rust/tauri/about:blank#method.clipboard_manager)(&self) -> R::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager")[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#395 "goto source code")

Gets a copy of the clipboard manager instance.

#### pub fn [config](/docs/api/rust/tauri/about:blank#method.config)(&self) -> [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#395 "goto source code")

Gets the app’s configuration, defined on the `tauri.conf.json` file.

#### pub fn [package_info](/docs/api/rust/tauri/about:blank#method.package_info)(&self) -> &[PackageInfo](/docs/api/rust/tauri/struct.PackageInfo "struct tauri::PackageInfo")[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#395 "goto source code")

Gets the app’s package information.

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#398-490 "goto source code")

#### pub fn [handle](/docs/api/rust/tauri/about:blank#method.handle)(&self) -> [AppHandle](/docs/api/rust/tauri/struct.AppHandle "struct tauri::AppHandle")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#400-402 "goto source code")

Gets a handle to the application instance.

#### pub fn [run](/docs/api/rust/tauri/about:blank#method.run)&lt;F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(&[AppHandle](/docs/api/rust/tauri/struct.AppHandle "struct tauri::AppHandle")&lt;R>, [Event](/docs/api/rust/tauri/enum.Event "enum tauri::Event")) + 'static>(self, callback: F)[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#428-459 "goto source code")

Runs the application.

## Trait Implementations

### impl&lt;R: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") + [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R> where R::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"), R::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug"),[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#297 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#297 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Manager](/docs/api/rust/tauri/trait.Manager "trait tauri::Manager")&lt;R> for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#308 "goto source code")

#### fn [config](/docs/api/rust/tauri/trait.Manager#method.config)(&self) -> [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#256-258 "goto source code")

The [`Config`](/docs/api/rust/tauri/struct.Config "Config") the manager was created with.

#### fn [emit_all](/docs/api/rust/tauri/trait.Manager#method.emit_all)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone")>(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#261-263 "goto source code")

Emits a event to all windows.

#### fn [emit_to](/docs/api/rust/tauri/trait.Manager#method.emit_to)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone")>( &self, label: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S ) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#266-270 "goto source code")

Emits an event to a window with the specified label.

#### fn [listen_global](/docs/api/rust/tauri/trait.Manager#method.listen_global)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(EmittedEvent) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#273-278 "goto source code")

Listen to a global event.

#### fn [once_global](/docs/api/rust/tauri/trait.Manager#method.once_global)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(EmittedEvent) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#281-286 "goto source code")

Listen to a global event only once.

#### fn [trigger_global](/docs/api/rust/tauri/trait.Manager#method.trigger_global)(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), data: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>)[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#289-291 "goto source code")

Trigger a global event.

#### fn [unlisten](/docs/api/rust/tauri/trait.Manager#method.unlisten)(&self, handler_id: EventHandler)[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#294-296 "goto source code")

Remove an event listener.

#### fn [get_window](/docs/api/rust/tauri/trait.Manager#method.get_window)(&self, label: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#299-301 "goto source code")

Fetch a single window from the manager.

#### fn [windows](/docs/api/rust/tauri/trait.Manager#method.windows)(&self) -> [HashMap](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String"), [Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#304-306 "goto source code")

Fetch all managed windows.

#### fn [manage](/docs/api/rust/tauri/trait.Manager#method.manage)&lt;T>(&self, state: T) where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#310-315 "goto source code")

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/struct.Builder#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/trait.Manager#method.manage)

#### fn [state](/docs/api/rust/tauri/trait.Manager#method.state)&lt;T>(&self) -> [State](/docs/api/rust/tauri/struct.State "struct tauri::State")&lt;'\_, T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#318-323 "goto source code")

Gets the managed state for the type `T`. Panics if the type is not managed.

#### fn [try_state](/docs/api/rust/tauri/trait.Manager#method.try_state)&lt;T>(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[State](/docs/api/rust/tauri/struct.State "struct tauri::State")&lt;'\_, T>> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#326-331 "goto source code")

Tries to get the managed state for the type `T`. Returns `None` if the type is not managed.

## Auto Trait Implementations

### impl&lt;R = [Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>

### impl&lt;R> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R> where R: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;R> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R> where R: [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;R> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R> where R: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;R = [Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>

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
  