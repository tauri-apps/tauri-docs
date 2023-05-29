---
sidebar_position: 1
---

import Command from '@theme/Command'

# 앱 배포하기

### 1. 웹 앱 개발

이제 프로젝트를 패키징할 준비가 되었으므로, 프레임워크 또는 번들러(물론, 둘 중에 하나를 사용한다고 가정) 의 빌드 명령을 실행해야 합니다.

:::note

모든 프레임워크는 자체 배포 도구가 있습니다. 이들을 모두 다루거나 최신 상태로 유지하는 것은 이 문서의 범위를 벗어납니다.

:::

### 2. Tauri와 함께 애플리케이션 묶기

<Command name="build" />

이것은 웹 에셋을 Rust 코드와 함께 단일 바이너리에 포함하는 명령입니다. 바이너리 자체는 `src-tauri/target/release/[앱 이름]`에 위치하고, 설치 프로그램은 `src-tauri/target/release/bundle/`에 위치합니다.

`tauri dev` 명령과 마찬가지로, 최초 실행 시 Rust crates를 모아 모든 것을 빌드하는 데 약간의 시간이 걸리지만, 이후에는 앱의 코드만 다시 빌드하면 되기 때문에 더 빨리 실행됩니다.
