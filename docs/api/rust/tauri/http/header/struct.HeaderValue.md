---
title: Struct tauri::http::header::HeaderValue
sidebar_label: struct.HeaderValue
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:header::HeaderValue,

```rs
pub struct HeaderValue { /* fields omitted */ }
```

Expand description

Represents an HTTP header field value.

In practice, HTTP header field values are usually valid ASCII. However, the HTTP spec allows for a header value to contain opaque bytes as well. In this case, the header field value is not able to be represented as a string.

To handle this, the `HeaderValue` is useable as a type and can be compared with strings and implements `Debug`. A `to_str` fn is provided that returns an `Err` if the header value contains non visible ascii characters.

## Implementations

### impl [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#40-334 "goto source code")

#### pub fn [from_static](/docs/api/rust/tauri/about:blank#method.from_static)(src: &'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#60 "goto source code")

Convert a static string to a `HeaderValue`.

This function will not perform any copying, however the string is checked to ensure that no invalid characters are present. Only visible ASCII characters (32-127) are permitted.

## Panics

This function panics if the argument contains invalid header value characters.

## Examples

```rs
let val = HeaderValue::from_static("hello");
assert_eq!(val, "hello");
```

#### pub fn [from_str](/docs/api/rust/tauri/about:blank#method.from_str)(src: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#100 "goto source code")

Attempt to convert a string to a `HeaderValue`.

If the argument contains invalid header value characters, an error is returned. Only visible ASCII characters (32-127) are permitted. Use `from_bytes` to create a `HeaderValue` that includes opaque octets (128-255).

This function is intended to be replaced in the future by a `TryFrom` implementation once the trait is stabilized in std.

## Examples

```rs
let val = HeaderValue::from_str("hello").unwrap();
assert_eq!(val, "hello");
```

An invalid value

```rs
let val = HeaderValue::from_str("\n");
assert!(val.is_err());
```

#### pub fn [from_name](/docs/api/rust/tauri/about:blank#method.from_name)(name: [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#117 "goto source code")

Converts a HeaderName into a HeaderValue

Since every valid HeaderName is a valid HeaderValue this is done infallibly.

## Examples

```rs
let val = HeaderValue::from_name(ACCEPT);
assert_eq!(val, HeaderValue::from_bytes(b"accept").unwrap());
```

#### pub fn [from_bytes](/docs/api/rust/tauri/about:blank#method.from_bytes)(src: [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#146 "goto source code")

Attempt to convert a byte slice to a `HeaderValue`.

If the argument contains invalid header value bytes, an error is returned. Only byte values between 32 and 255 (inclusive) are permitted, excluding byte 127 (DEL).

This function is intended to be replaced in the future by a `TryFrom` implementation once the trait is stabilized in std.

## Examples

```rs
let val = HeaderValue::from_bytes(b"hello\xfa").unwrap();
assert_eq!(val, &b"hello\xfa"[..]);
```

An invalid value

```rs
let val = HeaderValue::from_bytes(b"\n");
assert!(val.is_err());
```

#### pub fn [from_maybe_shared](/docs/api/rust/tauri/about:blank#method.from_maybe_shared)&lt;T>(src: T) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")> where T: [AsRef](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> + 'static,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#154-156 "goto source code")

Attempt to convert a `Bytes` buffer to a `HeaderValue`.

This will try to prevent a copy if the type passed is the type used internally, and will copy the data if it is not.

#### pub unsafe fn [from_maybe_shared_unchecked](/docs/api/rust/tauri/about:blank#method.from_maybe_shared_unchecked)&lt;T>(src: T) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") where T: [AsRef](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> + 'static,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#169-171 "goto source code")

Convert a `Bytes` directly into a `HeaderValue` without validating.

This function does NOT validate that illegal bytes are not contained within the buffer.

#### pub fn [to_str](/docs/api/rust/tauri/about:blank#method.to_str)(&self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;&[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html), [ToStrError](/docs/api/rust/tauri/struct.ToStrError "struct tauri::http&#x3A;:header::ToStrError")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#226 "goto source code")

Yields a `&str` slice if the `HeaderValue` only contains visible ASCII chars.

This function will perform a scan of the header value, checking all the characters.

## Examples

```rs
let val = HeaderValue::from_static("hello");
assert_eq!(val.to_str().unwrap(), "hello");
```

#### pub fn [len](/docs/api/rust/tauri/about:blank#method.len)(&self) -> [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#250 "goto source code")

Returns the length of `self`.

This length is in bytes.

## Examples

```rs
let val = HeaderValue::from_static("hello");
assert_eq!(val.len(), 5);
```

#### pub fn [is_empty](/docs/api/rust/tauri/about:blank#method.is_empty)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#267 "goto source code")

Returns true if the `HeaderValue` has a length of zero bytes.

## Examples

```rs
let val = HeaderValue::from_static("");
assert!(val.is_empty());

let val = HeaderValue::from_static("hello");
assert!(!val.is_empty());
```

#### pub fn [as_bytes](/docs/api/rust/tauri/about:blank#method.as_bytes)(&self) -> [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#281 "goto source code")

Converts a `HeaderValue` to a byte slice.

## Examples

```rs
let val = HeaderValue::from_static("hello");
assert_eq!(val.as_bytes(), b"hello");
```

#### pub fn [set_sensitive](/docs/api/rust/tauri/about:blank#method.set_sensitive)(&mut self, val: [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html))[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#300 "goto source code")

Mark that the header value represents sensitive information.

## Examples

```rs
let mut val = HeaderValue::from_static("my secret");

val.set_sensitive(true);
assert!(val.is_sensitive());

val.set_sensitive(false);
assert!(!val.is_sensitive());
```

