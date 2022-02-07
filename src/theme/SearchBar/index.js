import React, { useEffect } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useThemeContext from '@theme/hooks/useThemeContext'
import './styles.css'

const SearchBar = () => {
  const context = useDocusaurusContext()
  const { isDarkTheme } = useThemeContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    const docsSearchBar = require('docs-searchbar.js').default
    docsSearchBar({
      hostUrl: 'https://search2.tauri.studio',
      apiKey:
        'XZEH8BS90ee09c45215a8421c06857bcbde5c1a6797bdf4859a57a3ac1228a2b81df0994',
      indexUid: 'consolidated',
      inputSelector: '#search-bar-input',
      enableDarkMode: isDarkTheme,
    })
  }, [isDarkTheme])

  return (
    <div className={'navbar__search'}>
      <input
        placeholder="Search"
        type="search"
        id="search-bar-input"
        className="navbar__search-input"
      />
    </div>
  )
}

export default SearchBar
