# Multiwindow

Manage multiple windows on a single application.

## Creating a window

A window can be created statically from the Tauri configuration file or at runtime.

### Static window

Multiple windows can be created with the [tauri.windows] configuration array.
The following JSON snippet demonstrates how to statically create several windows through the config:

```json tauri.conf.json
{
  "tauri": {
    "windows": [
      {
        "label": "external",
        "title": "Tauri Docs",
        "url": "https://tauri.app"
      },
      {
        "label": "local",
        "title": "Tauri",
        "url": "index.html"
      }
    ]
  }
}
```

Note that the window label must be unique and can be used at runtime to access the window instance.
The complete list of configuration options available for static windows can be found in the [WindowConfig] documentation.

### Runtime window

You can also create windows at runtime either via the Rust layer or through the Tauri API.

#### Create a window in Rust

A window can be created at runtime using the [WindowBuilder] struct.

To create a window, you must have an instance of the running [App] or an [AppHandle].

##### Create a window using the [App] instance

The [App] instance can be obtained in the setup hook or after a call to [Builder::build].

```rust Using the setup hook
tauri::Builder::default()
  .setup(|app| {
    let docs_window = tauri::WindowBuilder::new(
      app,
      "external", /* the unique window label */
      tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
    ).build()?;
    let local_window = tauri::WindowBuilder::new(
      app,
      "local",
      tauri::WindowUrl::App("index.html".into())
    ).build()?;
    Ok(())
  })
  .run(tauri::generate_context!())
  .expect("error while running app");
```

Using the setup hook ensures static windows and Tauri plugins are initialized.
Alternatively, you can create a window after building the [App]:

```rust Using the built app
let app = tauri::Builder::default()
  .build(tauri::generate_context!())
  .expect("error while building tauri application");

let docs_window = tauri::WindowBuilder::new(
  &app,
  "external", /* the unique window label */
  tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
).build().expect("failed to build window");

let local_window = tauri::WindowBuilder::new(
  &app,
  "local",
  tauri::WindowUrl::App("index.html".into())
).build()?;

// This will start the app and no other code below this will run.
app.run(|_, _| {});
```

This method is useful when you cannot move ownership of values to the setup closure.

##### Create a window using an [AppHandle] instance

An [AppHandle] instance can be obtained using the [`App::handle`] function or directly injected in Tauri commands.

```rust Create a window in a separate thread
tauri::Builder::default()
  .setup(|app| {
    let handle = app.handle();
    std::thread::spawn(move || {
      let local_window = tauri::WindowBuilder::new(
        &handle,
        "local",
        tauri::WindowUrl::App("index.html".into())
      ).build()?;
    });
    Ok(())
  })
```

```rust Create a window in a Tauri command
#[tauri::command]
async fn open_docs(handle: tauri::AppHandle) {
  let docs_window = tauri::WindowBuilder::new(
    &handle,
    "external", /* the unique window label */
    tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
  ).build().unwrap();
}
```

:::info

When creating windows in a Tauri command, ensure the command function is `async` to avoid a deadlock on Windows due to the [wry#583] issue.

:::

#### Create a window in JavaScript

Using the Tauri API you can easily create a window at runtime by importing the [WebviewWindow] class.

```js Create a window using the WebviewWindow class
import { WebviewWindow } from '@tauri-apps/api/window'
const webview = new WebviewWindow('theUniqueLabel', {
  url: 'path/to/page.html',
})
// since the webview window is created asynchronously,
// Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
webview.once('tauri://created', function () {
  // webview window successfully created
})
webview.once('tauri://error', function (e) {
  // an error occurred during webview window creation
})
```

## Creating additional HTML pages

If you want to create additional pages beyond `index.html`, you will need to make sure they are present in the `dist` directory at build time. How you do this depends on your frontend setup. If you use Vite, create an additional [input](https://vitejs.dev/guide/build.html#multi-page-app) for the second HTML page in `vite.config.js`.

## Accessing a window at runtime

The window instance can be queried using its label and the [get_window] method on Rust or [WebviewWindow.getByLabel] on JavaScript.

```rust Using get_window
use tauri::Manager;
tauri::Builder::default()
  .setup(|app| {
    let main_window = app.get_window("main").unwrap();
    Ok(())
  })
```

Note that you must import [tauri::Manager] to use the [get_window] method on [App] or [AppHandle] instances.

```js Using WebviewWindow.getByLabel
import { WebviewWindow } from '@tauri-apps/api/window'
const mainWindow = WebviewWindow.getByLabel('main')
```

## Communicating with other windows

Window communication can be done using the event system. See the [Event Guide] for more information.

[tauri.windows]: ../../api/config.md#tauriconfig.windows
[windowconfig]: ../../api/config.md#windowconfig
[windowbuilder]: https://docs.rs/tauri/1.0.0/tauri/window/struct.WindowBuilder.html
[app]: https://docs.rs/tauri/1.0.0/tauri/struct.App.html
[apphandle]: https://docs.rs/tauri/1.0.0/tauri/struct.AppHandle.html
[builder::build]: https://docs.rs/tauri/1.0.0/tauri/struct.Builder.html#method.build
[app::handle]: https://docs.rs/tauri/1.0.0/tauri/struct.App.html#method.handle
[get_window]: https://docs.rs/tauri/1.0.0/tauri/trait.Manager.html#method.get_window
[wry#583]: https://github.com/tauri-apps/wry/issues/583
[webviewwindow]: ../../api/js/window.md#webviewwindow
[webviewwindow.getbylabel]: ../../api/js/window.md#getbylabel
[tauri::manager]: https://docs.rs/tauri/1.0.0/tauri/trait.Manager.html
[event guide]: ./events.md
