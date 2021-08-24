---
title: Constant tauri::http::header::IF_NONE_MATCH
sidebar_label: constant.IF_NONE_MATCH
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::IF_NONE_MATCH,

```rs
pub const IF_NONE_MATCH: HeaderName;
```

Expand description

Makes a request conditional based on the E-Tag.

The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn’t have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource’s ETag doesn’t match any of the values listed.

When the condition fails for GET and HEAD methods, then the server must return HTTP status code 304 (Not Modified). For methods that apply server-side changes, the status code 412 (Precondition Failed) is used. Note that the server generating a 304 response MUST generate any of the following header fields that would have been sent in a 200 (OK) response to the same request: Cache-Control, Content-Location, Date, ETag, Expires, and Vary.

The comparison with the stored ETag uses the weak comparison algorithm, meaning two files are considered identical not only if they are identical byte to byte, but if the content is equivalent. For example, two pages that would differ only by the date of generation in the footer would be considered as identical.

When used in combination with If-Modified-Since, it has precedence (if the server supports it).

There are two common use cases:

-   For `GET` and `HEAD` methods, to update a cached entity that has an associated ETag.
-   For other methods, and in particular for `PUT`, `If-None-Match` used with the `*` value can be used to save a file not known to exist, guaranteeing that another upload didn’t happen before, losing the data of the previous put; this problems is the variation of the lost update problem.
  