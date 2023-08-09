#[tauri::command]
fn greet(name: String) -> String {
    let msg = format!("Greetings {name}! This string was created in Rust!");
    println!("{msg}");
    msg
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_notification::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
