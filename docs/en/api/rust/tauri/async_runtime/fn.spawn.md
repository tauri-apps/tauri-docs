---
title: Fn tauri::async_runtime::spawn
sidebar_label: fn.spawn
custom_edit_url: null
---

  # Function tauri::async_runtime::spawn,

```rs
pub fn spawn<F>(task: F) -> JoinHandle<F::Output>ⓘ
Notable traits for JoinHandle<T>
impl<T> Future for JoinHandle<T>    type Output = Result<T>;
 where
    F: Future + Send + 'static,
    F::Output: Send + 'static, 
```

Expand description

Spawns a future onto the runtime.
  