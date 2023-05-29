---
description: Visualizza gli attuali benchmark di Tauri per le dimensioni file binari, utilizzo della memoria e altre metriche.
---

# Benchmarks

import Chart, { fetchData } from '@theme/BenchmarkChart'

<!-- Data is fetched here so that it is only fetched and processed once, then reused in each of the charts -->

export var data = fetchData()

Tutti i benchmarks vengono eseguiti su Github Actions usando come metrica `ubuntu-latest`. Varie metriche sono misurate tramite le seguenti prove:

| Tauri                     | Wry                       | Electron                     |
|:------------------------- |:------------------------- |:---------------------------- |
| [tauri_cpu_intensive][] | [wry_cpu_intensive][]   | [electron_cpu_intensive][] |
| [tauri_hello_world][]   | [wry_hello_world][]     | [electron_hello_world][]   |
| [tauri_3mb_transfer][]  | [wry_custom_protocol][] | [electron_3mb_transfer][]  |

:::note
Le misure dei benchmark che usano intensamente la CPU si basano su quanto tempo viene impiegato nel calcolo di tutti i numeri primi inferiori ad un certo valore senza bloccare la UI e riportando quanti ne sono stati trovati usando i web workers.
:::

## Tempo di Esecuzione

Quanto tempo in totale è necessario per inizializzare l'applicazione e aspettare l'evento `DOMContentLoaded`. Questo usa [hyperfine](https://github.com/sharkdp/hyperfine) tra le fila e avvia 3 sequenze di riscaldamento prima, poi 10 sequenze per calcolare il tempo di esecuzione medio.

<Chart data={data} column="exec_time" />

## Grandezza dei File Binari

Tutti i file binari sono compilati in modalità release.

<Chart data={data} column="binary_size" />

## Utilizzo della Memoria

Uses [mprof](https://pypi.org/project/memory-profiler/) to get the max memory usage during execution. Più piccolo è, meglio è.

<Chart data={data} column="max_memory" />

## Totale dei Thread

Quanti thread l'applicazione usa. Più piccolo è, meglio è.

<Chart data={data} column="thread_count" />

## Totale delle syscall

Quante syscall vengono utilizzate durante l'esecuzione dell'applicazione. Più piccolo è, meglio è.

<Chart data={data} column="syscall_count" />

## Dipendenze

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
