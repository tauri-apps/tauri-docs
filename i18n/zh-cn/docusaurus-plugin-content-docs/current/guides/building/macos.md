---
sidebar_position: 3
---

import TauriBuild from './\_tauri-build.md'

# macOS Bundle

用于macOS的Tauri应用程序是以应 [用程序捆绑][]（`.app` 文件）或苹果磁盘镜像（`.dmg`文件）的方式发布的。 Tauri CLI会自动将你的应用程序代码捆绑成这些格式，并提供选项对你的应用程序进行签名和公证。 请注意，`.app` 和 `.dmg`捆绑文件**只能在macOS上创建**，因此交叉编译还不能工作。

:::note

在 macOS 和 Linux 上的 GUI 应用程序不能继承您的 shell 配置文件的 `$PATH` (`.bashrc`, `.bash_profile`, `.zshrc`, etc). 请查看Tauri的 [fix-path-env-rs][] crate 来解决这个问题。

:::

<TauriBuild />

## Setting a Minimum System Version

The minimum version of the operating system required for a Tauri app to run on macOS is `10.13`. 如果您需要支持较新的 macOS API，如 `window.print` 只支持 macOS `11.0` 版本。只支持之后的版本的话，您可以更改 [`tauri.bundle.macOS.minimumSystem版本`][] This will in turn set the `Info.plist` [LSMinimumSystemVersion][] property and the `MACOSX_DEPLOYMENT_TARGET` environment variable.

## Binary Targets

You can compile your application targeting Apple Silicon, Intel-based Mac computers, or universal macOS binaries. By default, the CLI builds a binary targeting your machine's architecture. If you want to build for a different target you must first install the missing rust target for that target by running `rustup target add aarch64-apple-darwin` or `rustup target add x86_64-apple-darwin`, then you can build your app using the `--target` flag:

- `tauri build --target aarch64-apple-darwin`: targets Apple silicon machines.
- `tauri build --target x86_64-apple-darwin`: targets Intel-based machines.
- `tauri build --target universal-apple-darwin`: produces a [universal macOS binary][] that runs on both Apple silicon and Intel-based Macs.

While Apple silicon machines can run applications compiled for Intel-based Macs through a translation layer called [Rosetta][], this leads to a reduction in performance due to processor instruction translations. It is common practice to let the user choose the correct target when downloading the app, but you can also choose to distribute a [Universal Binary][universal macos binary]. Universal Binaries include both `aarch64` and `x86_64` executables, giving you the best experience on both architectures. Note, however, that this increases your bundle size significantly.

## Application Bundle Customization

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

[用程序捆绑]: https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html
[`tauri.bundle.macOS.minimumSystem版本`]: ../../api/config.md#macconfig.minimumsystemversion
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
