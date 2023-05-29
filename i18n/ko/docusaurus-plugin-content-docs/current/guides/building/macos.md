---
sidebar_position: 3
---

import TauriBuild from './\_tauri-build.md'

# macOS 번들

Tauri applications for macOS are distributed either with an [Application Bundle][] (`.app` file) or an Apple Disk Image (`.dmg` file). The Tauri CLI automatically bundles your application code in these formats, providing options to codesign and notarize your application. Please note that `.app` and `.dmg` bundles can **only be created on macOS** as cross-compilation doesn't work yet.

:::note

GUI apps on macOS and Linux do not inherit the `$PATH` from your shell dotfiles (`.bashrc`, `.bash_profile`, `.zshrc`, etc). Check out Tauri's [fix-path-env-rs][] crate to fix this issue.

:::

<TauriBuild />

## 최소 시스템 버전 설정하기

The minimum version of the operating system required for a Tauri app to run on macOS is `10.13`. If you need support for newer macOS APIs like `window.print` that is only supported from macOS version `11.0` onwards, you can change the [`tauri.bundle.macOS.minimumSystemVersion`][]. This will in turn set the `Info.plist` [LSMinimumSystemVersion][] property and the `MACOSX_DEPLOYMENT_TARGET` environment variable.

## 바이너리 대상

Apple Silicon, Intel 기반 Mac 컴퓨터 또는 범용 macOS 바이너리를 대상으로 애플리케이션을 컴파일할 수 있습니다. By default, the CLI builds a binary targeting your machine's architecture. If you want to build for a different target you must first install the missing rust target for that target by running `rustup target add aarch64-apple-darwin` or `rustup target add x86_64-apple-darwin`, then you can build your app using the `--target` flag:

- `tauri build --target aarch64-apple-darwin`: Apple silicon 컴퓨터 대상.
- `tauri build --target x86_64-apple-darwin`: Intel 기반 컴퓨터 대상.
- `tauri build --target universal-apple-darwin`: produces a [universal macOS binary][] that runs on both Apple silicon and Intel-based Macs.

While Apple silicon machines can run applications compiled for Intel-based Macs through a translation layer called [Rosetta][], this leads to a reduction in performance due to processor instruction translations. It is common practice to let the user choose the correct target when downloading the app, but you can also choose to distribute a [Universal Binary][universal macos binary]. Universal Binaries include both `aarch64` and `x86_64` executables, giving you the best experience on both architectures. Note, however, that this increases your bundle size significantly.

## 애플리케이션 번들 커스터마이징

The Tauri configuration file provides the following options to customize your application bundle:

- **Bundle name:** Your app's human-readable name. Configured by the [`package.productName`][] property.
- **Bundle version:** Your app's version. Configured by the [`package.version`][] property.
- **Application category:** The category that describes your app. Configured by the [`tauri.bundle.category`][] property. You can see a list of macOS categories [here][macos app categories].
- **Copyright:** A copyright string associated with your app. Configured by the [`tauri.bundle.copyright`][] property.
- **Bundle icon:** Your app's icon. Uses the first `.icns` file listed in the [`tauri.bundle.icon`][] array.
- **Minimum system version:** Configured by the [`tauri.bundle.macOS.minimumSystemVersion`][] property.
- **DMG license file:** A license that is added to the `.dmg` file. Configure by the [`tauri.bundle.macOS.license`][] property.
- **[Entitlements.plist file][]:** Entitlements control what APIs your app will have access to. Configured by the [`tauri.bundle.macOS.entitlements`][] property.
- **Exception domain:** an insecure domain that your application can access such as a `localhost` or a remote `http` domain. It is a convenience configuration around `NSAppTransportSecurity > NSExceptionDomains` setting `NSExceptionAllowsInsecureHTTPLoads` and `NSIncludesSubdomains` to true. See [`tauri.bundle.macOS.exceptionDomain`][] for more information.

:::info

These options generate the application bundle [Info.plist file][]. You can extend the generated file with your own `Info.plist` file stored in the Tauri folder (`src-tauri` by default). The CLI merges both `.plist` files in production, and the core layer embeds it in the binary during development.

:::

[Application Bundle]: https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html
[`tauri.bundle.macOS.minimumSystemVersion`]: ../../api/config.md#macconfig.minimumsystemversion
[LSMinimumSystemVersion]: https://developer.apple.com/documentation/bundleresources/information_property_list/lsminimumsystemversion
[universal macOS binary]: https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary
[universal macos binary]: https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary
[Rosetta]: https://support.apple.com/en-gb/HT211861
[macos app categories]: https://developer.apple.com/app-store/categories/
[`package.productName`]: ../../api/config.md#packageconfig.productname
[`package.version`]: ../../api/config.md#packageconfig.version
[`tauri.bundle.category`]: ../../api/config.md#bundleconfig.category
[`tauri.bundle.copyright`]: ../../api/config.md#bundleconfig.copyright
[`tauri.bundle.icon`]: ../../api/config.md#bundleconfig.icon
[`tauri.bundle.macOS.license`]: ../../api/config.md#bundleconfig.icon
[Entitlements.plist file]: https://developer.apple.com/documentation/bundleresources/entitlements
[`tauri.bundle.macOS.entitlements`]: ../../api/config.md#macconfig.entitlements
[`tauri.bundle.macOS.exceptionDomain`]: ../../api/config.md#macconfig.exceptiondomain
[Info.plist file]: https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html
[fix-path-env-rs]: https://github.com/tauri-apps/fix-path-env-rs
