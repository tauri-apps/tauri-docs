---
title: Constant tauri::http::header::ACCEPT
sidebar_label: constant.ACCEPT
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ACCEPT,

```rs
pub const ACCEPT: HeaderName;
```

Expand description

Advertises which content types the client is able to understand.

The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending of the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image, video or a script.
  