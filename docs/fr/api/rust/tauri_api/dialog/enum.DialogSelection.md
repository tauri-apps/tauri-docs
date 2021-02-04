---
title: "enum.DialogSelection"
---

# Enum [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[dialog](/docs/api/rust/tauri_api/index.html)::​[DialogSelection](/docs/api/rust/tauri_api/)

    #[repr(C)]
    pub enum DialogSelection {
        Ok,
        Cancel,
        Yes,
        No,
        Quit,
        None,
        Error,
    }

## Variants

`Ok`

`Cancel`

`Yes`

`No`

`Quit`

`None`

`Error`

## Trait Implementations

### `impl PartialEq<DialogSelection> for DialogSelection`

#### `fn eq(&self, other: &DialogSelection) -> bool`

This method tests for `self` and `other` values to be equal, and is used by `==`. [En savoir plus](https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq)

#### `#[must_use]fn ne(&self, other: &Rhs) -> bool`1.0.0

This method tests for `!=`.

### `impl StructuralPartialEq for DialogSelection`

## Auto Trait Implementations

### `impl RefUnwindSafe for DialogSelection`

### `impl Send for DialogSelection`

### `impl Sync for DialogSelection`

### `impl Unpin for DialogSelection`

### `impl UnwindSafe for DialogSelection`

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
