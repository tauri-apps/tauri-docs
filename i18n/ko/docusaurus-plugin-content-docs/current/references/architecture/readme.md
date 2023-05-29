---
sidebar_position: 1
toc_max_heading_level: 2
---

import { colors } from '@theme/Mermaid'
import { Mermaid } from 'mdx-mermaid/Mermaid';

# Tauri 구조

## 소개

Tauri는 구성이 매우 용이하고 엔지니어가 다양한 응용 프로그램을 만들 수 있도록 해주는 다중 언어, 범용 도구 묶음입니다. Rust 도구들과 웹뷰에서 그린 HTML을 사용하여 데스크톱 응용 프로그램을 개발하는 데 사용합니다. Tauri로 만든 앱은 많은 선택적 JS API와 Rust API가 함께 제공되어 웹뷰에서 메시지 전달을 통해 시스템을 제어할 수 있도록 해줍니다. 개발자는 자체 기능으로 기본 API를 확장하고 Webview와 Rust 기반 백엔드를 쉽게 연결할 수 있습니다.

Tauri 앱은 [자체 메뉴](../../guides/features/menu.md)와 [트레이 타입 인터페이스](../../guides/features/system-tray.md)를 가질 수 있습니다. 이들은 [업데이트](../../guides/distribution/updater.md)될 수 있으며, 예상한 것처럼 사용자의 운영체제에 의해 관리됩니다. 이들은 OS의 웹뷰를 사용하기 때문에 크기가 [굉장히 작습니다](../benchmarks.md). 최종 바이너리가 Rust로부터 컴파일되므로 런타임을 포함하지 않습니다. 이는, [Tauri 앱을 역공학하는 것을 어렵게](./security.md) 만들어줍니다.

### Tauri가 하지 않는 것

