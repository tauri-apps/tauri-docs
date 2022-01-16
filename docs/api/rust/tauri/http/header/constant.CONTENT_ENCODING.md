---
title: Constant tauri::http::header::CONTENT_ENCODING
sidebar_label: constant.CONTENT_ENCODING
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::CONTENT_ENCODING,

```rs
pub const CONTENT_ENCODING: HeaderName;
```

Expand description

Used to compress the media-type.

When present, its value indicates what additional content encoding has been applied to the entity-body. It lets the client know, how to decode in order to obtain the media-type referenced by the Content-Type header.

It is recommended to compress data as much as possible and therefore to use this field, but some types of resources, like jpeg images, are already compressed. Sometimes using additional compression doesn’t reduce payload size and can even make the payload longer.
  