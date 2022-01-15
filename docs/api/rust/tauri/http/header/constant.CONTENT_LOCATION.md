---
title: Constant tauri::http::header::CONTENT_LOCATION
sidebar_label: constant.CONTENT_LOCATION
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::CONTENT_LOCATION,

```rs
pub const CONTENT_LOCATION: HeaderName;
```

Expand description

Indicates an alternate location for the returned data.

The principal use case is to indicate the URL of the resource transmitted as the result of content negotiation.

Location and Content-Location are different: Location indicates the target of a redirection (or the URL of a newly created document), while Content-Location indicates the direct URL to use to access the resource, without the need of further content negotiation. Location is a header associated with the response, while Content-Location is associated with the entity returned.
  