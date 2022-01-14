---
title: Constant tauri::http::header::ETAG
sidebar_label: constant.ETAG
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ETAG,

```rs
pub const ETAG: HeaderName;
```

Expand description

Identifier for a specific version of a resource.

This header allows caches to be more efficient, and saves bandwidth, as a web server does not need to send a full response if the content has not changed. On the other side, if the content has changed, etags are useful to help prevent simultaneous updates of a resource from overwriting each other (“mid-air collisions”).

If the resource at a given URL changes, a new Etag value must be generated. Etags are therefore similar to fingerprints and might also be used for tracking purposes by some servers. A comparison of them allows to quickly determine whether two representations of a resource are the same, but they might also be set to persist indefinitely by a tracking server.
  