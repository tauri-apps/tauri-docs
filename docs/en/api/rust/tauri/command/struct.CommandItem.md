---
title: Struct tauri::command::CommandItem
sidebar_label: struct.CommandItem
custom_edit_url: null
---

  # Struct tauri::command::CommandItem,

```rs
pub struct CommandItem<'a, R: Runtime> {
    pub name: &'static str,
    pub key: &'static str,
    pub message: &'a InvokeMessage<R>,
}
```

Expand description

Represents a custom command.

## Fields

`name: &'static str`

The name of the command, e.g. `handler` on `#[command] fn handler(value: u64)`

`key: &'static str`

The key of the command item, e.g. `value` on `#[command] fn handler(value: u64)`

`message: &'a InvokeMessage<R>`

The [`InvokeMessage`](/docs/api/rust/tauri/../struct.InvokeMessage "InvokeMessage") that was passed to this command.

## Trait Implementations

### impl&lt;'de, R: [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")> [Deserializer](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de> for [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#91-150 "goto source code")

A [`Deserializer`](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html "Deserializer") wrapper around [`CommandItem`](/docs/api/rust/tauri/struct.CommandItem "CommandItem").

If the key doesn’t exist, an error will be returned if the deserialized type is not expecting an optional item. If the key does exist, the value will be called with [`Value`](https://docs.rs/serde_json/1.0.66/serde_json/value/enum.Value.html)’s [`Deserializer`](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html "Deserializer") implementation.

#### type [Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error) = [Error](https://docs.rs/serde_json/1.0.66/serde_json/error/struct.Error.html "struct serde_json::error::Error")

The error type that can be returned if some error occurs during deserialization. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error)

#### fn [deserialize_any](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_any)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#94 "goto source code")

Require the `Deserializer` to figure out how to drive the visitor based on what data type is in the input. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_any)

#### fn [deserialize_bool](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_bool)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#95 "goto source code")

Hint that the `Deserialize` type is expecting a `bool` value.

#### fn [deserialize_i8](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_i8)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#96 "goto source code")

Hint that the `Deserialize` type is expecting an `i8` value.

#### fn [deserialize_i16](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_i16)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#97 "goto source code")

Hint that the `Deserialize` type is expecting an `i16` value.

#### fn [deserialize_i32](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_i32)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#98 "goto source code")

Hint that the `Deserialize` type is expecting an `i32` value.

#### fn [deserialize_i64](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_i64)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#99 "goto source code")

Hint that the `Deserialize` type is expecting an `i64` value.

#### fn [deserialize_u8](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_u8)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#100 "goto source code")

Hint that the `Deserialize` type is expecting a `u8` value.

#### fn [deserialize_u16](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_u16)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#101 "goto source code")

Hint that the `Deserialize` type is expecting a `u16` value.

#### fn [deserialize_u32](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_u32)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#102 "goto source code")

Hint that the `Deserialize` type is expecting a `u32` value.

#### fn [deserialize_u64](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_u64)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#103 "goto source code")

Hint that the `Deserialize` type is expecting a `u64` value.

#### fn [deserialize_f32](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_f32)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#104 "goto source code")

Hint that the `Deserialize` type is expecting a `f32` value.

#### fn [deserialize_f64](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_f64)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#105 "goto source code")

Hint that the `Deserialize` type is expecting a `f64` value.

#### fn [deserialize_char](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_char)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#106 "goto source code")

Hint that the `Deserialize` type is expecting a `char` value.

#### fn [deserialize_str](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_str)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#107 "goto source code")

Hint that the `Deserialize` type is expecting a string value and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_str)

#### fn [deserialize_string](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_string)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#108 "goto source code")

Hint that the `Deserialize` type is expecting a string value and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_string)

#### fn [deserialize_bytes](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_bytes)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#109 "goto source code")

Hint that the `Deserialize` type is expecting a byte array and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_bytes)

#### fn [deserialize_byte_buf](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_byte_buf)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#110 "goto source code")

Hint that the `Deserialize` type is expecting a byte array and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_byte_buf)

#### fn [deserialize_option](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_option)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#112-117 "goto source code")

Hint that the `Deserialize` type is expecting an optional value. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_option)

#### fn [deserialize_unit](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_unit)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#119 "goto source code")

Hint that the `Deserialize` type is expecting a unit value.

#### fn [deserialize_unit_struct](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_unit_struct)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, name: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#120 "goto source code")

Hint that the `Deserialize` type is expecting a unit struct with a particular name. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_unit_struct)

#### fn [deserialize_newtype_struct](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_newtype_struct)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, name: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#121 "goto source code")

Hint that the `Deserialize` type is expecting a newtype struct with a particular name. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_newtype_struct)

#### fn [deserialize_seq](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_seq)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#122 "goto source code")

