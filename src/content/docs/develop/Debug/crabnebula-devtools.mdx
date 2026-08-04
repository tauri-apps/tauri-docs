---
title: CrabNebula DevTools
sidebar:
  badge:
    text: New
    variant: tip
i18nReady: true
---

import { Image } from 'astro:assets';
import devToolsPrint from '@assets/develop/Debug/crabnebula-devtools.png';

[CrabNebula](https://crabnebula.dev/) provides a free [DevTools](https://crabnebula.dev/devtools/) application for Tauri as part of its partnership with the Tauri project. This application allows you to instrument your Tauri app by capturing its embedded assets, Tauri configuration file, logs and spans and providing a web frontend to seamlessly visualize data in real time.

With the CrabNebula DevTools you can inspect your app's log events (including logs from dependencies), track down the performance of your command calls and overall Tauri API usage, with a special interface for Tauri events and commands, including payload, responses and inner logs and execution spans.

To enable the CrabNebula DevTools, install the devtools crate:

```sh frame=none
cargo add tauri-plugin-devtools@2.0.0
```

And initialize the plugin as soon as possible in your main function:

```rust
fn main() {
    // This should be called as early in the execution of the app as possible
    #[cfg(debug_assertions)] // only enable instrumentation in development builds
    let devtools = tauri_plugin_devtools::init();

    let mut builder = tauri::Builder::default();

    #[cfg(debug_assertions)]
    {
        builder = builder.plugin(devtools);
    }

    builder
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

And then run your app as usual, if everything is set up correctly devtools will print the following message:

<Image src={devToolsPrint} alt="DevTools message on terminal" />

:::note
In this case we only initialize the devtools plugin for debug applications, which is recommended.
:::

For more information, see the [CrabNebula DevTools](https://docs.crabnebula.dev/devtools/get-started/) documentation.
