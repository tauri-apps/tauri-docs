---
id: modes
title: Modes de chargement de l'application
---

Tauri a deux configurations pour le chargement de votre application web : avec ou sans serveur localhost.

## Serveur Localhost

Activé par défaut, c'est le moyen le plus simple de fonctionner. Il fournit à votre application un serveur localhost qui utilise un port éphémère (c'est-à-dire un port qui change à chaque exécution, en fonction de ce qui est disponible sur l'appareil). Tauri utilise ensuite le serveur pour charger votre application web dans le Webview. Dans votre `src-tauri/tauri.conf.json` :

```json
"tauri": {
  "embeddedServer": {
    "active": true
  }
}
```

## Pas de serveur

Une configuration plus avancée et plus sûre est le mode sans serveur. La principale raison de sa complexité est que Tauri doit recompiler votre code en supprimant les importations dynamiques. Dans ce mode, Tauri charge votre application web directement depuis le disque, en ignorant complètement le serveur local.

Dans votre `src-tauri/tauri.conf.json` :

```json
"tauri": {
  "embeddedServer": {
    "active": false
  }
}
```
