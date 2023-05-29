# 从前端调用 Rust

Tauri提供了一个简单而强大的 `command` 系统，用于从 web 应用程序调用 Rust 函数。 命令可以接受参数并返回值。 它们也可以返回错误并且是 `async`。

## 基本示例

命令是在 `src-tauri/src/main.rs` 文件中定义的。 要创建一个命令，只需添加一个函数，并使用 `#[tauri::command]` 注释：

```rust
#[tauri::command]
fn my_custom_command() {
  println!("I was invoked from JS!");
}
```

必须向构建器函数提供一个命令列表，如下所示：

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

现在，可以从 JS 代码中调用这个命令：

```js
// When using the Tauri API npm package:
import { invoke } from '@tauri-apps/api/tauri'
// When using the Tauri global script (if not using the npm package)
// Be sure to set `build.withGlobalTauri` in `tauri.conf.json` to true
const invoke = window.__TAURI__.invoke

// Invoke the command
invoke('my_custom_command')
```

## 传递参数

命令处理程序可以接受参数：

```rust
#[tauri::command]
fn my_custom_command(invoke_message: String) {
  println!("I was invoked from JS, with this message: {}", invoke_message);
}
```

参数应该作为带有驼峰式键的 JSON 对象传递：

```js
invoke('my_custom_command', { invokeMessage: 'Hello!' })
```

参数可以是任何类型，只要它们实现了 [`serde::Deserialize`][]。

Please note, when declaring arguments in Rust using snake_case, the arguments are converted to camelCase for JavaScript.  
To use snake_case in JavaScript, you have to declare it in the `tauri::command` statement:

```rust
#[tauri::command(rename_all = "snake_case")]
fn my_custom_command(invoke_message: String) {
  println!("I was invoked from JS, with this message: {}", invoke_message);
}
```

The corresponding JavaScript:

```js
invoke('my_custom_command', { invoke_message: 'Hello!' })
```

## 返回数据

命令处理程序也可以返回数据：

```rust
#[tauri::command]
fn my_custom_command() -> String {
  "Hello from Rust!".into()
}
```

`invoke` 函数返回一个用返回值解析的 promise：

```js
invoke('my_custom_command').then((message) => console.log(message))
```

返回的数据可以是任何类型，只要它实现了 [`serde::Serialize`][]。

## 错误处理

如果处理程序可能失败，需要返回一个错误，请函数返回一个 `Result`：

```rust
#[tauri::command]
fn my_custom_command() -> Result<String, String> {
  // If something fails
  Err("This failed!".into())
  // If it worked
  Ok("This worked!".into())
}
```

如果命令返回错误，promise 将拒绝，否则解析为：

```js
invoke('my_custom_command')
  .then((message) => console.log(message))
  .catch((error) => console.error(error))
```

As mentioned above, everything returned from commands must implement [`serde::Serialize`][], including errors. This can be problematic if you're working with error types from Rust's std library or external crates as most error types do not implement it. In simple scenarios you can use `map_err` to convert these errors to `String`s:

```rust
#[tauri::command]
fn my_custom_command() -> Result<(), String> {
  // This will return an error
  std::fs::File::open("path/that/does/not/exist").map_err(|err| err.to_string())?;
  // Return nothing on success
  Ok(())
}
```

Since this is not very idiomatic you may want to create your own error type which implements `serde::Serialize`. In the following example, we use the [`thiserror`][] crate to help create the error type. It allows you to turn enums into error types by deriving the `thiserror::Error` trait. You can consult its documentation for more details.

```rust
// create the error type that represents all errors possible in our program
#[derive(Debug, thiserror::Error)]
enum Error {
  #[error(transparent)]
  Io(#[from] std::io::Error)
}

// we must manually implement serde::Serialize
impl serde::Serialize for Error {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
    S: serde::ser::Serializer,
  {
    serializer.serialize_str(self.to_string().as_ref())
  }
}

#[tauri::command]
fn my_custom_command() -> Result<(), Error> {
  // This will return an error
  std::fs::File::open("path/that/does/not/exist")?;
  // Return nothing on success
  Ok(())
}
```

