# Débogage dans VS Code

This guide will walk you through setting up VS Code for debugging the [Core Process of your Tauri app][].

## Prérequis

Installez l'extension [`vscode-lldb`][].

## Configurer launch.json

Créez un fichier `.vscode/launch.json` et collez-y le contenu JSON ci-dessous :

```json title=".vscode/launch.json"
{
  // Utilisez IntelliSense pour en savoir plus sur les attributs possibles.
  // Survolez pour afficher les descriptions des attributs existants.
  // Pour plus d'informations, visitez : https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2. ",
  "configurations": [
    {
      "type": "lldb",
      "request": "launch",
      "name": "Débogage de la production de Tauri",
      "cargaison": {
        "args": [
          "build",
          "--manifest-path=. src-tauri/Cargo. oml",
          "--no-default-features"
        ]
      },
      // La tâche pour `beforeDevCommand` si elle est utilisée, doit être configurée dans `.vscode/tasks.json`
      "preLaunchTask": "ui:dev"
    },
    {
      "type": "lldb",
      "request": "launch",
      "nom": "Debug de production de Tauri",
      "cargo": {
        "args": ["build", "--release", "--manifest-path=. src-tauri/Cargo. oml"]
      },
      // La tâche pour `beforeBuildCommand` si elle est utilisée, doit être configurée dans `.vscode/tasks.json`
      "preLaunchTask": "ui:build"
    }
  ]
}
```

Cela utilise directement `cargo` pour créer l'application Rust et la charger à la fois en mode développement et en mode production.

Notez qu'il n'utilise pas la CLI Tauri, donc les fonctionnalités CLI exclusives ne sont pas exécutées. Les scripts `beforeDevCommand` et `beforeBuildCommand` doivent être exécutés au préalable ou configurés en tant que tâche dans le champ `preLaunchTask`. Vous trouverez ci-dessous un exemple de fichier `.vscode/tasks.json` qui comporte deux tâches, une pour un `beforeDevCommand` qui génère un serveur de développement et une pour `beforeBuildCommand` :

```json title=".vscode/tasks.json"
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "ui:dev",
      "type": "shell",
      // `dev` keeps running in the background
      // ideally you should also configure a `problemMatcher`
      // see https://code.visualstudio.com/docs/editor/tasks#_can-a-background-task-be-used-as-a-prelaunchtask-in-launchjson
      "isBackground": true,
      // change this to your `beforeDevCommand`:
      "command": "yarn",
      "args": ["dev"]
    },
    {
      "label": "ui:build",
      "type": "shell",
      // change this to your `beforeBuildCommand`:
      "command": "yarn",
      "args": ["build"]
    }
  ]
}
```

Vous pouvez maintenant définir des points d'arrêt dans `src-tauri/src/main.rs` ou tout autre fichier Rust et commencer le débogage en appuyant sur `F5`.

[`vscode-lldb`]: https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb

[Core Process of your Tauri app]: ../../references/architecture/process-model.md#the-core-process