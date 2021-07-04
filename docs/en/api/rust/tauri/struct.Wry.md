---
title: Struct tauri::Wry
sidebar_label: struct.Wry
custom_edit_url: null
---

# Struct tauri::Wry,\[−],\[−],−

```rs
pub struct Wry { /* fields omitted */ }
```

A Tauri \[`Runtime`] wrapper around wry.

## Trait Implementations

### `impl Runtime for Wry`

#### `type Dispatcher = WryDispatcher`

The message dispatcher.

#### `type Handle = WryHandle`

The runtime handle type.

#### `type GlobalShortcutManager = GlobalShortcutManagerHandle`

The global shortcut manager type.

#### `type ClipboardManager = ClipboardManagerWrapper`

The clipboard manager type.

#### `pub fn new() -> Result<Wry, Error>`

Creates a new webview runtime.

#### `pub fn handle(&self) -> <Wry as Runtime>::Handle`

Gets a runtime handle.

#### `pub fn global_shortcut_manager(&self) -> <Wry as Runtime>::GlobalShortcutManager`

Gets the global shortcut manager.

#### `pub fn clipboard_manager(&self) -> <Wry as Runtime>::ClipboardManager`

Gets the clipboard manager.

#### `pub fn create_window<P>( &self, pending: PendingWindow<P> ) -> Result<DetachedWindow<P>, Error> where P: Params<Runtime = Wry>,`

Create a new webview window.

#### `pub fn run<F>(self, callback: F) where F: 'static + Fn(RunEvent),`

Run the webview runtime.

## Auto Trait Implementations

### `impl !RefUnwindSafe for Wry`

### `impl !Send for Wry`

### `impl !Sync for Wry`

### `impl Unpin for Wry`

### `impl !UnwindSafe for Wry`

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
