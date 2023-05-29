---
sidebar_position: 3
---

# 설정 파일

Tauri가 앱을 만드는 도구이므로 프로젝트 설정을 구성하는 수많은 파일이 존재할 수 있습니다. 마주하게 될 공통 파일로는 `tauri.conf.json`, `package.json`, `Cargo.toml`이 있습니다. 이 페이지에서는 각 파일을 간략하게 설명해 어떤 파일을 수정해야 좋을지를 안내합니다.

## Tauri 설정

파일 이름은 `tauri.conf.json`, `tauri.conf.json5`, 또는 `Tauri.toml`일 수 있습니다. `tauri.conf.json`를 기본으로 씁니다. 아래 설명을 읽어 더 알아보세요.

Tauri 프로세스에서 사용하는 파일입니다. 빌드 설정( [`tauri build`나 [`tauri dev`][before-dev-command] 명령 실행 전][before-build-command]과 같은) 하고, [앱의 버전과 이름][package-config]을 설정하고, [Tauri 프로세스를 제어][tauri-config]하고, 어떤 플러그인 설정을 정의할 수 있습니다. [`tauri.conf.json` API 참조 문서][]에서 가능한 모든 옵션을 찾아볼 수 있습니다.

:::note

Tauri는 기본적으로 `.json` 설정 파일 형식을 사용합니다. `.json5`나 `.toml` 파일 형식은 `config-json5`나 `config-toml` 피처 플래그를 `Cargo.toml`에서 `tauri`와 `tauri-build` 의존성에 각각 추가해 켤 수 있습니다. `.toml` 파일 형식은 Tauri 1.1 혹은 그 이후 버전에서만 사용할 수 있음을 염두해두십시오.

```toml title=Cargo.toml
[build-dependencies]
// highlight-next-line
tauri-build = { version = "1.0.0", features = [ "config-json5" ] }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
// highlight-next-line
tauri = { version = "1.0.0", features = [ "api-all", "config-json5" ] }
```

구조와 값은 모든 형식에서 동일하지만, 형식은 해당 파일의 형식과 일치해야 합니다.

:::

## `Cargo.toml`

Cargo 매니페스트 파일은 의존하고 있는 Rust crate나 앱의 부가 정보, 그 외 Rust 관련 기능을 선언할 때 쓰입니다. 만약 Rust를 사용해 백엔드를 개발하려는 의도가 없다면, 그다지 수정할 일이 없을 것입니다. 그래도, 이 파일이 왜 존재하고, 무엇을 하는지 아는 편이 좋습니다.

아래는 Tauri 프로젝트용 `Cargo.toml`의 예시입니다.

```toml title=Cargo.toml
[package]
name = "app"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
license = ""
repository = ""
default-run = "app"
edition = "2021"
rust-version = "1.57"

[build-dependencies]
tauri-build = { version = "1.0.0" }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
tauri = { version = "1.0.0", features = [ "api-all" ] }

[features]
# by default Tauri runs in production mode
# when `tauri dev` runs it is executed with `cargo run --no-default-features` if `devPath` is an URL
default = [ "custom-protocol" ]
# this feature is used for production builds where `devPath` points to the filesystem
# DO NOT remove this
custom-protocol = [ "tauri/custom-protocol" ]
```

가장 중요한 부분 중 기억해야 할 부분은 `tauri-build`와 `tauri` 종속성입니다. 일반적으로, 둘 다 Tauri CLI와 같은 최신 마이너 버전에 있어야 하지만, 꼭 그렇지 않아도 무방합니다. 앱을 실행하는 동안 문제에 직면하게 되면 모든 Tauri 버전(`tauri` 및 `tauri-cli`) 이 해당 마이너 릴리스의 최신 버전인지 확인해야 합니다.

