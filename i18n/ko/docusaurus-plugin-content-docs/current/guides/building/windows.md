---
sidebar_position: 2
---

import Command from '@theme/Command'

# 윈도우 설치 프로그램

Tauri applications for Windows are either distributed as Microsoft Installers (`.msi` files) using the [WiX Toolset v3][] or starting with Tauri v1.3 as setup executables (`-setup.exe` files) using [NSIS][]. Tauri CLI는 애플리케이션 바이너리와 추가적인 리소스들을 묶어줍니다. `.msi` 설치 프로그램은 **오직 Windows에서만 생성되며** 크로스 컴파일은 지원하지 않습니다. Cross-compilation for NSIS installers is experimental and being worked on.

이 안내서는 설치 프로그램에 사용 가능한 사용자 지정 옵션에 대한 정보를 제공합니다.

To build and bundle your whole Tauri application into a single installer simply run the following command:

<Command name="build" shell="powershell"/>

Frontend를 빌드하고 Rust 바이너리를 컴파일하며 모든 외부 바이너리와 리소스를 수집하고 최종적으로 플랫폼별로 정돈된 번들 및 설치 프로그램을 생성합니다.

## 32-bit, ARM용 빌드

Tauri CLI는 기본적으로 컴퓨터의 아키텍처를 사용하여 실행 파일을 컴파일합니다. 64비트 시스템에서 개발한다고 가정하면, CLI는 64비트 애플리케이션을 생성합니다.

If you need to support **32-bit** machines, you can compile your application with a **different** [Rust target][platform support] using the `--target` flag:

```powershell
tauri build --target i686-pc-windows-msvc
```

기본적으로 Rust는 대상 시스템에 대한 툴체인만 설치하므로 먼저 32비트 Windows 툴체인을 설치해야 합니다:`rustup target add i686-pc-windows-msvc`.

만약, **ARM64**으로 빌드해야할 경우, 먼저, 추가적인 빌드 도구를 설치해야 합니다. 이를 위해, `Visual Studio Installer` 열고, "수정"을 클릭한 다음, "개별 구성 요소" 탭에서 "C++ ARM64 build tools"을 설치해야 합니다. 이 문서 작성 당시, VS2022의 정확한 이름은 `MSVC v143 - VS 2022 C++ ARM64 빌드 도구(최신)`입니다.  
이제 `rustup target add aarch64-pc-windows-msvc`로 Rust 대상을 추가한 다음, 위에서 언급한 방법을 사용하여 앱을 컴파일할 수 있습니다:

```powershell
tauri build --target aarch64-pc-windows-msvc
```

:::info

Only the NSIS target supports ARM64 targets, so if you configured tauri to compile all bundle types you may want to change the above command to `tauri build --target aarch64-pc-windows-msvc --bundle nsis` to only build the NSIS installer.

Note that the installer itself will still be x86 running on the ARM machine via emulation. The app itself will be a native ARM64 binary.

:::

## Windows 7 지원

