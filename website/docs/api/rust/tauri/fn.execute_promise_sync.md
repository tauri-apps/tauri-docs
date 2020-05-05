---
title: "fn.execute_promise_sync"
---

Function [tauri](/api/rust/tauri/index.html)::[execute\_promise\_sync](/api/rust/tauri/)
========================================================================================

```rust
pub fn execute\_promise\_sync&lt;T: 'static, F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; [Result](/api/rust/tauri/../tauri/type.Result.html "type tauri::Result")&lt;[String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")\&gt; + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static&gt;(&lt;br/&gt;    webview: &mut WebView&lt;T&gt;, &lt;br/&gt;    task: F, &lt;br/&gt;    callback: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String"), &lt;br/&gt;    error: [String](https://doc.rust-lang.org/nightly/alloc/string/struct.String.html "struct alloc::string::String")&lt;br/&gt;)
```
      