---
title: Introduction
---

import OSList from '@theme/OSList'

Vous trouverez ici des instructions pour installer et personnaliser Tauri sur votre environnement.

Si vous trouvez une erreur ou quelque chose de pas clair, ou si vous souhaitez proposer une amélioration, vous avez plusieurs options :<br />

1. Ouvrir un ticket sur notre [dépôt Github](https://github.com/tauri-apps/tauri-docs).<br />
2. Visiter notre [serveur Discord](https://discord.gg/SpmNs4S) et exprimer votre problème.<br />
3. Demander à rejoindre le groupe de travail sur Discord pour avoir accès à son canal de discussion.

## Comment fonctionne Tauri

1. Créez votre application web avec le framework front-end de votre choix et regroupez le tout en HTML/CSS/JS.
2. Le CLI Tauri.js prend la sortie et adapte le code natif sous-jacent en fonction de votre configuration.
3. En mode développement, il crée une fenêtre d'aperçu web avec débogage et rechargement à chaud des modules.
4. En mode compilé, il manipule le bundler et crée des installateurs natifs en fonction de vos paramètres.

### Configuration de votre environnement

Ce guide suppose que vous connaissez la ligne de commande, que vous savez comment installer des paquets sur votre système d'exploitation et que vous vous y connaissez généralement dans le domaine du développement informatique.

Tout d'abord, assurez-vous que tous les langages / compilateurs requis sont installés et disponibles dans votre PATH. En savoir plus sur les détails pour votre environnement de développement local :

<OSList content={{ linux: { title: 'Linux Setup', link: '>

Après cela, vous serez prêt à [ajouter Tauri à votre projet !](/docs/usage/development/integration)

Ou en savoir plus sur [le fonctionnement de Tauri](/docs/getting-started/technical-details).
