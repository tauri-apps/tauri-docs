---
title: Fn tauri::async_runtime::block_on
sidebar_label: fn.block_on
custom_edit_url: null
---

  # Function tauri::async_runtime::block_on,

```rs
pub fn block_on<F: Future>(task: F) -> F::Output
```

Expand description

Runs a future to completion on runtime.
  