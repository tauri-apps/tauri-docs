import React, { useEffect } from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'
import './searchbar.css'

export default function Component() {
  const { isDarkTheme } = useColorMode()
  useEffect(() => {
    const DocsSearchBar = require('docs-searchbar.js').default

    DocsSearchBar({
      hostUrl: 'https://search2.tauri.studio',
      apiKey:
        'XZEH8BS90ee09c45215a8421c06857bcbde5c1a6797bdf4859a57a3ac1228a2b81df0994',
      indexUid: 'consolidated',
      inputSelector: '.search-bar-input',
      debug: process.env.NODE_ENV === 'development',
      enableDarkMode: isDarkTheme,
      enhancedSearchInput: true,
    })
  }, [])

  return (
    <div>
      <input className="search-bar-input" />
    </div>
  )
}
