---
title: 継続的インテグレーション（CI）
description: WebDriver のテスト
sidebar:
  order: 21
i18nReady: true
---

import TranslationNote from '@components/i18n/TranslationNote.astro';

Linux といくつかのプログラムを利用して仮のディスプレイを作成すると、CI （継続的インテグレーション・テストツール）上で [`tauri-driver`] を使用して [WebDriver] テストの実行が可能になります。
以下では、[WebdriverIO] による[予め作成したテスト事例]と GitHub Actions を使用しています。

これには次の二点が前提になっています：

1. Tauri アプリケーションはリポジトリのルートにあり、`cargo build --release` を実行するとバイナリがビルドされる
2. 「[WebDriverIO] テスト・ランナー」は `webdriver/webdriverio` ディレクトリにあり、そのディレクトリで `yarn test` が使用されると実行される

以下は `.github/workflows/webdriver.yml` にあるコメント付きの GitHub Actions ワークフロー・ファイルです。

```yaml
# リポジトリがプッシュされたときにこのアクションを実行
on: [push]

# ワークフローの名前
name: WebDriver

jobs:
  # test という名前の単一ジョブ
  test:
    # test ジョブの表示名
    name: WebDriverIO Test Runner

    # 最新の Linux 環境を指定（we want to run on）
    runs-on: ubuntu-22.04

    # ジョブが**順番に**実行する手順
    steps:
      # 「ワークフロー・ランナー」のコードをチェックアウト（確認）
      - uses: actions/checkout@v4

      # Tauri が Linux 上でコンパイルするために必要なシステム依存関係をインストール
      # `tauri-driver` を実行するための追加の依存関係 （`webkit2gtk-driver` と `xvfb`）に注意
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

      # 破損しているアプリケーションのテストを避けるために、WebDriver テストの前に Rust テストを実行
      - name: Cargo test
        run: cargo test

      # WebdriverIO テスト中に使用されるアプリケーションのリリースビルドを実行
      - name: Cargo build
        run: cargo build --release

      # 最新安定版 node バージョンをインストール（執筆時点）
      - name: Node 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'yarn'

      # Yarn を使って Node.js の依存関係をインストール
      - name: Yarn install
        run: yarn install --frozen-lockfile
        working-directory: webdriver/webdriverio

      # `tauri-driver` の最新バージョンをインストール
      # 注意： tauri-driver のバージョンは他の Tauri のバージョン番号とは無関係です
      - name: Install tauri-driver
        run: cargo install tauri-driver --locked

      # WebdriverIO テスト・スイートを実行
      # `xvfb-run`（先ほどインストールした依存関係）を実行して、仮のディスプレイ・サーバーを作成し、コードを変更せずにアプリケーションをヘッドレス（無人）で実行できるようにします
      - name: WebdriverIO
        run: xvfb-run yarn test
        working-directory: webdriver/webdriverio
```

[予め作成したテスト事例]: /ja/develop/tests/webdriver/example/webdriverio/
[webdriver]: https://www.w3.org/TR/webdriver/
[`tauri-driver`]: https://crates.io/crates/tauri-driver
[webdriverio]: https://webdriver.io/

<div style="text-align: right">
  【※ この日本語版は、「Feb 22, 2025 英語版」に基づいています】
</div>
