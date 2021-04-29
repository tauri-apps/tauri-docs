---
title: "type.SyncTask"
---

# Type Definition [tauri](/docs/api/rust/tauri/index.html)::​[SyncTask](/docs/api/rust/tauri/)

```rs
type SyncTask = Box<dyn FnOnce() + Send>;
```

A task to run on the main thread.
