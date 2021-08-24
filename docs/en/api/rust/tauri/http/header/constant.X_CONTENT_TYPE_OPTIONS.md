---
title: Constant tauri::http::header::X_CONTENT_TYPE_OPTIONS
sidebar_label: constant.X_CONTENT_TYPE_OPTIONS
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::X_CONTENT_TYPE_OPTIONS,

```rs
pub const X_CONTENT_TYPE_OPTIONS: HeaderName;
```

Expand description

Marker used by the server to indicate that the MIME types advertised in the `content-type` headers should not be changed and be followed.

This allows to opt-out of MIME type sniffing, or, in other words, it is a way to say that the webmasters knew what they were doing.

This header was introduced by Microsoft in IE 8 as a way for webmasters to block content sniffing that was happening and could transform non-executable MIME types into executable MIME types. Since then, other browsers have introduced it, even if their MIME sniffing algorithms were less aggressive.

Site security testers usually expect this header to be set.
  