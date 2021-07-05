---
title: "enum.BaseDirectory"
---

# Enum [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[path](/docs/api/rust/tauri_api/index.html)::​[BaseDirectory](/docs/api/rust/tauri_api/)

    #[repr(u16)]
    pub enum BaseDirectory {
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
    }

A Base Directory to use. The base directory is the optional root of a FS operation. If informed by the API call, all paths will be relative to the path of the given directory.

For more information, check the [dirs documentation](https://docs.rs/dirs/).

## Variants

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

The default App config directory. Resolves to ${CONFIG_DIR}/${APP_NAME}

## Trait Implementations

### `impl Clone for BaseDirectory`

#### `fn clone(&self) -> BaseDirectory`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Debug for BaseDirectory`

#### `fn fmt(&self, f: &mut Formatter) -> Result`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

### `impl<'de> Deserialize<'de> for BaseDirectory`

#### `fn deserialize<D>(deserializer: D) -> Result<Self, D::Error> where D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

### `impl Serialize for BaseDirectory`

#### `fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error> where S: Serializer,`

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html#tymethod.serialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for BaseDirectory`

### `impl Send for BaseDirectory`

### `impl Sync for BaseDirectory`

### `impl Unpin for BaseDirectory`

### `impl UnwindSafe for BaseDirectory`

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

### `impl<T> ToOwned for T where T: Clone,`

#### `type Owned = T`

The resulting type after obtaining ownership.

#### `fn to_owned(&self) -> T`

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### `fn clone_into(&self, target: &mutT)`

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#method.clone_into)

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
