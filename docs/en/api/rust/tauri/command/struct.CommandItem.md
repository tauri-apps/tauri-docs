---
title: Struct tauri::command::CommandItem
sidebar_label: struct.CommandItem
custom_edit_url: null
---

# Struct tauri::command::CommandItem,\[−]\[src],\[−],−

```rs
pub struct CommandItem<'a, P: Params> {
    pub name: &'static str,
    pub key: &'static str,
    pub message: &'a InvokeMessage<P>,
}
```

Represents a custom command.

## Fields

`name: &'static str`

The name of the command, e.g. `handler` on `#[command] fn handler(value: u64)`

`key: &'static str`

The key of the command item, e.g. `value` on `#[command] fn handler(value: u64)`

`message: &'a InvokeMessage<P>`

The [`InvokeMessage`](/docs/api/rust/tauri/../../tauri/struct.InvokeMessage "InvokeMessage") that was passed to this command.

## Trait Implementations

### `Params`

```rs
impl<'de, P: Params> Deserializer<'de> for CommandItem<'de, P>
```

A [`Deserializer`](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html "Deserializer") wrapper around [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem "CommandItem").

If the key doesn’t exist, an error will be returned if the deserialized type is not expecting an optional item. If the key does exist, the value will be called with [`Value`](https://docs.rs/serde_json/1.0.64/serde_json/value/enum.Value.html)’s [`Deserializer`](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html "Deserializer") implementation.

_Defined in: [command.rs:87-146](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L87-146)_

#### `type Error = Error`

The error type that can be returned if some error occurs during deserialization. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#associatedtype.Error)

#### `deserialize_any`

```rs
fn deserialize_any<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Require the `Deserializer` to figure out how to drive the visitor based on what data type is in the input. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_any)

_Defined in: [command.rs:90](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L90)_

#### `deserialize_bool`

```rs
fn deserialize_bool<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `bool` value.

_Defined in: [command.rs:91](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L91)_

#### `deserialize_i8`

```rs
fn deserialize_i8<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting an `i8` value.

_Defined in: [command.rs:92](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L92)_

#### `deserialize_i16`

```rs
fn deserialize_i16<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting an `i16` value.

_Defined in: [command.rs:93](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L93)_

#### `deserialize_i32`

```rs
fn deserialize_i32<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting an `i32` value.

_Defined in: [command.rs:94](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L94)_

#### `deserialize_i64`

```rs
fn deserialize_i64<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting an `i64` value.

_Defined in: [command.rs:95](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L95)_

#### `deserialize_u8`

```rs
fn deserialize_u8<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `u8` value.

_Defined in: [command.rs:96](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L96)_

#### `deserialize_u16`

```rs
fn deserialize_u16<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `u16` value.

_Defined in: [command.rs:97](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L97)_

#### `deserialize_u32`

```rs
fn deserialize_u32<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `u32` value.

_Defined in: [command.rs:98](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L98)_

#### `deserialize_u64`

```rs
fn deserialize_u64<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `u64` value.

_Defined in: [command.rs:99](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L99)_

#### `deserialize_f32`

```rs
fn deserialize_f32<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `f32` value.

_Defined in: [command.rs:100](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L100)_

#### `deserialize_f64`

```rs
fn deserialize_f64<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `f64` value.

_Defined in: [command.rs:101](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L101)_

#### `deserialize_char`

```rs
fn deserialize_char<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a `char` value.

_Defined in: [command.rs:102](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L102)_

#### `deserialize_str`

```rs
fn deserialize_str<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a string value and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_str)

_Defined in: [command.rs:103](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L103)_

#### `deserialize_string`

```rs
fn deserialize_string<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a string value and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_string)

_Defined in: [command.rs:104](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L104)_

#### `deserialize_bytes`

```rs
fn deserialize_bytes<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a byte array and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_bytes)

_Defined in: [command.rs:105](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L105)_

#### `deserialize_byte_buf`

```rs
fn deserialize_byte_buf<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a byte array and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_byte_buf)

_Defined in: [command.rs:106](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L106)_

#### `deserialize_option`

```rs
fn deserialize_option<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting an optional value. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_option)

_Defined in: [command.rs:108-113](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L108-113)_

#### `deserialize_unit`

```rs
fn deserialize_unit<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a unit value.

_Defined in: [command.rs:115](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L115)_

#### `deserialize_unit_struct`

```rs
fn deserialize_unit_struct<V: Visitor<'de>>(
    self, 
    name: &'static str, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a unit struct with a particular name. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_unit_struct)

