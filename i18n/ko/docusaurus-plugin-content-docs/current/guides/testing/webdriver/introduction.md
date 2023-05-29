---
sidebar_position: 1
title: 소개
---

:::주의 현재 pre-alpha
Tauri 위한 Webdriver 지원은 아직 pre-alpha 상태입니다. [tauri-driver][]와 같은 전용 도구는 아직 개발 중이고, 시간이 지나고 필요에 따라 변경될 수 있습니다. 추가적으로, 오직 Windows와 Linux만 현재 지원합니다.
:::

[WebDriver][]는 주로 자동 테스트용 웹 문서와 상호작용하는 표준화된 인터페이스입니다. Tauri는 교차 플랫폼 래퍼 [`tauri-driver`][] 아래에 있는 기본 플랫폼의 [WebDriver][] 서버를 활용하여 [WebDriver][] 인터페이스를 지원합니다.

## 시스템 의존성

다음을 실행하여 최신 [`tauri-driver`][] 를 설치하거나, 기존 설치를 업데이트 합니다.

```shell
cargo install tauri-driver
```

현재 플랫폼의 기본 [WebDriver][] 서버를 사용하기 때문에 지원되는 플랫폼에서 [`tauri-driver`][]를 실행하기 위한 몇 가지 요구 사항이 있습니다. 지원하는 플랫폼은 현재 Linux와 Windows로 제한됩니다.

### Linux

Linux 플랫폼에서는 `WebKitWebDriver`를 사용합니다. 일부 배포판은 일반 WebKit 패키지와 함께 번들로 제공되기 때문에 이 바이너리가 존재하는지 확인해야 합니다(`WebKitWebDriver 같은` 명령). Debian 기반 배포판 같은 일부 플랫폼에서는 `webkit2gtk-driver` 같이 분리된 패키지로 제공합니다.

### Windows

Make sure to grab the version of [Microsoft Edge Driver][] that matches your Windows Edge version that the application is being built and tested on. 이것은 최신 Windows 설치에서 항상 최신 안정 버전이어야 합니다. 만약, 두 버전이 일치하지 않으면 연결을 시도하는 동안 WebDriver 테스트 도구가 중단될 수 있습니다.

다운로드 항목에는 `msedgedriver.exe`라는 바이너리가 포함되어 있습니다. [`tauri-driver`][]는 `$PATH`를 통해서 바이너리를 찾기 때문에, 해당 드라이버 경로에서 사용하거나, [`tauri-driver`][]에서 `--native-driver` 옵션을 사용하세요. Edge 및 Edge 드라이버 버전이 Windows CI 시스템에서 동기화 상태를 유지하도록 프로세스의 일부로 CI 설정하면 드라이버를 자동으로 다운로드할 수 있습니다. 이를 수행하는 방법에 대한 안내는 나중에 추가될 것입니다.

## 예제 앱

[다음 섹션](example/setup)은 WebDriver와 함께 애플리케이션을 테스트하는 최소한의 예제를 어떻게 만들지 순차적으로 보여주는 안내서입니다.

안내서의 결과를 보고 싶거나, 활용 가능한 최종 코드 베이스를 보고 싶은 경우, https://github.com/chippers/hello_tauri 를 방문하여 확인할 수 있습니다. 이 예제는 GitHub Actions으로 테스트하기 위한 CI 스크립트와 함께 제공되지만, 더 관심이 있다면 개념을 좀 더 자세히 설명하는 [WebDriver CI](ci) 안내서를 참고하세요.

[WebDriver]: https://www.w3.org/TR/webdriver/
[`tauri-driver`]: https://crates.io/crates/tauri-driver
[tauri-driver]: https://crates.io/crates/tauri-driver
[Microsoft Edge Driver]: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
