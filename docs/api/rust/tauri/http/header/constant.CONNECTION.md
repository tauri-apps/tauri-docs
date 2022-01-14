---
title: Constant tauri::http::header::CONNECTION
sidebar_label: constant.CONNECTION
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::CONNECTION,

```rs
pub const CONNECTION: HeaderName;
```

Expand description

Controls whether or not the network connection stays open after the current transaction finishes.

If the value sent is keep-alive, the connection is persistent and not closed, allowing for subsequent requests to the same server to be done.

Except for the standard hop-by-hop headers (Keep-Alive, Transfer-Encoding, TE, Connection, Trailer, Upgrade, Proxy-Authorization and Proxy-Authenticate), any hop-by-hop headers used by the message must be listed in the Connection header, so that the first proxy knows he has to consume them and not to forward them further. Standard hop-by-hop headers can be listed too (it is often the case of Keep-Alive, but this is not mandatory.
  