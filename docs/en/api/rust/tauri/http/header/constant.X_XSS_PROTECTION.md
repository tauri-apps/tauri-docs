---
title: Constant tauri::http::header::X_XSS_PROTECTION
sidebar_label: constant.X_XSS_PROTECTION
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::X_XSS_PROTECTION,

```rs
pub const X_XSS_PROTECTION: HeaderName;
```

Expand description

Stop pages from loading when an XSS attack is detected.

The HTTP X-XSS-Protection response header is a feature of Internet Explorer, Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks. Although these protections are largely unnecessary in modern browsers when sites implement a strong Content-Security-Policy that disables the use of inline JavaScript (‘unsafe-inline’), they can still provide protections for users of older web browsers that don’t yet support CSP.
  