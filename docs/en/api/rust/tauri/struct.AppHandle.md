---
title: Struct tauri::AppHandle
sidebar_label: struct.AppHandle
---

# Struct tauri::AppHandle,\[−]\[src],\[−],−

```rs
pub struct AppHandle<P: Params = Args<String, String, String, String, EmbeddedAssets, Wry>> { /* fields omitted */ }
```

A handle to the currently running application.

This type implements [`Manager`](/docs/api/rust/tauri/../tauri/trait.Manager "Manager") which allows for manipulation of global application items.

## Implementations

### `Params`

#### `create_window`

Creates a new webview window.

```rs
pub fn create_window<F>(
    &self,
    label: P::Label,
    url: WindowUrl,
    setup: F
) -> Result<()> 
where
    F: FnOnce(<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes) -> (<<P::Runtime as Runtime>::Dispatcher as Dispatch>::WindowBuilder, WebviewAttributes), 
```

Defined in: [app.rs:266](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L266)

#### `path_resolver`

The path resolver for the application.

```rs
pub fn path_resolver(&self) -> PathResolver
```

Defined in: [app.rs:266](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L266)

#### `global_shortcut_manager`

Gets a copy of the global shortcut manager instance.

```rs
pub fn global_shortcut_manager(
    &self
) -> <P::Runtime as Runtime>::GlobalShortcutManager
```

Defined in: [app.rs:266](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L266)

#### `clipboard_manager`

Gets a copy of the clipboard manager instance.

```rs
pub fn clipboard_manager(&self) -> <P::Runtime as Runtime>::ClipboardManager
```

Defined in: [app.rs:266](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L266)

#### `config`

Gets the app’s configuration, defined on the `tauri.conf.json` file.

```rs
pub fn config(&self) -> Arc<Config>
```

Defined in: [app.rs:266](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L266)

#### `package_info`

Gets the app’s package information.

```rs
pub fn package_info(&self) -> &PackageInfo
```

Defined in: [app.rs:266](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L266)

```rs
impl<P: Params> AppHandle<P>
```

Defined in: [app.rs:266](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L266)

## Trait Implementations

### `Params`

#### `clone`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

```rs
fn clone(&self) -> Self
```

Defined in: [app.rs:125-134](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L125-134)

#### `clone_from`

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

```rs
pub fn clone_from(&mut self, source: &Self)
```

Defined in: [clone.rs:130](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)

```rs
impl<P: Params> Clone for AppHandle<P>
```

Defined in: [app.rs:124-135](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L124-135)

### `Params`

#### `from_command`

Grabs the [`Window`](/docs/api/rust/tauri/../tauri/window/struct.Window "Window") from the [`CommandItem`](/docs/api/rust/tauri/../tauri/command/struct.CommandItem "CommandItem") and returns the associated [`AppHandle`](/docs/api/rust/tauri/../tauri/struct.AppHandle "AppHandle"). This will never fail.

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Defined in: [app.rs:139-141](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L139-141)

```rs
impl<'de, P: Params> CommandArg<'de, P> for AppHandle<P>
```

Defined in: [app.rs:137-142](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L137-142)

### `Params`

#### `config`

The [`Config`](/docs/api/rust/tauri/../tauri/struct.Config "Config") the manager was created with.

```rs
fn config(&self) -> Arc<Config>
```

Defined in: [lib.rs:247-249](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L247-249)

#### `emit_all`

Emits a event to all windows.

```rs
fn emit_all<E: ?Sized, S>(&self, event: &E, payload: S) -> Result<()> 
where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>,
    S: Serialize + Clone, 
```

Defined in: [lib.rs:252-259](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L252-259)

#### `emit_to`

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

#### `listen_global`

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

#### `once_global`

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

#### `trigger_global`

Trigger a global event.

```rs
fn trigger_global<E: ?Sized>(&self, event: &E, data: Option<String>) 
where
    P::Event: Borrow<E>,
    E: TagRef<P::Event>, 
```

Defined in: [lib.rs:296-302](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L296-302)

#### `unlisten`

Remove an event listener.

```rs
fn unlisten(&self, handler_id: EventHandler)
```

