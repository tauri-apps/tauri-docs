import React, { useState, useEffect } from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

// Fetches the raw benchmark data and returns a processed dataset ready to be passed on to the exported component
export async function fetchData() {
  // Only fetches data if running in the browser
  if (!ExecutionEnvironment.canUseDOM) {
    return
  }
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

    // Iterate through the passed data array to transform it into the format ready to be passed to the BenchmarkChart component
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

      array.push(...createSeriesData(item, 'binary_size'))
      array.push(...createSeriesData(item, 'max_memory'))
      array.push(...createSeriesData(item, 'thread_count'))
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

      // Convert order date string to date type
      this[index].order = new Date(this[index].order)
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
      curve: 'straight',
    },
    xaxis: {
      type: 'datetime',
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

// Filters data based on the column name and outputs in the format required by ApexCharts
function createSeries(data, columnName) {
  const seriesData = []

  // Filter on the specific passed column name
  data = data.filter((item) => item.type == columnName)

  // Create an array of unique categories
  const dataCategories = Array.from(new Set(data.map((item) => item.series)))

  // Loop through each category
  dataCategories.forEach((series) => {
    const categoryData = []

    // Create the datapoints for this category
    data
      .filter((item) => item.series == series)
      .map((dataPoint) => {
        categoryData.push({
          x: dataPoint.order,
          y: dataPoint.value,
        })
      })

    // Append category to the series data
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
  const colorMode = useColorMode()
  const [data, setData] = useState()
  const [series, setSeries] = useState()

  props.data.then((result) => {
    setData(result)
  })

  useEffect(() => {
    if (data) {
      setSeries(createSeries(data, props.column))
    }
  }, [data])

  return (
    // Only renders in the browser
    <BrowserOnly fallback={<div>Chart not supported</div>}>
      {() => {
        const Chart = require('react-apexcharts').default
        if (series) {
          return (
            <Chart
              options={createOptions(props.column, colorMode.colorMode)}
              series={series}
              type="line"
              height="320"
            />
          )
        }
        // Fallback if the data isn't yet loaded
        return <div>Loading data...</div>
      }}
    </BrowserOnly>
  )
}
