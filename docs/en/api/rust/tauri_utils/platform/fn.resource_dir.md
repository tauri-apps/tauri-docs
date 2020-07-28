---
title: "fn.resource_dir"
---

# Function [tauri_utils](/docs/api/rust/tauri_utils/../index.html)::​[platform](/docs/api/rust/tauri_utils/index.html)::​[resource_dir](/docs/api/rust/tauri_utils/)

    pub fn resource_dir() -> Result<PathBuf>

Computes the resource directory of the current environment.

On Windows, it's the path to the executable.

On Linux, it's `/usr/lib/${exe_name}` when running the bundled app, and `${exe_dir}/../lib/${exe_name}` when running the app from `src-tauri/target/(debug|release)/`.

On MacOS, it's `${exe_dir}../Resources` (inside .app).
