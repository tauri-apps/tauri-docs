---
description: Voir les benchmarks actuels de Tauri pour la taille binaire, l'utilisation de la mémoire, et d'autres métriques.
---

# Benchmarks

import Chart, { fetchData } from '@theme/BenchmarkChart'

<!-- Data is fetched here so that it is only fetched and processed once, then reused in each of the charts -->

export var data = fetchData()

Tous les benchmarks sont exécutés sur Github Actions en utilisant `ubuntu-latest`. Diverses métriques sont mesurées par les applications suivantes :

| Tauri                     | Wry                       | Electron                     |
|:------------------------- |:------------------------- |:---------------------------- |
| [tauri_cpu_intensive][] | [wry_cpu_intensive][]   | [electron_cpu_intensive][] |
| [tauri_hello_world][]   | [wry_hello_world][]     | [electron_hello_world][]   |
| [tauri_3mb_transfer][]  | [wry_custom_protocol][] | [electron_3mb_transfer][]  |

:::note
Le benchmark intensif du processeur mesure combien de temps il faut pour calculer tous les nombres premiers sous une certaine valeur sans bloquer l'interface utilisateur et rapporter combien ont été trouvés jusqu'à présent en utilisant les web workers .
:::

## Temps d'Exécution

Combien de temps il faut pour initialiser l'application et attendre l'événement `DOMContentLoaded`. Cela utilise [hyperfine](https://github.com/sharkdp/hyperfine) sous le capot et exécute 3 séquences d'échauffement d'abord, puis 10 séquences pour calculer le temps d'exécution moyen.

<Chart data={data} column="exec_time" />

## Taille du binaire

Tous les binaires sont compilés en mode publication.

<Chart data={data} column="binary_size" />

## Utilisation de la mémoire

Utilise [mprof](https://pypi.org/project/memory-profiler/) pour obtenir l'utilisation maximale de la mémoire pendant l'exécution. Meilleur si c'est plus petit.

<Chart data={data} column="max_memory" />

## Nombre de Thread

Combien de threads l'application utilise. Meilleur si c'est plus petit.

<Chart data={data} column="thread_count" />

## Nombre de Syscall

Combien d'appels systèmes sont exécutés lors de l'exécution d'une application donnée. Meilleur si c'est plus petit.

<Chart data={data} column="syscall_count" />

## Dépendances

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
