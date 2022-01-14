---
title: Constant tauri::http::header::CONTENT_SECURITY_POLICY_REPORT_ONLY
sidebar_label: constant.CONTENT_SECURITY_POLICY_REPORT_ONLY
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::CONTENT_SECURITY_POLICY_REPORT_ONLY,

```rs
pub const CONTENT_SECURITY_POLICY_REPORT_ONLY: HeaderName;
```

Expand description

Allows experimenting with policies by monitoring their effects.

The HTTP Content-Security-Policy-Report-Only response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.
  