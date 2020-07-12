---
title: "fn.resolve_path"
---

# Function [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[path](/docs/api/rust/tauri_api/index.html)::​[resolve_path](/docs/api/rust/tauri_api/)

    pub fn resolve_path<P: AsRef<Path>>(
        path: P, 
        dir: Option<BaseDirectory>
    ) -> Result<PathBuf>

Resolves the path with the optional base directory.

# [Example](/docs/api/rust/tauri_api/about:blank#example)

    use tauri_api::path::{resolve_path, BaseDirectory};
    let path = resolve_path("path/to/something", Some(BaseDirectory::Config))
      .expect("failed to resolve path");
    // path is equal to "/home/${whoami}/.config/path/to/something" on Linux