Defined in: [lib.rs:305-307](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L305-307)

#### `get_window`

Fetch a single window from the manager.

```rs
fn get_window<L: ?Sized>(&self, label: &L) -> Option<Window<P>> 
where
    P::Label: Borrow<L>,
    L: TagRef<P::Label>, 
```

Defined in: [lib.rs:310-316](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L310-316)

#### `windows`

Fetch all managed windows.

```rs
fn windows(&self) -> HashMap<P::Label, Window<P>>
```

Defined in: [lib.rs:319-321](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L319-321)

#### `manage`

Add `state` to the state managed by the application. See [`crate::Builder`](/docs/api/rust/tauri/../tauri/struct.Builder#manage "crate::Builder") for instructions. [Read more](/docs/api/rust/tauri/../tauri/trait.Manager#method.manage)

```rs
fn manage<T>(&self, state: T) 
where
    T: Send + Sync + 'static, 
```

Defined in: [lib.rs:325-330](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L325-330)

#### `state`

Gets the managed state for the type `T`.

```rs
fn state<T>(&self) -> State<'_, T> 
where
    T: Send + Sync + 'static, 
```

Defined in: [lib.rs:333-338](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L333-338)

```rs
impl<P: Params> Manager<P> for AppHandle<P>
```

Defined in: [app.rs:153](https://github.com/https://blob/01d4ada/core/tauri/src/app.rs#L153)

## Auto Trait Implementations

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !RefUnwindSafe for AppHandle<P>`

### `impl<P> Send for AppHandle<P>`

### `impl<P> Sync for AppHandle<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync,`

### `impl<P> Unpin for AppHandle<P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Unpin, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Unpin, <<P as Params>::Runtime as Runtime>::Handle: Unpin,`

### `impl<P = Args<String, String, String, String, EmbeddedAssets, Wry>> !UnwindSafe for AppHandle<P>`

## Blanket Implementations

### `Any`

#### `type_id`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

```rs
pub fn type_id(&self) -> TypeId
```

Defined in: [any.rs:132](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)

```rs
impl<T> Any for T 
where
    T: 'static + ?Sized, 
```

Defined in: [any.rs:131-135](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)

### `Borrow`

#### `borrow`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

```rs
pub fn borrow(&self) -> &T
```

Defined in: [borrow.rs:210](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)

```rs
impl<T> Borrow<T> for T 
where
    T: ?Sized, 
```

Defined in: [borrow.rs:208-213](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)

### `BorrowMut`

#### `borrow_mut`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Defined in: [borrow.rs:217](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)

```rs
impl<T> BorrowMut<T> for T 
where
    T: ?Sized, 
```

Defined in: [borrow.rs:216-220](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)

### `From`

#### `from`

Performs the conversion.

```rs
pub fn from(t: T) -> T
```

Defined in: [mod.rs:545](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)

```rs
impl<T> From<T> for T
```

Defined in: [mod.rs:544-548](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)

### `Into`

#### `into`

Performs the conversion.

```rs
pub fn into(self) -> U
```

Defined in: [mod.rs:537](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)

```rs
impl<T, U> Into<U> for T 
where
    U: From<T>, 
```

Defined in: [mod.rs:533-540](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)

### `ToOwned`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

```rs
pub fn to_owned(&self) -> T
```

Defined in: [borrow.rs:86](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)

#### `clone_into`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

```rs
pub fn clone_into(&self, target: &mut T)
```

Defined in: [borrow.rs:90](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

```rs
impl<T> ToOwned for T 
where
    T: Clone, 
```

Defined in: [borrow.rs:81-93](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)

### `TryFrom`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

Performs the conversion.

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Defined in: [mod.rs:587](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)

```rs
impl<T, U> TryFrom<U> for T 
where
    U: Into<T>, 
```

Defined in: [mod.rs:581-590](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)

### `TryInto`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

Performs the conversion.

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Defined in: [mod.rs:573](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)

```rs
impl<T, U> TryInto<U> for T 
where
    U: TryFrom<T>, 
```

Defined in: [mod.rs:567-576](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
