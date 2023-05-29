# 멀티 윈도우

단일 애플리케이션에서 멀티 윈도우 관리하기.

## 윈도우 생성하기

Tauri 구성 파일이나 런타임에서 윈도우을 정적으로 만들 수 있습니다.

### 정적 윈도우

[tauri.windows][] 구성 배열을 사용하여 여러 개의 윈도우를 만들 수 있습니다. 다음에 나오는 짧은 JSON 구성으로 여러 창을 정적으로 만드는 방법을 보여줍니다.

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

윈도우 레이블은 고유해야 하며 런타임에 윈도우 인스턴스에 액세스하는 데 사용할 수 있습니다. 정적 윈도우에 사용할 수 있는 구성 옵션의 전체 목록은 [WindowConfig][] 문서에서 찾을 수 있습니다.

### 런타임 윈도우

Rust 계층이나 Tauri API를 통해 런타임에서 윈도우를 만들 수도 있습니다.

#### Rust에서 윈도우 생성

[WindowBuilder][] 구조체를 사용하여 런타임에서 윈도우를 생성할 수 있습니다.

윈도우를 만들려면 실행 중인 [App][] 또는, [AppHandle][]의 인스턴스가 있어야 합니다.

##### [App][] 인스턴스를 사용하여 윈도우 생성

[App][] 인스턴스는 설정 후크 안에서 혹은, [Builder::build][] 호출 후에 얻을 수 있습니다.

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

설정 후크를 사용하면 정적 윈도우와 Tauri 플러그인이 초기화되는 것을 보장 해줍니다. 대안으로, [App][]을 빌드한 후 윈도우를 만들 수 있습니다.

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

이 함수는 값의 소유권을 설정 클로저로 이동할 수 없을 때 유용합니다.

##### [AppHandle][] 인스턴스를 사용하여 윈도우 생성

[AppHandle][] 인스턴스는 [`App::handle`] 함수를 사용하거나 Tauri 명령에 직접 삽입하여 가져올 수 있습니다.

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

Tauri 명령으로 윈도우를 만들 때 [wry#583][] 이슈로 인해 Windows에서 교착 상태가 발생하지 않도록 명령 기능이 `async`인지 확인해야 합니다.

:::

#### JavaScript에서 윈도우 생성

Tauri API를 사용하면 [WebviewWindow][] 클래스를 가져와 런타임에서 쉽게 윈도우를 만들 수 있습니다.

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

## 런타임에 윈도우 접근하기

윈도우 인스턴스는 인스턴스 자체 레이블, Rust의 [get_window][] 함수, JavaScript의 [WebviewWindow.getByLabel][]을 사용하여 질의할 수 있습니다.

```rust Using get_window
use tauri::Manager;
tauri::Builder::default()
  .setup(|app| {
    let main_window = app.get_window("main").unwrap();
    Ok(())
  })
```

[App][] 또는 [AppHandle][] 인스턴스에서 [get_window][] 함수를 사용하려면 [tauri::Manager][]를 가져와야 합니다.

```js Using WebviewWindow.getByLabel
import { WebviewWindow } from '@tauri-apps/api/window'
const mainWindow = WebviewWindow.getByLabel('main')
```

## 다른 윈도우와 통신하기

윈도우 간 통신은 이벤트 시스템을 통해 할 수 있습니다. 자세한 내용은 [Event 안내서][]를 확인하세요.

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
[Event 안내서]: ./events.md
