---
title: Constant tauri::http::header::EXPIRES
sidebar_label: constant.EXPIRES
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::EXPIRES,

```rs
pub const EXPIRES: HeaderName;
```

Expand description

Contains the date/time after which the response is considered stale.

Invalid dates, like the value 0, represent a date in the past and mean that the resource is already expired.

If there is a Cache-Control header with the “max-age” or “s-max-age” directive in the response, the Expires header is ignored.
  