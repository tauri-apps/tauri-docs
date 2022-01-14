---
title: Fn tauri::api::dir::with_temp_dir
sidebar_label: fn.with_temp_dir
custom_edit_url: null
---

  # Function tauri::api::dir::with_temp_dir,

```rs
pub fn with_temp_dir<F: FnOnce(&TempDir)>(callback: F) -> Result<()>
```

Expand description

Runs a closure with a temporary directory argument.
  