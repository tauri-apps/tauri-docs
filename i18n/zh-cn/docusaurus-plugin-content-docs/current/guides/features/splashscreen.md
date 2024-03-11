# 初始屏幕

如果你的网页可能需要一些时间来加载，或者你需要在显示主窗口之前在 Rust 中运行初始化过程，那么启动画面可以改善用户的加载体验。

### 设置

首先，在 `distDir` 中创建一个包含初始屏幕的 HTML 文件。然后，更新 `tauri.conf.json`：

```diff
"windows": [
  {
    "title": "Tauri App",
    "width": 800,
    "height": 600,
    "resizable": true,
    "fullscreen": false,
+   "visible": false // Hide the main window by default
  },
  // Add the splashscreen window
+ {
+   "width": 400,
+   "height": 200,
+   "decorations": false,
+   "url": "splashscreen.html",
+   "label": "splashscreen"
+ }
]
```

现在，您的主窗口将被隐藏，并且启动应用程序时将显示初始屏幕窗口。接下来，你需要一种方法来关闭初始屏幕，并在应用准备就绪时显示主窗口。如何执行此操作取决于在关闭初始屏幕之前要等待的内容。

### 等待网页

如果你正在等待你的 Web 代码，你需要创建一个 `close_splashscreen` [命令](command)。

```rust src-tauri/main.rs
use tauri::Manager;
// 创建命令：
// 该命令必须是异步的，以便它不会在主线程上运行。
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
  // 关闭初始屏幕
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // 显示主窗口
  window.get_window("main").unwrap().show().unwrap();
}

// 注册命令：
fn main() {
  tauri::Builder::default()
    // Add this line
    .invoke_handler(tauri::generate_handler![close_splashscreen])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}

```
然后，您可以通过以下两种方式之一将其导入到您的项目中：

```js
//使用 Tauri API npm 包：
import { invoke } from '@tauri-apps/api/tauri'
```
or
```js
// With the Tauri global script:
const invoke = window.__TAURI__.invoke
```

最后，添加一个 `invoke()` 事件侦听器（或者随时调用它）：
```js
document.addEventListener('DOMContentLoaded', () => {
  // 这将等待窗口加载，但你可以在您想要的任何触发器上运行此函数
  invoke('close_splashscreen')
})
```

### 等待 Rust

如果你正在等待 Rust 代码运行，请将其放入 `setup` 函数处理程序中，以便您可以访问该 `App` 实例：

```rust src-tauri/main.rs
use tauri::Manager;
fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splashscreen_window = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();
      // 我们在新任务上执行初始化代码，这样应用程序就不会冻结
      tauri::async_runtime::spawn(async move {
        // 在这里初始化而不是消磨时间
        println!("Initializing...");
        std::thread::sleep(std::time::Duration::from_secs(2));
        println!("Done initializing.");

        // 显示主窗口
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```
