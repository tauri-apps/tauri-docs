---
title: Constant tauri::http::header::IF_MATCH
sidebar_label: constant.IF_MATCH
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::IF_MATCH,

```rs
pub const IF_MATCH: HeaderName;
```

Expand description

Makes a request conditional based on the E-Tag.

For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case.

The comparison with the stored ETag uses the strong comparison algorithm, meaning two files are considered identical byte to byte only. This is weakened when the W/ prefix is used in front of the ETag.

There are two common use cases:

-   For GET and HEAD methods, used in combination with an Range header, it can guarantee that the new ranges requested comes from the same resource than the previous one. If it doesn’t match, then a 416 (Range Not Satisfiable) response is returned.
-   For other methods, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned.
  