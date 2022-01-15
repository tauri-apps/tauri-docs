---
title: Constant tauri::http::header::IF_UNMODIFIED_SINCE
sidebar_label: constant.IF_UNMODIFIED_SINCE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::IF_UNMODIFIED_SINCE,

```rs
pub const IF_UNMODIFIED_SINCE: HeaderName;
```

Expand description

Makes the request conditional based on the last modification date.

The If-Unmodified-Since request HTTP header makes the request conditional: the server will send back the requested resource, or accept it in the case of a POST or another non-safe method, only if it has not been last modified after the given date. If the request has been modified after the given date, the response will be a 412 (Precondition Failed) error.

There are two common use cases:

-   In conjunction non-safe methods, like POST, it can be used to implement an optimistic concurrency control, like done by some wikis: editions are rejected if the stored document has been modified since the original has been retrieved.
-   In conjunction with a range request with a If-Range header, it can be used to ensure that the new fragment requested comes from an unmodified document.
  