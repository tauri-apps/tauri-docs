---
title: Constant tauri::http::header::ACCESS_CONTROL_ALLOW_CREDENTIALS
sidebar_label: constant.ACCESS_CONTROL_ALLOW_CREDENTIALS
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::ACCESS_CONTROL_ALLOW_CREDENTIALS,

```rs
pub const ACCESS_CONTROL_ALLOW_CREDENTIALS: HeaderName;
```

Expand description

Preflight response indicating if the response to the request can be exposed to the page.

The Access-Control-Allow-Credentials response header indicates whether or not the response to the request can be exposed to the page. It can be exposed when the true value is returned; it can’t in other cases.

Credentials are cookies, authorization headers or TLS client certificates.

When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. Note that simple GET requests are not preflighted, and so if a request is made for a resource with credentials, if this header is not returned with the resource, the response is ignored by the browser and not returned to web content.

The Access-Control-Allow-Credentials header works in conjunction with the XMLHttpRequest.withCredentials property or with the credentials option in the Request() constructor of the Fetch API. Credentials must be set on both sides (the Access-Control-Allow-Credentials header and in the XHR or Fetch request) in order for the CORS request with credentials to succeed.
  