// Import functionalities we'll be using
use std::sync::Mutex;
use tauri::async_runtime::spawn;
use tauri::{AppHandle, Manager, State};
use tokio::time::{sleep, Duration};

// Create a struct we'll use to track the completion of
// setup related tasks
struct SetupState {
    frontend_task: bool,
    backend_task: bool,
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: String) -> String {
    format!("Hello {name} from Rust!")
}

// A custom task for setting the state of a setup task
#[tauri::command]
async fn set_complete<R: tauri::Runtime>(
    app: AppHandle<R>,
    state: State<'_, Mutex<SetupState>>,
    task: String,
) -> Result<(), ()> {
    // Lock the state without write access
    let mut state_lock = state.lock().unwrap();
    match task.as_str() {
        "frontend" => state_lock.frontend_task = true,
        "backend" => state_lock.backend_task = true,
        _ => panic!("invalid task completed!"),
    }
    // Check if both tasks are completed
    if state_lock.backend_task && state_lock.frontend_task {
        // Setup is complete, we can close the splashscreen
        // and unhide the main window!
        let splash_window = app.get_webview_window("splashscreen").unwrap();
        let main_window = app.get_webview_window("main").unwrap();
        splash_window.close().unwrap();
        main_window.show().unwrap();
    }
    Ok(())
}

// An async function that does some heavy setup task
async fn setup<R: tauri::Runtime>(app: AppHandle<R>) -> Result<(), ()> {
    // Fake performing some heavy action for 3 seconds
    println!("Performing really heavy backend setup task...");
    sleep(Duration::from_secs(3)).await;
    println!("Backend setup task completed!");
    // Set the backend task as being completed
    // Commands can be ran as regular functions as long as you take
    // care of the input arguments yourself
    set_complete(
        app.clone(),
        app.state::<Mutex<SetupState>>(),
        "backend".to_string(),
    )
    .await?;
    Ok(())
}

pub fn configure<R: tauri::Runtime>(builder: tauri::Builder<R>) -> tauri::Builder<R> {
    // Don't write code before Tauri starts, write it in the
    // setup hook instead!
    builder
        .plugin(tauri_plugin_opener::init())
        // Register a `State` to be managed by Tauri
        // We need write access to it so we wrap it in a `Mutex`
        .manage(Mutex::new(SetupState {
            frontend_task: false,
            backend_task: false,
        }))
        // Add a command we can use to check
        .invoke_handler(tauri::generate_handler![greet, set_complete])
        // Use the setup hook to execute setup related tasks
        // Runs before the main loop, so no windows are yet created
        .setup(|app| {
            // Spawn setup as a non-blocking task so the windows can be
            // created and ran while it executes
            spawn(setup(app.handle().clone()));
            // The hook expects an Ok result
            Ok(())
        })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // Run the app
    configure(tauri::Builder::default())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
