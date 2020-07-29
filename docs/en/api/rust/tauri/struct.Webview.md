---
title: "struct.Webview"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[Webview](/docs/api/rust/tauri/)

    pub struct Webview<'a> { /* fields omitted */ }

## Methods

### `impl<'a> Webview<'a>`

#### `pub fn create(debug: bool, window: Option<&mut Window>) -> Webview`

#### `pub fn run(&mut self)`

#### `pub fn terminate(&mut self)`

#### `pub fn as_mut(&mut self) -> WebviewMut`

#### `pub fn set_title(&mut self, title: &str)`

#### `pub fn set_size(&mut self, width: i32, height: i32, hints: SizeHint)`

#### `pub fn get_window(&self) -> *mutWindow`

#### `pub fn navigate(&mut self, url: &'a str)`

#### `pub fn init(&mut self, js: &str)`

#### `pub fn eval(&mut self, js: &str)`

#### `pub fn dispatch<F>(&mut self, f: F) where F: FnOnce(&mut Webview) + Send + 'static,`

#### `pub fn bind<F>(&mut self, name: &str, f: F) where F: FnMut(&str, &str),`

#### `pub fn return(&self, seq: &str, status: i32, result: &str)`

## Trait Implementations

### `impl<'a> Clone for Webview<'a>`

#### `fn clone(&self) -> Webview<'a>`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<'a> Drop for Webview<'a>`

#### `fn drop(&mut self)`

Executes the destructor for this type. [Read more](https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop)

## Auto Trait Implementations

### `impl<'a> RefUnwindSafe for Webview<'a>`

### `impl<'a> !Send for Webview<'a>`

### `impl<'a> !Sync for Webview<'a>`

### `impl<'a> Unpin for Webview<'a>`

### `impl<'a> UnwindSafe for Webview<'a>`

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
