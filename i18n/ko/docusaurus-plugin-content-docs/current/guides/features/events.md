# 이벤트

Tauri 이벤트 시스템은 프런트엔드와 백엔드 간에 메시지 전달을 허용하는 다중 생산자 다중 소비자 통신 기본 요소입니다. 명령 시스템과 유사하지만 이벤트 핸들러에 페이로드 타입 검사를 작성해야하며 채널처럼 작동하여 백엔드에서 프런트엔드로의 통신을 단순화합니다.

Tauri 애플리케이션은 전역 및 윈도우 관련 이벤트를 수신하고 내보낼 수 있습니다. 프런트엔드와 백엔드 사용법은 아래와 같습니다.

## 프론트엔드

이벤트 시스템은 `@tauri-apps/api` 패키지의 `event`와 `window` 모듈로 프런트엔드를 액세스할 수 있습니다.

### 전역 이벤트

전역 이벤트 채널을 사용하려면 `event` 모듈을 가져와 `emit`과 `listen` 기능을 사용해야 합니다.

```js
import { emit, listen } from '@tauri-apps/api/event'

// listen to the `click` event and get a function to remove the event listener
// there's also a `once` function that subscribes to an event and automatically unsubscribes the listener on the first event
const unlisten = await listen('click', (event) => {
  // event.event is the event name (useful if you want to use a single callback fn for multiple event types)
  // event.payload is the payload object
})

// emits the `click` event with the object payload
emit('click', {
  theMessage: 'Tauri is awesome!',
})
```

### 윈도우 관련 이벤트

윈도우 관련 이벤트는 `window` 모듈에 나타나 있습니다.

```js
import { appWindow, WebviewWindow } from '@tauri-apps/api/window'

// emit an event that is only visible to the current window
appWindow.emit('event', { message: 'Tauri is awesome!' })

// create a new webview window and emit an event only to that window
const webview = new WebviewWindow('window')
webview.emit('event')
```

## 백엔드

백엔드에서 전역 이벤트 채널은 `App` 구조체에서 노출되며, 윈도우 관련 이벤트는 `Window` 트레잇을 사용하여 전송할 수 있습니다.

### 전역 이벤트

```rust
use tauri::Manager;

// 페이로드 유형은 `Serialize` 및 `Clone`을 구현해야 합니다.
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // listen to the `event-name` (emitted on any window)
      let id = app.listen_global("event-name", |event| {
        println!("got event-name with payload {:?}", event.payload());
      });
      // unlisten to the event using the `id` returned on the `listen_global` function
      // a `once_global` API is also exposed on the `App` struct
      app.unlisten(id);

      // emit the `event-name` event to all webview windows on the frontend
      app.emit_all("event-name", Payload { message: "Tauri is awesome!".into() }).unwrap();
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```

### 윈도우 관련 이벤트

윈도우 관련 이벤트 채널은 명령 처리기나 `get_window` 함수를 통해서 `Window` 객체를 얻어 사용할 수 있습니다.

```rust
use tauri::{Manager, Window};

// 페이로드 유형은 `Serialize` 및 `Clone`을 구현해야 합니다.
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}

// init a background process on the command, and emit periodic events only to the window that used the command
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
      // `main` here is the window label; it is defined on the window creation or under `tauri.conf.json`
      // the default value is `main`. note that it must be unique
      let main_window = app.get_window("main").unwrap();

      // listen to the `event-name` (emitted on the `main` window)
      let id = main_window.listen("event-name", |event| {
        println!("got window event-name with payload {:?}", event.payload());
      });
      // unlisten to the event using the `id` returned on the `listen` function
      // an `once` API is also exposed on the `Window` struct
      main_window.unlisten(id);

      // emit the `event-name` event to the `main` window
      main_window.emit("event-name", Payload { message: "Tauri is awesome!".into() }).unwrap();
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![init_process])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```
