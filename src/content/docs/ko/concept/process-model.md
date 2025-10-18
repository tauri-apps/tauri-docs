---
title: 프로세스 모델
sidebar:
  order: 0
i18nReady: true
---

Tauri는 Electron이나 많은 최신 웹 브라우저와 같은 멀티 프로세스 아키텍처를 채택하고 있습니다. 이 가이드에서는 이러한 설계 방침의 선택 이유와 그것이 안전한 애플리케이션을 만드는 데 왜 중요한지에 대해 설명합니다.

## 멀티 프로세스인 이유

GUI(그래픽 사용자 인터페이스) 애플리케이션의 초기에는 계산, 인터페이스 그리기, 사용자 입력에 대한 반응을 하나의 프로세스에서 실행하는 것이 일반적이었습니다. 상상할 수 있듯이, 이 프로세스는 시간이 많이 걸리는 고부하 계산 처리로 인해 사용자 인터페이스가 응답하지 않게 되거나, 더 나쁜 경우에는 하나의 앱 구성 요소의 장애가 앱 전체의 충돌을 일으키는 것을 의미했습니다.

이 결과, 더 강력한 아키텍처가 필요하다는 것이 분명해졌고, 애플리케이션은 다른 구성 요소를 다른 프로세스에서 실행하게 되었습니다. 이를 통해 최신 멀티 코어 CPU를 더 효과적으로 활용하고 훨씬 안전한 애플리케이션을 만들 수 있습니다. 각 구성 요소는 다른 프로세스에 분산되어 실행되므로 하나의 구성 요소에서 충돌이 발생해도 시스템 전체에 영향을 미치지 않습니다. 프로세스가 비활성 상태가 된 경우 간단히 해당 프로세스를 다시 시작할 수 있습니다.

또한 각 프로세스에 해당 작업을 완료하는 데 필요한 최소한의 권한만 부여함으로써 잠재적인 약점의 영향 범위를 제한할 수도 있습니다. 이 방법은 [최소 권한의 원칙]으로 알려져 있으며 현실 세계에서 흔히 볼 수 있습니다. 울타리 손질을 위해 정원사가 왔을 때, 정원 열쇠는 주지만 집 열쇠는 **주지 않을** 것입니다(집 안 출입은 정원사에게 필요 없겠죠?). 같은 생각이 컴퓨터 프로그램에도 적용됩니다. 접근 권한이 적을수록 침입당했을 때의 피해가 줄어듭니다.

## 코어 프로세스

각 Tauri 애플리케이션에는 "코어 프로세스"가 있으며, 이것이 애플리케이션의 "진입점"으로 기능합니다. 코어 프로세스는 운영 체제에 대한 전체 액세스 권한을 가진 유일한 구성 요소입니다.

이 "코어부"의 첫 번째 역할은 해당 액세스 권한을 사용하여 "애플리케이션 창", "시스템 트레이 메뉴" 및 "알림"을 만들고 조정하는 것입니다. Tauri는 이러한 처리를 쉽게 하기 위해 필요한 크로스 플랫폼 추상화를 구현합니다. 또한 모든 [프로세스 간 통신](IPC)을 "코어 프로세스"를 통해 전송하고, IPC 메시지를 이 중앙 부분 한 곳에서 가로채고, 필터링하고, 조작할 수 있도록 합니다.

"코어 프로세스"는 설정이나 데이터베이스 연결과 같은 "전역 상태"의 관리도 담당해야 합니다. 이를 통해 창 간의 상태를 쉽게 동기화하고, 프론트엔드에서 엿보려는 외부의 의심스러운 눈으로부터 비즈니스 기밀 데이터를 보호할 수 있습니다.

우리가 Tauri의 구현에 Rust를 선택한 것은 [소유권] 개념 덕분에
우수한 성능을 유지하면서 메모리 안전성이 보장되기 때문입니다.

<figure>

```d2 sketch pad=50
direction: right

Core: {
  shape: diamond
}

"Events & Commands 1": {
  WebView1: WebView
}

"Events & Commands 2": {
  WebView2: WebView
}

"Events & Commands 3": {
  WebView3: WebView
}

Core -> "Events & Commands 1"{style.animated: true}
Core -> "Events & Commands 2"{style.animated: true}
Core -> "Events & Commands 3"{style.animated: true}

"Events & Commands 1" -> WebView1{style.animated: true}
"Events & Commands 2" -> WebView2{style.animated: true}
"Events & Commands 3" -> WebView3{style.animated: true}
```

<figcaption>Tauri 프로세스 모델의 약도. 하나의 "코어 프로세스"가 하나 이상의 WebView 프로세스를 제어합니다.</figcaption>
</figure>

## WebView 프로세스

"코어 프로세스"가 실제 사용자 인터페이스(UI)를 렌더링하는 것은 아닙니다. 운영 체제에서 제공하는 WebView 라이브러리를 이용하여 WebView 프로세스를 시작하는 것입니다. WebView는 브라우저와 같은 환경으로, 여러분이 만든 HTML, CSS, JavaScript를 실행하는 것입니다.

이는 즉, 기존 웹 개발에서 사용되는 대부분의 기법과 도구를 Tauri 애플리케이션 제작에 사용할 수 있다는 것을 의미합니다. 예를 들어, Tauri의 참고 사례 대부분이 [Svelte] 프론트엔드 프레임워크와 [Vite] 번들러를 사용하여 만들어졌습니다.

보안 면에서도 최선의 방법이 취해지고 있습니다. 예를 들어, 사용자 입력을 항상 살균(무해화)하고, 프론트엔드에서는 결코 민감한 정보를 처리하지 않도록 하며, 이상적으로는 공격 대상 영역을 작게 유지하기 위해 가능한 한 많은 비즈니스 로직(업무 처리 절차)을 "코어 프로세스"에 위임해야 합니다.

다른 유사한 방법과 달리, WebView 라이브러리는 최종 실행 파일에 **포함되지 않고** 실행 시 동적으로 링크됩니다[^1]. 이를 통해 애플리케이션은 _상당히_ 작아지지만, 기존 웹 개발과 마찬가지로 플랫폼의 차이에 유의해야 한다는 것도 의미합니다.

[^1]:
    현재 Tauri는 Windows에서는 [Microsoft Edge WebView2]를, macOS에서는 [WKWebView]를,
    Linux에서는 [webkitgtk]를 사용합니다.

[최소 권한의 원칙]: https://ko.wikipedia.org/wiki/최소_권한의_원칙
[프로세스 간 통신]: /ko/concept/inter-process-communication/
[소유권]: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
[microsoft edge webview2]: https://docs.microsoft.com/ko-kr/microsoft-edge/webview2/
[wkwebview]: https://developer.apple.com/documentation/webkit/wkwebview
[webkitgtk]: https://webkitgtk.org
[svelte]: https://svelte.dev/
[vite]: https://vitejs.dev/
