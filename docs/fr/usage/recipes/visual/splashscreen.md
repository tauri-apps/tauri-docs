---
title: Écran de démarrage
---

import Link from '@docusaurus/Link'

Le chargement d'une application pour la première fois peut prendre du temps. Faire attendre les utilisateurs sans aucune indication de progression est néfaste pour votre UX. Tauri vous permet de définir un écran de démarrage personnalisé, un espace réservé qui sera affiché jusqu'à ce que votre application ait fini de se charger.

Pour définir un écran de démarrage, vous pouvez appeler la méthode `splashscreen_html` comme suit :

```rust title=src-tauri/main.rs
tauri::AppBuilder::new()
  // The splashscreen is declared
  .splashscreen_html("<div>L'application charge...</div>")
  .setup(move |webview, _| {
    let handle = webview.handle();
    // The splashscreen is removed
    tauri::close_splashscreen(&handle);
  })
  .build()
  .run();
```

La méthode `.splashscreen_html` accepte une chaîne contenant des éléments HTML qui seront rendus.

En savoir plus:

- <link to="/docs/api/rust/tauri/struct.AppBuilder#methods" />
  AppBuilder::splashscreen_html</Link>

- <link to="/docs/api/rust/tauri/fn.close_splashscreen" />
  close_splashscreen</Link>
