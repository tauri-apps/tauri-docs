fn main() {
    for dir in std::fs::read_dir("../tauri/core")
        .unwrap()
        .map(|res| res.unwrap().path())
    {
        let folder_name = dir.file_name().unwrap();
        if folder_name == "tauri-config-schema" || folder_name == "tests" {
            continue;
        }
        let mut target_dir = dir.clone();
        target_dir.push("Cargo.toml");
        let json_path = rustdoc_json::Builder::default()
            .toolchain("nightly")
            .manifest_path(target_dir)
            .document_private_items(true)
            .quiet(false)
            .silent(false)
            .all_features(true)
            // .features(["dox"])
            .build()
            .unwrap();
        let mut new_path = json_path.clone();
        let _ = new_path.pop();
        let _ = new_path.pop();
        new_path.push(dir.file_name().unwrap());
        new_path.set_extension("json");
        let _ = std::fs::rename(json_path, &new_path);
        println!("Wrote rustdoc JSON to {:?}", new_path);
    }
}
