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

#### `inner`

Retrieve a borrow to the underlying value with a lifetime of `'r`. Using this method is typically unnecessary as `State` implements [`std::ops::Deref`](https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html "std::ops::Deref") with a [`std::ops::Deref::Target`](https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target "std::ops::Deref::Target") of `T`.

```rs
pub fn inner(&self) -> &'r T
```

Defined in: [state.rs:17-19](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L17-19)

```rs
impl<'r, T: Send + Sync + 'static> State<'r, T>
```

Defined in: [state.rs:12-20](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L12-20)

## Trait Implementations

### `Send`

#### `clone`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

```rs
fn clone(&self) -> Self
```

Defined in: [state.rs:32-34](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L32-34)

#### `clone_from`

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

```rs
pub fn clone_from(&mut self, source: &Self)
```

Defined in: [clone.rs:130](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)

```rs
impl<T: Send + Sync + 'static> Clone for State<'_, T>
```

Defined in: [state.rs:31-35](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L31-35)

### `Send`

#### `from_command`

Grabs the [`State`](/docs/api/rust/tauri/../tauri/struct.State "State") from the [`CommandItem`](/docs/api/rust/tauri/../tauri/command/struct.CommandItem "CommandItem"). This will never fail.

```rs
fn from_command(command: CommandItem<'de, P>) -> Result<Self, InvokeError>
```

Defined in: [state.rs:39-41](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L39-41)

```rs
impl<'r, 'de: 'r, T: Send + Sync + 'static, P: Params> CommandArg<'de, P> for State<'r, T>
```

Defined in: [state.rs:37-42](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L37-42)

### `Send`

#### `type Target = T`

The resulting type after dereferencing.

#### `deref`

Dereferences the value.

```rs
fn deref(&self) -> &T
```

Defined in: [state.rs:26-28](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L26-28)

```rs
impl<T: Send + Sync + 'static> Deref for State<'_, T>
```

Defined in: [state.rs:22-29](https://github.com/https://blob/01d4ada/core/tauri/src/state.rs#L22-29)

## Auto Trait Implementations

### `impl<'r, T> RefUnwindSafe for State<'r, T> where T: RefUnwindSafe,`

### `impl<'r, T> Send for State<'r, T>`

### `impl<'r, T> Sync for State<'r, T>`

### `impl<'r, T> Unpin for State<'r, T>`

### `impl<'r, T> UnwindSafe for State<'r, T> where T: RefUnwindSafe,`

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

### `ToOwned`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

```rs
pub fn to_owned(&self) -> T
```

Defined in: [borrow.rs:86](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)

#### `clone_into`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

```rs
pub fn clone_into(&self, target: &mut T)
```

Defined in: [borrow.rs:90](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

```rs
impl<T> ToOwned for T 
where
    T: Clone, 
```

Defined in: [borrow.rs:81-93](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)

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
