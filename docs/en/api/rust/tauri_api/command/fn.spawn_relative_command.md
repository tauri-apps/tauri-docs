---
title: "fn.spawn_relative_command"
---

# Function [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[command](/docs/api/rust/tauri_api/index.html)::​[spawn_relative_command](/docs/api/rust/tauri_api/)

    pub fn spawn_relative_command(
        command: String, 
        args: Vec<String>, 
        stdout: Stdio
    ) -> Result<Child>

Spawns a process with a command string relative to the current executable path. For example, if your app bundles two executables, you don't need to worry about its path and just run `second-app`.
