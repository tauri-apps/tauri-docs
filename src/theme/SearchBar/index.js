import React, { useEffect } from 'react'
import './style.css'

export default function Component() {
  useEffect(() => {
    const DocsSearchBar = require('docs-searchbar.js').default

    DocsSearchBar({
      hostUrl: 'https://tauri.search.studio',
      apiKey:
        'XZEH8BS90ee09c45215a8421c06857bcbde5c1a6797bdf4859a57a3ac1228a2b81df0994',
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
