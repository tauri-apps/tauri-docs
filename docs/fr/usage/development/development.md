---
title: Développement d'une application
sidebar_label: 'Développement d''une app (2/4)'
---

import Alert from '@theme/Alert' import Command from '@theme/Command'

### 1. Démarrer votre serveur de dev

Maintenant que vous avez tout configuré, vous devriez démarrer le serveur de développement de votre applications fourni par votre framework UI ou votre bundler (en supposant que vous en utilisez un, bien sûr).

<Alert title="Note">
Chaque framework a ses propres outils de développement. Il est impossible de les traiter tous ou de les tenir à jour dans le cadre de ce document.
</Alert>

### 2. Démarrer l'interface de développement de Tauri

<Command name="dev" />

La première fois que vous exécutez cette commande, il faudra plusieurs minutes au gestionnaire de paquets Rust pour télécharger et compiler tous les paquets nécessaires. Comme ils sont mis en cache, les prochaines compilations seront beaucoup plus rapides, car seules les composants de Tauri auront besoin d'être recompilés.

Vous êtes maintenant prêt à développer votre application avec votre interface Tauri !

<Alert title="Une note sur Cargo.toml et le contrôle de la source" icon="info-alt">
  Dans votre dépôt de projet, vous DEVEZ commiter le fichier "src-tauri/Cargo.toml" avec git pour qu'il soit déterministe. Vous NE DEVEZ PAS commiter le dossier "src-tauri/target" ni aucun de ses contenus.
</Alert>
