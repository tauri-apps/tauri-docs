# 事件

Tauri 的事件系统采用多生产者-多消费者的通信原语来进行前后端的信息传递。它类似于 `command` 系统，但必须在事件处理程序上编写有效的负载（`payload`）类型检查。Tauri 的事件系统简化了前后端的通信，以类似于频道（`channel`）的方式工作。

Tauri 应用程序可以监听和触发全局事件和特定窗口事件。下面将分别阐述在前端和后端的用法。

## 前端

事件系统可以通过前端 `@tauri-apps/api` 包中的 `event` 和 `window` 模块访问。

### 全局事件

若要使用全局事件频道，需要引入 `event` 模块，并使用 `emit` 和 `listen` 函数：

```js
import { emit, listen } from '@tauri-apps/api/event'

// 监听 `click` 事件并获取一个函数以移除事件监听器
// 也可以使用 `once` 函数订阅一个事件并在第一个事件后自动取消订阅监听器
const unlisten = await listen('click', (event) => {
  // event.event 是事件名称 (当你想用一个回调函数处理不同类型的事件时很有用)
  // event.payload 是负载对象
})

// 携带负载对象触发 `click` 事件
emit('click', {
  theMessage: 'Tauri is awesome!',
})
```

### 特定窗口事件

特定窗口事件暴露在 `Window` 模块：

```js
import { appWindow, WebviewWindow } from '@tauri-apps/api/window'

// 触发一个仅当前窗口可见的事件
appWindow.emit('event', { message: 'Tauri is awesome!' })

// 创建一个新的 webview 窗口并触发一个仅对它可见的事件
const webview = new WebviewWindow('window')
webview.emit('event')
```

## 后端

在后端，全局事件频道暴露在 `App` 结构体中，特定窗口事件则可以使用 `Window` trait 来触发。

### 全局事件

```rust
use tauri::Manager;

// 负载类型必须实现 `Serialize` 和 `Clone`。
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // 监听 `event-name`（无论其在什么窗口中触发）
      let id = app.listen_global("event-name", |event| {
        println!("got event-name with payload {:?}", event.payload());
      });
      // 使用 `listen_global` 函数返回的 `id` 取消监听事件
      // `App` 结构上也暴露了 `once_global` API 可供使用
      app.unlisten(id);

      // 在前端的所有 Webview 窗口触发 `event-name` 事件
      app.emit_all("event-name", Payload { message: "Tauri is awesome!".into() }).unwrap();
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```

### 特定窗口事件

使用特定窗口事件，可以在 `command` 函数中获取 `Window` 对象，或者使用 `get_window` 函数。

```rust
use tauri::{Manager, Window};

// 负载类型必须实现 `Serialize` 和 `Clone`。
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}

// 在 command 中初始化后台进程，并仅向使用该命令的窗口发出周期性事件
#[tauri::command]
fn init_process(window: Window) {
  std::thread::spawn(move || {
    loop {
      window.emit("event-name", Payload { message: "Tauri is awesome!".into() }).unwrap();
    }
  });
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // `main` 在此处是窗口的标签；它在窗口创建时定义或在 `tauri.conf.json` 中定义
      // 默认值为 `main`。请注意，它必须是唯一的
      let main_window = app.get_window("main").unwrap();

      // 监听 `event-name`（在 `main` 窗口中触发）
      let id = main_window.listen("event-name", |event| {
        println!("got window event-name with payload {:?}", event.payload());
      });
      // 使用 `listen` 函数返回的 `id` 取消监听事件
      // `Window` 结构上也暴露了 `once` API 可供使用
      main_window.unlisten(id);

      // 在 `main` 窗口中触发 `event-name` 事件
      main_window.emit("event-name", Payload { message: "Tauri is awesome!".into() }).unwrap();
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![init_process])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```
