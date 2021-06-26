---
title: Enum tauri::api::http::FormPart
sidebar_label: enum.FormPart
custom_edit_url: null
---

# Enum tauri::api::http&#x3A;:FormPart,\[−]\[src],\[−],−

```rs
#[non_exhaustive]pub enum FormPart {
    File(PathBuf),
    Text(String),
    Bytes(Vec<u8>),
}
```

FormBody data types.

## Variants (Non-exhaustive)

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`File(PathBuf)`

A file path value.

`Text(String)`

A string value.

`Bytes(Vec<u8>)`

A byte array value.

## Trait Implementations

### `impl<'de> Deserialize<'de> for FormPart`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#200 "goto source code")

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#200 "goto source code")

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for FormPart`

### `impl Send for FormPart`

### `impl Sync for FormPart`

### `impl Unpin for FormPart`

### `impl UnwindSafe for FormPart`

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

### `impl<'de, D, P> CommandArg<'de, P> for D where P: Params, D: Deserialize<'de>,`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/command.rs#47-52 "goto source code")

#### `pub fn from_command(CommandItem<'de, P>) -> Result<D, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/command.rs#48-51 "goto source code")

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../../tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/../../../tauri/command/trait.CommandArg#tymethod.from_command)

### `impl<T> DeserializeOwned for T where T: for<'de> Deserialize<'de>,`[\[src\]](https://docs.rs/serde/1.0.126/src/serde/de/mod.rs.html#603 "goto source code")

### `impl<T> From<T> for T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548 "goto source code")

#### `pub fn from(t: T) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540 "goto source code")

#### `pub fn into(self) -> U`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

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
