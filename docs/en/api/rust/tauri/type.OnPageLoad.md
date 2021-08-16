---
title: Type tauri::OnPageLoad
sidebar_label: type.OnPageLoad
custom_edit_url: null
---

  # Type Definition tauri::OnPageLoad,

```rs
type OnPageLoad<R> = dyn Fn(Window<R>, PageLoadPayload) + Send + Sync + 'static;
```

Expand description

A closure that is run once every time a window is created and loaded.
  