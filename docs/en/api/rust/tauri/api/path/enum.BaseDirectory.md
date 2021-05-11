---
title: "enum.BaseDirectory"
---

# Enum [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[path](/docs/api/rust/tauri/index.html)::​[BaseDirectory](/docs/api/rust/tauri/)

    #[repr(u16)]
    #[non_exhaustive]pub enum BaseDirectory {
        Audio,
        Cache,
        Config,
        Data,
        LocalData,
        Desktop,
        Document,
        Download,
        Executable,
        Font,
        Home,
        Picture,
        Public,
        Runtime,
        Template,
        Video,
        Resource,
        App,
        Current,
    }

A Base Directory to use. The base directory is the optional root of a FS operation. If informed by the API call, all paths will be relative to the path of the given directory.

For more information, check the [dirs_next documentation](https://docs.rs/dirs_next/).

## Variants (Non-exhaustive)

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`Audio`

The Audio directory.

`Cache`

The Cache directory.

`Config`

The Config directory.

`Data`

The Data directory.

`LocalData`

The LocalData directory.

`Desktop`

The Desktop directory.

`Document`

The Document directory.

`Download`

The Download directory.

`Executable`

The Executable directory.

`Font`

The Font directory.

`Home`

The Home directory.

`Picture`

The Picture directory.

`Public`

The Public directory.

`Runtime`

The Runtime directory.

`Template`

The Template directory.

`Video`

The Video directory.

`Resource`

The Resource directory.

`App`

The default App config directory. Resolves to ${BaseDirectory::Config}/${config.tauri.bundle.identifier}

`Current`

The current working directory.

## Trait Implementations

### `impl Clone for BaseDirectory`

#### `fn clone(&self) -> BaseDirectory`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Debug for BaseDirectory`

#### `fn fmt(&self, f: &mut Formatter<'_>) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'de> Deserialize<'de> for BaseDirectory`

#### `fn deserialize<D>(deserializer: D) -> Result<Self, D::Error> where D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.125/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl Serialize for BaseDirectory`

#### `fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error> where S: Serializer,`

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html#tymethod.serialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for BaseDirectory`

### `impl Send for BaseDirectory`

### `impl Sync for BaseDirectory`

### `impl Unpin for BaseDirectory`

### `impl UnwindSafe for BaseDirectory`

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
