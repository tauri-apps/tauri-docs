---
title: Struct tauri::api::http::HttpRequestBuilder
sidebar_label: struct.HttpRequestBuilder
custom_edit_url: null
---

# Struct tauri::api::http&#x3A;:HttpRequestBuilder,\[−]\[src],\[−],−

```rs
pub struct HttpRequestBuilder {
    pub method: String,
    pub url: String,
    pub query: Option<HashMap<String, String>>,
    pub headers: Option<HashMap<String, String>>,
    pub body: Option<Body>,
    pub timeout: Option<u64>,
    pub response_type: Option<ResponseType>,
}
```

The builder for a HTTP request.

# [Examples](/docs/api/rust/tauri/about:blank#examples)

```rs
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
```

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

### `impl HttpRequestBuilder`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#277-320 "goto source code")

#### `pub fn new(method: impl Into<String>, url: impl Into<String>) -> Self`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#279-289 "goto source code")

Initializes a new instance of the HttpRequestrequest_builder.

#### `pub fn query(self, query: HashMap<String, String>) -> Self`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#292-295 "goto source code")

Sets the request params.

#### `pub fn headers(self, headers: HashMap<String, String>) -> Self`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#298-301 "goto source code")

Sets the request headers.

#### `pub fn body(self, body: Body) -> Self`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#304-307 "goto source code")

Sets the request body.

#### `pub fn timeout(self, timeout: u64) -> Self`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#310-313 "goto source code")

Sets the general request timeout.

#### `pub fn response_type(self, response_type: ResponseType) -> Self`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#316-319 "goto source code")

Sets the type of the response. Interferes with the way we read the response.

## Trait Implementations

### `impl<'de> Deserialize<'de> for HttpRequestBuilder`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#258 "goto source code")

#### `fn deserialize<__D>(__deserializer: __D) -> Result<Self, __D::Error> where __D: Deserializer<'de>,`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/api/http.rs#258 "goto source code")

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.126/serde/de/trait.Deserialize.html#tymethod.deserialize)

## Auto Trait Implementations

### `impl RefUnwindSafe for HttpRequestBuilder`

### `impl Send for HttpRequestBuilder`

### `impl Sync for HttpRequestBuilder`

### `impl Unpin for HttpRequestBuilder`

### `impl UnwindSafe for HttpRequestBuilder`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#131-135 "goto source code")

#### `pub fn type_id(&self) -> TypeId`[\[src\]](https://doc.rust-lang.org/nightly/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#208-213 "goto source code")

#### `pub fn borrow(&self) -> &T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#216-220 "goto source code")

#### `pub fn borrow_mut(&mut self) -> &mutT`[\[src\]](https://doc.rust-lang.org/nightly/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<'de, D, P> CommandArg<'de, P> for D where P: Params, D: Deserialize<'de>,`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/command.rs#47-52 "goto source code")

#### `pub fn from_command(CommandItem<'de, P>) -> Result<D, InvokeError>`[\[src\]](/docs/api/rust/tauri/../../../src/tauri/command.rs#48-51 "goto source code")

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/../../../tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/../../../tauri/command/trait.CommandArg#tymethod.from_command)

### `impl<T> DeserializeOwned for T where T: for<'de> Deserialize<'de>,`[\[src\]](https://docs.rs/serde/1.0.126/src/serde/de/mod.rs.html#603 "goto source code")

### `impl<T> From<T> for T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#544-548 "goto source code")

#### `pub fn from(t: T) -> T`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#533-540 "goto source code")

#### `pub fn into(self) -> U`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#581-590 "goto source code")

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `pub fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#567-576 "goto source code")

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `pub fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`[\[src\]](https://doc.rust-lang.org/nightly/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `pub fn vzip(self) -> V`
