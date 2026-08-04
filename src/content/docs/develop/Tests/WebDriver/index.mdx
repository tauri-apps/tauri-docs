---
title: WebDriver
description: WebDriver Testing
sidebar:
  order: 10
  label: Overview
i18nReady: true
---

import { LinkCard, CardGrid } from '@astrojs/starlight/components';

[WebDriver] is a standardized interface to interact with web documents, primarily intended for automated testing. The
recommended way to use it with Tauri is [WebdriverIO] and the [`@wdio/tauri-service`], which works on **Windows, Linux,
and macOS**. Maintained under the WebdriverIO project, it provides Tauri API access through `browser.tauri.execute()`,
command (IPC) mocking, frontend and backend log capture, and multiremote.

By default the service runs an **embedded WebDriver server** inside your app, so no external driver is needed on any
platform — and this is how macOS is supported. It can also drive the platform's native WebDriver through [`tauri-driver`]
on Windows and Linux, or [CrabNebula]'s cross-platform fork of `tauri-driver` on all platforms (a paid API key is
required for macOS). Whichever route you choose, the service detects your application binary, and on the `tauri-driver`
route it keeps the Edge WebDriver in sync on Windows for you.

The quickest way to scaffold a project is the WebdriverIO starter:

```shell
npm create wdio@latest ./
```

Pick **Desktop Testing** and choose **Tauri** at the framework prompt. A minimal configuration looks like this:

```typescript
export const config: WebdriverIO.Config = {
  services: [
    [
      'tauri',
      {
        appBinaryPath: './src-tauri/target/release/my-tauri-app',
        driverProvider: 'embedded',
      },
    ],
  ],
};
```

Setting this up uses two small Tauri plugins, both optional depending on your requirements:

- **`tauri-plugin-wdio-webdriver`** runs the embedded WebDriver server. It's required for the `embedded` provider (the
  default) — the service drives your app through it, with no external driver, and it's how macOS is supported. You can
  skip it if you want to use the `external` or `crabnebula` provider instead.
- **`tauri-plugin-wdio`** enables backend access including: `browser.tauri.execute()`, command (IPC) mocking, and log
  capture.

See [Plugin Setup] for the full steps, and the [CrabNebula setup guide] if you use that provider.

For fast, renderer-only tests there is also a **browser mode** that runs your Tauri frontend in plain Chrome against a
Vite dev server — no Tauri binary, driver, or plugin required. It intercepts `invoke()` calls so you can mock commands
and assert on their arguments with the same WDIO API. See the [browser mode guide].

<LinkCard
  title="WebdriverIO Tauri documentation"
  description="Full setup, configuration, and API reference for @wdio/tauri-service"
  href="https://webdriver.io/docs/desktop-testing/tauri"
/>

## Example Applications

Complete, runnable examples that use the service live in the
[WebdriverIO desktop-mobile repository][example fixtures].

## Continuous Integration (CI)

The WebDriver CI guide explains how to run these tests under GitHub Actions and the concepts behind it.

<LinkCard
  title="Continuous Integration (CI)"
  href="/develop/tests/webdriver/ci/"
/>

## Driving `tauri-driver` directly

If you are not using Node.js, prefer [Selenium], or are integrating WebDriver into a custom test harness, you can drive
[`tauri-driver`] directly instead of using the service. Driven directly, only Windows and Linux are supported on
desktop, as macOS has no WKWebView driver tool available (use the service's embedded WebDriver server for macOS).

<LinkCard
  title="Manual WebDriver setup"
  description="Install and drive tauri-driver yourself (Windows and Linux only)"
  href="/develop/tests/webdriver/manual-setup/"
/>

[webdriver]: https://www.w3.org/TR/webdriver/
[webdriverio]: https://webdriver.io/
[`@wdio/tauri-service`]: https://webdriver.io/docs/desktop-testing/tauri
[plugin setup]: https://webdriver.io/docs/desktop-testing/tauri/plugin-setup
[crabnebula]: https://crabnebula.dev
[crabnebula setup guide]: https://webdriver.io/docs/desktop-testing/tauri/crabnebula-setup
[browser mode guide]: https://github.com/webdriverio/desktop-mobile/blob/main/packages/tauri-service/docs/browser-mode.md
[example fixtures]: https://github.com/webdriverio/desktop-mobile/tree/main/fixtures/e2e-apps/tauri
[selenium]: /develop/tests/webdriver/example/selenium/
[`tauri-driver`]: https://crates.io/crates/tauri-driver
[tauri-driver]: https://crates.io/crates/tauri-driver
