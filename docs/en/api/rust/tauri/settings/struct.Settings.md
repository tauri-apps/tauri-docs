---
title: Struct tauri::settings::Settings
sidebar_label: struct.Settings
custom_edit_url: null
---

# Struct tauri::settings::Settings,\[−]\[src],\[−],−

```rs
#[non_exhaustive]
pub struct Settings {}
```

Tauri Settings.

## Trait Implementations

### `Default`

```rs
impl Default for Settings
```

_Defined in: [settings.rs:21](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/settings.rs#L21)_

#### `default`

```rs
fn default() -> Settings
```

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

_Defined in: [settings.rs:21](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/settings.rs#L21)_

### `Deserialize`

```rs
impl<'de> Deserialize<'de> for Settings
```

_Defined in: [settings.rs:21](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/settings.rs#L21)_

#### `deserialize`

```rs
fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where
    __D: Deserializer<'de>, 
```

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

_Defined in: [settings.rs:21](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/settings.rs#L21)_

### `Serialize`

```rs
impl Serialize for Settings
```

_Defined in: [settings.rs:21](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/settings.rs#L21)_

#### `serialize`

```rs
fn serialize<__S>(&self, __serializer: __S) -> Result<__S::Ok, __S::Error> where
    __S: Serializer, 
```

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

_Defined in: [settings.rs:21](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/settings.rs#L21)_

## Auto Trait Implementations

### `impl RefUnwindSafe for Settings`

### `impl Send for Settings`

### `impl Sync for Settings`

### `impl Unpin for Settings`

### `impl UnwindSafe for Settings`

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

### `CommandArg`

```rs
impl<'de, D, P> CommandArg<'de, P> for D where
    P: Params,
    D: Deserialize<'de>, 
```

_Defined in: [command.rs:47-52](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/command.rs#L47-52)_

#### `from_command`

```rs
pub fn from_command(CommandItem<'de, P>) -> Result<D, InvokeError>
```

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/../../tauri/command/trait.CommandArg#tymethod.from_command)

_Defined in: [command.rs:48-51](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/command.rs#L48-51)_

### `DeserializeOwned`

```rs
impl<T> DeserializeOwned for T where
    T: for<'de> Deserialize<'de>, 
```

_Defined in: [mod.rs:603](https://docs.rs/serde/1.0.126/src/serde/de/mod.rs.html#603)_

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
