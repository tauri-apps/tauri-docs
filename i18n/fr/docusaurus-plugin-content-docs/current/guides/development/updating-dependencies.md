---
sidebar_position: 3
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Mise à jour des dépendances

## Mettre à jour les packages npm

Si vous utilisez le package `tauri` :

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
yarn upgrade @tauri-apps/cli @tauri-apps/api --latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
yarn up @tauri-apps/cli @tauri-apps/api
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm update @tauri-apps/cli @tauri-apps/api --latest
```

  </TabItem>
</Tabs>

Vous pouvez également détecter la dernière version de Tauri sur la ligne de commande, en utilisant :

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm outdated @tauri-apps/cli
```

  </TabItem>
  <TabItem value="Yarn">

```shell
yarn outdated @tauri-apps/cli
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm outdated @tauri-apps/cli
```

  </TabItem>
</Tabs>

Sinon, si vous utilisez l'approche `vue-cli-plugin-tauri` :

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm install vue-cli-plugin-tauri@latest
```

  </TabItem>
  <TabItem value="Yarn Classic">

```shell
yarn upgrade vue-cli-plugin-tauri --latest
```

  </TabItem>
  <TabItem value="Yarn Berry">

```shell
yarn up vue-cli-plugin-tauri
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm update vue-cli-plugin-tauri --latest
```

  </TabItem>
</Tabs>

## Mettre à jour les packages Cargo

Vous pouvez vérifier les packages obsolètes avec [`cargo outdated`][] ou sur les pages crates.io : [tauri][] / [tauri-build][].

Accédez à `src-tauri/Cargo.toml` et remplacez `tauri` et `tauri-build` par

```toml
[build-dependencies]
tauri-build = "%version%"

[dependencies]
tauri = { version = "%version%" }
```

où `%version%` est le numéro de version correspondant ci-dessus. <!-- TODO: (You can just use the `MAJOR.MINOR`) version, like `0.9`. -->

Ensuite, procédez comme suit :

```shell
cd src-tauri
cargo update
```

Vous pouvez également exécuter la commande `cargo upgrade` fournie par [cargo-edit][] qui fait tout cela automatiquement.

[`cargo outdated`]: https://github.com/kbknapp/cargo-outdated
[tauri]: https://crates.io/crates/tauri/versions
[tauri-build]: https://crates. io/crates/tauri-build/versions
[cargo-edit]: https://github.com/killercup/cargo-edit
