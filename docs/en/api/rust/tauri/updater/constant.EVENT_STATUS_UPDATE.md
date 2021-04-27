---
title: "constant.EVENT_STATUS_UPDATE"
---

# Constant [tauri](/docs/api/rust/tauri/../index.html)::​[updater](/docs/api/rust/tauri/index.html)::​[EVENT_STATUS_UPDATE](/docs/api/rust/tauri/)

```
pub const EVENT_STATUS_UPDATE: &str = "tauri://update-status";
```

Send updater status or error even if dialog is enabled, you should always listen for this event. It'll send you the install progress and any error triggered during update check and install
