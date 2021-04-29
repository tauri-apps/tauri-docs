---
title: "fn.read_dir"
---

# Function [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[dir](/docs/api/rust/tauri/index.html)::​[read_dir](/docs/api/rust/tauri/)

```rs
pub fn read_dir<P: AsRef<Path>>(
    path: P, 
    recursive: bool
) -> Result<Vec<DiskEntry>>
```

Reads a directory. Can perform recursive operations.
