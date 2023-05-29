---
sidebar_position: 2
---

import Command from '@theme/Command'

# Development Cycle

### 1. Démarrez votre serveur de développement

Maintenant que tout est configuré, vous devez démarrer votre serveur de développement d'applications fourni par votre framework ou bundler d'interface utilisateur (en supposant que vous en utilisiez un, bien sûr).

:::note

Chaque framework possède ses propres outils de développement. Il n'entre pas dans le cadre de ce document de les couvrir tous ou de rester à jour.
:::

### 2. Démarrer la fenêtre de développement de Tauri

<Command name="dev" />

La première fois que vous exécutez cette commande, le gestionnaire de packages Rust prend plusieurs minutes pour télécharger et créer tous les packages requis. Comme ils sont mis en cache, les builds suivants sont beaucoup plus rapides, car seul votre code a besoin d'être reconstruit.

Une fois que Rust a terminé la construction, la vue Web s'ouvre et affiche votre application Web. Vous pouvez apporter des modifications à votre application Web, et si vos outils le permettent, la vue Web devrait se mettre à jour automatiquement, tout comme un navigateur. Lorsque vous apportez des modifications à vos fichiers Rust, ils sont reconstruits automatiquement et votre application redémarre automatiquement.

:::info À propos de Cargo.toml et du contrôle de code source

Dans votre référentiel de projet, vous DEVEZ valider le "src-tauri/Cargo.lock" avec le "src-tauri/Cargo.toml" sur git car Cargo utilise le fichier de verrouillage pour fournir des versions déterministes. Par conséquent, il est recommandé que toutes les applications enregistrent leur Cargo.lock. Vous NE DEVEZ PAS valider le dossier "src-tauri/target" ou l'un de ses contenus.

:::
