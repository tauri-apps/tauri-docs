---
sidebar_label: Windows
---

# Windows Application Distribution

Tauri applications for Windows are distributed either with a Microsoft Installer (`.msi` files). The Tauri CLI automatically bundles your application code in this format, providing options to code sign your application. This guide provides information on available customizations for the installer.

## Using a fixed version of the Webview2 Runtime

By default, the Tauri installer downloads and installs the Webview2 Runtime if it is not already installed (on Windows 11, the runtime is distributed as part of the operating system).

:::note
You can remove the Webview2 Runtime download check from the installer by setting [tauri.bundle.windows.wix.skipWebviewInstall] to `true`. Your application WON'T work if the user does not have the runtime installed.
:::

Using the runtime provided by the system is great for security as the webview vulnerability patches are managed by Windows. If you want to control the Webview2 distribution on each of your applications, either to manage the release patches yourself or distribute applications on environments where internet connection might not be available. In that case, Tauri can bundle the runtime files for you.

- Download the Webview2 fixed version runtime on the [official website], a `.cab` file for the selected architecture. In this example, the downloaded filename is Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64.cab
- Extract the file to the core folder: `Expand .\Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64.cab -F:* ./src-tauri`
- Configure the Webview2 runtime path on `tauri.conf.json`:

```json
{
  "tauri": {
    "bundle": {
      "windows": {
        "webviewFixedRuntimePath": "./Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64/"
      }
    }
  }
}
```

- Run `tauri build` to produce the Windows Installer with the fixed Webview2 runtime.

:::caution
Distributing a fixed Webview2 Runtime version increases the Windows Installer by around 150MB.
:::

## Customizing the Windows Installer

The Windows Installer package is built using the [WiX Toolset v3]. Currently, you can change it by using a custom WiX source code (an XML file with a `.wxs` file extension) or through WiX fragments.

### Replacing the installer code with a custom WiX file

The Windows Installer XML defined by Tauri is configured to work for the common use case of simple webview-based applications; you can find it [here]. It uses [handlebars] so the Tauri CLI can brand your installer according to your `tauri.conf.json` definition. If you need a completely different installer, a custom template file can be configured on [tauri.bundle.windows.wix.template].

### Extending the installer with WiX fragments

A [WiX fragment] is a container where you can configure almost everything offered by WiX. In this example, we will define a fragment that writes two registry entries:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
    <Fragment>
        <!-- these registry entries should be installed to the target user's machine -->
        <DirectoryRef Id="TARGETDIR">
            <!-- groups together the registry entries to be installed -->
            <!-- Note the unique `Id` we provide here -->
            <Component Id="MyFragmentRegistryEntries" Guid="*">
                <!-- the registry key willbe under HKEY_CURRENT_USER\Software\MyCompany\MyApplicationName -->
                <!-- Tauri uses the second portion of the bundle identifier as the `MyCompany` name (e.g. `tauri-apps` in `com.tauri-apps.test`)  -->
                <RegistryKey Root="HKCU"
                            Key="Software\MyCompany\MyApplicationName"
                    Action="createAndRemoveOnUninstall">
                    <!-- values to persist on the registry -->
                    <RegistryValue Type="integer" Name="SomeIntegerValue" Value="1" KeyPath="yes"/>
                    <RegistryValue Type="string" Value="Default Value"/>
                </RegistryKey>
            </Component>
        </DirectoryRef>
    </Fragment>
</Wix>
```

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

## i18n

The Windows Installer is built using the `en-US` language by default. i18n (shorthand for internationalization) can be configured using the [tauri.bundle.windows.wix.language] property, defining the languages Tauri should build an installer against. You can find the language names to use on the Language-Culture column [here][1].

- Compiling an installer for a single language

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

- Compiling an installer for each language in a list

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

-   Configuring the installer for each language

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
<WixLocalization Culture="en-US" xmlns="http://schemas.microsoft.com/wix/2006/localization">
    <String Id="LaunchApp">Launch MyApplicationName</String>
    <String Id="DowngradeErrorMessage">A newer version of MyApplicationName is already installed.</String>
    <String Id="PathEnvVarFeature">Add the install location of the MyApplicationName executable to the PATH system environment variable. This allows the MyApplicationName executable to be called from any location.</String>
    <String Id="InstallAppFeature">Installs MyApplicationName.</String>
</WixLocalization>
```

:::note
The `WixLocalization` element's `Culture` field must match the configured language.
:::

Currently Tauri references the following locale strings: `LaunchApp`, `DowngradeErrorMessage`, `PathEnvVarFeature` and `InstallAppFeature`. You can define your own strings and reference them on your custom template or fragments with `"!(loc.TheStringId)"`. See the [WiX localization documentation] for more information.

## Code signing

See the [Code signing guide].

[tauri.bundle.windows.wix.skipWebviewInstall]: /docs/api/config/#tauri.bundle.windows.wix.skipWebviewInstall
[official website]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[WiX Toolset v3]: https://wixtoolset.org/documentation/manual/v3/
[here]: https://github.com/tauri-apps/tauri/blob/dev/tooling/bundler/src/bundle/windows/templates/main.wxs
[handlebars]: https://docs.rs/handlebars/latest/handlebars/
[tauri.bundle.windows.wix.template]: /docs/api/config/#tauri.bundle.windows.wix.template
[WiX fragment]: https://wixtoolset.org/documentation/manual/v3/xsd/wix/fragment.html
[tauri.bundle.windows.wix.language]: /docs/api/config/#tauri.bundle.windows.wix.language
[1]: https://docs.microsoft.com/en-us/windows/win32/msi/localizing-the-error-and-actiontext-tables
[WiX localization documentation]: https://wixtoolset.org/documentation/manual/v3/howtos/ui_and_localization/make_installer_localizable.html
[Code signing guide]: ./sign-windows.md
