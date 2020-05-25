import Mermaid from './Mermaid'
import React from 'react'

export default () => {
  const chart = `
  graph TD
      U-->JS
      JS-->B
      B-->BUILD
      B-->DEV
      DEV==>DBG
      BUILD-->BND
      BND==>WIN
      U(HTML<br>CSS<br>JS)
      JS(Tauri Node<br>CLI)
      style JS stroke:#77CFE4,stroke-width:4px
      WIN[Installer for<br>target platform]
      B{Tauri Core<br>CLI}
      style B stroke:#D08050,stroke-width:4px
      BND((Tauri<br>Bundler))
      style BND stroke:#EFD3AF, stroke-width:4px
      DBG[WebView:Debug<br>with HMR]
  `
  return <div style={{overflow: 'auto'}}><Mermaid chart={chart} /></div>
}
