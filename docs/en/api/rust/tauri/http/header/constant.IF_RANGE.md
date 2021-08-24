---
title: Constant tauri::http::header::IF_RANGE
sidebar_label: constant.IF_RANGE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::IF_RANGE,

```rs
pub const IF_RANGE: HeaderName;
```

Expand description

Makes a request conditional based on range.

The If-Range HTTP request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a 206 Partial Content answer with the appropriate body. If the condition is not fulfilled, the full resource is sent back, with a 200 OK status.

This header can be used either with a Last-Modified validator, or with an ETag, but not with both.

The most common use case is to resume a download, to guarantee that the stored resource has not been modified since the last fragment has been received.
  