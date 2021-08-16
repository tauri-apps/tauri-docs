---
title: Fn tauri::api::rpc::format_callback
sidebar_label: fn.format_callback
custom_edit_url: null
---

  # Function tauri::api::rpc::format_callback,

```rs
pub fn format_callback<T: Serialize, S: AsRef<str>>(
    function_name: S, 
    arg: &T
) -> Result<String>
```

Expand description

Formats a function name and argument to be evaluated as callback.

This will serialize primitive JSON types (e.g. booleans, strings, numbers, etc.) as JavaScript literals, but will serialize arrays and objects whose serialized JSON string is smaller than 1 GB and larger than 10 KiB with `JSON.parse('...')`. See [json-parse-benchmark](https://github.com/GoogleChromeLabs/json-parse-benchmark).

## Examples

-   With string literals:


```rs
use tauri::api::rpc::format_callback;
// callback with a string argument
let cb = format_callback("callback-function-name", &"the string response").unwrap();
assert!(cb.contains(r#"window["callback-function-name"]("the string response")"#));
```

-   With types implement [`serde::Serialize`](https://docs.rs/serde/1.0.127/serde/ser/trait.Serialize.html "serde::Serialize"):


```rs
use tauri::api::rpc::format_callback;
use serde::Serialize;

// callback with large JSON argument
#[derive(Serialize)]

struct MyResponse {
  value: String
}

let cb = format_callback(
  "callback-function-name",
  &MyResponse { value: String::from_utf8(vec&#33;[b'X'; 10_240]).unwrap()
}).expect("failed to serialize");

assert!(cb.contains(r#"window["callback-function-name"](JSON.parse('{"value":"XXXXXXXXX"#));
```
  