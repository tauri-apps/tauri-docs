---
title: Constant tauri::http::header::SEC_WEBSOCKET_KEY
sidebar_label: constant.SEC_WEBSOCKET_KEY
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::SEC_WEBSOCKET_KEY,

```rs
pub const SEC_WEBSOCKET_KEY: HeaderName;
```

Expand description

The |Sec-WebSocket-Key| header field is used in the WebSocket opening handshake. It is sent from the client to the server to provide part of the information used by the server to prove that it received a valid WebSocket opening handshake. This helps ensure that the server does not accept connections from non-WebSocket clients (e.g., HTTP clients) that are being abused to send data to unsuspecting WebSocket servers.
  