---
title: "struct.WryAttributes"
---

# Struct [tauri](/docs/api/rust/tauri/../../../index.html)::​[runtime](/docs/api/rust/tauri/../../index.html)::​[flavors](/docs/api/rust/tauri/../index.html)::​[wry](/docs/api/rust/tauri/index.html)::​[WryAttributes](/docs/api/rust/tauri/)

```
pub struct WryAttributes { /* fields omitted */ }
```

Wry attributes.

## Trait Implementations

### `impl Attributes for WryAttributes`

#### `type Icon = WryIcon`

Expected icon format.

#### `fn new() -> Self`

Initializes a new webview builder.

#### `fn with_config(config: WindowConfig) -> Self`

Initializes a new webview builder from a [`WindowConfig`](/docs/api/rust/tauri/../../../../tauri/api/config/struct.WindowConfig.html "WindowConfig")

#### `fn initialization_script(self, init: &str) -> Self`

Sets the init script.

#### `fn x(self, x: f64) -> Self`

The horizontal position of the window's top left corner.

#### `fn y(self, y: f64) -> Self`

The vertical position of the window's top left corner.

#### `fn width(self, width: f64) -> Self`

Window width.

#### `fn height(self, height: f64) -> Self`

Window height.

#### `fn min_width(self, min_width: f64) -> Self`

Window min width.

#### `fn min_height(self, min_height: f64) -> Self`

Window min height.

#### `fn max_width(self, max_width: f64) -> Self`

Window max width.

#### `fn max_height(self, max_height: f64) -> Self`

Window max height.

#### `fn resizable(self, resizable: bool) -> Self`

Whether the window is resizable or not.

#### `fn title<S: Into<String>>(self, title: S) -> Self`

The title of the window in the title bar.

#### `fn fullscreen(self, fullscreen: bool) -> Self`

Whether to start the window in fullscreen or not.

#### `fn maximized(self, maximized: bool) -> Self`

Whether the window should be maximized upon creation.

#### `fn visible(self, visible: bool) -> Self`

Whether the window should be immediately visible upon creation.

#### `fn transparent(self, transparent: bool) -> Self`

Whether the the window should be transparent. If this is true, writing colors with alpha values different than `1.0` will produce a transparent window. [Read more](/docs/api/rust/tauri/../../../../tauri/runtime/webview/trait.Attributes.html#tymethod.transparent)

#### `fn decorations(self, decorations: bool) -> Self`

Whether the window should have borders and bars.

#### `fn always_on_top(self, always_on_top: bool) -> Self`

Whether the window should always be on top of other windows.

#### `fn icon(self, icon: Self::Icon) -> Self`

Sets the window icon.

#### `fn has_icon(&self) -> bool`

Whether the icon was set or not.

#### `fn user_data_path(self, user_data_path: Option<PathBuf>) -> Self`

User data path for the webview. Actually only supported on Windows.

#### `fn url(self, url: String) -> Self`

Sets the webview url.

#### `fn has_uri_scheme_protocol(&self, name: &str) -> bool`

Whether the webview URI scheme protocol is defined or not.

#### `fn register_uri_scheme_protocol<N: Into<String>, H: Fn(&str) -> Result<Vec<u8>> + Send + Sync + 'static>( self, uri_scheme: N, protocol: H ) -> Self`

Registers a webview protocol handler. Leverages [setURLSchemeHandler](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler) on macOS, [AddWebResourceRequestedFilter](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44) on Windows and [webkit-web-context-register-uri-scheme](https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme) on Linux. [Read more](/docs/api/rust/tauri/../../../../tauri/runtime/webview/trait.Attributes.html#tymethod.register_uri_scheme_protocol)

#### `fn build(self) -> Self`

The full attributes.

### `impl AttributesBase for WryAttributes`

### `impl Clone for WryAttributes`

#### `fn clone(&self) -> WryAttributes`

Returns a copy of the value. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone)

#### `pub fn clone_from(&mut self, source: &Self)`1.0.0

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from)

### `impl Default for WryAttributes`

#### `fn default() -> WryAttributes`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

## Auto Trait Implementations

### `impl RefUnwindSafe for WryAttributes`

### `impl Send for WryAttributes`

### `impl Sync for WryAttributes`

### `impl Unpin for WryAttributes`

### `impl UnwindSafe for WryAttributes`

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
