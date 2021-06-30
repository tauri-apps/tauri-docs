---
title: Enum tauri::WindowUrl
sidebar_label: enum.WindowUrl
custom_edit_url: null
---

# Enum tauri::WindowUrl,\[−],\[−],−

```rs
#[non_exhaustive]pub enum WindowUrl {
    External(Url),
    App(PathBuf),
}
```

The window webview URL options.

## Variants (Non-exhaustive)

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`External(Url)`

An external URL.

`App(PathBuf)`

An app URL.

## Trait Implementations

### `impl Clone for WindowUrl`

#### `pub fn clone(&self) -> WindowUrl`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `clone_from`

```rs
pub fn clone_from(&mut self, source: &Self)
```

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

_Defined in: [clone.rs:130](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/clone.rs#L130)_

### `impl Debug for WindowUrl`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for WindowUrl`

#### `pub fn default() -> WindowUrl`

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<'de> Deserialize<'de> for WindowUrl`

#### `pub fn deserialize<__D>( __deserializer: __D ) -> Result<WindowUrl, <__D as Deserializer<'de>>::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<WindowUrl> for WindowUrl`

#### `pub fn eq(&self, other: &WindowUrl) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &WindowUrl) -> bool`

This method tests for `!=`.

### `impl StructuralPartialEq for WindowUrl`

### `impl ToTokens for WindowUrl`

#### `pub fn to_tokens(&self, tokens: &mut TokenStream)`

Write `self` to the given `TokenStream`. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#tymethod.to_tokens)

#### `to_token_stream`

```rs
pub fn to_token_stream(&self) -> TokenStream
```

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.to_token_stream)

_Defined in: [to_tokens.rs:61](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/quote/1.0.9/src/quote/to_tokens.rs#L61)_

#### `into_token_stream`

```rs
pub fn into_token_stream(self) -> TokenStream
```

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.into_token_stream)

_Defined in: [to_tokens.rs:71-73](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/quote/1.0.9/src/quote/to_tokens.rs#L71-73)_

## Auto Trait Implementations

### `impl RefUnwindSafe for WindowUrl`

### `impl Send for WindowUrl`

### `impl Sync for WindowUrl`

### `impl Unpin for WindowUrl`

### `impl UnwindSafe for WindowUrl`

## Blanket Implementations

### `Any`

```rs
impl<T> Any for T where
    T: 'static + ?Sized, 
```

_Defined in: [any.rs:131-135](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L131-135)_

#### `type_id`

```rs
pub fn type_id(&self) -> TypeId
```

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

_Defined in: [any.rs:132](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/any.rs#L132)_

### `Borrow`

```rs
impl<T> Borrow<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:208-213](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L208-213)_

#### `borrow`

```rs
pub fn borrow(&self) -> &T
```

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

_Defined in: [borrow.rs:210](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L210)_

### `BorrowMut`

```rs
impl<T> BorrowMut<T> for T where
    T: ?Sized, 
```

_Defined in: [borrow.rs:216-220](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L216-220)_

#### `borrow_mut`

```rs
pub fn borrow_mut(&mut self) -> &mut T
```

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

_Defined in: [borrow.rs:217](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/borrow.rs#L217)_

### `CommandArg`

```rs
impl<'de, D, P> CommandArg<'de, P> for D where
    P: Params,
    D: Deserialize<'de>, 
```

_Defined in: [command.rs:47-52](https://github.com/https://blob/e663bdd/core/tauri/src/command.rs#L47-52)_

#### `from_command`

```rs
pub fn from_command(CommandItem<'de, P>) -> Result<D, InvokeError>
```

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/../tauri/command/trait.CommandArg#tymethod.from_command)

_Defined in: [command.rs:48-51](https://github.com/https://blob/e663bdd/core/tauri/src/command.rs#L48-51)_

### `DeserializeOwned`

```rs
impl<T> DeserializeOwned for T where
    T: for<'de> Deserialize<'de>, 
```

_Defined in: [mod.rs:603](https://github.com/https://blob/e663bdd/core/tauri/src/https://docs.rs/serde/1.0.126/src/serde/de/mod.rs#L603)_

### `From`

```rs
impl<T> From<T> for T
```

_Defined in: [mod.rs:544-548](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L544-548)_

#### `from`

```rs
pub fn from(t: T) -> T
```

Performs the conversion.

_Defined in: [mod.rs:545](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L545)_

### `Into`

```rs
impl<T, U> Into<U> for T where
    U: From<T>, 
```

_Defined in: [mod.rs:533-540](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L533-540)_

#### `into`

```rs
pub fn into(self) -> U
```

Performs the conversion.

_Defined in: [mod.rs:537](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L537)_

### `ToOwned`

```rs
impl<T> ToOwned for T where
    T: Clone, 
```

_Defined in: [borrow.rs:81-93](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L81-93)_

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `to_owned`

```rs
pub fn to_owned(&self) -> T
```

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

_Defined in: [borrow.rs:86](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L86)_

#### `clone_into`

```rs
pub fn clone_into(&self, target: &mut T)
```

_Defined in: [borrow.rs:90](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/alloc/borrow.rs#L90)_

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

### `TryFrom`

```rs
impl<T, U> TryFrom<U> for T where
    U: Into<T>, 
```

_Defined in: [mod.rs:581-590](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L581-590)_

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `try_from`

```rs
pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:587](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L587)_

### `TryInto`

```rs
impl<T, U> TryInto<U> for T where
    U: TryFrom<T>, 
```

_Defined in: [mod.rs:567-576](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L567-576)_

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `try_into`

```rs
pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>
```

Performs the conversion.

_Defined in: [mod.rs:573](https://github.com/https://blob/e663bdd/core/tauri/src/https://doc.rust-lang.org/nightly/src/core/convert/mod.rs#L573)_

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
