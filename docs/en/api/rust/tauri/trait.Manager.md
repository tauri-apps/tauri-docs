---
title: Trait tauri::Manager
sidebar_label: trait.Manager
custom_edit_url: null
---

  # Trait tauri::Manager,

```rs
pub trait Manager<R: Runtime>: ManagerBase<R> {
    fn config(&self) -> Arc<Config> { ... }

    fn emit_all<S: Serialize + Clone>(
        &self, 
        event: &str, 
        payload: S
    ) -> Result<()> { ... }

    fn emit_to<S: Serialize + Clone>(
        &self, 
        label: &str, 
        event: &str, 
        payload: S
    ) -> Result<()> { ... }

    fn listen_global<F>(
        &self, 
        event: impl Into<String>, 
        handler: F
    ) -> EventHandler
    where
        F: Fn(EmittedEvent) + Send + 'static,
    { ... }

    fn once_global<F>(
        &self, 
        event: impl Into<String>, 
        handler: F
    ) -> EventHandler
    where
        F: Fn(EmittedEvent) + Send + 'static,
    { ... }

    fn trigger_global(&self, event: &str, data: Option<String>) { ... }

    fn unlisten(&self, handler_id: EventHandler) { ... }

    fn get_window(&self, label: &str) -> Option<Window<R>> { ... }

    fn windows(&self) -> HashMap<String, Window<R>> { ... }

    fn manage<T>(&self, state: T)
    where
        T: Send + Sync + 'static,
    { ... }

    fn state<T>(&self) -> State<'_, T>
    where
        T: Send + Sync + 'static,
    { ... }

    fn try_state<T>(&self) -> Option<State<'_, T>>
    where
        T: Send + Sync + 'static,
    { ... }
}
```

Expand description

Manages a running application.

## Provided methods

#### fn [config](/docs/api/rust/tauri/about:blank#method.config)(&self) -> [Arc](https://doc.rust-lang.org/1.54.0/alloc/sync/struct.Arc.html "struct alloc::sync::Arc")&lt;[Config](/docs/api/rust/tauri/struct.Config "struct tauri::Config")>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#256-258 "goto source code")

The [`Config`](/docs/api/rust/tauri/struct.Config "Config") the manager was created with.

#### fn [emit_all](/docs/api/rust/tauri/about:blank#method.emit_all)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone")>(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#261-263 "goto source code")

Emits a event to all windows.

#### fn [emit_to](/docs/api/rust/tauri/about:blank#method.emit_to)&lt;S: [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") + [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone")>( &self, label: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), payload: S ) -> [Result](/docs/api/rust/tauri/type.Result "type tauri::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html)>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#266-270 "goto source code")

Emits an event to a window with the specified label.

#### fn [listen_global](/docs/api/rust/tauri/about:blank#method.listen_global)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(EmittedEvent) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#273-278 "goto source code")

Listen to a global event.

#### fn [once_global](/docs/api/rust/tauri/about:blank#method.once_global)&lt;F>(&self, event: impl [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>, handler: F) -> EventHandler where F: [Fn](https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html "trait core::ops::function::Fn")(EmittedEvent) + [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#281-286 "goto source code")

Listen to a global event only once.

#### fn [trigger_global](/docs/api/rust/tauri/about:blank#method.trigger_global)(&self, event: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), data: [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>)[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#289-291 "goto source code")

Trigger a global event.

#### fn [unlisten](/docs/api/rust/tauri/about:blank#method.unlisten)(&self, handler_id: EventHandler)[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#294-296 "goto source code")

Remove an event listener.

#### fn [get_window](/docs/api/rust/tauri/about:blank#method.get_window)(&self, label: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#299-301 "goto source code")

Fetch a single window from the manager.

#### fn [windows](/docs/api/rust/tauri/about:blank#method.windows)(&self) -> [HashMap](https://doc.rust-lang.org/1.54.0/std/collections/hash/map/struct.HashMap.html "struct std::collections::hash::map::HashMap")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String"), [Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>>[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#304-306 "goto source code")

Fetch all managed windows.

#### fn [manage](/docs/api/rust/tauri/about:blank#method.manage)&lt;T>(&self, state: T) where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#310-315 "goto source code")

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/struct.Builder#manage "crate::Builder") for instructions.

#### fn [state](/docs/api/rust/tauri/about:blank#method.state)&lt;T>(&self) -> [State](/docs/api/rust/tauri/struct.State "struct tauri::State")&lt;'\_, T> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#318-323 "goto source code")

Gets the managed state for the type `T`. Panics if the type is not managed.

#### fn [try_state](/docs/api/rust/tauri/about:blank#method.try_state)&lt;T>(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[State](/docs/api/rust/tauri/struct.State "struct tauri::State")&lt;'\_, T>> where T: [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") + [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") + 'static,[\[src\]](/docs/api/rust/tauri/../src/tauri/lib.rs#326-331 "goto source code")

Tries to get the managed state for the type `T`. Returns `None` if the type is not managed.

## Implementors

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Manager](/docs/api/rust/tauri/trait.Manager "trait tauri::Manager")&lt;R> for [App](/docs/api/rust/tauri/struct.App "struct tauri::App")&lt;R>

[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#308 "goto source code")

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Manager](/docs/api/rust/tauri/trait.Manager "trait tauri::Manager")&lt;R> for [AppHandle](/docs/api/rust/tauri/struct.AppHandle "struct tauri::AppHandle")&lt;R>

[\[src\]](/docs/api/rust/tauri/../src/tauri/app.rs#278 "goto source code")

### impl&lt;R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime")> [Manager](/docs/api/rust/tauri/trait.Manager "trait tauri::Manager")&lt;R> for [Window](/docs/api/rust/tauri/window/struct.Window "struct tauri::window::Window")&lt;R>

[\[src\]](/docs/api/rust/tauri/../src/tauri/window.rs#121 "goto source code")
  