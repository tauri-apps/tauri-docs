---
title: "struct.WindowConfig"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[config](/docs/api/rust/tauri_api/index.html)::​[WindowConfig](/docs/api/rust/tauri_api/)

    pub struct WindowConfig {
        pub width: i32,
        pub height: i32,
        pub resizable: bool,
        pub title: String,
        pub fullscreen: bool,
    }

The window configuration object.

## Fields

`width: i32`

The window width.

`height: i32`

The window height.

`resizable: bool`

Whether the window is resizable or not.

`title: String`

The window title.

`fullscreen: bool`

Whether the window starts as fullscreen or not.

## Trait Implementations

### `impl Debug for WindowConfig`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [En savoir plus](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'de> Deserialize<'de> for WindowConfig`

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [En savoir plus](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<WindowConfig> for WindowConfig`

#### `fn eq(&self, other: &WindowConfig) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [En savoir plus](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `fn ne(&self, other: &WindowConfig) -> bool`

This method tests for `!=`.

### `impl StructuralPartialEq for WindowConfig`

## Auto Trait Implementations

### `impl RefUnwindSafe for WindowConfig`

### `impl Send for WindowConfig`

### `impl Sync for WindowConfig`

### `impl Unpin for WindowConfig`

### `impl UnwindSafe for WindowConfig`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [En savoir plus](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [En savoir plus](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [En savoir plus](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> DeserializeOwned for T where T: Deserialize<'de>,`

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `fn vzip(self) -> V`
