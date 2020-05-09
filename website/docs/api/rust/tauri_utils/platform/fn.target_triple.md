---
title: "fn.target_triple"
---

Function [tauri\\\_utils](/docs/api/rust/tauri\_utils/../index.html)::[platform](/docs/api/rust/tauri\_utils/index.html)::[target\\\_triple](/docs/api/rust/tauri\_utils/)
==========================================================================================================================================================================

```rust
pub fn target\\\_triple() -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"), [Error](/docs/api/rust/tauri\_utils/../../tauri\_utils/struct.Error.html "struct tauri\_utils::Error")\&gt;
```

Try to determine the current target triple.

Returns a target triple (e.g. <span>x86\_64-unknown-linux-gnu</span> or <span>i686-pc-windows-msvc</span>) or an <span>Error::Config</span> if the current config cannot be determined or is not some combination of the following values: <span>linux, mac, windows</span> -- <span>i686, x86, armv7</span> -- <span>gnu, musl, msvc</span>

*   Errors:
    *   Unexpected system config
      