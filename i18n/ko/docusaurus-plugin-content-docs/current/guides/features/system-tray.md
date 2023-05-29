# 시스템 트레이

네이티브 애플리케이션 시스템 트레이

### 설치

`systemTray` 오브젝트는 `tauri.conf.json`를 통해서 설정합니다:

```json
{
  "tauri": {
    "systemTray": {
      "iconPath": "icons/icon.png",
      "iconAsTemplate": true
    }
  }
}
```

`iconAsTemplate`은 이미지가 macOS에서 [Template Image][]를 나타내는지 여부를 결정하는 boolean 값입니다.

#### Linux 설치

Linux에서는 `libayatana-appindicator` 나 `libappindicator3` 패키지 중 하나를 설치해야 합니다. Tauri는 런타임 시 사용할 패키지를 결정하는 데, 둘 다 설치된 경우 `libayatana`를 선호하게 됩니다.

기본적으로, Debian 패키지(`.deb` 파일)는 `libayatana-appindicator3-1`에 종속성을 추가합니다. `libappindicator3`을 대상으로 하는 Debian 패키지를 만들려면 `TAURI_TRAY` 환경 변수를 `libappindicator3`으로 설정해야 합니다.

AppImage 번들은 설치된 트레이 라이브러리를 자동으로 포함시키고, `TAURI_TRAY` 환경 변수를 사용하여 수동으로 선택할 수도 있습니다.

:::info

`libappindicator3`은 현재 유지 관리가 되고 있지 않으며, `debian11`과 같은 일부 배포판에도 존재하지 않으며, `libayatana-appindicator`는 이전 릴리스에 존재하지 않습니다.

:::

### 시스템 트레이 만들기

네이티브 시스템 트레이를 만들기 위해서, `SystemTray` 을 임포트해줍니다.

```rust
use tauri::SystemTray;
```

새로운 트레이 인스턴스를 초기화합니다:

```rust
let tray = SystemTray::new();
```

### 시스템 트레이 컨텍스트 메뉴 설정하기

선택적으로, 트레이 아이콘을 마우스 오른쪽 버튼으로 클릭하면 표시되는 컨텍스트 메뉴를 추가할 수 있습니다. `SystemTrayMenu`, `SystemTrayMenuItem`, `CustomMenuItem` 임포트 합니다:

```rust
use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem};
```

`SystemTrayMenu` 생성:

```rust
// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
let quit = CustomMenuItem::new("quit".to_string(), "Quit");
let hide = CustomMenuItem::new("hide".to_string(), "Hide");
let tray_menu = SystemTrayMenu::new()
  .add_item(quit)
  .add_native_item(SystemTrayMenuItem::Separator)
  .add_item(hide);
```

트레이 메뉴를 `SystemTray`인스턴스에 추가합니다:

```rust
let tray = SystemTray::new().with_menu(tray_menu);
```

### 앱 시스템 트레이 설정

생성된 `SystemTray` 인스턴스는 `tauri::Builder` 구조체에서 `system_tray` API를 사용하여 설정할 수 있습니다.

```rust
use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu};

fn main() {
  let tray_menu = SystemTrayMenu::new(); // insert the menu items here
  let system_tray = SystemTray::new()
    .with_menu(tray_menu);
  tauri::Builder::default()
    .system_tray(system_tray)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### 시스템 트레이 이벤트 수신하기

각 `CustomMenuItem`은 클릭 시 이벤트를 동작 시킵니다. 또한, Tauri는 트레이 아이콘 클릭 이벤트를 발생시킵니다. Use the `on_system_tray_event` API 사용하면 이들을 조정할 수 있습니다:

```rust
use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayEvent};
use tauri::Manager;

fn main() {
  let tray_menu = SystemTrayMenu::new(); // insert the menu items here
  tauri::Builder::default()
    .system_tray(SystemTray::new().with_menu(tray_menu))
    .on_system_tray_event(|app, event| match event {
      SystemTrayEvent::LeftClick {
        position: _,
        size: _,
        ..
      } => {
        println!("system tray received a left click");
      }
      SystemTrayEvent::RightClick {
        position: _,
        size: _,
        ..
      } => {
        println!("system tray received a right click");
      }
      SystemTrayEvent::DoubleClick {
        position: _,
        size: _,
        ..
      } => {
        println!("system tray received a double click");
      }
      SystemTrayEvent::MenuItemClick { id, .. } => {
        match id.as_str() {
          "quit" => {
            std::process::exit(0);
          }
          "hide" => {
            let window = app.get_window("main").unwrap();
            window.hide().unwrap();
          }
          _ => {}
        }
      }
      _ => {}
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

### 시스템 트레이 업데이트하기

`AppHandle` 구조체에는 `tray_handle` 함수가 있습니다. 이 함수는 시스템 트레이에 핸들을 반환하여 트레이 아이콘과 컨텍스트 메뉴 항목을 업데이트할 수 있도록 합니다.

#### 컨텍스트 메뉴 항목 업데이트하기

```rust
use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayEvent};
use tauri::Manager;

fn main() {
  let tray_menu = SystemTrayMenu::new(); // insert the menu items here
  tauri::Builder::default()
    .system_tray(SystemTray::new().with_menu(tray_menu))
    .on_system_tray_event(|app, event| match event {
      SystemTrayEvent::MenuItemClick { id, .. } => {
        // get a handle to the clicked menu item
        // note that `tray_handle` can be called anywhere,
        // just get an `AppHandle` instance with `app.handle()` on the setup hook
        // and move it to another function or thread
        let item_handle = app.tray_handle().get_item(&id);
        match id.as_str() {
          "hide" => {
            let window = app.get_window("main").unwrap();
            window.hide().unwrap();
            // you can also `set_selected`, `set_enabled` and `set_native_image` (macOS only).
            item_handle.set_title("Show").unwrap();
          }
          _ => {}
        }
      }
      _ => {}
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

#### 트레이 아이콘 업데이트하기

`Icon::Raw`를 사용하려면, Cargo.toml의 tauri 종속성에 `icon-ico` 또는 `icon-png` 기능 플래그를 추가해야 합니다.

```rust
app.tray_handle().set_icon(tauri::Icon::Raw(include_bytes!("../path/to/myicon.ico").to_vec())).unwrap();
```

### Preventing the App from Closing

By default, Tauri closes the application when the last window is closed. You can simply call `api.prevent_close()` to prevent this.

Depending on your needs you can use one of the two following options:

**Keep the Backend Running in the Background**

If your backend should run in the background, you can call `api.prevent_close()` like so:

```rust
tauri::Builder::default()
  .build(tauri::generate_context!())
  .expect("error while building tauri application")
  .run(|_app_handle, event| match event {
    tauri::RunEvent::ExitRequested { api, .. } => {
      api.prevent_exit();
    }
    _ => {}
  });
```

**Keep the Frontend Running in the Background**

If you need to keep the frontend running in the background, this can be achieved like this:

```rust
tauri::Builder::default().on_window_event(|event| match event.event() {
  tauri::WindowEvent::CloseRequested { api, .. } => {
    event.window().hide().unwrap();
    api.prevent_close();
  }
  _ => {}
})
.run(tauri::generate_context!())
.expect("error while running tauri application");
```

[Template Image]: https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc
