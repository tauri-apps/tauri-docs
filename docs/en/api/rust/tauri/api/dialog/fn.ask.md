---
title: Fn tauri::api::dialog::ask
sidebar_label: fn.ask
custom_edit_url: null
---

  # Function tauri::api::dialog::ask,

```rs
pub fn ask<R: Runtime, F: FnOnce(bool) + Send + 'static>(
    parent_window: Option<&Window<R>>, 
    title: impl AsRef<str>, 
    message: impl AsRef<str>, 
    f: F
)
```

Expand description

Displays a dialog with a message and an optional title with a “yes” and a “no” button.
  