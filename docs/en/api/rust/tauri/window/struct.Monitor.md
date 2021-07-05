---
title: Struct tauri::window::Monitor
sidebar_label: struct.Monitor
custom_edit_url: null
---

# Struct tauri::window::Monitor,\[−]\[src],\[−],−

```rs
pub struct Monitor { /* fields omitted */ }
```

Monitor descriptor.

## Implementations

### `Monitor`

```rs
impl Monitor
```

_Defined in: [window.rs:62-83](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L62-83)_

#### `name`

```rs
pub fn name(&self) -> Option<&String>
```

Returns a human-readable name of the monitor. Returns None if the monitor doesn’t exist anymore.

_Defined in: [window.rs:65-67](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L65-67)_

#### `size`

```rs
pub fn size(&self) -> &PhysicalSize<u32>
```

Returns the monitor’s resolution.

_Defined in: [window.rs:70-72](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L70-72)_

#### `position`

```rs
pub fn position(&self) -> &PhysicalPosition<i32>
```

Returns the top-left corner position of the monitor relative to the larger full screen area.

_Defined in: [window.rs:75-77](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L75-77)_

#### `scale_factor`

```rs
pub fn scale_factor(&self) -> f64
```

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

_Defined in: [window.rs:80-82](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L80-82)_

## Trait Implementations

### `Clone`

```rs
impl Clone for Monitor
```

_Defined in: [window.rs:42](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L42)_

#### `clone`

```rs
fn clone(&self) -> Monitor
```

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

_Defined in: [window.rs:42](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L42)_

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://doc.rust-lang.org/nightly/src/core/clone.rs.html#130)_

### `Debug`

```rs
impl Debug for Monitor
```

_Defined in: [window.rs:42](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L42)_

#### `fmt`

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [window.rs:42](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L42)_

### `From`

```rs
impl From<Monitor> for Monitor
```

_Defined in: [window.rs:51-60](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L51-60)_

#### `from`

```rs
fn from(monitor: RuntimeMonitor) -> Self
```

Performs the conversion.

_Defined in: [window.rs:52-59](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L52-59)_

### `Serialize`

```rs
impl Serialize for Monitor
```

_Defined in: [window.rs:42](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L42)_

#### `serialize`

```rs
fn serialize<__S>(&self, __serializer: __S) -> Result<__S::Ok, __S::Error> where
    __S: Serializer, 
```

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

_Defined in: [window.rs:42](https://github.com/tauri-apps/tauri/blob/af634db/core/tauri/src/window.rs#L42)_

## Auto Trait Implementations

### `impl RefUnwindSafe for Monitor`

### `impl Send for Monitor`

### `impl Sync for Monitor`

### `impl Unpin for Monitor`

### `impl UnwindSafe for Monitor`

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
