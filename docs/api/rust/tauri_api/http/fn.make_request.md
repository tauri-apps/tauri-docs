---
title: "fn.make_request"
---

# Function [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[http](/docs/api/rust/tauri_api/index.html)::​[make_request](/docs/api/rust/tauri_api/)

    pub fn make_request(options: HttpRequestOptions) -> Result<String>

Executes an HTTP request

The response will be transformed to String, If reading the response as binary, the byte array will be serialized using serde_json
      