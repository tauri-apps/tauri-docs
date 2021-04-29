---
title: "type.SetupHook"
---

# Type Definition [tauri](/docs/api/rust/tauri/index.html)::​[SetupHook](/docs/api/rust/tauri/)

```rs
type SetupHook<M> = Box<dyn Fn(&mut App<M>) -> Result<(), Box<dyn Error>> + Send>;
```

A closure that is run when the Tauri application is setting up.
