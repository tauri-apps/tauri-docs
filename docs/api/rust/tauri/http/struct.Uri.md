---
title: Struct tauri::http::Uri
sidebar_label: struct.Uri
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:Uri,

```rs
pub struct Uri { /* fields omitted */ }
```

Expand description

The URI component of a request.

For HTTP 1, this is included as part of the request line. From Section 5.3, Request Target:

> Once an inbound connection is obtained, the client sends an HTTP request message (Section 3) with a request-target derived from the target URI. There are four distinct formats for the request-target, depending on both the method being requested and whether the request is to a proxy.
>
> ````notrust
> ```rs
> request-target = origin-form
>                / absolute-form
>                / authority-form
>                / asterisk-form
>
> ```
> ````

The URI is structured as follows:

````notrust
```rs
abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
|-|   |-------------------------------||--------| |-------------------| |-----|
 |                  |                       |               |              |
scheme          authority                 path            query         fragment

```
````

For HTTP 2.0, the URI is encoded using pseudoheaders.

## Examples

```rs
use http::Uri;

let uri = "/foo/bar?baz".parse::<Uri>().unwrap();
assert_eq!(uri.path(), "/foo/bar");
assert_eq!(uri.query(), Some("baz"));
assert_eq!(uri.host(), None);

let uri = "https://www.rust-lang.org/install.html".parse::<Uri>().unwrap();
assert_eq!(uri.scheme_str(), Some("https"));
assert_eq!(uri.host(), Some("www.rust-lang.org"));
assert_eq!(uri.path(), "/install.html");
```

## Implementations

### impl [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#182-676 "goto source code")

#### pub fn [builder](/docs/api/rust/tauri/about:blank#method.builder)() -> [Builder](https://docs.rs/http/0.2.4/http/uri/builder/struct.Builder.html "struct http&#x3A;:uri::builder::Builder")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#200 "goto source code")

Creates a new builder-style object to manufacture a `Uri`.

This method returns an instance of `Builder` which can be usd to create a `Uri`.

## Examples

```rs
use http::Uri;

let uri = Uri::builder()
    .scheme("https")
    .authority("hyper.rs")
    .path_and_query("/")
    .build()
    .unwrap();
```

#### pub fn [from_parts](/docs/api/rust/tauri/about:blank#method.from_parts)(src: [Parts](https://docs.rs/http/0.2.4/http/uri/struct.Parts.html "struct http&#x3A;:uri::Parts")) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), [InvalidUriParts](https://docs.rs/http/0.2.4/http/uri/struct.InvalidUriParts.html "struct http&#x3A;:uri::InvalidUriParts")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#205 "goto source code")

Attempt to convert a `Uri` from `Parts`

#### pub fn [from_maybe_shared](/docs/api/rust/tauri/about:blank#method.from_maybe_shared)&lt;T>(src: T) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), [InvalidUri](/docs/api/rust/tauri/struct.InvalidUri "struct tauri::http&#x3A;:InvalidUri")> where T: [AsRef](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> + 'static,[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#248-250 "goto source code")

Attempt to convert a `Bytes` buffer to a `Uri`.

This will try to prevent a copy if the type passed is the type used internally, and will copy the data if it is not.

#### pub fn [from_static](/docs/api/rust/tauri/about:blank#method.from_static)(src: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#328 "goto source code")

Convert a `Uri` from a static string.

This function will not perform any copying, however the string is checked to ensure that it is valid.

## Panics

This function panics if the argument is an invalid URI.

## Examples

```rs
let uri = Uri::from_static("http://example.com/foo");

assert_eq!(uri.host().unwrap(), "example.com");
assert_eq!(uri.path(), "/foo");
```

#### pub fn [into_parts](/docs/api/rust/tauri/about:blank#method.into_parts)(self) -> [Parts](https://docs.rs/http/0.2.4/http/uri/struct.Parts.html "struct http&#x3A;:uri::Parts")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#357 "goto source code")

Convert a `Uri` into `Parts`.

## Note

This is just an inherent method providing the same functionality as `let parts: Parts = uri.into()`

## Examples

```rs
let uri: Uri = "/foo".parse().unwrap();

let parts = uri.into_parts();

assert_eq!(parts.path_and_query.unwrap(), "/foo");

assert!(parts.scheme.is_none());
assert!(parts.authority.is_none());
```

#### pub fn [path_and_query](/docs/api/rust/tauri/about:blank#method.path_and_query)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[PathAndQuery](https://docs.rs/http/0.2.4/http/uri/path/struct.PathAndQuery.html "struct http&#x3A;:uri::path::PathAndQuery")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#363 "goto source code")

Returns the path & query components of the Uri

#### pub fn [path](/docs/api/rust/tauri/about:blank#method.path)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#406 "goto source code")

Get the path of this `Uri`.

Both relative and absolute URIs contain a path component, though it might be the empty string. The path component is **case sensitive**.

````notrust
```rs
abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
                                   |--------|
                                        |
                                      path

```
````

If the URI is `*` then the path component is equal to `*`.

## Examples

A relative URI

