---
title: "struct.HttpRequestBuilder"
---

# Struct [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[http](/docs/api/rust/tauri/index.html)::​[HttpRequestBuilder](/docs/api/rust/tauri/)

    pub struct HttpRequestBuilder {
        pub method: String,
        pub url: String,
        pub query: Option<HashMap<String, String>>,
        pub headers: Option<HashMap<String, String>>,
        pub body: Option<Body>,
        pub timeout: Option<u64>,
        pub response_type: Option<ResponseType>,
    }

The builder for a HTTP request.

# [Examples](/docs/api/rust/tauri/about:blank#examples)

    use tauri::api::http::{ HttpRequestBuilder, ResponseType, ClientBuilder };
    async fn run() {
      let client = ClientBuilder::new()
        .max_redirections(3)
        .build()
        .unwrap();
      let mut request_builder = HttpRequestBuilder::new("GET", "http://example.com");
      let request = request_builder.response_type(ResponseType::Text);

      if let Ok(response) = client.send(request).await {
        println!("got response");
      } else {
        println!("Something Happened!");
      }
    }

## Fields

`method: String`

The request method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT or TRACE)

`url: String`

The request URL

`query: Option<HashMap<String, String>>`

The request query params

`headers: Option<HashMap<String, String>>`

The request headers

`body: Option<Body>`

The request body

`timeout: Option<u64>`

Timeout for the whole request

`response_type: Option<ResponseType>`

The response type (defaults to Json)

## Implementations

### `impl HttpRequestBuilder`

#### `pub fn new(method: impl Into<String>, url: impl Into<String>) -> Self`

Initializes a new instance of the HttpRequestrequest_builder.

#### `pub fn query(self, query: HashMap<String, String>) -> Self`

Sets the request params.

#### `pub fn headers(self, headers: HashMap<String, String>) -> Self`

Sets the request headers.

#### `pub fn body(self, body: Body) -> Self`

Sets the request body.

#### `pub fn timeout(self, timeout: u64) -> Self`

Sets the general request timeout.

#### `pub fn response_type(self, response_type: ResponseType) -> Self`

Sets the type of the response. Interferes with the way we read the response.

## Trait Implementations

### `impl<'de> Deserialize<'de> for HttpRequestBuilder`

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.125/serde/de/trait.Deserialize.html#tymethod.deserialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for HttpRequestBuilder`

### `impl Send for HttpRequestBuilder`

### `impl Sync for HttpRequestBuilder`

### `impl Unpin for HttpRequestBuilder`

### `impl UnwindSafe for HttpRequestBuilder`

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

### `impl<T> DeserializeOwned for T where T: for<'de> Deserialize<'de>,`

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
