---
title: Struct tauri::Builder
sidebar_label: struct.Builder
custom_edit_url: null
---

  # Struct tauri::Builder,

```rs
pub struct Builder<R: Runtime> { /* fields omitted */ }
```

Expand description

Builds a Tauri application.

## Implementations

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Builder](/docs/api/rust/tauri/struct.Builder "struct tauri::Builder")&lt;R>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#589-1043 "goto source code")

#### pub fn [new](/docs/api/rust/tauri/about:blank#method.new)() -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#591-608 "goto source code")

Creates a new App builder.

#### pub fn [invoke_handler](/docs/api/rust/tauri/about:blank#method.invoke_handler)&lt;F>(self, invoke_handler: F) -> Self where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")([Invoke](/docs/api/rust/tauri/struct.Invoke "struct tauri::Invoke")&lt;R>) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#611-617 "goto source code")

Defines the JS message handler callback.

#### pub fn [setup](/docs/api/rust/tauri/about:blank#method.setup)&lt;F>(self, setup: F) -> Self where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(&mut [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send")>> + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#620-626 "goto source code")

Defines the setup hook.

#### pub fn [on_page_load](/docs/api/rust/tauri/about:blank#method.on_page_load)&lt;F>(self, on_page_load: F) -> Self where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")([Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>, [PageLoadPayload](/docs/api/rust/tauri/struct.PageLoadPayload "struct tauri::PageLoadPayload")) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#629-635 "goto source code")

Defines the page load hook.

#### pub fn [plugin](/docs/api/rust/tauri/about:blank#method.plugin)&lt;P: [Plugin](/docs/api/rust/tauri/plugin/trait.Plugin "trait tauri::plugin::Plugin")&lt;R> + 'static>(self, plugin: P) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#638-641 "goto source code")

Adds a plugin to the runtime.

#### pub fn [manage](/docs/api/rust/tauri/about:blank#method.manage)&lt;T>(self, state: T) -> Self where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#718-728 "goto source code")

Add `state` to the state managed by the application.

This method can be called any number of times as long as each call refers to a different `T`.

Managed state can be retrieved by any request handler via the [`State`](/docs/api/rust/tauri/struct.State) request guard. In particular, if a value of type `T` is managed by Tauri, adding `State<T>` to the list of arguments in a request handler instructs Tauri to retrieve the managed value.

## Panics

Panics if state of type `T` is already being managed.

## Mutability

Since the managed state is global and must be [`Send`](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "Send") + [`Sync`](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "Sync"), mutations can only happen through interior mutability:

ⓘ

```rs
use std::{collections::HashMap, sync::Mutex};
use tauri::State;
// here we use Mutex to achieve interior mutability
struct Storage(Mutex<HashMap<u64, String>>);
struct Connection;
struct DbConnection(Mutex<Option<Connection>>);

#[tauri::command]

fn connect(connection: State<DbConnection>) {
  // initialize the connection, mutating the state with interior mutability
  *connection.0.lock().unwrap() = Some(Connection {});
}

#[tauri::command]
fn storage_insert(key: u64, value: String, storage: State<Storage>) {
  // mutate the storage behind the Mutex
  storage.0.lock().unwrap().insert(key, value);
}

fn main() {
  Builder::default()
    .manage(Storage(Default::default()))
    .manage(DbConnection(Default::default()))
    .invoke_handler(tauri::generate_handler&#33;[connect, storage_insert])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

## Example

ⓘ

```rs
use tauri::State;

struct MyInt(isize);
struct MyString(String);

#[tauri::command]

fn int_command(state: State<MyInt>) -> String {
    format!("The stateful int is: {}", state.0)
}

#[tauri::command]
fn string_command<'r>(state: State<'r, MyString>) {
    println!("state: {}", state.inner().0);
}

