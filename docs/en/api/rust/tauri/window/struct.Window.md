---
title: Struct tauri::window::Window
sidebar_label: struct.Window
custom_edit_url: null
---

  # Struct tauri::window::Window,

```rs
pub struct Window<R: Runtime = Wry> { /* fields omitted */ }
```

Expand description

A webview window managed by Tauri.

This type also implements [`Manager`](/docs/api/rust/tauri/../trait.Manager "Manager") which allows you to manage other windows attached to the same application.

## Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#143-723 "goto source code")

#### pub fn [create_window](/docs/api/rust/tauri/about:blank#method.create_window)&lt;F>( &mut self, label: [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String"), url: [WindowUrl](/docs/api/rust/tauri/../enum.WindowUrl "enum tauri::WindowUrl"), setup: F ) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>> where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(&lt;R::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder, [WebviewAttributes](/docs/api/rust/tauri/../struct.WebviewAttributes "struct tauri::WebviewAttributes")) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)&lt;R::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder, [WebviewAttributes](/docs/api/rust/tauri/../struct.WebviewAttributes "struct tauri::WebviewAttributes")[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html),[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#158-182 "goto source code")

Creates a new webview window.

#### pub fn [label](/docs/api/rust/tauri/about:blank#method.label)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#237-239 "goto source code")

The label of this window.

#### pub fn [emit](/docs/api/rust/tauri/about:blank#method.emit)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize")>(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#242-251 "goto source code")

Emits an event to the current window.

#### pub fn [emit_others](/docs/api/rust/tauri/about:blank#method.emit_others)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone")>( &self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S ) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#254-256 "goto source code")

Emits an event on all windows except this one.

#### pub fn [listen](/docs/api/rust/tauri/about:blank#method.listen)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(Event) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#259-265 "goto source code")

Listen to an event on this window.

#### pub fn [once](/docs/api/rust/tauri/about:blank#method.once)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(Event) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#268-274 "goto source code")

Listen to a an event on this window a single time.

#### pub fn [trigger](/docs/api/rust/tauri/about:blank#method.trigger)(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), data: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>)[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#277-280 "goto source code")

Triggers an event on this window.

#### pub fn [eval](/docs/api/rust/tauri/about:blank#method.eval)(&self, js: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#283-285 "goto source code")

Evaluates JavaScript on this window.

#### pub fn [on_window_event](/docs/api/rust/tauri/about:blank#method.on_window_event)&lt;F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(&[WindowEvent](/docs/api/rust/tauri/../enum.WindowEvent "enum tauri::WindowEvent")) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static>(&self, f: F)[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#288-290 "goto source code")

Registers a window event listener.

#### pub fn [on_menu_event](/docs/api/rust/tauri/about:blank#method.on_menu_event)&lt;F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")([MenuEvent](/docs/api/rust/tauri/struct.MenuEvent "struct tauri::window::MenuEvent")) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static>(&self, f: F) -> [Uuid](https://docs.rs/uuid/0.8.2/uuid/struct.Uuid.html "struct uuid::Uuid")[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#293-300 "goto source code")

Registers a menu event listener.

#### pub fn [menu_handle](/docs/api/rust/tauri/about:blank#method.menu_handle)(&self) -> [MenuHandle](/docs/api/rust/tauri/struct.MenuHandle "struct tauri::window::MenuHandle")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#305-310 "goto source code")

Gets a handle to the window menu.

