import React, { useState } from 'react'
import { reshape, formatMB, formatLogScale, logScale } from '../utils/benchmark'
import Layout from '@theme/Layout'
import useThemeContext from '@theme/hooks/useThemeContext'

function get_graph_color(label_name) {
  switch (label_name) {
    case 'electron_cpu_intensive':
      return '#0EB9DB'
    case 'electron_hello_world':
      return '#9FEAF9'
    case 'wry_custom_protocol':
      return '#FF9E36'
    case 'wry_hello_world':
      return '#FB898D'
    case 'wry_cpu_intensive':
      return '#ff8e13'
    case 'tauri_hello_world':
      return '#EA7D8C'
    case 'tauri_cpu_intensive':
      return '#DE354C'
    case 'tao_rlib':
      return '#FF1438'
    case 'wry_rlib':
      return '#D4FF14'

    default:
      return '#303846'
  }
}

// todo better styling'
function BenchmarkLoading() {
  return (
    <div style={{ height: 335 }}>
      <span>Loading...</span>
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
        width: 5,
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

  if (props.yTickFormat && props.yTickFormat === formatLogScale) {
    logScale(series)
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

  return (
    <Layout title="Benchmarks">
      <div className="container margin-vert--lg">
        <h1 className="text--center margin-bottom--xl">Benchmarks</h1>
        <section className="text--center">
          <h2>Execution time</h2>
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
              yTickFormat={formatLogScale}
            />
          </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Binary size</h2>
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
        </section>

        <section className="text--center margin-top--xl">
          <h2>Memory memory usage</h2>
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
        </section>

        <section className="text--center margin-top--xl">
          <h2>Thread count</h2>
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
        </section>

        <section className="text--center margin-top--xl">
          <h2>Syscall count</h2>
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
        </section>

        <section className="text--center margin-top--xl row">
          <div className="col">
            <h2>WRY Dependencies</h2>
            <div>
              <BenchmarkOrLoading data={wryData} columns={wryData?.cargoDeps} />
            </div>
          </div>
          <div className="col">
            <h2>Tauri Dependencies</h2>
            <div>
              <BenchmarkOrLoading
                data={tauriData}
                columns={tauriData?.cargoDeps}
              />
            </div>
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
