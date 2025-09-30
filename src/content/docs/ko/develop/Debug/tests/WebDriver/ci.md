---
title: 지속적 통합(CI)
description: WebDriver 테스트
sidebar:
  order: 21
i18nReady: true
---

import TranslationNote from '@components/i18n/TranslationNote.astro';

Linux와 몇 가지 프로그램을 이용하여 가상 디스플레이를 만들면, CI (지속적 통합 테스트 도구) 상에서 [`tauri-driver`]를 사용하여 [WebDriver] 테스트를 실행할 수 있습니다.
아래에서는 [WebdriverIO]에 의한 [미리 만든 테스트 사례]와 GitHub Actions를 사용하고 있습니다.

여기에는 다음 두 가지 전제가 있습니다:

1. Tauri 애플리케이션은 리포지토리의 루트에 있으며, `cargo build --release`를 실행하면 바이너리가 빌드됩니다.
2. "[WebDriverIO] 테스트 러너"는 `webdriver/webdriverio` 디렉토리에 있으며, 해당 디렉토리에서 `yarn test`가 사용되면 실행됩니다.

아래는 `.github/workflows/webdriver.yml`에 있는 주석이 달린 GitHub Actions 워크플로 파일입니다.

```yaml
# 리포지토리가 푸시될 때 이 액션을 실행
on: [push]

# 워크플로의 이름
name: WebDriver

jobs:
  # test라는 이름의 단일 작업
  test:
    # test 작업의 표시 이름
    name: WebDriverIO Test Runner

    # 최신 Linux 환경 지정(we want to run on)
    runs-on: ubuntu-22.04

    # 작업이 **순서대로** 실행할 절차
    steps:
      # "워크플로 러너"의 코드를 체크아웃(확인)
      - uses: actions/checkout@v4

      # Tauri가 Linux에서 컴파일하는 데 필요한 시스템 종속성 설치
      # `tauri-driver`를 실행하기 위한 추가 종속성 (`webkit2gtk-driver` 및 `xvfb`)에 주의
      - name: Tauri dependencies
        run: |
          sudo apt update && sudo apt install -y \
            libwebkit2gtk-4.1-dev \
            build-essential \
            curl \
            wget \
            file \
            libxdo-dev \
            libssl-dev \
            libayatana-appindicator3-dev \
            librsvg2-dev \
            webkit2gtk-driver \
            xvfb

      - name: Setup rust-toolchain stable
        id: rust-toolchain
        uses: dtolnay/rust-toolchain@stable

      # 손상된 애플리케이션 테스트를 피하기 위해 WebDriver 테스트 전에 Rust 테스트 실행
      - name: Cargo test
        run: cargo test

      # WebdriverIO 테스트 중에 사용되는 애플리케이션의 릴리스 빌드 실행
      - name: Cargo build
        run: cargo build --release

      # 최신 안정 버전 node 설치(작성 시점)
      - name: Node 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'yarn'

      # Yarn을 사용하여 Node.js 종속성 설치
      - name: Yarn install
        run: yarn install --frozen-lockfile
        working-directory: webdriver/webdriverio

      # `tauri-driver`의 최신 버전 설치
      # 참고: tauri-driver의 버전은 다른 Tauri 버전 번호와 관련이 없습니다
      - name: Install tauri-driver
        run: cargo install tauri-driver --locked

      # WebdriverIO 테스트 스위트 실행
      # `xvfb-run`(방금 설치한 종속성)을 실행하여 가상 디스플레이 서버를 만들고 코드를 변경하지 않고 애플리케이션을 헤드리스(무인)로 실행할 수 있도록 합니다
      - name: WebdriverIO
        run: xvfb-run yarn test
        working-directory: webdriver/webdriverio
```

[미리 만든 테스트 사례]: /ko/develop/debug/tests/webdriver/example/webdriverio/
[webdriver]: https://www.w3.org/TR/webdriver/
[`tauri-driver`]: https://crates.io/crates/tauri-driver
[webdriverio]: https://webdriver.io/

<div style="text-align: right">
  【※ 이 한국어판은, 「Feb 22, 2025 영문판」에 근거하고 있습니다】
</div>
