---
title: "fn.target_triple"
---

# Function [tauri\\\_api](/docs/api/rust/tauri\_api/../index.html)::​[platform](/docs/api/rust/tauri\_api/index.html)::​[target\\\_triple](/docs/api/rust/tauri\_api/)

    pub fn target\_triple() -> Result<String, Error>

Try to determine the current target triple.

Returns a target triple (e.g. `x86\_64-unknown-linux-gnu` or `i686-pc-windows-msvc`) or an `Error::Config` if the current config cannot be determined or is not some combination of the following values: `linux, mac, windows` -- `i686, x86, armv7` -- `gnu, musl, msvc`

-   Errors:

    -   Unexpected system config

      