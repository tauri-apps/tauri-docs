---
title: "fn.format_callback"
---

# Function [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[rpc](/docs/api/rust/tauri/index.html)::​[format_callback](/docs/api/rust/tauri/)

```rs
pub fn format_callback<T: Serialize, S: AsRef<str>>(
    function_name: S, 
    arg: &T
) -> Result<String>
```

Formats a function name and argument to be evaluated as callback.

This will serialize primitive JSON types (e.g. booleans, strings, numbers, etc.) as JavaScript literals, but will serialize arrays and objects whose serialized JSON string is smaller than 1 GB and larger than 10 KiB with `JSON.parse('...')`. https&#x3A;//github.com/GoogleChromeLabs/json-parse-benchmark

# [Examples](/docs/api/rust/tauri/about:blank#examples)

```rs
use tauri::api::rpc::format_callback;
// callback with a string argument
let cb = format_callback("callback-function-name", &"the string response").expect("failed to serialize");
assert!(cb.contains(r#"window["callback-function-name"]("the string response")"#));
```

```rs
use tauri::api::rpc::format_callback;
use serde::Serialize;

// callback with large JSON argument
#[derive(Serialize)]
struct MyResponse {
  value: String
}

let cb = format_callback("callback-function-name", &MyResponse { value: String::from_utf8(vec&#33;[b'X'; 10_240]).unwrap()})
  .expect("failed to serialize");

assert!(cb.contains(r#"window["callback-function-name"](JSON.parse('{"value":"XXXXXXXXX"#));
```
