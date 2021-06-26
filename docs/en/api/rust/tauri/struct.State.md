---
title: Struct tauri::State
sidebar_label: struct.State
custom_edit_url: null
---

# Struct tauri::State,\[−]\[src],\[−],−

```rs
pub struct State<'r, T: Send + Sync + 'static>(_);
```

A guard for a state value.

## Implementations

### `Send`

```rs
impl<'r, T: Send + Sync + 'static> State<'r, T>
```

_Defined in: [state.rs:12-20](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L12-20)_

#### `inner`

```rs
pub fn inner(&self) -> &'r T
```

Retrieve a borrow to the underlying value with a lifetime of `'r`. Using this method is typically unnecessary as `State` implements [`std::ops::Deref`](https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html "std::ops::Deref") with a [`std::ops::Deref::Target`](https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target "std::ops::Deref::Target") of `T`.

_Defined in: [state.rs:17-19](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L17-19)_

## Trait Implementations

### `Send`

```rs
impl<T: Send + Sync + 'static> Clone for State<'_, T>
```

_Defined in: [state.rs:31-35](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L31-35)_

#### `clone`

```rs
fn clone(&self) -> Self
```

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

_Defined in: [state.rs:32-34](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L32-34)_

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)_

### `Send`

```rs
impl<'r, 'de: 'r, T: Send + Sync + 'static, P: Params> CommandArg<'de, P> for State<'r, T>
```

_Defined in: [state.rs:37-42](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L37-42)_

#### `from_command`

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Grabs the [`State`](/docs/api/rust/tauri/../tauri/struct.State "State") from the [`CommandItem`](/docs/api/rust/tauri/../tauri/command/struct.CommandItem "CommandItem"). This will never fail.

_Defined in: [state.rs:39-41](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L39-41)_

### `Send`

```rs
impl<T: Send + Sync + 'static> Deref for State<'_, T>
```

_Defined in: [state.rs:22-29](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L22-29)_

#### `type Target = T`

The resulting type after dereferencing.

#### `deref`

```rs
fn deref(&self) -> &T
```

Dereferences the value.

_Defined in: [state.rs:26-28](https://github.com/https://blob/710a4f9/core/tauri/src/state.rs#L26-28)_

## Auto Trait Implementations

### `impl<'r, T> RefUnwindSafe for State<'r, T> where T: RefUnwindSafe,`

### `impl<'r, T> Send for State<'r, T>`

### `impl<'r, T> Sync for State<'r, T>`

### `impl<'r, T> Unpin for State<'r, T>`

### `impl<'r, T> UnwindSafe for State<'r, T> where T: RefUnwindSafe,`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/710a4f9/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
