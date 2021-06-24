---
title: Struct tauri::api::config::SecurityConfig
sidebar_label: struct.SecurityConfig
---

# Struct tauri::api::config::SecurityConfig,\[−],\[−],−

```rs
pub struct SecurityConfig {
    pub csp: Option<String>,
}
```

Security configuration.

## Fields

`csp: Option<String>`

Content security policy to inject to HTML files with the custom protocol.

## Trait Implementations

### `impl Clone for SecurityConfig`

#### `pub fn clone(&self) -> SecurityConfig`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0[\[src\]](https://doc.rust-lang.org/nightly/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Debug for SecurityConfig`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for SecurityConfig`

#### `pub fn default() -> SecurityConfig`

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<'de> Deserialize<'de> for SecurityConfig`

#### `pub fn deserialize<__D>( __deserializer: __D ) -> Result<SecurityConfig, <__D as Deserializer<'de>>::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<SecurityConfig> for SecurityConfig`

#### `pub fn eq(&self, other: &SecurityConfig) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &SecurityConfig) -> bool`

This method tests for `!=`.

### `impl StructuralPartialEq for SecurityConfig`

### `impl ToTokens for SecurityConfig`

#### `pub fn to_tokens(&self, tokens: &mut TokenStream)`

Write `self` to the given `TokenStream`. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#tymethod.to_tokens)

#### `pub fn to_token_stream(&self) -> TokenStream`[\[src\]](https://docs.rs/quote/1.0.9/src/quote/to_tokens.rs.html#61 "goto source code")

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.to_token_stream)

#### `pub fn into_token_stream(self) -> TokenStream`[\[src\]](https://docs.rs/quote/1.0.9/src/quote/to_tokens.rs.html#71-73 "goto source code")

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.into_token_stream)

## Auto Trait Implementations

### `impl RefUnwindSafe for SecurityConfig`

### `impl Send for SecurityConfig`

### `impl Sync for SecurityConfig`

### `impl Unpin for SecurityConfig`

### `impl UnwindSafe for SecurityConfig`

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

### `impl<T> ToOwned for T where T: Clone,`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#81-93 "goto source code")

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `pub fn to_owned(&self) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#86 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `pub fn clone_into(&self, target: &mutT)`[\[src\]](https://doc.rust-lang.org/nightly/src/alloc/borrow.rs.html#90 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

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
