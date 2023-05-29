---
sidebar_position: 1
toc_max_heading_level: 2
---

import { colors } from '@theme/Mermaid'
import { Mermaid } from 'mdx-mermaid/Mermaid';

# Architecture de Tauri

## Introduction

Tauri est un polyglot et une boîte à outils générique très compostable qui permet aux ingénieurs de faire une grande variété d'applications. Il est utilisé pour créer des applications pour les ordinateurs de bureau en utilisant une combinaison d'outils Rust et HTML rendu dans une Webview. Les applications construites avec Tauri peuvent expédier avec n'importe quel nombre de morceaux d'une API JS optionnelle et d'une API Rust afin que les webviews puissent contrôler le système via le passage des messages. Developers can extend the default API with their own functionality and bridge the Webview and Rust-based backend easily.

Tauri apps can have [custom menus](../../guides/features/menu.md) and [tray-type interfaces](../../guides/features/system-tray.md). They can be [updated](../../guides/distribution/updater.md) and are managed by the user's operating system as expected. They are [very small](../benchmarks.md) because they use the OS's webview. Ils ne livrent pas de runtime puisque le binaire final est compilé à partir de Rust. This makes the [reversing of Tauri apps not a trivial task](./security.md).

### Ce que Tauri n'est pas

Tauri n'est pas un gestionnaire de noyau léger. Instead, it directly uses [WRY](#wry) and [TAO](#tao) to do the heavy lifting in making system calls to the OS.

Tauri n'est pas une machine virtuelle ou un environnement virtualisé. Instead, it is an application toolkit that allows making Webview OS applications.

## Écosystème de base

<!-- prettier-ignore-start -->

<Mermaid chart={`graph TB; subgraph Core direction LR tauri TB tauri-runtime tauri-macros tauri-utils end %% This section should be organized from top to bottom tauri-build tauri-codegen tauri-runtime-wry tauri-runtime-wry -.-> WRY subgraph Upstream direction LR WRY TAO WRY -.-> TAO end style Core fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style Upstream fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px style tauri fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px `} />

<!-- prettier-ignore-end -->

### [tauri](https://github.com/tauri-apps/tauri/tree/dev/core/tauri)

C'est la grande crate qui tient tout ensemble. Il intègre les runtimes, macros, utilitaires et API dans un seul produit final. It reads the [`tauri.conf.json`](../../api/config.md) file at compile time to bring in features and undertake the actual configuration of the app (and even the `Cargo.toml` file in the project's folder). It handles script injection (for polyfills / prototype revision) at runtime, hosts the API for systems interaction, and even manages the updating process.

### [tauri-runtime](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime)

The glue layer between Tauri itself and lower-level webview libraries.

### [tauri-macros](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-macros)

Crée des macros pour le contexte, le gestionnaire et les commandes en tirant parti de la crate [`tauri-codegen`](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen).

### [tauri-utils](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-utils)

Le code commun qui est réutilisé à de nombreux endroits et offre des utilitaires utiles comme l'analyse des fichiers de configuration, la détection des triples de plate-forme, l'injection du CSP, et la gestion des ressources.

### [tauri-build](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-build)

Applies the macros at build-time to rig some special features needed by `cargo`.

### [tauri-codegen](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-codegen)

Embeds, hashes, and compresses assets, including icons for the app as well as the system tray. Parses [`tauri.conf.json`](../../api/config.md) at compile time and generates the Config struct.

### [tauri-runtime-wry](https://github.com/tauri-apps/tauri/tree/dev/core/tauri-runtime-wry)

This crate opens up direct systems-level interactions specifically for WRY, such as printing, monitor detection, and other windowing-related tasks.

## Tauri Tooling

### [API](https://github.com/tauri-apps/tauri/tree/dev/tooling/api) (JavaScript / TypeScript)

A typescript library that creates `cjs` and `esm` JavaScript endpoints for you to import into your frontend framework so that the Webview can call and listen to backend activity. Livré également en pur typescript, car pour certains frameworks, c'est plus optimal. Il utilise le message transmettant des webviews à leurs hôtes.

