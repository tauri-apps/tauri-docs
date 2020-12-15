---
title: Créez votre propre CLI
---

import Alert from '@theme/Alert'

Tauri permet à votre application d'avoir un CLI via <a href="https://github.com/clap-rs/clap" target="_blank">clap</a>, un analyseur robuste d'arguments en ligne de commande. Avec une définition CLI simple dans votre fichier `tauri.conf.json`, vous pouvez définir votre interface et lire les arguments qui correspondent en JavaScript et/ou en Rust.

## Configuration de base

Dans le fichier `tauri.conf.json` figure la structure permettant de configurer l'interface :

```js title=src-tauri/tauri.conf.json
{
  "tauri": {
    "cli": {
      "description": "", // Description succinte de la commande affichée par l'aide
      "longDescription": "", // Description longue de la commande affichée par l'aide
      "beforeHelp": "", // Contenu à afficher avant le texte de l'aide
      "afterHelp": "", // Contenu à afficher après le texte de l'aide
      "args": [], // Liste des arguments de la commande, ceci sera expliqué plus tard
      "subcommands": {
        "subcommand-name": {
          // Configure une sous-commande accessible
          // avec `$ ./app nom-sous-commande --arg1 --arg2 --etc`
          // configuration comme ci-dessus, avec "description", "args", etc.
        }
      }
    }
  }
}
```

<Alert title="Note">
  Toutes les configurations JSON sont uniquement des échantillons, beaucoup de champs ont été omis dans un soucis de clarté.
</Alert>

## Ajout d'arguments

Le tableau `args` représente la liste d'arguments acceptée par sa commande ou sa sous-commande. Vous pouvez trouver plus de détails sur la manière de les configurer <a href="/docs/api/config#tauri">ici</a>.

### Arguments positionnels

Un argument positionnel est identifié par ça position dans la liste d'arguments. Avec la configuration ci-dessous :

```json title=src-tauri/tauri.conf.json:tauri.cli
{
  "args": [
    {
      "name": "source",
      "index": 1
    },
    {
      "name": "destination",
      "index": 2
    }
  ]
}
```

Les utilisateurs peuvent démarrer votre application avec `$ ./app tauri.txt dest.txt` et le mapping des arguments définira `source` en `"tauri.txt"` et `destination` en `"dest.txt"`.

### Arguments nommés

Un argument nommé est un couple (clé, valeur) ou la clé identifie la valeur. Avec la configuration ci-dessous :

```json title=src-tauri/tauri.conf.json:tauri.cli
{
  "args": [
    {
      "name": "type",
      "short": "t",
      "takesValue": true,
      "multiple": true,
      "possibleValues": ["foo", "bar"]
    }
  ]
}
```

Les utilisateurs peuvent démarrer votre application avec `$ ./app --type foo bar`, `$ ./app -t foo -t bar` ou `$ ./app --type=foo,bar` ainsi l'argument définira `type` en `["foo", "bar"]`.

### Paramètre d'argument

Un paramètre d'argument est une clé autonome qui par sa présence ou absence donne une information à votre application. Avec la configuration ci-dessous :

```js title=src-tauri/tauri.conf.json:tauri.cli
{
  "args": [
    "name": "verbose",
    "short": "v",
    "multipleOccurrences": true
  ]
}
```

Les utilisateurs peuvent démarre votre application avec `$ ./app -v -v -v`, `$ ./app --verbose --verbose --verbose` ou `$ ./app -vvv` et le mapping de l'argument va définir `verbose` comme `true`, avec `occurrences = 3`.

## Sous-commandes

Certaines applications CLI ont des interfaces supplémentaires via des sous-commandes. Par exemple, le CLI `git` possède `git branch`, `git commit` et `git push`. Vous pouvez définir des interfaces imbriquées additionnelles avec le tableau `subcommands` :

```js title=src-tauri/tauri.conf.json:tauri
{
  "cli": {
    ...
    "subcommands": {
      "branch": {
        "args": []
      },
      "push": {
        "args": []
      }
    }
  }
}
```

Sa configuration est la même que celle de la configuration de l'application root, avec `description`, `longDescription`, `args`, etc.

## Lecture des correspondances

### Rust

```rust
use tauri::cli::get_matches;

fn main() {
  match get_matches() {
    Some(matches) => {
      // `matches` est ici une structure avec { args, subcommand }
      // ou args est une HashMap attribuant chaque arguments au couple { value, occurrences }
      // et subcommand est une Option de { name, matches }
    }
  }
}
```

### JavaScript

```js
import { getMatches } from 'tauri/api/cli'

getMatches().then((matches) => {
  // faire quelque chose avec les `matches` { args, subcommand }
})
```

## Documentation complète

Vous pouvez en savoir plus sur la configuration du CLI <a href="/docs/api/config#tauri">ici</a>.
