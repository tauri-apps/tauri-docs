---
title: "trait.Manager"
---

# Trait [tauri](/docs/api/rust/tauri/index.html)::​[Manager](/docs/api/rust/tauri/)

```rs
pub trait Manager<P: Params>: ManagerBase<P> {
    fn config(&self) -> Arc<Config> { ... }

    fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()>
    where
        P::Event: Borrow<E>,
        E: TagRef<P::Event>,
        S: Serialize + Clone,
    { ... }

    fn emit_to<E: ?Sized, L: ?Sized, S: Serialize + Clone>(
        &self, 
        label: &L, 
        event: &E, 
        payload: S
    ) -> Result<()>
    where
        P::Label: Borrow<L>,
        P::Event: Borrow<E>,
        L: TagRef<P::Label>,
        E: TagRef<P::Event>,
    { ... }

    fn listen_global<E: Into<P::Event>, F>(
        &self, 
        event: E, 
        handler: F
    ) -> EventHandler
    where
        F: Fn(Event) + Send + 'static,
    { ... }

    fn once_global<E: Into<P::Event>, F>(
        &self, 
        event: E, 
        handler: F
    ) -> EventHandler
    where
        F: Fn(Event) + Send + 'static,
    { ... }

    fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>)
    where
        P::Event: Borrow<E>,
        E: TagRef<P::Event>,
    { ... }

    fn unlisten(&self, handler_id: EventHandler) { ... }

    fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>>
    where
        P::Label: Borrow<L>,
        L: TagRef<P::Label>,
    { ... }

    fn windows(&self) -> HashMap<P::Label, Window<P>> { ... }

    fn manage<T>(&self, state: T)
    where
        T: Send + Sync + 'static,
    { ... }

    fn state<T>(&self) -> State<'_, T>
    where
        T: Send + Sync + 'static,
    { ... }
}
```

Manages a running application.

## Provided methods

### `fn config(&self) -> Arc<Config>`

The [`Config`](/docs/api/rust/tauri/../tauri/struct.Config.html "Config") the manager was created with.

### `fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where P::Event: Borrow<E>, E: TagRef<P::Event>, S: Serialize + Clone,`

Emits a event to all windows.

### `fn emit_to<E: ?Sized, L: ?Sized, S: Serialize + Clone>( &self, label: &L, event: &E, payload: S ) -> Result<()> where P::Label: Borrow<L>, P::Event: Borrow<E>, L: TagRef<P::Label>, E: TagRef<P::Event>,`

Emits an event to a window with the specified label.

### `fn listen_global<E: Into<P::Event>, F>( &self, event: E, handler: F ) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event.

### `fn once_global<E: Into<P::Event>, F>( &self, event: E, handler: F ) -> EventHandler where F: Fn(Event) + Send + 'static,`

Listen to a global event only once.

### `fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where P::Event: Borrow<E>, E: TagRef<P::Event>,`

Trigger a global event.

### `fn unlisten(&self, handler_id: EventHandler)`

Remove an event listener.

### `fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where P::Label: Borrow<L>, L: TagRef<P::Label>,`

Fetch a single window from the manager.

### `fn windows(&self) -> HashMap<P::Label, Window<P>>`

Fetch all managed windows.

### `fn manage<T>(&self, state: T) where T: Send + Sync + 'static,`

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder.html#manage "crate::Builder") for instructions.

### `fn state<T>(&self) -> State<'_, T> where T: Send + Sync + 'static,`

Gets the managed state for the type `T`.

Loading content...

## Implementors

### `impl<P: Params> Manager<P> for App<P>`

### `impl<P: Params> Manager<P> for AppHandle<P>`

### `impl<P: Params> Manager<P> for Window<P>`

Loading content...
