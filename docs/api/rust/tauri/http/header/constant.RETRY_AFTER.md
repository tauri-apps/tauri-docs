---
title: Constant tauri::http::header::RETRY_AFTER
sidebar_label: constant.RETRY_AFTER
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::RETRY_AFTER,

```rs
pub const RETRY_AFTER: HeaderName;
```

Expand description

The Retry-After response HTTP header indicates how long the user agent should wait before making a follow-up request. There are two main cases this header is used:

-   When sent with a 503 (Service Unavailable) response, it indicates how long the service is expected to be unavailable.
-   When sent with a redirect response, such as 301 (Moved Permanently), it indicates the minimum time that the user agent is asked to wait before issuing the redirected request.
  