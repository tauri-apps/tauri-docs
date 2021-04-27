---
title: "fn.with_temp_dir"
---

# Function [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[dir](/docs/api/rust/tauri/index.html)::​[with_temp_dir](/docs/api/rust/tauri/)

```rs
pub fn with_temp_dir<F: FnOnce(&TempDir)>(callback: F) -> Result<()>
```

Runs a closure with a temp dir argument.