Cargo 버전 번호는 [시멘틱 버전 관리][]를 사용합니다. `cargo update`를 실행하게 되면 모든 종속성의 최신 시멘틱 버전 관리(Semver) 에 호환 버전을 가져옵니다. 예를 들어 `tauri-build`의 버전으로 `1.0.0`을 지정하면 Cargo는 `1.0.4` 버전을 감지하고 다운로드합니다. 그 이유는 최신 시멘틱 버전관리에 적합한 최신 버전이기 때문입니다. Tauri는 주요 변경 사항이 도입될 때마다 주요 버전 번호를 판올림하게 됩니다. 다시 말하면, 코드 손상에 대한 두려움 없이 항상 최신 마이너 패치 버전으로 안전하게 판올림할 수 있어야 합니다.

특정 crate 버전을 사용하려면 종속성의 버전 번호 앞에 `=`을 사용하여 정확한 버전으로 지정할 수 있습니다.

```
tauri-build = { version = "=1.0.0" }
```

추가적으로 기억해야 할 부분은 `tauri` 종속성에서 `features=[]` 부분입니다. `tauri dev`와 `tauri build` 실행되면 당신이 설정해준`tauri.conf.json`에 있는 `"allowlist"` 속성을 기반으로 당신의 프로젝트에 필요로 하는 활성화 기능에 대해서 자동적으로 관리가 됩니다.

당신은 앱을 빌드하게 되면 `Cargo.lock`파일이 생성되었을 것입니다. 이 파일은 주로 개발 중에 장치 간에 동일한 종속성이 유지되도록 하는 데 사용됩니다 (Node.js의 `yarn.lock` 또는 `package-lock.json`과 유사). Tauri 앱 개발 중에는 이 파일들을 반드시 소스저장소에 커밋해야 합니다.(오직 Rust 라이브러리만 생략).

`Cargo.toml`에 대해 더 배우고 싶다면 [공식 문서][cargo-manifest]를 읽어보시면 됩니다.

## `package.json`

이 패키지 파일은 Node.js에서 사용됩니다. 이 파일은 Tauri 앱의 프론트엔드가 Node.js 기반 기술(예: `npm`, `yarn`, `pnpm`)을 사용하여 개발된 경우 프론트엔드 종속성 및 스크립트를 구성하는 데 사용됩니다.

Tauri 프로젝트의 기본 `package.json` 파일 예시는 다음과 같습니다.

```json title=package.json
{
  "scripts": {
    "dev": "command-for-your-framework",
    "tauri": "tauri"
  },
  "dependencies": {
    "@tauri-apps/api": "^1.0",
    "@tauri-apps/cli": "^1.0"
  }
}
```

`"scripts"` 부분을 이용해 Tauri 애플리케이션의 프론트엔드를 시작하는 데 사용되는 명령을 저장하는 것이 일반적입니다. 위 파일에서 `dev` 명령에다가 `yarn dev` 혹은 `npm run dev`를 사용하면 프론트엔드 프레임워크를 시작할 수 있습니다.

종속성 개체는 `yarn` 혹은 `npm install`(이 경우 Tauri CLI와 API)을 실행할 때 Node.js가 다운로드해야 하는 종속성을 지정하는 것입니다.

`package.json` 파일 뿐만 아니라 `yarn.lock` 파일 혹은 `package-lock.json` 파일도 확인할 수 있을 것입니다. 이 파일들은 나중에 종속성을 다운로드할 때 개발 중에 사용한 것과 동일한 버전으로 다운로드할 수 있도록 도와줍니다(Rust의 `Cargo.lock`과 유사).

`package.json`에 대해 더 배우고 싶다면 [공식 문서][npm-package]를 읽어보시면 됩니다.

[`tauri.conf.json` API 참조 문서]: ../api/config.md
[before-build-command]: ../api/config.md#buildconfig.beforebuildcommand
[시멘틱 버전 관리]: https://semver.org
[cargo-manifest]: https://doc.rust-lang.org/cargo/reference/manifest.html
[npm-package]: https://docs.npmjs.com/cli/v8/configuring-npm/package-json
[before-dev-command]: ../api/config.md#buildconfig.beforedevcommand
[package-config]: ../api/config#packageconfig
[tauri-config]: ../api/config#tauriconfig
