---
title: Constant tauri::http::header::ALLOW
sidebar_label: constant.ALLOW
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ALLOW,

```rs
pub const ALLOW: HeaderName;
```

Expand description

Lists the set of methods support by a resource.

This header must be sent if the server responds with a 405 Method Not Allowed status code to indicate which request methods can be used. An empty Allow header indicates that the resource allows no request methods, which might occur temporarily for a given resource, for example.
  