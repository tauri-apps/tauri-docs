---
title: Constant tauri::http::header::HOST
sidebar_label: constant.HOST
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::HOST,

```rs
pub const HOST: HeaderName;
```

Expand description

Specifies the domain name of the server and (optionally) the TCP port number on which the server is listening.

If no port is given, the default port for the service requested (e.g., “80” for an HTTP URL) is implied.

A Host header field must be sent in all HTTP/1.1 request messages. A 400 (Bad Request) status code will be sent to any HTTP/1.1 request message that lacks a Host header field or contains more than one.
  