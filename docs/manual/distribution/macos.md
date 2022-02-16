---
sidebar_label: macOS
---

# macOS Application Distribution

Tauri applications for macOS are distributed either with an [Application Bundle] (`.app` files) or an Apple Disk Image (`.dmg` files). The Tauri CLI automatically bundles your application code in these formats, providing options to codesign and notarize your application.

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

[Application Bundle]: https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html
[universal macOS binaries]: https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary
[`package.productName`]: /docs/api/config/#package.productName
[`package.version`]: /docs/api/config/#package.version
[`tauri.bundle.category`]: /docs/api/config/#tauri.bundle.category
[`tauri.bundle.copyright`]: /docs/api/config/#tauri.bundle.copyright
[`tauri.bundle.icon`]: /docs/api/config/#tauri.bundle.icon
[`tauri.bundle.macOS.minimumSystemVersion`]: /docs/api/config/#tauri.bundle.macOS.minimumSystemVersion
[`tauri.bundle.macOS.license`]: /docs/api/config/#tauri.bundle.macOS.license
[Entitlements.plist file]: https://developer.apple.com/documentation/bundleresources/entitlements
[`tauri.bundle.macOS.entitlements`]: /docs/api/config/#tauri.bundle.macOS.entitlements
[`tauri.bundle.macOS.exceptionDomain`]: /docs/api/config/#tauri.bundle.macOS.exceptionDomain
[`tauri.bundle.macOS.useBootstrapper`]: /docs/api/config#tauri.bundle.deb.useBootstrapper
[Info.plist file]: https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html
[Code signing guide]: ./sign-macos.md