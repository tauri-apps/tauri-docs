---
title: App Debugging
sidebar_label: 'App Debugging (3/4)'
---

import Command from '@theme/Command'

With all the moving pieces in Tauri, you may run into a problem that requires debugging. There are a handful of locations where error details are printed, and Tauri includes some tools to make the debugging process easier.

## Rust Console

When you run a Tauri app in development mode you will have a Rust console available. This is in the terminal where you ran e.g. `tauri dev`. You can use the following code to print something to that console from within a Rust file:

```rust
println!("Message from Rust: {}", msg);
```

Sometimes you may have an error in your Rust code, and the Rust compiler can give you lots of information. If, for example, `tauri dev` crashes, you can rerun it like this on Linux and macOS:

```sh
RUST_DEBUG=1 tauri dev
```

or like this on MS Windows:

```sh
set RUST_DEBUG=1
tauri dev
```

This will give you a granular stack trace. Generally speaking, the Rust compiler will help you by
giving you detailed information about the issue, such as:

```
error[E0425]: cannot find value `sun` in this scope
  --> src/main.rs:11:5
   |
11 |     sun += i.to_string().parse::<u64>().unwrap();
   |     ^^^ help: a local variable with a similar name exists: `sum`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0425`.
```

## Webview JS Console

### Linux & macOS

Right click in the webview, and choose `Inspect Element`. This will open up a web-inspector similar to the Chrome or Firefox dev tools you are used to.

### Windows

On Windows, you can use the standalone [Edge DevTools app](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide). This enables you to connect the dev tools to your Tauri app's webview as if it were a normal Edge window.

<Alert title="Note">
If you have installed [Weview2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/), you do not need to install Edge Devtools. Instead, just right click inside the Tauri window and select "Inspect" to open devtools. If there is no right click menu, it is likely you are just using Devtools 1 and you should follow the instructions above.
If you have installed [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/), you do not need to install Edge Devtools. Instead, just right click inside the Tauri window and select "Inspect" to open devtools. If there is no right click menu, it is likely you are just using Devtools 1 and you should follow the instructions above.
</Alert>

## Create a Debug Build

There are cases where you might need to inspect the JS console in the final bundle, so Tauri provides a simple command to create a debugging bundle:


<Command name="build --debug" />

Like the normal build and dev processes, the first time you run this it will take more time than subsequent runs. The final bundled app will be placed in `src-tauri/target/debug/bundle`. That app will ship with the development console enabled.

## Run Your App From the Terminal

You can also run a built app from the terminal, which will also give you the Rust compiler notes (in case of errors) or your `println` messages. Just find the file `src-tauri/target/(release or debug)/app` and either double click it (but be warned, the terminal will close on errors) or just run it in directly in your console.
