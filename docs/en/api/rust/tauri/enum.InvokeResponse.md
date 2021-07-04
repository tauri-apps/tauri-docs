---
title: Enum tauri::InvokeResponse
sidebar_label: enum.InvokeResponse
custom_edit_url: null
---

# Enum tauri::InvokeResponse,\[−]\[src],\[−],−

```rs
pub enum InvokeResponse {
    Ok(JsonValue),
    Err(InvokeError),
}
```

Response from a [`InvokeMessage`](/docs/api/rust/tauri/../tauri/struct.InvokeMessage "InvokeMessage") passed to the [`InvokeResolver`](/docs/api/rust/tauri/../tauri/struct.InvokeResolver "InvokeResolver").

## Variants

`Ok(JsonValue)`

Resolve the promise.

`Err(InvokeError)`

Reject the promise.

## Implementations

### `InvokeResponse`

```rs
impl InvokeResponse
```

_Defined in: [hooks.rs:85-94](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L85-94)_

#### `into_result`

```rs
pub fn into_result(self) -> Result<JsonValue, JsonValue>
```

Turn a [`InvokeResponse`](/docs/api/rust/tauri/../tauri/enum.InvokeResponse "InvokeResponse") back into a serializable result.

_Defined in: [hooks.rs:88-93](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L88-93)_

## Trait Implementations

### `Debug`

```rs
impl Debug for InvokeResponse
```

_Defined in: [hooks.rs:77](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L77)_

#### `fmt`

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [hooks.rs:77](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L77)_

### `From`

```rs
impl From<InvokeError> for InvokeResponse
```

_Defined in: [hooks.rs:109-113](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L109-113)_

#### `from`

```rs
fn from(error: InvokeError) -> Self
```

Performs the conversion.

_Defined in: [hooks.rs:110-112](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L110-112)_

### `Serialize`

```rs
impl<T: Serialize> From<Result<T, InvokeError>> for InvokeResponse
```

_Defined in: [hooks.rs:96-107](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L96-107)_

#### `from`

```rs
fn from(result: Result<T, InvokeError>) -> Self
```

Performs the conversion.

_Defined in: [hooks.rs:98-106](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/hooks.rs#L98-106)_

## Auto Trait Implementations

### `impl RefUnwindSafe for InvokeResponse`

### `impl Send for InvokeResponse`

### `impl Sync for InvokeResponse`

### `impl Unpin for InvokeResponse`

### `impl UnwindSafe for InvokeResponse`

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