#### pub fn [is_sensitive](/docs/api/rust/tauri/about:blank#method.is_sensitive)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#331 "goto source code")

Returns `true` if the value represents sensitive data.

Sensitive data could represent passwords or other data that should not be stored on disk or in memory. By marking header values as sensitive, components using this crate can be instructed to treat them with special care for security reasons. For example, caches can avoid storing sensitive values, and HPACK encoders used by HTTP/2.0 implementations can choose not to compress them.

Additionally, sensitive values will be masked by the `Debug` implementation of `HeaderValue`.

Note that sensitivity is not factored into equality or ordering.

## Examples

```rs
let mut val = HeaderValue::from_static("my secret");

val.set_sensitive(true);
assert!(val.is_sensitive());

val.set_sensitive(false);
assert!(!val.is_sensitive());
```

## Trait Implementations

### impl [AsRef](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html "trait core::convert::AsRef")&lt;[\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#336-341 "goto source code")

#### pub fn [as_ref](https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html#tymethod.as_ref)(&self) -> [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#338 "goto source code")

Performs the conversion.

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#19 "goto source code")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#19 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#343-369 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#344 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;'a> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#493-498 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: &'a [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#495 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#371-379 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(h: [HeaderName](/docs/api/rust/tauri/struct.HeaderName "struct tauri::http&#x3A;:header::HeaderName")) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#373 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[i16](https://doc.rust-lang.org/1.54.0/std/primitive.i16.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [i16](https://doc.rust-lang.org/1.54.0/std/primitive.i16.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[i32](https://doc.rust-lang.org/1.54.0/std/primitive.i32.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [i32](https://doc.rust-lang.org/1.54.0/std/primitive.i32.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[i64](https://doc.rust-lang.org/1.54.0/std/primitive.i64.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [i64](https://doc.rust-lang.org/1.54.0/std/primitive.i64.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[isize](https://doc.rust-lang.org/1.54.0/std/primitive.isize.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#452-455 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [isize](https://doc.rust-lang.org/1.54.0/std/primitive.isize.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#452-455 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [u32](https://doc.rust-lang.org/1.54.0/std/primitive.u32.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[u64](https://doc.rust-lang.org/1.54.0/std/primitive.u64.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [u64](https://doc.rust-lang.org/1.54.0/std/primitive.u64.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#427-437 "goto source code")

Performs the conversion.

### impl [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;[usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#452-455 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(num: [usize](https://doc.rust-lang.org/1.54.0/std/primitive.usize.html)) -> [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#452-455 "goto source code")

Performs the conversion.

### impl [FromStr](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html "trait core::str::traits::FromStr") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#484-491 "goto source code")

#### type [Err](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#associatedtype.Err) = [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")

The associated error which can be returned from parsing.

#### pub fn [from_str](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)(s: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), &lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") as [FromStr](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html "trait core::str::traits::FromStr")>::[Err](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#associatedtype.Err "type core::str::traits::FromStr::Err")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#488 "goto source code")

Parses a string `s` to return a value of this type. [Read more](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)

### impl [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#19 "goto source code")

#### pub fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;\_\_H>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)\_\_H) where \_\_H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#19 "goto source code")

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#609-614 "goto source code")

#### pub fn [cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#tymethod.cmp)(&self, other: &[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#611 "goto source code")

This method returns an [`Ordering`](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "Ordering") between `self` and `other`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#tymethod.cmp)

#### \#\[must_use]fn [max](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.max)(self, other: Self) -> Self1.21.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#738-740 "goto source code")

Compares and returns the maximum of two values. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.max)

#### \#\[must_use]fn [min](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.min)(self, other: Self) -> Self1.21.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#758-760 "goto source code")

Compares and returns the minimum of two values. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.min)

#### \#\[must_use]fn [clamp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.clamp)(self, min: Self, max: Self) -> Self1.50.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#783-785 "goto source code")

Restrict a value to a certain interval. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.clamp)

### impl&lt;'a, T> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"), [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"): [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;T>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#714-722 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#719 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#623-628 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#625 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#593-598 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#595 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a> [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")> for &'a [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#700-705 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#702 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#672-677 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#674 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#616-621 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#618 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl&lt;'a, T> [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"), [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"): [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;T>,[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#724-732 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: &[&'a](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#729 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#637-642 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#639 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl&lt;'a> [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")> for &'a [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#707-712 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: &[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#709 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#602-607 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: &[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#604 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#679-684 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: &[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#681 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#630-635 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#632 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#517-524 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: [&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), &lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#521 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#509-515 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( s: &'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String") ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), &lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#512 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#500-507 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: &'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), &lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#504 "goto source code")

Performs the conversion.

### impl [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#526-533 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: [String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String") ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), &lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[String](https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html "struct alloc::string::String")>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#530 "goto source code")

Performs the conversion.

### impl [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>> for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#535-542 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidHeaderValue](/docs/api/rust/tauri/struct.InvalidHeaderValue "struct tauri::http&#x3A;:header::InvalidHeaderValue")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( vec: [Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")> ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue"), &lt;[HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[Vec](https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html "struct alloc::vec::Vec")&lt;[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html), [Global](https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html "struct alloc::alloc::Global")>>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#539 "goto source code")

Performs the conversion.

### impl [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")

[\[src\]](https://docs.rs/http/0.2.4/src/http/header/value.rs.html#600 "goto source code")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [HeaderValue](/docs/api/rust/tauri/struct.HeaderValue "struct tauri::http&#x3A;:header::HeaderValue")

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
  