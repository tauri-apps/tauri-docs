---
title: Constant tauri::http::header::ACCEPT_RANGES
sidebar_label: constant.ACCEPT_RANGES
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ACCEPT_RANGES,

```rs
pub const ACCEPT_RANGES: HeaderName;
```

Expand description

Marker used by the server to advertise partial request support.

The Accept-Ranges response HTTP header is a marker used by the server to advertise its support of partial requests. The value of this field indicates the unit that can be used to define a range.

In presence of an Accept-Ranges header, the browser may try to resume an interrupted download, rather than to start it from the start again.
  