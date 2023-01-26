import React, { useEffect } from 'react'
import './style.css'

export default function Component() {
  useEffect(() => {
    const DocsSearchBar = require('docs-searchbar.js').default

    DocsSearchBar({
      hostUrl: 'https://ms-0fcdc03da8a1-1619.fra.meilisearch.io',
      apiKey:
        '3d2bbfaafc279147240ad562ee4d212437f1e78f0470bfab36690f0ba3a36958',
      indexUid: 'docs-v1',
      inputSelector: '#search-bar-input',
      debug: true,
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
