---
title: Écrire des plugins pour Tauri
---

import Alert from '@theme/Alert'

<Alert title="Note" icon="info-alt">
Tauri proposera bientôt des kits de démarrage, ce qui simplifiera le développement d'un Plugin crate.

Pour l'instant, il est recommandé de suivre les [plugins Tauri officiels] (#official-tauri-plugins).
</Alert>

Le système de plugin Tauri a été introduit dans [tauri v0.8.0](https://docs.rs/tauri/0.8.0/tauri/). Les plugins vous permettent de vous raccorder au cycle de vie de l'application Tauri et d'introduire de nouvelles commandes.

## Écrire un plugin

Pour écrire un plugin, il suffit d'implémenter le trait `tauri::plugin::Plugin` :

```rust
use tauri::{plugin::Plugin, Webview};

struct MyAwesomePlugin {
  // état du plugin, champs de configuration
}

impl MyAwesomePlugin {
  // vous pouvez ajouter des champs de configuration ici,
  // voir https://doc.rust-lang.org/1.0.0/style/ownership/builders.html
  pub fn new() -> Self {
    Self {}
  }
}

impl Plugin for MyAwesomePlugin {
  /// Le script JS à évaluer à l'initialisation.
  /// Utile lorsque votre plugin est accessible par une `fenêtre`
  /// ou doit effectuer une tâche JS sur l'initialisation de l'application
  /// par exemple, "window.localStorage = { ... l'interface du plugin }"
  fn init_script(&self) -> Option<String> {
    None
  }

  /// Rappel invoqué lors de la création du webview.
  fn created(&self, webview: &mut Webview) {}

  /// Rappel invoqué lorsque le webview est prêt.
  fn ready(&self, webview: &mut Webview) {}

  fn extend_api(&self, webview: &mut Webview, payload: &str) -> Result<bool, String> {
    // étendre l'API ici, en suivant le guide de commande
    // si vous ne comptez pas l'utiliser, vous pouvez simplement le retirer
  }
}
```

Notez que chaque fonction sur le trait `Plugin` est facultative.

## Utilisation d'un plugin

Pour utiliser un plugin, il suffit de passer une instance de la structure `MyAwesomePlugin` à la méthode `plugin` de l'application :

```rust
fn main() {
  let awesome_plugin = MyAwesomePlugin::new();
  tauri::AppBuilder::new()
    .plugin(awesome_plugin)
    .build()
    .run();
}
```

## Plugins officiels de Tauri

- [Logging (WIP)](https://github.com/tauri-apps/tauri-log-plugin-rs)
