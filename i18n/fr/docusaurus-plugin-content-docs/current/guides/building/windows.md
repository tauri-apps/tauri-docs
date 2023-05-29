---
sidebar_position: 2
---

import Command from '@theme/Command'

# Installateur Windows

Tauri applications for Windows are either distributed as Microsoft Installers (`.msi` files) using the [WiX Toolset v3][] or starting with Tauri v1.3 as setup executables (`-setup.exe` files) using [NSIS][]. Le CLI Tauri regroupe le binaire de votre application et des ressources supplémentaires. Veuillez noter que les installateurs de `.msi` ne peuvent **être créés que sous Windows** car la compilation croisée ne fonctionne pas encore. Cross-compilation for NSIS installers is experimental and being worked on.

Ce guide fournit des informations sur les options de personnalisation disponibles pour l'installateur.

To build and bundle your whole Tauri application into a single installer simply run the following command:

<Command name="build" shell="powershell"/>

Elle construira votre Frontend, compilera le binaire Rust et récupérera tous les binaires et ressources externes et produira enfin des paquets et des installateurs propres à la plateforme.

## Construction pour 32 bits ou ARM

Le CLI Tauri compile votre exécutable en utilisant l'architecture de votre machine par défaut. En supposant que vous développez sur une machine 64 bits, le CLI produira des applications 64 bits.

If you need to support **32-bit** machines, you can compile your application with a **different** [Rust target][platform support] using the `--target` flag:

```powershell
tauri build --target i686-pc-windows-msvc
```

Par défaut, Rust n'installe que des chaînes de compilation pour la cible de votre machine, donc vous devez d'abord installer la chaîne de compilation Windows 32 bits : `rustup target add i686-pc-windows-msvc`.

Si vous avez besoin de compiler pour **ARM64** , vous devez d'abord installer des outils de compilation supplémentaires. Pour ce faire, ouvrez `Visual Studio Installer`, cliquez sur "Modifier" et dans l'onglet "Composants individuels" installez les outils de compilation "C++ ARM64". Au moment de la rédaction, le nom exact dans VS2022 est `MSVC v143 - VS 2022 C++ ARM64 build tools (Latest)`.  
Vous pouvez maintenant ajouter la cible de Rust avec `rustup target add aarch64-pc-windows-msvc` puis utiliser la méthode mentionnée ci-dessus pour compiler votre application :

```powershell
tauri build --target aarch64-pc-windows-msvc
```

:::info

Only the NSIS target supports ARM64 targets, so if you configured tauri to compile all bundle types you may want to change the above command to `tauri build --target aarch64-pc-windows-msvc --bundle nsis` to only build the NSIS installer.

Note that the installer itself will still be x86 running on the ARM machine via emulation. The app itself will be a native ARM64 binary.

:::

## Prise en charge de Windows 7

