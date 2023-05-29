---
sidebar_position: 7
---

# 외부 바이너리 포함하기

애플리케이션이 작동하도록 하거나 사용자가 추가 종속성(예: Node.js 또는 Python)을 설치하지 않도록 하려면 종속 바이너리를 포함해야 할 수 있습니다. 우리는 이를 `sidecar` 바이너리라고 부릅니다.

선택한 바이너리를 묶으려면 `tauri.conf.json`에 `tauri > bundle` 개체 `externalBin` 속성으로 추가해야 합니다.

tauri.conf.json 구성에 대해 자세한 내용은 [here][tauri.bundle]에서 볼수 있습니다.

`externalBin`은 대상 바이너리에 절대, 상대 경로가 있는 문자열 목록을 말합니다.

다음은 설정 관련 내용을 설명하는 샘플입니다. `tauri.conf.json` 파일 전체를 나타내지 않습니다.

```json
{
  "tauri": {
    "bundle": {
      "externalBin": [
        "/absolute/path/to/sidecar",
        "relative/path/to/binary",
        "binaries/my-sidecar"
      ]
    },
    "allowlist": {
      "shell": {
        "sidecar": true,
        "scope": [
          { "name": "/absolute/path/to/sidecar", "sidecar": true },
          { "name": "relative/path/to/binary", "sidecar": true },
          { "name": "binaries/my-sidecar", "sidecar": true }
        ]
      }
    }
  }
}
```

이름이 같고 접미사가 `-$TARGET_TRIPLE`인 바이너리가 지정된 경로에 있어야 합니다. 예를 들어, `"externalBin": ["binaries/my-sidecar"]`에는 `src-tauri/binaries/my-sidecar-x86_64-unknown-linux-gnu` Linux 실행 파일이 필요합니다. You can find the **current** platform's target triple by looking at the `host:` property reported by the `rustc -Vv` command.

If the `grep` and `cut` commands are available, as they should on most Unix systems, you can extract the target triple directly with the following command:

```shell
rustc -Vv | grep host | cut -f2 -d' '
```

On Windows you can use PowerShell instead:

```powershell
rustc -Vv | Select-String "host:" | ForEach-Object {$_.Line.split(" ")[1]}
```

다음은 타겟 트리플(target triple)을 바이너리에 추가하는 Node.js 스크립트입니다.

```javascript
const execa = require('execa')
const fs = require('fs')

let extension = ''
if (process.platform === 'win32') {
  extension = '.exe'
}

async function main() {
  const rustInfo = (await execa('rustc', ['-vV'])).stdout
  const targetTriple = /host: (\S+)/g.exec(rustInfo)[1]
  if (!targetTriple) {
    console.error('Failed to determine platform target triple')
  }
  fs.renameSync(
    `src-tauri/binaries/sidecar${extension}`,
    `src-tauri/binaries/sidecar-${targetTriple}${extension}`
  )
}

main().catch((e) => {
  throw e
})
```

## Javascript에서 실행하기

JavaScript 코드에서 `shell` 모듈의 `Command` 클래스를 가져오고 `sidecar` 정적 메서드를 사용합니다.

`shell > scope`에 모든 바이너리를 설정하고 `shell > sidecar` 활성화 하려면, 허용 목록을 구성해야 합니다.

```javascript
import { Command } from '@tauri-apps/api/shell'
// alternatively, use `window.__TAURI__.shell.Command`
// `binaries/my-sidecar` is the EXACT value specified on `tauri.conf.json > tauri > bundle > externalBin`
const command = Command.sidecar('binaries/my-sidecar')
const output = await command.execute()
```

## Rust에서 실행하기

Rust 측에서는 `tauri::api::process` 모듈에서 `Command` 구조체를 가져옵니다:

```rust
// `new_sidecar()` expects just the filename, NOT the whole path like in JavaScript
let (mut rx, mut child) = Command::new_sidecar("my-sidecar")
  .expect("failed to create `my-sidecar` binary command")
  .spawn()
  .expect("Failed to spawn sidecar");

tauri::async_runtime::spawn(async move {
  // read events such as stdout
  while let Some(event) = rx.recv().await {
    if let CommandEvent::Stdout(line) = event {
      window
        .emit("message", Some(format!("'{}'", line)))
        .expect("failed to emit event");
      // write to stdin
      child.write("message from Rust\n".as_bytes()).unwrap();
    }
  }
});
```

**process-command-api** Cargo기능을 활성화해야 합니다(구성을 변경하면 Tauri의 CLI가 이 작업을 수행함).

```toml
# Cargo.toml
[dependencies]
tauri = { version = "1", features = ["process-command-api", ...] }
```

## 인수 전달하기

일반적인 `명령`을 실행할 때와 마찬가지로 Sidecar 명령에 인수를 전달할 수 있습니다( [Command API에 대한 액세스 제한][]).

먼저, `tauri.conf.json`에서 Sidecar 명령에 전달해야 하는 인수를 정의해야 합니다.

```json
{
  "tauri": {
    "bundle": {
      "externalBin": [
        "/absolute/path/to/sidecar",
        "relative/path/to/binary",
        "binaries/my-sidecar"
      ]
    },
    "allowlist": {
      "shell": {
        "sidecar": true,
        "scope": [
          {
            "name": "binaries/my-sidecar",
            "sidecar": true,
            "args": [
              "arg1",
              "-a",
              "--arg2",
              {
                "validator": "\\S+"
              }
            ]
          }
        ]
      }
    }
  }
}
```

그리고, sidecar 명령을 호출하려면 **모든** 인수를 배열로 간편하게 전달하면 됩니다.

```js
import { Command } from '@tauri-apps/api/shell'
// alternatively, use `window.__TAURI__.shell.Command`
// `binaries/my-sidecar` is the EXACT value specified on `tauri.conf.json > tauri > bundle > externalBin`
// notice that the args array matches EXACTLY what is specified on `tauri.conf.json`.
const command = Command.sidecar('binaries/my-sidecar', [
  'arg1',
  '-a',
  '--arg2',
  'any-string-that-matches-the-validator',
])
const output = await command.execute()
```

## Sidecar에서 Node.js 사용하기

Tauri [sidecar 예제][]는 sidecar API를 사용하여 Tauri에서 Node.js 애플리케이션을 실행하는 방법을 보여줍니다. [pkg][]를 사용하여 node.js 코드를 컴파일하고 위의 스크립트를 사용하여 실행합니다.

[tauri.bundle]: ../../api/config.md#tauri.bundle
[sidecar 예제]: https://github.com/tauri-apps/tauri/tree/dev/examples/sidecar
[Command API에 대한 액세스 제한]: ../../api/js/shell.md#restricting-access-to- the-command-apis
[pkg]: https://github.com/vercel/pkg
