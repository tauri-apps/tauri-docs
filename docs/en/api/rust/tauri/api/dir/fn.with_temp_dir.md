---
title: Fn tauri::api::dir::with_temp_dir
sidebar_label: fn.with_temp_dir
---

# Function tauri::api::dir::with_temp_dir,\[−]\[src],\[−],−

```rs
pub fn with_temp_dir<F: FnOnce(&TempDir)>(callback: F) -> Result<()>
```

Runs a closure with a temp dir argument.
