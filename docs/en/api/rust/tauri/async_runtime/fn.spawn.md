---
title: Fn tauri::async_runtime::spawn
sidebar_label: fn.spawn
---

# Function tauri::async_runtime::spawn,\[−]\[src],\[−],−

```rs
pub fn spawn<F>(task: F) where
    F: Future + Send + 'static,
    F::Output: Send + 'static, 
```

Spawn a future onto the runtime.
