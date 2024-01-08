---
draft: true
description: View the current benchmarks of Tauri for binary size, memory usage, and other metrics.
---

# Benchmarks

import Chart, { fetchData } from '@theme/BenchmarkChart'

<!-- Data is fetched here so that it is only fetched and processed once, then reused in each of the charts -->

export var data = fetchData()

All benchmarks run on GitHub Actions using the `ubuntu-latest` matrix. Various metrics are measured by the following applications:

| Tauri                 | Wry                   | Electron                 |
| :-------------------- | :-------------------- | :----------------------- |
| [tauri_cpu_intensive] | [wry_cpu_intensive]   | [electron_cpu_intensive] |
| [tauri_hello_world]   | [wry_hello_world]     | [electron_hello_world]   |
| [tauri_3mb_transfer]  | [wry_custom_protocol] | [electron_3mb_transfer]  |

[tauri_cpu_intensive]: https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/cpu_intensive
[tauri_hello_world]: https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/helloworld
[tauri_3mb_transfer]: https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/files_transfer
[wry_cpu_intensive]: https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/cpu_intensive.rs
[wry_hello_world]: https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/hello_world.rs
[wry_custom_protocol]: https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/custom_protocol.rs
[electron_cpu_intensive]: https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/cpu_intensive
[electron_hello_world]: https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/hello_world
[electron_3mb_transfer]: https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/file_transfer

:::note
The CPU intensive benchmark measures how much time it takes to calculate all the prime numbers under a certain value without blocking the UI and reporting how many have been found so far using web workers.
:::

## Execution Time

How much time in total it takes to initialize the application and wait for the `DOMContentLoaded` event. This uses [hyperfine](https://github.com/sharkdp/hyperfine) under the hood and runs 3 warm-up sequence first, then 10 sequences to calculate the average execution time.

<Chart data={data} column="exec_time" />

## Binary Size

All binaries are compiled in release mode.

<Chart data={data} column="binary_size" />

## Memory Usage

Uses [mprof](https://pypi.org/project/memory-profiler/) to get the max memory usage during execution. Smaller is better.

<Chart data={data} column="max_memory" />

## Thread Count

How many threads the application uses. Smaller is better.

<Chart data={data} column="thread_count" />

## Syscall Count

How many total syscalls are performed when executing a given application. Smaller is better.

<Chart data={data} column="syscall_count" />

## Dependencies

<Chart data={data} column="cargo_deps" />
