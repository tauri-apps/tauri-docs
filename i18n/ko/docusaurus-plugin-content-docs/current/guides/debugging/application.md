import Command from '@theme/Command'

# 애플리케이션 디버깅

Tauri의 모든 움직이는 부분에는 디버깅이 필요한 문제가 발생할 수 있습니다. 오류 상세 정보가 출력되는 위치가 많이 있어, Tauri에는 디버깅 프로세스를 보다 간단하게 만드는 몇 가지 도구가 포함되어 있습니다.

## Rust 콘솔

오류를 찾는 첫 번째 장소는 Rust 콘솔입니다. 터미널에 `tauri dev`를 실행합니다. 다음 코드를 사용하여 Rust 파일 내 해당 콘솔에 무언가를 인쇄할 수 있습니다:

```rust
println!("Message from Rust: {}", msg);
```

때로는, Rust 코드에 오류가 있을 수 있고, Rust 컴파일러는 많은 정보를 제공할 수 있습니다. 예를 들어, `tauri dev`가 충돌하는 경우, Linux 및 macOS에서 다음과 같이 다시 실행할 수 있습니다:

```shell
RUST_BACKTRACE=1 tauri dev
```

혹은 윈도우에선 아래와 같습니다.

```shell
set RUST_BACKTRACE=1
tauri dev
```

이 명령은 세분화된 추적 스택을 제공해줍니다. 일반적으로, Rust 컴파일러는 다음과 같은 문제에 대한 자세한 정보를 제공하여 도움을 줍니다.

```
error[E0425]: cannot find value `sun` in this scope
  --> src/main.rs:11:5
   |
11 |     sun += i.to_string().parse::<u64>().unwrap();
   |     ^^^ help: a local variable with a similar name exists: `sum`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0425`.
```

## WebView 콘솔

WebView에서 우클릭한 후, `요소 검사`를 선택합니다. 이렇게 하면 익숙한 Chrome 또는 Firefox 개발 도구와 유사한 웹 검사기가 열립니다. Linux 및 Windows에서는 `Ctrl + Shift + i` 단축키를 사용하고 macOS에서는 `Command + Option + i` 단축키를 사용하여 속성을 열 수도 있습니다.

검사기 창은 플랫폼에 따라 다르며 Linux의 webkit2gtk WebInspector, macOS의 Safari 검사기 창 및 Windows의 Microsoft Edge DevTools를 렌더링합니다.

### 프로그래밍으로 Devtools 열기

[`Window::open_devtools`][] 및 [`Window::close_devtools`][] 기능을 사용하여 검사기 창을 제어할 수 있습니다.

```rust
use tauri::Manager;
tauri::Builder::default()
  .setup(|app| {
    #[cfg(debug_assertions)] // 디버그 빌드에만 이 코드를 포함
    {
      let window = app.get_window("main").unwrap();
      window.open_devtools();
      window.close_devtools();
    }
    Ok(())
  });
```

### 프로덕션에서 요소 검사 사용하기

기본적으로, 요소 검사는 Cargo 기능으로 활성화하지 않는 한 개발 및 디버그 빌드에서만 활성화됩니다.

#### 디버그 빌드 생성하기

디버그 빌드를 생성하기 위해선 `tauri build --debug` 명령을 실행해야 합니다.

<Command name="build --debug" />

일반 빌드 및 개발 프로세스와 마찬가지로 빌드는 이 명령을 처음 실행할 때 약간의 시간이 걸리지만 후속 실행에서는 훨씬 더 빠릅니다. 최종 번들 앱에는 개발 콘솔이 활성화되어 있으며 `src-tauri/target/debug/bundle`에 배치됩니다.

터미널에서 빌드된 앱을 실행하여 Rust 컴파일러 노트(오류가 있는 경우) 또는 `println` 메시지를 제공할 수도 있습니다. `src-tauri/target/(release|debug)/[app name]` 파일을 찾아 콘솔에서 직접 실행하거나 파일 시스템에서 실행 파일 자체를 두 번 클릭합니다(참고: 콘솔은 이 방법으로 오류를 종료합니다).

#### Devtools 기능 활성화

:::주의

이 devtools는 macOS에서 비공개 API입니다. MacOS에서 비공개 API를 사용하면 애플리케이션이 App Store에 승인되지 않습니다.

:::

프로덕션 빌드에서 devtools를 활성화하려면 `src-tauri/Cargo.toml` 파일에서 `devtools` Cargo 기능을 활성화해야 합니다.

```toml
[dependencies]
tauri = { version = "...", features = ["...", "devtools"] }
```

## 핵심 프로세스 디버깅

핵심 프로세스는 Rust로 구동되므로 GDB 또는 LLDB를 사용하여 디버깅할 수 있습니다. [VS Code에서 디버깅][] 가이드에 따라 LLDB VS Code 확장을 사용하여 Tauri 애플리케이션의 핵심 프로세스를 디버깅하는 방법을 알아볼 수 있습니다.

[VS Code에서 디버깅]: ./vs-code.md
[`Window::open_devtools`]: https://docs.rs/tauri/1/tauri/window/struct.Window.html#method.open_devtools
[`Window::close_devtools`]: https://docs.rs/tauri/1/tauri/window/struct.Window.html#method.close_devtools
