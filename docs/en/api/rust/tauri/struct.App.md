---
title: Struct tauri::App
sidebar_label: struct.App
custom_edit_url: null
---

# Struct tauri::App,\[−]\[src],\[−],−

```rs
pub struct App<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }
```

The instance of the currently running application.

This type implements [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager "Manager") which allows for manipulation of global application items.

## Implementations

### `Params`

```rs
impl<P: Params> App<P>
```

_Defined in: [app.rs:265](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L265)_

#### `create_window`

```rs
pub fn create_window<F>(
    &self, 
    label: P::Label, 
    url: WindowUrl, 
    setup: F
) -> Result<()> where
    F: FnOnce(<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes), 
```

Creates a new webview window.

_Defined in: [app.rs:265](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L265)_

#### `path_resolver`

```rs
pub fn path_resolver(&self) -> PathResolver
```

The path resolver for the application.

_Defined in: [app.rs:265](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L265)_

#### `global_shortcut_manager`

```rs
pub fn global_shortcut_manager(
    &self
) -> <P::Runtime as Runtime>::GlobalShortcutManager
```

Gets a copy of the global shortcut manager instance.

_Defined in: [app.rs:265](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L265)_

#### `clipboard_manager`

```rs
pub fn clipboard_manager(&self) -> <P::Runtime as Runtime>::ClipboardManager
```

Gets a copy of the clipboard manager instance.

_Defined in: [app.rs:265](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L265)_

#### `config`

```rs
pub fn config(&self) -> Arc<Config>
```

Gets the app’s configuration, defined on the `tauri.conf.json` file.

_Defined in: [app.rs:265](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L265)_

#### `package_info`

```rs
pub fn package_info(&self) -> &PackageInfo
```

Gets the app’s package information.

_Defined in: [app.rs:265](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L265)_

### `Params`

```rs
impl<P: Params> App<P>
```

_Defined in: [app.rs:268-302](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L268-302)_

#### `handle`

```rs
pub fn handle(&self) -> AppHandle<P>
```

Gets a handle to the application instance.

_Defined in: [app.rs:270-272](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L270-272)_

## Trait Implementations

### `Params`

```rs
impl<P: Params> Manager<P> for App<P>
```

_Defined in: [app.rs:183](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/app.rs#L183)_

#### `config`

```rs
fn config(&self) -> Arc<Config>
```

The [`Config`](/docs/api/rust/tauri/../tauri/struct.Config "Config") the manager was created with.

_Defined in: [lib.rs:251-253](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L251-253)_

#### `emit_all`

```rs
fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Emits a event to all windows.

_Defined in: [lib.rs:256-263](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L256-263)_

#### `emit_to`

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

#### `listen_global`

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

#### `once_global`

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

#### `trigger_global`

```rs
fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Trigger a global event.

_Defined in: [lib.rs:300-306](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L300-306)_

#### `unlisten`

```rs
fn unlisten(&self, handler_id: EventHandler)
```

Remove an event listener.

_Defined in: [lib.rs:309-311](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L309-311)_

#### `get_window`

```rs
fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> where
    P::Label: Borrow<L>,
    L: TagRef<P::Label>, 
```

Fetch a single window from the manager.

_Defined in: [lib.rs:314-320](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L314-320)_

#### `windows`

```rs
fn windows(&self) -> HashMap<P::Label, Window<P>>
```

Fetch all managed windows.

_Defined in: [lib.rs:323-325](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L323-325)_

#### `manage`

```rs
fn manage<T>(&self, state: T) where
    T: Send + Sync + 'static, 
```

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../tauri/trait.Manager#method.manage)

_Defined in: [lib.rs:329-334](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L329-334)_

#### `state`

```rs
fn state<T>(&self) -> State<'_, T> where
    T: Send + Sync + 'static, 
```

Gets the managed state for the type `T`.

_Defined in: [lib.rs:337-342](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L337-342)_

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for App<P>`

### `impl<P> Send for App<P> where <P as Params>::Runtime: Send,`

### `impl<P> Sync for App<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync, <P as Params>::Runtime: Sync,`

### `impl<P> Unpin for App<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Unpin, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Unpin, <<P as Params>::Runtime as Runtime>::Handle: Unpin, <P as Params>::Runtime: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for App<P>`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537)_

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
