---
title: Constant tauri::http::header::SEC_WEBSOCKET_VERSION
sidebar_label: constant.SEC_WEBSOCKET_VERSION
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::SEC_WEBSOCKET_VERSION,

```rs
pub const SEC_WEBSOCKET_VERSION: HeaderName;
```

Expand description

The |Sec-WebSocket-Version| header field is used in the WebSocket opening handshake. It is sent from the client to the server to indicate the protocol version of the connection. This enables servers to correctly interpret the opening handshake and subsequent data being sent from the data, and close the connection if the server cannot interpret that data in a safe manner.
  