By default, the Microsoft Installer (`.msi`) does not work on Windows 7 because it needs to download the WebView2 bootstrapper if not installed (which might fail if TLS 1.2 is not enabled in the operating system). Tauri includes an option to embed the WebView2 bootstrapper (see the [Embedding the WebView2 Bootstrapper](#embedded-bootstrapper) section below). The NSIS based installer (`-setup.exe`) also supports the `downloadBootstrapper` mode on Windows 7.

추가적으로, Windows 7의 알림 API를 사용하려면, `windows7-compat` Cargo 기능을 활성화 해야 합니다.

```toml title="Cargo.toml"
[dependencies]
tauri = { version = "1", features = [ "windows7-compat" ] }
```

## FIPS Compliance

If your system requires the MSI bundle to be FIPS compliant you can set the `TAURI_FIPS_COMPLIANT` environment variable to `true` before running `tauri build`. In PowerShell you can set it for the current terminal session like this:

```powershell
$env:TAURI_FIPS_COMPLIANT="true"
```

## WebView2 Installation Options

The installers by default download the WebView2 bootstrapper and executes it if the runtime is not installed. Alternatively, you can embed the bootstrapper, embed the offline installer, or use a fixed WebView2 runtime version. 이러한 방법을 비교하려면 다음 표를 확인 하세요.

| 설치 방법                                              | 인터넷 연결 필요 | 추가적인 인스톨러 크기 | 참고 사항                                                                                                                         |
|:-------------------------------------------------- |:--------- |:------------ |:----------------------------------------------------------------------------------------------------------------------------- |
| [`downloadBootstrapper`](#downloaded-bootstrapper) | 예         | 0MB          | `Default` <br /> Results in a smaller installer size, but is not recommended for Windows 7 deployment via `.msi` files. |
| [`embedBootstrapper`](#embedded-bootstrapper)      | 예         | ~1.8MB       | Better support on Windows 7 for `.msi` installers.                                                                            |
| [`offlineInstaller`](#offline-installer)           | 아니요       | ~127MB       | Embeds WebView2 installer. Recommended for offline environments.                                                              |
| [`fixedVersion`](#fixed-version)                   | 아니요       | ~180MB       | Embeds a fixed WebView2 version.                                                                                              |
| [`skip`](#skipping-installation)                   | 아니요       | 0MB          | ⚠️ Not recommended <br /> Does not install the WebView2 as part of the Windows Installer.                               |

:::info

On Windows 10 (April 2018 release or later) and Windows 11, the WebView2 runtime is distributed as part of the operating system.

:::

### Bootstrapper 다운로드

이것은 Windows Installer를 빌드하기 위한 기본 설정입니다. It downloads the bootstrapper and runs it. Requires an internet connection but results in a smaller installer size. This is not recommended if you're going to be distributing to Windows 7 via `.msi` installers.

```json title="tauri.config.json"
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "downloadBootstrapper"
        }
      }
    }
  }
}
```

### Bootstrapper 포함하기

To embed the WebView2 Bootstrapper, set the [webviewInstallMode][] to `embedBootstrapper`. 이 방법은 설치 프로그램 크기를 약 1.8MB 증가하게 만들지만, Windows 7 시스템과의 호환성이 향상되도록 해줍니다.

```json title="tauri.config.json"
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "embedBootstrapper"
        }
      }
    }
  }
}
```

### 오프라인 설치 프로그램

To embed the WebView2 Bootstrapper, set the [webviewInstallMode][] to `offlineInstaller`. 이 방법은 설치 프로그램 크기를 약 127MB 증가하게 만들지만, 인터넷 연결을 사용할 수 없는 환경에서도 응용 프로그램을 설치할 수 있습니다.

```json title="tauri.config.json"
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "offlineInstaller"
        }
      }
    }
  }
}
```

### 고정된 버전

Webview 취약점 패치는 Windows에서 관리하므로 시스템에서 제공하는 런타임을 사용하는 것이 보안에 좋습니다. If you want to control the WebView2 distribution on each of your applications (either to manage the release patches yourself or distribute applications on environments where an internet connection might not be available) Tauri can bundle the runtime files for you.

:::주의

Distributing a fixed WebView2 Runtime version increases the Windows Installer by around 180MB.

:::

1. Download the WebView2 fixed version runtime from [Microsoft's website][download-webview2-runtime]. 이 예제에서 다운로드된 파일명은 `Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64.cab`입니다.
2. core 폴더에 파일을 추출합니다.

```powershell
Expand .\Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64.cab -F:* ./src-tauri
```

3. Configure the WebView2 runtime path in `tauri.conf.json`:

```json title="tauri.config.json"
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "fixedRuntime",
          "path": "./Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64/"
        }
      }
    }
  }
}
```

4. Run `tauri build` to produce the Windows Installer with the fixed WebView2 runtime.

### 설치 건너뛰기

You can remove the WebView2 Runtime download check from the installer by setting [webviewInstallMode][] to `skip`. 사용자 시스템에 런타임에 설치되어 있지 않으면 애플리케이션이 작동하지 않습니다.

:::주의

Your application WILL NOT work if the user does not have the runtime installed and won't attempt to install it.

:::

```json title="tauri.config.json"
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewInstallMode": {
          "type": "skip"
        }
      }
    }
  }
}
```

## Customizing the WiX Installer Template

The `.msi` Windows Installer package is built using the [WiX Toolset v3][]. Currently, apart from pre-defined [configurations](../../api/config.md#wixconfig), you can change it by using a custom WiX source code (an XML file with a `.wxs` file extension) or through WiX fragments.

### 설치 프로그램 코드를 사용자 지정 WiX 파일로 바꾸기

The Windows Installer XML defined by Tauri is configured to work for the common use case of simple webview-based applications (you can find it [here][default wix template]). It uses [handlebars][] so the Tauri CLI can brand your installer according to your `tauri.conf.json` definition. If you need a completely different installer, a custom template file can be configured on [`tauri.bundle.windows.wix.template`][].

### WiX Fragments로 설치 프로그램 확장

A [WiX fragment][] is a container where you can configure almost everything offered by WiX. 이 예제에서는 두개의 레지스트리 항목을 작성하는 fragment를 정의합니다:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
  <Fragment>
    <!-- these registry entries should be installed
         to the target user's machine -->
    <DirectoryRef Id="TARGETDIR">
      <!-- groups together the registry entries to be installed -->
      <!-- Note the unique `Id` we provide here -->
      <Component Id="MyFragmentRegistryEntries" Guid="*">
        <!-- the registry key will be under
             HKEY_CURRENT_USER\Software\MyCompany\MyApplicationName -->
        <!-- Tauri uses the second portion of the
             bundle identifier as the `MyCompany` name
             (e.g. `tauri-apps` in `com.tauri-apps.test`)  -->
        <RegistryKey
          Root="HKCU"
          Key="Software\MyCompany\MyApplicationName"
          Action="createAndRemoveOnUninstall"
        >
          <!-- values to persist on the registry -->
          <RegistryValue
            Type="integer"
            Name="SomeIntegerValue"
            Value="1"
            KeyPath="yes"
          />
          <RegistryValue Type="string" Value="Default Value" />
        </RegistryKey>
      </Component>
    </DirectoryRef>
  </Fragment>
</Wix>
```

<!-- Would be good to include here WHERE we recommend to save it -->

프로젝트 어딘가에다가 `.wxs` 확장자인 fragment 파일을 저장하고 `tauri.conf.json`에서 참조하도록 합니다.

```json
{
  "tauri": {
    "bundle": {
      "windows": {
        "wix": {
          "fragmentPaths": ["./path/to/registry.wxs"],
          "componentRefs": ["MyFragmentRegistryEntries"]
        }
      }
    }
  }
}
```

`ComponentGroup`, `Component`, `FeatureGroup`, `Feature`, `Merge`요소 Id는 각각 `componentGroupRefs`, `componentRefs`, `featureGroupRefs`, `featureRefs`, `mergeRefs`는 `tauri.conf.json`의 `wix`개체에서 참조되어 설치 프로그램에 포함되어야 합니다.

## 국제화

The NSIS Installer is a multi-language installer, which means you always have a single installer which contains all the selected translations. You can specify which versions to include using the [`tauri.bundle.windows.nsis.languages`](../../api/config.md#nsisconfig.languages) property. A list of languages supported by NSIS is available in [the NSIS GitHub project][]. There are a few [Tauri-specific translations][] required, so if you see untranslated texts feel free to open a feature request in [Tauri's main repo][].

The WiX Installer is built using the `en-US` language by default. Internationalization (i18n) can be configured using the [`tauri.bundle.windows.wix.language`][] property, defining the languages Tauri should build an installer against. You can find the language names to use in the Language-Culture column on [Microsoft's website][localizing the error and actiontext tables].

### Compiling a WiX Installer for a Single Language

특정 언어를 대상으로 하는 단일 설치 프로그램을 만들려면, `language` 항목의 값을 문자열로 설정합니다.

```json
{
  "tauri": {
    "bundle": {
      "windows": {
        "wix": {
          "language": "fr-FR"
        }
      }
    }
  }
}
```

### Compiling a WiX Installer for Each Language in a List

언어 목록을 대상 설치 프로그램을 컴파일하려면 배열을 사용합니다. 각 언어에 대한 특정 설치 프로그램이 생성되며 언어 키가 접미사로 사용됩니다.

```json
{
  "tauri": {
    "bundle": {
      "windows": {
        "wix": {
          "language": ["en-US", "pt-BR", "fr-FR"]
        }
      }
    }
  }
}
```

### Configuring the WiX Installer for Each Language

각 언어에 대한 구성 객체를 정의하여 현지화 문자열을 구성할 수 있습니다.

```json
{
  "tauri": {
    "bundle": {
      "windows": {
        "wix": {
          "language": {
            "en-US": null,
            "pt-BR": {
              "localePath": "./wix/locales/pt-BR.wxl"
            }
          }
        }
      }
    }
  }
}
```

`localePath` 속성은 언어 파일과 언어 문화를 구성하는 XML에 대한 경로를 정의합니다.

```xml
<WixLocalization
  Culture="en-US"
  xmlns="http://schemas.microsoft.com/wix/2006/localization"
>
  <String Id="LaunchApp"> Launch MyApplicationName </String>
  <String Id="DowngradeErrorMessage">
    A newer version of MyApplicationName is already installed.
  </String>
  <String Id="PathEnvVarFeature">
    Add the install location of the MyApplicationName executable to
    the PATH system environment variable. This allows the
    MyApplicationName executable to be called from any location.
  </String>
  <String Id="InstallAppFeature">
    Installs MyApplicationName.
  </String>
</WixLocalization>
```

:::note

The `WixLocalization` element's `Culture` field must match the configured language.

:::

현재 Tauri는 현지 문자열을 참조합니다: `LaunchApp`, `DowngradeErrorMessage`, `PathEnvVarFeature` 및 `InstallAppFeature`. 자신만의 문자열을 정의하고, `"!(loc.TheStringId)"`를 사용하여 사용자 지정 템플릿이나 fragment에서 문자열을 참조할 수 있습니다. See the [WiX localization documentation][] for more information.

[WiX Toolset v3]: https://wixtoolset.org/documentation/manual/v3/
[NSIS]: https://nsis.sourceforge.io/Main_Page
[platform support]: https://doc.rust-lang.org/nightly/rustc/platform-support.html
[webviewInstallMode]: ../../api/config.md#webviewinstallmode
[download-webview2-runtime]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[default wix template]: https://github.com/tauri-apps/tauri/blob/dev/tooling/bundler/src/bundle/windows/templates/main.wxs
[handlebars]: https://docs.rs/handlebars/latest/handlebars/
[`tauri.bundle.windows.wix.template`]: ../../api/config.md#wixconfig.template
[WiX fragment]: https://wixtoolset.org/documentation/manual/v3/xsd/wix/fragment.html
[`tauri.bundle.windows.wix.language`]: ../../api/config.md#wixconfig.language
[WiX localization documentation]: https://wixtoolset.org/documentation/manual/v3/howtos/ui_and_localization/make_installer_localizable.html
[localizing the error and actiontext tables]: https://docs.microsoft.com/en-us/windows/win32/msi/localizing-the-error-and-actiontext-tables
[the NSIS GitHub project]: https://github.com/kichik/nsis/tree/9465c08046f00ccb6eda985abbdbf52c275c6c4d/Contrib/Language%20files
[Tauri-specific translations]: https://github.com/tauri-apps/tauri/tree/dev/tooling/bundler/src/bundle/windows/templates/nsis-languages
[Tauri's main repo]: https://github.com/tauri-apps/tauri/issues/new?assignees=&labels=type%3A+feature+request&template=feature_request.yml&title=%5Bfeat%5D+
