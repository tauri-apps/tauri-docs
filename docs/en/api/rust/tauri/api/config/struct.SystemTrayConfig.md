---
title: "struct.SystemTrayConfig"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[config](/docs/api/rust/tauri/index.html)::​[SystemTrayConfig](/docs/api/rust/tauri/)

    pub struct SystemTrayConfig {
        pub icon_path: PathBuf,
    }

Configuration for application system tray icon.

## Fields

`icon_path: PathBuf`

Path to the icon to use on the system tray. Automatically set to be an `.png` on macOS and Linux, and `.ico` on Windows.

## Trait Implementations

### `impl Clone for SystemTrayConfig`

#### `pub fn clone(&self) -> SystemTrayConfig`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Debug for SystemTrayConfig`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl Default for SystemTrayConfig`

#### `pub fn default() -> SystemTrayConfig`

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

### `impl<'de> Deserialize<'de> for SystemTrayConfig`

#### `pub fn deserialize<__D>( __deserializer: __D ) -> Result<SystemTrayConfig, <__D as Deserializer<'de>>::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl PartialEq<SystemTrayConfig> for SystemTrayConfig`

#### `pub fn eq(&self, other: &SystemTrayConfig) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `pub fn ne(&self, other: &SystemTrayConfig) -> bool`

This method tests for `!=`.

### `impl StructuralPartialEq for SystemTrayConfig`

### `impl ToTokens for SystemTrayConfig`

#### `pub fn to_tokens(&self, tokens: &mut TokenStream)`

Write `self` to the given `TokenStream`. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#tymethod.to_tokens)

#### `pub fn to_token_stream(&self) -> TokenStream`

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.to_token_stream)

#### `pub fn into_token_stream(self) -> TokenStream`

Convert `self` directly into a `TokenStream` object. [Read more](https://docs.rs/quote/1.0.9/quote/to_tokens/trait.ToTokens.html#method.into_token_stream)

## Auto Trait Implementations

### `impl RefUnwindSafe for SystemTrayConfig`

### `impl Send for SystemTrayConfig`

### `impl Sync for SystemTrayConfig`

### `impl Unpin for SystemTrayConfig`

### `impl UnwindSafe for SystemTrayConfig`

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

### `impl<'de, D, P> CommandArg<'de, P> for D where P: Params, D: Deserialize<'de>,`

#### `pub fn from_command(CommandItem<'de, P>) -> Result<D, InvokeError>`

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../../tauri/command/struct.CommandItem.html "CommandItem"). [Read more](/docs/api/rust/tauri/../../../tauri/command/trait.CommandArg.html#tymethod.from_command)

### `impl<T> DeserializeOwned for T where T: for<'de> Deserialize<'de>,`

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T> Instrument for T`

#### `pub fn instrument(self, span: Span) -> Instrumented<Self>`

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.26/tracing/instrument/trait.Instrument.html#method.in_current_span)

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

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `pub fn to_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `pub fn clone_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

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
