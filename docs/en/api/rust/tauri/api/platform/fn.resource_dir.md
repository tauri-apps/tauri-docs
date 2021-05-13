---
title: "fn.resource_dir"
---

# Function [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[platform](/docs/api/rust/tauri/index.html)::​[resource_dir](/docs/api/rust/tauri/)

    pub fn resource_dir(package_info: &PackageInfo) -> Result<PathBuf, Error>

Computes the resource directory of the current environment.

On Windows, it’s the path to the executable.

On Linux, when running in an AppImage the `APPDIR` variable will be set to the mounted location of the app, and the resource dir will be `${APPDIR}/usr/lib/${exe_name}`. If not running in an AppImage, the path is `/usr/lib/${exe_name}`. When running the app from `src-tauri/target/(debug|release)/`, the path is `${exe_dir}/../lib/${exe_name}`.

On MacOS, it’s `${exe_dir}../Resources` (inside .app).
