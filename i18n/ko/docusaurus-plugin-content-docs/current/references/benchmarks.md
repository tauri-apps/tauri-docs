---
description: Tauri에서 바이너리 파일 크기, 메모리 사용량, 그 외 다양한 항목을 벤치마크한 결과를 볼 수 있습니다.
---

# 벤치마크

import Chart, { fetchData } from '@theme/BenchmarkChart'

<!-- Data is fetched here so that it is only fetched and processed once, then reused in each of the charts -->

export var data = fetchData()

모든 벤치마크는 `ubuntu-latest` 매트릭스를 사용하여 GitHub Actions에서 실행됩니다. 다음 앱들에서 다양한 항목을 측정했습니다.

| Tauri                     | Wry                       | Electron                     |
|:------------------------- |:------------------------- |:---------------------------- |
| [tauri_cpu_intensive][] | [wry_cpu_intensive][]   | [electron_cpu_intensive][] |
| [tauri_hello_world][]   | [wry_hello_world][]     | [electron_hello_world][]   |
| [tauri_3mb_transfer][]  | [wry_custom_protocol][] | [electron_3mb_transfer][]  |

:::note
CPU intesive 벤치마크는 UI를 멈추지 않고 특정 값보다 작은 모든 소수를 찾는 데에 얼마나 많은 시간을 먹었는지 측정하고, 얼마나 많은 소수를 찾았는지 보고합니다.
:::

## 실행에 소요한 시간

앱을 초기화하고 `DOMContentLoaded`이벤트가 발생하기까지 걸린 시간입니다. 내부적으로 [hyperfine](https://github.com/sharkdp/hyperfine)을 사용하고, 3번의 예열 과정을 거친 후, 10번 실행해 평균적으로 실행에 소요한 시간을 구합니다.

<Chart data={data} column="exec_time" />

## 바이너리 파일 크기

모든 바이너리는 릴리스 모드로 컴파일합니다.

<Chart data={data} column="binary_size" />

## 메모리 사용량

[mprof](https://pypi.org/project/memory-profiler/)을 사용해 실행 중 메모리 사용량의 최대치를 가져옵니다. 작을수록 좋습니다.

<Chart data={data} column="max_memory" />

## 스레드 개수

앱이 사용하는 스레드의 수입니다. 작을수록 좋습니다.

<Chart data={data} column="thread_count" />

## 시스템 호출 횟수

해당 앱을 실행하는 데에 발생한 시스템 호출의 개수입니다. 작을수록 좋습니다.

<Chart data={data} column="syscall_count" />

## 의존성

<Chart data={data} column="cargo_deps" />

[tauri_cpu_intensive]: https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/cpu_intensive
[tauri_hello_world]: https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/helloworld
[tauri_3mb_transfer]: https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/files_transfer
[wry_cpu_intensive]: https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/cpu_intensive.rs
[wry_hello_world]: https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/hello_world.rs
[wry_custom_protocol]: https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/custom_protocol.rs
[electron_cpu_intensive]: https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/cpu_intensive
[electron_hello_world]: https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/hello_world
[electron_3mb_transfer]: https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/file_transfer
