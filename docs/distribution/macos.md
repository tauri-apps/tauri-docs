---
title: macOS Application Distribution
sidebar_label: macOS
---

Tauri applications for macOS are distributed either with an [Application Bundle](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html)(`.app` files) or an Apple Disk Image (`.dmg` files). The Tauri CLI automatically bundles your application code in these formats, providing options to code sign and notarize your application.

## Binary targets

You can compile your application targeting Apple Silicon, Intel-based Mac computers or universal macOS binaries. By default, the CLI builds a binary targetting your machine's architecture, but if you are using an Apple Silicon macOS you can compile Intel and universal binaries using the `target` option:

- `tauri build --target aarch64-apple-darwin`: targets Apple Silicon for your application;
- `tauri build --target x86_64-apple-darwin`: targets Intel-based Mac computers;
- `tauri build --target universal-apple-darwin`: targets [universal macOS binaries](https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary).

:::caution
- Apple Silicon binaries only runs on Mac computers with Apple Silicon.
- Intel-based binaries only runs on Intel-based Mac computers and on Apple Silicion computers under the Rosetta translation.
- Universal macOS binaries runs on both architectures.
:::

## Application bundle customization

The Tauri configuration file provides the following options to customize your application bundle:

- **Bundle name**: [`package.productName`](/docs/api/config/#package.productName).
- **Bundle version**: [`package.version`](/docs/api/config/#package.version).
- **Application category**: [`tauri.bundle.category`](/docs/api/config/#tauri.bundle.category).
- **Copyright**: [`tauri.bundle.copyright`](/docs/api/config/#tauri.bundle.copyright).
- **Bundle icon**: first `.icns` file listed on the [`tauri.bundle.icon`](/docs/api/config/#tauri.bundle.icon) array.
- **Minimum system version**: [`tauri.bundle.macOS.minimumSystemVersion`](/docs/api/config/#tauri.bundle.macOS.minimumSystemVersion).
- DMG license file**: [`tauri.bundle.macOS.license`](/docs/api/config/#tauri.bundle.macOS.license).
- [**Entitlements.plist file**](https://developer.apple.com/documentation/bundleresources/entitlements): [`tauri.bundle.macOS.entitlements`](/docs/api/config/#tauri.bundle.macOS.entitlements).
- **Exception domain**: an insecure domain that your application can access such as a `localhost` or a remote `http` domain. It is a convenience configuration around `NSAppTransportSecurity > NSExceptionDomains` setting `NSExceptionAllowsInsecureHTTPLoads` and `NSIncludesSubdomains` to true. See [`tauri.bundle.macOS.exceptionDomain`](/docs/api/config/#tauri.bundle.macOS.exceptionDomain).
- **Bootstrapper**: Instead of launching the app directly, you can configure the bundled app to run a script that tries to expose the environment variables to the app; without that you'll have trouble using system programs because the `PATH` environment variable isn't correct. Enable it with [`tauri.bundle.macOS.useBootstrapper`](/docs/api/config#tauri.bundle.deb.useBootstrapper).

:::note
These options generate the application bundle [Info.plist file](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html). You can extend the generated file with your own `Info.plist` file stored on the Tauri folder (`src-tauri` by default). The CLI will merge both `.plist` files on production, and the core layer will embed it on the binary on development.
:::

## Code signing and notarization

See the [Code signing guide](./sign-macos.md).
