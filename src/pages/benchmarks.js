import React, { useState } from 'react'
import { reshape, formatMB, formatExecTime } from '../utils/benchmark'
import Layout from '@theme/Layout'
import Alert from '@theme/Alert'
import Icon from '@theme/Icon'
import useThemeContext from '@theme/hooks/useThemeContext'
import ContentLoader from 'react-content-loader'

function get_graph_color(label_name) {
  switch (label_name) {
    case 'Tauri Linux':
      return '#184e77'
    case 'Tauri Windows':
      return '#38a3a5'
    case 'Tauri macOS':
      return '#1a759f'
    case 'WRY Linux':
      return '#f25c54'
    case 'WRY Windows':
      return '#f87a63'
    case 'WRY macOS':
      return '#d81159'
    case 'electron_cpu_intensive':
      return '#0EB9DB'
    case 'electron_hello_world':
      return '#9FEAF9'
    case 'electron_3mb_transfer':
      return '#032E37'
    case 'wry_custom_protocol':
      return '#B4FF36'
    case 'wry_hello_world':
      return '#FB898D'
    case 'wry_cpu_intensive':
      return '#ff8e13'
    case 'tauri_hello_world':
      return '#EA7D8C'
    case 'tauri_cpu_intensive':
      return '#DE354C'
    case 'tauri_3mb_transfer':
      return '#8A3595'
    case 'tao_rlib':
      return '#FF1438'
    case 'wry_rlib':
      return '#D4FF14'

    default:
      return '#303846'
  }
}

function BenchmarkLoading(props) {
  return (
    <div style={{ height: 335 }}>
      <ContentLoader
        speed={1}
        width="100%"
        height="200"
        viewBox="0 0 100% 200"
        backgroundColor="#DDD"
        foregroundColor="#AAA"
        {...props}
      >
        <rect x="25%" y="160" rx="0" ry="0" width="4%" height="40" />
        <rect x="30%" y="145" rx="0" ry="0" width="4%" height="55" />
        <rect x="35%" y="126" rx="0" ry="0" width="4%" height="74" />
        <rect x="40%" y="80" rx="0" ry="0" width="4%" height="120" />
        <rect x="45%" y="142" rx="0" ry="0" width="4%" height="58" />
        <rect x="50%" y="195" rx="0" ry="0" width="4%" height="5" />
        <rect x="55%" y="190" rx="0" ry="0" width="4%" height="10" />
        <rect x="60%" y="50" rx="0" ry="0" width="4%" height="150" />
        <rect x="65%" y="80" rx="0" ry="0" width="4%" height="120" />
        <rect x="70%" y="168" rx="0" ry="0" width="4%" height="32" />
      </ContentLoader>
    </div>
  )
}

// todo maybe split wry/tauri charts?
function BenchmarkChart(props) {
  const { isDarkTheme } = useThemeContext()
  const ApexChart = require('react-apexcharts').default
  const [id] = useState(Math.random().toString())

  const shortSha1List = props.sha1List.map((s) => s.slice(0, 6))

  function viewCommitOnClick(c1, c2, { dataPointIndex }) {
    window.open(
      `https://github.com/tauri-apps/tauri/commit/${props.sha1List[dataPointIndex]}`
    )
  }

  const options = React.useMemo(() => {
    return {
      chart: {
        toolbar: {
          show: true,
        },
        animations: {
          enabled: false,
        },
        events: {
          markerClick: viewCommitOnClick,
        },
        background: 'transparent',
      },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'bottom',
      },
      yaxis: {
        labels: {
          formatter: props.yTickFormat,
        },
        title: {
          text: props.yLabel,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: shortSha1List,
        tooltip: {
          enabled: false,
        },
      },
      theme: {
        mode: isDarkTheme ? 'dark' : 'light',
      },
    }
  }, [isDarkTheme])

  let series = sort_cols(props.columns)
  if (props.extraDatas && props.extraDatas.length > 0) {
    series = [
      ...series.map((data) => {
        return {
          ...data,
          color: get_graph_color(data.name),
        }
      }),
      ...props.extraDatas.map((data) => {
        return {
          ...data,
          color: get_graph_color(data.name),
        }
      }),
    ]
    console.log({ series })
  }

  return (
    <ApexChart
      key={id}
      type="line"
      options={options}
      series={series}
      height="320"
    />
  )
}

