---
title: "struct.HttpRequestOptions"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[http](/docs/api/rust/tauri_api/index.html)::​[HttpRequestOptions](/docs/api/rust/tauri_api/)

    pub struct HttpRequestOptions {
        pub method: String,
        pub url: String,
        pub params: Option<HashMap<String, Value>>,
        pub headers: Option<HashMap<String, Value>>,
        pub body: Option<Value>,
        pub follow_redirects: Option<bool>,
        pub max_redirections: Option<u32>,
        pub connect_timeout: Option<u64>,
        pub read_timeout: Option<u64>,
        pub timeout: Option<u64>,
        pub allow_compression: Option<bool>,
        pub body_type: Option<BodyType>,
        pub response_type: Option<ResponseType>,
    }

The configuration object of an HTTP request

## Fields

`method: String`

The request method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT or TRACE)

`url: String`

The request URL

`params: Option<HashMap<String, Value>>`

The request query params

`headers: Option<HashMap<String, Value>>`

The request headers

`body: Option<Value>`

The request body

`follow_redirects: Option<bool>`

Whether to follow redirects or not

`max_redirections: Option<u32>`

Max number of redirections to follow

`connect_timeout: Option<u64>`

Connect timeout for the request

`read_timeout: Option<u64>`

Read timeout for the request

`timeout: Option<u64>`

Timeout for the whole request

`allow_compression: Option<bool>`

Whether the request will announce that it accepts compression

`body_type: Option<BodyType>`

The body type (defaults to Auto)

`response_type: Option<ResponseType>`

The response type (defaults to Json)

## Trait Implementations

### `impl<'de> Deserialize<'de> for HttpRequestOptions`

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.104/serde/de/trait.Deserialize.html#tymethod.deserialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for HttpRequestOptions`

### `impl Send for HttpRequestOptions`

### `impl Sync for HttpRequestOptions`

### `impl Unpin for HttpRequestOptions`

### `impl UnwindSafe for HttpRequestOptions`

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

      