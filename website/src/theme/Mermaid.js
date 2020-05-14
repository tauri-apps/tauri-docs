import React, { useEffect } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: true,
})

const Mermaid = ({ chart }) => {
  useEffect(() => {
    mermaid.contentLoaded()
  }, [])
  return <div className="mermaid">{chart}</div>
}

export default Mermaid

export const colors = {
  blue: {
    light: '#abd0f9',
    dark: '#1D81EE',
  },
  orange: {
    light: '#fad3a9',
    dark: '#F28918',
  },
}
