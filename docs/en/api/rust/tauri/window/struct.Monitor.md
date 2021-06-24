---
title: Struct tauri::window::Monitor
sidebar_label: struct.Monitor
---

# Struct tauri::window::Monitor,\[−]\[src],\[−],−

```rs
pub struct Monitor { /* fields omitted */ }
```

Monitor descriptor.

## Implementations

### `impl Monitor`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#58-79 "goto source code")

#### `pub fn name(&self) -> Option<&String>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#61-63 "goto source code")

Returns a human-readable name of the monitor. Returns None if the monitor doesn’t exist anymore.

#### `pub fn size(&self) -> &PhysicalSize<u32>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#66-68 "goto source code")

Returns the monitor’s resolution.

#### `pub fn position(&self) -> &PhysicalPosition<i32>`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#71-73 "goto source code")

Returns the top-left corner position of the monitor relative to the larger full screen area.

#### `pub fn scale_factor(&self) -> f64`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#76-78 "goto source code")

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

## Trait Implementations

### `impl Clone for Monitor`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#38 "goto source code")

#### `fn clone(&self) -> Monitor`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#38 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Debug for Monitor`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#38 "goto source code")

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#38 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl From<Monitor> for Monitor`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#47-56 "goto source code")

#### `fn from(monitor: RuntimeMonitor) -> Self`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#48-55 "goto source code")

Performs the conversion.

### `impl Serialize for Monitor`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#38 "goto source code")

#### `fn serialize<__S>(&self, __serializer: __S) -> Result<__S::Ok, __S::Error> where __S: Serializer,`[\[src\]](/docs/api/rust/tauri/../../src/tauri/window.rs#38 "goto source code")

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for Monitor`

### `impl Send for Monitor`

### `impl Sync for Monitor`

### `impl Unpin for Monitor`

### `impl UnwindSafe for Monitor`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135 "goto source code")

#### `pub fn type_id(&self) -> TypeId`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213 "goto source code")

#### `pub fn borrow(&self) -> &T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220 "goto source code")

#### `pub fn borrow_mut(&mut self) -> &mutT`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548 "goto source code")

#### `pub fn from(t: T) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540 "goto source code")

#### `pub fn into(self) -> U`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### `impl<T> ToOwned for T where T: Clone,`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#81-93 "goto source code")

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `pub fn to_owned(&self) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#86 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `pub fn clone_into(&self, target: &mutT)`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#90 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590 "goto source code")

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576 "goto source code")

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
