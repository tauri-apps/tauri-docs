---
title: "trait.ResultExt"
---

Trait [tauri](/api/rust/tauri/index.html)::[ResultExt](/api/rust/tauri/)
========================================================================

```rust
pub trait ResultExt&lt;T&gt; {
    fn [chain\_err](/api/rust/tauri/about:blank#tymethod.chain_err)&lt;F, EK&gt;(self, callback: F) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;T, [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")\&gt;&lt;br/&gt;    where&lt;br/&gt;        F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;        EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")\&gt;;
}
```

Additional methods for <code>Result</code>, for easy interaction with this crate.

Required methods
----------------

### <code>fn [chain_err](/api/rust/tauri/about:blank#tymethod.chain_err)&lt;F, EK&gt;(self, callback: F) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;T, [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")&gt; where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;    EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</code> 

If the <code>Result</code> is an <code>Err</code> then <code>chain_err</code> evaluates the closure, which returns &lt;em&gt;some type that can be converted to <code>ErrorKind</code>&lt;/em&gt;, boxes the original error to store as the cause, then returns a new error containing the original error.

Loading content...

Implementations on Foreign Types
--------------------------------

### <code>impl&lt;T, E&gt; [ResultExt](/api/rust/tauri/../tauri/trait.ResultExt.html "trait tauri::ResultExt")&lt;T&gt; for [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;T, E&gt; where&lt;br/&gt;    E: [Error](https://doc.rust-lang.org/nightly/std/error/trait.Error.html "trait std::error::Error") + [Send](https://doc.rust-lang.org/nightly/core/marker/trait.Send.html "trait core::marker::Send") + 'static,</code> 

#### <code>fn [chain_err](/api/rust/tauri/about:blank#method.chain_err)&lt;F, EK&gt;(self, callback: F) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;T, [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")&gt; where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;    EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</code> 

### <code>impl&lt;T&gt; [ResultExt](/api/rust/tauri/../tauri/trait.ResultExt.html "trait tauri::ResultExt")&lt;T&gt; for [Option](https://doc.rust-lang.org/nightly/core/option/enum.Option.html "enum core::option::Option")&lt;T&gt;</code>

#### <code>fn [chain_err](/api/rust/tauri/about:blank#method.chain_err)&lt;F, EK&gt;(self, callback: F) -&gt; [Result](https://doc.rust-lang.org/nightly/core/result/enum.Result.html "enum core::result::Result")&lt;T, [Error](/api/rust/tauri/../tauri/struct.Error.html "struct tauri::Error")&gt; where&lt;br/&gt;    F: [FnOnce](https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html "trait core::ops::function::FnOnce")() -&gt; EK,&lt;br/&gt;    EK: [Into](https://doc.rust-lang.org/nightly/core/convert/trait.Into.html "trait core::convert::Into")&lt;[ErrorKind](/api/rust/tauri/../tauri/enum.ErrorKind.html "enum tauri::ErrorKind")&gt;,</code> 

Loading content...

Implementors
------------

Loading content...window.inlined\_types=new Set(\[\]);
      