_Defined in: [command.rs:116](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L116)_

#### `deserialize_newtype_struct`

```rs
fn deserialize_newtype_struct<V: Visitor<'de>>(
    self, 
    name: &'static str, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a newtype struct with a particular name. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_newtype_struct)

_Defined in: [command.rs:117](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L117)_

#### `deserialize_seq`

```rs
fn deserialize_seq<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a sequence of values.

_Defined in: [command.rs:118](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L118)_

#### `deserialize_tuple`

```rs
fn deserialize_tuple<V: Visitor<'de>>(
    self, 
    len: usize, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a sequence of values and knows how many values there are without looking at the serialized data. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple)

_Defined in: [command.rs:119](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L119)_

#### `deserialize_tuple_struct`

```rs
fn deserialize_tuple_struct<V: Visitor<'de>>(
    self, 
    name: &'static str, 
    len: usize, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a tuple struct with a particular name and number of fields. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple_struct)

_Defined in: [command.rs:121-126](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L121-126)_

#### `deserialize_map`

```rs
fn deserialize_map<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a map of key-value pairs.

_Defined in: [command.rs:128](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L128)_

#### `deserialize_struct`

```rs
fn deserialize_struct<V: Visitor<'de>>(
    self, 
    name: &'static str, 
    fields: &'static [&'static str], 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting a struct with a particular name and fields. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_struct)

_Defined in: [command.rs:130-135](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L130-135)_

#### `deserialize_enum`

```rs
fn deserialize_enum<V: Visitor<'de>>(
    self, 
    name: &'static str, 
    fields: &'static [&'static str], 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting an enum value with a particular name and possible variants. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_enum)

_Defined in: [command.rs:137-142](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L137-142)_

#### `deserialize_identifier`

```rs
fn deserialize_identifier<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type is expecting the name of a struct field or the discriminant of an enum variant. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_identifier)

_Defined in: [command.rs:144](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L144)_

#### `deserialize_ignored_any`

```rs
fn deserialize_ignored_any<V: Visitor<'de>>(
    self, 
    visitor: V
) -> Result<V::Value, Self::Error>
```

Hint that the `Deserialize` type needs to deserialize a value whose type doesn’t matter because it is ignored. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_ignored_any)

_Defined in: [command.rs:145](https://github.com/https://blob/710a4f9/core/tauri/src/../command.rs#L145)_

#### `deserialize_i128`

```rs
pub fn deserialize_i128<V>(
    self, 
    visitor: V
) -> Result<<V as Visitor<'de>>::Value, Self::Error> where
    V: Visitor<'de>, 
```

Hint that the `Deserialize` type is expecting an `i128` value. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#method.deserialize_i128)

_Defined in: [mod.rs:947-949](https://github.com/https://blob/710a4f9/core/tauri/src/https://docs.rs/serde/1.0.126/src/serde/de/mod.rs#L947-949)_

#### `deserialize_u128`

```rs
pub fn deserialize_u128<V>(
    self, 
    visitor: V
) -> Result<<V as Visitor<'de>>::Value, Self::Error> where
    V: Visitor<'de>, 
```

Hint that the `Deserialize` type is expecting an `u128` value. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#method.deserialize_u128)

_Defined in: [mod.rs:981-983](https://github.com/https://blob/710a4f9/core/tauri/src/https://docs.rs/serde/1.0.126/src/serde/de/mod.rs#L981-983)_

#### `is_human_readable`

```rs
pub fn is_human_readable(&self) -> bool
```

Determine whether `Deserialize` implementations should expect to deserialize their human-readable form. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#method.is_human_readable)

_Defined in: [mod.rs:1213](https://github.com/https://blob/710a4f9/core/tauri/src/https://docs.rs/serde/1.0.126/src/serde/de/mod.rs#L1213)_

## Auto Trait Implementations

### `impl<'a, P> !RefUnwindSafe for CommandItem<'a, P>`

### `impl<'a, P> Send for CommandItem<'a, P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::Dispatcher: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync,`

### `impl<'a, P> Sync for CommandItem<'a, P> where <<P as Params>::Runtime as Runtime>::ClipboardManager: Sync, <<P as Params>::Runtime as Runtime>::Dispatcher: Sync, <<P as Params>::Runtime as Runtime>::GlobalShortcutManager: Sync, <<P as Params>::Runtime as Runtime>::Handle: Sync,`

### `impl<'a, P> Unpin for CommandItem<'a, P>`

### `impl<'a, P> !UnwindSafe for CommandItem<'a, P>`

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
