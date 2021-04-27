---
title: "struct.Builder"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[Builder](/docs/api/rust/tauri/)

```
pub struct Builder<E, L, A, R> where
    E: Tag,
    L: Tag,
    A: Assets,
    R: Runtime,  { /* fields omitted */ }
```

Builds a Tauri application.

## Implementations

### `impl<E, L, A, R> Builder<E, L, A, R> where E: Tag, L: Tag, A: Assets, R: Runtime,`

#### `pub fn new() -> Self`

Creates a new App builder.

#### `pub fn invoke_handler<F>(self, invoke_handler: F) -> Self where F: Fn(InvokeMessage<Args<E, L, A, R>>) + Send + Sync + 'static,`

Defines the JS message handler callback.

#### `pub fn setup<F>(self, setup: F) -> Self where F: Fn(&mut App<Args<E, L, A, R>>) -> Result<(), Box<dyn Error>> + Send + 'static,`

Defines the setup hook.

#### `pub fn on_page_load<F>(self, on_page_load: F) -> Self where F: Fn(Window<Args<E, L, A, R>>, PageLoadPayload) + Send + Sync + 'static,`

Defines the page load hook.

#### `pub fn plugin<P: Plugin<Args<E, L, A, R>> + 'static>(self, plugin: P) -> Self`

Adds a plugin to the runtime.

#### `pub fn create_window<F>(self, label: L, url: WindowUrl, setup: F) -> Self where F: FnOnce(<R::Dispatcher as Dispatch>::Attributes) -> <R::Dispatcher as Dispatch>::Attributes,`

Creates a new webview.

#### `pub fn register_global_uri_scheme_protocol<N: Into<String>, H: Fn(&str) -> Result<Vec<u8>> + Send + Sync + 'static>( self, uri_scheme: N, protocol: H ) -> Self`

Registers a URI scheme protocol available to all webviews. Leverages [setURLSchemeHandler](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler) on macOS, [AddWebResourceRequestedFilter](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44) on Windows and [webkit-web-context-register-uri-scheme](https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme) on Linux.

# [Arguments](/docs/api/rust/tauri/about:blank#arguments)

-   `uri_scheme` The URI scheme to register, such as `example`.
-   `protocol` the protocol associated with the given URI scheme. It's a function that takes an URL such as `example://localhost/asset.css`.

#### `pub fn run(self, context: Context<A>) -> Result<()>`

Runs the configured Tauri application.

## Trait Implementations

### `impl<A: Assets> Default for Builder<String, String, A, Wry>`

Make `Wry` the default `Runtime` for `Builder`

#### `fn default() -> Self`

Returns the "default value" for a type. [Read more](https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default)

## Auto Trait Implementations

### `impl<E, L, A, R> !RefUnwindSafe for Builder<E, L, A, R>`

### `impl<E, L, A, R> Send for Builder<E, L, A, R>`

### `impl<E, L, A, R> !Sync for Builder<E, L, A, R>`

### `impl<E, L, A, R> Unpin for Builder<E, L, A, R> where L: Unpin, <<R as Runtime>::Dispatcher as Dispatch>::Attributes: Unpin,`

### `impl<E, L, A, R> !UnwindSafe for Builder<E, L, A, R>`

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
