use serde_json::json;
use tauri_plugin_store::StoreExt;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            // Create a new store or load the existing one; this also puts the
            // store in the app's resource table so later `store` calls (from
            // both Rust and JS) reuse the same store.
            let store = app.store("store.json")?;

            // Note that values must be serde_json::Value instances, otherwise
            // they are not compatible with the JavaScript bindings.
            store.set("some-key", json!({ "value": 5 }));

            // Get a value from the store.
            let value = store.get("some-key").expect("Failed to get value from store");
            println!("{}", value); // {"value":5}

            // Remove the store from the resource table.
            store.close_resource();

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
