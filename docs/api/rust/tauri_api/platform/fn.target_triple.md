---
title: "fn.target_triple"
---

# Function [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[platform](/docs/api/rust/tauri_api/index.html)::​[target_triple](/docs/api/rust/tauri_api/)

    pub fn target_triple() -> Result<String, Error>

Try to determine the current target triple.

Returns a target triple (e.g. `x86_64-unknown-linux-gnu` or `i686-pc-windows-msvc`) or an `Error::Config` if the current config cannot be determined or is not some combination of the following values: `linux, mac, windows` -- `i686, x86, armv7` -- `gnu, musl, msvc`

-   Errors:

    -   Unexpected system config
<<<<<<< HEAD
      
=======
>>>>>>> dev
