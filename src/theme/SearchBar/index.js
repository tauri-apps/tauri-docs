import React, { useEffect } from 'react'
import './style.css'

export default function Component() {
  useEffect(() => {
    const DocsSearchBar = require('docs-searchbar.js').default

    DocsSearchBar({
      hostUrl: 'https://ms-4ebb96f179f0-1619.fra.meilisearch.io',
      apiKey:
        '3eb6db150af1abefe000f00386e149dfb5a006932cab55d1ccd810b8672a4e12',
      indexUid: 'docs-v1',
      inputSelector: '#search-bar-input',
      debug: process.env.NODE_ENV === 'development',
    })
  }, [])

  return (
    <input
      type="search"
      id="search-bar-input"
      className="navbar__search navbar__search-input"
      placeholder="Search"
    />
  )
}
