---
title: Sidecar (incorporation de binaires externes)
sidebar_label: Sidecar
---

import Alert from '@theme/Alert'

Vous pouvez avoir besoin d'intégrer des binaires dépendants afin de faire fonctionner votre application ou pour éviter aux utilisateurs d'avoir à installer des dépendances supplémentaires (par exemple NodeJS, Python, etc.).

Pour empaqueter les binaires de votre choix, vous pouvez ajouter la propriété `externalBin` à l'espace de noms `tauri` dans votre `tauri.conf.json`.

En savoir plus sur la configuration de tauri.conf.json <a href="/docs/api/config#build">ici</a>.

`externalBin` s'attend à une liste de chaînes de caractères ciblant les binaires avec des chemins absolus ou relatifs.

Voici un exemple pour illustrer la configuration, ce n'est pas un fichier `tauri.conf.json` complet :

```json
{
  "tauri": {
    "bundle": {
      "externalBin": ["/chemin/absolu/vers/poubelle1", "chemin/relatif/vers/poubelle2"]
    }
  }
}
```

De cette façon, vous pouvez [exécuter des commandes avec Rust](https://doc.rust-lang.org/std/process/struct.Command.html) dans votre application Tauri.

<Alert title="Note">
Tauri fournit certaines fonctions utilitaires pour traiter les cas standard (comme les binaires spécifiques à certaines plateformes), comme :

- `tauri::api::command::binary_command`, qui ajoutera le triplet de l'environnement actuel à l'entrée (utile pour les multi-environnements). Si vous créez votre propre binaire, vous devrez fournir un binaire **pour chaque plateforme que vous ciblez** en spécifiant les triplets cibles, par exemple "nombinaire-x86_64-apple-darwin".

Les triplets cibles peuvent être obtenus en exécutant la commande `rustup target list`.

- `tauri::api::command::relative_command` permettra de résoudre de manière relative le chemin vers le binaire.

</Alert>
