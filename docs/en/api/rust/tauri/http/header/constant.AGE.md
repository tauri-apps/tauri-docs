---
title: Constant tauri::http::header::AGE
sidebar_label: constant.AGE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::AGE,

```rs
pub const AGE: HeaderName;
```

Expand description

Indicates the time in seconds the object has been in a proxy cache.

The Age header is usually close to zero. If it is Age: 0, it was probably just fetched from the origin server; otherwise It is usually calculated as a difference between the proxy’s current date and the Date general header included in the HTTP response.
  