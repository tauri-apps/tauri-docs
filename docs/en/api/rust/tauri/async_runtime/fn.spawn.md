---
title: "fn.spawn"
---

# Function [tauri](/docs/api/rust/tauri/../index.html)::​[async_runtime](/docs/api/rust/tauri/index.html)::​[spawn](/docs/api/rust/tauri/)

```rs
pub fn spawn<F>(task: F) where
    F: Future + Send + 'static,
    F::Output: Send + 'static, 
```

Spawn a future onto the runtime.
