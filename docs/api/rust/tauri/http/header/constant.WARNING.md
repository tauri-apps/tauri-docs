---
title: Constant tauri::http::header::WARNING
sidebar_label: constant.WARNING
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::WARNING,

```rs
pub const WARNING: HeaderName;
```

Expand description

General HTTP header contains information about possible problems with the status of the message.

More than one `warning` header may appear in a response. Warning header fields can in general be applied to any message, however some warn-codes are specific to caches and can only be applied to response messages.
  