Tauri는 경량 커널 래퍼가 아닙니다. 대신, [WRY](#wry) 와 [TAO](#tao)를 직접 사용하여 OS에 대한 시스템 호출을 수행하는 데 많은 노력을 기울입니다.

Tauri는 가상 머신이나 가상화 환경이 아닙니다. 대신, 운영체제 WebView를 활용한 앱을 만들 수 있는 도구 모음입니다.

## 핵심 생태계

<!-- prettier-ignore-start -->

<Mermaid chart={`graph TB; subgraph Core direction LR tauri TB tauri-runtime tauri-macros tauri-utils end %% This section should be organized from top to bottom tauri-build tauri-codegen tauri-runtime-wry tauri-runtime-wry -.-> WRY subgraph Upstream direction LR WRY TAO WRY -.-> TAO end style Core fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style Upstream fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style tauri fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px `} />

<!-- prettier-ignore-end -->

### [tauri](https://github.com/tauri-apps/tauri/tree/dev/core/tauri)

모든 걸 함께 품은 주요 crate입니다. 런타임, 매크로, 유용한 기능들과 API까지 한번에 가져다 줍니다. 기능을 가져오고 앱의 실제 구성을 수행하기 위해 컴파일 시 [`tauri.conf.json`](../../api/config.md) 파일( 프로젝트 폴더에 있는 `Cargo.toml` 파일도 포함) 읽어 포함시킵니다. 런타임 시 스크립트 주입(polyfills/prototype revision) 을 처리하고 시스템 상호 작용을 위한 API를 주관하며 업데이트 프로세스도 관리합니다.

### [tauri-runtime](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime)

Tauri와 저수준 웹뷰 라이브러리를 연결시켜주는 단계입니다.

### [tauri-macros](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-macros)

[`tauri-codegen`](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen) crate를 활용하여 컨텍스트, 핸들러 및 명령에 대한 매크로를 생성합니다.

### [tauri-utils](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-utils)

구성 파일 해석, 플랫폼 감지, CSP 주입 및 애셋 관리와 같은 유용한 도구를 제공하고 여러 곳에서 재사용할 수 있는 공통 코드입니다.

### [tauri-build](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-build)

`cargo`에게 필요한 몇 가지 특수 기능을 조작하기 위해 빌드 시 매크로를 적용해줍니다.

### [tauri-codegen](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen)

시스템 트레이 뿐만 아니라 앱을 위해 아이콘을 추가하여 애셋을 포함시키고, 해시, 압축합니다. 컴파일 타임에 [`tauri.conf.json`](../../api/config.md)을 분석하고 구성 구조체를 생성합니다.

### [tauri-runtime-wry](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime-wry)

이 crate는 WRY를 위해 인쇄, 모니터 감지, 기타 창 관련 작업과 같은 직접 시스템 단계의 상호작용을 제공합니다.

## Tauri 도구

### [API](https://github.com/tauri-apps/tauri/tree/dev/tooling/api) (JavaScript / TypeScript)

웹뷰가 백엔드 활동을 호출하고 수신할 수 있도록 프론트엔드 프레임워크로 가져와 `cjs` 및 `esm` JavaScript 끝점을 생성해주는 Typescript 라이브러리입니다. 또한, 일부 프레임워크의 경우 이렇게 하는 것이 더 최적이기 때문에 순수한 TypeScript로 제공됩니다. 웹뷰에서 호스트로 메시지를 전달할 때 사용합니다.

### [Bundler](https://github.com/tauri-apps/tauri/tree/dev/tooling/bundler) (Rust / Shell)

Tauri 앱을 빌드하는 과정에서 감지하거나 플랫폼에 대해 감지하고 알려주는 라이브러리입니다. 현재는 macOS, Windows, Linux만 지원하지만, 향후 모바일 플랫폼까지 지원하게 될 것입니다. 아마, Tauri 프로젝트 외부에서 사용할 수 있을 것입니다.

### [cli.rs](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli) (Rust)

이 Rust 실행 파일은 CLI를 위해 필요로 하는 모든 활동에 대한 전체 인터페이스를 제공합니다. macOS, Windows, 그리고 Linux를 지원합니다.

### [cli.js](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli/node) (JavaScript)

각 플랫폼용 npm 패키지를 만들기 위해 [`napi-rs`](https://github.com/napi-rs/napi-rs)를 활용해 [`cli.rs`](https://github.com/tauri-apps/tauri/blob/dev/tooling/cli)를 감싼 래퍼입니다.

### [create-tauri-app](https://github.com/tauri-apps/create-tauri-app) (JavaScript)

개발 팀이 (미리 구성해둔) 프론트엔드 프레임워크 중 하나를 선택하면 새로운 `tauri-apps` 프로젝트를 신속하게 스캐폴딩하도록 돕는 도구 묶음입니다.

## 상위 Crate

Tauri-Apps 조직에서는 Tauri 응용 프로그램의 창를 만들고 관리하는 TAO와 창 안의 웹뷰 인터페이스를 처리하는 두 가지의 상위 Crate를 유지, 관리를 하고 있습니다.

### [TAO](https://github.com/tauri-apps/tao)

Windows, macOS, Linux, iOS, Android와 같은 모든 주요 플랫폼을 지원하는 교차 플랫폼 창 생성용 Rust 라이브러리입니다. Rust로 작성되었으며 메뉴 표시줄 및 시스템 트레이와 같은 필요에 따라 확장한 [winit](https://github.com/rust-windowing/winit)의 포크(fork) 되었습니다.

### [WRY](https://github.com/tauri-apps/wry)

Tauri가 사용하는 WRY는 Windows, macOS, Linux와 같은 모든 주요 데스크탑 플랫폼을 지원하는 교차 플랫폼 웹뷰 렌더링 Rust 라이브러리입니다. Tauri는 어떤 웹뷰를 사용할지 (그리고, 어떻게 상호작용할 것인지) 결정해주는 추상화 계층인 WRY를 사용합니다.

## 추가 도구

### [tauri-action](https://github.com/tauri-apps/tauri-action)

모든 플랫폼을 대상으로 Tauri 바이너리를 빌드하는 GitHub workflow입니다. Tauri가 설정되어 있지 않더라도 (아주 단순한 수준의) Tauri 앱을 만드는 것까지도 할 수 있습니다.

### [tauri-vscode](https://github.com/tauri-apps/tauri-vscode)

본 프로젝트는 Visual Studio Code 인터페이스를 향상시킬 수 있도록 여러 좋은 기능들을 제공합니다.

### [vue-cli-plugin-tauri](https://github.com/tauri-apps/vue-cli-plugin-tauri)

vue-cli 프로젝트 안에서 Tauri를 아주 빠르게 설치할 수 있도록 합니다.

## 플러그인

[Tauri 플러그인 안내](../../guides/features/plugin.md)

(공식적으로 지원하는 플러그인이 있다고 해도) 일반적으로 플러그인은 제 3자가 작성합니다. 플러그인은 일반적으로 3가지 작업을 수행합니다.

1. Rust 코드가 "무언가"를 할 수 있도록 활성화
2. 앱에 쉽게 통합할 수 있도록 인터페이스 접착제를 제공합니다.
3. Rust 코드에 연결을 위한 JavaScript API를 함께 제공합니다.

Tauri 플러그인의 예시는 다음과 같습니다:

- [tauri-plugin-sql](https://github.com/tauri-apps/tauri-plugin-sql)
- [tauri-plugin-stronghold](https://github.com/tauri-apps/tauri-plugin-stronghold)
- [tauri-plugin-authenticator](https://github.com/tauri-apps/tauri-plugin-authenticator)

## 허가서

Tauri 그 자체는 MIT 혹은 Apache 2.0 허가서를 사용합니다. Tauri를 재포장하고 원본 코드를 수정한다면, 업스트림 허가서를 준수하는 지 확인할 책임이 있습니다. Tauri는 어떤 목적에 대한 적합성의 명시적인 이유 없이 있는 그대로 제공됩니다.

여기에서 우리의 [소프트웨어 자재 명세](https://app.fossa.com/projects/git%2Bgithub.com%2Ftauri-apps%2Ftauri)을 읽을 수 있습니다.

## 다음 단계

[당신의 첫 Tauri 앱](../../guides/getting-started/setup/README.mdx)

[개발 주기](../../guides/development/development-cycle.md)

[출시하기](../../guides/distribution/publishing.md)

[업데이트하기](../../guides/distribution/updater.md)
