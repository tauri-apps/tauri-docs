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

#### `into_result`

Turn a [`InvokeResponse`](/docs/api/rust/tauri/../tauri/enum.InvokeResponse "InvokeResponse") back into a serializable result.

```rs
pub fn into_result(self) -> Result<JsonValue, JsonValue>
```

Defined in: [hooks.rs:88-93](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L88-93)

```rs
impl InvokeResponse
```

Defined in: [hooks.rs:85-94](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L85-94)

## Trait Implementations

### `Debug`

#### `fmt`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Defined in: [hooks.rs:77](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L77)

```rs
impl Debug for InvokeResponse
```

Defined in: [hooks.rs:77](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L77)

### `From`

#### `from`

Performs the conversion.

```rs
fn from(error: InvokeError) -> Self
```

Defined in: [hooks.rs:110-112](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L110-112)

```rs
impl From<InvokeError> for InvokeResponse
```

Defined in: [hooks.rs:109-113](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L109-113)

### `Serialize`

#### `from`

Performs the conversion.

```rs
fn from(result: Result<T, InvokeError>) -> Self
```

Defined in: [hooks.rs:98-106](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L98-106)

```rs
impl<T: Serialize> From<Result<T, InvokeError>> for InvokeResponse
```

Defined in: [hooks.rs:96-107](https://github.com/https://blob/01d4ada/core/tauri/src/hooks.rs#L96-107)

## Auto Trait Implementations

### `impl RefUnwindSafe for InvokeResponse`

### `impl Send for InvokeResponse`

### `impl Sync for InvokeResponse`

### `impl Unpin for InvokeResponse`

### `impl UnwindSafe for InvokeResponse`

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
