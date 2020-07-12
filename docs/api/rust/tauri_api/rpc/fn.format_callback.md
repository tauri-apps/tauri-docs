---
title: "fn.format_callback"
---

# Function [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[rpc](/docs/api/rust/tauri_api/index.html)::​[format_callback](/docs/api/rust/tauri_api/)

    pub fn format_callback<T: Into<JsonValue>, S: AsRef<str> + Display>(
        function_name: S, 
        arg: T
    ) -> String

Formats a function name and argument to be evaluated as callback.

# [Examples](/docs/api/rust/tauri_api/about:blank#examples)

    use tauri_api::rpc::format_callback;
    // callback with a string argument
    let cb = format_callback("callback-function-name", "the string response");
    assert!(cb.contains(r#"window["callback-function-name"]("the string response")"#));

    use tauri_api::rpc::format_callback;
    use serde::Serialize;
    // callback with JSON argument
    #[derive(Serialize)]
    struct MyResponse {
      value: String
    }
    let cb = format_callback("callback-function-name", serde_json::to_value(&MyResponse {
      value: "some value".to_string()
    }).expect("failed to serialize"));
    assert!(cb.contains(r#"window["callback-function-name"]({"value":"some value"})"#));
