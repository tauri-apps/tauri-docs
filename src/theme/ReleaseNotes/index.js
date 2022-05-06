import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function App(props) {
  const [releaseNotes, setReleaseNotes] = useState()

  fetch(props.url)
    .then((response) => response.text())
    .then((result) => {
      result = result
        .split('## ')
        .filter((item) => !item.includes('# Changelog'))
        .map((version) => {
          const [number, ...contents] = version.split('\n')
          return {
            number: number.replace('\\[', '').replace(']', ''),
            notes: contents,
          }
        })
        .filter(({ number }) => !number.includes('Not Published'))

      setReleaseNotes(result)
    })

  return (
    <BrowserOnly fallback={<div>Release notes not supported</div>}>
      {() => {
        if (!releaseNotes) {
          return <h2>Loading release notes...</h2>
        }
        return (
          <div>
            {releaseNotes.map((version) => (
              <details>
                <summary>{version.number}</summary>
                <p>{version.notes}</p>
                {/* <ReactMarkdown>{note}</ReactMarkdown> */}
              </details>
            ))}
          </div>
        )
      }}
    </BrowserOnly>
  )
}
