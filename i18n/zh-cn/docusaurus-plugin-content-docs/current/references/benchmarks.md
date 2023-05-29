---
description: 查看 Tauri 性能测试中的二进制大小、内存用量及其他数据。
---

# 性能测试

import Chart, { fetchData } from '@theme/BenchmarkChart'

<!-- Data is fetched here so that it is only fetched and processed once, then reused in each of the charts -->

export var data = fetchData()

All benchmarks run on GitHub Actions using the `ubuntu-latest` matrix. Various metrics are measured by the following applications:

| Tauri                     | Wry                       | Electron                     |
|:------------------------- |:------------------------- |:---------------------------- |
| [tauri_cpu_intensive][] | [wry_cpu_intensive][]   | [electron_cpu_intensive][] |
| [tauri_hello_world][]   | [wry_hello_world][]     | [electron_hello_world][]   |
| [tauri_3mb_transfer][]  | [wry_custom_protocol][] | [electron_3mb_transfer][]  |

:::note
CPU 密集测试使用无阻塞 UI 来计算至一定数量上限的素数值，最后通过 Web Worker 汇报计算了多少。
:::

## 执行时长

How much time in total it takes to initialize the application and wait for the `DOMContentLoaded` event. 其底层使用 [hyperfine](https://github.com/sharkdp/hyperfine)。在运行完三个预热序列后，程序会再运行十个序列来计算平均执行时间。

<Chart data={data} column="exec_time" />

## 二进制文件大小

所有二进制文件均以发行模式 (Release) 编译。

<Chart data={data} column="binary_size" />

## 内存用量

使用 [mproff](https://pypi.org/project/memory-profiler/) 来获取测试过程中的最大内存使用量。 越小越好。

<Chart data={data} column="max_memory" />

## 线程数

应用程序使用的线程数量。 越小越好。

<Chart data={data} column="thread_count" />

## 系统调用数

应用程序时执行的系统调用总数。 越小越好。

<Chart data={data} column="syscall_count" />

## 依赖数

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
