---
title: "fn.emit"
---

# Function [tauri](/docs/api/rust/tauri/../index.html)::​[event](/docs/api/rust/tauri/index.html)::​[emit](/docs/api/rust/tauri/)

    pub fn emit<T: 'static, S: Serialize>(
        webview_handle: &Handle<T>, 
        event: impl AsRef<str> + Send + 'static, 
        payload: Option<S>
    ) -> Result<()>

Émet un événement au JS.
