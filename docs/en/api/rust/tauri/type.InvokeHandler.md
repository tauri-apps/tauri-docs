---
title: "type.InvokeHandler"
---

# Type Definition [tauri](/docs/api/rust/tauri/index.html)::​[InvokeHandler](/docs/api/rust/tauri/)

```rs
type InvokeHandler<M> = dyn Fn(InvokeMessage<M>) + Send + Sync + 'static;
```

A closure that is run everytime Tauri receives a message it doesn't explicitly handle.
