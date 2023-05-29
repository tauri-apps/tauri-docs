# 지속적 통합

Linux 및 일부 프로그램을 활용하여 가짜 출력 화면을 만들어서, CI의 [`tauri-driver`][]와 함께 [WebDriver][]테스트를 실행할 수 있습니다. 다음은 우리가 [이전에 함께 구축][]한 것과 [WebdriverIO][] 예제를 사용하여 GitHub Actions 예제입니다.

이것은 다음과 같은 가정을 의미합니다:

1. Tauri 애플리케이션은 `cargo build --release`를 실행할 때 저장소 루트 및 바이너리 빌드에 있음.
2. [WebDriverIO][] 테스트 러너는 `webdriver/webdriverio` 디렉토리에 있으며, `yarn test`가 해당 디렉토리 내에서 사용될 때 실행됨.

다음 항목은 GitHub Actions workflow `.github/workflows/webdriver.yml` 작성된 내용입니다.

```yaml
# run this action when the repository is pushed to
on: [push]

# the name of our workflow
name: WebDriver

jobs:
  # a single job named test
  test:
    # the display name of the test job
    name: WebDriverIO Test Runner

    # we want to run on the latest linux environment
    runs-on: ubuntu-latest

    # the steps our job runs **in order**
    steps:
      # checkout the code on the workflow runner
      - uses: actions/checkout@v2

      # install system dependencies that Tauri needs to compile on Linux.
      # note the extra dependencies for `tauri-driver` to run which are: `webkit2gtk-driver` and `xvfb`
      - name: Tauri dependencies
        run: >-
          sudo apt-get update &&
          sudo apt-get install -y
          libgtk-3-dev
          libayatana-appindicator3-dev
          libwebkit2gtk-4.0-dev
          webkit2gtk-driver
          xvfb

      # install the latest Rust stable
      - name: Rust stable
        uses: actions-rs/toolchain@v1
        with:
          toolchain: stable

      # we run our rust tests before the webdriver tests to avoid testing a broken application
      - name: Cargo test
        uses: actions-rs/cargo@v1
        with:
          command: test

      # build a release build of our application to be used during our WebdriverIO tests
      - name: Cargo build
        uses: actions-rs/cargo@v1
        with:
          command: build
          args: --release

      # install the latest stable node version at the time of writing
      - name: Node v16
        uses: actions/setup-node@v2
        with:
          node-version: 16.x

      # install our Node.js dependencies with Yarn
      - name: Yarn install
        run: yarn install
        working-directory: webdriver/webdriverio

      # install the latest version of `tauri-driver`.
      # note: the tauri-driver version is independent of any other Tauri versions
      - name: Install tauri-driver
        uses: actions-rs/cargo@v1
        with:
          command: install
          args: tauri-driver

      # run the WebdriverIO test suite.
      # we run it through `xvfb-run` (the dependency we installed earlier) to have a fake
      # display server which allows our application to run headless without any changes to the code
      - name: WebdriverIO
        run: xvfb-run yarn test
        working-directory: webdriver/webdriverio
```

[WebDriver]: https://www.w3.org/TR/webdriver/
[`tauri-driver`]: https://crates.io/crates/tauri-driver
[WebdriverIO]: https://webdriver.io/
[WebDriverIO]: https://webdriver.io/
[이전에 함께 구축]: ./example/webdriverio.md
