---
title: Continuous Integration
description: WebDriver Testing
sidebar:
  order: 21
i18nReady: true
---

It is possible to run [WebDriver] tests with [`tauri-driver`] on your CI. The following example uses the [WebdriverIO] example we [previously built together] and
GitHub Actions.

The WebDriver tests are executed on Linux by creating a fake display.
Some CI systems such as GitHub Actions also support running WebDriver tests on Windows.

## GitHub Actions

The following GitHub Actions assumes:

1. The Tauri application is in the `src-tauri` folder.
2. The [WebDriverIO] test runner is in the `e2e-tests` directory and runs when `yarn test` is used in that directory.

```yaml title=".github/workflows/webdriver.yml"
# run this action when the repository is pushed to
on: [push]

# the name of our workflow
name: WebDriver

jobs:
  # a single job named test
  test:
    # the display name of the test job
    name: WebDriverIO Test Runner

    # run on the matrix platform
    runs-on: ${{ matrix.platform }}
    strategy:
      # do not fail other matrix runs if one fails
      fail-fast: false
      # set all platforms our test should run on
      matrix:
        platform: [ubuntu-latest, windows-latest]

    # the steps our job runs **in order**
    steps:
      # checkout the code on the workflow runner
      - uses: actions/checkout@v4

      # install system dependencies that Tauri needs to compile on Linux.
      # note the extra dependencies for `tauri-driver` to run which are: `webkit2gtk-driver` and `xvfb`
      - name: Tauri dependencies
        if: matrix.platform == 'ubuntu-latest'
        run: |
          sudo apt-get update &&
          sudo apt-get install -y \
          libwebkit2gtk-4.1-dev \
          libayatana-appindicator3-dev \
          webkit2gtk-driver \
          xvfb

      # install a matching Microsoft Edge Driver version using msedgedriver-tool
      - name: install msdgedriver (Windows)
        if: matrix.platform == 'windows-latest'
        run: |
          cargo install --git https://github.com/chippers/msedgedriver-tool
          & "$HOME/.cargo/bin/msedgedriver-tool.exe"
          $PWD.Path >> $env:GITHUB_PATH

      # install latest stable Rust release
      - name: Setup rust-toolchain stable
        uses: dtolnay/rust-toolchain@stable

      # setup caching for the Rust target folder
      - name: Setup Rust cache
        uses: Swatinem/rust-cache@v2
        with:
          workspaces: src-tauri

      # we run our Rust tests before the webdriver tests to avoid testing a broken application
      - name: Cargo test
        run: cargo test

      # install the latest stable node version at the time of writing
      - name: Node 24
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: 'yarn'

      # install the application Node.js dependencies with Yarn
      - name: Yarn install
        run: yarn install --frozen-lockfile

      # install the e2e-tests Node.js dependencies with Yarn
      - name: Yarn install
        run: yarn install --frozen-lockfile
        working-directory: e2e-tests

      # install the latest version of `tauri-driver`.
      # note: the tauri-driver version is independent of any other Tauri versions
      - name: Install tauri-driver
        run: cargo install tauri-driver --locked

      # run the WebdriverIO test suite on Linux.
      # we run it through `xvfb-run` (the dependency we installed earlier) to have a fake
      # display server which allows our application to run headless without any changes to the code
      - name: WebdriverIO (Linux)
        if: matrix.platform == 'ubuntu-latest'
        run: xvfb-run yarn test
        working-directory: e2e-tests

      # run the WebdriverIO test suite on Windows.
      # in this case we can run the tests directly.
      - name: WebdriverIO (Windows)
        if: matrix.platform == 'windows-latest'
        run: yarn test
        working-directory: e2e-tests
```

[previously built together]: /develop/tests/webdriver/example/webdriverio/
[webdriver]: https://www.w3.org/TR/webdriver/
[`tauri-driver`]: https://crates.io/crates/tauri-driver
[webdriverio]: https://webdriver.io/
