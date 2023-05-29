# 窗口菜单

本机应用程序菜单可以附加到窗口。

### 创建菜单

要创建本机窗口菜单，请导入 `Menu`、`Submenu`、`MenuItem` 和 `CustomMenuItem` 类型。 `MenuItem` 枚举包含一系列特定平台的项（目前在 Windows 上没有实现）。 `CustomMenuItem` 允许创建自己的菜单项并为它们添加特殊的功能。

```rust
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
```

创建 `Menu` 实例：

```rust
// 这里 `"quit".to_string()` 定义菜单项 ID，第二个参数是菜单项标签。
let quit = CustomMenuItem::new("quit".to_string(), "Quit");
let close = CustomMenuItem::new("close".to_string(), "Close");
let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
let menu = Menu::new()
  .add_native_item(MenuItem::Copy)
  .add_item(CustomMenuItem::new("hide", "Hide"))
  .add_submenu(submenu);
```

### 将菜单添加到所有窗口

可以使用 `tauri::Builder` 结构体上的 `menu` API 将定义的菜单设置为所有窗口：

```rust
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

fn main() {
  let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .menu(menu)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### 将菜单添加到指定窗口

可以创建一个窗口并设置要使用的菜单。 This allows for defining a specific menu set for each application window.

```rust
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
use tauri::WindowBuilder;

fn main() {
  let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .setup(|app| {
      WindowBuilder::new(
        app,
        "main-window".to_string(),
        tauri::WindowUrl::App("index.html".into()),
      )
      .menu(menu)
      .build()?;
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### 监听自定义菜单项上的事件

每一个 `CustomMenuItem` 在点击时触发一个事件。 使用 `on_menu_event` API 来处理它们，无论是在全局的 `tauri::Builder` 上还是在特定的窗口上。

#### 监听全局菜单上的事件

```rust
use tauri::{CustomMenuItem, Menu, MenuItem};

fn main() {
  let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "quit" => {
          std::process::exit(0);
        }
        "close" => {
          event.window().close().unwrap();
        }
        _ => {}
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

#### 监听窗口菜单上的事件

```rust
use tauri::{CustomMenuItem, Menu, MenuItem};
use tauri::{Manager, WindowBuilder};

fn main() {
  let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .setup(|app| {
      let window = WindowBuilder::new(
        app,
        "main-window".to_string(),
        tauri::WindowUrl::App("index.html".into()),
      )
      .menu(menu)
      .build()?;
      let window_ = window.clone();
      window.on_menu_event(move |event| {
        match event.menu_item_id() {
          "quit" => {
            std::process::exit(0);
          }
          "close" => {
            window_.close().unwrap();
          }
          _ => {}
        }
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### 更新菜单项

`Window` 结构体有一个 `menu_handle` 方法，它允许更新菜单项：

```rust
fn main() {
  let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .menu(menu)
    .setup(|app| {
      let main_window = app.get_window("main").unwrap();
      let menu_handle = main_window.menu_handle();
      std::thread::spawn(move || {
        // you can also `set_selected`, `set_enabled` and `set_native_image` (macOS only).
        menu_handle.get_item("item_id").set_title("New title");
      });
      Ok(())
    })
}
```
