---
title: "fn.resolve_path"
---

# Function [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[path](/docs/api/rust/tauri/index.html)::​[resolve_path](/docs/api/rust/tauri/)

```rs
pub fn resolve_path<P: AsRef<Path>>(
    config: &Config, 
    package_info: &PackageInfo, 
    path: P, 
    dir: Option<BaseDirectory>
) -> Result<PathBuf>
```

Resolves the path with the optional base directory.

# [Example](/docs/api/rust/tauri/about:blank#example)

```rs
use tauri::api::{path::{resolve_path, BaseDirectory}, PackageInfo};
// we use the default config and a mock PackageInfo, but in an actual app you should get the Config created from tauri.conf.json and the app's PackageInfo instance
let path = resolve_path(
  &Default::default(),
  &PackageInfo {
    name: "app".into(),
    version: "1.0.0".into(),
  },
  "path/to/something",
  Some(BaseDirectory::Config)
 ).expect("failed to resolve path");
// path is equal to "/home/${whoami}/.config/path/to/something" on Linux
```
