---
title: "struct.WindowConfig"
---

# Struct [tauri](/docs/api/rust/tauri/../index.html)::​[config](/docs/api/rust/tauri/index.html)::​[WindowConfig](/docs/api/rust/tauri/)

    pub struct WindowConfig {
        pub width: i32,
        pub height: i32,
        pub resizable: bool,
        pub title: String,
        pub fullscreen: bool,
    }

## Fields

`width: i32``height: i32``resizable: bool``title: String``fullscreen: bool`

## Trait Implementations

### `impl Clone for WindowConfig`

#### `fn clone(&self) -> WindowConfig`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Debug for WindowConfig`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'de> Deserialize<'de> for WindowConfig`

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<WindowConfig> for WindowConfig`

#### `fn eq(&self, other: &WindowConfig) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

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

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> DeserializeOwned for T where T: Deserialize<'de>,`

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `fn to_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `fn clone_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

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

      