---
sidebar_position: 8
---

# Incorporare File Aggiuntivi

Potrebbe essere necessario includere file aggiuntivi nel pacchetto di applicazioni che non fanno parte del frontend (il tuo `distDir`) direttamente o che sono troppo grandi per essere inseriti nel binario. Chiamiamo questi file `risorse`.

Per raggruppare i file a tua scelta, puoi aggiungere la proprietà `resources` al `tauri > bundle` object nel tuo `tauri.conf.json` file.

See more about tauri.conf.json configuration [here][tauri.bundle].

`resources` si aspetta una lista di string contenente il percorso di ogni file in modo assoluto o relativo. Supporta modelli glob nel caso in cui sia necessario includere più file da una cartella.

Here is a sample to illustrate the configuration. This is not a complete `tauri.conf.json` file:

```json title=tauri.conf.json
{
  "tauri": {
    "bundle": {
      "resources": [
        "/absolute/path/to/textfile.txt",
        "relative/path/to/jsonfile.json",
        "resources/*"
      ]
    },
    "allowlist": {
      "fs": {
        "scope": ["$RESOURCE/*"]
      }
    }
  }
}
```

:::note

Percorsi assoluti e percorsi contenenti componenti che si trovano in una cartella più in alto (`../`) possono essere ammessi solo tramite `"$RESOURCE/*"`. Percorsi relativi come `"path/to/file.txt"` possono essere permessi esplicitamente tramite `"$RESOURCE/path/to/file.txt"`.

:::

## Accesso ai file in JavaScript

In questo esempio vogliamo raggruppare ulteriori file i18n json che assomigliano a questo:

```json title=de.json
{
  "hello": "Guten Tag!",
  "bye": "Auf Wiedersehen!"
}
```

In questo caso, memorizziamo questi file in una cartella di nome `lang` accanto al file `tauri.conf.json`. Per questo aggiungiamo `"lang/*"` a `resources` e `$RESOURCE/lang/*` al campo fs come mostrato sopra.

Nota che devi configurare la allowlist per abilitare `path > all` e le API [`fs`][] di cui hai bisogno, in questo esempio `fs > readTextFile`.

```javascript
import { resolveResource } from '@tauri-apps/api/path'
// alternativamente, usa `window.__TAURI__.path. esolveResource`
import { readTextFile } from '@tauri-apps/api/fs'
// alternativamente, usa`window.__TAURI__.fs.readTextFile`

// `lang/de.json` è il valore specificato in `tauri.conf.json > tauri > bundle > resources`
const resourcePath = await resolveResource('lang/de.json')
const langDe = JSON. arse(await readTextFile(resourcePath))

console.log(langDe.hello) // Questo fará vedere 'Guten Tag!' sulla console devtools
```

## Accesso ai file in Rust

Questo è basato sull'esempio indicato sopra. On the Rust side, you need an instance of the [`PathResolver`][] which you can get from [`App`][] and [`AppHandle`][]:

```rust
tauri::Builder::default()
  .setup(|app| {
    let resource_path = app.path_resolver()
      .resolve_resource("lang/de.json")
      .expect("failed to resolve resource");

    let file = std::fs::File::open(&resource_path).unwrap();
    let lang_de: serde_json::Value = serde_json::from_reader(file).unwrap();

    println!("{}", lang_de.get("hello").unwrap()); // Questo farà vedere 'Guten Tag!' nella console

    Ok(())
  })
```

```rust
#[tauri::command]
fn hello(handle: tauri::AppHandle) -> String {
   let resource_path = handle.path_resolver()
      .resolve_resource("lang/de.json")
      .expect("failed to resolve resource");

    let file = std::fs::File::open(&resource_path).unwrap();
    let lang_de: serde_json::Value = serde_json::from_reader(file).unwrap();

    lang_de.get("hello").unwrap()
}
```

[tauri.bundle]: ../../api/config.md#tauri.bundle
[`fs`]: ../../api/js/fs/
[`PathResolver`]: https://docs.rs/tauri/latest/tauri/struct.PathResolver.html
[`App`]: https://docs.rs/tauri/latest/tauri/struct.App.html
[`AppHandle`]: https://docs.rs/tauri/latest/tauri/struct.AppHandle.html
