---
title: Débogage d'une application
sidebar_label: 'Débogage d''une app (3/4)'
---

import Command from '@theme/Command'

Avec toutes les composantes mobiles de Tauri, vous pouvez rencontrer un problème qui nécessite un débogage. Il existe une série d'endroits où le détail des erreurs peut être affiché, et Tauri inclut quelques outils pour faciliter le processus de débogage.

## Console Rust

Lorsque vous lancez une application Tauri en mode développement, vous disposez d'une console Rust. Elle se trouve dans le terminal où vous avez exécuté `tauri dev` par exemple. Vous pouvez utiliser le code suivant pour afficher quelque chose sur cette console à partir d'un fichier Rust :

```rust
println!("Message from Rust: {}", msg);
```

Il peut arriver que vous ayez une erreur dans votre code Rust, et le compilateur Rust peut vous donner beaucoup d'informations. Si, par exemple, `tauri dev` plante, vous pouvez le relancer comme ceci sur Linux et macOS :

```sh
RUST_DEBUG=1 tauri dev
```

ou comme ça sur MS Windows :

```sh
set RUST_DEBUG=1
tauri dev
```

Vous obtiendrez ainsi une trace d'appels plus détaillée. D'une manière générale, le compilateur Rust vous aidera en vous donnant des informations détaillées sur le problème, telles que :

```
error[E0425]: cannot find value `sun` in this scope
  --> src/main.rs:11:5
   |
11 |     sun += i.to_string().parse::<u64>().unwrap();
   |     ^^^ help: a local variable with a similar name exists: `sum`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0425`.
```

## Console JS Webview

### Linux & macOS

Faites un clic droit dans la webview, et choisissez `Inspect Element`. Cela ouvrira un inspecteur web similaire aux outils de développement Chrome ou Firefox auxquels vous êtes habitués.

### Windows

Si vous activez le back-end Edge (`tauri = { version = "*", features = ["edge"] }` dans `src-tauri/Cargo.toml`) vous pouvez utiliser l'application autonome Devtools d'Edge.

Cela vous permet de connecter les outils de développement à votre fenêtre Web générée par Rust comme s'il s'agissait d'une fenêtre Edge normale. (Merci à @dkaste d'avoir fourni la solution [au problème](https://github.com/Boscop/web-view/issues/88#issuecomment-552464137)).

Si vous utilisez le MSHTML, vous devrez probablement utiliser le firebug :

```html
<script
  type="text/javascript"
  src="https://getfirebug.com/firebug-lite.js"
></script>
```

Voir [ce fil de discussion](https://github.com/zserge/webview/blob/master/README.md#debugging-and-development-tips) pour plus d'information.

## Créer une version de débogage

Il y a des cas où vous pourriez avoir besoin d'inspecter la console JS dans le bundle final, donc Tauri fournit une commande simple pour créer un bundle de débogage :


<Command name="build --debug" />

Comme pour les processus de dev et de compilé, la première fois que vous l'exécutez, cela prendra plus de temps que les exécutions suivantes. La compilation finale de l'application sera placée dans `src-tauri/target/debug/bundle`. Cette application sera livrée avec la console de développement activée.

## Exécuter l'application depuis le terninal

Vous pouvez également lancer une application compilée à partir du terminal, qui vous donnera également les messages du compilateur Rust (en cas d'erreurs) ou vos messages `println`. Il suffit de trouver le fichier `src-tauri/target/(release ou debug)/app` et soit de le double-cliquer (mais attention, le terminal se ferme en cas d'erreur), soit de le lancer directement dans votre console.
