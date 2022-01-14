---
title: Constant tauri::http::header::TE
sidebar_label: constant.TE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::TE,

```rs
pub const TE: HeaderName;
```

Expand description

Informs the server of transfer encodings willing to be accepted as part of the response.

See also the Transfer-Encoding response header for more details on transfer encodings. Note that chunked is always acceptable for HTTP/1.1 recipients and you that don’t have to specify “chunked” using the TE header. However, it is useful for setting if the client is accepting trailer fields in a chunked transfer coding using the “trailers” value.
  