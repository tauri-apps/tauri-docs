---
title: Type tauri::SetupHook
sidebar_label: type.SetupHook
custom_edit_url: null
---

# Type Definition tauri::SetupHook,\[−]\[src],\[−],−

```rs
type SetupHook<P> = Box<dyn Fn(&mut App<P>) -> Result<(), Box<dyn Error + Send>> + Send>;
```

A closure that is run when the Tauri application is setting up.
