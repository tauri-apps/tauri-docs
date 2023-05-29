# 多窗口

管理单个应用程序上的多个窗口。

## 创建窗口

可以从 Tauri 配置文件或在运行时静态创建窗口。

### 静态窗口

可以使用 [tauri.windows][] 配置数组创建多个窗口。 下面的 JSON 代码片段演示如何通过配置静态创建几个窗口：

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

注意，窗口标签必须是唯一的，并且可以在运行时用于访问窗口实例。 静态窗口可用的配置选项的完整列表可以在[WindowConfig][]中找到。

### 运行时窗口

还可以通过 Rust 层或 Tauri API 在运行时创建窗口。

#### 在 Rust 中创建窗口

窗口可以在运行时使用 [WindowBuilder][] 结构体创建。

要创建一个窗口，必须有一个正在运行的 [App][] 的实例或一个 [AppHandle][]。

##### 使用 [App][] 实例创建一个窗口

[App][] 实例可以在安装钩子中获取，也可以在调用 [Builder::build][] 之后获取。

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
```

使用设置钩子确保静态窗口和 Tauri 插件已初始化。 或者，可以在构建 [App][] 后创建一个窗口：

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
```

当无法将值的所有权移动到设置闭包时，此方法非常有用。

##### 使用 [AppHandle][] 实例创建一个窗口

[AppHandle][] 实例可以使用 [`App::handle`] 函数获得，也可以直接注入 Tauri 命令。

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

当在 Tauri 命令中创建窗口时，确保命令函数是 `async`，以避免由于 [wry#583][] 问题而导致的 windows 死锁。

:::

#### 在 JavaScript 中创建窗口

使用 Tauri API，可以通过导入 [WebviewWindow][] 类轻松地在运行时创建一个窗口。

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

## 运行时访问窗口

可以使用它的标签和 Rust 上的 [get_window][] 方法或 JavaScript 上的 [WebviewWindow.getByLabel][] 查询窗口实例。

```rust Using get_window
use tauri::Manager;
tauri::Builder::default()
  .setup(|app| {
    let main_window = app.get_window("main").unwrap();
    Ok(())
  })
```

注意，必须导入 [tauri::Manager][] 才能在 [App][] 或 [AppHandle][] 实例上使用 [get_window][] 方法。

```js Using WebviewWindow.getByLabel
import { WebviewWindow } from '@tauri-apps/api/window'
const mainWindow = WebviewWindow.getByLabel('main')
```

## 与其它窗口通信

窗口通信可以使用事件系统完成。 有关更多信息，请参阅 [事件指南][]。

[tauri.windows]: ../../api/config.md#tauriconfig.windows
[WindowConfig]: ../../api/config.md#windowconfig
[WindowBuilder]: https://docs.rs/tauri/1.0.0/tauri/window/struct.WindowBuilder.html
[App]: https://docs.rs/tauri/1.0.0/tauri/struct.App.html
[AppHandle]: https://docs.rs/tauri/1.0.0/tauri/struct.AppHandle.html
[Builder::build]: https://docs.rs/tauri/1.0.0/tauri/struct.Builder.html#method.build
[get_window]: https://docs.rs/tauri/1.0.0/tauri/trait.Manager.html#method.get_window
[wry#583]: https://github.com/tauri-apps/wry/issues/583
[WebviewWindow]: ../../api/js/window.md#webviewwindow
[WebviewWindow.getByLabel]: ../../api/js/window.md#getbylabel
[tauri::Manager]: https://docs.rs/tauri/1.0.0/tauri/trait.Manager.html
[事件指南]: ./events.md
