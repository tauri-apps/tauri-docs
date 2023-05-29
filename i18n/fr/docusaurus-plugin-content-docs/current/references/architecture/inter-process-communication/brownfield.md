# Modèle de Brownfield

_**Ceci est le modèle par défaut.**_

C'est le modèle le plus simple et le plus simple pour utiliser Tauri avec, parce qu'il essaie d'être aussi compatible que possible avec projets existants en frontend. En bref, il essaie de ne rien demander de plus à ce qu'un frontend web existant peut utiliser dans un navigateur. _**Tout ce qui fonctionne**_ dans les applications de navigateur existantes ne fonctionnera pas immédiatement ; voir la [section Incompatibilité](#incompatibilities) pour plus de détails.

Si vous n'êtes pas familier avec le développement Brownfield en général, l'article [Brownfield][] de Wikipédia en fait un assez bon résumé. Pour Tauri, le logiciel existant est la prise en charge et le comportement actuels du navigateur au lieu des systèmes hérités.

## Incompatibilités

La première catégorie d'incompatibilité est simple : toute API spécifique au navigateur ne fonctionnera pas correctement dans Tauri (même en utilisant le modèle Brownfield). Si l'API n'est pas largement prise en charge par les navigateurs, elle ne le sera probablement pas sur toutes les plateformes tout en utilisant Tauri.

La deuxième catégorie d'incompatibilité concerne les fonctionnalités prévues pour Tauri, mais qui ne sont actuellement pas entièrement implémentées. Voici une liste d'exemples :

- [Support de WebRTC sur Linux](https://github.com/tauri-apps/wry/issues/85)
- [Certaines permissions d'API](https://github.com/tauri-apps/wry/issues/81)
- [Lien de téléchargement/Blob comme URL](https://github.com/tauri-apps/wry/issues/349)
- [Meilleur i18n](https://github.com/tauri-apps/wry/issues/442)

## Configuration

Étant donné que le modèle Brownfield est le modèle par défaut, il ne nécessite pas la définition d'une option de configuration. Pour le définir explicitement, vous pouvez utiliser l'objet `tauri > pattern` dans le fichier de configuration `tauri.conf.json`.

```json
{
  "tauri": {
    "pattern": {
      "use": "brownfield"
    }
  }
}
```

_**Il n'y a pas d'option de configuration supplémentaire pour le modèle Brownfield.**_

[Brownfield]: https://en.wikipedia.org/wiki/Brownfield_(software_development)