function Benchmarks() {
  const recentWryUrl =
    'https://tauri-apps.github.io/benchmark_results/wry-recent.json?'
  const recentTauriUrl =
    'https://tauri-apps.github.io/benchmark_results/tauri-recent.json?'

  const recentElectronUrl =
    'https://tauri-apps.github.io/benchmark_results/electron-recent.json?'

  const [wryData, setWryData] = useState([])
  const [tauriData, setTauriData] = useState([])
  const [electronData, setElectronData] = useState([])

  React.useEffect(() => {
    fetch(recentWryUrl).then(async (response) => {
      const rawData = await response.json()
      if (rawData && rawData.length > 0) {
        const data = reshape(rawData)
        setWryData(data)
      }
    })

    fetch(recentTauriUrl).then(async (response) => {
      const rawData = await response.json()
      if (rawData && rawData.length > 0) {
        const data = reshape(rawData)
        setTauriData(data)
      }
    })

    fetch(recentElectronUrl).then(async (response) => {
      const rawData = await response.json()
      if (rawData && rawData.length > 0) {
        const data = reshape(rawData)
        setElectronData(data)
      }
    })
  }, [])

  console.log(tauriData?.cargoDeps)

  return (
    <Layout title="Benchmarks">
      <div className="container margin-vert--lg" style={{ maxWidth: '860px' }}>
        <h1 className="margin-bottom--md">Benchmarks</h1>
        <p>
          All benchmarks run on Github Actions on <code>ubuntu-latest</code>{' '}
          matrix. We measure various metrics of the following applications:
        </p>
        <ul className="margin-bottom--md">
          <li>
            <a
              href="https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/cpu_intensive"
              target="_blank"
            >
              tauri_cpu_intensive
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/helloworld"
              target="_blank"
            >
              tauri_hello_world
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/tauri/tree/dev/tooling/bench/tests/files_transfer"
              target="_blank"
            >
              tauri_3mb_transfer
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/cpu_intensive.rs"
              target="_blank"
            >
              wry_cpu_intensive
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/hello_world.rs"
              target="_blank"
            >
              wry_hello_world
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/wry/tree/dev/bench/tests/src/custom_protocol.rs"
              target="_blank"
            >
              wry_custom_protocol
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/cpu_intensive"
              target="_blank"
            >
              electron_cpu_intensive
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/hello_world"
              target="_blank"
            >
              electron_hello_world
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tauri-apps/benchmark_electron/tree/dev/apps/file_transfer"
              target="_blank"
            >
              electron_3mb_transfer
            </a>
          </li>
        </ul>
        <p className="margin-bottom--xl">
          <Alert title="Note" icon="light-bulb">
            The CPU intensive benchmark measures how much time it takes to
            calculate all the prime numbers under XXXX without blocking the UI
            and reporting how many have been found so far using web workers.
          </Alert>
        </p>
        <section>
          <h2 id="execution-time" className="anchorify">
            <a href="#execution-time">
              <Icon title="timer" /> Execution Time
            </a>
          </h2>
          <div>
            <BenchmarkOrLoading
              data={tauriData}
              columns={tauriData?.execTime}
              extraDatas={
                electronData?.execTime && wryData?.execTime
                  ? [
                      ...sort_cols(electronData.execTime),
                      ...sort_cols(wryData.execTime),
                    ]
                  : []
              }
              yLabel="seconds"
              yTickFormat={formatExecTime}
            />
          </div>
          <Alert title="Note" icon="light-bulb">
            This shows how much time total it takes intialize the application
            and wait the <code>DOMContentLoaded</code> event. We use{' '}
            <a href="https://github.com/sharkdp/hyperfine" target="_blank">
              hyperfine
            </a>{' '}
            under the hood and run 3 warm-up sequence then, we run 10 sequences
            to calculate the average execution time.
          </Alert>
        </section>

        <section className="margin-top--xl">
          <h2 href="#binary-size" className="anchorify">
            <a href="#binary-size">
              <Icon title="package" /> Binary Size
            </a>
          </h2>
          <div>
            <BenchmarkOrLoading
              data={tauriData}
              columns={tauriData?.binarySize}
              extraDatas={
                electronData?.binarySize && wryData?.binarySize
                  ? [
                      ...sort_cols(electronData.binarySize),
                      ...sort_cols(wryData.binarySize),
                    ]
                  : []
              }
              yLabel={'megabytes'}
              yTickFormat={formatMB}
            />
          </div>
          <Alert title="Note" icon="light-bulb">
            We track the size of various files here. All binaries are compiled
            in <u>release mode</u>.
          </Alert>
        </section>

        <section className="margin-top--xl">
          <h2 id="#memory-usage" className="anchorify">
            <a href="#memory-usage">
              <Icon title="dashboard" /> Memory Usage
            </a>
          </h2>
          <div>
            <BenchmarkOrLoading
              data={tauriData}
              columns={tauriData?.maxMemory}
              extraDatas={
                electronData?.maxMemory && wryData?.maxMemory
                  ? [
                      ...sort_cols(electronData.maxMemory),
                      ...sort_cols(wryData.maxMemory),
                    ]
                  : []
              }
              yLabel="megabytes"
              yTickFormat={formatMB}
            />
          </div>
          <Alert title="Note" icon="light-bulb">
            We use{' '}
            <a href="https://pypi.org/project/memory-profiler/" target="_blank">
              mprof
            </a>{' '}
            to get the max memory usage during execution. Smaller is better.
          </Alert>
        </section>

        <section className="margin-top--xl">
          <h2 id="#thread-count" className="anchorify">
            <a href="#thread-count">
              <Icon title="pulse" /> Thread Count
            </a>
          </h2>
          <div>
            <BenchmarkOrLoading
              data={tauriData}
              columns={tauriData?.threadCount}
              extraDatas={
                electronData?.threadCount && wryData?.threadCount
                  ? [
                      ...sort_cols(electronData.threadCount),
                      ...sort_cols(wryData.threadCount),
                    ]
                  : []
              }
            />
          </div>
          <Alert title="Note" icon="light-bulb">
            How many threads the application use. Smaller is better.
          </Alert>
        </section>

        <section className="margin-top--xl">
          <h2 id="syscall-count" className="anchorify">
            <a href="#syscall-count">
              <Icon title="pulse" /> Syscall Count
            </a>
          </h2>
          <div>
            <BenchmarkOrLoading
              data={tauriData}
              columns={tauriData?.syscallCount}
              extraDatas={
                electronData?.syscallCount && wryData?.syscallCount
                  ? [
                      ...sort_cols(electronData.syscallCount),
                      ...sort_cols(wryData.syscallCount),
                    ]
                  : []
              }
            />
          </div>
          <Alert title="Note" icon="light-bulb">
            How many total syscalls are performed when executing a given
            application. Smaller is better.
          </Alert>
        </section>

        <section className="margin-top--xl">
          <h2 id="tauri-dependencies" className="anchorify">
            <a href="#tauri-dependencies">
              <Icon title="package" /> Dependencies
            </a>
          </h2>
          <div>
            <BenchmarkOrLoading
              data={tauriData}
              columns={
                tauriData?.cargoDeps
                  ? tauriData.cargoDeps.map((data) => {
                      return { ...data, name: `Tauri ${data.name}` }
                    })
                  : undefined
              }
              extraDatas={
                wryData?.cargoDeps
                  ? wryData.cargoDeps.map((data) => {
                      return { ...data, name: `WRY ${data.name}` }
                    })
                  : undefined
              }
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

function sort_cols(columns) {
  return columns.sort((a, b) => {
    // Sort by last benchmark.
    const aLast = a.data[a.data.length - 1]
    const bLast = b.data[b.data.length - 1]
    return (bLast ?? 0) - (aLast ?? 0)
  })
}

function BenchmarkOrLoading(props) {
  function prepare_columns(columns) {
    return columns.map((d) => ({ name: d.name, data: [...d.data] }))
  }
  return props.data && props.columns && typeof window !== 'undefined' ? (
    <BenchmarkChart
      columns={prepare_columns(props.columns)}
      extraDatas={props.extraDatas ? props.extraDatas : []}
      sha1List={props.data.sha1List}
      yLabel={props.yLabel}
      yTickFormat={props.yTickFormat}
    />
  ) : (
    <BenchmarkLoading />
  )
}

export default Benchmarks
