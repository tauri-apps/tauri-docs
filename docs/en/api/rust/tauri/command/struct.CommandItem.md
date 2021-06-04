---
title: "struct.CommandItem"
---

# Struct [tauri](/docs/api/rust/tauri/../index.html)::​[command](/docs/api/rust/tauri/index.html)::​[CommandItem](/docs/api/rust/tauri/)

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

The [`InvokeMessage`](/docs/api/rust/tauri/../../tauri/struct.InvokeMessage.html "InvokeMessage") that was passed to this command.

## Trait Implementations

### `impl<'de, P: Params> Deserializer<'de> for CommandItem<'de, P>`

A [`Deserializer`](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html "Deserializer") wrapper around [`CommandItem`](/docs/api/rust/tauri/../../tauri/command/struct.CommandItem.html "CommandItem").

If the key doesn’t exist, an error will be returned if the deserialized type is not expecting an optional item. If the key does exist, the value will be called with [`Value`](https://docs.rs/serde_json/1.0.64/serde_json/value/enum.Value.html)’s [`Deserializer`](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html "Deserializer") implementation.

#### `type Error = Error`

The error type that can be returned if some error occurs during deserialization. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#associatedtype.Error)

#### `fn deserialize_any<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Require the `Deserializer` to figure out how to drive the visitor based on what data type is in the input. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_any)

#### `fn deserialize_bool<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `bool` value.

#### `fn deserialize_i8<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting an `i8` value.

#### `fn deserialize_i16<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting an `i16` value.

#### `fn deserialize_i32<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting an `i32` value.

#### `fn deserialize_i64<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting an `i64` value.

#### `fn deserialize_u8<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `u8` value.

#### `fn deserialize_u16<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `u16` value.

#### `fn deserialize_u32<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `u32` value.

#### `fn deserialize_u64<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `u64` value.

#### `fn deserialize_f32<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `f32` value.

#### `fn deserialize_f64<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `f64` value.

#### `fn deserialize_char<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a `char` value.

#### `fn deserialize_str<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a string value and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_str)

#### `fn deserialize_string<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a string value and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_string)

#### `fn deserialize_bytes<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a byte array and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_bytes)

#### `fn deserialize_byte_buf<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a byte array and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_byte_buf)

#### `fn deserialize_option<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting an optional value. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_option)

#### `fn deserialize_unit<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a unit value.

#### `fn deserialize_unit_struct<V: Visitor<'de>>( self, name: &'static str, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a unit struct with a particular name. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_unit_struct)

#### `fn deserialize_newtype_struct<V: Visitor<'de>>( self, name: &'static str, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a newtype struct with a particular name. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_newtype_struct)

#### `fn deserialize_seq<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a sequence of values.

#### `fn deserialize_tuple<V: Visitor<'de>>( self, len: usize, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a sequence of values and knows how many values there are without looking at the serialized data. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple)

#### `fn deserialize_tuple_struct<V: Visitor<'de>>( self, name: &'static str, len: usize, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a tuple struct with a particular name and number of fields. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple_struct)

#### `fn deserialize_map<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a map of key-value pairs.

#### `fn deserialize_struct<V: Visitor<'de>>( self, name: &'static str, fields: &'static [&'static str], visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting a struct with a particular name and fields. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_struct)

#### `fn deserialize_enum<V: Visitor<'de>>( self, name: &'static str, fields: &'static [&'static str], visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting an enum value with a particular name and possible variants. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_enum)

#### `fn deserialize_identifier<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type is expecting the name of a struct field or the discriminant of an enum variant. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_identifier)

#### `fn deserialize_ignored_any<V: Visitor<'de>>( self, visitor: V ) -> Result<V::Value, Self::Error>`

Hint that the `Deserialize` type needs to deserialize a value whose type doesn’t matter because it is ignored. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#tymethod.deserialize_ignored_any)

#### `pub fn deserialize_i128<V>( self, visitor: V ) -> Result<<V as Visitor<'de>>::Value, Self::Error> where V: Visitor<'de>,`

Hint that the `Deserialize` type is expecting an `i128` value. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#method.deserialize_i128)

#### `pub fn deserialize_u128<V>( self, visitor: V ) -> Result<<V as Visitor<'de>>::Value, Self::Error> where V: Visitor<'de>,`

Hint that the `Deserialize` type is expecting an `u128` value. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#method.deserialize_u128)

#### `pub fn is_human_readable(&self) -> bool`

Determine whether `Deserialize` implementations should expect to deserialize their human-readable form. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserializer.html#method.is_human_readable)

## Auto Trait Implementations

### `impl<'a, P> !RefUnwindSafe for CommandItem<'a, P>`

### `impl<'a, P> Send for CommandItem<'a, P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Sync,`

### `impl<'a, P> Sync for CommandItem<'a, P> where <<P as Params>::Runtime as Runtime>::Dispatcher: Sync,`

### `impl<'a, P> Unpin for CommandItem<'a, P>`

### `impl<'a, P> !UnwindSafe for CommandItem<'a, P>`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `pub fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `pub fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `pub fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `pub fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `pub const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `pub unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.init)

#### `pub unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref)

#### `pub unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.deref_mut)

#### `pub unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri/about:blank#tymethod.drop)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
