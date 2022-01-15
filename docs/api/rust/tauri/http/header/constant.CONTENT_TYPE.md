---
title: Constant tauri::http::header::CONTENT_TYPE
sidebar_label: constant.CONTENT_TYPE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::CONTENT_TYPE,

```rs
pub const CONTENT_TYPE: HeaderName;
```

Expand description

Used to indicate the media type of the resource.

In responses, a Content-Type header tells the client what the content type of the returned content actually is. Browsers will do MIME sniffing in some cases and will not necessarily follow the value of this header; to prevent this behavior, the header X-Content-Type-Options can be set to nosniff.

In requests, (such as POST or PUT), the client tells the server what type of data is actually sent.
  