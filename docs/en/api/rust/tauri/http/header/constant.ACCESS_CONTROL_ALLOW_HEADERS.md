---
title: Constant tauri::http::header::ACCESS_CONTROL_ALLOW_HEADERS
sidebar_label: constant.ACCESS_CONTROL_ALLOW_HEADERS
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ACCESS_CONTROL_ALLOW_HEADERS,

```rs
pub const ACCESS_CONTROL_ALLOW_HEADERS: HeaderName;
```

Expand description

Preflight response indicating permitted HTTP headers.

The Access-Control-Allow-Headers response header is used in response to a preflight request to indicate which HTTP headers will be available via Access-Control-Expose-Headers when making the actual request.

The simple headers, Accept, Accept-Language, Content-Language, Content-Type (but only with a MIME type of its parsed value (ignoring parameters) of either application/x-www-form-urlencoded, multipart/form-data, or text/plain), are always available and don’t need to be listed by this header.

This header is required if the request has an Access-Control-Request-Headers header.
  