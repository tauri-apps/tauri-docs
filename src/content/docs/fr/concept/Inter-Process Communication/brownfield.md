---
title: Modèle Brownfield
i18nReady: true
---

_**C'est le modèle par défaut.**_

C'est le modèle le plus simple et le plus direct pour utiliser Tauri, car il essaie d'être aussi compatible que possible avec les projets frontend existants. En bref, il essaie de ne rien demander de plus que ce qu'un frontend web existant utiliserait dans un navigateur.
Tout ce qui fonctionne dans les applications de navigateur existantes ne fonctionnera pas _**forcément**_ sans configuration supplémentaire.

Si le développement logiciel Brownfield ne vous est pas familier, l'[article Wikipédia sur Brownfield] en donne un bon résumé. Pour Tauri, le logiciel existant correspond au support et au comportement actuels des navigateurs, plutôt qu'à des systèmes hérités.

## Configuration

Comme le modèle Brownfield est le modèle par défaut, il ne nécessite aucune option de configuration. Pour le définir explicitement, vous pouvez utiliser l'objet `app > security > pattern` dans le fichier de configuration `tauri.conf.json`.

```json
{
  "app": {
    "security": {
      "pattern": {
        "use": "brownfield"
      }
    }
  }
}
```

_**Il n'existe aucune option de configuration supplémentaire pour le modèle brownfield.**_

[article wikipédia sur brownfield]: https://en.wikipedia.org/wiki/Brownfield_(software_development)
