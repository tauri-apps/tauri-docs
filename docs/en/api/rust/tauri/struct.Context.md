---
title: "struct.Context"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[Context](/docs/api/rust/tauri/)

```rs
pub struct Context<A: Assets> { /* fields omitted */ }
```

User supplied data required inside of a Tauri application.

# [Stability](/docs/api/rust/tauri/about:blank#stability)

This is the output of the `tauri::generate_context!` macro, and is not considered part of the stable API. Unless you know what you are doing and are prepared for this type to have breaking changes, do not create it yourself.

## Implementations

### `impl<A: Assets> Context<A>`

#### `pub fn config(&self) -> &Config`

The config the application was prepared with.

#### `pub fn config_mut(&mut self) -> &mut Config`

A mutable reference to the config the application was prepared with.

#### `pub fn assets(&self) -> Arc<A>`

The assets to be served directly by Tauri.

#### `pub fn assets_mut(&mut self) -> &mut Arc<A>`

A mutable reference to the assets to be served directly by Tauri.

#### `pub fn default_window_icon(&self) -> Option<&[u8]>`

The default window icon Tauri should use when creating windows.

#### `pub fn default_window_icon_mut(&mut self) -> &mut Option<Vec<u8>>`

A mutable reference to the default window icon Tauri should use when creating windows.

#### `pub fn system_tray_icon(&self) -> Option<&Icon>`

The icon to use on the system tray UI.

#### `pub fn system_tray_icon_mut(&mut self) -> &mut Option<Icon>`

A mutable reference to the icon to use on the system tray UI.

#### `pub fn package_info(&self) -> &PackageInfo`

Package information.

#### `pub fn package_info_mut(&mut self) -> &mut PackageInfo`

A mutable reference to the package information.

#### `pub fn new( config: Config, assets: Arc<A>, default_window_icon: Option<Vec<u8>>, system_tray_icon: Option<Icon>, package_info: PackageInfo ) -> Self`

Create a new [`Context`](/docs/api/rust/tauri/../tauri/struct.Context.html "Context") from the minimal required items.

## Auto Trait Implementations

### `impl<A> RefUnwindSafe for Context<A> where A: RefUnwindSafe,`

### `impl<A> Send for Context<A>`

### `impl<A> Sync for Context<A>`

### `impl<A> Unpin for Context<A>`

### `impl<A> UnwindSafe for Context<A> where A: RefUnwindSafe,`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `pub fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `pub fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `pub fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `pub fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `pub const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `pub unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.init)

#### `pub unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref)

#### `pub unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref_mut)

#### `pub unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.drop)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
