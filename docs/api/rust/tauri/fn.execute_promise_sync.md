---
title: "fn.execute_promise_sync"
---

# Function [tauri](/docs/api/rust/tauri/index.html)::​[execute_promise_sync](/docs/api/rust/tauri/)

    pub fn execute_promise_sync<T: 'static, F: FnOnce() -> Result<String> + Send + 'static>(
        webview: &mut WebView<T>, 
        task: F, 
        callback: String, 
        error: String
    )
      