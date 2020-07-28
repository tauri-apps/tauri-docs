---
title: "fn.read_dir"
---

# Function [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[dir](/docs/api/rust/tauri_api/index.html)::​[read_dir](/docs/api/rust/tauri_api/)

    pub fn read_dir<P: AsRef<Path>>(
        path: P, 
        recursive: bool
    ) -> Result<Vec<DiskEntry>>

Reads a directory. Can perform recursive operations.
