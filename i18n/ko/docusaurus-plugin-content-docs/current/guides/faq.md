---
title: 자주 묻는 질문
sidebar_position: 10
description: 일반적인 문제에 대한 수정
---

## 게시되지 않은 Tauri 변경 항목을 어떻게 사용할 수 있나요?

GitHub (개발 도중 버전)에서 Tauri를 내려받아 쓰려면 `Cargo.toml` 파일을 변경하고 CLI와 API를 고쳐 쓸 필요가 있습니다.

<details>
  <summary>소스에서 Rust crate 가져오기</summary>

아래 내용을 `Cargo.toml` 파일에 추가하세요.

```toml title=Cargo.toml
[patch.crates-io]
tauri = { git = "https://github.com/tauri-apps/tauri", branch = "dev" }
tauri-build = { git = "https://github.com/tauri-apps/tauri", branch = "dev" }
```

이렇게 하면 `tauri`와 `tauri-build` 의존성을 crates.io 대신 Git으로 내려받습니다.

</details>

<details>
  <summary>소스에서 Tauri CLI 사용</summary>

만약, Cargo CLI를 사용하고 있다면, Github에서 바로 설치할 수 있습니다:

```shell
cargo install --git https://github.com/tauri-apps/tauri --branch dev tauri-cli
```

만약, `@tauri-apps/cli` 패키지를 사용하는 경우 저장소를 클론하고 빌드할 필요가 있습니다.

```shell
git clone https://github.com/tauri-apps/tauri
git checkout dev
cd tauri/tooling/cli/node
yarn
yarn build
```

이를 사용하려면 노드로 직접 실행하세요:

```shell
node /path/to/tauri/tooling/cli/node/tauri.js dev
node /path/to/tauri/tooling/cli/node/tauri.js build
```

다른 방법으로, Cargo를 통해 직접 앱을 실행할 수 있습니다.

```shell
cd src-tauri
cargo run --no-default-features # instead of tauri dev
cargo build # instead of tauri build - won't bundle your app though
```

</details>

<details>
  <summary>소스에서 Tauri API 사용하기</summary>

GitHub에서 Tauri crate를 가져다 사용할 때 소스에서 Tauri API 패키지를 사용하는 것이 좋습니다(필요하지 않을 수도 있음). 소스에서 빌드하려면 다음 스크립트를 실행합니다:

```shell
git clone https://github.com/tauri-apps/tauri
git checkout dev
cd tauri/tooling/api
yarn
yarn build
```

이제 yarn을 사용하여 연결할 수 있습니다:

```shell
cd dist
yarn link
cd /path/to/your/project
yarn link @tauri-apps/api
```

또는, dist 폴더를 직접 가리키도록 package.json을 변경할 수 있습니다:

```json title=package.json
{
  "dependencies": {
    "@tauri-apps/api": "/path/to/tauri/tooling/api/dist"
  }
}
```

</details>

## Node, Cargo 어느 것을 사용해야 하나요? {#node-or-cargo}

Cargo를 통해 CLI를 설치하는 것이 선호되는 옵션이지만, 설치할 때 처음부터 전체 바이너리를 컴파일해야 합니다. CI 환경에 있거나, 매우 느린 시스템에 있는 경우 다른 설치 방법을 선택하는 것이 좋습니다.

CLI는 Rust로 작성되었으므로 [crates.io][]를 통해 자연스럽게 사용할 수 있고, Cargo와 함께 설치 가능합니다.

또한, CLI는 네이티브 Node.js 부가물로 컴파일되며, [npm][]에 배포됩니다. 이 방법은 Cargo 설치 방법에 비해 몇 가지 장점이 있습니다:

1. CLI가 미리 컴파일되어 있어 설치 시간이 단축됩니다.
2. package.json 파일을 통해 특정 버전을 쓰도록 고정할 수 있습니다.
3. Tauri관련 자체 도구를 개발하는 경우 CLI를 일반적인 JavaScript 모듈처럼 가져올 수 있습니다.
4. JavasScript 관리 도구로 CLI를 설치할 수 있습니다.

## 권장 Browserlist 설정

`es2021`, `last 3 Chrome versions`, `safari13`으로 browserlist와 빌드 타겟을 설정하는 걸 권장합니다. Tauri가 운영 체제의 네이티브 렌더링 엔진 (macOS에서 WebKit, Windows에서 WebView2, Linux에서 WebkitGTK)을 사용하기 때문입니다.

## Linux에서 Homebrew 사용 시 빌드 충돌

Linux의 Homebrew에는 자체 `pkg-config`(시스템에서 라이브러리를 찾는 유틸리티) 가 포함되어 있습니다. 이로 인해, Tauri 관련 `pkg-config` 패키지를 설치할 때 충돌이 발생할 수 있습니다(일반적으로 `apt`와 같은 패키지 관리자를 통해 설치됨). Tauri 앱을 빌드할 때, `pkg-config`를 호출을 시도하고, 마지막엔 Homebrew에서 호출하게 됩니다. 만약, Homebrew에 Tauri의 종속성이 설치되어 있지 않은 경우, 오류를 야기할 수 있습니다.

오류는 _일반적으로_ `오류: X에 대한 사용자 지정 빌드 명령을 실행하지 못했습니다` - `pkg-config 검색 경로에서 패키지 Y를 찾을 수 없습니다.`와 같은 메시지를 포함하게 됩니다. 필수 종속성들이 전혀 설치되지 않은 경우, 유사한 오류가 표시될 수 있음을 기억해야 합니다.

이 문제에 대한 2가지 해결책은 다음과 같습니다:

1. [Homebrew 제거][]
2. Tauri 앱을 빌드하기 전에 올바른 `pkg-config`를 가리키도록 `PKG_CONFIG_PATH` 환경 변수를 설정하세요.

[crates.io]: https://crates.io/crates/tauri-cli
[npm]: https://www.npmjs.com/package/@tauri-apps/cli
[Homebrew 제거]: https://docs.brew.sh/FAQ#how-do-i-uninstall-homebrew
