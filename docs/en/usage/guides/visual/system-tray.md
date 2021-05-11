---
title: System Tray
---

Native application system tray.

### Setup

Configure the `systemTray` object on `tauri.conf.json`:

```json
{
  "tauri": {
    "systemTray": {
      "iconPath": "icons/icon.png"
    }
  }
}
```

The `iconPath` is pointed to a PNG file on macOS and Linux, and a `.ico` file must exist for Windows support.

### Creating a system tray

To create a native system tray menu, import the `SystemTrayMenuItem` and `CustomMenuItem` types.

```rust
use tauri::{CustomMenuItem, SystemTrayMenuItem};
```

Create a `SystemTrayMenuItem` array:

```rust
// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
let quit = CustomMenuItem::new("quit".to_string(), "Quit");
let hide = CustomMenuItem::new("hide".to_string(), "Hide");
let tray_menu_items = vec![
  SystemTrayMenuItem::Custom(hide),
  SystemTrayMenuItem::Separator,
  SystemTrayMenuItem::Custom(quit),
];
```

### Adding the system tray menu items to the application

The defined menu items can be set using the `system_tray` API on the `tauri::Builder` struct:

```rust
use tauri::{CustomMenuItem, SystemTrayMenuItem};

fn main() {
  let tray_menu_items = vec![]; // insert the system tray menu items array here
  tauri::Builder::default()
    .system_tray(tray_menu_items)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### Listening to events on system tray menu items

Each `CustomMenuItem` triggers an event when clicked. Use the `on_system_tray_event` API to handle them:

```rust
use tauri::{CustomMenuItem, SystemTrayMenuItem};
use tauri::Manager;

fn main() {
  let tray_menu_items = vec![]; // insert the system tray menu items array here
  tauri::Builder::default()
    .system_tray(tray_menu_items)
    .on_system_tray_event(|app, event| match event.menu_item_id().as_str() {
      "quit" => {
        std::process::exit(0);
      }
      "hide" => {
        let window = app.get_window("main").unwrap();
        window.hide().unwrap();
      }
      _ => {}
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```
