---
title: Constant tauri::http::header::PUBLIC_KEY_PINS
sidebar_label: constant.PUBLIC_KEY_PINS
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::PUBLIC_KEY_PINS,

```rs
pub const PUBLIC_KEY_PINS: HeaderName;
```

Expand description

Associates a specific cryptographic public key with a certain server.

This decreases the risk of MITM attacks with forged certificates. If one or several keys are pinned and none of them are used by the server, the browser will not accept the response as legitimate, and will not display it.
  