#### pub fn [scale_factor](/docs/api/rust/tauri/about:blank#method.scale_factor)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[f64](https://doc.rust-lang.org/1.54.0/std/primitive.f64.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#320-322 "goto source code")

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [inner_position](/docs/api/rust/tauri/about:blank#method.inner_position)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[PhysicalPosition](/docs/api/rust/tauri/../struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;[i32](https://doc.rust-lang.org/1.54.0/std/primitive.i32.html)>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#332-334 "goto source code")

Returns the position of the top-left hand corner of the window’s client area relative to the top-left hand corner of the desktop.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [outer_position](/docs/api/rust/tauri/about:blank#method.outer_position)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[PhysicalPosition](/docs/api/rust/tauri/../struct.PhysicalPosition "struct tauri::PhysicalPosition")&lt;[i32](https://doc.rust-lang.org/1.54.0/std/primitive.i32.html)>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#344-346 "goto source code")

Returns the position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [inner_size](/docs/api/rust/tauri/about:blank#method.inner_size)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[PhysicalSize](/docs/api/rust/tauri/../struct.PhysicalSize "struct tauri::PhysicalSize")&lt;[u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#358-360 "goto source code")

Returns the physical size of the window’s client area.

The client area is the content of the window, excluding the title bar and borders.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [outer_size](/docs/api/rust/tauri/about:blank#method.outer_size)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[PhysicalSize](/docs/api/rust/tauri/../struct.PhysicalSize "struct tauri::PhysicalSize")&lt;[u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#372-374 "goto source code")

Returns the physical size of the entire window.

These dimensions include the title bar and borders. If you don’t want that (and you usually don’t), use inner_size instead.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [is_fullscreen](/docs/api/rust/tauri/about:blank#method.is_fullscreen)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#384-386 "goto source code")

Gets the window’s current fullscreen state.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [is_maximized](/docs/api/rust/tauri/about:blank#method.is_maximized)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#396-398 "goto source code")

Gets the window’s current maximized state.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [is_decorated](/docs/api/rust/tauri/about:blank#method.is_decorated)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#408-410 "goto source code")

Gets the window’s current decoration state.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [is_resizable](/docs/api/rust/tauri/about:blank#method.is_resizable)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#420-422 "goto source code")

Gets the window’s current resizable state.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [is_visible](/docs/api/rust/tauri/about:blank#method.is_visible)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#432-434 "goto source code")

Gets the window’s current vibility state.

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [current_monitor](/docs/api/rust/tauri/about:blank#method.current_monitor)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Monitor](/docs/api/rust/tauri/struct.Monitor "struct tauri::window::Monitor")>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#450-457 "goto source code")

Returns the monitor on which the window currently resides.

Returns None if current monitor can’t be detected.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific)

-   **Linux:** Unsupported

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [primary_monitor](/docs/api/rust/tauri/about:blank#method.primary_monitor)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Monitor](/docs/api/rust/tauri/struct.Monitor "struct tauri::window::Monitor")>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#473-480 "goto source code")

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-1)

-   **Linux:** Unsupported

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [available_monitors](/docs/api/rust/tauri/about:blank#method.available_monitors)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[Monitor](/docs/api/rust/tauri/struct.Monitor "struct tauri::window::Monitor")>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#494-501 "goto source code")

Returns the list of all the monitors available on the system.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-2)

-   **Linux:** Unsupported

## Panics

-   Panics if the event loop is not running yet, usually when called on the [`setup`](/docs/api/rust/tauri/../struct.Builder#method.setup) closure.
-   Panics when called on the main thread, usually on the [`run`](/docs/api/rust/tauri/../struct.App#method.run) closure.

You can spawn a task to use the API using [`crate::async_runtime::spawn`](/docs/api/rust/tauri/../async_runtime/fn.spawn "crate::async_runtime::spawn") or [`std::thread::spawn`](https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html "std::thread::spawn") to prevent the panic.

#### pub fn [gtk_window](/docs/api/rust/tauri/about:blank#method.gtk_window)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;ApplicationWindow>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#543-545 "goto source code")

Returns the `ApplicatonWindow` from gtk crate that is used by this window.

Note that this can only be used on the main thread.

#### pub fn [center](/docs/api/rust/tauri/about:blank#method.center)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#550-552 "goto source code")

Centers the window.

#### pub fn [request_user_attention](/docs/api/rust/tauri/about:blank#method.request_user_attention)( &self, request_type: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[UserAttentionType](/docs/api/rust/tauri/../enum.UserAttentionType "enum tauri::UserAttentionType")> ) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#564-573 "goto source code")

Requests user attention to the window, this has no effect if the application is already focused. How requesting for user attention manifests is platform dependent, see `UserAttentionType` for details.

Providing `None` will unset the request for user attention. Unsetting the request for user attention might not be done automatically by the WM when the window receives input.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-3)

-   **macOS:** `None` has no effect.

#### pub fn [print](/docs/api/rust/tauri/about:blank#method.print)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#578-580 "goto source code")

Opens the dialog to prints the contents of the webview. Currently only supported on macOS on `wry`. `window.print()` works on all platforms.

#### pub fn [set_resizable](/docs/api/rust/tauri/about:blank#method.set_resizable)(&self, resizable: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#583-589 "goto source code")

Determines if this window should be resizable.

#### pub fn [set_title](/docs/api/rust/tauri/about:blank#method.set_title)(&self, title: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#592-598 "goto source code")

Set this window’s title.

#### pub fn [maximize](/docs/api/rust/tauri/about:blank#method.maximize)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#601-603 "goto source code")

Maximizes this window.

#### pub fn [unmaximize](/docs/api/rust/tauri/about:blank#method.unmaximize)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#606-608 "goto source code")

Un-maximizes this window.

#### pub fn [minimize](/docs/api/rust/tauri/about:blank#method.minimize)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#611-613 "goto source code")

Minimizes this window.

#### pub fn [unminimize](/docs/api/rust/tauri/about:blank#method.unminimize)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#616-618 "goto source code")

Un-minimizes this window.

#### pub fn [show](/docs/api/rust/tauri/about:blank#method.show)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#621-623 "goto source code")

Show this window.

#### pub fn [hide](/docs/api/rust/tauri/about:blank#method.hide)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#626-628 "goto source code")

Hide this window.

#### pub fn [close](/docs/api/rust/tauri/about:blank#method.close)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#631-633 "goto source code")

Closes this window.

#### pub fn [set_decorations](/docs/api/rust/tauri/about:blank#method.set_decorations)(&self, decorations: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#638-644 "goto source code")

Determines if this window should be [decorated](https://en.wikipedia.org/wiki/Window_(computing)#Window_decoration).

#### pub fn [set_always_on_top](/docs/api/rust/tauri/about:blank#method.set_always_on_top)(&self, always_on_top: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#647-653 "goto source code")

Determines if this window should always be on top of other windows.

#### pub fn [set_size](/docs/api/rust/tauri/about:blank#method.set_size)&lt;S: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[Size](/docs/api/rust/tauri/../enum.Size "enum tauri::Size")>>(&self, size: S) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#656-662 "goto source code")

Resizes this window.

#### pub fn [set_min_size](/docs/api/rust/tauri/about:blank#method.set_min_size)&lt;S: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[Size](/docs/api/rust/tauri/../enum.Size "enum tauri::Size")>>(&self, size: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;S>) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#665-671 "goto source code")

Sets this window’s minimum size.

#### pub fn [set_max_size](/docs/api/rust/tauri/about:blank#method.set_max_size)&lt;S: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[Size](/docs/api/rust/tauri/../enum.Size "enum tauri::Size")>>(&self, size: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;S>) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#674-680 "goto source code")

Sets this window’s maximum size.

#### pub fn [set_position](/docs/api/rust/tauri/about:blank#method.set_position)&lt;Pos: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[Position](/docs/api/rust/tauri/../enum.Position "enum tauri::Position")>>(&self, position: Pos) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#683-689 "goto source code")

Sets this window’s position.

#### pub fn [set_fullscreen](/docs/api/rust/tauri/about:blank#method.set_fullscreen)(&self, fullscreen: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#692-698 "goto source code")

Determines if this window should be fullscreen.

#### pub fn [set_focus](/docs/api/rust/tauri/about:blank#method.set_focus)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#701-703 "goto source code")

Bring the window to front and focus.

#### pub fn [set_icon](/docs/api/rust/tauri/about:blank#method.set_icon)(&self, icon: [Icon](/docs/api/rust/tauri/../enum.Icon "enum tauri::Icon")) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#706-708 "goto source code")

Sets this window’ icon.

#### pub fn [set_skip_taskbar](/docs/api/rust/tauri/about:blank#method.set_skip_taskbar)(&self, skip: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#711-717 "goto source code")

Whether to show the window icon in the task bar or not.

#### pub fn [start_dragging](/docs/api/rust/tauri/about:blank#method.start_dragging)(&self) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#720-722 "goto source code")

Starts dragging the window.

## Trait Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#96-104 "goto source code")

#### fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> Self[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#97-103 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl&lt;'de, R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [CommandArg](/docs/api/rust/tauri/../command/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#136-141 "goto source code")

#### fn [from_command](/docs/api/rust/tauri/../command/trait.CommandArg#tymethod.from_command)(command: [CommandItem](/docs/api/rust/tauri/../command/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;Self, [InvokeError](/docs/api/rust/tauri/../struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#138-140 "goto source code")

Grabs the [`Window`](/docs/api/rust/tauri/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../command/struct.CommandItem "CommandItem"). This will never fail.

### impl&lt;R: [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") + [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#87 "goto source code")

#### fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html "type core::fmt::Result")[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#87 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#106-111 "goto source code")

#### fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher")>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H)[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#108-110 "goto source code")

Only use the [`Window`](/docs/api/rust/tauri/struct.Window "Window")’s label to represent its hash.

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Manager](/docs/api/rust/tauri/../trait.Manager "trait tauri::Manager")&lt;R> for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#121 "goto source code")

#### fn [config](/docs/api/rust/tauri/../trait.Manager#method.config)(&self) -> [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[Config](/docs/api/rust/tauri/../struct.Config "struct tauri::Config")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#256-258 "goto source code")

The [`Config`](/docs/api/rust/tauri/../struct.Config "Config") the manager was created with.

#### fn [emit_all](/docs/api/rust/tauri/../trait.Manager#method.emit_all)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone")>(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#261-263 "goto source code")

Emits a event to all windows.

#### fn [emit_to](/docs/api/rust/tauri/../trait.Manager#method.emit_to)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone")>( &self, label: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S ) -> [Result](/docs/api/rust/tauri/../type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#266-270 "goto source code")

Emits an event to a window with the specified label.

#### fn [listen_global](/docs/api/rust/tauri/../trait.Manager#method.listen_global)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(EmittedEvent) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#273-278 "goto source code")

Listen to a global event.

#### fn [once_global](/docs/api/rust/tauri/../trait.Manager#method.once_global)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(EmittedEvent) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#281-286 "goto source code")

Listen to a global event only once.

#### fn [trigger_global](/docs/api/rust/tauri/../trait.Manager#method.trigger_global)(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), data: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>)[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#289-291 "goto source code")

Trigger a global event.

#### fn [unlisten](/docs/api/rust/tauri/../trait.Manager#method.unlisten)(&self, handler_id: EventHandler)[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#294-296 "goto source code")

Remove an event listener.

#### fn [get_window](/docs/api/rust/tauri/../trait.Manager#method.get_window)(&self, label: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#299-301 "goto source code")

Fetch a single window from the manager.

#### fn [windows](/docs/api/rust/tauri/../trait.Manager#method.windows)(&self) -> [HashMap](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String"), [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>>[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#304-306 "goto source code")

Fetch all managed windows.

#### fn [manage](/docs/api/rust/tauri/../trait.Manager#method.manage)&lt;T>(&self, state: T) where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#310-315 "goto source code")

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../struct.Builder#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../trait.Manager#method.manage)

#### fn [state](/docs/api/rust/tauri/../trait.Manager#method.state)&lt;T>(&self) -> [State](/docs/api/rust/tauri/../struct.State "struct tauri::State")&lt;'\_, T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#318-323 "goto source code")

Gets the managed state for the type `T`. Panics if the type is not managed.

#### fn [try_state](/docs/api/rust/tauri/../trait.Manager#method.try_state)&lt;T>(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[State](/docs/api/rust/tauri/../struct.State "struct tauri::State")&lt;'\_, T>> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../../src/tauri/lib.rs#326-331 "goto source code")

Tries to get the managed state for the type `T`. Returns `None` if the type is not managed.

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>> for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#114-119 "goto source code")

#### fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#116-118 "goto source code")

Only use the [`Window`](/docs/api/rust/tauri/struct.Window "Window")’s label to compare equality.

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>

[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#113 "goto source code")

## Auto Trait Implementations

### impl&lt;R = [Wry](/docs/api/rust/tauri/../struct.Wry "struct tauri::Wry")> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>

### impl&lt;R> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>

### impl&lt;R> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;R> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;R = [Wry](/docs/api/rust/tauri/../struct.Wry "struct tauri::Wry")> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Window](/docs/api/rust/tauri/struct.Window "struct tauri::window::Window")&lt;R>

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
  