---
title: Type tauri::OnPageLoad
sidebar_label: type.OnPageLoad
---

# Type Definition tauri::OnPageLoad,\[−]\[src],\[−],−

```rs
type OnPageLoad<P> = dyn Fn(Window<P>, PageLoadPayload) + Send + Sync + 'static;
```

A closure that is run once every time a window is created and loaded.
