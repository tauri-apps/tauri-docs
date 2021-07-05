---
title: "struct.Notification"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[notification](/docs/api/rust/tauri_api/index.html)::​[Notification](/docs/api/rust/tauri_api/)

    pub struct Notification { /* fields omitted */ }

The Notification definition. Allows you to construct a Notification data and send it.

# [Example](/docs/api/rust/tauri_api/about:blank#example)

    use tauri_api::notification::Notification;
    // shows a notification with the given title and body
    Notification::new()
      .title("New message")
      .body("You've got a new message.")
      .show();

## Methods

### `impl Notification`

#### `pub fn new() -> Self`

Initializes a instance of a Notification.

#### `pub fn body(self, body: impl Into<String>) -> Self`

Sets the notification body.

#### `pub fn title(self, title: impl Into<String>) -> Self`

Sets the notification title.

#### `pub fn icon(self, icon: impl Into<String>) -> Self`

Sets the notification icon.

#### `pub fn show(self) -> Result<()>`

Shows the notification.

## Trait Implementations

### `impl Default for Notification`

#### `fn default() -> Notification`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

## Auto Trait Implementations

### `impl RefUnwindSafe for Notification`

### `impl Send for Notification`

### `impl Sync for Notification`

### `impl Unpin for Notification`

### `impl UnwindSafe for Notification`

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
