---
title: "type.OnPageLoad"
---

# Type Definition [tauri](/docs/api/rust/tauri/index.html)::​[OnPageLoad](/docs/api/rust/tauri/)

```rs
type OnPageLoad<P> = dyn Fn(Window<P>, PageLoadPayload) + Send + Sync + 'static;
```

A closure that is run once every time a window is created and loaded.
