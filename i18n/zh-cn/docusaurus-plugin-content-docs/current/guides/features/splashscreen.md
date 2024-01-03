# 优化启动

如果你的网页可能需要一些时间来加载，或者你需要在显示主窗口之前在Rust中运行一个初始化过程，那么 `splashscreen` 可以改善用户的加载体验。

### 设置

首先，在 `distDir` 目录下创建一个 `splashscreen.html` ，其中包含启动界面的 HTML 代码。然后根据下面的内容更新 `tauri.conf.json` 文件：

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
  // 添加启动页面窗口
+ {
+   "width": 400,
+   "height": 200,
+   "decorations": false,
+   "url": "splashscreen.html",
+   "label": "splashscreen"
+ }
]
```

现在，你的主窗口已被隐藏，启动页面窗口将在你的应用程序启动时显示。接下来，你需要在应用程序准备就绪时调用一个方法来关闭启动窗口，并显示主窗口。如何执行此操作取决于关闭启动画面之前您正在等待什么。

### 启动页面

如果您正在等待请求网络代码，你需要创建一个 close_splashscreen [命令](command)。

```rust src-tauri/main.rs
use tauri::Manager;
// 创建命令
// 这个命令必须是异步的，这样它就不会在主线程上运行。
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
  // 关闭启动窗口
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // 展示主窗口
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
然后，你可以通过以下两种方式将其导入到项目中：

```js
// 使用 Tauri API npm 包:
import { invoke } from '@tauri-apps/api/tauri'
```
或
```js
// 使用 Tauri 全局接口:
const invoke = window.__TAURI__.invoke
```

最后添加一个事件监听器，或者在需要的时候调用 invoke

```js
document.addEventListener('DOMContentLoaded', () => {
  // 这将等待 DOM 加载完成，你也可以在您想要的任何时刻运行此函数
  invoke('close_splashscreen')
})
```

### 等待 Rust

如果您正在等待 Rust 代码运行，请将其放入 setup 函数处理程序中，以便您可以访问 App 实例：

```rust src-tauri/main.rs
use tauri::Manager;
fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splashscreen_window = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();
      // 我们在新任务上执行初始化代码，这样应用程序就不会冻结
      tauri::async_runtime::spawn(async move {
        // 在这里初始化你的应用，而不是休眠
        println!("Initializing...");
        std::thread::sleep(std::time::Duration::from_secs(2));
        println!("Done initializing.");

        // 完成后，关闭启动窗口并显示主窗口
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```
