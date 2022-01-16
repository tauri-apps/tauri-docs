---
title: Constant tauri::http::header::TRANSFER_ENCODING
sidebar_label: constant.TRANSFER_ENCODING
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::TRANSFER_ENCODING,

```rs
pub const TRANSFER_ENCODING: HeaderName;
```

Expand description

Specifies the form of encoding used to safely transfer the entity to the client.

`transfer-encoding` is a hop-by-hop header, that is applying to a message between two nodes, not to a resource itself. Each segment of a multi-node connection can use different `transfer-encoding` values. If you want to compress data over the whole connection, use the end-to-end header `content-encoding` header instead.

When present on a response to a `HEAD` request that has no body, it indicates the value that would have applied to the corresponding `GET` message.
  