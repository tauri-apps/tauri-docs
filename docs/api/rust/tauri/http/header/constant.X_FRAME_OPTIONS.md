---
title: Constant tauri::http::header::X_FRAME_OPTIONS
sidebar_label: constant.X_FRAME_OPTIONS
custom_edit_url: null
---

  # Constant tauri::http&#x3A;:header::X_FRAME_OPTIONS,

```rs
pub const X_FRAME_OPTIONS: HeaderName;
```

Expand description

Indicates whether or not a browser should be allowed to render a page in a frame.

Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.

The added security is only provided if the user accessing the document is using a browser supporting `x-frame-options`.
  