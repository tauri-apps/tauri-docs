---
title: "fn.spawn_relative_command"
---

# Function [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[command](/docs/api/rust/tauri_api/index.html)::​[spawn_relative_command](/docs/api/rust/tauri_api/)

    pub fn spawn_relative_command(
        command: String, 
        args: Vec<String>, 
        stdout: Stdio
    ) -> Result<Child>

Génère un processus avec une chaîne de commande relative au chemin d'accès à l'exécutable en cours. Par exemple, si votre application regroupe deux exécutables, vous n'avez pas à vous soucier de son chemin d'accès et il vous suffit d'exécuter `second-app`.
