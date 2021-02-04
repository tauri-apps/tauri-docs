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

A CLI argument definition

## Fields

`short: Option<char>`

The short version of the argument, without the preceding -.

NOTE: Any leading - characters will be stripped, and only the first non - character will be used as the short version.

`name: String`

The unique argument name

`description: Option<String>`

The argument description which will be shown on the help information. Typically, this is a short (one line) description of the arg.

`long_description: Option<String>`

The argument long description which will be shown on the help information. Typically this a more detailed (multi-line) message that describes the argument.

`takes_value: Option<bool>`

Specifies that the argument takes a value at run time.

NOTE: values for arguments may be specified in any of the following methods

-   Using a space such as -o value or --option value
-   Using an equals and no space such as -o=value or --option=value
-   Use a short and no space such as -ovalue

`multiple: Option<bool>`

Specifies that the argument may appear more than once.

-   For flags, this results in the number of occurrences of the flag being recorded. For example -ddd or -d -d -d would count as three occurrences.
-   For options there is a distinct difference in multiple occurrences vs multiple values. For example, --opt val1 val2 is one occurrence, but two values. Whereas --opt val1 --opt val2 is two occurrences.

`multiple_occurrences: Option<bool>``number_of_values: Option<u64>``possible_values: Option<Vec<String>>`

Specifies a list of possible values for this argument. At runtime, the CLI verifies that only one of the specified values was used, or fails with an error message.

`min_values: Option<u64>`

Specifies the minimum number of values for this argument. For example, if you had a -fargument where you wanted at least 2 'files', you would set `minValues: 2`, and this argument would be satisfied if the user provided, 2 or more values.

`max_values: Option<u64>`

Specifies the maximum number of values are for this argument. For example, if you had a -fargument where you wanted up to 3 'files', you would set .max_values(3), and this argument would be satisfied if the user provided, 1, 2, or 3 values.

`required: Option<bool>`

Sets whether or not the argument is required by default.

-   Required by default means it is required, when no other conflicting rules have been evaluated
-   Conflicting rules take precedence over being required.

`required_unless: Option<String>`

Sets an arg that override this arg's required setting i.e. this arg will be required unless this other argument is present.

`required_unless_all: Option<Vec<String>>`

Sets args that override this arg's required setting i.e. this arg will be required unless all these other arguments are present.

`required_unless_one: Option<Vec<String>>`

Sets args that override this arg's required setting i.e. this arg will be required unless at least one of these other arguments are present.

`conflicts_with: Option<String>`

Sets a conflicting argument by name i.e. when using this argument, the following argument can't be present and vice versa.

`conflicts_with_all: Option<Vec<String>>`

The same as conflictsWith but allows specifying multiple two-way conflicts per argument.

`requires: Option<String>`

Tets an argument by name that is required when this one is present i.e. when using this argument, the following argument must be present.

`requires_all: Option<Vec<String>>`

Sts multiple arguments by names that are required when this one is present i.e. when using this argument, the following arguments must be present.

`requires_if: Option<Vec<String>>`

Allows a conditional requirement with the signature \[arg, value] the requirement will only become valid if `arg`'s value equals `${value}`.

`required_if: Option<Vec<String>>`

Allows specifying that an argument is required conditionally with the signature \[arg, value] the requirement will only become valid if the `arg`'s value equals `${value}`.

`require_equals: Option<bool>`

Requires that options use the --option=val syntax i.e. an equals between the option and associated value.

`index: Option<u64>`

The positional argument index, starting at 1.

The index refers to position according to other positional argument. It does not define position in the argument list as a whole. When utilized with multiple=true, only the last positional argument may be defined as multiple (i.e. the one with the highest index).

## Trait Implementations

### `impl Debug for CliArg`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [En savoir plus](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for CliArg`

#### `fn default() -> CliArg`

Returns the "default value" for a type. [En savoir plus](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<'de> Deserialize<'de> for CliArg`

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [En savoir plus](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<CliArg> for CliArg`

#### `fn eq(&self, other: &CliArg) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [En savoir plus](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

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
