---
title: "enum.MenuItem"
---

# Enum [tauri](/docs/api/rust/tauri/index.html)::​[MenuItem](/docs/api/rust/tauri/)

```rs
#[non_exhaustive]pub enum MenuItem<I> where
    I: MenuId,  {
    Custom(CustomMenuItem<I>),
    About(String),
    Hide,
    Services,
    HideOthers,
    ShowAll,
    CloseWindow,
    Quit,
    Copy,
    Cut,
    Undo,
    Redo,
    SelectAll,
    Paste,
    EnterFullScreen,
    Minimize,
    Zoom,
    Separator,
}
```

A menu item, bound to a pre-defined action or `Custom` emit an event. Note that status bar only supports `Custom` menu item variants. And on the menu bar, some platforms might not support some of the variants. Unsupported variant will be no-op on such platform.

## Variants (Non-exhaustive)

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

`Custom(CustomMenuItem<I>)`

A custom menu item..

`About(String)`

Shows a standard “About” item

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific)

-   **Windows / Android / iOS:** Unsupported

`Hide`

A standard “hide the app” menu item.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-1)

-   **Windows / Android / iOS:** Unsupported

`Services`

A standard “Services” menu item.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-2)

-   **Windows / Linux / Android / iOS:** Unsupported

`HideOthers`

A “hide all other windows” menu item.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-3)

-   **Windows / Linux / Android / iOS:** Unsupported

`ShowAll`

A menu item to show all the windows for this app.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-4)

-   **Windows / Linux / Android / iOS:** Unsupported

`CloseWindow`

Close the current window.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-5)

-   **Windows / Android / iOS:** Unsupported

`Quit`

A “quit this app” menu icon.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-6)

-   **Windows / Android / iOS:** Unsupported

`Copy`

A menu item for enabling copying (often text) from responders.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-7)

-   **Windows / Android / iOS:** Unsupported

`Cut`

A menu item for enabling cutting (often text) from responders.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-8)

-   **Windows / Android / iOS:** Unsupported

`Undo`

An “undo” menu item; particularly useful for supporting the cut/copy/paste/undo lifecycle of events.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-9)

-   **Windows / Linux / Android / iOS:** Unsupported

`Redo`

An “redo” menu item; particularly useful for supporting the cut/copy/paste/undo lifecycle of events.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-10)

-   **Windows / Linux / Android / iOS:** Unsupported

`SelectAll`

A menu item for selecting all (often text) from responders.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-11)

-   **Windows / Android / iOS:** Unsupported

`Paste`

A menu item for pasting (often text) into responders.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-12)

-   **Windows / Android / iOS:** Unsupported

`EnterFullScreen`

A standard “enter full screen” item.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-13)

-   **Windows / Linux / Android / iOS:** Unsupported

`Minimize`

An item for minimizing the window with the standard system controls.

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-14)

-   **Windows / Android / iOS:** Unsupported

`Zoom`

An item for instructing the app to zoom

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-15)

-   **Windows / Linux / Android / iOS:** Unsupported

`Separator`

Represents a Separator

## [Platform-specific](/docs/api/rust/tauri/about:blank#platform-specific-16)

-   **Windows / Android / iOS:** Unsupported

## Trait Implementations

### `impl<I> Clone for MenuItem<I> where I: Clone + MenuId,`

#### `pub fn clone(&self) -> MenuItem<I>`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl<I> Debug for MenuItem<I> where I: Debug + MenuId,`

#### `pub fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>`

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt)

## Auto Trait Implementations

### `impl<I> RefUnwindSafe for MenuItem<I> where I: RefUnwindSafe,`

### `impl<I> Send for MenuItem<I>`

### `impl<I> Sync for MenuItem<I>`

### `impl<I> Unpin for MenuItem<I> where I: Unpin,`

### `impl<I> UnwindSafe for MenuItem<I> where I: UnwindSafe,`

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

### `impl<T> From<T> for T`

#### `pub fn from(t: T) -> T`

Performs the conversion.

### `impl<T> Instrument for T`

#### `pub fn instrument(self, span: Span) -> Instrumented<Self>`

Instruments this type with the provided `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.instrument)

#### `pub fn in_current_span(self) -> Instrumented<Self>`

Instruments this type with the [current](/docs/api/rust/tauri/../struct.Span.html#method.current) `Span`, returning an `Instrumented` wrapper. [Read more](https://docs.rs/tracing/0.1.25/tracing/instrument/trait.Instrument.html#method.in_current_span)

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
