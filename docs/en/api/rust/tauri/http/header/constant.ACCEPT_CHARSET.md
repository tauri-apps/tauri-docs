---
title: Constant tauri::http::header::ACCEPT_CHARSET
sidebar_label: constant.ACCEPT_CHARSET
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ACCEPT_CHARSET,

```rs
pub const ACCEPT_CHARSET: HeaderName;
```

Expand description

Advertises which character set the client is able to understand.

The Accept-Charset request HTTP header advertises which character set the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice within the Content-Type response header. Browsers usually don’t set this header as the default value for each content type is usually correct and transmitting it would allow easier fingerprinting.

If the server cannot serve any matching character set, it can theoretically send back a 406 (Not Acceptable) error code. But, for a better user experience, this is rarely done and the more common way is to ignore the Accept-Charset header in this case.
  