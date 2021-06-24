---
title: Trait tauri::Manager
sidebar_label: trait.Manager
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

The [`Config`](/docs/api/rust/tauri/../tauri/struct.Config "Config") the manager was created with.

```rs
fn config(&self) -> Arc<Config>
```

Defined in: [lib.rs:247-249](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L247-249)

### `emit_all`

Emits a event to all windows.

```rs
fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> 
where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Defined in: [lib.rs:252-259](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L252-259)

### `emit_to`

Emits an event to a window with the specified label.

```rs
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
```

Defined in: [lib.rs:262-277](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L262-277)

### `listen_global`

Listen to a global event.

```rs
fn listen_global<E: Into<P::Event>, F>(
    &self,
    event: E,
    handler: F
) -> EventHandler 
where
    F: Fn(Event) + Send + 'static, 
```

Defined in: [lib.rs:280-285](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L280-285)

### `once_global`

Listen to a global event only once.

```rs
fn once_global<E: Into<P::Event>, F>(
    &self,
    event: E,
    handler: F
) -> EventHandler 
where
    F: Fn(Event) + Send + 'static, 
```

Defined in: [lib.rs:288-293](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L288-293)

### `trigger_global`

Trigger a global event.

```rs
fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) 
where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Defined in: [lib.rs:296-302](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L296-302)

### `unlisten`

Remove an event listener.

```rs
fn unlisten(&self, handler_id: EventHandler)
```

Defined in: [lib.rs:305-307](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L305-307)

### `get_window`

Fetch a single window from the manager.

```rs
fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> 
where
    P::Label: Borrow<L>,
    L: TagRef<P::Label>, 
```

Defined in: [lib.rs:310-316](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L310-316)

### `windows`

Fetch all managed windows.

```rs
fn windows(&self) -> HashMap<P::Label, Window<P>>
```

Defined in: [lib.rs:319-321](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L319-321)

### `manage`

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder#manage "crate::Builder") for instructions.

```rs
fn manage<T>(&self, state: T) 
where
    T: Send + Sync + 'static, 
```

Defined in: [lib.rs:325-330](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L325-330)

### `state`

Gets the managed state for the type `T`.

```rs
fn state<T>(&self) -> State<'_, T> 
where
    T: Send + Sync + 'static, 
```

Defined in: [lib.rs:333-338](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L333-338)

## Implementors

### `Params`

```rs
impl<P: Params> Manager<P> for App<P>
```

Defined in: [app.rs:183](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L183)

### `Params`

```rs
impl<P: Params> Manager<P> for AppHandle<P>
```

Defined in: [app.rs:153](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L153)

### `Params`

```rs
impl<P: Params> Manager<P> for Window<P>
```

Defined in: [window.rs:121](https://github.com/https://blob/01d4ada/core/tauri/src/window.rs#L121)
