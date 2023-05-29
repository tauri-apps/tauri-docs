---
sidebar_position: 3
---

# Fichiers de configuration

Puisque Tauri est une boîte à outils pour construire des applications, il peut y avoir de nombreux fichiers pour configurer les paramètres du projet. Certains fichiers communs que vous pouvez utiliser sont `tauri.conf.json`, `package.json` et `Cargo.toml`. Nous vous expliquons brièvement chacun sur cette page pour vous aider à vous orienter dans la bonne direction pour quel fichier modifier.

## Tauri Config

Le fichier peut être soit `tauri.conf.json`, `tauri.conf.json5`, ou `Tauri.toml`. La valeur par défaut est `tauri.conf.json`. Voir la note ci-dessous pour plus d'informations.

C'est le fichier utilisé par le processus Tauri. Vous pouvez définir les paramètres de construction (tels que la [commande exécutée avant `tauri build`][before-build-command] ou [`tauri dev`][before-dev-command]), définir le [nom et version de votre application][package-config], [contrôler le processus Tauri][tauri-config] et configurer les paramètres du plug-in. Vous pouvez trouver toutes les options dans le [dans la référence de l'API `tauri.conf.json ` ][].

:::note

Le format de configuration par défaut de Tauri est `.json`. Le `.json5` ou le format `.toml` peut être activé en ajoutant le drapeau de fonctionnalité `config-json5` ou `config-toml` (respectivement) aux `tauri` et les dépendances de `tauri-build` dans `Cargo.toml`. Notez que le format `.toml` n'est disponible depuis Tauri 1.1.

```toml title=Cargo.toml
[build-dependencies]
// highlight-next-line
tauri-build = { version = "1.0.0", features = [ "config-json5" ] }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
// highlight-next-line
tauri = { version = "1.0.0", features = [ "api-all", "config-json5" ] }
```

La structure et les valeurs sont les mêmes dans tous les formats, cependant, la mise en forme doit être cohérente avec le format du fichier respectif.

:::

## `Cargo.toml`

Le fichier manifeste de Cargo est utilisé pour déclarer des crates Rust que votre application dépend, des métadonnées de votre application et d'autres fonctionnalités liées à la Rust. Si vous n'avez pas l'intention de faire du développement backend en utilisant Rust pour votre application, il se peut que vous ne le modifiiez pas beaucoup, mais il est important de savoir qu'il existe et ce qu'il fait.

Ci-dessous, un exemple de fichier `Cargo.toml` minimale pour un projet Tauri :

```toml title=Cargo.toml
[package]
name = "app"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
license = ""
repository = ""
default-run = "app"
edition = "2021"
rust-version = "1.57"

[build-dependencies]
tauri-build = { version = "1.0.0" }

[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
tauri = { version = "1.0.0", features = [ "api-all" ] }

[features]
# par défaut, Tauri fonctionne en mode production
# lorsque `tauri dev` s'exécute, il est exécuté avec `cargo run --no-default-features` si `devPath` est une URL
default = [ "custom-protocol" ]
# cette fonctionnalité est utilisée pour les versions de production où `devPath` pointe vers le système de fichiers
# NE PAS supprimer ceci
custom-protocol = [ "tauri/custom-protocol" ]
```

Les parties les plus importantes à noter sont les dépendances `tauri-build` et `tauri`. Généralement, ils doivent tous les deux être sur les dernières versions mineures comme Tauri CLI, mais ce n'est pas strictement requis. Si vous rencontrez des problèmes en essayant d'exécuter votre application, vous devriez vérifier que toutes les versions Tauri (`tauri` et `tauri-cli`) sont sur les dernières versions pour leurs versions mineures respectives.

Les numéros de version des crates utilisent [le versioning sémantique][]. Exécuter `cargo update` va tirer les dernières versions compatibles Semver disponibles de toutes les dépendances. Par exemple, si vous spécifiez `1.0.0` comme version pour `tauri-build`, Cargo détectera et téléchargera la version `1.0.4` car il s'agit la dernière version compatible Semver disponible. Tauri mettra à jour le numéro de version principal chaque fois qu'un changement est introduit, ce qui signifie que vous devriez toujours être capable de mettre à jour en toute sécurité vers les dernières versions mineures et patchs sans craindre que votre code ne soit cassé.

Si vous voulez utiliser une version de crate spécifique, vous pouvez utiliser des versions exactes à la place en préfixant `=` au numéro de version de la dépendance:

```
tauri-build = { version = "=1.0.0" }
```

Une autre chose à noter est la partie `features=[]` de la dépendance `tauri`. Exécuter `tauri dev` et `tauri build` gèrera automatiquement les fonctionnalités à activer dans votre projet en fonction des propriétés `"allowlist"` que vous avez définies dans `tauri.conf.json`.

Lorsque vous construisez votre application, un fichier `Cargo.lock` est produit. Ce fichier est principalement utilisé pour s'assurer que les mêmes dépendances sont utilisées sur toutes les machines pendant le développement (similaire à `yarn.lock` ou `package-lock.json` dans Node.js). Puisque vous développez une application Tauri, ce fichier doit être validé dans votre référentiel source (seules les bibliothèques Rust doivent omettre de valider ce fichier).

Pour en savoir plus sur `Cargo.toml` vous pouvez en lire plus dans la [documentation officielle][cargo-manifest].

## `package.json`

Ceci est le fichier de package utilisé par Node.js. Si le frontend d'une application Tauri est développé à l'aide de technologies basées sur Node.js(comme `npm`, `yarn`, ou `pnpm`) ce fichier est utilisé pour configurer les dépendances du frontend et les scripts.

Un exemple de fichier `package.json` d'un projet Tauri pourrait ressembler quelque peu à ceci :

```json title=package.json
{
  "scripts": {
    "dev": "command-for-your-framework",
    "tauri": "tauri"
  },
  "dependencies": {
    "@tauri-apps/api": "^1.0",
    "@tauri-apps/cli": "^1.0"
  }
}
```

Il est courant d'utiliser la section `"scripts"` pour stocker la commande utilisée pour lancer le frontend utilisé par votre application Tauri. Le fichier ci-dessus spécifie la commande `dev` que vous pouvez exécuter en utilisant `yarn dev` ou `npm run dev` pour démarrer le framework frontend.

L'objet dépendances spécifie quelles dépendances Node.js devrait être téléchargé lorsque vous exécutez `yarn` ou `npm install` (dans ce cas, le CLI et l'API Tauri).

En plus du fichier `package.json` vous pouvez voir un fichier `yarn.lock` ou un fichier `package-lock.json`. Ces fichiers aident à s'assurer que lorsque vous téléchargerez les dépendances plus tard, vous obtiendrez exactement les mêmes versions que celles que vous avez utilisées pendant le développement (similaire à `Cargo.lock` en Rust).

Pour en savoir plus sur `package.json` , vous pouvez lire la [documentation officielle][npm-package].

[dans la référence de l'API `tauri.conf.json ` ]: ../api/config.md
[before-build-command]: ../api/config.md#buildconfig.beforebuildcommand
[le versioning sémantique]: https://semver.org
[cargo-manifest]: https://doc.rust-lang.org/cargo/reference/manifest.html
[npm-package]: https://docs.npmjs.com/cli/v8/configuring-npm/package-json
[before-dev-command]: ../api/config.md#buildconfig.beforedevcommand
[package-config]: ../api/config#packageconfig
[tauri-config]: ../api/config#tauriconfig
