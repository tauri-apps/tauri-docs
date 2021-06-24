---
title: "struct.WebviewAttributes"
---

# Struct [tauri](/docs/api/rust/tauri/index.html)::​[WebviewAttributes](/docs/api/rust/tauri/)

```rs
pub struct WebviewAttributes {
    pub url: WindowUrl,
    pub initialization_scripts: Vec<String, Global>,
    pub data_directory: Option<PathBuf>,
    pub uri_scheme_protocols: HashMap<String, Box<dyn Fn(&str) + 'static + Send + Sync, Global>, RandomState>,
}
```

The attributes used to create an webview.

## Fields

`url: WindowUrl``initialization_scripts: Vec<String, Global>``data_directory: Option<PathBuf>``uri_scheme_protocols: HashMap<String, Box<dyn Fn(&str) + 'static + Send + Sync, Global>, RandomState>`

## Implementations

### `impl WebviewAttributes`

#### `pub fn new(url: WindowUrl) -> WebviewAttributes`

Initializes the default attributes for a webview.

#### `pub fn initialization_script(self, script: &str) -> WebviewAttributes`

Sets the init script.

#### `pub fn data_directory(self, data_directory: PathBuf) -> WebviewAttributes`

Data directory for the webview.

#### `pub fn has_uri_scheme_protocol(&self, name: &str) -> bool`

Whether the webview URI scheme protocol is defined or not.

#### `pub fn register_uri_scheme_protocol<N, H>( self, uri_scheme: N, protocol: H ) -> WebviewAttributeswhere N: Into<String>, H: 'static + Fn(&str) -> Result<Vec<u8, Global>, Box<dyn Error + 'static, Global>> + Send + Sync,`

Registers a webview protocol handler. Leverages [setURLSchemeHandler](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler) on macOS, [AddWebResourceRequestedFilter](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44) on Windows and [webkit-web-context-register-uri-scheme](https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme) on Linux.

# [Arguments](/docs/api/rust/tauri/about:blank#arguments)

-   `uri_scheme` The URI scheme to register, such as `example`.
-   `protocol` the protocol associated with the given URI scheme. It’s a function that takes an URL such as `example://localhost/asset.css`.

## Auto Trait Implementations

### `impl !RefUnwindSafe for WebviewAttributes`

### `impl Send for WebviewAttributes`

### `impl Sync for WebviewAttributes`

### `impl Unpin for WebviewAttributes`

### `impl !UnwindSafe for WebviewAttributes`

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
