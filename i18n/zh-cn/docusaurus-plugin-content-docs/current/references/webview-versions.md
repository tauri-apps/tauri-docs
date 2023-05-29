---
sidebar_position: 4
---

# WebView 版本

## WebView2 (Windows)

Tauri 使用基于 Microsoft Edge 和 Chromium 的 WebView2。 WebView2 可以自行自动更新，确保您在所有 Windows 构建目标上都有一个相对较新的 Chromium 版本。

WebView2 支持 Windows 7 或更新版本上，并已预装在 Windows 11 上。 对于 Windows 11 以前的版本，Tauri 安装程序将确保 WebView2 已安装在系统上。

## WebKit (macOS, iOS, & Linux)

Tauri 在 macOS (通过 [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview?language=objc)) 和 Linux (通过`webkit2gtk`) 上使用 WebKit.

### WebKit 版本号

Webkit 的版本号相当复杂，所以下面将会给出一些有助于理解的信息。

WebKit 的版本号分为 5 部分和一个数字前缀，指出 WebKit 是为哪个操作系统构建的：

> `$(SYSTEM_VERSION_PREFIX)$(MAJOR_VERSION).$(MINOR_VERSION).$(TINY_VERSION).$(MICRO_VERSION).$(NANO_VERSION)`

其中数字前缀叫做 `SYSTEM_VERSION_PREFIX`，并且似乎仅适用于 macOS 和 iOS 版本的 WebKit (不适用于 Linux)。 此外，如果最后两个部分都为 `0`，就可以省略它们 (所以 `613.2.7.0.0` 就会被简写为 `613.2.7`)。

例如，macOS Monterey (12.x) 上的 Safari 15.5 附带的 WebKit 版本的版本号为 `17613.2.7.1.8`。 你可以将它理解为：

- `SYSTEM_VERSION_PREFIX`: 17
- `MAJOR_VERSION`: 613
- `MINOR_VERSION`: 2
- `TINY_VERSION`: 7
- `MICRO_VERSION`: 1
- `NANO_VERSION`: 8

以下是 `SYSTEM_VERSION_PREFIX` 这个值的映射方式：

| macOS 版本       | `SYSTEM_VERSION_PREFIX` |
| -------------- | ----------------------- |
| sdk=iphone\* | 8                       |
| 13.0           | 18                      |
| 12.0           | 17                      |
| 11.0           | 16                      |
| 10.15          | 15                      |
| 10.14          | 14                      |
| 10.13          | 13                      |
| 10.12          | 12                      |
| 10.11          | 11                      |

### macOS & iOS

在 macOS 上，Tauri 使用从 10.10（Yosemite）开始预安装在 macOS 上的 webview。 它属于系统核心组件，因此会随着定期的操作系统的更新而更新。 这意味着不再支持的 macOS 版本 **不会** 收到 WebKit 的更新。

想要在您的版本的 macOS 上找到 `WKWebView` 使用的 WebKit 的版本，您可以在终端中输入以下命令：

```shell
awk '/CFBundleVersion/{getline;gsub(/<[^>]*>/,"");print}' /System/Library/Frameworks/WebKit.framework/Resources/Info.plist
```

#### Safari 中的 WebKit 版本

