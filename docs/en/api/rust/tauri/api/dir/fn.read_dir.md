---
title: Fn tauri::api::dir::read_dir
sidebar_label: fn.read_dir
custom_edit_url: null
---

# Function tauri::api::dir::read_dir,\[−]\[src],\[−],−

```rs
pub fn read_dir<P: AsRef<Path>>(
    path: P, 
    recursive: bool
) -> Result<Vec<DiskEntry>>
```

Reads a directory. Can perform recursive operations.
