---
title: Constant tauri::http::header::EXPECT
sidebar_label: constant.EXPECT
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::EXPECT,

```rs
pub const EXPECT: HeaderName;
```

Expand description

Indicates expectations that need to be fulfilled by the server in order to properly handle the request.

The only expectation defined in the specification is Expect: 100-continue, to which the server shall respond with:

-   100 if the information contained in the header is sufficient to cause an immediate success,
-   417 (Expectation Failed) if it cannot meet the expectation; or any other 4xx status otherwise.

For example, the server may reject a request if its Content-Length is too large.

No common browsers send the Expect header, but some other clients such as cURL do so by default.
  