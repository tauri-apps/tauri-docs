# Benchmarks

import Chart, { fetchData } from '@theme/Chart'

export var data = fetchData()

All benchmarks run on Github Actions on `ubuntu-latest` matrix. We measure various metrics of the following applications:

- [tauri_cpu_intensive](https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/cpu_intensive)
- [tauri_hello_world](https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/helloworld)
- [tauri_3mb_transfer](https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/files_transfer)
- [wry_cpu_intensive](https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/cpu_intensive.rs)
- [wry_hello_world](https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/hello_world.rs)
- [wry_custom_protocol](https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/custom_protocol.rs)
- [electron_cpu_intensive](https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/cpu_intensive)
- [electron_hello_world](https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/hello_world)
- [electron_3mb_transfer](https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/file_transfer)

:::note
The CPU intensive benchmark measures how much time it takes to calculate all the prime numbers under a certain value without blocking the UI and reporting how many have been found so far using web workers.
:::

## Execution Time

How much time total it takes intialize the application and wait for the `DOMContentLoaded` event. This uses [hyperfine](https://github.com/sharkdp/hyperfine) under the hood and runs 3 warm-up sequence first, then 10 sequences to calculate the average execution time.

<Chart data={data} column="exec_time" />

## Binary Size

All binaries are compiled in release mode.

<!-- <Chart data={data} column="binarySize" /> -->

## Memory Usage

Uses [mprof](https://pypi.org/project/memory-profiler/) to get the max memory usage during execution. Smaller is better.

<!-- <Chart data={data} column="maxMemory" /> -->

## Thread Count

How many threads the application uses. Smaller is better.

<!-- <Chart data={data} column="threadCount" /> -->

## Syscall Count

How many total syscalls are performed when executing a given application. Smaller is better.

<!-- <Chart data={data} column="syscallCount" /> -->

## Dependancies

<!-- <Chart data={data} column="cargoDeps" /> -->
