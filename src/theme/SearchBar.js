import React, { useEffect } from 'react'
import classNames from 'classnames'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'

const SearchBar = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  useEffect(() => {
    const docsSearchBar = require('docs-searchbar.js').default
    docsSearchBar({
      hostUrl: 'https://search.tauri.studio',
      apiKey:
        'ea0105f56bb5a2111ed28c7a0c637fc0bed07273f571dc7cb1f73900e44f8e7f',
      indexUid: siteConfig.themeConfig.version.trim().replace(/\W/g, '_'),
      inputSelector: '#search-bar-input',
      enableDarkMode: 'auto'
    })
  }, [])
  return (
    <div class='navbar__search'>
      <input
        placeholder="Search"
        type="search"
        id="search-bar-input"
        class="navbar__search-input"
      />
    </div>
  )
}

export default SearchBar
