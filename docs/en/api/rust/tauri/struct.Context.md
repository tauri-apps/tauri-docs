---
title: Struct tauri::Context
sidebar_label: struct.Context
custom_edit_url: null
---

# Struct tauri::Context,\[−]\[src],\[−],−

```rs
pub struct Context<A: Assets> { /* fields omitted */ }
```

User supplied data required inside of a Tauri application.

# [Stability](/docs/api/rust/tauri/about:blank#stability)

This is the output of the `tauri::generate_context!` macro, and is not considered part of the stable API. Unless you know what you are doing and are prepared for this type to have breaking changes, do not create it yourself.

## Implementations

### `Assets`

```rs
impl<A: Assets> Context<A>
```

_Defined in: [lib.rs:167-245](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L167-245)_

#### `config`

```rs
pub fn config(&self) -> &Config
```

The config the application was prepared with.

_Defined in: [lib.rs:170-172](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L170-172)_

#### `config_mut`

```rs
pub fn config_mut(&mut self) -> &mut Config
```

A mutable reference to the config the application was prepared with.

_Defined in: [lib.rs:176-178](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L176-178)_

#### `assets`

```rs
pub fn assets(&self) -> Arc<A>
```

The assets to be served directly by Tauri.

_Defined in: [lib.rs:182-184](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L182-184)_

#### `assets_mut`

```rs
pub fn assets_mut(&mut self) -> &mut Arc<A>
```

A mutable reference to the assets to be served directly by Tauri.

_Defined in: [lib.rs:188-190](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L188-190)_

#### `default_window_icon`

```rs
pub fn default_window_icon(&self) -> Option<&[u8]

>
```

The default window icon Tauri should use when creating windows.

_Defined in: [lib.rs:194-196](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L194-196)_

#### `default_window_icon_mut`

```rs
pub fn default_window_icon_mut(&mut self) -> &mut Option<Vec<u8>>
```

A mutable reference to the default window icon Tauri should use when creating windows.

_Defined in: [lib.rs:200-202](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L200-202)_

#### `system_tray_icon`

```rs
pub fn system_tray_icon(&self) -> Option<&Icon>
```

The icon to use on the system tray UI.

_Defined in: [lib.rs:206-208](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L206-208)_

#### `system_tray_icon_mut`

```rs
pub fn system_tray_icon_mut(&mut self) -> &mut Option<Icon>
```

A mutable reference to the icon to use on the system tray UI.

_Defined in: [lib.rs:212-214](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L212-214)_

#### `package_info`

```rs
pub fn package_info(&self) -> &PackageInfo
```

Package information.

_Defined in: [lib.rs:218-220](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L218-220)_

#### `package_info_mut`

```rs
pub fn package_info_mut(&mut self) -> &mut PackageInfo
```

A mutable reference to the package information.

_Defined in: [lib.rs:224-226](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L224-226)_

#### `new`

```rs
pub fn new(
    config: Config, 
    assets: Arc<A>, 
    default_window_icon: Option<Vec<u8>>, 
    system_tray_icon: Option<Icon>, 
    package_info: PackageInfo
) -> Self
```

Create a new [`Context`](/docs/api/rust/tauri/../tauri/struct.Context "Context") from the minimal required items.

_Defined in: [lib.rs:230-244](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/lib.rs#L230-244)_

## Auto Trait Implementations

### `impl<A> RefUnwindSafe for Context<A> where A: RefUnwindSafe,`

### `impl<A> Send for Context<A>`

### `impl<A> Sync for Context<A>`

### `impl<A> Unpin for Context<A>`

### `impl<A> UnwindSafe for Context<A> where A: RefUnwindSafe,`

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
