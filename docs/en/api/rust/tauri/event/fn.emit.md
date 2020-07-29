---
title: "fn.emit"
---

# Function [tauri](/docs/api/rust/tauri/../index.html)::​[event](/docs/api/rust/tauri/index.html)::​[emit](/docs/api/rust/tauri/)

    pub fn emit<S: Serialize>(
        webview: &mut WebviewMut, 
        event: impl AsRef<str> + Send + 'static, 
        payload: Option<S>
    ) -> Result<()>

Emits an event to JS.
