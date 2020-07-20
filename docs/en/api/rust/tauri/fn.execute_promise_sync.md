---
title: "fn.execute_promise_sync"
---

# Function [tauri](/docs/api/rust/tauri/index.html)::​[execute_promise_sync](/docs/api/rust/tauri/)

    pub fn execute_promise_sync<T: 'static, R: Serialize, F: FnOnce() -> Result<R> + Send + 'static>(
        webview: &mut WebView<T>, 
        task: F, 
        callback: String, 
        error: String
    ) -> Result<()>

Synchronously executes the given task and evaluates its Result to the JS promise described by the `callback` and `error` function names.
