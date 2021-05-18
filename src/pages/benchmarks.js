import React, { useState, useEffect } from 'react'
import { reshape, formatMB, formatLogScale, logScale } from '../utils/benchmark'
import Layout from '@theme/Layout'
import ApexChart from 'react-apexcharts'

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
  const [id] = useState(Math.random().toString())

  const shortSha1List = props.sha1List.map((s) => s.slice(0, 6))

  function viewCommitOnClick(c1, c2, { dataPointIndex }) {
    window.open(
      `https://github.com/tauri-apps/wry/commit/${props.sha1List[dataPointIndex]}`
    )
  }

  const cols = props.columns.map((d) => ({ name: d.name, data: [...d.data] }))

  if (props.yTickFormat && props.yTickFormat === formatLogScale) {
    logScale(cols)
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
      width: 1,
      curve: 'straight',
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
  }

  const series = cols.sort((a, b) => {
    // Sort by last benchmark.
    const aLast = a.data[a.data.length - 1]
    const bLast = b.data[b.data.length - 1]
    return (bLast ?? 0) - (aLast ?? 0)
  })

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

  const [wryData, setWryData] = useState([])

  React.useEffect(() => {
    setWryData(null)
    fetch(recentWryUrl).then(async (response) => {
      const rawData = await response.json()
      if (rawData && rawData.length > 0) {
        const data = reshape(rawData)
        setWryData(data)
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
              data={wryData}
              columns={wryData?.execTime}
              yLabel="seconds"
              yTickFormat={formatLogScale}
            />
          </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Binary size</h2>
          <div>
            <BenchmarkOrLoading
              data={wryData}
              columns={wryData?.binarySize}
              yLabel={'megabytes'}
              yTickFormat={formatMB}
            />
          </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Thread count</h2>
          <div>
            <BenchmarkOrLoading data={wryData} columns={wryData?.threadCount} />
          </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Syscall count</h2>
          <div>
            <BenchmarkOrLoading
              data={wryData}
              columns={wryData?.syscallCount}
            />
          </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Cargo Dependencies</h2>
          <div>
            <BenchmarkOrLoading data={wryData} columns={wryData?.cargoDeps} />
          </div>
        </section>

        <section className="text--center margin-top--xl">
          <h2>Max memory usage</h2>
          <div>
            <BenchmarkOrLoading
              data={wryData}
              columns={wryData?.maxMemory}
              yLabel="megabytes"
              yTickFormat={formatMB}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

function BenchmarkOrLoading(props) {
  return props.data && props.columns ? (
    <BenchmarkChart
      columns={props.columns}
      sha1List={props.data.sha1List}
      yLabel={props.yLabel}
      yTickFormat={props.yTickFormat}
    />
  ) : (
    <BenchmarkLoading />
  )
}

export default Benchmarks
