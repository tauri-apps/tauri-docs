# Calling Rust from the frontend

Tauri provides a simple yet powerful `command` system for calling Rust functions from your web app.
Commands can accept arguments and return values. They can also return errors and be `async`.

## Basic Example

Commands are defined in your `src-tauri/src/main.rs` file. To create a command, just add a function and annotate it with `#[tauri::command]`:

```rust
#[tauri::command]
fn my_custom_command() {
  println!("I was invoked from JS!");
}
```

You will have to provide a list of your commands to the builder function like so:

```rust
// Also in main.rs
fn main() {
  tauri::Builder::default()
    // This is where you pass in your commands
    .invoke_handler(tauri::generate_handler![my_custom_command])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
```

Now, you can invoke the command from your JS code:

```js
// When using the Tauri API npm package:
import { invoke } from '@tauri-apps/api/tauri'
// When using the Tauri global script (if not using the npm package)
// Be sure to set `build.withGlobalTauri` in `tauri.conf.json` to true
const invoke = window.__TAURI__.invoke

// Invoke the command
invoke('my_custom_command')
```

## Passing Arguments

Your command handlers can take arguments:

```rust
#[tauri::command]
fn my_custom_command(invoke_message: String) {
  println!("I was invoked from JS, with this message: {}", invoke_message);
}
```

Arguments should be passed as a JSON object with camelCase keys:

```js
invoke('my_custom_command', { invokeMessage: 'Hello!' })
```

Arguments can be of any type, as long as they implement [`serde::Deserialize`].

## Returning Data

Command handlers can return data as well:

```rust
#[tauri::command]
fn my_custom_command() -> String {
  "Hello from Rust!".into()
}
```

The `invoke` function returns a promise that resolves with the returned value:

```js
invoke('my_custom_command').then((message) => console.log(message))
```

Returned data can be of any type, as long as it implements [`serde::Serialize`].

## Error Handling

If your handler could fail and needs to be able to return an error, have the function return a `Result`:

```rust
#[tauri::command]
fn my_custom_command() -> Result<String, String> {
  // If something fails
  Err("This failed!".into())
  // If it worked
  Ok("This worked!".into())
}
```

If the command returns an error, the promise will reject, otherwise, it resolves:

```js
invoke('my_custom_command')
  .then((message) => console.log(message))
  .catch((error) => console.error(error))
```

## Async Commands

:::note

Async commands are executed on a separate thread using [`async_runtime::spawn`].
Commands without the _async_ keyword are executed on the main thread unless defined with _#[tauri::command(async)]_.

:::

If your command needs to run asynchronously, simply declare it as `async`:

```rust
#[tauri::command]
async fn my_custom_command() {
  // Call another async function and wait for it to finish
  let result = some_async_function().await;
  println!("Result: {}", result);
}
```

Since invoking the command from JS already returns a promise, it works just like any other command:

```js
invoke('my_custom_command').then(() => console.log('Completed!'))
```

## Accessing the Window in Commands

Commands can access the `Window` instance that invoked the message:

```rust
#[tauri::command]
async fn my_custom_command(window: tauri::Window) {
  println!("Window: {}", window.label());
}
```

## Accessing an AppHandle in Commands

Commands can access an `AppHandle` instance:

```rust
#[tauri::command]
async fn my_custom_command(app_handle: tauri::AppHandle) {
  let app_dir = app_handle.path_resolver().app_dir();
  use tauri::GlobalShortcutManager;
  app_handle.global_shortcut_manager().register("CTRL + U", move || {});
}
```

## Accessing managed state

Tauri can manage state using the `manage` function on `tauri::Builder`.
The state can be accessed on a command using `tauri::State`:

```rust
struct MyState(String);

#[tauri::command]
fn my_custom_command(state: tauri::State<MyState>) {
  assert_eq!(state.0 == "some state value", true);
}

fn main() {
  tauri::Builder::default()
    .manage(MyState("some state value".into()))
    .invoke_handler(tauri::generate_handler![my_custom_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

## Creating Multiple Commands

The `tauri::generate_handler!` macro takes an array of commands. To register
multiple commands, you cannot call invoke_handler multiple times. Only the last
call will be used. You must pass each command to a single call of
`tauri::generate_handler!`.

```rust
#[tauri::command]
fn cmd_a() -> String {
	"Command a"
}
#[tauri::command]
fn cmd_b() -> String {
	"Command b"
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![cmd_a, cmd_b])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

## Complete Example

Any or all of the above features can be combined:

```rust main.rs

struct Database;

#[derive(serde::Serialize)]
struct CustomResponse {
  message: String,
  other_val: usize,
}

async fn some_other_function() -> Option<String> {
  Some("response".into())
}

#[tauri::command]
async fn my_custom_command(
  window: tauri::Window,
  number: usize,
  database: tauri::State<'_, Database>,
) -> Result<CustomResponse, String> {
  println!("Called from {}", window.label());
  let result: Option<String> = some_other_function().await;
  if let Some(message) = result {
    Ok(CustomResponse {
      message,
      other_val: 42 + number,
    })
  } else {
    Err("No result".into())
  }
}

fn main() {
  tauri::Builder::default()
    .manage(Database {})
    .invoke_handler(tauri::generate_handler![my_custom_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

```js
// Invocation from JS

invoke('my_custom_command', {
  number: 42,
})
  .then((res) =>
    console.log(`Message: ${res.message}, Other Val: ${res.other_val}`)
  )
  .catch((e) => console.error(e))
```

[`async_runtime::spawn`]: https://docs.rs/tauri/1/tauri/async_runtime/fn.spawn.html
[`serde::serialize`]: https://docs.serde.rs/serde/trait.Serialize.html
[`serde::deserialize`]: https://docs.serde.rs/serde/trait.Deserialize.html
