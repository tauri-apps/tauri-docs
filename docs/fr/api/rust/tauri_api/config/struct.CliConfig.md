---
title: "struct.CliConfig"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[config](/docs/api/rust/tauri_api/index.html)::​[CliConfig](/docs/api/rust/tauri_api/)

    pub struct CliConfig { /* fields omitted */ }

The CLI root command definition.

## Methods

### `impl CliConfig`

#### `pub fn args(&self) -> Option<&Vec<CliArg>>`

List of args for the command

#### `pub fn subcommands(&self) -> Option<&HashMap<String, CliConfig>>`

List of subcommands of this command

#### `pub fn description(&self) -> Option<&String>`

Command description which will be shown on the help information.

#### `pub fn long_description(&self) -> Option<&String>`

Command long description which will be shown on the help information.

#### `pub fn before_help(&self) -> Option<&String>`

Adds additional help information to be displayed in addition to auto-generated help. This information is displayed before the auto-generated help information. This is often used for header information.

#### `pub fn after_help(&self) -> Option<&String>`

Adds additional help information to be displayed in addition to auto-generated help. This information is displayed after the auto-generated help information. This is often used to describe how to use the arguments, or caveats to be noted.

## Trait Implementations

### `impl Debug for CliConfig`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [En savoir plus](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'de> Deserialize<'de> for CliConfig`

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [En savoir plus](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<CliConfig> for CliConfig`

#### `fn eq(&self, other: &CliConfig) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [En savoir plus](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `fn ne(&self, other: &CliConfig) -> bool`

This method tests for `!=`.

### `impl StructuralPartialEq for CliConfig`

## Auto Trait Implementations

### `impl RefUnwindSafe for CliConfig`

### `impl Send for CliConfig`

### `impl Sync for CliConfig`

### `impl Unpin for CliConfig`

### `impl UnwindSafe for CliConfig`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [En savoir plus](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [En savoir plus](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [En savoir plus](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> DeserializeOwned for T where T: Deserialize<'de>,`

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `fn vzip(self) -> V`
