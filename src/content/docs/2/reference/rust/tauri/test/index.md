---
title: 'Module tauri::test'
editUrl: false
prev: false
next: false
---


Utilities for unit testing on Tauri applications.

# Stability

This module is unstable.

# Examples

```rust
#[tauri::command]
fn my_cmd() {}

fn create_app<R: tauri::Runtime>(mut builder: tauri::Builder<R>) -> tauri::App<R> {
  builder
    .setup(|app| {
      // do something
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![my_cmd])
    // remove the string argument on your app
    .build(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
    .expect("failed to build app")
}

fn main() {
  let app = create_app(tauri::Builder::default());
  // app.run(|_handle, _event| {});
}

//#[cfg(test)]
mod tests {
  use tauri::Manager;
  //#[cfg(test)]
  fn something() {
    let app = super::create_app(tauri::test::mock_builder());
    let window = app.get_window("main").unwrap();
    // do something with the app and window
    // in this case we'll run the my_cmd command with no arguments
    tauri::test::assert_ipc_response(
      &window,
      tauri::InvokePayload {
        cmd: "my_cmd".into(),
        callback: tauri::api::ipc::CallbackFn(0),
        error: tauri::api::ipc::CallbackFn(1),
        inner: serde_json::Value::Null,
      },
      Ok(())
    );
  }
}
```
## Modules


- [mock_runtime](/2/reference/rust/tauri/test/mock_runtime): 
## Structs


- [IpcKey](/2/reference/rust/tauri/IpcKey): 
- [Ipc](/2/reference/rust/tauri/Ipc): 
- [NoopAsset](/2/reference/rust/tauri/NoopAsset): An empty [`Assets`] implementation.