// How much to multiply time values in order to process log graphs properly.
const TimeScaleFactor = 10000

export function reshape(data) {
  return {
    sha1List: data.map((d) => d.sha1),
    execTime: createColumns(data, 'exec_time'),
    binarySize: createBinarySizeColumns(data),
    maxMemory: createColumns(data, 'max_memory'),
    threadCount: createThreadCountColumns(data),
    syscallCount: createSyscallCountColumns(data),
    cargoDeps: createColumns1(data, 'cargo_deps'),
  }
}

export function formatMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2)
}

export function formatLogScale(t) {
  return (Math.pow(10, t) / TimeScaleFactor).toFixed(4)
}

export function logScale(columns) {
  for (const col of columns) {
    for (let i = 0; i < col.data.length; i++) {
      if (col.data[i] == null || col.data[i] === 0) {
        continue
      }
      col.data[i] = Math.log10(Number(col.data[i]) * TimeScaleFactor)
    }
  }
}

function getBenchmarkVarieties(data, benchmarkName) {
  // Look at last sha hash.
  const last = data[data.length - 1]
  return Object.keys(last[benchmarkName] ?? {})
}

function createColumns(data, benchmarkName) {
  const varieties = getBenchmarkVarieties(data, benchmarkName)
  return varieties.map((variety) => ({
    name: variety,
    data: data.map((d) => {
      if (d[benchmarkName] != null) {
        const b = d[benchmarkName]
        if (b[variety] != null) {
          const v = b[variety]
          if (benchmarkName === 'benchmark') {
            const meanValue = v ? v.mean : 0
            return meanValue || null
          } else {
            return v
          }
        }
      }
      return null
    }),
  }))
}

function createBinarySizeColumns(data) {
  const propName = 'binary_size'
  const last = data[data.length - 1]
  const binarySizeNames = Object.keys(last[propName])
  return binarySizeNames.map((name) => ({
    name,
    data: data.map((d) => {
      const binarySizeData = d['binary_size']
      if (!binarySizeData) {
        return null
      }
      return binarySizeData[name] || null
    }),
  }))
}

function createThreadCountColumns(data) {
  const propName = 'thread_count'
  const last = data[data.length - 1]
  const threadCountNames = Object.keys(last[propName])
  return threadCountNames.map((name) => ({
    name,
    data: data.map((d) => {
      const threadCountData = d[propName]
      if (!threadCountData) {
        return null
      }
      return threadCountData[name] || null
    }),
  }))
}

function createSyscallCountColumns(data) {
  const propName = 'syscall_count'
  const syscallCountNames = Object.keys(data[data.length - 1][propName])
  return syscallCountNames.map((name) => ({
    name,
    data: data.map((d) => {
      const syscallCountData = d[propName]
      if (!syscallCountData) {
        return null
      }
      return syscallCountData[name] || null
    }),
  }))
}

// For columns that have just a single variety
function createColumns1(data, benchmarkName) {
  return [
    {
      name: benchmarkName,
      data: data.map((d) =>
        d[benchmarkName] ? Number(d[benchmarkName]) : null
      ),
    },
  ]
}
