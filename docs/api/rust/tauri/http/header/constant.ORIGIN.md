---
title: Constant tauri::http::header::ORIGIN
sidebar_label: constant.ORIGIN
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ORIGIN,

```rs
pub const ORIGIN: HeaderName;
```

Expand description

Indicates where a fetch originates from.

It doesn’t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn’t disclose the whole path.
  