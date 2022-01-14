---
title: Constant tauri::http::header::RANGE
sidebar_label: constant.RANGE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::RANGE,

```rs
pub const RANGE: HeaderName;
```

Expand description

Indicates the part of a document that the server should return.

Several parts can be requested with one Range header at once, and the server may send back these ranges in a multipart document. If the server sends back ranges, it uses the 206 Partial Content for the response. If the ranges are invalid, the server returns the 416 Range Not Satisfiable error. The server can also ignore the Range header and return the whole document with a 200 status code.
  