---
title: Écrivez vos commandes Rust
---

Le Frontend JavaScript communique avec le Backend via des `commands`. Une commande est un message (chaîne de caractère) qui est envoyée vers le backend via les appels sur les API `invoke` et `promisified`, qui peuvent ensuite être écoutées dans le backend avec le callback `invoke_handler`.

Par défaut, Tauri sérialise chaque messages en une chaîne JSON, pour pouvoir utiliser `serde_json` en backend pour le désérialiser.

## Commandes synchronisées

Une commande synchronisée est envoyée vers le backend via l'API `invoke` :

```js
// avec un module bundler (recommandé):
import { invoke } from 'tauri/api/tauri'
// avec du JS vanilla :
var invoke = window.__TAURI__.tauri.invoke

// puis appelez le :
invoke({
  cmd: 'doSomething',
  count: 5,
  payload: {
    state: 'some string data',
    data: 17
  }
})
```

Pour lire le message en Rust, utilisez `invoke_handler`:

```rust
use serde::Deserialize;

#[derive(Deserialize)]
struct DoSomethingPayload {
  state: String,
  data: u64
}

// Définitions des commandes
// Désérialisé depuis JS
#[derive(Deserialize)]
#[serde(tag = "cmd", rename_all = "camelCase")]
enum Cmd {
  DoSomething {
    count: u64,
    payload: DoSomethingPayload,
  }
}

fn main() {
  tauri::AppBuilder::new()
    .invoke_handler(|_webview, arg| {
      use Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => Err(e.to_string()),
        Ok(command) => {
          match command {
            DoSomething { count, payload } => {
              // effectuez quelques opérations synchrones avec `count` et `payload` envoyées depuis le frontend
              // notez que ceci bloque le thread de l'interface, donc préférez les commandes asynchrones pour les tâches longues.
            }
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}
```

## Commandes Asynchrones

Une commande asynchrone est envoyée vers le backend via l'API `promisified` :

```js
// avec un module bundler (recommandé):
import { promisified } from 'tauri/api/tauri'
// avec du JS vanilla :
var promisified = window.__TAURI__.tauri.promisified

// then call it:
promisified({
  cmd: 'doSomething',
  count: 5,
  payload: {
    state: 'some string data',
    data: 17
  }
}).then(response => {
  // faite quelque chose avec la réponse Ok()
  const { value, message } = response
}).catch(error => {
  // faite quelque chose avec la réponse Err()
})
```

To read the message on Rust, use the `invoke_handler` and the `tauri::execute_promise` helper. The code executed with this kind of command will be execute on a separate thread. To run code on the main thread, use `tauri::execute_promise_sync` instead.

Note that there's two additional properties: `callback` and `error`.

- The `callback` parameter is the name of the command Promise's `resolve` function.
- The `error` parameter is the name of the command Promise's `reject` function.

The `Result` returned from the `tauri::execute_promise` function is used to determine if the Promise should resolve or reject. If it's an `Ok` variant, we `resolve` the Promise with its value serialized to JSON. Otherwise, we `reject` with the error as string.

```rust
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct DoSomethingPayload {
  state: String,
  data: u64,
}

// The commands definitions
// Deserialized from JS
#[derive(Deserialize)]
#[serde(tag = "cmd", rename_all = "camelCase")]
enum Cmd {
  DoSomething {
    count: u64,
    payload: DoSomethingPayload,
    callback: String,
    error: String,
  },
}

#[derive(Serialize)]
struct Response<'a> {
  value: u64,
  message: &'a str,
}

// An error type we define
// We could also use the `anyhow` lib here
#[derive(Debug, Clone)]
struct CommandError<'a> {
  message: &'a str,
}

impl<'a> CommandError<'a> {
  fn new(message: &'a str) -> Self {
    Self { message }
  }
}

impl<'a> std::fmt::Display for CommandError<'a> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    write!(f, "{}", self.message)
  }
}

// Tauri uses the `anyhow` lib so custom error types must implement std::error::Error
// and the function call should call `.into()` on it
impl<'a> std::error::Error for CommandError<'a> {}

fn main() {
  tauri::AppBuilder::new()
    .invoke_handler(|_webview, arg| {
      use Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => Err(e.to_string()),
        Ok(command) => {
          match command {
            DoSomething { count, payload, callback, error } => tauri::execute_promise(
              _webview,
              move || {
                if count > 5 {
                  let response = Response {
                    value: 5,
                    message: "async response!",
                  };
                  Ok(response)
                } else {
                  Err(CommandError::new("count should be > 5").into())
                }
              },
              callback,
              error,
            ),
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}

```
