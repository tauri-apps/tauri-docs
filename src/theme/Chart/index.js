import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export async function fetchData() {
  const wryData = fetchAndParseData(
    'https://tauri-apps.github.io/benchmark_results/wry-recent.json?'
  )
  const tauriData = fetchAndParseData(
    'https://tauri-apps.github.io/benchmark_results/tauri-recent.json?'
  )
  const electronData = fetchAndParseData(
    'https://tauri-apps.github.io/benchmark_results/electron-recent.json?'
  )

  // Returns a flattened array combining all data sources
  return await Promise.all([
    await wryData,
    await tauriData,
    await electronData,
  ]).then((results) => transformData(results.flat()))

  async function fetchAndParseData(url) {
    return fetch(url).then(async (response) => {
      const rawData = await response.json()
      if (rawData && rawData.length > 0) {
        return rawData
      }
    })
  }
}

// Transforms data into an easier to graph format
function transformData(data) {
  const array = []

  data.forEach((item) => {
    // Execution time
    Object.entries(item.exec_time).forEach(([key, value]) => {
      array.push({
        type: 'exec_time',
        series: key,
        order: Math.random, // This needs to be updated based on whatever logic
        value: value.mean,
      })
    })

    // Binary size

    // Memory usage

    // Thread count

    // Syscall Count

    // Dependancies
  })

  return array
}

function create_series_data(data, columnName) {
  const filteredData = data.filter((item) => item.type == columnName)

  // Get unique series values
  const series = [...new Set(filteredData.map((item) => item.series))]

  // Prepare blank array
  const seriesData = []

  // Loop through each series and set the values for it
  series.forEach((series) => {
    const transformedData = []

    filteredData
      .filter((item) => item.series == series)
      .map((dataPoint) => {
        transformedData.push({
          x: dataPoint.order,
          y: dataPoint.value,
        })
      })

    seriesData.push({
      name: series,
      data: transformedData,
    })
  })

  console.log(seriesData)

  // Return a series for each label
  return seriesData
}

/*
series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
*/

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
    }

    props.data.then((result) => {
      this.setState({
        isLoaded: true,
        options: {
          chart: {
            toolbar: {
              show: true,
            },
            animations: {
              enabled: false,
            },
            events: {
              // markerClick: viewCommitOnClick,
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
            // categories: shortSha1List,
            tooltip: {
              enabled: false,
            },
            type: 'category',
          },
          theme: {
            // mode: colorMode,
          },
        },
        series: create_series_data(result, props.column),
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="320"
          />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    )
  }
}

export default App
