import React, { Suspense, lazy } from 'react'
import Chart from 'react-apexcharts'
import { useColorMode } from '@docusaurus/theme-common'

/* TODO
  [ ] Dynamically update options.theme.mode based on docusaurus useColorMode.isDarkMode property
  [ ] Binary size chart
*/

// Fetches the raw benchmark data and returns a processed dataset ready to be passed on to the exported component
export async function fetchData() {
  const tauriData = fetchAndParseData(
    'https://tauri-apps.github.io/benchmark_results/tauri-recent.json?',
    'Tauri'
  )
  const wryData = fetchAndParseData(
    'https://tauri-apps.github.io/benchmark_results/wry-recent.json?',
    'Wry'
  )
  const electronData = fetchAndParseData(
    'https://tauri-apps.github.io/benchmark_results/electron-recent.json?',
    'Electron'
  )

  // Returns a flattened and transformed array ready to be displayed
  return await Promise.all([
    await wryData,
    await tauriData,
    await electronData,
  ]).then((results) => transformData(results.flat()))

  async function fetchAndParseData(url, type) {
    return fetch(url).then(async (response) => {
      const rawData = await response.json()
      if (rawData && rawData.length > 0) {
        // Adds in what source the data is from
        rawData.forEach(function (_, index) {
          this[index].type = type
        }, rawData)
        return rawData
      }
    })
  }

  function transformData(data) {
    const array = []

    // Iterate through the passed data array to transform it into the appropriate format
    data.forEach((item) => {
      // Execution time
      Object.entries(item.exec_time).forEach(([key, value]) => {
        array.push({
          type: 'exec_time',
          series: key,
          order: item.created_at,
          value: value.mean, // Mean must be extracted from the value object
        })
      })

      // Binary size
      array.push(...createSeriesData(item, 'binary_size'))

      // Memory usage
      array.push(...createSeriesData(item, 'max_memory'))

      // Thread count
      array.push(...createSeriesData(item, 'thread_count'))

      // Syscall Count
      array.push(...createSeriesData(item, 'syscall_count'))

      // Dependancies
      Object.entries(item).forEach(([key, value]) => {
        // Check if the cargo_deps key exists
        if (key == 'cargo_deps') {
          // If it does, then extract the values
          Object.entries(value).forEach(([key, value]) => {
            array.push({
              type: 'cargo_deps',
              series: item.type + ' ' + key,
              order: item.created_at,
              value: value,
            })
          })
        }
      })
    })

    // Format the data to be displayed
    array.forEach(function (part, index) {
      // Round the exec_time values to 3 decimal places
      if (part.type == 'exec_time') {
        this[index].value = +part.value.toFixed(3)
      }

      // Convert to megabytes
      if (part.type === 'binary_size' || part.type === 'max_memory') {
        this[index].value = (part.value / 1024 / 1024).toFixed(2)
      }
    }, array)

    return array

    // Transforms data into an easier to graph format
    function createSeriesData(data, categoryName) {
      const array = []
      Object.entries(data[categoryName]).forEach(([key, value]) => {
        array.push({
          type: categoryName,
          series: key,
          order: data.created_at,
          value: value,
        })
      })
      return array
    }
  }
}

// Dynamically configures options passed to the Chart component
function createOptions(columnName, colorMode) {
  var yAxisTitle
  var yAxisFormatter = function (value) {
    return value
  }

  switch (columnName) {
    case 'exec_time':
      yAxisTitle = 'seconds'
      break
    case 'binary_size':
    case 'max_memory':
      yAxisTitle = 'megabytes'
      yAxisFormatter = function (value) {
        return value + ' MBs'
      }
      break
    case 'thread_count':
      yAxisTitle = 'threads'
      break
    case 'syscall_count':
      yAxisTitle = 'syscalls'
      break
    case 'cargo_deps':
      yAxisTitle = 'dependencies'
      break
    default:
      yAxisTitle = ''
  }

  const options = {
    chart: {
      toolbar: false,
      animations: {
        enabled: false,
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
        // Removes the header label from the tooltip
        formatter: function () {
          return ''
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        formatter: yAxisFormatter,
      },
      title: {
        text: yAxisTitle,
      },
    },
    theme: {
      mode: colorMode,
    },
  }

  return options
}

// Creates data ready to be graphed by filtering out based on columnName
function createSeries(data, columnName) {
  // Filter on the specific passed column name
  data = data.filter((item) => item.type == columnName)

  // Prepare blank array
  const seriesData = []

  // Create an array of unique categories
  const dataCategories = [...new Set(data.map((item) => item.series))]

  // Loop through each category and set the values for it
  dataCategories.forEach((series) => {
    const categoryData = []

    data
      .filter((item) => item.series == series)
      .map((dataPoint) => {
        categoryData.push({
          x: dataPoint.order,
          y: dataPoint.value,
        })
      })

    seriesData.push({
      name: series,
      data: categoryData,
      color: getGraphColor(series),
    })
  })

  // Return a series for each label
  return seriesData

  function getGraphColor(label_name) {
    switch (label_name) {
      case 'Tauri Linux':
        return '#184e77'
      case 'Tauri Windows':
        return '#38a3a5'
      case 'Tauri macOS':
        return '#1a759f'
      case 'Wry Linux':
        return '#f25c54'
      case 'Wry Windows':
        return '#f87a63'
      case 'Wry macOS':
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
}

// Chart component
export default function App(props) {
  const AsyncChart = lazy(async () => {
    const data = await props.data
  
    return {
      default: () => {
        const colorMode = useColorMode()
  
        return (
          <Chart
            options={createOptions(props.column, colorMode.colorMode)}
            series={createSeries(data, props.column)}
            type="line"
            height="320"
          />
        )
      },
    }
  })

  return (
    <Suspense fallback={<p>Loading data...</p>}>
      <AsyncChart/>
    </Suspense>
  )
}
