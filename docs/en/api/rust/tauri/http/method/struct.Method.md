---
title: Struct tauri::http::method::Method
sidebar_label: struct.Method
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:method::Method,

```rs
pub struct Method(_);
```

Expand description

The Request Method (VERB)

This type also contains constants for a number of common HTTP methods such as GET, POST, etc.

Currently includes 8 variants representing the 8 methods defined in [RFC 7230](https://tools.ietf.org/html/rfc7231#section-4.1), plus PATCH, and an Extension variant for all extensions.

## Examples

```rs
use http::Method;

assert_eq!(Method::GET, Method::from_bytes(b"GET").unwrap());
assert!(Method::GET.is_idempotent());
assert_eq!(Method::POST.as_str(), "POST");
```

## Implementations

### impl [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#71-186 "goto source code")

#### pub const [**GET**](/docs/api/rust/tauri/about:blank#associatedconstant.GET): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#73 "goto source code")

GET

#### pub const [**POST**](/docs/api/rust/tauri/about:blank#associatedconstant.POST): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#76 "goto source code")

POST

#### pub const [**PUT**](/docs/api/rust/tauri/about:blank#associatedconstant.PUT): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#79 "goto source code")

PUT

#### pub const [**DELETE**](/docs/api/rust/tauri/about:blank#associatedconstant.DELETE): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#82 "goto source code")

DELETE

#### pub const [**HEAD**](/docs/api/rust/tauri/about:blank#associatedconstant.HEAD): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#85 "goto source code")

HEAD

#### pub const [**OPTIONS**](/docs/api/rust/tauri/about:blank#associatedconstant.OPTIONS): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#88 "goto source code")

OPTIONS

#### pub const [**CONNECT**](/docs/api/rust/tauri/about:blank#associatedconstant.CONNECT): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#91 "goto source code")

CONNECT

#### pub const [**PATCH**](/docs/api/rust/tauri/about:blank#associatedconstant.PATCH): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#94 "goto source code")

PATCH

#### pub const [**TRACE**](/docs/api/rust/tauri/about:blank#associatedconstant.TRACE): [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#97 "goto source code")

TRACE

#### pub fn [from_bytes](/docs/api/rust/tauri/about:blank#method.from_bytes)(src: [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method"), [InvalidMethod](/docs/api/rust/tauri/struct.InvalidMethod "struct tauri::http&#x3A;:method::InvalidMethod")>[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#100 "goto source code")

Converts a slice of bytes to an HTTP method.

#### pub fn [is_safe](/docs/api/rust/tauri/about:blank#method.is_safe)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#150 "goto source code")

Whether a method is considered “safe”, meaning the request is essentially read-only.

See [the spec](https://tools.ietf.org/html/rfc7231#section-4.2.1) for more words.

#### pub fn [is_idempotent](/docs/api/rust/tauri/about:blank#method.is_idempotent)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#162 "goto source code")

Whether a method is considered “idempotent”, meaning the request has the same result if executed multiple times.

See [the spec](https://tools.ietf.org/html/rfc7231#section-4.2.2) for more words.

#### pub fn [as_str](/docs/api/rust/tauri/about:blank#method.as_str)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#171 "goto source code")

Return a &str representation of the HTTP method

## Trait Implementations

### impl [AsRef](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#188-193 "goto source code")

#### pub fn [as_ref](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html#tymethod.as_ref)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#190 "goto source code")

Performs the conversion.

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#237-241 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#238 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#249-254 "goto source code")

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#251 "goto source code")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#243-247 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)(&self, fmt: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#244 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)

### impl&lt;'a> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#256-261 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: &'a [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")) -> [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#258 "goto source code")

Performs the conversion.

### impl [FromStr](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html "trait core::str::traits::FromStr") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#281-288 "goto source code")

#### type [Err](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#associatedtype.Err) = [InvalidMethod](/docs/api/rust/tauri/struct.InvalidMethod "struct tauri::http&#x3A;:method::InvalidMethod")

The associated error which can be returned from parsing.

#### pub fn [from_str](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)(t: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method"), &lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method") as [FromStr](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html "trait core::str::traits::FromStr")>::[Err](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#associatedtype.Err "type core::str::traits::FromStr::Err")>[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#285 "goto source code")

Parses a string `s` to return a value of this type. [Read more](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)

### impl [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

#### pub fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;\_\_H>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)\_\_H) where \_\_H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;&'a [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#195-200 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &&'a [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#197 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#223-228 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#225 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### pub fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")> for &'a [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#202-207 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#204 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#209-214 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#211 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#263-270 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidMethod](/docs/api/rust/tauri/struct.InvalidMethod "struct tauri::http&#x3A;:method::InvalidMethod")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: [&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method"), &lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#267 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#272-279 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidMethod](/docs/api/rust/tauri/struct.InvalidMethod "struct tauri::http&#x3A;:method::InvalidMethod")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: &'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method"), &lt;[Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#276 "goto source code")

Performs the conversion.

### impl [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

### impl [StructuralEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralEq.html "trait core::marker::StructuralEq") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

### impl [StructuralPartialEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

[\[src\]](https://docs.rs/http/0.2.4/src/http/method.rs.html#45 "goto source code")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Method](/docs/api/rust/tauri/struct.Method "struct tauri::http&#x3A;:method::Method")

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
  