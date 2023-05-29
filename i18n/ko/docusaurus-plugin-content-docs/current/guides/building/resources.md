---
sidebar_position: 8
---

# 추가 파일 끼워넣기

프론트엔드(`distDir`)의 일부가 아니라거나, 바이너리에 인라인하기에는 너무 크다거나 하는 이유로 추가 파일을 앱 번들에 포함해야하는 경우가 있습니다. 그런 파일을 여기서는 `resources`라고 부릅니다.

선택한 파일들을 묶으려면 `tauri.conf.json`에 `tauri > bundle` 개체 `resources` 속성에 추가해야 합니다.

tauri.conf.json 구성에 대해 자세한 내용은 [here][tauri.bundle]에서 볼수 있습니다.

`resources`은 대상 파일에 절대, 상대 경로가 있는 문자열 목록을 말합니다. 디렉토리에서 여러 파일을 포함해야 하는 경우 glob 패턴을 지원합니다.

다음은 설정 관련 내용을 설명하는 샘플입니다. `tauri.conf.json` 파일 전체를 나타내지 않습니다.

```json title=tauri.conf.json
{
  "tauri": {
    "bundle": {
      "resources": [
        "/absolute/path/to/textfile.txt",
        "relative/path/to/jsonfile.json",
        "resources/*"
      ]
    },
    "allowlist": {
      "fs": {
        "scope": ["$RESOURCE/*"]
      }
    }
  }
}
```

:::note

절대 경로 및 상위 구성 요소(`../`) 를 포함하는 경로는 `"$RESOURCE/*"`를 통해서만 허용됩니다. `"path/to/file.txt"`와 같은 상대 경로는 `"$RESOURCE/path/to/file.txt"`를 통해 명시적으로 허용됩니다.

:::

## JavaScript에서 파일 접근하기

이번 예제에서는 다음과 같은 추가 i18n json 파일을 묶으려고 합니다:

```json title=de.json
{
  "hello": "Guten Tag!",
  "bye": "Auf Wiedersehen!"
}
```

이런 경우, 이 파일들을 `tauri.conf.json` 옆에 있는 `lang` 디렉토리에 저장합니다. `"lang/*"`을 `resources`에 추가하고 `$RESOURCE/lang/*`을 위와 같이 fs 범위에 추가합니다.

`path > all`를 활성화 하고, 필요한 [`fs` APIs][] `fs > readTextFile`예제를 참고하여 허용 목록을 구성해야 합니다.

```javascript
import { resolveResource } from '@tauri-apps/api/path'
// alternatively, use `window.__TAURI__.path.resolveResource`
import { readTextFile } from '@tauri-apps/api/fs'
// alternatively, use `window.__TAURI__.fs.readTextFile`

// `lang/de.json` is the value specified on `tauri.conf.json > tauri > bundle > resources`
const resourcePath = await resolveResource('lang/de.json')
const langDe = JSON.parse(await readTextFile(resourcePath))

console.log(langDe.hello) // This will print 'Guten Tag!' to the devtools console
```

## Rust에서 파일 접근하기

이것은 위의 예를 기반으로 합니다. On the Rust side, you need an instance of the [`PathResolver`][] which you can get from [`App`][] and [`AppHandle`][]:

```rust
tauri::Builder::default()
  .setup(|app| {
    let resource_path = app.path_resolver()
      .resolve_resource("lang/de.json")
      .expect("failed to resolve resource");

    let file = std::fs::File::open(&resource_path).unwrap();
    let lang_de: serde_json::Value = serde_json::from_reader(file).unwrap();

    println!("{}", lang_de.get("hello").unwrap()); // 'Guten Tag!'을 터미널에 출력할 겁니다.

    Ok(())
  })
```

```rust
#[tauri::command]
fn hello(handle: tauri::AppHandle) -> String {
   let resource_path = handle.path_resolver()
      .resolve_resource("lang/de.json")
      .expect("failed to resolve resource");

    let file = std::fs::File::open(&resource_path).unwrap();
    let lang_de: serde_json::Value = serde_json::from_reader(file).unwrap();

    lang_de.get("hello").unwrap()
}
```

[tauri.bundle]: ../../api/config.md#tauri.bundle
[`fs` APIs]: ../../api/js/fs/
[`PathResolver`]: https://docs.rs/tauri/latest/tauri/struct.PathResolver.html
[`App`]: https://docs.rs/tauri/latest/tauri/struct.App.html
[`AppHandle`]: https://docs.rs/tauri/latest/tauri/struct.AppHandle.html