下表将操作系统版本对应到相应的 WebKit Safari 版本，以便您可以使用 [caniuse](https://caniuse.com) 等网站来确定特定的 Web 平台功能能否使用。

| 系统名称        | 系统版本                  | WebKit 版本          | Safari 版本 | 备注                                              |
| ----------- | --------------------- | ------------------ | --------- | ----------------------------------------------- |
| Ventura     | 13.3.1                | 615.1.26.11.23     |           | Verified on a 2023 M2 14" MacBook Pro           |
|             | 13.3                  | 615.1.26.11.22     | 16.4      | Verified on a 2023 M2 14" MacBook Pro           |
|             | 13.2.1                | 614.4.6.1.6        |           |                                                 |
|             | 13.2                  | ?                  | 16.3      |                                                 |
|             | 13.1                  | 614.3.7.1.5        | 16.2      | 已在 2020 款 13 寸 MacBook Pro 上验证                  |
|             | 13.0.1                |                    |           | 已在 2020 款 13 寸 MacBook Pro 上验证                  |
|             | 13.0                  | 614.2.9.1.12       | 16.1      | 已在 2020 款 13 寸 MacBook Pro 上验证                  |
| Monterey    | 12.6                  |                    |           | 已在 2020 款 13 寸 MacBook Pro 上验证                  |
|             | 12.5.1                | 613.3.9.1.16       | 15.6.1    | 已在 2020 款 13 寸 MacBook Pro 上验证                  |
|             | 12.5                  | [613.3.9.1.5][]    | 15.6      | 已在 2020 款 13 寸 MacBook Pro 上验证                  |
|             | 12.4                  | [613.2.7.1.8][]    | 15.5      | 已在 2020 款 13 寸 MacBook Pro 上验证                  |
|             | 12.3.1                | [613.1.17.1.13][]  |           |                                                 |
|             | 12.3                  | [613.1.17.1.6][]   | 15.4      |                                                 |
|             | 12.2.1                | [612.4.9.1.8][]    |           |                                                 |
|             | 12.2                  | [612.4.9.1.5][]    | 15.3      |                                                 |
|             | 12.1.1                |                    |           |                                                 |
|             | 12.1                  | [612.3.6.1.6][]    | 15.2      |                                                 |
|             | 12.0.1                | [612.2.9.1.20][]   | 15.1      |                                                 |
|             | 12.0                  | [612.1.29.41.4][]  | 15.0      |                                                 |
| Big Sur     | 11.6.7                |                    |           |                                                 |
|             | 11.6.6                |                    |           |                                                 |
|             | 11.6.5                |                    |           |                                                 |
|             | 11.6.2                |                    |           |                                                 |
|             | 11.6.1                |                    |           |                                                 |
|             | 11.6                  |                    |           |                                                 |
|             | 11.5.2                | [611.3.10.1.6][]   |           |                                                 |
|             | 11.5.1                |                    |           |                                                 |
|             | 11.5                  | [611.3.10.1.3][]   | 14.1.2    |                                                 |
|             | 11.4                  | [611.2.7.1.4][]    | 14.1.1    |                                                 |
|             | 11.3.1                |                    |           |                                                 |
|             | 11.3                  | [611.1.21.161.3][] | 14.1      | 24" M1 iMac 使用一个特别的 WebKit 版本 [611.1.21.1.12][] |
|             | 11.2.3                | [610.4.3.1.7][]    |           |                                                 |
|             | 11.2.2                |                    |           |                                                 |
|             | 11.2.1                |                    |           |                                                 |
|             | 11.2                  | [610.4.3.1.4][]    | 14.0.3    |                                                 |
|             | 11.1                  | [610.3.7.1.9][]    | 14.0.2    |                                                 |
|             | 11.0.1                | [610.2.11.51.8][]  |           |                                                 |
|             | 11.0                  | [610.2.11.1.3][]   | 14.0.1    | Safari 14.0 仅在 iPhone 上可用                       |
| Catalina    | 10.15.7 安全更新 2022-004 | [609.4.1.1.1][]    |           |                                                 |
|             | 10.15.7               | [609.4.1][]        | 13.1.3    |                                                 |
|             | 10.15.6               | [609.3.5.1.3][]    | 13.1.2    |                                                 |
|             | 10.15.5               | [609.2.9.1.2][]    | 13.1.1    |                                                 |
|             | 10.15.4               | [609.1.20.111.8][] | 13.1      |                                                 |
|             | 10.15.3               | [608.5.11][]       | 13.0.5    |                                                 |
|             | 10.15.2               | [608.4.9.1.3][]    | 13.0.4    |                                                 |
|             | 10.15.1               | [608.3.10.1.4][]   | 13.0.3    | 已在 2014 款 15 寸 MacBook Pro 上验证                  |
|             | 10.15                 | [608.2.30.1.1][]   | 13.0.2    |                                                 |
| Mojave      | 10.14.6               | [608.1.49][]       | 13.0      |                                                 |
|             | 10.14.4               | [607.1.40.1.5][]   | 12.1      |                                                 |
|             | 10.14.3               | [606.4.5][]        | 12.0.3    |                                                 |
|             | 10.14.2               | [606.3.4][]        | 12.0.2    |                                                 |
|             | 10.14.1               | [606.2.104.1.1][]  | 12.0.1    |                                                 |
|             | 10.14                 | [606.2.11][]       | 12.0      |                                                 |
| High Sierra | 10.13.6               | [605.3.8][]        | 11.1.2    |                                                 |
|             | 10.13.5               | [605.2.8][]        | 11.1.1    |                                                 |
|             | 10.13.4 安全更新 2018-001 | [605.1.33.1.4][]   | 11.1      |                                                 |
|             | 10.13.4               | [605.1.33.1.2][]   | 11.1      |                                                 |
|             | 10.13.3               | [604.5.6][]        | 11.0.3    |                                                 |
|             | 10.13.2 补充更新          | [604.4.7.1.6][]    | 11.0.2    | 27" M1 iMac 使用一个特别的 WebKit 版本 [604.4.7.10.6][]  |
|             | 10.13.2               | [604.4.7.1.3][]    | 11.0.2    | 27" M1 iMac 使用一个特别的 WebKit 版本 [604.4.7.10.6][]  |
|             | 10.13.1               | [604.3.5][]        | 11.0.1    |                                                 |
|             | 10.13                 | [604.1.38.1.6][]   | 11.0      |                                                 |

### Linux

Linux 多样的生态系统意味着我们很难在不同的发行版上汇总关于 WebKitGTK 的准确信息。 下表是一个非常不完整的列表，包括最常用的发行版和它们的 WebKit 版本。 你应该随时检查发行版的软件包仓库来获取最新信息。

| 发行版                                                   | `webkitgtk` 版本 | WebKit 版本   | 等价 Safari 版本  |
| ----------------------------------------------------- | -------------- | ----------- | ------------- |
| Debian 11 (更新到最新), Ubuntu 20.04 (更新到最新), Ubuntu 22.04 | 2.36           | [614.1.6][] | TP 140 (16.0) |
| Debian 10 (更新到最新)                                     | 2.34           | [613.1.1][] | 15.4          |
| Debian 11, Ubuntu 18.04 (更新到最新), centos 8 (非滚动更新)     | 2.32           | [612.1.6][] | 15.0          |
| Ubuntu 20.04                                          | 2.28           | [610.1.1][] | 14.0          |
| Debian 9 (带向后移植), Debian 10                           | 2.24           | [608.1.6][] | 13.0          |
| Ubuntu 18.04                                          | 2.20           | [606.1.4][] | 12.0          |

[613.3.9.1.5]: https://github.com/WebKit/WebKit/blob/7f88b99524540e94abcdef4d45c1c0324d63fb56/Source/WebKit/Configurations/Version.xcconfig
[609.1.20.111.8]: https://github.com/WebKit/WebKit/blob/5c90480a38a86464b6b421c2fd28c744b43a4faa/Source/WebKit/Configurations/Version.xcconfig
[609.2.9.1.2]: https://github.com/WebKit/WebKit/blob/ca54d252f3416c3ec64f80a084cb5c4ff7ba24f1/Source/WebKit/Configurations/Version.xcconfig
[609.4.1]: https://github.com/WebKit/WebKit/blob/cb927e6151b5ef49c9ccfb13018f51471f8f1035/Source/WebKit/Configurations/Version.xcconfig
[609.4.1.1.1]: https://github.com/WebKit/WebKit/blob/8df64286794c38efa4697b7c24658cb85204a070/Source/WebKit/Configurations/Version.xcconfig
[609.3.5.1.3]: https://github.com/WebKit/WebKit/blob/30fc8a44f087596c60e98adb434c0b98eccb61bb/Source/WebKit/Configurations/Version.xcconfig
[610.4.3.1.7]: https://github.com/WebKit/WebKit/blob/248c3283ebdec8bd8ae05d4d1d56390b0da28f27/Sour.3ce/WebKit/Configurations/Version.xcconfig
[610.4.3.1.4]: https://github.com/WebKit/WebKit/blob/b152d7889c786689406f203cc4eefea509a90302/Source/WebKit/Configurations/Version.xcconfig
[610.3.7.1.9]: https://github.com/WebKit/WebKit/blob/62e4387a5eab36ed075961d9ee9971f8c01a55bd/Source/WebKit/Configurations/Version.xcconfig
[611.1.21.1.12]: https://github.com/WebKit/WebKit/blob/5aebddad42f6572ffb20d1cd1be8d22be9cf0101/Source/WebKit/Configurations/Version.xcconfig
[610.2.11.51.8]: https://github.com/WebKit/WebKit/blob/388eae2d649eaecadaa11e1edc4248e54db583f7/Source/WebKit/Configurations/Version.xcconfig
[610.2.11.1.3]: https://github.com/WebKit/WebKit/blob/f11e10bcbb474d8c65a870cc680b0964d6529748/Source/WebKit/Configurations/Version.xcconfig
[611.1.21.161.3]: https://github.com/WebKit/WebKit/blob/7aaa117b91a6822c40761d6f4da2e3d27627602f/Source/WebKit/Configurations/Version.xcconfig
[611.2.7.1.4]: https://github.com/WebKit/WebKit/blob/200180885a516f378d0253ffc7b950f98b3f9810/Source/WebKit/Configurations/Version.xcconfig
[611.3.10.1.6]: https://github.com/WebKit/WebKit/blob/54099b931b220cf75dea154bb2e84a6a0582e87c/Source/WebKit/Configurations/Version.xcconfig
[611.3.10.1.3]: https://github.com/WebKit/WebKit/blob/7253374f3302a64a15482d5303925d0cfa5eb610/Source/WebKit/Configurations/Version.xcconfig
[612.1.29.41.4]: https://github.com/WebKit/WebKit/blob/983520ffb8f364ee765d081e0f51b6b66da3945b/Source/WebKit/Configurations/Version.xcconfig
[612.2.9.1.20]: https://github.com/WebKit/WebKit/blob/0c76deb88d1c3b290ea6f8edf469929d08afe53c/Source/WebKit/Configurations/Version.xcconfig
[612.3.6.1.6]: https://github.com/WebKit/WebKit/blob/2d561c2c5b8c1d12d85a6e52fe7e7e83ff179a15/Source/WebKit/Configurations/Version.xcconfig
[612.4.9.1.8]: https://github.com/WebKit/WebKit/blob/cf0263b49d5753432d651e14537ed44e6185dc16/Source/WebKit/Configurations/Version.xcconfig
[612.4.9.1.5]: https://github.com/WebKit/WebKit/blob/c4c7b01e26d3142b0e0d456381c6d313399c3269/Source/WebKit/Configurations/Version.xcconfig
[613.2.7.1.8]: https://github.com/WebKit/WebKit/blob/b85867ab0dadcd371dd9859feff9033885748d47/Source/WebKit/Configurations/Version.xcconfig
[613.1.17.1.13]: https://github.com/WebKit/WebKit/blob/8b92a7625ab76aed000ee5a3a1f6b68b20404449/Source/WebKit/Configurations/Version.xcconfig
[613.1.17.1.6]: https://github.com/WebKit/WebKit/blob/151e184ecb1d669996ac6139f28640b1c71184e1/Source/WebKit/Configurations/Version.xcconfig
[608.5.11]: https://github.com/WebKit/WebKit/blob/e0e5c8297429016745b55545b1454f02e40d83e1/Source/WebKit/Configurations/Version.xcconfig
[608.4.9.1.3]: https://github.com/WebKit/WebKit/blob/37f92d461f8ff74ea5cbe8f0baac0b8c8f1f6e19/Source/WebKit/Configurations/Version.xcconfig
[608.3.10.1.4]: https://github.com/WebKit/WebKit/blob/ba26f5d986fca25516e6e72bc35c89905b1ed39a/Source/WebKit/Configurations/Version.xcconfig
[608.2.30.1.1]: https://github.com/WebKit/WebKit/blob/7b6a3e211037e2580cec885316f027a4b5b11b2d/Source/WebKit/Configurations/Version.xcconfig
[608.1.49]: https://trac.webkit.org/browser/webkit/releases/Apple/Safari%2013.0/WebKit/Configurations/Version.xcconfig
[607.1.40.1.5]: https://trac.webkit.org/browser/webkit/releases/Apple/Safari%2012.1/WebKit/Configurations/Version.xcconfig
[606.4.5]: https://github.com/WebKit/WebKit/blob/a833f886f9bd68c279322104c27498245d5b8dfb/Source/WebKit/Configurations/Version.xcconfig
[606.3.4]: https://github.com/WebKit/WebKit/blob/676f488e26ea1f872a9b69756c17d417b5317f52/Source/WebKit/Configurations/Version.xcconfig
[606.2.104.1.1]: https://github.com/WebKit/WebKit/blob/244ed4eb99ff394551c3d38fec58c1848b0ecdc3/Source/WebKit/Configurations/Version.xcconfig
[606.2.11]: https://trac.webkit.org/browser/webkit/releases/Apple/Safari%2012.0/WebKit/Configurations/Version.xcconfig
[605.1.33.1.2]: https://github.com/WebKit/WebKit/blob/25c0a6e3ca8e4a2dd41d4dcf52d70f27a912fef4/Source/WebKit/Configurations/Version.xcconfig
[604.3.5]: https://trac.webkit.org/browser/webkit/releases/Apple/Safari%2011.0.1/WebKit/Configurations/Version.xcconfig
[604.1.38.1.6]: https://github.com/WebKit/WebKit/blob/62f5206fadd2fd99c6e3060df4f57a7b7ddbbd1e/Source/WebKit/Configurations/Version.xcconfig
[604.4.7.1.3]: https://github.com/WebKit/WebKit/blob/abe6ee6ad0f8fe44bd9ba476c818e4905c921ad3/Source/WebKit/Configurations/Version.xcconfig
[604.5.6]: https://github.com/WebKit/WebKit/blob/3f76b1214e0deb75a2f813be9bd96b56d9da84df/Source/WebKit/Configurations/Version.xcconfig
[604.4.7.10.6]: https://github.com/WebKit/WebKit/blob/1122bda2378b8a88d24b01a585f17e4284f14752/Source/WebKit/Configurations/Version.xcconfig
[604.4.7.10.6]: https://github.com/WebKit/WebKit/blob/00051d7d17eb097dd60908d93a94a072080dec08/Source/WebKit/Configurations/Version.xcconfig
[604.4.7.1.6]: https://github.com/WebKit/WebKit/blob/68ee2c6176b6d03fbee855cd727c9cf9b09314b1/Source/WebKit/Configurations/Version.xcconfig
[605.1.33.1.4]: https://github.com/WebKit/WebKit/blob/69c0509d70d600dedaf55f448db8d887908b218c/Source/WebKit/Configurations/Version.xcconfig
[605.2.8]: https://github.com/WebKit/WebKit/blob/66a695280db148a4f8306c95c62e891b34ff3f86/Source/WebKit/Configurations/Version.xcconfig
[605.3.8]: https://github.com/WebKit/WebKit/blob/266f0468e067e0c2c0e1209313a34bdf5926aa38/Source/WebKit/Configurations/Version.xcconfig

[614.1.6]: https://trac.webkit.org/browser/webkit/releases/WebKitGTK/webkit-2.36/Source/WebKit/Configurations/Version.xcconfig
[613.1.1]: https://trac.webkit.org/browser/webkit/releases/WebKitGTK/webkit-2.34/Source/WebKit/Configurations/Version.xcconfig
[612.1.6]: https://trac.webkit.org/browser/webkit/releases/WebKitGTK/webkit-2.32/Source/WebKit/Configurations/Version.xcconfig
[610.1.1]: https://trac.webkit.org/browser/webkit/releases/WebKitGTK/webkit-2.28/Source/WebKit/Configurations/Version.xcconfig
[608.1.6]: https://trac.webkit.org/browser/webkit/releases/WebKitGTK/webkit-2.24/Source/WebKit/Configurations/Version.xcconfig
[606.1.4]: https://trac.webkit.org/browser/webkit/releases/WebKitGTK/webkit-2.20/Source/WebKit/Configurations/Version.xcconfig
