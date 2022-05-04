import React, { Component } from 'react'
import Chart from 'react-apexcharts'

/* TODO
  [x] Labels with commit IDs (sort as well)
  [x] Axis labels and number formatting
  [ ] Number of dependancies
  [ ] Uniform colours
*/

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

  // Returns a flattened and transformed array ready to be displayed
  return await Promise.all([
    await wryData,
    await tauriData,
    await electronData,
  ]).then((results) => transformData(results.flat()))
}

async function fetchAndParseData(url) {
  return fetch(url).then(async (response) => {
    const rawData = await response.json()
    if (rawData && rawData.length > 0) {
      return rawData
    }
  })
}

// Transforms data into an easier to graph format
function transformData(data) {
  const array = []

  // Iterate through the passed data array to transform it into the appropriate format

  data.forEach((item) => {
    // Execution time
    Object.entries(item.exec_time).forEach(([key, value]) => {
      array.push({
        type: 'exec_time',
        series: key,
        order: item.sha1,
        value: value.mean, // Mean needs to be extracted from the value object
      })
    })

    // Binary size
    array.push(...createSeries(item, 'binary_size'))

    // Memory usage
    array.push(...createSeries(item, 'max_memory'))

    // Thread count
    array.push(...createSeries(item, 'thread_count'))

    // Syscall Count
    array.push(...createSeries(item, 'syscall_count'))

    // Dependancies
    Object.entries(item).forEach(([key, value]) => {
      // Check if the cargo_deps key exists
      if (key == 'cargo_deps') {
        // If it does, then extract the values
        Object.entries(value).forEach(([key, value]) => {
          array.push({
            type: 'cargo_deps',
            series: key,
            order: item.sha1,
            value: value,
          })
        })
      }
    })
  })

  function createSeries(data, categoryName) {
    const array = []
    Object.entries(data[categoryName]).forEach(([key, value]) => {
      array.push({
        type: categoryName,
        series: key,
        order: data.sha1,
        value: value,
      })
    })
    return array
  }

  // Format the data to be displayed
  array.forEach(function (part, index) {
    // Round the exec_time values to 3 decimal places
    if (part.type == 'exec_time') {
      this[index].value = +part.value.toFixed(3)
    }
    // Convert to megabytes
    if (part.type == 'binary_size') {
      this[index].value = (part.value / 1024 / 1024).toFixed(2)
    }
    // Convert to megabytes
    if (part.type == 'max_memory') {
      this[index].value = (part.value / 1024 / 1024).toFixed(2)
    }
  }, array)

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

  // Return a series for each label
  return seriesData
}

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
          xaxis: {
            labels: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
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
