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

_Defined in: [lib.rs:247-249](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L247-249)_

### `emit_all`

```rs
fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Emits a event to all windows.

_Defined in: [lib.rs:252-259](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L252-259)_

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

_Defined in: [lib.rs:262-277](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L262-277)_

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

_Defined in: [lib.rs:280-285](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L280-285)_

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

_Defined in: [lib.rs:288-293](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L288-293)_

### `trigger_global`

```rs
fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Trigger a global event.

_Defined in: [lib.rs:296-302](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L296-302)_

### `unlisten`

```rs
fn unlisten(&self, handler_id: EventHandler)
```

Remove an event listener.

_Defined in: [lib.rs:305-307](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L305-307)_

### `get_window`

```rs
fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where
    P::Label: Borrow<L>,
    L: TagRef<P::Label>, 
```

Fetch a single window from the manager.

_Defined in: [lib.rs:310-316](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L310-316)_

### `windows`

```rs
fn windows(&self) -> HashMap<P::Label, Window<P>>
```

Fetch all managed windows.

_Defined in: [lib.rs:319-321](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L319-321)_

### `manage`

```rs
fn manage<T>(&self, state: T) where
    T: Send + Sync + 'static, 
```

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder#manage "crate::Builder") for instructions.

_Defined in: [lib.rs:325-330](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L325-330)_

### `state`

```rs
fn state<T>(&self) -> State<'_, T> where
    T: Send + Sync + 'static, 
```

Gets the managed state for the type `T`.

_Defined in: [lib.rs:333-338](https://github.com/https://blob/2a65ac1/core/tauri/src/lib.rs#L333-338)_

## Implementors

### `Params`

```rs
impl<P: Params> Manager<P> for App<P>
```

_Defined in: [app.rs:183](https://github.com/https://blob/2a65ac1/core/tauri/src/app.rs#L183)_

### `Params`

```rs
impl<P: Params> Manager<P> for AppHandle<P>
```

_Defined in: [app.rs:153](https://github.com/https://blob/2a65ac1/core/tauri/src/app.rs#L153)_

### `Params`

```rs
impl<P: Params> Manager<P> for Window<P>
```

_Defined in: [window.rs:121](https://github.com/https://blob/2a65ac1/core/tauri/src/window.rs#L121)_
