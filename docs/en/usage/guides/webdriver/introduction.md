---
title: Introduction
---
import Alert from '@theme/Alert'

<Alert title="Currently In Development" type="danger" icon="alert">

WebDriver support for Tauri is still in development and has not reached pre-alpha yet. This should change to an infobox
after pre-alpha is released (soon™) that details its instability.
</Alert>

[WebDriver] is a standardized interface to interact with web documents that is primarily intended for automated testing.
Tauri supports the [WebDriver] interface by leveraging the native platform's [WebDriver] server underneath a
cross-platform wrapper [`tauri-driver`].

## System Dependencies

Because we currently utilize the platform's native [WebDriver] server, there are some requirements for running
[`tauri-driver`] on supported platforms. Platform support is currently limited to Linux and Windows.

### Linux

We use `WebKitWebDriver` on linux platforms. Check if this binary exists already as some distributions bundle it with
the regular webkit package. Other platforms may have a separate package for them such as `webkit2gtk-driver` on Debian
based distributions.

### Windows

Make sure to grab a recent version of the [Microsoft Edge Driver] to ensure that it supports Chromium-based Edge. The
download contains a binary called `msedgedriver.exe`. [`tauri-driver`] looks for that binary in the `$PATH` so make sure
it's either available on the path or use the `--native-driver` option on `tauri-driver`.


[WebDriver]: https://www.w3.org/TR/webdriver/
[`tauri-driver`]: https://github.com/tauri-apps/tauri/tree/feat/webdriver/tooling/webdriver
[Microsoft Edge Driver]: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/