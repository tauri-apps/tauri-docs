---
title: Constant tauri::http::header::ACCEPT_ENCODING
sidebar_label: constant.ACCEPT_ENCODING
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ACCEPT_ENCODING,

```rs
pub const ACCEPT_ENCODING: HeaderName;
```

Expand description

Advertises which content encoding the client is able to understand.

The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Encoding response header.

Even if both the client and the server supports the same compression algorithms, the server may choose not to compress the body of a response, if the identity value is also acceptable. Two common cases lead to this:

-   The data to be sent is already compressed and a second compression won’t lead to smaller data to be transmitted. This may the case with some image formats;
-   The server is overloaded and cannot afford the computational overhead induced by the compression requirement. Typically, Microsoft recommends not to compress if a server use more than 80 % of its computational power.

As long as the identity value, meaning no encryption, is not explicitly forbidden, by an identity;q=0 or a \*;q=0 without another explicitly set value for identity, the server must never send back a 406 Not Acceptable error.
  