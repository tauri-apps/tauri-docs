---
title: Constant tauri::http::header::PUBLIC_KEY_PINS_REPORT_ONLY
sidebar_label: constant.PUBLIC_KEY_PINS_REPORT_ONLY
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::PUBLIC_KEY_PINS_REPORT_ONLY,

```rs
pub const PUBLIC_KEY_PINS_REPORT_ONLY: HeaderName;
```

Expand description

Sends reports of pinning violation to the report-uri specified in the header.

Unlike `Public-Key-Pins`, this header still allows browsers to connect to the server if the pinning is violated.
  