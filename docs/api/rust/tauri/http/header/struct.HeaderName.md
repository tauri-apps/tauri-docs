---
title: Struct tauri::http::header::HeaderName
sidebar_label: struct.HeaderName
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:header::HeaderName,

```rs
pub struct HeaderName { /* fields omitted */ }
```

Expand description

Represents an HTTP header field name

Header field names identify the header. Header sets may include multiple headers with the same name. The HTTP specification defines a number of standard headers, but HTTP messages may include non-standard header names as well as long as they adhere to the specification.

`HeaderName` is used as the [`HeaderMap`](/docs/api/rust/tauri/struct.HeaderMap) key. Constants are available for all standard header names in the [`header`](/docs/api/rust/tauri/index) module.

## Representation

`HeaderName` represents standard header names using an `enum`, as such they will not require an allocation for storage. All custom header names are lower cased upon conversion to a `HeaderName` value. This avoids the overhead of dynamically doing lower case conversion during the hash code computation and the comparison operation.

## Implementations

### impl [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1649-1807 "goto source code")

#### pub fn [from_bytes](/docs/api/rust/tauri/about:blank#method.from_bytes)(src: [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1654 "goto source code")

Converts a slice of bytes to an HTTP header name.

This function normalizes the input.

#### pub fn [from_lowercase](/docs/api/rust/tauri/about:blank#method.from_lowercase)(src: [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1704 "goto source code")

Converts a slice of bytes to an HTTP header name.

This function expects the input to only contain lowercase characters. This is useful when decoding HTTP/2.0 or HTTP/3.0 headers. Both require that all headers be represented in lower case.

## Examples

```rs
// Parsing a lower case header
let hdr = HeaderName::from_lowercase(b"content-length").unwrap();
assert_eq!(CONTENT_LENGTH, hdr);

// Parsing a header that contains uppercase characters
assert!(HeaderName::from_lowercase(b"Content-Length").is_err());
```

#### pub fn [from_static](/docs/api/rust/tauri/about:blank#method.from_static)(src: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1764 "goto source code")

Converts a static string to a HTTP header name.

This function panics when the static string is a invalid header.

This function requires the static string to only contain lowercase characters, numerals and symbols, as per the HTTP/2.0 specification and header names internal representation within this library.

## Examples

```rs
// Parsing a standard header
let hdr = HeaderName::from_static("content-length");
assert_eq!(CONTENT_LENGTH, hdr);
 
// Parsing a custom header
let CUSTOM_HEADER: &'static str = "custom-header";
 
let a = HeaderName::from_lowercase(b"custom-header").unwrap();
let b = HeaderName::from_static(CUSTOM_HEADER);
assert_eq!(a, b);
```

ⓘ

```rs
// Parsing a header that contains invalid symbols(s):
HeaderName::from_static("content{}{}length"); // This line panics!
 
// Parsing a header that contains invalid uppercase characters.
let a = HeaderName::from_static("foobar");
let b = HeaderName::from_static("FOOBAR"); // This line panics!
```

#### pub fn [as_str](/docs/api/rust/tauri/about:blank#method.as_str)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1797 "goto source code")

Returns a `str` representation of the header.

The returned string will always be lower case.

## Trait Implementations

### impl [AsRef](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1823-1827 "goto source code")

#### pub fn [as_ref](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html#tymethod.as_ref)(&self) -> [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1824 "goto source code")

Performs the conversion.

### impl [AsRef](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1817-1821 "goto source code")

#### pub fn [as_ref](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html#tymethod.as_ref)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1818 "goto source code")

Performs the conversion.

### impl [Borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1829-1833 "goto source code")

#### pub fn [borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1830 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1835-1839 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, fmt: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1836 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1841-1845 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)(&self, fmt: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1842 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)

### impl&lt;'a> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1853-1857 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(src: &'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1854 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#371-379 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(h: [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#373 "goto source code")

Performs the conversion.

### impl [FromStr](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html "trait core::str::traits::FromStr") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1809-1815 "goto source code")

#### type [Err](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#associatedtype.Err) = [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")

The associated error which can be returned from parsing.

#### pub fn [from_str](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)(s: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1812 "goto source code")

Parses a string `s` to return a value of this type. [Read more](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)

### impl [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

#### pub fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;\_\_H>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)\_\_H) where \_\_H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;&'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1921-1926 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &&'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1923 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1973-1980 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1977 "goto source code")

Performs a case-insensitive comparison of the string against the header name

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### pub fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")> for &'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1928-1933 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1930 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1935-1952 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1949 "goto source code")

Performs a case-insensitive comparison of the string against the header name

## Examples

```rs
use http::header::CONTENT_LENGTH;

assert_eq!(CONTENT_LENGTH, "content-length");
assert_eq!(CONTENT_LENGTH, "Content-Length");
assert_ne!(CONTENT_LENGTH, "content length");
```

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1895-1901 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( s: [&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), &lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1898 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1887-1893 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( s: &'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String") ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), &lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1890 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1879-1885 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderName](/docs/api/rust/tauri/struct.InvalidHeaderName "struct tauri::http&#x3A;:header::InvalidHeaderName")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( s: &'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName"), &lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#1882 "goto source code")

Performs the conversion.

### impl&lt;'a> [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName") for &'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3428 "goto source code")

### impl [AsHeaderName](/docs/api/rust/tauri/trait.AsHeaderName "trait tauri::http&#x3A;:header::AsHeaderName") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3407 "goto source code")

### impl [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

### impl&lt;'a> [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName") for &'a [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3336 "goto source code")

### impl [IntoHeaderName](/docs/api/rust/tauri/trait.IntoHeaderName "trait tauri::http&#x3A;:header::IntoHeaderName") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/map.rs.html#3315 "goto source code")

### impl [StructuralEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralEq.html "trait core::marker::StructuralEq") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

### impl [StructuralPartialEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/name.rs.html#31 "goto source code")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")

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
  