### [Bundler](https://github.com/tauri-apps/tauri/tree/dev/tooling/bundler) (Rust / Shell)

Une bibliothèque qui construit une application Tauri pour la plate-forme qu'elle détecte ou qui est dite. Actuellement supporte macOS, Windows et Linux - mais dans un avenir proche prendra également en charge les plates-formes mobiles. Peut être utilisé en dehors des projets Tauri.

### [cli.rs](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli) (Rust)

Cet exécutable Rust fournit l'interface complète à toutes les activités requises pour lesquelles le CLI est requis. Il fonctionne sur macOS, Windows et Linux.

### [cli.js](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli/node) (JavaScript)

Enveloppe autour de [`cli.rs`](https://github.com/tauri-apps/tauri/blob/dev/tooling/cli) à l'aide de [`napi-rs`](https://github.com/napi-rs/napi-rs) pour produire des paquets npm pour chaque plate-forme.

### [create-tauri-app](https://github.com/tauri-apps/create-tauri-app) (JavaScript)

Un toolkit qui permettra aux équipes rapidement de créer nouveau projet `tauri-apps` en utilisant le framework frontend de leur choix (à condition qu'il ait été configuré).

## Upstream Crates

The Tauri-Apps organisation maintains two "upstream" crates from Tauri, namely TAO for creating and managing application windows, and WRY for interfacing with the Webview that lives within the window.

### [TAO](https://github.com/tauri-apps/tao)

Cross-platform application window creation library in Rust that supports all major platforms like Windows, macOS, Linux, iOS and Android. Written in Rust, it is a fork of [winit](https://github.com/rust-windowing/winit) that we have extended for our own needs - like menu bar and system tray.

### [WRY](https://github.com/tauri-apps/wry)

WRY is a cross-platform WebView rendering library in Rust that supports all major desktop platforms like Windows, macOS, and Linux. Tauri uses WRY as the abstract layer responsible to determine which webview is used (and how interactions are made).

## Outil supplémentaire

### [tauri-action](https://github.com/tauri-apps/tauri-action)

GitHub workflow that builds Tauri binaries for all platforms. Even allows creating a (very basic) Tauri app even if Tauri is not set up.

### [tauri-vscode](https://github.com/tauri-apps/tauri-vscode)

This project enhances the Visual Studio Code interface with several nice-to-have features.

### [vue-cli-plugin-tauri](https://github.com/tauri-apps/vue-cli-plugin-tauri)

Allows you to very quickly install Tauri in a vue-cli project.

## Plugins

[Tauri Plugin Guide](../../guides/features/plugin.md)

Generally speaking, plugins are authored by third parties (even though there may be official, supported plugins). A plugin generally does 3 things:

1. Enables Rust code to do "something".
2. Provides interface glue to make it easy to integrate into an app.
3. Provides a JavaScript API for interfacing with the Rust code.

Here are some examples of Tauri Plugins:

- [tauri-plugin-sql](https://github.com/tauri-apps/tauri-plugin-sql)
- [tauri-plugin-stronghold](https://github.com/tauri-apps/tauri-plugin-stronghold)
- [tauri-plugin-authenticator](https://github.com/tauri-apps/tauri-plugin-authenticator)

## Licence

Tauri itself is licensed under MIT or Apache-2.0. If you repackage it and modify any source code, it is your responsibility to verify that you are complying with all upstream licenses. Tauri is provided AS-IS with no explicit claim for suitability for any purpose.

Here you may peruse our [Software Bill of Materials](https://app.fossa.com/projects/git%2Bgithub.com%2Ftauri-apps%2Ftauri).

## Next Steps

[Your First Tauri App](../../guides/getting-started/setup/README.mdx)

[Development Cycle](../../guides/development/development-cycle.md)

[Publishing](../../guides/distribution/publishing.md)

[Mise à jour](../../guides/distribution/updater.md)
