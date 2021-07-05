---
title: "fn.execute_promise"
---

# Function [tauri](/docs/api/rust/tauri/index.html)::​[execute_promise](/docs/api/rust/tauri/)

    pub fn execute_promise<T: 'static, R: Serialize, F: FnOnce() -> Result<R> + Send + 'static>(
        webview: &mut WebView<T>, 
        task: F, 
        success_callback: String, 
        error_callback: String
    )

Asynchronously executes the given task and evaluates its Result to the JS promise described by the `success_callback` and `error_callback` function names.

If the Result `is_ok()`, the callback will be the `success_callback` function name and the argument will be the Ok value. If the Result `is_err()`, the callback will be the `error_callback` function name and the argument will be the Err value.
