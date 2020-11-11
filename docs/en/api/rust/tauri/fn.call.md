---
title: "fn.call"
---

# Function [tauri](/docs/api/rust/tauri/index.html)::​[call](/docs/api/rust/tauri/)

    pub fn call(
        webview: &mut Webview<'_>, 
        command: String, 
        args: Vec<String>, 
        callback: String, 
        error: String
    )

Calls the given command and evaluates its output to the JS promise described by the `callback` and `error` function names.
