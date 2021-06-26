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

_Defined in: [window.rs:58-79](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L58-79)_

#### `name`

```rs
pub fn name(&self) -> Option<&String>
```

Returns a human-readable name of the monitor. Returns None if the monitor doesn’t exist anymore.

_Defined in: [window.rs:61-63](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L61-63)_

#### `size`

```rs
pub fn size(&self) -> &PhysicalSize<u32>
```

Returns the monitor’s resolution.

_Defined in: [window.rs:66-68](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L66-68)_

#### `position`

```rs
pub fn position(&self) -> &PhysicalPosition<i32>
```

Returns the top-left corner position of the monitor relative to the larger full screen area.

_Defined in: [window.rs:71-73](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L71-73)_

#### `scale_factor`

```rs
pub fn scale_factor(&self) -> f64
```

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

_Defined in: [window.rs:76-78](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L76-78)_

## Trait Implementations

### `Clone`

```rs
impl Clone for Monitor
```

_Defined in: [window.rs:38](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L38)_

#### `clone`

```rs
fn clone(&self) -> Monitor
```

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

_Defined in: [window.rs:38](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L38)_

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)_

### `Debug`

```rs
impl Debug for Monitor
```

_Defined in: [window.rs:38](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L38)_

#### `fmt`

```rs
fn fmt(&self, f: &mut Formatter<'_>) -> Result
```

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

_Defined in: [window.rs:38](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L38)_

### `From`

```rs
impl From<Monitor> for Monitor
```

_Defined in: [window.rs:47-56](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L47-56)_

#### `from`

```rs
fn from(monitor: RuntimeMonitor) -> Self
```

Performs the conversion.

_Defined in: [window.rs:48-55](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L48-55)_

### `Serialize`

```rs
impl Serialize for Monitor
```

_Defined in: [window.rs:38](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L38)_

#### `serialize`

```rs
fn serialize<__S>(&self, __serializer: __S) -> Result<__S::Ok, __S::Error> where
    __S: Serializer, 
```

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

_Defined in: [window.rs:38](https://github.com/https://blob/2a65ac1/core/tauri/src/../window.rs#L38)_

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

_Defined in: [any.rs:131-135](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/2a65ac1/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