Hint that the `Deserialize` type is expecting a sequence of values.

#### fn [deserialize_tuple](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, len: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html), visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#123 "goto source code")

Hint that the `Deserialize` type is expecting a sequence of values and knows how many values there are without looking at the serialized data. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple)

#### fn [deserialize_tuple_struct](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple_struct)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, name: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), len: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html), visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#125-130 "goto source code")

Hint that the `Deserialize` type is expecting a tuple struct with a particular name and number of fields. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_tuple_struct)

#### fn [deserialize_map](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_map)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#132 "goto source code")

Hint that the `Deserialize` type is expecting a map of key-value pairs.

#### fn [deserialize_struct](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_struct)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, name: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), fields: [&'static \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)&'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#134-139 "goto source code")

Hint that the `Deserialize` type is expecting a struct with a particular name and fields. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_struct)

#### fn [deserialize_enum](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_enum)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, name: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), fields: [&'static \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)&'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#141-146 "goto source code")

Hint that the `Deserialize` type is expecting an enum value with a particular name and possible variants. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_enum)

#### fn [deserialize_identifier](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_identifier)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#148 "goto source code")

Hint that the `Deserialize` type is expecting the name of a struct field or the discriminant of an enum variant. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_identifier)

#### fn [deserialize_ignored_any](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_ignored_any)&lt;V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;V::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")>[\[src\]](/docs/api/rust/tauri/../../src/tauri/command.rs#149 "goto source code")

Hint that the `Deserialize` type needs to deserialize a value whose type doesn’t matter because it is ignored. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#tymethod.deserialize_ignored_any)

#### fn [deserialize_i128](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#method.deserialize_i128)&lt;V>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;&lt;V as [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")> where V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>,[\[src\]](https://docs.rs/serde/1.0.127/src/serde/de/mod.rs.html#947-949 "goto source code")

Hint that the `Deserialize` type is expecting an `i128` value. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#method.deserialize_i128)

#### fn [deserialize_u128](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#method.deserialize_u128)&lt;V>( self, visitor: V ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;&lt;V as [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>>::[Value](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html#associatedtype.Value "type serde::de::Visitor::Value"), Self::[Error](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")> where V: [Visitor](https://docs.rs/serde/1.0.127/serde/de/trait.Visitor.html "trait serde::de::Visitor")&lt;'de>,[\[src\]](https://docs.rs/serde/1.0.127/src/serde/de/mod.rs.html#981-983 "goto source code")

Hint that the `Deserialize` type is expecting an `u128` value. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#method.deserialize_u128)

#### fn [is_human_readable](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#method.is_human_readable)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/serde/1.0.127/src/serde/de/mod.rs.html#1213 "goto source code")

Determine whether `Deserialize` implementations should expect to deserialize their human-readable form. [Read more](https://docs.rs/serde/1.0.127/serde/de/trait.Deserializer.html#method.is_human_readable)

## Auto Trait Implementations

### impl&lt;'a, R> \&#33;[RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'a, R>

### impl&lt;'a, R> [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'a, R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;'a, R> [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'a, R> where &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[ClipboardManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.ClipboardManager "type tauri::Runtime::ClipboardManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Dispatcher](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher "type tauri::Runtime::Dispatcher"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[GlobalShortcutManager](/docs/api/rust/tauri/../trait.Runtime#associatedtype.GlobalShortcutManager "type tauri::Runtime::GlobalShortcutManager"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"), &lt;R as [Runtime](/docs/api/rust/tauri/../trait.Runtime "trait tauri::Runtime")>::[Handle](/docs/api/rust/tauri/../trait.Runtime#associatedtype.Handle "type tauri::Runtime::Handle"): [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync"),

### impl&lt;'a, R> [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'a, R>

### impl&lt;'a, R> \&#33;[UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [CommandItem](/docs/api/rust/tauri/struct.CommandItem "struct tauri::command::CommandItem")&lt;'a, R>

## Blanket Implementations

### impl&lt;T> [Any](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html "trait core::any::Any") for T where T: 'static + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135 "goto source code")

#### pub fn [type_id](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)(&self) -> [TypeId](https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html "struct core::any::TypeId")[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)

### impl&lt;T> [Borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213 "goto source code")

#### pub fn [borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)

### impl&lt;T> [BorrowMut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220 "goto source code")

#### pub fn [borrow_mut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: T) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U> for T where U: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryInto](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U> for T where U: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")

The type returned in the event of a conversion error.

#### pub fn [try_into](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### impl&lt;V, T> VZip&lt;V> for T where V: MultiLane&lt;T>,

#### pub fn [vzip](/docs/api/rust/tauri/about:blank#tymethod.vzip)(self) -> V
  