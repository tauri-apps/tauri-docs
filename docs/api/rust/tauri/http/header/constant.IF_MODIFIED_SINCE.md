---
title: Constant tauri::http::header::IF_MODIFIED_SINCE
sidebar_label: constant.IF_MODIFIED_SINCE
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::IF_MODIFIED_SINCE,

```rs
pub const IF_MODIFIED_SINCE: HeaderName;
```

Expand description

Makes a request conditional based on the modification date.

The If-Modified-Since request HTTP header makes the request conditional: the server will send back the requested resource, with a 200 status, only if it has been last modified after the given date. If the request has not been modified since, the response will be a 304 without any body; the Last-Modified header will contain the date of last modification. Unlike If-Unmodified-Since, If-Modified-Since can only be used with a GET or HEAD.

When used in combination with If-None-Match, it is ignored, unless the server doesn’t support If-None-Match.

The most common use case is to update a cached entity that has no associated ETag.
  