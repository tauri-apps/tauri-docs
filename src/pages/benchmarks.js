import React, { useState, useEffect } from 'react'
import { reshape, formatMB, formatLogScale, logScale } from '../utils/benchmark'
import Layout from '@theme/Layout'

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
  const ApexChart = require('react-apexcharts').default
  const [id] = useState(Math.random().toString())

  const shortSha1List = props.sha1List.map((s) => s.slice(0, 6))

  function viewCommitOnClick(c1, c2, { dataPointIndex }) {
    window.open(
      `https://github.com/tauri-apps/wry/commit/${props.sha1List[dataPointIndex]}`
    )
  }

  const options = {
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
      palette: 'palette4',
    },
    
  }

  let series = sort_cols(props.columns);
  if (props.extraDatas && props.extraDatas.length > 0) {
    series = [...series, ...props.extraDatas]
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
    const recentElectronUrl =
    'https://tauri-apps.github.io/benchmark_results/electron-recent.json?'

  const [wryData, setWryData] = useState([])
  const [electronData, setElectronData] = useState([])

  React.useEffect(() => {
    fetch(recentWryUrl).then(async (response) => {
      const rawData = await response.json()
      if (rawData && rawData.length > 0) {
        const data = reshape(rawData)
        setWryData(data)
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
            <h2>Execution time (wry)</h2>
            <div>
              <BenchmarkOrLoading
                data={wryData}
                columns={wryData?.execTime}
                extraDatas={electronData?.execTime ? sort_cols(electronData.execTime) : []}
                yLabel="seconds"
                yTickFormat={formatLogScale}
              />
            </div>
        </section>

        <section className="text--center margin-top--xl">
            <h2>Binary size (wry)</h2>
            <div>
              <BenchmarkOrLoading
                data={wryData}
                columns={wryData?.binarySize}
                extraDatas={electronData?.binarySize ? sort_cols(electronData.binarySize) : []}
                yLabel={'megabytes'}
                yTickFormat={formatMB}
              />
            </div>
        </section>

        <section className="text--center margin-top--xl">
            <h2>Memory memory usage (wry)</h2>
            <div>
              <BenchmarkOrLoading
                data={wryData}
                columns={wryData?.maxMemory}
                extraDatas={electronData?.maxMemory ? sort_cols(electronData.maxMemory) : []}
                yLabel="megabytes"
                yTickFormat={formatMB}
              />
            </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Thread count (wry)</h2>
          <div>
            <BenchmarkOrLoading data={wryData} columns={wryData?.threadCount} extraDatas={electronData?.threadCount ? sort_cols(electronData.threadCount) : []} />
          </div>
        </section>

        <section className="text--center margin-top--xl">
            <h2>Syscall count (wry)</h2>
            <div>
              <BenchmarkOrLoading
                data={wryData}
                columns={wryData?.syscallCount}
                extraDatas={electronData?.syscallCount ? sort_cols(electronData.syscallCount) : []}
              />
            </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Cargo Dependencies (wry)</h2>
          <div>
            <BenchmarkOrLoading data={wryData} columns={wryData?.cargoDeps} />
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
