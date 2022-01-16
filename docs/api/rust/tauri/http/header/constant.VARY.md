---
title: Constant tauri::http::header::VARY
sidebar_label: constant.VARY
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::VARY,

```rs
pub const VARY: HeaderName;
```

Expand description

Determines how to match future requests with cached responses.

The `vary` HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server. It is used by the server to indicate which headers it used when selecting a representation of a resource in a content negotiation algorithm.

The `vary` header should be set on a 304 Not Modified response exactly like it would have been set on an equivalent 200 OK response.
  