A custom error type has the advantage of making all possible errors explicit so readers can quickly identify what errors can happen. This saves other people (and yourself) enormous amounts of time when reviewing and refactoring code later.<br/> It also gives you full control over the way your error type gets serialized. In the above example, we simply returned the error message as a string, but you could assign each error a code similar to C, this way you could more easily map it to a similar looking TypeScript error enum for example.

## 异步命令

Asynchronous functions are benefical in Tauri to perform heavy work in a manner that doesn't result in UI freezes or slowdowns.

:::note

异步命令使用 [`async_runtime::spawn`][] 在单线程上执行。 不带 _async_ 关键字的命令将在主线程上执行，除非使用 _#[tauri::command(async)]_ 定义。

:::

**If your command needs to run asynchronously, simply declare it as `async`.**

:::caution

You need to be careful when creating asynchronous functions using Tauri. Currently, you cannot simply include borrowed arguments in the signature of an asynchronous function. Some common examples of types like this are `&str` and `State<'_, Data>`. This limitation is tracked here: https://github.com/tauri-apps/tauri/issues/2533 and workarounds are shown below.

:::

When working with borrowed types, you have to make additional changes. These are your two main options:

**Option 1**: Convert the type, such as `&str` to a similar type that is not borrowed, such as `String`. This may not work for all types, for example `State<'_, Data>`.

_Example:_

```rust
// Declare the async function using String instead of &str, as &str is borrowed and thus unsupported
#[tauri::command]
async fn my_custom_command(value: String) -> String {
  // Call another async function and wait for it to finish
  some_async_function().await;
  format!(value)
}
```

**Option 2**: Wrap the return type in a [`Result`][]. This one is a bit harder to implement, but should work for all types.

Use the return type `Result<a, b>`, replacing `a` with the type you wish to return, or `()` if you wish to return nothing, and replacing `b` with an error type to return if something goes wrong, or `()` if you wish to have no optional error returned. For example:

- `Result<String, ()>` to return a String, and no error.
- `Result<(), ()>` to return nothing.
- `Result<bool, Error>` to return a boolean or an error as shown in the [Error Handling](#error-handling) section above.

_Example:_

```rust
// Return a Result<String, ()> to bypass the borrowing issue
#[tauri::command]
async fn my_custom_command(value: &str) -> Result<String, ()> {
  // Call another async function and wait for it to finish
  some_async_function().await;
  // Note that the return value must be wrapped in `Ok()` now.
  Ok(format!(value))
}
```

#### Invoking from JS

Since invoking the command from JavaScript already returns a promise, it works just like any other command:

```js
invoke('my_custom_command', { value: 'Hello, Async!' }).then(() =>
  console.log('Completed!')
)
```

## 在命令中访问窗口

命令可以访问调用消息的 `Window` 实例：

```rust
#[tauri::command]
async fn my_custom_command(window: tauri::Window) {
  println!("Window: {}", window.label());
}
```

## 在命令中访问 AppHandle

命令可以访问 `AppHandle` 实例：

```rust
#[tauri::command]
async fn my_custom_command(app_handle: tauri::AppHandle) {
  let app_dir = app_handle.path_resolver().app_dir();
  use tauri::GlobalShortcutManager;
  app_handle.global_shortcut_manager().register("CTRL + U", move || {});
}
```

## 访问托管状态

Tauri 可以在 `tauri::Builder` 上使用 `manage` 函数来管理状态。 可以在命令上使用 `tauri::State` 访问状态：

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

## 创建多个命令

`tauri::generate_handler!` 宏接受一个命令数组。 要注册多个命令，不能多次调用 invoke_handler。 仅使用最后一次调用。 必须将每个命令传递给 `tauri::generate_handler!` 单个调用。

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

## 完整示例

上述任何或所有功能均可组合：

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
[`serde::Serialize`]: https://docs.serde.rs/serde/trait.Serialize.html
[`serde::Deserialize`]: https://docs.serde.rs/serde/trait.Deserialize.html
[`thiserror`]: https://github.com/dtolnay/thiserror
[`Result`]: https://doc.rust-lang.org/std/result/index.html