By default, the Microsoft Installer (`.msi`) does not work on Windows 7 because it needs to download the WebView2 bootstrapper if not installed (which might fail if TLS 1.2 is not enabled in the operating system). Tauri includes an option to embed the WebView2 bootstrapper (see the [Embedding the WebView2 Bootstrapper](#embedded-bootstrapper) section below). The NSIS based installer (`-setup.exe`) also supports the `downloadBootstrapper` mode on Windows 7.

De plus, pour utiliser l'API Notification dans Windows 7, vous devez activer la fonctionnalité Cargo `windows7-compat` :

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

The installers by default download the WebView2 bootstrapper and executes it if the runtime is not installed. Alternatively, you can embed the bootstrapper, embed the offline installer, or use a fixed WebView2 runtime version. Voir le tableau suivant pour une comparaison entre ces méthodes :

| Méthode d'installation                             | Nécessite une connexion Internet ? | Taille supplémentaire de l'installateur | Notes                                                                                                                         |
|:-------------------------------------------------- |:---------------------------------- |:--------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------- |
| [`downloadBootstrapper`](#downloaded-bootstrapper) | Oui                                | 0 Mo                                    | `Default` <br /> Results in a smaller installer size, but is not recommended for Windows 7 deployment via `.msi` files. |
| [`embedBootstrapper`](#embedded-bootstrapper)      | Oui                                | ~1,8 Mo                                 | Better support on Windows 7 for `.msi` installers.                                                                            |
| [`offlineInstaller`](#offline-installer)           | Non                                | ~127 Mo                                 | Embeds WebView2 installer. Recommended for offline environments.                                                              |
| [`fixedVersion`](#fixed-version)                   | Non                                | ~180 Mo                                 | Embeds a fixed WebView2 version.                                                                                              |
| [`skip`](#skipping-installation)                   | Non                                | 0 Mo                                    | ⚠️ Not recommended <br /> Does not install the WebView2 as part of the Windows Installer.                               |

:::info

On Windows 10 (April 2018 release or later) and Windows 11, the WebView2 runtime is distributed as part of the operating system.

:::

### Téléchargé le programme d’amorçage

C'est le paramètre par défaut pour compiler l'installateur Windows. It downloads the bootstrapper and runs it. Requires an internet connection but results in a smaller installer size. This is not recommended if you're going to be distributing to Windows 7 via `.msi` installers.

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

### Intégré le programme d’amorçage

To embed the WebView2 Bootstrapper, set the [webviewInstallMode][] to `embedBootstrapper`. Cela augmente la taille de l'installateur d'environ 1,8 Mo, mais augmente la compatibilité avec les systèmes Windows 7.

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

### Installateur hors ligne

To embed the WebView2 Bootstrapper, set the [webviewInstallMode][] to `offlineInstaller`. This increases the installer size by around 127MB, but allows your application to be installed even if an internet connection is not available.

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

### Version fixe

L'utilisation du runtime fourni par le système est excellente pour la sécurité car les correctifs de vulnérabilité sur le Web sont gérés par Windows. If you want to control the WebView2 distribution on each of your applications (either to manage the release patches yourself or distribute applications on environments where an internet connection might not be available) Tauri can bundle the runtime files for you.

:::caution

Distributing a fixed WebView2 Runtime version increases the Windows Installer by around 180MB.

:::

1. Download the WebView2 fixed version runtime from [Microsoft's website][download-webview2-runtime]. Dans cet exemple, le nom du fichier téléchargé est `Microsoft.WebView2.FixedVersionRuntime.98.0.1108.50.x64.cab`
2. Extraire le fichier dans le dossier de Tauri :

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

### Ignorer l'installation

You can remove the WebView2 Runtime download check from the installer by setting [webviewInstallMode][] to `skip`. Votre application ne fonctionnera pas si l'utilisateur n'a pas le runtime installé.

:::warning

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

### Remplacer le code d'installation par un fichier WiX personnalisé

The Windows Installer XML defined by Tauri is configured to work for the common use case of simple webview-based applications (you can find it [here][default wix template]). It uses [handlebars][] so the Tauri CLI can brand your installer according to your `tauri.conf.json` definition. If you need a completely different installer, a custom template file can be configured on [`tauri.bundle.windows.wix.template`][].

### Étendre l'installateur avec des fragments WiX

A [WiX fragment][] is a container where you can configure almost everything offered by WiX. Dans cet exemple, nous allons définir un fragment qui écrit deux entrées de registre :

```xml
<?xml version="1.0" encoding="utf-8"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
  <Fragment>
    <!-- Ces entrées de Registre doivent être installées
         à la machine de l’utilisateur -->
    <DirectoryRef Id="TARGETDIR">
      <!-- regroupe les entrées de Registre à installer -->
      <!-- Notez l’identifiant unique que nous fournissons ici -->
      <Component Id="MyFragmentRegistryEntries" Guid="*">
        <!-- La clé de Registre sera dans
             HKEY_CURRENT_USER\Software\MyCompany\MyApplicationName -->
        <!-- Tauri utilise la deuxième partie de l'identifiant
             du bundle comme le nom 'MyCompany'
             (ex. `tauri-apps` in `com.tauri-apps.test`)  -->
        <RegistryKey
          Root="HKCU"
          Key="Software\MyCompany\MyApplicationName"
          Action="createAndRemoveOnUninstall"
        >
          <!-- Les valeurs restes dans le Registre -->
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

Enregistrez le fichier de fragment avec l'extension `.wxs` quelque part dans votre projet et référencez-le sur `tauri.conf.json`:

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

Notez que `ComponentGroup`, `Component`, `FeatureGroup`, `Feature` et `Merge` doivent être référencés sur l'objet `wix` de `tauri.conf.json` dans le `componentGroupRefs`, `componentRefs`, `featureGroupRefs`, `featureRefs` et `mergeRefs` respectivement à inclure dans l'installateur.

## Internationalisation

The NSIS Installer is a multi-language installer, which means you always have a single installer which contains all the selected translations. You can specify which versions to include using the [`tauri.bundle.windows.nsis.languages`](../../api/config.md#nsisconfig.languages) property. A list of languages supported by NSIS is available in [the NSIS GitHub project][]. There are a few [Tauri-specific translations][] required, so if you see untranslated texts feel free to open a feature request in [Tauri's main repo][].

The WiX Installer is built using the `en-US` language by default. Internationalization (i18n) can be configured using the [`tauri.bundle.windows.wix.language`][] property, defining the languages Tauri should build an installer against. You can find the language names to use in the Language-Culture column on [Microsoft's website][localizing the error and actiontext tables].

### Compiling a WiX Installer for a Single Language

Pour créer un seul installateur ciblant une langue spécifique, définissez la valeur `language` avec une chaîne de caractères :

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

Pour compiler un installateur ciblant une liste de langues, utilisez un tableau. Un installateur spécifique pour chaque langue sera créé, avec la clé de langue comme suffixe :

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

Un objet de configuration peut être défini pour chaque langue pour configurer les chaînes de localisation :

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

La propriété `localePath` définit le chemin vers un fichier de langue, un XML configurant la culture de langue :

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

Actuellement, Tauri fait référence aux chaînes locales suivantes : `LaunchApp`, `DowngradeErrorMessage`, `PathEnvVarFeature` et `InstallAppFeature`. Vous pouvez définir vos propres chaînes et les référencer sur votre modèle ou fragments personnalisés avec `"!(loc.TheStringId)"`. See the [WiX localization documentation][] for more information.

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
