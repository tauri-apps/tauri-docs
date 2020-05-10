import Mermaid from './Mermaid'
import React from 'react'

export default () => {
  const chart = `
  graph LR
      U-->JS
      JS-->B
      B-->BUILD
      B-->DEV
      DEV==>DBG
      BUILD-->BND
      BND==>WIN
      U(HTML<BR>CSS<BR>JS)
      JS(tauri.js)
      style JS stroke:#77CFE4,stroke-width:4px
      WIN[WebView<br>in container]
      B{tauri core<br>CLI}
      style B stroke:#D08050,stroke-width:4px
      BND((tauri<br>bundler))
      style BND stroke:#EFD3AF, stroke-width:4px
      DBG[WebView:Debug<br>with HMR]
  `
  return <Mermaid chart={chart} />
}