fn main() {
    tauri::Builder::default()
        .manage(MyInt(10))
        .manage(MyString("Hello, managed state!".to_string()))
        .invoke_handler(tauri::generate_handler&#33;[int_command, string_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

#### pub fn [create_window](/docs/api/rust/tauri/about:blank#method.create_window)&lt;F>( self, label: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, url: [WindowUrl](/docs/api/rust/tauri/enum.WindowUrl "enum tauri::WindowUrl"), setup: F ) -> Self where F: [FnOnce](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")(&lt;R::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder, [WebviewAttributes](/docs/api/rust/tauri/struct.WebviewAttributes "struct tauri::WebviewAttributes")) -> [(](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html)&lt;R::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder, [WebviewAttributes](/docs/api/rust/tauri/struct.WebviewAttributes "struct tauri::WebviewAttributes")[)](https://doc.rust-lang.org/1.54.0/std/primitive.tuple.html),[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#731-751 "goto source code")

Creates a new webview window.

#### pub fn [menu](/docs/api/rust/tauri/about:blank#method.menu)(self, menu: [Menu](/docs/api/rust/tauri/struct.Menu "struct tauri::Menu")) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#762-765 "goto source code")

Sets the menu to use on all windows.

#### pub fn [on_menu_event](/docs/api/rust/tauri/about:blank#method.on_menu_event)&lt;F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")([WindowMenuEvent](/docs/api/rust/tauri/struct.WindowMenuEvent "struct tauri::WindowMenuEvent")&lt;R>) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static>( self, handler: F ) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#768-774 "goto source code")

Registers a menu event handler for all windows.

#### pub fn [on_window_event](/docs/api/rust/tauri/about:blank#method.on_window_event)&lt;F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")([GlobalWindowEvent](/docs/api/rust/tauri/struct.GlobalWindowEvent "struct tauri::GlobalWindowEvent")&lt;R>) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static>( self, handler: F ) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#777-783 "goto source code")

Registers a window event handler for all windows.

#### pub fn [register_uri_scheme_protocol](/docs/api/rust/tauri/about:blank#method.register_uri_scheme_protocol)&lt;N: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, H: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(&[AppHandle](/docs/api/rust/tauri/struct.AppHandle "struct tauri::AppHandle")&lt;R>, &[HttpRequest](http/struct.Request.html "struct tauri::http&#x3A;:Request")) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HttpResponse](http/struct.Response.html "struct tauri::http&#x3A;:Response"), [Box](https://doc.rust-lang.org/1.54.0/alloc/boxed/struct.Box.html "struct alloc::boxed::Box")&lt;dyn [Error](https://doc.rust-lang.org/1.54.0/std/error/trait.Error.html "trait std::error::Error")>> + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static>( self, uri_scheme: N, protocol: H ) -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#807-825 "goto source code")

Registers a URI scheme protocol available to all webviews. Leverages [setURLSchemeHandler](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler) on macOS, [AddWebResourceRequestedFilter](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44) on Windows and [webkit-web-context-register-uri-scheme](https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme) on Linux.

## Arguments

-   `uri_scheme` The URI scheme to register, such as `example`.
-   `protocol` the protocol associated with the given URI scheme. It’s a function that takes an URL such as `example://localhost/asset.css`.

#### pub fn [build](/docs/api/rust/tauri/about:blank#method.build)&lt;A: [Assets](/docs/api/rust/tauri/trait.Assets "trait tauri::Assets")>(self, context: [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A>) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::Result")&lt;[App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#829-1036 "goto source code")

Builds the application.

#### pub fn [run](/docs/api/rust/tauri/about:blank#method.run)&lt;A: [Assets](/docs/api/rust/tauri/trait.Assets "trait tauri::Assets")>(self, context: [Context](/docs/api/rust/tauri/struct.Context "struct tauri::Context")&lt;A>) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#1039-1042 "goto source code")

Runs the configured Tauri application.

## Trait Implementations

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Builder](/docs/api/rust/tauri/struct.Builder "struct tauri::Builder")&lt;[Wry](/docs/api/rust/tauri/struct.Wry "struct tauri::Wry")>[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#1054-1058 "goto source code")

Make `Wry` the default `Runtime` for `Builder`

#### fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> Self[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#1055-1057 "goto source code")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

## Auto Trait Implementations

### impl&lt;R> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Builder](/docs/api/rust/tauri/struct.Builder "struct tauri::Builder")&lt;R>

### impl&lt;R> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Builder](/docs/api/rust/tauri/struct.Builder "struct tauri::Builder")&lt;R> where &lt;&lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send"),

### impl&lt;R> \&#33;[Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Builder](/docs/api/rust/tauri/struct.Builder "struct tauri::Builder")&lt;R>

### impl&lt;R> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Builder](/docs/api/rust/tauri/struct.Builder "struct tauri::Builder")&lt;R> where &lt;&lt;R as [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher") as Dispatch>::WindowBuilder: [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin"),

### impl&lt;R> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Builder](/docs/api/rust/tauri/struct.Builder "struct tauri::Builder")&lt;R>

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
  