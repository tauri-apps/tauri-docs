---
title: Enum tauri::Position
sidebar_label: enum.Position
---

# Enum tauri::Position,\[−],\[−],−

```rs
pub enum Position {
    Physical(PhysicalPosition<i32>),
    Logical(LogicalPosition<f64>),
}
```

A position that’s either physical or logical.

## Variants

`Physical(PhysicalPosition<i32>)`

Physical position.

`Logical(LogicalPosition<f64>)`

Logical position.

## Trait Implementations

### `impl Clone for Position`

#### `pub fn clone(&self) -> Position`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `clone_from`

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

```rs
pub fn clone_from(&mut self, source: &Self)
```

Defined in: [clone.rs:130](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)

### `impl Copy for Position`

### `impl Debug for Position`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'de> Deserialize<'de> for Position`

#### `pub fn deserialize<__D>( __deserializer: __D ) -> Result<Position, <__D as Deserializer<'de>>::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<Position> for Position`

#### `pub fn eq(&self, other: &Position) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &Position) -> bool`

This method tests for `!=`.

### `impl Serialize for Position`

#### `pub fn serialize<__S>( &self, __serializer: __S ) -> Result<<__S as Serializer>::Ok, <__S as Serializer>::Error> where __S: Serializer,`

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

### `impl StructuralPartialEq for Position`

## Auto Trait Implementations

### `impl RefUnwindSafe for Position`

### `impl Send for Position`

### `impl Sync for Position`

### `impl Unpin for Position`

### `impl UnwindSafe for Position`

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

### `CommandArg`

#### `from_command`

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/../tauri/command/trait.CommandArg#tymethod.from_command)

```rs
pub fn from_command(CommandItem<'de, P>) -> Result<D, InvokeError>
```

Defined in: [command.rs:48-51](https://github.com/https://blob/01d4ada/core/tauri/src/command.rs#L48-51)

```rs
impl<'de, D, P> CommandArg<'de, P> for D 
where
    P: Params,
    D: Deserialize<'de>, 
```

Defined in: [command.rs:47-52](https://github.com/https://blob/01d4ada/core/tauri/src/command.rs#L47-52)

### `DeserializeOwned`

```rs
impl<T> DeserializeOwned for T 
where
    T: for<'de> Deserialize<'de>, 
```

Defined in: [mod.rs:603](https://github.com/https://blob/01d4ada/core/tauri/src/https://docs.rs/serde/1.0.126/src/serde/de/mod.rs#L603)

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
