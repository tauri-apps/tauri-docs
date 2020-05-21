---
id: debugging
title: 'App Debugging'
sidebar_label: App Debugging
---

With all the moving pieces in Tauri, you may run into a problem that requires debugging. There are a handful of locations where error details are printed, and Tauri includes some tools to make the debugging process easier.

## Rust Console

When you run a Tauri app in development mode you will have a rust console available. This is in the terminal where you ran e.g. `tauri dev`. You can use the following code to print something to that console from within a Rust file:

```rust
println!("Message from rust: {}", msg);
```

Sometimes you may have an error in your Rust code, and the Rust compiler can give you lots of information. If, for example, `tauri dev` crashes, you can rerun it like this on Linux and MacOS:

```sh
RUST_DEBUG=1 tauri dev
```

or like this on MS Windows:

```sh
set RUST_DEBUG=1
tauri dev
```

This will give you a granular stack trace. Generally speaking, the rust compiler will help you by
giving you detailed information about the issue, such as:

```
For more information about this error, try `rustc --explain E0433`
```

## Webview JS Console

### Linux & MacOS

Right click in the webview, and choose `Inspect Element`. This will open up a web-inspector similar to the Chrome or Firefox dev tools you are used to.

### Windows

If you enable the Edge backend (`web-view = { version = "\*", features = ["edge"] }` in `Cargo.toml`) you can use the standalone Edge DevTools app.

This enables you to connect the dev tools to your Rust-backed web view as if it were a normal Edge window. (Thanks to @dkaste for providing the solution [in this issue](https://github.com/Boscop/web-view/issues/88#issuecomment-552464137)).

If you are using MSHTML, then you will probably have to use firebug:

```html
<script
  type="text/javascript"
  src="https://getfirebug.com/firebug-lite.js"
></script>
```

See [this thread](https://github.com/zserge/webview/blob/master/README.md#debugging-and-development-tips) for more information.

## Create a Debug Build

There are cases where you might need to inspect the JS console in the final bundle, so Tauri provides a simple command to create a debugging bundle:

```
local install:  yarn tauri build --debug
global install: tauri build --debug
```

Like the normal build and dev processes, the first time you run this it will take more time than subsequent runs. The final bundled app will be placed in `src-tauri/target/debug/bundle`. That app will ship with the development console enabled.

## Run Your App From the Terminal

You can also run a built app from the terminal, which will also give you the rust compiler notes (in case of errors) or your `println` messages. Just find the file `src-tauri/target/(release or debug)/app` and either double click it (but be warned, the terminal will close on errors) or just run it in directly in your console.
