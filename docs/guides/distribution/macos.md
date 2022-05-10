---
sidebar_label: macOS
sidebar_position: 5
---

# macOS Application Distribution

Tauri applications for macOS are distributed either with an [Application Bundle] (`.app` files) or an Apple Disk Image (`.dmg` files). The Tauri CLI automatically bundles your application code in these formats, providing options to codesign and notarize your application.

## Minimum system version

The minimum version of the operating system required for a Tauri app to run in macOS is `10.13`. You can change that value on the [`tauri.bundle.macOS.minimumSystemVersion`] property. The value is set to the Info.plist key [LSMinimumSystemVersion] and the MACOSX_DEPLOYMENT_TARGET environment variable.

:::note
macOS High Sierra (10.13) no longer receives security updates from Apple. You should target macOS Catalina (10.15) if possible.
:::

:::caution
Using the `window.print` API requires macOS version `11.0+`.
:::

## Binary targets

You can compile your application targeting Apple Silicon, Intel-based Mac computers, or universal macOS binaries. By default, the CLI builds a binary targetting your machine's architecture. If you are using an Apple Silicon macOS, you can compile Intel and universal binaries using the `target` option:

- `tauri build --target aarch64-apple-darwin`: targets Apple Silicon for your application;
- `tauri build --target x86_64-apple-darwin`: targets Intel-based Mac computers;
- `tauri build --target universal-apple-darwin`: targets [universal macOS binaries].

:::caution

- Apple Silicon binaries only run on Mac computers with Apple Silicon.
- Intel-based binaries only run on Intel-based Mac computers and Apple Silicon computers under the Rosetta translation.
- Universal macOS binaries run on both architectures.
  :::

## Application bundle customization

The Tauri configuration file provides the following options to customize your application bundle:

- **Bundle name**: [`package.productName`].
- **Bundle version**: [`package.version`].
- **Application category**: [`tauri.bundle.category`].
- **Copyright**: [`tauri.bundle.copyright`].
- **Bundle icon**: first `.icns` file listed on the [`tauri.bundle.icon`] array.
- **Minimum system version**: [`tauri.bundle.macOS.minimumSystemVersion`].
- **DMG license file**: [`tauri.bundle.macOS.license`].
- **[Entitlements.plist file]**: [`tauri.bundle.macOS.entitlements`].
- **Exception domain**: an insecure domain that your application can access such as a `localhost` or a remote `http` domain. It is a convenience configuration around `NSAppTransportSecurity > NSExceptionDomains` setting `NSExceptionAllowsInsecureHTTPLoads` and `NSIncludesSubdomains` to true. See [`tauri.bundle.macOS.exceptionDomain`].
- **Bootstrapper**: Instead of launching the app directly, you can configure the bundled app to run a script that tries to expose the environment variables to the app; without that, you'll have trouble using system programs because the `PATH` environment variable isn't correct. Enable it with [`tauri.bundle.macOS.useBootstrapper`].

:::note
These options generate the application bundle [Info.plist file]. You can extend the generated file with your own `Info.plist` file stored on the Tauri folder (`src-tauri` by default). The CLI merges both `.plist` files on production, and the core layer embeds it on the binary on development.
:::

## Code signing and notarization

See the [Code signing guide].

[application bundle]: https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html
[`tauri.bundle.macos.minimumsystemversion`]: ../../api/config#tauri.bundle.macOS.minimumSystemVersion
[lsminimumsystemversion]: https://developer.apple.com/documentation/bundleresources/information_property_list/lsminimumsystemversion
[universal macos binaries]: https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary
[`package.productname`]: ../../api/config/#package.productName
[`package.version`]: ../../api/config/#package.version
[`tauri.bundle.category`]: ../../api/config/#tauri.bundle.category
[`tauri.bundle.copyright`]: ../../api/config/#tauri.bundle.copyright
[`tauri.bundle.icon`]: ../../api/config/#tauri.bundle.icon
[`tauri.bundle.macos.minimumsystemversion`]: ../../api/config/#tauri.bundle.macOS.minimumSystemVersion
[`tauri.bundle.macos.license`]: ../../api/config/#tauri.bundle.macOS.license
[entitlements.plist file]: https://developer.apple.com/documentation/bundleresources/entitlements
[`tauri.bundle.macos.entitlements`]: ../../api/config/#tauri.bundle.macOS.entitlements
[`tauri.bundle.macos.exceptiondomain`]: ../../api/config/#tauri.bundle.macOS.exceptionDomain
[`tauri.bundle.macos.usebootstrapper`]: ../../api/config#tauri.bundle.deb.useBootstrapper
[info.plist file]: https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html
[code signing guide]: ./sign-macos.md
