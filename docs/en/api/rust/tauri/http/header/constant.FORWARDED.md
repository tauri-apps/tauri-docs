---
title: Constant tauri::http::header::FORWARDED
sidebar_label: constant.FORWARDED
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::FORWARDED,

```rs
pub const FORWARDED: HeaderName;
```

Expand description

Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.

The alternative and de-facto standard versions of this header are the X-Forwarded-For, X-Forwarded-Host and X-Forwarded-Proto headers.

This header is used for debugging, statistics, and generating location-dependent content and by design it exposes privacy sensitive information, such as the IP address of the client. Therefore the user’s privacy must be kept in mind when deploying this header.
  