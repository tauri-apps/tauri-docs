# 윈도우 메뉴

네이티브 애플리케이션 메뉴를 윈도우에 연결할 수 있습니다.

### 메뉴 생성하기

네이티브 윈도우 메뉴를 만들기 위해서, `Menu`, `Submenu`, `MenuItem`, `CustomMenuItem` 타입을 임포트 해야 합니다. `MenuItem` 열거형에는 플랫폼별 항목 모음이 포함되어 있습니다(현재 Windows에서는 구현되지 않음). `CustomMenuItem`을 사용하면, 나만의 메뉴 항목을 만들고 특별한 기능을 추가할 수 있습니다.

```rust
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
```

`Menu` 인스턴스를 생성합니다:

```rust
// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
let quit = CustomMenuItem::new("quit".to_string(), "Quit");
let close = CustomMenuItem::new("close".to_string(), "Close");
let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
let menu = Menu::new()
  .add_native_item(MenuItem::Copy)
  .add_item(CustomMenuItem::new("hide", "Hide"))
  .add_submenu(submenu);
```

### 전체 윈도우에 메뉴 추가하기

정의된 메뉴는 `tauri::Builder` 구조체의 `menu` API를 사용하여 모든 윈도우에 설정할 수 있습니다.

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

### 특정 윈도우에 메뉴 추가하기

윈도우를 생성하고 사용할 메뉴를 설정할 수 있습니다. This allows for defining a specific menu set for each application window.

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

### 사용자 정의 메뉴 항목에서 이벤트 수신하기

각 `CustomMenuItem`은 클릭 시 이벤트를 동작 시킵니다. `on_menu_event` API를 사용하여 전역 `tauri::Builder` 혹은 특정 윈도우를 처리합니다.

#### 전역 메뉴에서 이벤트 수신하기

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

#### 윈도우 메뉴에서 이벤트 수신하기

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

### 메뉴 항목 업데이트

`Window` 구조체에는 메뉴 항목 업데이트를 허용하는 `menu_handle` 함수가 있습니다.

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
