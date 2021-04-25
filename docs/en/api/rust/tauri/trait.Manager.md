---
title: "trait.Manager"
---

# Trait [tauri](/docs/api/rust/tauri/index.html)::​[Manager](/docs/api/rust/tauri/)

    pub trait Manager<M: Params>: ManagerBase<M> {
        fn config(&self) -> &Config { ... }

        fn emit_all<S: Serialize + Clone>(
            &self, 
            event: M::Event, 
            payload: Option<S>
        ) -> Result<()> { ... }

        fn emit_to<S: Serialize + Clone>(
            &self, 
            label: &M::Label, 
            event: M::Event, 
            payload: Option<S>
        ) -> Result<()> { ... }

        fn create_window(&mut self, pending: PendingWindow<M>) -> Result<Window<M>> { ... }

        fn listen_global<F>(&self, event: M::Event, handler: F) -> EventHandler
        where
            F: Fn(Event) + Send + 'static,
        { ... }

        fn once_global<F>(&self, event: M::Event, handler: F) -> EventHandler
        where
            F: Fn(Event) + Send + 'static,
        { ... }

        fn trigger_global(&self, event: M::Event, data: Option<String>) { ... }

        fn unlisten(&self, handler_id: EventHandler) { ... }

        fn get_window(&self, label: &M::Label) -> Option<Window<M>> { ... }

        fn windows(&self) -> HashMap<M::Label, Window<M>> { ... }
    }

Manages a running application.

TODO: expand these docs

## Provided methods

### `fn config(&self) -> &Config`

The [`Config`](/docs/api/rust/tauri/../tauri/api/config/struct.Config.html "Config") the manager was created with.

### `fn emit_all<S: Serialize + Clone>( &self, event: M::Event, payload: Option<S> ) -> Result<()>`

Emits a event to all windows.

### `fn emit_to<S: Serialize + Clone>( &self, label: &M::Label, event: M::Event, payload: Option<S> ) -> Result<()>`

Emits an event to a window with the specified label.

### `fn create_window(&mut self, pending: PendingWindow<M>) -> Result<Window<M>>`

Creates a new [`Window`](/docs/api/rust/tauri/../tauri/struct.Window.html "Window") on the [`Runtime`](/docs/api/rust/tauri/../tauri/runtime/trait.Runtime.html "Runtime") and attaches it to the [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager.html "Manager").

### `fn listen_global<F>(&self, event: M::Event, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event.

### `fn once_global<F>(&self, event: M::Event, handler: F) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event only once.

### `fn trigger_global(&self, event: M::Event, data: Option<String>)`

Trigger a global event.

### `fn unlisten(&self, handler_id: EventHandler)`

Remove an event listener.

### `fn get_window(&self, label: &M::Label) -> Option<Window<M>>`

Fetch a single window from the manager.

### `fn windows(&self) -> HashMap<M::Label, Window<M>>`

Fetch all managed windows.

Loading content...

## Implementors

### `impl<P: Params> Manager<P> for App<P>`

### `impl<P: Params> Manager<P> for Window<P>`

Loading content...