```rs
let uri: Uri = "/hello/world".parse().unwrap();

assert_eq!(uri.path(), "/hello/world");
```

An absolute URI

```rs
let uri: Uri = "http://example.org/hello/world".parse().unwrap();

assert_eq!(uri.path(), "/hello/world");
```

#### pub fn [scheme](/docs/api/rust/tauri/about:blank#method.scheme)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[Scheme](https://docs.rs/http/0.2.4/http/uri/scheme/struct.Scheme.html "struct http&#x3A;:uri::scheme::Scheme")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#450 "goto source code")

Get the scheme of this `Uri`.

The URI scheme refers to a specification for assigning identifiers within that scheme. Only absolute URIs contain a scheme component, but not all absolute URIs will contain a scheme component. Although scheme names are case-insensitive, the canonical form is lowercase.

````notrust
```rs
abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
|-|
 |
scheme

```
````

## Examples

Absolute URI

```rs
use http::uri::{Scheme, Uri};

let uri: Uri = "http://example.org/hello/world".parse().unwrap();

assert_eq!(uri.scheme(), Some(&Scheme::HTTP));
```

Relative URI

```rs
let uri: Uri = "/hello/world".parse().unwrap();

assert!(uri.scheme().is_none());
```

#### pub fn [scheme_str](/docs/api/rust/tauri/about:blank#method.scheme_str)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#469 "goto source code")

Get the scheme of this `Uri` as a `&str`.

## Example

```rs
let uri: Uri = "http://example.org/hello/world".parse().unwrap();

assert_eq!(uri.scheme_str(), Some("http"));
```

#### pub fn [authority](/docs/api/rust/tauri/about:blank#method.authority)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[Authority](https://docs.rs/http/0.2.4/http/uri/authority/struct.Authority.html "struct http&#x3A;:uri::authority::Authority")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#517 "goto source code")

Get the authority of this `Uri`.

The authority is a hierarchical element for naming authority such that the remainder of the URI is delegated to that authority. For HTTP, the authority consists of the host and port. The host portion of the authority is **case-insensitive**.

The authority also includes a `username:password` component, however the use of this is deprecated and should be avoided.

````notrust
```rs
abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
  |-------------------------------|
                |
            authority

```
````

This function will be renamed to `authority` in the next semver release.

## Examples

Absolute URI

```rs
let uri: Uri = "http://example.org:80/hello/world".parse().unwrap();

assert_eq!(uri.authority().map(|a| a.as_str()), Some("example.org:80"));
```

Relative URI

```rs
let uri: Uri = "/hello/world".parse().unwrap();

assert!(uri.authority().is_none());
```

#### pub fn [host](/docs/api/rust/tauri/about:blank#method.host)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#559 "goto source code")

Get the host of this `Uri`.

The host subcomponent of authority is identified by an IP literal encapsulated within square brackets, an IPv4 address in dotted- decimal form, or a registered name. The host subcomponent is **case-insensitive**.

````notrust
```rs
abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
                    |---------|
                         |
                        host

```
````

## Examples

Absolute URI

```rs
let uri: Uri = "http://example.org:80/hello/world".parse().unwrap();

assert_eq!(uri.host(), Some("example.org"));
```

Relative URI

```rs
let uri: Uri = "/hello/world".parse().unwrap();

assert!(uri.host().is_none());
```

#### pub fn [port](/docs/api/rust/tauri/about:blank#method.port)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Port](https://docs.rs/http/0.2.4/http/uri/port/struct.Port.html "struct http&#x3A;:uri::port::Port")&lt;&[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#606 "goto source code")

Get the port part of this `Uri`.

The port subcomponent of authority is designated by an optional port number following the host and delimited from it by a single colon (“:”) character. It can be turned into a decimal port number with the `as_u16` method or as a `str` with the `as_str` method.

````notrust
```rs
abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
                                |-|
                                 |
                                port

```
````

## Examples

Absolute URI with port

```rs
let uri: Uri = "http://example.org:80/hello/world".parse().unwrap();

let port = uri.port().unwrap();
assert_eq!(port.as_u16(), 80);
```

Absolute URI without port

```rs
let uri: Uri = "http://example.org/hello/world".parse().unwrap();

assert!(uri.port().is_none());
```

Relative URI

```rs
let uri: Uri = "/hello/world".parse().unwrap();

assert!(uri.port().is_none());
```

#### pub fn [port_u16](/docs/api/rust/tauri/about:blank#method.port_u16)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#621 "goto source code")

Get the port of this `Uri` as a `u16`.

## Example

```rs
let uri: Uri = "http://example.org:80/hello/world".parse().unwrap();

assert_eq!(uri.port_u16(), Some(80));
```

#### pub fn [query](/docs/api/rust/tauri/about:blank#method.query)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#669 "goto source code")

Get the query string of this `Uri`, starting after the `?`.

