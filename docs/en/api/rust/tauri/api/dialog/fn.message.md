---
title: Fn tauri::api::dialog::message
sidebar_label: fn.message
custom_edit_url: null
---

  # Function tauri::api::dialog::message,

```rs
pub fn message<R: Runtime>(
    parent_window: Option<&Window<R>>, 
    title: impl AsRef<str>, 
    message: impl AsRef<str>
)
```

Expand description

Displays a message dialog.
  