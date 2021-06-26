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

#### `config`

The config the application was prepared with.

```rs
pub fn config(&self) -> &Config
```

Defined in: [lib.rs:166-168](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L166-168)

#### `config_mut`

A mutable reference to the config the application was prepared with.

```rs
pub fn config_mut(&mut self) -> &mut Config
```

Defined in: [lib.rs:172-174](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L172-174)

#### `assets`

The assets to be served directly by Tauri.

```rs
pub fn assets(&self) -> Arc<A>
```

Defined in: [lib.rs:178-180](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L178-180)

#### `assets_mut`

A mutable reference to the assets to be served directly by Tauri.

```rs
pub fn assets_mut(&mut self) -> &mut Arc<A>
```

Defined in: [lib.rs:184-186](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L184-186)

#### `default_window_icon`

The default window icon Tauri should use when creating windows.

```rs
pub fn default_window_icon(&self) -> Option<&[u8]>
```

Defined in: [lib.rs:190-192](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L190-192)

#### `default_window_icon_mut`

A mutable reference to the default window icon Tauri should use when creating windows.

```rs
pub fn default_window_icon_mut(&mut self) -> &mut Option<Vec<u8>>
```

Defined in: [lib.rs:196-198](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L196-198)

#### `system_tray_icon`

The icon to use on the system tray UI.

```rs
pub fn system_tray_icon(&self) -> Option<&Icon>
```

Defined in: [lib.rs:202-204](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L202-204)

#### `system_tray_icon_mut`

A mutable reference to the icon to use on the system tray UI.

```rs
pub fn system_tray_icon_mut(&mut self) -> &mut Option<Icon>
```

Defined in: [lib.rs:208-210](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L208-210)

#### `package_info`

Package information.

```rs
pub fn package_info(&self) -> &PackageInfo
```

Defined in: [lib.rs:214-216](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L214-216)

#### `package_info_mut`

A mutable reference to the package information.

```rs
pub fn package_info_mut(&mut self) -> &mut PackageInfo
```

Defined in: [lib.rs:220-222](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L220-222)

#### `new`

Create a new [`Context`](/docs/api/rust/tauri/../tauri/struct.Context "Context") from the minimal required items.

```rs
pub fn new(
    config: Config,
    assets: Arc<A>,
    default_window_icon: Option<Vec<u8>>,
    system_tray_icon: Option<Icon>,
    package_info: PackageInfo
) -> Self
```

Defined in: [lib.rs:226-240](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L226-240)

```rs
impl<A: Assets> Context<A>
```

Defined in: [lib.rs:163-241](https://github.com/https://blob/01d4ada/core/tauri/src/lib.rs#L163-241)

## Auto Trait Implementations

### `impl<A> RefUnwindSafe for Context<A> where A: RefUnwindSafe,`

### `impl<A> Send for Context<A>`

### `impl<A> Sync for Context<A>`

### `impl<A> Unpin for Context<A>`

### `impl<A> UnwindSafe for Context<A> where A: RefUnwindSafe,`

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
