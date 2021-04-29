---
title: "fn.block_on"
---

# Function [tauri](/docs/api/rust/tauri/../index.html)::​[async_runtime](/docs/api/rust/tauri/index.html)::​[block_on](/docs/api/rust/tauri/)

```rs
pub fn block_on<F: Future>(task: F) -> F::Output
```

Run a future to completion on runtime.
