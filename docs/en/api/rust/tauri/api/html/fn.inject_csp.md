---
title: "fn.inject_csp"
---

# Function [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[html](/docs/api/rust/tauri/index.html)::​[inject_csp](/docs/api/rust/tauri/)

    pub fn inject_csp<H>(html: H, csp: &str) -> String where
        H: Into<Tendril<UTF8, NonAtomic>>, 

Injects a content security policy to the HTML.
