---
title: "fn.execute_promise_sync"
---

# Function [tauri](/docs/api/rust/tauri/index.html)::​[execute\\\_promise\\\_sync](/docs/api/rust/tauri/)

    pub fn execute\_promise\_sync<T: 'static, F: FnOnce() -> Result<String> + Send + 'static>(
        webview: &mut WebView<T>, 
        task: F, 
        callback: String, 
        error: String
    )

      