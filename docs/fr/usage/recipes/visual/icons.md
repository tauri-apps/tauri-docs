---
title: Icônes
---

import Command from '@theme/Command' import Alert from '@theme/Alert'

Tauri est livré avec un jeu d'icônes par défaut basé sur son logo. Ce n'est probablement PAS ce que vous souhaitez lorsque vous expédierez votre application. Pour remédier à cette situation fréquente, Tauri fournit la commande `icon` qui va prendre un fichier d'entrée et créer toutes les icônes nécessaires pour les différentes plateformes :

<Command name="icon"/>

```sh
Options
  --help, -h          Affiche ce message
  --log, l            Logging [boolean]
  --icon, i          Icône source (png, 1240x1240 avec transparence)
  --target, t         Dossier cible (par défaut : 'src-tauri/icons')
  --compression, c    Type de compression [pngquant|optipng|zopfli]
```

Elles seront placées dans votre dossier `src-tauri/icons` où elles seront automatiquement incluses dans votre application compilée.

Si vous avez besoin de placer vos icônes à un autre endroit, vous pouvez modifier cette partie du fichier `src-tauri/tauri.conf.json` :

```json
{
  "tauri": {
    "bundle": {
      "icon": [
        "icons/32x32.png",
        "icons/128x128.png",
        "icons/128x128@2x.png",
        "icons/icon.icns",
        "icons/icon.ico"
      ]
    }
  }
}
```

<Alert type="info" icon="info-alt" title="Note sur les types de fichiers">

  - icon.icns = macOS
  - icon.ico = MS Windows
  - \*.png = Linux

</Alert>
