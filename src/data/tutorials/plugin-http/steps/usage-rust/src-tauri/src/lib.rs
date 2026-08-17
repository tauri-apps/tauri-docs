// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn fetch_status(url: String) -> Result<u16, String> {
    let res = tauri_plugin_http::reqwest::get(&url)
        .await
        .map_err(|e| e.to_string())?;
    Ok(res.status().as_u16())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_http::init())
        .invoke_handler(tauri::generate_handler![greet, fetch_status])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
