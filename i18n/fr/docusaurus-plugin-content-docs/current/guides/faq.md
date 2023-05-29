---
title: Questions fréquemment posées
sidebar_position: 10
description: Correctifs pour les problèmes courants
---

## Comment puis-je utiliser des modifications Tauri non publiées ?

Pour utiliser Tauri de GitHub (version de pointe), vous devez modifier votre fichier `Cargo.toml` et mettre à jour votre CLI et votre API.

<details>
  <summary>Tirer la caisse Rust de la source</summary>

Append this to your `Cargo.toml` file:

```toml title=Cargo.toml
[patch.crates-io]
tauri = { git = "https://github.com/tauri-apps/tauri", branch = "dev" }
tauri-build = { git = "https://github.com/tauri-apps/tauri", branch = "dev" }
```

This will force all your dependencies to use `tauri` and `tauri-build` from Git instead of crates.io.

</details>

<details>
  <summary>Utilisation du CLI Tauri à partir de la source</summary>

If you are using the Cargo CLI, you can install it directly from GitHub:

```shell
cargo install --git https://github.com/tauri-apps/tauri --branch dev tauri-cli
```

If you are using the `@tauri-apps/cli` package, you will need to clone the repo and build it:

```shell
git clone https://github.com/tauri-apps/tauri
git checkout dev
cd tauri/tooling/cli/node
yarn
yarn build
```

To use it, run directly with node:

```shell
node /path/to/tauri/tooling/cli/node/tauri.js dev
node /path/to/tauri/tooling/cli/node/tauri.js build
```

Alternatively, you can run your app with Cargo directly:

```shell
cd src-tauri
cargo run --no-default-features # instead of tauri dev
cargo build # instead of tauri build - won't bundle your app though
```

</details>

<details>
  <summary>Utilisation de l'API Tauri à partir de la source</summary>

It is recommended to also use the Tauri API package from source when using the Tauri crate from GitHub (though it might not be needed). To build it from source, run the following script:

```shell
git clone https://github.com/tauri-apps/tauri
git checkout dev
cd tauri/tooling/api
yarn
yarn build
```

Now you can link it using yarn:

```shell
cd dist
yarn link
cd /path/to/your/project
yarn link @tauri-apps/api
```

Or you can change your package.json to point to the dist folder directly:

```json title=package.json
{
  "dependencies": {
    "@tauri-apps/api": "/path/to/tauri/tooling/api/dist"
  }
}
```

</details>

## Dois-je utiliser Node ou Cargo ? {#node-or-cargo}

Même si l'installation de la CLI via Cargo est l'option préférée, elle doit compiler tout le binaire à partir de zéro lorsque vous l'installez. Si vous êtes dans un environnement CI ou sur une machine très lente, il vaut mieux choisir une autre méthode d'installation.

Comme la CLI est écrite en Rust, elle est naturellement disponible via [crates.io][] et installable avec Cargo.

Nous compilons également la CLI en tant qu'addon Node.js natif et la distribuons [via npm][]. Cela présente plusieurs avantages par rapport à la méthode d'installation Cargo :

1. La CLI est pré-compilée, ce qui permet des temps d'installation beaucoup plus rapides
2. You can pin a specific version in your package.json file
3. If you develop custom tooling around Tauri, you can import the CLI as a regular JavaScript module
4. You can install the CLI using a JavaScript manager

## Liste de navigateurs recommandés

Nous vous recommandons d'utiliser `es2021`, les `3 dernières versions de Chrome` et `safari13` pour votre liste de navigateurs et vos cibles de compilation. Tauri exploite le moteur de rendu natif du système d'exploitation (WebKit sur macOS, WebView2 sur Windows et WebKitGTK sur Linux).

## Créer un conflit avec Homebrew sous Linux

Homebrew sur Linux inclut son propre `pkg-config` (un utilitaire pour trouver des bibliothèques sur le système). Cela peut provoquer des conflits lors de l'installation du même package `pkg-config` pour Tauri (généralement installé via le gestionnaire de packages comme `apt`). When you try to build a Tauri app it will try to invoke `pkg-config` and will end up invoking the one from Homebrew. If Homebrew wasn't used to install Tauri's dependencies, this can cause errors.

Errors will _usually_ contain messages along the lines of `error: failed to run custom build command for X` - `Package Y was not found in the pkg-config search path.`. Note that you may see similar errors if the required dependencies are not installed at all.

There are two solutions to this issue:

1. [Uninstall Homebrew][]
2. Set the `PKG_CONFIG_PATH` environment variable to point to the correct `pkg-config` before building a Tauri app

[crates.io]: https://crates.io/crates/tauri-cli
[via npm]: https://www.npmjs.com/package/@tauri-apps/cli
[Uninstall Homebrew]: https://docs.brew.sh/FAQ#how-do-i-uninstall-homebrew
