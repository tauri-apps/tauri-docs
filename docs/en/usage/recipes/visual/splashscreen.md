---
title: Splashscreen
---

import Link from '@docusaurus/Link'

If your app has to run a lot of native code before it can display your web content, you may want to use a splashscreen to show a loading indicator. Note that currently you cannot display a splashscreen while the web content is loading, so it should only be used if you have a lot of Rust code that needs to be run before the web content can be displayed.

To define a splashscreen, you can call the method `splashscreen_html` like following:

```rust title=src-tauri/main.rs
tauri::AppBuilder::new()
  // The splashscreen is declared
  .splashscreen_html("<div>The app is loading...</div>")
  .setup(|webview, _| {
    // The splashscreen is removed and replaced with your app
    tauri::close_splashscreen(webview);
  })
  .build()
  .run();
```

The `.splashscreen_html` method accepts a string containing HTML elements that will be rendered.

See more:

- <Link to="/docs/api/rust/tauri/struct.AppBuilder#methods">AppBuilder::splashscreen_html</Link>

- <Link to="/docs/api/rust/tauri/fn.close_splashscreen">close_splashscreen</Link>
