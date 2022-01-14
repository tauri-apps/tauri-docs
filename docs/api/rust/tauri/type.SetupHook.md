---
title: Type tauri::SetupHook
sidebar_label: type.SetupHook
custom_edit_url: null
---

  # Type Definition tauri::SetupHook,

```rs
type SetupHook<R> = Box<dyn Fn(&mut App<R>) -> Result<(), Box<dyn Error + Send>> + Send>;
```

Expand description

A closure that is run when the Tauri application is setting up.
  