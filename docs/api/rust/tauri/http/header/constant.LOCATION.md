---
title: Constant tauri::http::header::LOCATION
sidebar_label: constant.LOCATION
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::LOCATION,

```rs
pub const LOCATION: HeaderName;
```

Expand description

Indicates the URL to redirect a page to.

The Location response header indicates the URL to redirect a page to. It only provides a meaning when served with a 3xx status response.

The HTTP method used to make the new request to fetch the page pointed to by Location depends of the original method and of the kind of redirection:

-   If 303 (See Also) responses always lead to the use of a GET method, 307 (Temporary Redirect) and 308 (Permanent Redirect) don’t change the method used in the original request;
-   301 (Permanent Redirect) and 302 (Found) doesn’t change the method most of the time, though older user-agents may (so you basically don’t know).

All responses with one of these status codes send a Location header.

Beside redirect response, messages with 201 (Created) status also include the Location header. It indicates the URL to the newly created resource.

Location and Content-Location are different: Location indicates the target of a redirection (or the URL of a newly created resource), while Content-Location indicates the direct URL to use to access the resource when content negotiation happened, without the need of further content negotiation. Location is a header associated with the response, while Content-Location is associated with the entity returned.
  