---
title: Trait tauri::Manager
sidebar_label: trait.Manager
custom_edit_url: null
---

# Trait tauri::Manager,\[−]\[src],\[−],−

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

### `config`

```rs
fn config(&self) -> Arc<Config>
```

The [`Config`](/docs/api/rust/tauri/../tauri/struct.Config "Config") the manager was created with.

_Defined in: [lib.rs:251-253](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L251-253)_

### `emit_all`

```rs
fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Emits a event to all windows.

_Defined in: [lib.rs:256-263](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L256-263)_

### `emit_to`

```rs
fn emit_to<E: ?Sized, L: ?Sized, S: Serialize + Clone>(
    &self, 
    label: &L, 
    event: &E, 
    payload: S
) -> Result<()> where
    P::Label: Borrow<L>,
    P::Event: Borrow<E>,
    L: TagRef<P::Label>,
    E: TagRef<P::Event>, 
```

Emits an event to a window with the specified label.

_Defined in: [lib.rs:266-281](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L266-281)_

### `listen_global`

```rs
fn listen_global<E: Into<P::Event>, F>(
    &self, 
    event: E, 
    handler: F
) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to a global event.

_Defined in: [lib.rs:284-289](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L284-289)_

### `once_global`

```rs
fn once_global<E: Into<P::Event>, F>(
    &self, 
    event: E, 
    handler: F
) -> EventHandler where
    F: Fn(Event) + Send + 'static, 
```

Listen to a global event only once.

_Defined in: [lib.rs:292-297](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L292-297)_

### `trigger_global`

```rs
fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Trigger a global event.

_Defined in: [lib.rs:300-306](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L300-306)_

### `unlisten`

```rs
fn unlisten(&self, handler_id: EventHandler)
```

Remove an event listener.

_Defined in: [lib.rs:309-311](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L309-311)_

### `get_window`

```rs
fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where
    P::Label: Borrow<L>,
    L: TagRef<P::Label>, 
```

Fetch a single window from the manager.

_Defined in: [lib.rs:314-320](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L314-320)_

### `windows`

```rs
fn windows(&self) -> HashMap<P::Label, Window<P>>
```

Fetch all managed windows.

_Defined in: [lib.rs:323-325](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L323-325)_

### `manage`

```rs
fn manage<T>(&self, state: T) where
    T: Send + Sync + 'static, 
```

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder#manage "crate::Builder") for instructions.

_Defined in: [lib.rs:329-334](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L329-334)_

### `state`

```rs
fn state<T>(&self) -> State<'_, T> where
    T: Send + Sync + 'static, 
```

Gets the managed state for the type `T`.

_Defined in: [lib.rs:337-342](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L337-342)_

## Implementors

### `Params`

```rs
impl<P: Params> Manager<P> for App<P>
```

_Defined in: [app.rs:183](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L183)_

### `Params`

```rs
impl<P: Params> Manager<P> for AppHandle<P>
```

_Defined in: [app.rs:153](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L153)_

### `Params`

```rs
impl<P: Params> Manager<P> for Window<P>
```

_Defined in: [window.rs:125](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L125)_
