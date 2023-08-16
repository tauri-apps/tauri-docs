---
title: 'Module tauri_utils::config'
editUrl: false
prev: false
next: false
---


The Tauri configuration used at runtime.

It is pulled from a `tauri.conf.json` file and the [`Config`] struct is generated at compile time.

# Stability
This is a core functionality that is not considered part of the stable API.
If you use it, note that it may include breaking changes in the future.
## Modules


- [parse](/2/reference/rust/tauri-utils/config/parse): Items to help with parsing content into a [`Config`].
- [build](/2/reference/rust/tauri-utils/config/build): Implement `ToTokens` for all config structs, allowing a literal `Config` to be built.
## Structs


- [AppImageConfig](/2/reference/rust/tauri-utils/AppImageConfig): Configuration for AppImage bundles.
- [DebConfig](/2/reference/rust/tauri-utils/DebConfig): Configuration for Debian (.deb) bundles.
- [MacConfig](/2/reference/rust/tauri-utils/MacConfig): Configuration for the macOS bundles.
- [WixLanguageConfig](/2/reference/rust/tauri-utils/WixLanguageConfig): Configuration for a target language for the WiX build.
- [WixConfig](/2/reference/rust/tauri-utils/WixConfig): Configuration for the MSI bundle using WiX.
- [NsisConfig](/2/reference/rust/tauri-utils/NsisConfig): Configuration for the Installer bundle using NSIS.
- [WindowsConfig](/2/reference/rust/tauri-utils/WindowsConfig): Windows bundler configuration.
- [UpdaterConfig](/2/reference/rust/tauri-utils/UpdaterConfig): The Updater configuration object.
- [BundleConfig](/2/reference/rust/tauri-utils/BundleConfig): Configuration for tauri-bundler.
- [Color](/2/reference/rust/tauri-utils/Color): a tuple struct of RGBA colors. Each value has minimum of 0 and maximum of 255.
- [WindowEffectsConfig](/2/reference/rust/tauri-utils/WindowEffectsConfig): The window effects configuration object
- [WindowConfig](/2/reference/rust/tauri-utils/WindowConfig): The window configuration object.
- [RemoteDomainAccessScope](/2/reference/rust/tauri-utils/RemoteDomainAccessScope): External command access definition.
- [AssetProtocolConfig](/2/reference/rust/tauri-utils/AssetProtocolConfig): Config for the asset custom protocol.
- [SecurityConfig](/2/reference/rust/tauri-utils/SecurityConfig): Security configuration.
- [TauriConfig](/2/reference/rust/tauri-utils/TauriConfig): The Tauri configuration object.
- [UpdaterWindowsConfig](/2/reference/rust/tauri-utils/UpdaterWindowsConfig): The updater configuration for Windows.
- [SystemTrayConfig](/2/reference/rust/tauri-utils/SystemTrayConfig): Configuration for application system tray icon.
- [IosConfig](/2/reference/rust/tauri-utils/IosConfig): General configuration for the iOS target.
- [AndroidConfig](/2/reference/rust/tauri-utils/AndroidConfig): General configuration for the iOS target.
- [BuildConfig](/2/reference/rust/tauri-utils/BuildConfig): The Build configuration object.
- [PackageVersion](/2/reference/rust/tauri-utils/PackageVersion): 
- [PackageConfig](/2/reference/rust/tauri-utils/PackageConfig): The package configuration.
- [Config](/2/reference/rust/tauri-utils/Config): The Tauri configuration object.
- [PluginConfig](/2/reference/rust/tauri-utils/PluginConfig): The plugin configs holds a HashMap mapping a plugin name to its configuration object.