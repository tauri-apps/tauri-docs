---
title: Struct tauri::PhysicalPosition
sidebar_label: struct.PhysicalPosition
---

# Struct tauri::PhysicalPosition,\[−],\[−],−

```rs
pub struct PhysicalPosition<P> {
    pub x: P,
    pub y: P,
}
```

A position represented in physical pixels.

## Fields

`x: P`

Vertical axis value.

`y: P`

Horizontal axis value.

## Implementations

### `impl<P> PhysicalPosition<P> where P: Pixel,`

#### `pub fn to_logical<X>(self, scale_factor: f64) -> LogicalPosition<X> where X: Pixel,`

Converts the physical position to a logical one, using the scale factor.

## Trait Implementations

### `impl<P> Clone for PhysicalPosition<P> where P: Clone,`

#### `pub fn clone(&self) -> PhysicalPosition<P>`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `clone_from`

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

```rs
pub fn clone_from(&mut self, source: &Self)
```

Defined in: [clone.rs:130](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)

### `impl<P> Copy for PhysicalPosition<P> where P: Copy,`

### `impl<P> Debug for PhysicalPosition<P> where P: Debug,`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<P> Default for PhysicalPosition<P> where P: Default,`

#### `pub fn default() -> PhysicalPosition<P>`

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<'de, P> Deserialize<'de> for PhysicalPosition<P> where P: Deserialize<'de>,`

#### `pub fn deserialize<__D>( __deserializer: __D ) -> Result<PhysicalPosition<P>, <__D as Deserializer<'de>>::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl<P> Eq for PhysicalPosition<P> where P: Eq,`

### `impl<T> From<PhysicalPositionWrapper<T>> for PhysicalPosition<T>`

#### `pub fn from(position: PhysicalPositionWrapper<T>) -> PhysicalPosition<T>`

Performs the conversion.

### `impl<P> Hash for PhysicalPosition<P> where P: Hash,`

#### `pub fn hash<__H>(&self, state: &mut__H) where __H: Hasher,`

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash)

#### `hash_slice`

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice)

```rs
pub fn hash_slice<H>(data: &[Self], state: &mut H) 
where
    H: Hasher, 
```

Defined in: [mod.rs:190-192](https://github.com/https://blob/01d4ada/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/hash/mod.rs#L190-192)

### `impl<P> PartialEq<PhysicalPosition<P>> for PhysicalPosition<P> where P: PartialEq<P>,`

#### `pub fn eq(&self, other: &PhysicalPosition<P>) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &PhysicalPosition<P>) -> bool`

This method tests for `!=`.

### `impl<P> Serialize for PhysicalPosition<P> where P: Serialize,`

#### `pub fn serialize<__S>( &self, __serializer: __S ) -> Result<<__S as Serializer>::Ok, <__S as Serializer>::Error> where __S: Serializer,`

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.126/serde/ser/trait.Serialize.html#tymethod.serialize)

### `impl<P> StructuralEq for PhysicalPosition<P>`

### `impl<P> StructuralPartialEq for PhysicalPosition<P>`

## Auto Trait Implementations

### `impl<P> RefUnwindSafe for PhysicalPosition<P> where P: RefUnwindSafe,`

### `impl<P> Send for PhysicalPosition<P> where P: Send,`

### `impl<P> Sync for PhysicalPosition<P> where P: Sync,`

### `impl<P> Unpin for PhysicalPosition<P> where P: Unpin,`

### `impl<P> UnwindSafe for PhysicalPosition<P> where P: UnwindSafe,`

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

### `impl<T> MenuId for T where T: Serialize + Hash + Eq + Debug + Clone + Send + Sync + 'static,`

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
