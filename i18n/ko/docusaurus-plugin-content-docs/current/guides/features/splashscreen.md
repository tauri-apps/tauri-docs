# 시작 화면

웹 페이지를 출력하는 데 약간의 시간이 걸리거나, 메인 창을 표시하기 전에 Rust에서 초기화 절차를 진행해야 하는 경우, 시작 화면을 사용하면 로딩에 대해 사용자 경험을 향상 시킬 수 있습니다.

### 설치

먼저, 시작 화면용 HTML 코드가 포함될 `distDir` 폴더에 `splashscreen.html`을 만듭니다. 그리고, `tauri.conf.json`를 다음과 같이 수정합니다:

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

이제, 앱이 실행되면 메인 윈도우가 숨겨지고, 시작 화면 윈도우가 보여질 것입니다. 다음엔, 앱이 준비가 완료되면 시작 화면을 닫고 메윈 윈도우를 보여주는 방법이 필요할 것입니다. 이 작업을 수행하는 방법은 스플래시 화면을 닫기 전에 무엇을 기다리고 있는지에 따라 다릅니다.

### 웹페이지 기다리기

웹 코드를 기다리는 중인 경우, `close_splashscreen` [명령](command) 생성을 원하게 될 것입니다.

```rust src-tauri/main.rs
use tauri::Manager;
// 명령(Command) 생성:
// 이 명령은 반드시 비동기여야 합니다. 그렇기 때문에 메인 스레드에서 실행되어선 안됩니다.
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
  // 시작 화면 닫기
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // 메인 윈도우 보이기
  window.get_window("main").unwrap().show().unwrap();
}

// 명령(Command) 등록:
fn main() {
  tauri::Builder::default()
    // 이 부분 추가
    .invoke_handler(tauri::generate_handler![close_splashscreen])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}

```
You can then import it to your project in one of two ways:

```js
// With the Tauri API npm package:
import { invoke } from '@tauri-apps/api/tauri'
```
or
```js
// With the Tauri global script:
const invoke = window.__TAURI__.invoke
```

And finally, add an Event Listener (or just call `invoke()` whenever you want):
```js
document.addEventListener('DOMContentLoaded', () => {
  // This will wait for the window to load, but you could
  // run this function on whatever trigger you want
  invoke('close_splashscreen')
})
```

### Rust 기다리기

Rust 코드가 실행되기를 기다리는 경우, `setup` 함수 핸들러에 넣어 `App` 인스턴스에 액세스할 수 있도록 합니다:

```rust src-tauri/main.rs
use tauri::Manager;
fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splashscreen_window = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();
      // we perform the initialization code on a new task so the app doesn't freeze
      tauri::async_runtime::spawn(async move {
        // initialize your app here instead of sleeping :)
        println!("Initializing...");
        std::thread::sleep(std::time::Duration::from_secs(2));
        println!("Done initializing.");

        // After it's done, close the splashscreen and display the main window
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```
