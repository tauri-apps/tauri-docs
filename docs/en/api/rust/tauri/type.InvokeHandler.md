---
title: Type tauri::InvokeHandler
sidebar_label: type.InvokeHandler
custom_edit_url: null
---

  # Type Definition tauri::InvokeHandler,

```rs
type InvokeHandler<R> = dyn Fn(Invoke<R>) + Send + Sync + 'static;
```

Expand description

A closure that is run everytime Tauri receives a message it doesn’t explicitly handle.
  