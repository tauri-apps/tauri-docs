---
title: "fn.listen"
---

# Function [tauri](/docs/api/rust/tauri/../index.html)::​[event](/docs/api/rust/tauri/index.html)::​[listen](/docs/api/rust/tauri/)

    pub fn listen<F: FnMut(Option<String>) + Send + 'static>(id: String, handler: F)
