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
        'ea0105f56bb5a2111ed28c7a0c637fc0bed07273f571dc7cb1f73900e44f8e7f',
      indexUid: 'consolidated',
      inputSelector: '#search-bar-input',
      enableDarkMode: isDarkTheme
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
