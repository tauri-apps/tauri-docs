---
title: Constant tauri::http::header::SEC_WEBSOCKET_PROTOCOL
sidebar_label: constant.SEC_WEBSOCKET_PROTOCOL
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::SEC_WEBSOCKET_PROTOCOL,

```rs
pub const SEC_WEBSOCKET_PROTOCOL: HeaderName;
```

Expand description

The |Sec-WebSocket-Protocol| header field is used in the WebSocket opening handshake. It is sent from the client to the server and back from the server to the client to confirm the subprotocol of the connection. This enables scripts to both select a subprotocol and be sure that the server agreed to serve that subprotocol.
  