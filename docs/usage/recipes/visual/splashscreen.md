---
title: Splashscreen
---

import Link from '@docusaurus/Link'

Loading an application for the first time may take time. Making users wait without any indication of progress is bad for your UX. Tauri allows you to define a custom splashscreen, a placeholder that will be displayed until your application has finished loading.

To define a splashscreen, you can call the method `splashscreen_html` like following:

```rust
tauri::AppBuilder::new()
  // The splashscreen is declared
  .splashscreen_html("<div>The app is loading...</div>")
  .setup(move |webview, _| {
    let handle = webview.handle();
    // The splashscreen is removed
    tauri::close_splashscreen(&handle);
  })
  .build()
  .run();
```

The `.splashscreen_html` method accepts a string containing HTML elements that will be rendered.

See more:

- <Link to="/docs/api/rust/tauri/struct.AppBuilder#methods">tauri::AppBuilder::splashscreen_html</Link>

- <Link to="/docs/api/rust/tauri/fn.close_splashscreen">tauri::close_splashscreen</Link>
