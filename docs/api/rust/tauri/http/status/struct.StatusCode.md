---
title: Struct tauri::http::status::StatusCode
sidebar_label: struct.StatusCode
custom_edit_url: null
---

  # Struct tauri::http&#x3A;:status::StatusCode,

```rs
pub struct StatusCode(_);
```

Expand description

An HTTP status code (`status-code` in RFC 7230 et al.).

Constants are provided for known status codes, including those in the IANA [HTTP Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).

Status code values in the range 100-999 (inclusive) are supported by this type. Values in the range 100-599 are semantically classified by the most significant digit. See [`StatusCode::is_success`](/docs/api/rust/tauri/struct.StatusCode#method.is_success "StatusCode::is_success"), etc. Values above 599 are unclassified but allowed for legacy compatibility, though their use is discouraged. Applications may interpret such values as protocol errors.

## Examples

```rs
use http::StatusCode;

assert_eq!(StatusCode::from_u16(200).unwrap(), StatusCode::OK);
assert_eq!(StatusCode::NOT_FOUND.as_u16(), 404);
assert!(StatusCode::OK.is_success());
```

## Implementations

### impl [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#55-200 "goto source code")

#### pub fn [from_u16](/docs/api/rust/tauri/about:blank#method.from_u16)(src: [u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode"), [InvalidStatusCode](/docs/api/rust/tauri/struct.InvalidStatusCode "struct tauri::http&#x3A;:status::InvalidStatusCode")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#73 "goto source code")

Converts a u16 to a status code.

The function validates the correctness of the supplied u16. It must be greater or equal to 100 and less than 1000.

## Example

```rs
use http::StatusCode;

let ok = StatusCode::from_u16(200).unwrap();
assert_eq!(ok, StatusCode::OK);

let err = StatusCode::from_u16(99);
assert!(err.is_err());
```

#### pub fn [from_bytes](/docs/api/rust/tauri/about:blank#method.from_bytes)(src: [&\[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode"), [InvalidStatusCode](/docs/api/rust/tauri/struct.InvalidStatusCode "struct tauri::http&#x3A;:status::InvalidStatusCode")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#84 "goto source code")

Converts a &[u8](https://docs.rs/http/0.2.4/std/primitive.u8.html "u8") to a status code

#### pub fn [as_u16](/docs/api/rust/tauri/about:blank#method.as_u16)(&self) -> [u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#119 "goto source code")

Returns the `u16` corresponding to this `StatusCode`.

## Note

This is the same as the `From<StatusCode>` implementation, but included as an inherent method because that implementation doesn’t appear in rustdocs, as well as a way to force the type instead of relying on inference.

## Example

```rs
let status = http::StatusCode::OK;
assert_eq!(status.as_u16(), 200);
```

#### pub fn [as_str](/docs/api/rust/tauri/about:blank#method.as_str)(&self) -> &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#135 "goto source code")

Returns a &str representation of the `StatusCode`

The return value only includes a numerical representation of the status code. The canonical reason is not included.

## Example

```rs
let status = http::StatusCode::OK;
assert_eq!(status.as_str(), "200");
```

#### pub fn [canonical_reason](/docs/api/rust/tauri/about:blank#method.canonical_reason)(&self) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;&'static [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#167 "goto source code")

Get the standardised `reason-phrase` for this status code.

This is mostly here for servers writing responses, but could potentially have application at other times.

The reason phrase is defined as being exclusively for human readers. You should avoid deriving any meaning from it at all costs.

Bear in mind also that in HTTP/2.0 and HTTP/3.0 the reason phrase is abolished from transmission, and so this canonical reason phrase really is the only reason phrase you’ll find.

## Example

```rs
let status = http::StatusCode::OK;
assert_eq!(status.canonical_reason(), Some("OK"));
```

#### pub fn [is_informational](/docs/api/rust/tauri/about:blank#method.is_informational)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#173 "goto source code")

Check if status is within 100-199.

#### pub fn [is_success](/docs/api/rust/tauri/about:blank#method.is_success)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#179 "goto source code")

Check if status is within 200-299.

#### pub fn [is_redirection](/docs/api/rust/tauri/about:blank#method.is_redirection)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#185 "goto source code")

Check if status is within 300-399.

#### pub fn [is_client_error](/docs/api/rust/tauri/about:blank#method.is_client_error)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#191 "goto source code")

Check if status is within 400-499.

#### pub fn [is_server_error](/docs/api/rust/tauri/about:blank#method.is_server_error)(&self) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#197 "goto source code")

Check if status is within 500-599.

### impl [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

#### pub const [**CONTINUE**](/docs/api/rust/tauri/about:blank#associatedconstant.CONTINUE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

100 Continue \[[RFC7231, Section 6.2.1](https://tools.ietf.org/html/rfc7231#section-6.2.1)]

#### pub const [**SWITCHING_PROTOCOLS**](/docs/api/rust/tauri/about:blank#associatedconstant.SWITCHING_PROTOCOLS): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

101 Switching Protocols \[[RFC7231, Section 6.2.2](https://tools.ietf.org/html/rfc7231#section-6.2.2)]

#### pub const [**PROCESSING**](/docs/api/rust/tauri/about:blank#associatedconstant.PROCESSING): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

102 Processing \[[RFC2518](https://tools.ietf.org/html/rfc2518)]

#### pub const [**OK**](/docs/api/rust/tauri/about:blank#associatedconstant.OK): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

200 OK \[[RFC7231, Section 6.3.1](https://tools.ietf.org/html/rfc7231#section-6.3.1)]

#### pub const [**CREATED**](/docs/api/rust/tauri/about:blank#associatedconstant.CREATED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

201 Created \[[RFC7231, Section 6.3.2](https://tools.ietf.org/html/rfc7231#section-6.3.2)]

#### pub const [**ACCEPTED**](/docs/api/rust/tauri/about:blank#associatedconstant.ACCEPTED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

202 Accepted \[[RFC7231, Section 6.3.3](https://tools.ietf.org/html/rfc7231#section-6.3.3)]

#### pub const [**NON_AUTHORITATIVE_INFORMATION**](/docs/api/rust/tauri/about:blank#associatedconstant.NON_AUTHORITATIVE_INFORMATION): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

203 Non-Authoritative Information \[[RFC7231, Section 6.3.4](https://tools.ietf.org/html/rfc7231#section-6.3.4)]

#### pub const [**NO_CONTENT**](/docs/api/rust/tauri/about:blank#associatedconstant.NO_CONTENT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

204 No Content \[[RFC7231, Section 6.3.5](https://tools.ietf.org/html/rfc7231#section-6.3.5)]

#### pub const [**RESET_CONTENT**](/docs/api/rust/tauri/about:blank#associatedconstant.RESET_CONTENT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

205 Reset Content \[[RFC7231, Section 6.3.6](https://tools.ietf.org/html/rfc7231#section-6.3.6)]

#### pub const [**PARTIAL_CONTENT**](/docs/api/rust/tauri/about:blank#associatedconstant.PARTIAL_CONTENT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

206 Partial Content \[[RFC7233, Section 4.1](https://tools.ietf.org/html/rfc7233#section-4.1)]

#### pub const [**MULTI_STATUS**](/docs/api/rust/tauri/about:blank#associatedconstant.MULTI_STATUS): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

207 Multi-Status \[[RFC4918](https://tools.ietf.org/html/rfc4918)]

#### pub const [**ALREADY_REPORTED**](/docs/api/rust/tauri/about:blank#associatedconstant.ALREADY_REPORTED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

208 Already Reported \[[RFC5842](https://tools.ietf.org/html/rfc5842)]

#### pub const [**IM_USED**](/docs/api/rust/tauri/about:blank#associatedconstant.IM_USED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

226 IM Used \[[RFC3229](https://tools.ietf.org/html/rfc3229)]

#### pub const [**MULTIPLE_CHOICES**](/docs/api/rust/tauri/about:blank#associatedconstant.MULTIPLE_CHOICES): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

300 Multiple Choices \[[RFC7231, Section 6.4.1](https://tools.ietf.org/html/rfc7231#section-6.4.1)]

#### pub const [**MOVED_PERMANENTLY**](/docs/api/rust/tauri/about:blank#associatedconstant.MOVED_PERMANENTLY): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

301 Moved Permanently \[[RFC7231, Section 6.4.2](https://tools.ietf.org/html/rfc7231#section-6.4.2)]

#### pub const [**FOUND**](/docs/api/rust/tauri/about:blank#associatedconstant.FOUND): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

302 Found \[[RFC7231, Section 6.4.3](https://tools.ietf.org/html/rfc7231#section-6.4.3)]

#### pub const [**SEE_OTHER**](/docs/api/rust/tauri/about:blank#associatedconstant.SEE_OTHER): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

303 See Other \[[RFC7231, Section 6.4.4](https://tools.ietf.org/html/rfc7231#section-6.4.4)]

#### pub const [**NOT_MODIFIED**](/docs/api/rust/tauri/about:blank#associatedconstant.NOT_MODIFIED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

304 Not Modified \[[RFC7232, Section 4.1](https://tools.ietf.org/html/rfc7232#section-4.1)]

#### pub const [**USE_PROXY**](/docs/api/rust/tauri/about:blank#associatedconstant.USE_PROXY): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

305 Use Proxy \[[RFC7231, Section 6.4.5](https://tools.ietf.org/html/rfc7231#section-6.4.5)]

#### pub const [**TEMPORARY_REDIRECT**](/docs/api/rust/tauri/about:blank#associatedconstant.TEMPORARY_REDIRECT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

307 Temporary Redirect \[[RFC7231, Section 6.4.7](https://tools.ietf.org/html/rfc7231#section-6.4.7)]

#### pub const [**PERMANENT_REDIRECT**](/docs/api/rust/tauri/about:blank#associatedconstant.PERMANENT_REDIRECT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

308 Permanent Redirect \[[RFC7238](https://tools.ietf.org/html/rfc7238)]

#### pub const [**BAD_REQUEST**](/docs/api/rust/tauri/about:blank#associatedconstant.BAD_REQUEST): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

400 Bad Request \[[RFC7231, Section 6.5.1](https://tools.ietf.org/html/rfc7231#section-6.5.1)]

#### pub const [**UNAUTHORIZED**](/docs/api/rust/tauri/about:blank#associatedconstant.UNAUTHORIZED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

401 Unauthorized \[[RFC7235, Section 3.1](https://tools.ietf.org/html/rfc7235#section-3.1)]

#### pub const [**PAYMENT_REQUIRED**](/docs/api/rust/tauri/about:blank#associatedconstant.PAYMENT_REQUIRED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

402 Payment Required \[[RFC7231, Section 6.5.2](https://tools.ietf.org/html/rfc7231#section-6.5.2)]

#### pub const [**FORBIDDEN**](/docs/api/rust/tauri/about:blank#associatedconstant.FORBIDDEN): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

403 Forbidden \[[RFC7231, Section 6.5.3](https://tools.ietf.org/html/rfc7231#section-6.5.3)]

#### pub const [**NOT_FOUND**](/docs/api/rust/tauri/about:blank#associatedconstant.NOT_FOUND): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

404 Not Found \[[RFC7231, Section 6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4)]

#### pub const [**METHOD_NOT_ALLOWED**](/docs/api/rust/tauri/about:blank#associatedconstant.METHOD_NOT_ALLOWED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

405 Method Not Allowed \[[RFC7231, Section 6.5.5](https://tools.ietf.org/html/rfc7231#section-6.5.5)]

#### pub const [**NOT_ACCEPTABLE**](/docs/api/rust/tauri/about:blank#associatedconstant.NOT_ACCEPTABLE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

406 Not Acceptable \[[RFC7231, Section 6.5.6](https://tools.ietf.org/html/rfc7231#section-6.5.6)]

#### pub const [**PROXY_AUTHENTICATION_REQUIRED**](/docs/api/rust/tauri/about:blank#associatedconstant.PROXY_AUTHENTICATION_REQUIRED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

407 Proxy Authentication Required \[[RFC7235, Section 3.2](https://tools.ietf.org/html/rfc7235#section-3.2)]

#### pub const [**REQUEST_TIMEOUT**](/docs/api/rust/tauri/about:blank#associatedconstant.REQUEST_TIMEOUT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

408 Request Timeout \[[RFC7231, Section 6.5.7](https://tools.ietf.org/html/rfc7231#section-6.5.7)]

#### pub const [**CONFLICT**](/docs/api/rust/tauri/about:blank#associatedconstant.CONFLICT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

409 Conflict \[[RFC7231, Section 6.5.8](https://tools.ietf.org/html/rfc7231#section-6.5.8)]

#### pub const [**GONE**](/docs/api/rust/tauri/about:blank#associatedconstant.GONE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

410 Gone \[[RFC7231, Section 6.5.9](https://tools.ietf.org/html/rfc7231#section-6.5.9)]

#### pub const [**LENGTH_REQUIRED**](/docs/api/rust/tauri/about:blank#associatedconstant.LENGTH_REQUIRED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

411 Length Required \[[RFC7231, Section 6.5.10](https://tools.ietf.org/html/rfc7231#section-6.5.10)]

#### pub const [**PRECONDITION_FAILED**](/docs/api/rust/tauri/about:blank#associatedconstant.PRECONDITION_FAILED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

412 Precondition Failed \[[RFC7232, Section 4.2](https://tools.ietf.org/html/rfc7232#section-4.2)]

#### pub const [**PAYLOAD_TOO_LARGE**](/docs/api/rust/tauri/about:blank#associatedconstant.PAYLOAD_TOO_LARGE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

413 Payload Too Large \[[RFC7231, Section 6.5.11](https://tools.ietf.org/html/rfc7231#section-6.5.11)]

#### pub const [**URI_TOO_LONG**](/docs/api/rust/tauri/about:blank#associatedconstant.URI_TOO_LONG): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

414 URI Too Long \[[RFC7231, Section 6.5.12](https://tools.ietf.org/html/rfc7231#section-6.5.12)]

#### pub const [**UNSUPPORTED_MEDIA_TYPE**](/docs/api/rust/tauri/about:blank#associatedconstant.UNSUPPORTED_MEDIA_TYPE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

415 Unsupported Media Type \[[RFC7231, Section 6.5.13](https://tools.ietf.org/html/rfc7231#section-6.5.13)]

#### pub const [**RANGE_NOT_SATISFIABLE**](/docs/api/rust/tauri/about:blank#associatedconstant.RANGE_NOT_SATISFIABLE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

416 Range Not Satisfiable \[[RFC7233, Section 4.4](https://tools.ietf.org/html/rfc7233#section-4.4)]

#### pub const [**EXPECTATION_FAILED**](/docs/api/rust/tauri/about:blank#associatedconstant.EXPECTATION_FAILED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

417 Expectation Failed \[[RFC7231, Section 6.5.14](https://tools.ietf.org/html/rfc7231#section-6.5.14)]

#### pub const [**IM_A_TEAPOT**](/docs/api/rust/tauri/about:blank#associatedconstant.IM_A_TEAPOT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

418 I’m a teapot \[curiously not registered by IANA but [RFC2324](https://tools.ietf.org/html/rfc2324)]

#### pub const [**MISDIRECTED_REQUEST**](/docs/api/rust/tauri/about:blank#associatedconstant.MISDIRECTED_REQUEST): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

421 Misdirected Request [RFC7540, Section 9.1.2](http://tools.ietf.org/html/rfc7540#section-9.1.2)

#### pub const [**UNPROCESSABLE_ENTITY**](/docs/api/rust/tauri/about:blank#associatedconstant.UNPROCESSABLE_ENTITY): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

422 Unprocessable Entity \[[RFC4918](https://tools.ietf.org/html/rfc4918)]

#### pub const [**LOCKED**](/docs/api/rust/tauri/about:blank#associatedconstant.LOCKED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

423 Locked \[[RFC4918](https://tools.ietf.org/html/rfc4918)]

#### pub const [**FAILED_DEPENDENCY**](/docs/api/rust/tauri/about:blank#associatedconstant.FAILED_DEPENDENCY): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

424 Failed Dependency \[[RFC4918](https://tools.ietf.org/html/rfc4918)]

#### pub const [**UPGRADE_REQUIRED**](/docs/api/rust/tauri/about:blank#associatedconstant.UPGRADE_REQUIRED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

426 Upgrade Required \[[RFC7231, Section 6.5.15](https://tools.ietf.org/html/rfc7231#section-6.5.15)]

#### pub const [**PRECONDITION_REQUIRED**](/docs/api/rust/tauri/about:blank#associatedconstant.PRECONDITION_REQUIRED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

428 Precondition Required \[[RFC6585](https://tools.ietf.org/html/rfc6585)]

#### pub const [**TOO_MANY_REQUESTS**](/docs/api/rust/tauri/about:blank#associatedconstant.TOO_MANY_REQUESTS): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

429 Too Many Requests \[[RFC6585](https://tools.ietf.org/html/rfc6585)]

#### pub const [**REQUEST_HEADER_FIELDS_TOO_LARGE**](/docs/api/rust/tauri/about:blank#associatedconstant.REQUEST_HEADER_FIELDS_TOO_LARGE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

431 Request Header Fields Too Large \[[RFC6585](https://tools.ietf.org/html/rfc6585)]

#### pub const [**UNAVAILABLE_FOR_LEGAL_REASONS**](/docs/api/rust/tauri/about:blank#associatedconstant.UNAVAILABLE_FOR_LEGAL_REASONS): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

451 Unavailable For Legal Reasons \[[RFC7725](http://tools.ietf.org/html/rfc7725)]

#### pub const [**INTERNAL_SERVER_ERROR**](/docs/api/rust/tauri/about:blank#associatedconstant.INTERNAL_SERVER_ERROR): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

500 Internal Server Error \[[RFC7231, Section 6.6.1](https://tools.ietf.org/html/rfc7231#section-6.6.1)]

#### pub const [**NOT_IMPLEMENTED**](/docs/api/rust/tauri/about:blank#associatedconstant.NOT_IMPLEMENTED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

501 Not Implemented \[[RFC7231, Section 6.6.2](https://tools.ietf.org/html/rfc7231#section-6.6.2)]

#### pub const [**BAD_GATEWAY**](/docs/api/rust/tauri/about:blank#associatedconstant.BAD_GATEWAY): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

502 Bad Gateway \[[RFC7231, Section 6.6.3](https://tools.ietf.org/html/rfc7231#section-6.6.3)]

#### pub const [**SERVICE_UNAVAILABLE**](/docs/api/rust/tauri/about:blank#associatedconstant.SERVICE_UNAVAILABLE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

503 Service Unavailable \[[RFC7231, Section 6.6.4](https://tools.ietf.org/html/rfc7231#section-6.6.4)]

#### pub const [**GATEWAY_TIMEOUT**](/docs/api/rust/tauri/about:blank#associatedconstant.GATEWAY_TIMEOUT): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

504 Gateway Timeout \[[RFC7231, Section 6.6.5](https://tools.ietf.org/html/rfc7231#section-6.6.5)]

#### pub const [**HTTP_VERSION_NOT_SUPPORTED**](/docs/api/rust/tauri/about:blank#associatedconstant.HTTP_VERSION_NOT_SUPPORTED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

505 HTTP Version Not Supported \[[RFC7231, Section 6.6.6](https://tools.ietf.org/html/rfc7231#section-6.6.6)]

#### pub const [**VARIANT_ALSO_NEGOTIATES**](/docs/api/rust/tauri/about:blank#associatedconstant.VARIANT_ALSO_NEGOTIATES): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

506 Variant Also Negotiates \[[RFC2295](https://tools.ietf.org/html/rfc2295)]

#### pub const [**INSUFFICIENT_STORAGE**](/docs/api/rust/tauri/about:blank#associatedconstant.INSUFFICIENT_STORAGE): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

507 Insufficient Storage \[[RFC4918](https://tools.ietf.org/html/rfc4918)]

#### pub const [**LOOP_DETECTED**](/docs/api/rust/tauri/about:blank#associatedconstant.LOOP_DETECTED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

508 Loop Detected \[[RFC5842](https://tools.ietf.org/html/rfc5842)]

#### pub const [**NOT_EXTENDED**](/docs/api/rust/tauri/about:blank#associatedconstant.NOT_EXTENDED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

510 Not Extended \[[RFC2774](https://tools.ietf.org/html/rfc2774)]

#### pub const [**NETWORK_AUTHENTICATION_REQUIRED**](/docs/api/rust/tauri/about:blank#associatedconstant.NETWORK_AUTHENTICATION_REQUIRED): [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#323-515 "goto source code")

511 Network Authentication Required \[[RFC6585](https://tools.ietf.org/html/rfc6585)]

## Trait Implementations

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#202-206 "goto source code")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#203 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl [Default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html "trait core::default::Default") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#227-232 "goto source code")

#### pub fn [default](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)() -> [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#229 "goto source code")

Returns the “default value” for a type. [Read more](https://doc.rust-lang.org/1.54.0/core/default/trait.Default.html#tymethod.default)

### impl [Display](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html "trait core::fmt::Display") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#216-225 "goto source code")

Formats the status code, _including_ the canonical reason.

## Example

```rs
assert_eq!(format!("{}", StatusCode::OK), "200 OK");
```

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#217 "goto source code")

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Display.html#tymethod.fmt)

### impl&lt;'a> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;&'a [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")> for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#263-268 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: &'a [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")) -> [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#265 "goto source code")

Performs the conversion.

### impl [FromStr](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html "trait core::str::traits::FromStr") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#255-261 "goto source code")

#### type [Err](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#associatedtype.Err) = [InvalidStatusCode](/docs/api/rust/tauri/struct.InvalidStatusCode "struct tauri::http&#x3A;:status::InvalidStatusCode")

The associated error which can be returned from parsing.

#### pub fn [from_str](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)(s: &[str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode"), [InvalidStatusCode](/docs/api/rust/tauri/struct.InvalidStatusCode "struct tauri::http&#x3A;:status::InvalidStatusCode")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#258 "goto source code")

Parses a string `s` to return a value of this type. [Read more](https://doc.rust-lang.org/1.54.0/core/str/traits/trait.FromStr.html#tymethod.from_str)

### impl [Hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html "trait core::hash::Hash") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

#### pub fn [hash](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)&lt;\_\_H>(&self, state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)\_\_H) where \_\_H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

Feeds this value into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#tymethod.hash)

#### fn [hash_slice](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)&lt;H>(data: [&\[Self\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html), state: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)H) where H: [Hasher](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "trait core::hash::Hasher"),1.3.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/hash/mod.rs.html#211-213 "goto source code")

Feeds a slice of this type into the given [`Hasher`](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hasher.html "Hasher"). [Read more](https://doc.rust-lang.org/1.54.0/core/hash/trait.Hash.html#method.hash_slice)

### impl [Ord](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html "trait core::cmp::Ord") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

#### pub fn [cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#tymethod.cmp)(&self, other: &[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")) -> [Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

This method returns an [`Ordering`](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "Ordering") between `self` and `other`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#tymethod.cmp)

#### \#\[must_use]fn [max](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.max)(self, other: Self) -> Self1.21.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#738-740 "goto source code")

Compares and returns the maximum of two values. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.max)

#### \#\[must_use]fn [min](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.min)(self, other: Self) -> Self1.21.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#758-760 "goto source code")

Compares and returns the minimum of two values. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.min)

#### \#\[must_use]fn [clamp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.clamp)(self, min: Self, max: Self) -> Self1.50.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#783-785 "goto source code")

Restrict a value to a certain interval. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html#method.clamp)

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")> for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### pub fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

This method tests for `!=`.

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)> for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#234-239 "goto source code")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#236 "goto source code")

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### \#\[must_use]fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#213 "goto source code")

This method tests for `!=`.

### impl [PartialOrd](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html "trait core::cmp::PartialOrd")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")> for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

#### pub fn [partial_cmp](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)(&self, other: &[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")) -> [Option](https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html "enum core::option::Option")&lt;[Ordering](https://doc.rust-lang.org/1.54.0/core/cmp/enum.Ordering.html "enum core::cmp::Ordering")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

This method returns an ordering between `self` and `other` values if one exists. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp)

#### \#\[must_use]fn [lt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#978 "goto source code")

This method tests less than (for `self` and `other`) and is used by the `<` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.lt)

#### \#\[must_use]fn [le](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#997 "goto source code")

This method tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.le)

#### \#\[must_use]fn [gt](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1019 "goto source code")

This method tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.gt)

#### \#\[must_use]fn [ge](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)(&self, other: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Rhs) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/cmp.rs.html#1038 "goto source code")

This method tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialOrd.html#method.ge)

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)> for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#270-277 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidStatusCode](/docs/api/rust/tauri/struct.InvalidStatusCode "struct tauri::http&#x3A;:status::InvalidStatusCode")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: [&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode"), &lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[&'a \[](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)[u8](https://doc.rust-lang.org/1.54.0/std/primitive.u8.html)[\]](https://doc.rust-lang.org/1.54.0/std/primitive.slice.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#274 "goto source code")

Performs the conversion.

### impl&lt;'a> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)> for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#279-286 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidStatusCode](/docs/api/rust/tauri/struct.InvalidStatusCode "struct tauri::http&#x3A;:status::InvalidStatusCode")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: &'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode"), &lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;&'a [str](https://doc.rust-lang.org/1.54.0/std/primitive.str.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#283 "goto source code")

Performs the conversion.

### impl [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)> for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#288-295 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [InvalidStatusCode](/docs/api/rust/tauri/struct.InvalidStatusCode "struct tauri::http&#x3A;:status::InvalidStatusCode")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)( t: [u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html) ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode"), &lt;[StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode") as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;[u16](https://doc.rust-lang.org/1.54.0/std/primitive.u16.html)>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#292 "goto source code")

Performs the conversion.

### impl [Copy](https://doc.rust-lang.org/1.54.0/core/marker/trait.Copy.html "trait core::marker::Copy") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

### impl [Eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html "trait core::cmp::Eq") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

### impl [StructuralEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralEq.html "trait core::marker::StructuralEq") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

### impl [StructuralPartialEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

[\[src\]](https://docs.rs/http/0.2.4/src/http/status.rs.html#44 "goto source code")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [StatusCode](/docs/api/rust/tauri/struct.StatusCode "struct tauri::http&#x3A;:status::StatusCode")

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
  