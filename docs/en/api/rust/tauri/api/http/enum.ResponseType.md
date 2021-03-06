---
title: Enum tauri::api::http::ResponseType
sidebar_label: enum.ResponseType
custom_edit_url: null
---

# Enum tauri::api::http&#x3A;:ResponseType,\[−]\[src],\[−],−

```rs
#[repr(u16)]

#[non_exhaustive]pub enum ResponseType {
    Json,
    Text,
    Binary,
}
```

The request’s response type

## Variants (Non-exhaustive)

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`Json`

Read the response as JSON

`Text`

Read the response as text

`Binary`

Read the response as binary

## Trait Implementations

### `Clone`

```rs
impl Clone for ResponseType
```

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

#### `clone`

```rs
fn clone(&self) -> ResponseType
```

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://doc.rust-lang.org/nightly/src/core/clone.rs.html#130)_

### `Debug`

```rs
impl Debug for ResponseType
```

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

#### `fmt`

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

### `Deserialize`

```rs
impl<'de> Deserialize<'de> for ResponseType
```

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

#### `deserialize`

```rs
fn deserialize<D>(deserializer: D) -> Result<Self, D::Error> where
    D: Deserializer<'de>, 
```

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

### `Serialize`

```rs
impl Serialize for ResponseType
```

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

#### `serialize`

```rs
fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error> where
    S: Serializer, 
```

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

_Defined in: [http.rs:186](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/http.rs#L186)_

## Auto Trait Implementations

### `impl RefUnwindSafe for ResponseType`

### `impl Send for ResponseType`

### `impl Sync for ResponseType`

### `impl Unpin for ResponseType`

### `impl UnwindSafe for ResponseType`

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

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../../tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/../../../tauri/command/trait.CommandArg#tymethod.from_command)

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

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

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
