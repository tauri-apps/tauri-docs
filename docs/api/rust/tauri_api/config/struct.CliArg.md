---
title: "struct.CliArg"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[config](/docs/api/rust/tauri_api/index.html)::​[CliArg](/docs/api/rust/tauri_api/)

    pub struct CliArg {
        pub short: Option<char>,
        pub name: String,
        pub description: Option<String>,
        pub long_description: Option<String>,
        pub takes_value: Option<bool>,
        pub multiple: Option<bool>,
        pub multiple_occurrences: Option<bool>,
        pub number_of_values: Option<u64>,
        pub possible_values: Option<Vec<String>>,
        pub min_values: Option<u64>,
        pub max_values: Option<u64>,
        pub required: Option<bool>,
        pub required_unless: Option<String>,
        pub required_unless_all: Option<Vec<String>>,
        pub required_unless_one: Option<Vec<String>>,
        pub conflicts_with: Option<String>,
        pub conflicts_with_all: Option<Vec<String>>,
        pub requires: Option<String>,
        pub requires_all: Option<Vec<String>>,
        pub requires_if: Option<Vec<String>>,
        pub required_if: Option<Vec<String>>,
        pub require_equals: Option<bool>,
        pub index: Option<u64>,
    }

## Fields

`short: Option<char>``name: String``description: Option<String>``long_description: Option<String>``takes_value: Option<bool>``multiple: Option<bool>``multiple_occurrences: Option<bool>``number_of_values: Option<u64>``possible_values: Option<Vec<String>>``min_values: Option<u64>``max_values: Option<u64>``required: Option<bool>``required_unless: Option<String>``required_unless_all: Option<Vec<String>>``required_unless_one: Option<Vec<String>>``conflicts_with: Option<String>``conflicts_with_all: Option<Vec<String>>``requires: Option<String>``requires_all: Option<Vec<String>>``requires_if: Option<Vec<String>>``required_if: Option<Vec<String>>``require_equals: Option<bool>``index: Option<u64>`

## Trait Implementations

### `impl Debug for CliArg`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for CliArg`

#### `fn default() -> CliArg`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<'de> Deserialize<'de> for CliArg`

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](/docs/api/rust/tauri_api/../../serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<CliArg> for CliArg`

#### `fn eq(&self, other: &CliArg) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `fn ne(&self, other: &CliArg) -> bool`

This method tests for `!=`.

### `impl StructuralPartialEq for CliArg`

## Auto Trait Implementations

### `impl RefUnwindSafe for CliArg`

### `impl Send for CliArg`

### `impl Sync for CliArg`

### `impl Unpin for CliArg`

### `impl UnwindSafe for CliArg`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

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
      