---
title: Constant tauri::http::header::X_DNS_PREFETCH_CONTROL
sidebar_label: constant.X_DNS_PREFETCH_CONTROL
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::X_DNS_PREFETCH_CONTROL,

```rs
pub const X_DNS_PREFETCH_CONTROL: HeaderName;
```

Expand description

Controls DNS prefetching.

The `x-dns-prefetch-control` HTTP response header controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

This prefetching is performed in the background, so that the DNS is likely to have been resolved by the time the referenced items are needed. This reduces latency when the user clicks a link.
  