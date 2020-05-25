---
id: identity
title: 'App Identity'
sidebar_label: App Identity
---

This section is dedicated to the visual and UX aspects of your Tauri application.

## Icons

Tauri ships with an iconset based on its logo. This is probably NOT what you want when you ship your app. To rememdy this common situation, Tauri provides the `tauri icon` command that will take an input file and create all the icons needed for the various platforms. These will be placed in your `src-tauri/icons` folder where they will automatically be included in your built app.

```
local install:  yarn tauri icon
global install: tauri icon
```

```
Options
  --help, -h          Displays this message
  --log, l            Logging [boolean]
  --icon, i           Source icon (png, 1240x1240 with transparency)
  --target, t         Target folder (default: 'src-tauri/icons')
  --compression, c    Compression type [pngquant|optipng|zopfli]
```

If you need to source your icons from some other location, you can edit this part of the `src-tauri/Cargo.toml` file:

```
[package.metadata.bundle]
icon = [
  "icons/32x32.png",
  "icons/128x128.png",
  "icons/128x128@2x.png",
  "icons/icon.icns",
  "icons/icon.ico"
]
```

### Notes on filetypes:

- icon.icns = MacOS
- icon.ico = MS Windows
- \*.png = Linux

## Splashscreen

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
