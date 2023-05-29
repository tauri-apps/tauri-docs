---
sidebar_position: 4
---

# 웹뷰 버전

## WebView2 (Windows)

Tauri는 Microsoft Edge을 기반으로 하는 WebView2을 사용하기에 Chromium을 사용하는 것과 같습니다. WebView2는 스스로 업데이트할 수 있기 때문에, Windows 대상으로는 비교적 최신 버전의 Chromium 빌드가 설치되었다고 할 수 있습니다.

WebView2는 Windows 7 이상이면 지원되고, Windows 11의 경우 미리 설치되어 있습니다. Windows 11 이전 버전에서는 Tauri가 생성한 설치 도구가 시스템에 WebView2가 설치되어 있도록 보장할 것입니다.

## WebKit (macOS, iOS, & Linux)

Tauri는 ([WKWebView](https://developer.apple.com/documentation/webkit/wkwebview?language=objc)를 통해) macOS와 (`webkit2gtk`를 통해) Linux에서 WebKit을 사용합니다.

### WebKit 버전 숫자 해석하기

WebKit 버전 숫자는 꽤나 복잡하기에 이해를 돕는 유용한 자료를 아래에 두었습니다.

WebKit 버전 숫자는 5 개의 부분으로 나눌 수 있으며, 맨 앞 숫자는 어떤 운영 체제를 위해 빌드된 것인지 알려줍니다.

> `$(SYSTEM_VERSION_PREFIX)$(MAJOR_VERSION).$(MINOR_VERSION).$(TINY_VERSION).$(MICRO_VERSION).$(NANO_VERSION)`

`SYSTEM_VERSION_PREFIX`라고 부르는 맨 앞 숫자는 (Linux에서는 없고) macOS와 iOS 빌드본에서만 존재하는 것으로 보입니다. 나아가, 만약 마지막 두 부분이 모두 `0`이라면 생략할 수 있습니다 (그러니까, 버전이 `613.2.7.0.0`이라면 `613.2.7`이라고 부를 수 있습니다).

예를 들어서, macOS Monterey (12.x)에서 Safari 15.5와 함께 제공되는 WebKit 버전은 `17613.2.7.1.8`입니다. 이렇게 해석해볼 수 있습니다:

- `SYSTEM_VERSION_PREFIX`: 17
- `MAJOR_VERSION`: 613
- `MINOR_VERSION`: 2
- `TINY_VERSION`: 7
- `MICRO_VERSION`: 1
- `NANO_VERSION`: 8

`SYSTEM_VERSION_PREFIX` 매핑되는 값은 다음과 같습니다:

| macOS 버전       | `SYSTEM_VERSION_PREFIX` |
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

Tauri는 macOS 버전 10.10(Yosemite) 부터 사전 설치된 웹뷰를 사용합니다. 이 웹뷰는 핵심 구성 요소로 간주돼, 주기적 운영 체제 업데이트와 함께 판올림될 것이기 때문입니다. 다시 말해, 지원되지 않는 macOS 버전은 WebKit 판올림을 **받지 못할 수** 있습니다.

사용하고 계신 macOS 버전에서 `WKWebView`가 사용하는 WebKit 버전은 터미널에서 아래 명령어를 사용해 확인할 수 있습니다:

```shell
awk '/CFBundleVersion/{getline;gsub(/<[^>]*>/,"");print}' /System/Library/Frameworks/WebKit.framework/Resources/Info.plist
```

#### Safari의 WebKit 버전

아래 표는 운영 체제 버전과 Safari 버전 사이 관계를 보여줘, [caniuse](https://caniuse.com) 사이트 등에서 특정한 웹 플랫폼 기능이 지원되는지 알아볼 수 있습니다.

| 운영체제 이름     | 운영체제 버전                          | WebKit 버전          | Safari 버전 | 참고 사항                                                 |
| ----------- | -------------------------------- | ------------------ | --------- | ----------------------------------------------------- |
| Ventura     | 13.3.1                           | 615.1.26.11.23     |           | Verified on a 2023 M2 14" MacBook Pro                 |
|             | 13.3                             | 615.1.26.11.22     | 16.4      | Verified on a 2023 M2 14" MacBook Pro                 |
|             | 13.2.1                           | 614.4.6.1.6        |           |                                                       |
|             | 13.2                             | ?                  | 16.3      |                                                       |
|             | 13.1                             | 614.3.7.1.5        | 16.2      | 2020 M1 13" MacBook Pro에서 검증됨                         |
|             | 13.0.1                           |                    |           | 2020 M1 13" MacBook Pro에서 검증됨                         |
|             | 13.0                             | 614.2.9.1.12       | 16.1      | 2020 M1 13" MacBook Pro에서 검증됨                         |
| Monterey    | 12.6                             |                    |           | 2020 M1 13" MacBook Pro에서 검증됨                         |
|             | 12.5.1                           | 613.3.9.1.16       | 15.6.1    | 2020 M1 13" MacBook Pro에서 검증됨                         |
|             | 12.5                             | [613.3.9.1.5][]    | 15.6      | 2020 M1 13" MacBook Pro에서 검증됨                         |
|             | 12.4                             | [613.2.7.1.8][]    | 15.5      | 2020 M1 13" MacBook Pro에서 검증됨                         |
|             | 12.3.1                           | [613.1.17.1.13][]  |           |                                                       |
|             | 12.3                             | [613.1.17.1.6][]   | 15.4      |                                                       |
|             | 12.2.1                           | [612.4.9.1.8][]    |           |                                                       |
|             | 12.2                             | [612.4.9.1.5][]    | 15.3      |                                                       |
|             | 12.1.1                           |                    |           |                                                       |
|             | 12.1                             | [612.3.6.1.6][]    | 15.2      |                                                       |
|             | 12.0.1                           | [612.2.9.1.20][]   | 15.1      |                                                       |
|             | 12.0                             | [612.1.29.41.4][]  | 15.0      |                                                       |
| Big Sur     | 11.6.7                           |                    |           |                                                       |
|             | 11.6.6                           |                    |           |                                                       |
|             | 11.6.5                           |                    |           |                                                       |
|             | 11.6.2                           |                    |           |                                                       |
|             | 11.6.1                           |                    |           |                                                       |
|             | 11.6                             |                    |           |                                                       |
|             | 11.5.2                           | [611.3.10.1.6][]   |           |                                                       |
|             | 11.5.1                           |                    |           |                                                       |
|             | 11.5                             | [611.3.10.1.3][]   | 14.1.2    |                                                       |
|             | 11.4                             | [611.2.7.1.4][]    | 14.1.1    |                                                       |
|             | 11.3.1                           |                    |           |                                                       |
|             | 11.3                             | [611.1.21.161.3][] | 14.1      | 24" M1 iMac에서는 특이하게 WebKit 버전이 [611.1.21.1.12][]임을 확인 |
|             | 11.2.3                           | [610.4.3.1.7][]    |           |                                                       |
|             | 11.2.2                           |                    |           |                                                       |
|             | 11.2.1                           |                    |           |                                                       |
|             | 11.2                             | [610.4.3.1.4][]    | 14.0.3    |                                                       |
|             | 11.1                             | [610.3.7.1.9][]    | 14.0.2    |                                                       |
|             | 11.0.1                           | [610.2.11.51.8][]  |           |                                                       |
|             | 11.0                             | [610.2.11.1.3][]   | 14.0.1    | Safari 14.0은 iPhone에만 제공되었음                           |
| Catalina    | 10.15.7 보안 업데이트 2022-004         | [609.4.1.1.1][]    |           |                                                       |
|             | 10.15.7                          | [609.4.1][]        | 13.1.3    |                                                       |
|             | 10.15.6                          | [609.3.5.1.3][]    | 13.1.2    |                                                       |
|             | 10.15.5                          | [609.2.9.1.2][]    | 13.1.1    |                                                       |
|             | 10.15.4                          | [609.1.20.111.8][] | 13.1      |                                                       |
|             | 10.15.3                          | [608.5.11][]       | 13.0.5    |                                                       |
|             | 10.15.2                          | [608.4.9.1.3][]    | 13.0.4    |                                                       |
|             | 10.15.1                          | [608.3.10.1.4][]   | 13.0.3    | 2014 15" MacBook Pro에서 검증됨                            |
|             | 10.15                            | [608.2.30.1.1][]   | 13.0.2    |                                                       |
| Mojave      | 10.14.6                          | [608.1.49][]       | 13.0      |                                                       |
|             | 10.14.4                          | [607.1.40.1.5][]   | 12.1      |                                                       |
|             | 10.14.3                          | [606.4.5][]        | 12.0.3    |                                                       |
|             | 10.14.2                          | [606.3.4][]        | 12.0.2    |                                                       |
|             | 10.14.1                          | [606.2.104.1.1][]  | 12.0.1    |                                                       |
|             | 10.14                            | [606.2.11][]       | 12.0      |                                                       |
| High Sierra | 10.13.6                          | [605.3.8][]        | 11.1.2    |                                                       |
|             | 10.13.5                          | [605.2.8][]        | 11.1.1    |                                                       |
|             | 10.13.4 Security Update 2018-001 | [605.1.33.1.4][]   | 11.1      |                                                       |
|             | 10.13.4                          | [605.1.33.1.2][]   | 11.1      |                                                       |
|             | 10.13.3                          | [604.5.6][]        | 11.0.3    |                                                       |
|             | 10.13.2 Supplemental Update      | [604.4.7.1.6][]    | 11.0.2    | 27" iMac Pro에서는 특이하게 WebKit 버전이 [604.4.7.10.6][]임을 확인 |
|             | 10.13.2                          | [604.4.7.1.3][]    | 11.0.2    | 27" iMac Pro에서는 특이하게 WebKit 버전이 [604.4.7.10.4][]임을 확인 |
|             | 10.13.1                          | [604.3.5][]        | 11.0.1    |                                                       |
|             | 10.13                            | [604.1.38.1.6][]   | 11.0      |                                                       |

### Linux

Linux 생태계가 다양하다는 성질은 여러 배포판 사이에서 WebKitGTK의 정확한 정보를 얻어 컴파일하는 것이 어렵다는 뜻입니다. 아래 표는 주요 배포판과 그 배포판의 WebKit 버전을 담은 매우 불완전한 목록입니다. 사용하고 계신 배포판의 저장소를 확인해 최신 정보를 확인하시는 편이 좋습니다.

| 배포판                                                               | `webkitgtk` 버전 | WebKit 버전   | 대응하는 Safari 버전 |
| ----------------------------------------------------------------- | -------------- | ----------- | -------------- |
| Debian 11 (with update), Ubuntu 20.04 (with update), Ubuntu 22.04 | 2.36           | [614.1.6][] | TP 140 (16.0)  |
| Debian 10 (with update)                                           | 2.34           | [613.1.1][] | 15.4           |
| Debian 11, Ubuntu 18.04 (with update), centos 8 (non-stream)      | 2.32           | [612.1.6][] | 15.0           |
| Ubuntu 20.04                                                      | 2.28           | [610.1.1][] | 14.0           |
| Debian 9 (with backport), Debian 10                               | 2.24           | [608.1.6][] | 13.0           |
| Ubuntu 18.04                                                      | 2.20           | [606.1.4][] | 12.0           |

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
[604.4.7.10.4]: https://github.com/WebKit/WebKit/blob/1122bda2378b8a88d24b01a585f17e4286f14752/Source/WebKit/Configurations/Version.xcconfig
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
