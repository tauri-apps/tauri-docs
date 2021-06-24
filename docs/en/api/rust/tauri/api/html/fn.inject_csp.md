---
title: Fn tauri::api::html::inject_csp
sidebar_label: fn.inject_csp
---

# Function tauri::api::html::inject_csp,\[−],\[−],−

```rs
pub fn inject_csp<H>(html: H, csp: &str) -> String where
    H: Into<Tendril<UTF8, NonAtomic>>, 
```

Injects a content security policy to the HTML.
