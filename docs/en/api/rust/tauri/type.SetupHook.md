---
title: "type.SetupHook"
---

# Type Definition [tauri](/docs/api/rust/tauri/index.html)::​[SetupHook](/docs/api/rust/tauri/)

    type SetupHook<P> = Box<dyn Fn(&mut App<P>) -> Result<(), Box<dyn Error + Send>> + Send>;

A closure that is run when the Tauri application is setting up.
