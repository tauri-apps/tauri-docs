---
title: Type tauri::SyncTask
sidebar_label: type.SyncTask
custom_edit_url: null
---

  # Type Definition tauri::SyncTask,

```rs
type SyncTask = Box<dyn FnOnce() + Send>;
```

Expand description

A task to run on the main thread.
  