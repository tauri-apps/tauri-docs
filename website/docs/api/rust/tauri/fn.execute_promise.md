---
title: "fn.execute_promise"
---

# Function [tauri](/docs/api/rust/tauri/index.html)::​[execute\\\_promise](/docs/api/rust/tauri/)

    pub fn execute\_promise<T: 'static, F: FnOnce() -> Result<String> + Send + 'static>(
        webview: &mut WebView<T>, 
        task: F, 
        callback: String, 
        error: String
    )

      