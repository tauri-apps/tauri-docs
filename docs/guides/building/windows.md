---
sidebar_position: 2
---

import Command from '@theme/Command'

# Windows Installer

Tauri applications for Windows are distributed as Microsoft Installers (`.msi` files). The Tauri CLI bundles your application binary and additional resources. Please note that `.msi` installers can **only be created on Windows** as cross-compilation doesn't work yet. This guide provides information about available customization options for the installer.

To build and bundle your Tauri application into a single executable simply run the following command:

<Command name="build" shell="powershell"/>

It will build your Frontend, compile the Rust binary, collect all external binaries and resources and finally produce neat platform-specific bundles and installers.

:::info 32-bit Windows
The Tauri CLI compiles your executable using your machine's architecture by default. Assuming that you're developing on a 64-bit machine, the CLI will produce 64-bit applications. If you need to support 32-bit machines, you can compile your application with a **different** [Rust target][platform support] using the `--target` flag:

```powershell
tauri build --target i686-pc-windows-msvc
```

By default Rust only installs toolchains for your machine's target, so you need to install the 32-bit Windows toolchain first: `rustup target add i686-pc-windows-msvc`. You can get a full list of Rust targets by running `rustup target list`.
:::

## Supporting Windows 7

By default the Microsoft Installer does not work on Windows 7 because it needs to download the Webview2 bootstrapper if not installed (which might fail if TLS 1.2 is not enabled in the operating system). Tauri includes an option to embed the Webview2 bootstrapper (see the [Embedding the Webview2 Bootstrapper](#embedding-the-webview2-bootstrapper) section below).

Additionally, to use the Notification API in Windows 7, you need to enable the `windows7-compat` Cargo feature:

```toml title="Cargo.toml"
[dependencies]
tauri = { version = "1", features = [ "windows7-compat" ] }
```

## Distributing a 32-bit executable

The Tauri CLI compiles your executable using your machine's architecture by default. You can target a different architecture using the `target` argument. For example, to generate an installer for the x86 architecture, you can execute `tauri build --target i686-pc-windows-msvc` (you will first need to install the _i686-pc-windows-msvc_ target by running `rustup target add i686-pc-windows-msvc`). You can see the list of available targets running `rustup target list`.

## Using Alternative Webview2 Installation Options

The Windows Installer by default downloads the Webview2 bootstapper and executes it if the runtime is not installed. Alternatively, you can embed the bootstrapper, embed the offline installer, or use a fixed Webview2 runtime version. See the following table for a comparison between these methods:

| Install method        | Requires internet connection | Added installer size |
| :-------------------- | :--------------------------- | :------------------- |
| Download bootstrapper | :heavy_check_mark:           | 0MB                  |
| Embed bootstrapper    | :heavy_check_mark:           | ~1.8MB               |
| Embed installer       |                              | ~127MB               |
| Fixed version         |                              | ~180MB               |

:::note
On Windows 10 (since June 27, 2022) and Windows 11, the Webview2 runtime is distributed as part of the operating system.
:::

### Embedding the Webview2 Bootstrapper

To embed the Webview2 Bootstrapper, set the [webviewInstallMode] to `embedBootstrapper`. This increases the installer size by around 1.8MB, but increases compatibility with Windows 7 systems.

```json
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

### Embedding the Webview2 offline installer

To embed the Webview2 Bootstrapper, set the [webviewInstallMode] to `offlineInstaller`. This increases the installer size by around 127MB, but allows your application to be installed even if internet connection is not available.

```json
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

### Using a fixed version of the Webview2 Runtime

Using the runtime provided by the system is great for security as the webview vulnerability patches are managed by Windows. If you want to control the Webview2 distribution on each of your applications (either to manage the release patches yourself or distribute applications on environments where internet connection might not be available) Tauri can bundle the runtime files for you.

1. Download the Webview2 fixed version runtime on the [official website], a `.cab` file for the selected architecture. In this example, the downloaded filename is Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64.cab
2. Extract the file to the core folder: `Expand .\Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64.cab -F:* ./src-tauri`
3. Configure the Webview2 runtime path on `tauri.conf.json`:

```json
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

4. Run `tauri build` to produce the Windows Installer with the fixed Webview2 runtime.

:::caution
Distributing a fixed Webview2 Runtime version increases the Windows Installer by around 180MB.
:::

### Skipping Installation of the Webview2 Runtime

You can remove the Webview2 Runtime download check from the installer by setting [webviewInstallMode] to `skip`. Your application WILL NOT work if the user does not have the runtime installed.

```json
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

## Customizing the Installer

The Windows Installer package is built using the [WiX Toolset v3]. Currently you can change it by using a custom WiX source code (an XML file with a `.wxs` file extension) or through WiX fragments.

### Replacing the Installer Code with a Custom WiX File

The Windows Installer XML defined by Tauri is configured to work for the common use case of simple webview-based applications (you can find it [here][default wix template]). It uses [handlebars] so the Tauri CLI can brand your installer according to your `tauri.conf.json` definition. If you need a completely different installer, a custom template file can be configured on [`tauri.bundle.windows.wix.template`].

### Extending the Installer with WiX Fragments

A [WiX fragment] is a container where you can configure almost everything offered by WiX. In this example, we will define a fragment that writes two registry entries:

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

Save the fragment file with the `.wxs` extension somewhere in your project and reference it on `tauri.conf.json`:

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

Note that `ComponentGroup`, `Component`, `FeatureGroup`, `Feature` and `Merge` element ids must be referenced on the `wix` object of `tauri.conf.json` on the `componentGroupRefs`, `componentRefs`, `featureGroupRefs`, `featureRefs` and `mergeRefs` respectively in order to be included on the installer.

## Internationalization

The Windows Installer is built using the `en-US` language by default. Internationalization (i18n) can be configured using the [`tauri.bundle.windows.wix.language`] property, defining the languages Tauri should build an installer against. You can find the language names to use in the Language-Culture column on [Microsoft's website][localizing the error and actiontext tables].

### Compiling an Installer for a Single Language

To create a single installer targeting a specific language, set the `language` value to a string:

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

### Compiling an Installer for Each Language in a List

To compile an installer targeting a list of languages, use an array. A specific installer for each language will be created, with the language key as a suffix:

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

### Configuring the Installer for Each Language

A configuration object can be defined for each language to configure localization strings:

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

The `localePath` property defines the path to a language file, a XML configuring the language culture:

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

Currently Tauri references the following locale strings: `LaunchApp`, `DowngradeErrorMessage`, `PathEnvVarFeature` and `InstallAppFeature`. You can define your own strings and reference them on your custom template or fragments with `"!(loc.TheStringId)"`. See the [WiX localization documentation] for more information.

[platform support]: https://doc.rust-lang.org/nightly/rustc/platform-support.html
[webviewInstallMode]: ../../api/config/#tauri.bundle.windows.webviewInstallMode
[download the webview2 runtime]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[wix toolset v3]: https://wixtoolset.org/documentation/manual/v3/
[default wix template]: https://github.com/tauri-apps/tauri/blob/dev/tooling/bundler/src/bundle/windows/templates/main.wxs
[handlebars]: https://docs.rs/handlebars/latest/handlebars/
[`tauri.bundle.windows.wix.template`]: ../../api/config#wixconfig.template
[wix fragment]: https://wixtoolset.org/documentation/manual/v3/xsd/wix/fragment.html
[`tauri.bundle.windows.wix.language`]: ../../api/config#wixconfig.language
[wix localization documentation]: https://wixtoolset.org/documentation/manual/v3/howtos/ui_and_localization/make_installer_localizable.html
[localizing the error and actiontext tables]: https://docs.microsoft.com/en-us/windows/win32/msi/localizing-the-error-and-actiontext-tables
