---
title: Type tauri::SyncTask
sidebar_label: type.SyncTask
---

# Type Definition tauri::SyncTask,\[−]\[src],\[−],−

```rs
type SyncTask = Box<dyn FnOnce() + Send>;
```

A task to run on the main thread.
