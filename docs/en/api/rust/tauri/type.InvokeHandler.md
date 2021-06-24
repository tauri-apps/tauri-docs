---
title: Type tauri::InvokeHandler
sidebar_label: type.InvokeHandler
---

# Type Definition tauri::InvokeHandler,\[−]\[src],\[−],−

```rs
type InvokeHandler<P> = dyn Fn(Invoke<P>) + Send + Sync + 'static;
```

A closure that is run everytime Tauri receives a message it doesn’t explicitly handle.
