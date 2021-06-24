---
title: Fn tauri::async_runtime::block_on
sidebar_label: fn.block_on
---

# Function tauri::async_runtime::block_on,\[−]\[src],\[−],−

```rs
pub fn block_on<F: Future>(task: F) -> F::Output
```

Run a future to completion on runtime.
