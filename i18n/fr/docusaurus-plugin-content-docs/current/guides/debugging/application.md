import Command from '@theme/Command'

# Débogage de l'application

Avec toutes les pièces mobiles de Tauri, vous pouvez rencontrer un problème qui nécessite un débogage. Il existe de nombreux endroits où les détails des erreurs sont imprimés, et Tauri inclut des outils pour rendre le processus de débogage plus simple.

## Console Rust

Le premier endroit où rechercher les erreurs est dans la console Rust. C'est dans le terminal où vous avez exécuté, par exemple, `tauri dev`. Vous pouvez utiliser le code suivant pour imprimer quelque chose sur cette console à partir d'un fichier Rust :

```rust
println!("Message de Rust: {}", msg);
```

Parfois, vous pouvez avoir une erreur dans votre code Rust, et le compilateur Rust peut vous donner beaucoup d'informations. Si, par exemple, `tauri dev` plante, vous pouvez le relancer comme ceci sous Linux et macOS :

```shell
RUST_BACKTRACE=1 tauri dev
```

ou comme ceci sous Windows :

```shell
set RUST_BACKTRACE=1
tauri dev
```

Cette commande vous donne une trace de pile granulaire. D'une manière générale, le compilateur Rust vous aide en vous donnant des informations détaillées sur le problème, telles que :

```
error[E0425]: cannot find value `sun` in this scope
  --> src/main.rs:11:5
   |
11 |     sun += i.to_string().parse::<u64>().unwrap();
   |     ^^^ help: a local variable with a similar name exists: `sum`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0425`.
```

## Console WebView

Faites un clic droit dans la WebView et choisissez `Inspecter l'élément`. Cela ouvre un inspecteur Web similaire aux outils de développement Chrome ou Firefox auxquels vous êtes habitué. Vous pouvez également utiliser le raccourci `Ctrl + Shift + i` sous Linux et Windows, et `Commande + Option + i` sous macOS pour ouvrir l'inspecteur.

L'inspecteur est spécifique à la plate-forme, rendant le webkit2gtk WebInspector sur Linux, l'inspecteur de Safari sur macOS et Microsoft Edge DevTools sur Windows.

### Ouverture de Devtools par programmation

Vous pouvez contrôler la visibilité de la fenêtre d'inspection en utilisant les fonctions [`Window::open_devtools`][] et [`Window::close_devtools`][] :

```rust
use tauri::Manager;
tauri::Builder::default()
  .setup(|app| {
    #[cfg(debug_assertions)] // n'incluez ce code que sur les versions de débogage
    
    {
      let window = app.get_window("main").unwrap();
      window.open_devtools();
      window.close_devtools();
    }
    Ok(())
  });
```

### Utilisation de l'inspecteur en production

Par défaut, l'inspecteur n'est activé que dans les versions de développement et de débogage, sauf si vous l'activez avec une fonctionnalité Cargo.

#### Créer une version de débogage

Pour créer une version de débogage, exécutez la commande `tauri build --debug`.

<Command name="build --debug" />

Comme les processus de construction et de développement normaux, la construction prend un certain temps la première fois que vous exécutez cette commande, mais est beaucoup plus rapide lors des exécutions suivantes. L'application groupée finale a la console de développement activée et est placée dans `src-tauri/target/debug/bundle`.

Vous pouvez également exécuter une application construite à partir du terminal, vous donnant les notes du compilateur Rust (en cas d'erreurs) ou vos messages `println`. Accédez au fichier `src-tauri/target/(release|debug)/[app name]` et exécutez-le directement dans votre console ou double-cliquez sur l'exécutable lui-même dans le système de fichiers (remarque : la console se ferme en cas d'erreur avec cette méthode).

#### Activer la fonctionnalité Devtools

:::warning

L'API devtools est privée sur macOS. L'utilisation d'API privées sur macOS empêche votre application d'être acceptée sur l'App Store.

:::

Pour activer les devtools dans les versions de production, vous devez activer la fonctionnalité `devtools` Cargo dans le fichier `src-tauri/Cargo.toml` :

```toml
[dependencies]
tauri = { version = "...", features = ["...", "devtools"] }
```

## Débogage du processus principal

Le processus Core est alimenté par Rust, vous pouvez donc utiliser GDB ou LLDB pour le déboguer. Vous pouvez suivre le guide [Débogage dans VS Code][] pour apprendre à utiliser l'extension LLDB VS Code pour déboguer le processus principal des applications Tauri.

[Débogage dans VS Code]: ./vs-code.md
[`Window::open_devtools`]: https://docs.rs/tauri/1/tauri/window/struct.Window.html#method.open_devtools
[`Window::close_devtools`]: https://docs.rs/tauri/1/tauri/window/struct.Window.html#method.close_devtools
