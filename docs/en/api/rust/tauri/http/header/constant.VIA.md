---
title: Constant tauri::http::header::VIA
sidebar_label: constant.VIA
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::VIA,

```rs
pub const VIA: HeaderName;
```

Expand description

Added by proxies to track routing.

The `via` general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers. It is used for tracking message forwards, avoiding request loops, and identifying the protocol capabilities of senders along the request/response chain.
  