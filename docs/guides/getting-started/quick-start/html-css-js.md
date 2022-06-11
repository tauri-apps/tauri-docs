import CTANote from './\_cta-note.md'
import TauriInit from './\_tauri-init.md';

# HTML/CSS/JS

<CTANote />

This guide will walk you through creating your first Tauri app using just HTML, CSS, and JavaScript. This is probably the best place to start if you are new to web development.

A Tauri app consists of two parts:

1. Rust binary that creates the windows and exposes native functionality to those windows
2. Frontend of your choice that produces the user interface inside the window

As you will notice, we will first set up the Rust project and general configuration and then create a very simple frontend using HTML, CSS, and JavaScript.

<!-- TODO: Screenshot. Preview of what we're building -->

:::info
Before we continue, make sure you have completed the [prerequisites] and installed the [tauri-cli] to have a working development environment.
:::

## Create the Rust Project

<!-- TODO: Create a fragment for this, but I don't know how to do MDX with children and my airport wifi is too slow for docusaurus' website -->

The official package manager and general purpose build tool for Rust is called [Cargo].

Open a terminal and run the following command to scaffold a minimal Rust project that is pre-configured to use Tauri:

```shell
tauri init
```

It will walk you though a series of questions:

1. **What is your app name?**
   - This will be the name of your final bundle, and what the OS will call your app. You can use any name you want here.
2. **What should the window title be?**
   - This will be the title of the default main window. You can use any title you want here.
3. **Where are your web assets (HTML/CSS/JS) located, relative to the "<current dir\>/src-tauri/tauri.conf.json" file that will be created?**
   - This is the path that Tauri will load your frontend assets from when building for **production**. For the sake of this tutorial we will answer this with `../ui`.
4. **What is the url of your dev server?** <br />
   - This can be either a URL or a filepath that Tauri will load during **development**. Because we don't use a frontend bundler with _Hot Module Reloading_ (HMR) for this tutorial we will answer with the same path as the previous question: `../ui`.

:::note
If you're familiar with Rust, you will notice that `tauri init` looks and works a lot like `cargo init`. You can in fact just use `cargo init` and add the necessary tauri dependencies if you prefer a fully manual setup.
:::

<TauriInit />

## Create the Frontend

Now we will create a very minimal UI using HTML.

To get started, create the folder relative to the tauri-src folder you specified when prompted by `tauri init` (we assume for this tutorial you answered with `ui`).

Next, create an `index.html` file inside of that folder with the following contents:

```html title=index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome from Tauri!</h1>
  </body>
</html>
```

It will serve as the entrypoint to our frontend.

And that's it! Now you can run the following command in your terminal to start a development build of your app:

```shell
tauri dev
```

<!-- TODO: SCREENSHOT -->

## Invoke Commands

Tauri lets you enhance your Frontend with native capabilities. We call these [Commands][command], essentially Rust functions that you can call from your frontend JavaScript. This enables you to handle heavy processing or calls to the OS in much more performant Rust code.

Let's make a simple example:

```rust
#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}
```

A Command is just like any regular Rust function, with the addition of the `#[tauri::command]` attribute macro that allows your function to communicate with the JavaScript context.

Lastly, we also need to tell Tauri about our newly created command so that it can route calls accordingly. This is done with the combination of the `.invoke_handler()` function and the `generate_handler![]` macro you can see below:

```rust
fn main() {
  tauri::Builder::default()
  // highlight-next-line
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

Now we're ready to call your Command from the JavaScript frontend! We would normally be recommending the `@tauri-apps/api` package here, but since we're not using a bundler for this guide, please enable [`withGlobalTauri`][withglobaltauri] in your `tauri.conf.json` file.

```json
{
  "build": {
    "beforeBuildCommand": "",
    "beforeDevCommand": "",
    "devPath": "../ui",
    "distDir": "../ui",
    // highlight-next-line
    "withGlobalTauri": true
  },
```

This will inject a pre-bundled version of the API functions into your Frontend.

You can now modify your `index.html` file to call your Command:

```html title=index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome from Tauri!</h1>
    // highlight-start
    <script>
      // access the pre-bundled global API functions
      const invoke = window.__TAURI__.invoke

      // now we can call our Command!
      var command = invoke('greet', { name: 'World' })

      // Right-click the application background and open the developer tools.
      // You will see "Hello, World!" printed in the console!
      console.log(commend)
    </script>
    // highlight-end
  </body>
</html>
```

:::tip
If you want to know more about the communication between Rust and JavaScript, please read the Tauri [Inter-Process Communication][inter-process-communication] guide.
:::

[cargo]: https://doc.rust-lang.org/cargo/
[prerequisites]: ../prerequisites.md
[tauri-cli]: ../tauri-cli.md
[command]: ../../features/command.md
[withglobaltauri]: ../../../api/config#buildconfig.withglobaltauri
[inter-process-communication]: ../../architecture/inter-process-communication/README.md
