# Debugging in CrabNebula DevTools

CrabNebula provides a free DevTools application for Tauri as part of its partnership with the Tauri project.
This application allows you to instrument your Tauri app by capturing its embedded assets, Tauri configuration file, logs and spans and providing a web frontend to seamlessly visualize data in real time.

With the CrabNebula DevTools you can inspect your app's log events (including logs from dependencies), track down the performance of your command calls and overall Tauri API usage, with special interface for Tauri events and commands, including payload, responses and inner logs and execution spans.

To enable the CrabNebula DevTools, install the `devtools` crate:

```shell
cargo add devtools
```

And initialize the plugin as soon as possible in your main function:

```rust
fn main() {
    #[cfg(debug_assertions)]
    let devtools = devtools::init(); // initialize the plugin as early as possible

    let mut builder = tauri::Builder::default();

    #[cfg(debug_assertions)]
    builder = builder.plugin(devtools); // then register it with Tauri

    builder.run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

:::note
In this case we only initialize the devtools plugin for debug applications, which is recommended.
:::

For more information, see the [CrabNebula DevTools] documentation.

[CrabNebula DevTools]: https://docs.crabnebula.dev/devtools/get-started/