The query component contains non-hierarchical data that, along with data in the path component, serves to identify a resource within the scope of the URI’s scheme and naming authority (if any). The query component is indicated by the first question mark (“?”) character and terminated by a number sign (“#”) character or by the end of the URI.

````notrust
```rs
abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
                                              |-------------------|
                                                        |
                                                      query

```
````

## Examples

Absolute URI

```rs
let uri: Uri = "http://example.org/hello/world?key=value".parse().unwrap();

assert_eq!(uri.query(), Some("key=value"));
```

Relative URI with a query string component

```rs
let uri: Uri = "/hello/world?key=value&foo=bar".parse().unwrap();

assert_eq!(uri.query(), Some("key=value&foo=bar"));
```

Relative URI without a query string component

```rs
let uri: Uri = "/hello/world".parse().unwrap();

assert!(uri.query().is_none());
```

## Trait Implementations

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#95 "goto source code")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#95 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#1016-1020 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#1017 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#985-994 "goto source code")

Returns a `Uri` representing `/`

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#987 "goto source code")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#996-1014 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#997 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)

### impl [FromStr](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html "trait core::str::traits::FromStr") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#854-861 "goto source code")

#### type [Err](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#associatedtype.Err) = [InvalidUri](/docs/api/rust/tauri/struct.InvalidUri "struct tauri::http&#x3A;:InvalidUri")

The associated error which can be returned from parsing.

#### pub fn [from_str](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)(s: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), [InvalidUri](/docs/api/rust/tauri/struct.InvalidUri "struct tauri::http&#x3A;:InvalidUri")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#858 "goto source code")

Parses a string `s` to return a value of this type. [Read more](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)

### impl [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#1068-1089 "goto source code")

#### pub fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;H>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#1069-1071 "goto source code")

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#970-974 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#971 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#863-883 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#864 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#885-962 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#886 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#678-685 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidUri](/docs/api/rust/tauri/struct.InvalidUri "struct tauri::http&#x3A;:InvalidUri")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(t: [&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), &lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#682 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#696-703 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidUri](/docs/api/rust/tauri/struct.InvalidUri "struct tauri::http&#x3A;:InvalidUri")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: &'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String") ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), &lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#700 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#723-730 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Error](https://docs.rs/http/0.2.4/http/error/struct.Error.html "struct http&#x3A;:error::Error")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(src: &'a [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), &lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#727 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#687-694 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidUri](/docs/api/rust/tauri/struct.InvalidUri "struct tauri::http&#x3A;:InvalidUri")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(t: &'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), &lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#691 "goto source code")

Performs the conversion.

### impl [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[Parts](https://docs.rs/http/0.2.4/http/uri/struct.Parts.html "struct http&#x3A;:uri::Parts")> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#714-721 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidUriParts](https://docs.rs/http/0.2.4/http/uri/struct.InvalidUriParts.html "struct http&#x3A;:uri::InvalidUriParts")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(src: [Parts](https://docs.rs/http/0.2.4/http/uri/struct.Parts.html "struct http&#x3A;:uri::Parts")) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), &lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[Parts](https://docs.rs/http/0.2.4/http/uri/struct.Parts.html "struct http&#x3A;:uri::Parts")>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#718 "goto source code")

Performs the conversion.

### impl [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")> for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#705-712 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidUri](/docs/api/rust/tauri/struct.InvalidUri "struct tauri::http&#x3A;:InvalidUri")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(t: [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri"), &lt;[Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#709 "goto source code")

Performs the conversion.

### impl [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")

[\[src\]](https://docs.rs/http/0.2.4/src/http/uri/mod.rs.html#982 "goto source code")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Uri](/docs/api/rust/tauri/struct.Uri "struct tauri::http&#x3A;:Uri")

## Blanket Implementations

### impl&lt;T> [Any](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html "trait core::any::Any") for T where T: 'static + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135 "goto source code")

#### pub fn [type_id](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)(&self) -> [TypeId](https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html "struct core::any::TypeId")[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)

### impl&lt;T> [Borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213 "goto source code")

#### pub fn [borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)

### impl&lt;T> [BorrowMut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220 "goto source code")

#### pub fn [borrow_mut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: T) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;T> [ToOwned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html "trait alloc::borrow::ToOwned") for T where T: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96 "goto source code")

#### type [Owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned) = T

The resulting type after obtaining ownership.

#### pub fn [to_owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)(&self) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### pub fn [clone_into](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)(&self, target: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T)[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)

### impl&lt;T> [ToString](https://doc.rust-lang.org/1.54.0/alloc/string/trait.ToString.html "trait alloc::string::ToString") for T where T: [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/string.rs.html#2372-2386 "goto source code")

#### pub default fn [to_string](https://doc.rust-lang.org/1.54.0/alloc/string/trait.ToString.html#tymethod.to_string)(&self) -> [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/string.rs.html#2378 "goto source code")

Converts the given value to a `String`. [Read more](https://doc.rust-lang.org/1.54.0/alloc/string/trait.ToString.html#tymethod.to_string)

### impl&lt;T, U> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U> for T where U: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryInto](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U> for T where U: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")

The type returned in the event of a conversion error.

#### pub fn [try_into](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### impl&lt;V, T> VZip&lt;V> for T where V: MultiLane&lt;T>,

#### pub fn [vzip](/docs/api/rust/tauri/about:blank#tymethod.vzip)(self) -> V
  