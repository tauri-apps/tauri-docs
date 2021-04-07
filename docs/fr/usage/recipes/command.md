---
title: Write Rust commands
---

The JavaScript frontend communicates with the backend through `commands`.
A command is a string message that's sent to the backend with the `invoke` and `promisified` API calls,
and can be listened on the backend with the `invoke_handler` callback.

Tauri by default serializes every message to a JSON string, so you can use `serde_json` on the backend to deserialize it.

## Synchronous commands

A synchronous command is sent to the backend with the `invoke` API:

```js
// with a module bundler (recommended):
import { invoke } from '@tauri-apps/api/tauri'
// with vanilla JS:
var invoke = window.__TAURI__.tauri.invoke

// then call it:
invoke({
  cmd: 'doSomething',
  count: 5,
  payload: {
    state: 'some string data',
    data: 17
  }
})
```

To read the message on Rust, use the `invoke_handler`:

```rust
use serde::Deserialize;

#[derive(Deserialize)]
struct DoSomethingPayload {
  state: String,
  data: u64
}

// The commands definitions
// Deserialized from JS
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
              // do some synchronous operation with `count` and `payload` sent from the frontend
              // note that this blocks the UI thread, so prefer asynchronous commands for long-running tasks
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

## Asynchronous commands

An asynchronous command is sent to the backend with the `promisified` API:

```js
// with a module bundler (recommended):
import { promisified } from '@tauri-apps/api/tauri'
// with vanilla JS:
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
  // do something with the Ok() response
  const { value, message } = response
}).catch(error => {
  // do something with the Err() response string
})
```

To read the message on Rust, use the `invoke_handler` and the `tauri::execute_promise` helper.
The code executed with this kind of command will be execute on a separate thread.
To run code on the main thread, use `tauri::execute_promise_sync` instead.

Note that there's two additional properties: `callback` and `error`.

- The `callback` parameter is the name of the command Promise's `resolve` function.
- The `error` parameter is the name of the command Promise's `reject` function.

The `Result` returned from the `tauri::execute_promise` function is used to determine if the Promise should resolve or reject.
If it's an `Ok` variant, we `resolve` the Promise with its value serialized to JSON. Otherwise, we `reject` with the error as string.

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
