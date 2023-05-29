---
sidebar_position: 7
---

# Intégrer des binaires externes

Vous devrez peut-être intégrer des binaires pour faire fonctionner votre application ou empêcher les utilisateurs d'installer des dépendances supplémentaires (par exemple, Node.js ou Python). Nous appelons ce binaire un `sidecar`.

Pour regrouper les binaires de votre choix, vous pouvez ajouter la propriété `externalBin` au bundle `tauri >` objet dans votre `tauri.conf.json`.

En savoir plus sur la configuration de tauri.conf.json [ici][tauri.bundle].

`externalBin` attend une liste de chaînes de caractères ciblant des binaires avec des chemins absolus ou relatifs.

Voici un exemple pour illustrer la configuration. Ce n'est pas un fichier `tauri.conf.json` complet :

```json
{
  "tauri": {
    "bundle": {
      "externalBin": [
        "/absolute/path/to/sidecar",
        "relative/path/to/binary",
        "binaries/my-sidecar"
      ]
    },
    "allowlist": {
      "shell": {
        "sidecar": true,
        "scope": [
          { "name": "/absolute/path/to/sidecar", "sidecar": true },
          { "name": "relative/path/to/binary", "sidecar": true },
          { "name": "binaries/my-sidecar", "sidecar": true }
        ]
      }
    }
  }
}
```

Un binaire avec le même nom et un suffixe `-$TARGET_TRIPLE` doit exister sur le chemin spécifié. Par exemple, `"externalBin": ["binaries/my-sidecar"]` nécessite un exécutable `src-tauri/binaries/my-sidecar-x86_64-unknown-linux-gnu` sous Linux. You can find the **current** platform's target triple by looking at the `host:` property reported by the `rustc -Vv` command.

If the `grep` and `cut` commands are available, as they should on most Unix systems, you can extract the target triple directly with the following command:

```shell
rustc -Vv | grep host | cut -f2 -d' '
```

On Windows you can use PowerShell instead:

```powershell
rustc -Vv | Select-String "host:" | ForEach-Object {$_.Line.split(" ")[1]}
```

Voici un script Node.js pour ajouter le triple cible à un binaire :

```javascript
const execa = require('execa')
const fs = require('fs')

let extension = ''
if (process.platform === 'win32') {
  extension = '.exe'
}

async function main() {
  const rustInfo = (await execa('rustc', ['-vV'])).stdout
  const targetTriple = /host: (\S+)/g.exec(rustInfo)[1]
  if (!targetTriple) {
    console.error('Failed to determine platform target triple')
  }
  fs.renameSync(
    `src-tauri/binaries/sidecar${extension}`,
    `src-tauri/binaries/sidecar-${targetTriple}${extension}`
  )
}

main().catch((e) => {
  throw e
})
```

## L'exécuter à partir de JavaScript

Dans le code JavaScript, importez la classe `Command` sur le module `shell` et utilisez la méthode statique `sidecar`.

Notez que vous devez configurer la liste d'autorisations pour activer `shell > sidecar` et configurer tous les binaires dans `shell > scope`.

```javascript
import { Command } from '@tauri-apps/api/shell'
// alternative: `window.__TAURI__.shell.Command`
// `binaries/my-sidecar` est la MÊME valeur spécifier dans le `tauri.conf.json > tauri > bundle > externalBin`
const command = Command.sidecar('binaries/my-sidecar')
const output = await command.execute()
```

## Exécution depuis Rust

Du côté de Rust, importer la struct `Command` depuis le module `tauri::api::process` :

```rust
// `new_sidecar()` attend juste le nom du fichier, PAS le chemin complet comme en JavaScript
let (mut rx, mut child) = Command::new_sidecar("my-sidecar").expect("échec de la création de la commande binaire `my-sidecar`").spawn().expect("Échec de l'exécution de l'application");

tauri::async_runtime::spawn(async move {
  // lit les événements du binaire 
  while let Some(event) = rx.recv().await {
    if let CommandEvent::Stdout(line) = event {
      window
        .emit("message", Some(format!("'{}'", line)))
        .expect("failed to emit event");
      // envoi au binaire 
      child.write("message de Rust\n".as_bytes()).unwrap();
    }
  }
});
```

Notez que vous devez activer la fonctionnalité Cargo **process-command-api** (Le CLI de Tauri fera cela pour vous une fois que vous aurez modifié la configuration):

```toml
# Cargo.toml
[dependencies]
tauri = { version = "1", features = ["process-command-api", ...] }
```

## Passés des arguments

Vous pouvez passer des arguments aux commandes Sidecar comme vous le feriez pour exécuter la normalement `Commande`s (voir [Restreindre l'accès aux API de commande][]).

Premièrement, définissez les arguments qui doivent être passés à la commande Sidecar dans `tauri.conf.json`:

```json
{
  "tauri": {
    "bundle": {
      "externalBin": [
        "/absolute/path/to/sidecar",
        "relative/path/to/binary",
        "binaries/my-sidecar"
      ]
    },
    "allowlist": {
      "shell": {
        "sidecar": true,
        "scope": [
          {
            "name": "binaries/my-sidecar",
            "sidecar": true,
            "args": [
              "arg1",
              "-a",
              "--arg2",
              {
                "validator": "\\S+"
              }
            ]
          }
        ]
      }
    }
  }
}
```

Ensuite, pour appeler la commande sidecar, il suffit de passer **tous les** arguments en tant que tableau:

```js
import { Command } from '@tauri-apps/api/shell'
// ou `window.__TAURI__.shell.Command`
// `binaries/my-sidecar` est la MÊME valeur spécifié dans `tauri.conf.json > tauri > bundle > externalBin`
// Notez que le tableau args correspond EXACTEMENT à ce qui est spécifié sur 'tauri.conf.json'.
const command = Command.sidecar('binaries/my-sidecar', [
  'arg1',
  '-a',
  '--arg2',
  'any-string-that-matches-the-validator',
])
const output = await command.execute()
```

## Utiliser Node.js dans un Sidecar

L'exemple Tauri [sidecar][] montre comment utiliser l'API sidecar pour exécuter une application Node.js sur Tauri. Il compile le code Node.js en utilisant [pkg][] et utilise les scripts ci-dessus pour l'exécuter.

[tauri.bundle]: ../../api/config.md#tauri.bundle
[sidecar]: https://github.com/tauri-apps/tauri/tree/dev/examples/sidecar
[Restreindre l'accès aux API de commande]: ../../api/js/shell.md#restricting-access-to-the-command-apis
[pkg]: https://github.com/vercel/pkg
